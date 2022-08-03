import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {
    @Input() childSimpleValue: string = '';
    @Input() childSecondSimpleValue: string = '';

    innerSimpleValueSubject: string = '';
    innerSimpleValue: string = '';

    constructor() { }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['childSimpleValue']) {
            window.console.table(changes['childSimpleValue']);

            // isFirstChange only return true when the SimpleChange is invoked `first time`
            if (changes['childSimpleValue'].isFirstChange()) {
                window.console.log('first change');
            }
        }

        // only the changed properties are listed in SimpleChanges for one lifecycle
        if (changes['childSecondSimpleValue']) {
            window.console.table(changes['childSecondSimpleValue']);
        }

        // 1. SimpleChange is only available for `Input` property
        // 2. SimpleChange is only triggered when the value is changed in `parent component`
        //      if the value is changed in child component(internal), SimpleChange will not be triggered
        // 3. the previous value means the previous value changed by `parent component`
        //      if the value is changed in child component(internal), previous value is not refreshed
        if (changes['innerSimpleValue']) {
            window.console.log('innerSimpleValue changed');
        }
    }

    changeInnerValue() {
        this.innerSimpleValue = this.innerSimpleValueSubject;
        this.childSimpleValue = this.innerSimpleValueSubject;
    }


}
