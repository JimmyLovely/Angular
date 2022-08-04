import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DeepObject } from 'src/app/model/deep-object';

// Model
import { SimpleObject } from 'src/app/model/simple-object';

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

    // SimpleChange
    simpleValue: string = '';
    secondSimpleValue: string = '';
    arraySimpleValue: string[] = [];
    arraySimpleValueSubject: string = '';

    simpleObjectValue: SimpleObject = new SimpleObject();

    deepObjectValue: DeepObject = new DeepObject();

    simpleObjectValueSubject: SimpleObject = new SimpleObject();
    simpleObjectValue$: BehaviorSubject<SimpleObject> = new BehaviorSubject<SimpleObject>(this.simpleObjectValueSubject);

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

    ChangeSimpleObject() {
        this.simpleObjectValue = new SimpleObject();
    }

    changeArraySimpleValue() {
        this.arraySimpleValue.push(this.arraySimpleValueSubject);
    }

    changeArraySimpleValueObject() {
        this.arraySimpleValue = [this.arraySimpleValueSubject];
    }

    ChangeObjectProperty() {
        const previousObjectProperty = this.deepObjectValue.objectProperty;
        this.deepObjectValue.objectProperty = null;
        this.deepObjectValue.objectProperty = new SimpleObject();
        this.deepObjectValue.objectProperty.name = 'new name';

        window.console.log(previousObjectProperty);
        window.console.log(previousObjectProperty === this.deepObjectValue.objectProperty);
    }

    ChangeArrayObjectProperty() {
        const firstSimpleObject = new SimpleObject();
        firstSimpleObject.name = '1';
        firstSimpleObject.age = 1;

        const secondSimpleObject = new SimpleObject();
        secondSimpleObject.name = '2';
        secondSimpleObject.age = 2;

        this.deepObjectValue.arrayObjectProperty.push(firstSimpleObject, secondSimpleObject);
    }

    ChangeSimpleObjectPropertyWithObservable() {
        this.simpleObjectValue$.value.age = 10;
        this.simpleObjectValue$.next(this.simpleObjectValue$.value);

        const simpleObjectValue = new SimpleObject();
        simpleObjectValue.name = 'new object';
        simpleObjectValue.age = 1;

        this.simpleObjectValue$.next(simpleObjectValue);
    }


}
