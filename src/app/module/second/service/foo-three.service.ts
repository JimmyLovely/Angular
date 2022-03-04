import { Injectable } from '@angular/core';

// Service
import { FooOneService } from '../../first/service/foo-one.service';

@Injectable({
    providedIn: 'root'
})
export class FooThreeService {

    constructor(
        private fooOneService: FooOneService
    ) { }

    public sayHi(): void {
        window.console.log('foo three service');
        this.fooOneService.sayHi();
    }
}
