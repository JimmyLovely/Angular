import { TestBed } from '@angular/core/testing';

import { FooOneService } from './foo-one.service';

describe('FooOneService', () => {
    let service: FooOneService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(FooOneService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
