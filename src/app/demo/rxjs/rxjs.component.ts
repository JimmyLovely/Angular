import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, Observable, of } from "rxjs";

// Model
import { IVm } from 'src/app/model/vm';

// Service
import { IVmService } from "../../service/i-vm.service";

@Component({
    selector: 'app-rxjs',
    templateUrl: './rxjs.component.html',
    styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

    private vms: IVm[];

    private vms1$: Observable<IVm[]>;

    constructor(
        private vmService: IVmService
    ) { }

    ngOnInit(): void {
        this.vms = this.vmService.getAllWithOutObservable();
    }

    // creation with of
    createWithOf(): void {
        this.vms1$ = of(this.vms);

        this.vms1$.subscribe(vms => {
            window.console.log(vms);
            debugger;

        }, error=> {
            window.console.log(error);
        }, () => {
            window.console.log('complete');
        });
    }

    // creation with interval
    createWithInterval(): void {
        const valueForInterval: Observable<Number> = interval(1000);

        valueForInterval.subscribe(n => {
            window.console.log(n);
        })
    }

    // creation with from
    // createWithFrom(): void {
    // TBD
    // }

    createWithFromEvent(): void {
        const testElement = document.querySelector('#test');

        const inputChangeEvent$ = fromEvent(testElement, 'change');
        const inputChangeEventSubScription = inputChangeEvent$.subscribe((inputEvent: Event) => {
            window.console.log(inputEvent.currentTarget['value']);
            if (inputEvent.currentTarget['value'] === 'cancel') {
                inputChangeEventSubScription.unsubscribe();
            }
        })
    }
}
