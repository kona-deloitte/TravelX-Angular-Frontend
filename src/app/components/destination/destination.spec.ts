// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { Destination } from './destination';

// describe('Destination', () => {
//   let component: Destination;
//   let fixture: ComponentFixture<Destination>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [Destination]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(Destination);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Destination } from './destination';

describe('DestinationComponent', () => {
  let component: Destination;
  let fixture: ComponentFixture<Destination>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Destination]
    }).compileComponents();

    fixture = TestBed.createComponent(Destination);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
