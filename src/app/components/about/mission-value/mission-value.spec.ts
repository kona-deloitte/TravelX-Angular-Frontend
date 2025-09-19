import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionValue } from './mission-value';

describe('MissionValue', () => {
  let component: MissionValue;
  let fixture: ComponentFixture<MissionValue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionValue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionValue);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
