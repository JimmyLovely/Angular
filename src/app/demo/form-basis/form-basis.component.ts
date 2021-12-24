import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-form-basis',
    templateUrl: './form-basis.component.html',
    styleUrls: ['./form-basis.component.css']
})
export class FormBasisComponent implements OnInit {

    public data: string = 'hello';

    constructor() { }

    ngOnInit(): void {
    }

}
