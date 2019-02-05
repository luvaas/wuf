/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { KgLoginService } from './login.service';


@Component({
    selector: 'kg-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class KgLoginComponent implements OnInit {

    constructor(public loginService: KgLoginService) {
    }

    ngOnInit() {
    }

    onFormSubmit() {
        this.loginService.login();
    }
}
