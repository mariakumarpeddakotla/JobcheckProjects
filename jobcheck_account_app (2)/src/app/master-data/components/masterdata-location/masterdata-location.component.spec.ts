import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterdataLocationComponent } from './masterdata-location.component';

describe('MasterdataLocationComponent', () => {
  let component: MasterdataLocationComponent;
  let fixture: ComponentFixture<MasterdataLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterdataLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterdataLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
