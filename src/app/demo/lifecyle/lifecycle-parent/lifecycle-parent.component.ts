import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SimpleObject } from 'src/app/model/simple-object';

@Component({
    selector: 'app-lifecycle-parent',
    templateUrl: './lifecycle-parent.component.html',
    styleUrls: ['./lifecycle-parent.component.scss']
})
export class LifecycleParentComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    parentSimpleValue: string = 'parent';
    parentSimpleObject: SimpleObject = new SimpleObject();

    tmpSimpleObject: SimpleObject = new SimpleObject();
    parentSimpleObjectSubject$: BehaviorSubject<SimpleObject> = new BehaviorSubject<SimpleObject>(new SimpleObject());
    parentSimpleObject$: Observable<SimpleObject> = this.parentSimpleObjectSubject$.asObservable();

    constructor() {
        this.log('constructor');
    }

    ngOnInit(): void {
        this.log('OnInit');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.log('ngOnChanges');
    }
    ngDoCheck(): void {
        this.log('ngDoCheck');
    }
    ngAfterContentInit(): void {
        this.log('ngAfterContentInit');
    }
    ngAfterContentChecked(): void {
        this.log('ngAfterContentChecked');
    }
    ngAfterViewInit(): void {
        this.log('ngAfterViewInit');
    }
    ngAfterViewChecked(): void {
        this.log('ngAfterViewChecked');
    }
    ngOnDestroy(): void {
        this.log('ngOnDestroy');
    }

    log(message: string) {
        return window.console.log('parent ', message);
    }

    updateSimpleObject() {
        this.parentSimpleObjectSubject$.next(this.tmpSimpleObject);
    }

}
