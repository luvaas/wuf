import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { KgSmartTableCell, KgSmartTableDefaultEditor, KgSmartTableEditor } from '@kion/kg-ang-smart-table';

// import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';


@Component({
    styles: [`
        .validation-error {
            margin-bottom: 0;
            font-size: 12px;
            padding: 0.5rem 0.5rem;
            border-radius: 0px 0px 4px 4px;
            position: absolute;
            bottom: -29px;
            left: 0;
            width: 100%;
        }

        .error {
            border-color: var(--kg-color-danger)
        }
    `],
    template: `
        <mat-form-field class="example-full-width">
            <input matInput
                   type="text"
                   matInput
                   class="form-control"
                   [ngClass]="{'error': cell.getValidator().errors &&  !cell.getValidator().pristine}"
                   [(ngModel)]="cell.newValue"
                   [formControl]="cell.getValidator()" placeholder="ID">

            <div *ngIf="cell.getValidator().errors && !cell.getValidator().pristine">
                <div *ngIf="cell.getValidator().errors.required " class="alert alert-danger validation-error"
                     role="alert">
                    ID is required.
                </div>
            </div>
        </mat-form-field>
    `
})
export class CustomEditorForIDValidationSmartTable extends KgSmartTableDefaultEditor implements AfterViewInit {
    // editor definition

    ngAfterViewInit() {
    }
}