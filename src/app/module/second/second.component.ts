import { Component, OnInit } from '@angular/core';

// Service
import { FooOneService } from "../first/service/foo-one.service";
import { FooThreeService } from "../second/service/foo-three.service";

@Component({
    selector: 'app-second',
    templateUrl: './second.component.html',
    styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

    constructor(
        private fooOneService: FooOneService,
        private fooThreeService: FooThreeService
    ) { }

    ngOnInit(): void {
        this.fooOneService.sayHi();
        this.fooThreeService.sayHi();
    }

}
