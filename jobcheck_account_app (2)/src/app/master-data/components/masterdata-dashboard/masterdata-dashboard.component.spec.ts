import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterdataDashboardComponent } from './masterdata-dashboard.component';

describe('MasterdataDashboardComponent', () => {
  let component: MasterdataDashboardComponent;
  let fixture: ComponentFixture<MasterdataDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterdataDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterdataDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
