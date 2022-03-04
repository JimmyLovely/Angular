import { TestBed } from '@angular/core/testing';

import { FooFourService } from './foo-four.service';

describe('FooFourService', () => {
    let service: FooFourService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(FooFourService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
