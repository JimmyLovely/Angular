import { TestBed } from '@angular/core/testing';

import { FooTwoService } from './foo-two.service';

describe('FooTwoService', () => {
    let service: FooTwoService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(FooTwoService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
