import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinecardDetailComponent } from './machinecard-detail.component';

describe('MachinecardDetailComponent', () => {
  let component: MachinecardDetailComponent;
  let fixture: ComponentFixture<MachinecardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachinecardDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinecardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
