import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-i18n',
    templateUrl: './i18n.component.html',
    styleUrls: ['./i18n.component.css']
})
export class I18nComponent implements OnInit {

    public dateNow: Date = new Date();

    public amount: number = 12.01;

    public min: number = 1;

    constructor() { }

    ngOnInit(): void {
        window.console.log('init');
    }

}