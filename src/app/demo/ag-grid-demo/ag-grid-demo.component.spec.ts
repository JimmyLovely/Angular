import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridDemoComponent } from './ag-grid-demo.component';

describe('AgGridDemoComponent', () => {
    let component: AgGridDemoComponent;
    let fixture: ComponentFixture<AgGridDemoComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AgGridDemoComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(AgGridDemoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
