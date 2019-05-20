import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenWatchesComponent } from './men-watches.component';

describe('MenWatchesComponent', () => {
  let component: MenWatchesComponent;
  let fixture: ComponentFixture<MenWatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenWatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenWatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
