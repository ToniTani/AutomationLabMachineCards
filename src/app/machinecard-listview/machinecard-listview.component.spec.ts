import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinecardListviewComponent } from './machinecard-listview.component';

describe('MachinecardListviewComponent', () => {
  let component: MachinecardListviewComponent;
  let fixture: ComponentFixture<MachinecardListviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachinecardListviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinecardListviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
