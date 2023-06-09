import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobRoleComponent } from './add-job-role.component';

describe('AddJobRoleComponent', () => {
  let component: AddJobRoleComponent;
  let fixture: ComponentFixture<AddJobRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJobRoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddJobRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
