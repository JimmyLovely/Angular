import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {
    @Input() childSimpleValue: string = '';

    constructor() { }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['childSimpleValue']) {
            window.console.table(changes['childSimpleValue']);
        }
    }


}
