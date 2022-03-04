import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FooOneService {

    constructor() { }

    public sayHi(): void {
        window.console.log('foo one service');
    }
}
