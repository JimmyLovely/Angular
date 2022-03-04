import { Component, OnInit } from '@angular/core';

// Service
import { FooTwoService } from './service/foo-two.service';
import { FooFourService } from '../second/service/foo-four.service';

@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

    constructor(
        private fooTwoService: FooTwoService,
        private fooFourService: FooFourService
    ) { }

    ngOnInit(): void {
        this.fooFourService.sayHi();
        this.fooTwoService.sayHi();
    }

}
