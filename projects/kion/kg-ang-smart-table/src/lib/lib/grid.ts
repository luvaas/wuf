/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import {Subject, Observable} from 'rxjs';
import {EventEmitter} from '@angular/core';

import {Deferred, getDeepFromObject} from './helpers';
import {Column} from './data-set/column';
import {Row} from './data-set/row';
import {DataSet} from './data-set/data-set';
import {DataSource} from './data-source/data-source';
import {KgSmartTableValidatorService} from './validator.service';

export class Grid {

    createFormShown: boolean = false;

    source: DataSource;
    settings: any;
    dataSet: DataSet;
    isLoading: boolean = false;
    isLoaded: boolean = false;
    selectOnLoad: boolean = false;

    onSelectRowSource = new Subject<any>();

    constructor(source: DataSource, settings: any, validator: KgSmartTableValidatorService) {
        this.setSettings(settings, validator);
        this.setSource(source);
    }

    showActionColumn(position: string): boolean {
        return this.isCurrentActionsPosition(position) && this.isActionsVisible();
    }

    isCurrentActionsPosition(position: string): boolean {
        return position == this.getSetting('actions.position');
    }

    isActionsVisible(): boolean {
        return this.getSetting('actions.add') || this.getSetting('actions.edit') || this.getSetting('actions.delete') || this.getSetting('actions.custom').length;
    }

    isMultiSelectVisible(): boolean {
        return this.getSetting('selectMode') === 'multi';
    }

    getNewRow(): Row {
        return this.dataSet.newRow;
    }

    setSettings(settings: Object, validator: KgSmartTableValidatorService) {
        this.settings = settings;
        this.createFormShown = this.getSetting('add.createFormShownAlways') || this.getSetting('add.createFormShownInitial');
        this.dataSet = new DataSet([], this.getSetting('columns'), validator);

        if (this.source) {
            this.source.refresh();
        }
    }

    getDataSet(): DataSet {
        return this.dataSet;
    }

    setSource(source: DataSource) {
        this.source = this.prepareSource(source);

        this.source.onChanged().subscribe((changes) => this.processDataChange(changes));

        this.source.onUpdated().subscribe((data) => {
            let changedRow: any;
            changedRow = this.dataSet.findRowByData(data);
            changedRow.setData(data);
        });
    }

    getSetting(name: string, defaultValue?: any): any {
        return getDeepFromObject(this.settings, name, defaultValue);
    }

    getColumns(): Array<Column> {
        return this.dataSet.getColumns();
    }

    getRows(): Array<Row> {
        return this.dataSet.getRows();
    }

    selectRow(row: Row) {
        this.dataSet.selectRow(row);
    }

    multipleSelectRow(row: Row) {
        this.dataSet.multipleSelectRow(row);
    }

    onSelectRow(): Observable<any> {
        return this.onSelectRowSource.asObservable();
    }

    edit(row: Row) {
        row.isInEditing = true;
    }

    create(row: Row, confirmEmitter: EventEmitter<any>) {

        const deferred = new Deferred();
        deferred.promise.then((newData) => {
            newData = newData ? newData : row.getNewData();
            if (deferred.resolve.skipAdd) {
        if(!this.getSetting('add.createFormShownAlways'))
                    this.createFormShown = false;
            } else {
                this.insert(newData);
            }
        }).catch((err) => {
            // doing nothing
        });

        if (this.getSetting('add.confirmCreate')) {
            confirmEmitter.emit({
                newData: row.getNewData(),
                source: this.source,
                confirm: deferred,
                validator: this.dataSet.newRowValidator,
            });
        } else {
            if (this.dataSet.newRowValidator.invalid)
                deferred.reject();
            else
                deferred.resolve();
        }
    }

    insert(newData: any) {
        (<any>this.source)[this.getSetting('add.insertMethod')](newData).then(() => {
            if (!this.getSetting('add.createFormShownAlways'))
                this.createFormShown = false;
            this.dataSet.addInsertedRowValidator();
            this.dataSet.createNewRow();
        });

    }

    save(row: Row, confirmEmitter: EventEmitter<any>) {

        const deferred = new Deferred();
        deferred.promise.then((newData) => {
            newData = newData ? newData : row.getNewData();
            if (deferred.resolve.skipEdit) {
                row.isInEditing = false;
            } else {
                this.source.update(row.getData(), newData).then(() => {
                    row.isInEditing = false;
                    this.dataSet.newRowValidator.reset();
                });
            }
        }).catch((err) => {
            // doing nothing
        });

        if (this.getSetting('edit.confirmSave')) {
            confirmEmitter.emit({
                data: row.getData(),
                newData: row.getNewData(),
                source: this.source,
                confirm: deferred,
                validator: this.dataSet.getRowValidator(row.index),
            });
        } else {
            if (this.dataSet.getRowValidator(row.index).invalid)
                deferred.reject();
            else
                deferred.resolve();
        }
    }

    delete(row: Row, confirmEmitter: EventEmitter<any>) {

        const deferred = new Deferred();
        deferred.promise.then(() => {
            this.source.remove(row.getData());
            this.dataSet.editRowValidators = this.dataSet.editRowValidators.splice(row.index, 1);
        }).catch((err) => {
            // doing nothing
        });

        if (this.getSetting('delete.confirmDelete')) {
            confirmEmitter.emit({
                data: row.getData(),
                source: this.source,
                confirm: deferred
            });
        } else {
            deferred.resolve();
        }
    }

    processDataChange(changes: any) {
        if (this.shouldProcessChange(changes)) {
            this.dataSet.setData(changes['elements']);
            if (this.getSetting('selectMode') !== 'multi') {
                const row = this.determineRowToSelect(changes);

                if (row) {
                    this.onSelectRowSource.next(row);
                }
            }
        } else if (this.shouldUpdateState(changes)) {
            if (['loading'].indexOf(changes['action']) !== -1) {
                this.isLoading = true;
                this.isLoaded = false;
            }
            if (['loaded'].indexOf(changes['action']) !== -1) {
                this.isLoading = false;
                this.isLoaded = true;
            }
        }
    }

    shouldUpdateState(changes: any): boolean {
        if (['loading', 'loaded'].indexOf(changes['action']) !== -1) {
            return true;
        }

        return false;
    }

    shouldProcessChange(changes: any): boolean {
        if (['filter', 'sort', 'page', 'remove', 'refresh', 'load', 'paging'].indexOf(changes['action']) !== -1) {
            return true;
        } else if (['prepend', 'append'].indexOf(changes['action']) !== -1 && !this.getSetting('pager.display')) {
            return true;
        }

        return false;
    }

    // TODO: move to selectable? Separate directive
    determineRowToSelect(changes: any): Row | undefined {

        if (this.selectOnLoad && ['load', 'page', 'filter', 'sort', 'refresh'].indexOf(changes['action']) !== -1) {
            return this.dataSet.select();
        }
        if (changes['action'] === 'remove') {
            if (changes['elements'].length === 0) {
                // we have to store which one to select as the data will be reloaded
                this.dataSet.willSelectLastRow();
            } else {
                return this.dataSet.selectPreviousRow();
            }
        }
        if (changes['action'] === 'append') {
            // we have to store which one to select as the data will be reloaded
            this.dataSet.willSelectLastRow();
        }
        if (changes['action'] === 'add') {
            return this.dataSet.selectFirstRow();
        }
        if (changes['action'] === 'update') {
            return this.dataSet.selectFirstRow();
        }
        if (changes['action'] === 'prepend') {
            // we have to store which one to select as the data will be reloaded
            this.dataSet.willSelectFirstRow();
        }
        return;
    }

    prepareSource(source: any): DataSource {
        const initialSource: any = this.getInitialSort();
        if (initialSource && initialSource['field'] && initialSource['direction']) {
            source.setSort([initialSource], false);
        }
        if (this.getSetting('pager.display') === true) {
            source.setPaging(1, this.getSetting('pager.perPage'), false);
        }

        source.refresh();
        return source;
    }

    getInitialSort() {
        const sortConf: any = {};
        this.getColumns().forEach((column: Column) => {
            if (column.isSortable && column.defaultSortDirection) {
                sortConf['field'] = column.id;
                sortConf['direction'] = column.defaultSortDirection;
                sortConf['compare'] = column.getCompareFunction();
            }
        });
        return sortConf;
    }

    getSelectedRows(): Array<any> {
        return this.dataSet.getRows()
            .filter(r => r.isSelected);
    }

    selectAllRows(status: any) {
        this.dataSet.getRows()
            .forEach(r => r.isSelected = status);
    }

    getFirstRow(): Row | undefined {
        return this.dataSet.getFirstRow();
    }

    getLastRow(): Row | undefined {
        return this.dataSet.getLastRow();
    }

}
