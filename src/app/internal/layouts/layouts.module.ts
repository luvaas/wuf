/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { CUSTOM_ELEMENTS_SCHEMA, NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/***** Import WUF *****/
import { KgConfigurationService } from '@anviltech/wuf-ang-configuration';
import { KgLayoutModule } from '@anviltech/wuf-ang-layout';
import { KgDrawerModule } from '@anviltech/wuf-ang-drawer';
import { KgNavigationModule } from '@anviltech/wuf-ang-navigation';
import { KgLoginModule } from '@anviltech/wuf-ang-login-animated';

/***** 3rd Party *****/
import { MatTooltipModule } from '@angular/material';
import { CustomMaterialModule } from '../../internal/material.module';

/***** Local layout components *****/
import { LayoutMainComponent } from './main/main.component';
import { LayoutBasicComponent } from './basic/basic.component';

/***** Exports *****/
export { LayoutMainComponent } from './main/main.component';
export { LayoutBasicComponent } from './basic/basic.component';

@NgModule({
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    imports: [
        CommonModule,
        RouterModule,
        CustomMaterialModule,
        MatTooltipModule,

        // WUF
        KgLayoutModule,
        KgDrawerModule,
        KgNavigationModule,
        KgLoginModule
    ],
    declarations: [
        LayoutMainComponent,
        LayoutBasicComponent
    ]
})
export class LayoutsModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: LayoutsModule,
            providers: [
                // Add any services used by this module to the providers collection
                KgConfigurationService
            ]
        };
    }
}
