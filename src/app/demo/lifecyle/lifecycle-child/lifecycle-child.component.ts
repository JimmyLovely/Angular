import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SimpleObject } from 'src/app/model/simple-object';

@Component({
    selector: 'app-lifecycle-child',
    templateUrl: './lifecycle-child.component.html',
    styleUrls: ['./lifecycle-child.component.scss']
})
export class LifecycleChildComponent implements OnInit {

    @Input() childSimpleValue: string = 'child';
    @Input() childSimpleObject: SimpleObject = new SimpleObject();
    @Input() childSimpleObject$: Observable<SimpleObject> = of(new SimpleObject());

    innerSimpleObject: SimpleObject = new SimpleObject();
    innerValue: string = '';

    @ViewChild('inputDemo') inputDemoElement: ElementRef<HTMLInputElement>;

    constructor() {
        this.log('constructor');
    }

    ngOnInit(): void {
        this.log('OnInit');
        this.childSimpleObject$.subscribe(x => {
            this.innerSimpleObject = x;
        })
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
        return window.console.log('child ', message);
    }

    changeTheColorOfElement() {
        this.inputDemoElement.nativeElement.style.color = 'red';
    }

}
