import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

// Model
import { SimpleObject } from 'src/app/model/simple-object';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {
    @Input() childSimpleValue: string = '';
    @Input() childSecondSimpleValue: string = '';
    @Input() childSimpleObjectValue: SimpleObject = new SimpleObject();
    @Input() childSimpleObjectValueName: string = '';

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

        // 1. If the input property is an object, if the value of object's property is changed in parent component, the value will be refreshed in child component.
        //      But the SimpleChange (Object) will `NOT` be triggerd
        // 2. SimpleChange (object) is only triggered when the `reference of object` is changed in `parent component`
        if (changes['childSimpleObjectValue']) {
            window.console.log('childSimpleObjectValue', changes['childSimpleObjectValue']);
        }

        // bind the object's property as a `new` Input property
        if (changes['childSimpleObjectValueName']) {
            window.console.log('childSimpleObjectValue.Name', changes['childSimpleObjectValueName']);
        }
    }

    changeInnerValue() {
        this.innerSimpleValue = this.innerSimpleValueSubject;
        this.childSimpleValue = this.innerSimpleValueSubject;
    }


}
