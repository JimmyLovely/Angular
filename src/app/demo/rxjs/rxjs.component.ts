import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable, of, pipe, range } from "rxjs";
import { catchError, filter, map, retry } from 'rxjs/operators';
import { ajax, AjaxResponse } from 'rxjs/ajax';

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
    private vms$: Observable<IVm[]>;

    private vms1$: Observable<IVm[]>;

    constructor(
        private vmService: IVmService
    ) { }

    ngOnInit(): void {
        this.vms = this.vmService.getAllWithOutObservable();
        this.vms$ = this.vmService.getAll();
    }

    // creation with of
    createWithOf(): void {
        this.vms1$ = of(this.vms);

        this.vms1$.subscribe(vms => {
            window.console.log(vms);
            debugger;

        }, error => {
            window.console.log(error);
        }, () => {
            window.console.log('complete');
        });
    }

    // creation with interval
    createWithInterval(): void {
        const valueForInterval: Observable<number> = interval(1000);

        valueForInterval.subscribe(n => {
            window.console.log(n);
        })
    }

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

    // operation - map/filter
    operationWithMap(): void {
        const numbers$: Observable<number> = range(0, 10);

        const doubleWithMap = map((value: number) => value * 2);
        const oddWithFilter = filter((value: number) => value % 2 === 0);

        const pipeFilterAndMap = pipe(
            oddWithFilter,
            doubleWithMap
        );

        window.console.log('Step by step');
        pipeFilterAndMap(numbers$).subscribe((n: number) => {
            window.console.log(n);
        });

        window.console.log('chain');
        numbers$.pipe(
            map((value: number) => value * 2),
            filter((value: number) => value % 2 === 0)
        ).subscribe((n: number) => {
            window.console.log(n);
        });
    }

    // catch error
    catchErrorThings(): void {
        const apiData$ = ajax('/api/demo');

        apiData$.pipe(
            map((res: AjaxResponse) => {
                if (!res.response) {
                    throw new Error("Value expected!");
                } else {
                    return res.response;
                }
            }),
            retry(3),
            catchError((err, caught) => {
                return of({ err: err, caught: caught });
            })
        ).subscribe(response => {
            window.console.log(response);
        }, error => {
            window.console.log(error);
        }, () => {
            window.console.log('Complete');
        });
    }
}
