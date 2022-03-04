import { Injectable } from '@angular/core';

// Service
import { FooFourService } from '../../second/service/foo-four.service';

@Injectable({
    providedIn: 'root'
})
export class FooTwoService {

    constructor(
        private fooFourService: FooFourService
    ) { }

    public sayHi(): void {
        window.console.log('foo two service');
        this.fooFourService.sayHi();
    }
}
