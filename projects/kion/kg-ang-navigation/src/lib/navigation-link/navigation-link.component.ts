/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, Input, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';

import { KgSidebarService } from '@kion/kg-ang-layout';


@Component({
    selector: 'kg-navigation-link',
    styleUrls: ['navigation-link.component.scss'],
    templateUrl: 'navigation-link.component.html',
    encapsulation: ViewEncapsulation.Emulated
})
export class KgNavigationLinkComponent implements OnInit, AfterViewInit {
    @Input() link: string;
    @Input() label: string;
    @Input() icon: string;
    @Input() id: string;
    @Input() links: any;
    @Input() activeOptions?: any = { exact: true };
    @Input() position?: string = 'left';
    @Input() iconPosition?: string = 'left';

    @ViewChild('parentNavItem') parentNavItem: any;

    isExpanded: boolean;

    constructor(public kgSidebarService: KgSidebarService) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
    }

    private getIsExpanded() {
        const expanded = (this.parentNavItem.nativeElement.classList.contains('expanded')) ? true : false;
        return expanded;
    }

    toggleCollapse() {
        this.isExpanded = !this.getIsExpanded();
    }

}
