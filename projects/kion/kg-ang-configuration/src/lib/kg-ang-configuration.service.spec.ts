/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { TestBed } from '@angular/core/testing';

import { KgConfigurationService } from './kg-ang-configuration.service';


describe('KgConfigurationService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should create', () => {
        const service: KgConfigurationService = TestBed.get(KgConfigurationService);
        expect(service).toBeTruthy();
    });
});
