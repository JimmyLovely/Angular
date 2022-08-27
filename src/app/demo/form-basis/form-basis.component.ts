import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-form-basis',
    templateUrl: './form-basis.component.html',
    styleUrls: ['./form-basis.component.scss']
})
export class FormBasisComponent implements OnInit {

    data: string = 'hello';

    isShowData: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }

    toggleIsShowData() {
        this.isShowData = !this.isShowData;
    }

}
