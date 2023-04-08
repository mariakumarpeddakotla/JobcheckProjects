import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingAndPreviewComponent } from './billing-and-preview.component';

describe('BillingAndPreviewComponent', () => {
  let component: BillingAndPreviewComponent;
  let fixture: ComponentFixture<BillingAndPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingAndPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillingAndPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
