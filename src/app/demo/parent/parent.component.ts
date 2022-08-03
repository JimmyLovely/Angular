import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

    simpleValue: string = '';
    secondSimpleValue: string = '';

    constructor() { }

    ngOnInit(): void {
    }

    changeMultipleValue() {
        // the secondSimpleValue will be listed in SimpleChanges at 1st lifecyle
        this.simpleValue = `${this.simpleValue}1`;

        // the secondSimpleValue will be listed in SimpleChanges at 2nd lifecyle
        setTimeout(() => {
            this.secondSimpleValue = `${this.secondSimpleValue}1`;
        });
    }

}
