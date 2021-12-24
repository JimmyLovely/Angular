import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBasisComponent } from './form-basis.component';

describe('FormBasisComponent', () => {
  let component: FormBasisComponent;
  let fixture: ComponentFixture<FormBasisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBasisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
