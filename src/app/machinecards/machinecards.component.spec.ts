import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinecardsComponent } from './machinecards.component';

describe('MachinecardsComponent', () => {
  let component: MachinecardsComponent;
  let fixture: ComponentFixture<MachinecardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachinecardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
