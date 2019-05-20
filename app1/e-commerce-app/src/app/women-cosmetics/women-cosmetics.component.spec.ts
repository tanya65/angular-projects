import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenCosmeticsComponent } from './women-cosmetics.component';

describe('WomenCosmeticsComponent', () => {
  let component: WomenCosmeticsComponent;
  let fixture: ComponentFixture<WomenCosmeticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenCosmeticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenCosmeticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
