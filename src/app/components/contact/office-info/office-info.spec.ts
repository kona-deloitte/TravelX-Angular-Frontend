import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeInfo } from './office-info';

describe('OfficeInfo', () => {
  let component: OfficeInfo;
  let fixture: ComponentFixture<OfficeInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficeInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
