import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterdataJobroleComponent } from './masterdata-jobrole.component';

describe('MasterdataJobroleComponent', () => {
  let component: MasterdataJobroleComponent;
  let fixture: ComponentFixture<MasterdataJobroleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterdataJobroleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterdataJobroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
