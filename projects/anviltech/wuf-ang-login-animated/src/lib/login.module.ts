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
import { FormsModule } from '@angular/forms';

/**
 * 3rd Party Imports
 * Import 3rd party modules and components here
 */
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { KgLayoutService } from '@anviltech/wuf-ang-layout';

/**
 * Imports
 * Import local components and services used by the module here
 */
import { KgLoginComponent } from './login.component';
import { KgLoginService } from './login.service';

/**
 * Export
 * Export components and services used by the module here
 */
export { KgLoginService } from './login.service';
export { KgLoginComponent } from './login.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule
    ],
    declarations: [
        // List all components and modules used in this module
        KgLoginComponent
    ],
    exports: [
        // List all components and modules to be exported here
        KgLoginComponent
    ]
})
export class KgLoginModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: KgLoginModule,
            providers: [
                // Add any services used by this module to the providers collection
                KgLayoutService,
                KgLoginService
            ]
        };
    }
}
