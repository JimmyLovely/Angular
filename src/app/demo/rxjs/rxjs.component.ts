import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, fromEvent, interval, Observable, of, pipe, range } from "rxjs";
import { catchError, filter, map, retry, take, tap } from 'rxjs/operators';
import { ajax, AjaxResponse } from 'rxjs/ajax';

// Model
import { IVm } from 'src/app/model/vm';

// Service
import { IVmService } from "../../service/i-vm.service";

@Component({
    selector: 'app-rxjs',
    templateUrl: './rxjs.component.html',
    styleUrls: ['./rxjs.component.scss']
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

    mapAndTap() {
        const maps$ = of(1, 2, 3, 4);

        maps$.pipe(
            map(x => {
                return x = x + 3;
            }),
            filter(x => {
                return true;
            })
        ).subscribe(foos => {
            window.console.log(foos);
        })

        const mapsWithArray$ = of([1, 2, 3, 4]);
        mapsWithArray$.pipe(
            map(x => {
                return x.length;
            }),
            filter(x => {
                return true;
            })
        ).subscribe(foos => {
            window.console.log(foos);
        })

        const taps$ = of(1, 2, 3, 4);

        taps$.pipe(
            tap(x => {
                return x = x + 3;
            }),
            filter(x => {
                return true;
            })
        ).subscribe(foos => {
            window.console.log(foos);
        })

        const tapsWithArray$ = of([1, 2, 3, 4]);
        tapsWithArray$.pipe(
            tap(x => {
                return x.length;
            }),
            filter(x => {
                return true;
            })
        ).subscribe(foos => {
            window.console.log(foos);
        })
    }

    multipleObservers() {
        // the pipe is only used to deal with the observable sequences, it's better to deal with javascript data in subscribe method.
        // If you change the javascript data (array map or observable map), the changes will effect other obserber(s).
        let firstObserver = this.vms$.pipe(
            map(x => x.map(x => {
                x.count = x.count * 3;
                return x;
            })),
            take(1)
        ).subscribe(x => {
            window.console.log(x);
        })

        let secondObserver = this.vms$.pipe(
            map(x => x.map(x => {
                window.console.log(x.count);
                return x;
            }))
        ).subscribe(x => {
            window.console.log(x);
        })

        let thirdObserver = this.vms$.subscribe(x => {
            window.console.log(x);
        });


        let valueTypeWithSubject = new BehaviorSubject<IVm>(this.vms[0]);
        let valueType$ = valueTypeWithSubject.asObservable();

        let firstObserverWithValueType = valueType$.pipe(
            map(x => {
                x.count = x.count * 3;
                return x;
            })
        ).subscribe(x => {
            window.console.log('firstObserverWithValueType', x);
        })

        let secondObserverWithValueType = valueType$.pipe(
            map(x => {
                return x;
            })
        ).subscribe(x => {
            window.console.log('secondObserverWithValueType', x);
        })

        // next and unsubscribe methods could be inovked by Subject only. Observable has no these methods.
        valueTypeWithSubject.next(this.vms[1]);
        valueTypeWithSubject.unsubscribe();

        let thirdObserverWithValueType = valueType$.subscribe(x => {
            window.console.log('thirdObserverWithValueType', x);
        });

        let fourthObserverWithValueType = valueTypeWithSubject.subscribe(x => {
            window.console.log('fourthObserverWithValueType', x);
        });
    }
}
