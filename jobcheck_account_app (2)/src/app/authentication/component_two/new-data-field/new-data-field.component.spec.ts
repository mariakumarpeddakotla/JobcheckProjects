import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDataFieldComponent } from './new-data-field.component';

describe('NewDataFieldComponent', () => {
  let component: NewDataFieldComponent;
  let fixture: ComponentFixture<NewDataFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDataFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDataFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
