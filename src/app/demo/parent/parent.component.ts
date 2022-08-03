import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

    simpleValue: string = '';

    constructor() { }

    ngOnInit(): void {
        this.simpleValue = '12';
    }

}
