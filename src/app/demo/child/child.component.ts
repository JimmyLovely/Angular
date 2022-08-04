import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DeepObject } from 'src/app/model/deep-object';

// Model
import { SimpleObject } from 'src/app/model/simple-object';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {

    // SimpleChange
    @Input() childSimpleValue: string = '';
    @Input() childSecondSimpleValue: string = '';
    @Input() childSimpleObjectValue: SimpleObject = new SimpleObject();
    @Input() childArraySimpleValue: string[] = [];

    @Input() childDeepObjectValue: DeepObject = new DeepObject();

    @Input() childSimpleObjectValueName: string = '';

    // It's a good solution to detect the valueChange of object's property instead of adding a input for property of object
    // If the property of object is changed, SimpleChange will NOT be triggered. but input (observable) will be triggered if the `next` method is invoked
    @Input('childSimpleObjecObservable') childSimpleObjectValue$: BehaviorSubject<SimpleObject>;

    innerSimpleValueSubject: string = '';
    innerSimpleValue: string = '';

    constructor() { }

    ngOnInit(): void {
        this.childSimpleObjectValue$.subscribe(childSimpleObjectValue => {
            window.console.log('childSimpleObjectValue', childSimpleObjectValue);
        })
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
        //      But the SimpleChange (Object) will `NOT` be triggered
        // 2. SimpleChange (object) is only triggered when the `reference of object` is changed in `parent component`
        if (changes['childSimpleObjectValue']) {
            window.console.log('childSimpleObjectValue', changes['childSimpleObjectValue']);
        }

        // 1. bind the object's property as a `new` Input property
        // 2. this is NOT a good solution,
        //      2.1. if the value is changed in child component, the value will also be changed in parent component
        //      and then, SimpleChange (object property) will be triggered
        //      2.2. avoid changing the value in child componet, or only add some logic in firstChange
        // 3. use observable (property) instead of this
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

        // 1. the key of SimpleChange is property name, it's NOT bindingPropertyName
        // 2. SimpleChange (observable) is only triggered `one time`
        //      If the value is changed, the `reference of observable` is not changed
        if(changes['childSimpleObjectValue$']) {
            window.console.log('childSimpleObjectValue$', changes['childSimpleObjectValue$']);
        }
    }

    changeInnerValue() {
        this.innerSimpleValue = this.innerSimpleValueSubject;
        this.childSimpleValue = this.innerSimpleValueSubject;
    }


}
