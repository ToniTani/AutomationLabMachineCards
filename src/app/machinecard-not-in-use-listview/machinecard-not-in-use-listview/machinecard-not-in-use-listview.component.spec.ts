import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinecardNotInUseListviewComponent } from './machinecard-not-in-use-listview.component';

describe('MachinecardNotInUseListviewComponent', () => {
  let component: MachinecardNotInUseListviewComponent;
  let fixture: ComponentFixture<MachinecardNotInUseListviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachinecardNotInUseListviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinecardNotInUseListviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
