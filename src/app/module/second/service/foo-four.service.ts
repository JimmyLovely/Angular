import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FooFourService {

    constructor() { }

    public sayHi(): void {
        window.console.log('foo four service');
    }
}
