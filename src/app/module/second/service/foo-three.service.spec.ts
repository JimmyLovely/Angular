import { TestBed } from '@angular/core/testing';

import { FooThreeService } from './foo-three.service';

describe('FooThreeService', () => {
    let service: FooThreeService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(FooThreeService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
