/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
    selector: 'app-web-messages',
    templateUrl: './web-messages.component.html',
    styleUrls: ['./web-messages.component.scss']
})
export class WebMessagesComponent implements OnInit {
    @ViewChild('kgm') kgm: ElementRef;

    constructor() {
    }

    ngOnInit() {
    }

    onShowErrorMessageClick() {
        // console.log('KgWebMessagesComponent::onShowErrorMessageClick');
        this.kgm.nativeElement.errorMessage = `Danger, Will Robinson!`;
    }

    onShowInfoMessageClick() {
        // console.log('KgWebMessagesComponent::onShowInfoMessageClick');
        this.kgm.nativeElement.infoMessage = `Did you know that astronauts never snore? Sleep apnea can't happen without gravity!`;
    }

    onShowSuccessMessageClick() {
        // console.log('KgWebMessagesComponent::onShowSuccessMessageClick');
        this.kgm.nativeElement.successMessage = `I'm ok!`;
    }

    onShowWarningMessageClick() {
        // console.log('KgWebMessagesComponent::onShowWarningMessageClick');
        this.kgm.nativeElement.warningMessage = `The "check engine" light is on.`;
    }
}
