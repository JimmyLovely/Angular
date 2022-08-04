import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DeepObject } from 'src/app/model/deep-object';

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
    @Input() childArraySimpleValue: string[] = [];

    @Input() childDeepObjectValue: DeepObject = new DeepObject();

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

        // 1. if the input property is an object, if the value of object's property is changed in parent component, the value will be refreshed in child component.
        //      But the SimpleChange (Object) will `NOT` be triggerd
        // 2. SimpleChange (object) is only triggered when the `reference of object` is changed in `parent component`
        if (changes['childSimpleObjectValue']) {
            window.console.log('childSimpleObjectValue', changes['childSimpleObjectValue']);
        }

        // bind the object's property as a `new` Input property
        if (changes['childSimpleObjectValueName']) {
            window.console.log('childSimpleObjectValue.Name', changes['childSimpleObjectValueName']);
        }

        // array is a reference type, so SimpleChange (array) is only triggered when the `reference` is changed in `parent component`
        if (changes['childArraySimpleValue']) {
            window.console.log('childArraySimpleValue', changes['childArraySimpleValue']);
        }

        // for deep object, it's same with simple object
        // SimpleChange (deep object) is only triggered when the `reference of ROOT object` is changed in `parent component`
        // SimpleChange (deep object) is NOT triggered when change the `reference of nested object` in `parent component`
        if (changes['childDeepObjectValue']) {
            window.console.log('childDeepObjectValue', changes['childDeepObjectValue']);
        }
    }

    changeInnerValue() {
        this.innerSimpleValue = this.innerSimpleValueSubject;
        this.childSimpleValue = this.innerSimpleValueSubject;
    }


}
