import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillratingComponent } from './skillrating.component';

describe('SkillratingComponent', () => {
  let component: SkillratingComponent;
  let fixture: ComponentFixture<SkillratingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillratingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
