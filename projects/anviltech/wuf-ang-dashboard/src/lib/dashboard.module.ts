/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

/**
 * Angular imports
 * Import angular stuff here
 */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/**
 * 3rd Party Imports
 * Import 3rd party modules and components here
 */

/**
 * Imports
 * Import local components and services used by the module here
 */
import { KgDashboardComponent } from './dashboard/dashboard.component';
import { KpiDisplayComponent } from './_internal/kpi/kpi-display.component';
import { KpiValueComponent } from './_internal/kpi-value/kpi-value.component';
import { KgDashboardService } from './_internal/dashboard.service';
import { KgKpiComponent } from './kpi/kpi.component';

/**
 * Export
 * Export components and services used by the module here
 */
export { KgDashboardComponent } from './dashboard/dashboard.component';
export { KgKpiComponent } from './kpi/kpi.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        // List all components and modules used in this module
        KgDashboardComponent,
        KpiDisplayComponent,
        KpiValueComponent,
        KgKpiComponent
    ],
    exports: [
        // List all components and modules to be exported here
        KgDashboardComponent,
        KgKpiComponent
    ]
})
export class KgDashboardModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: KgDashboardModule,
            providers: [
                // Add any services used by this module to the providers collection
                KgDashboardService
            ]
        };
    }
}
