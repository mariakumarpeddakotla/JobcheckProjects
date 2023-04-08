import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDataSkillsComponent } from './master-data-skills.component';

describe('MasterDataSkillsComponent', () => {
  let component: MasterDataSkillsComponent;
  let fixture: ComponentFixture<MasterDataSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterDataSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterDataSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
