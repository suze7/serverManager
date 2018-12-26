import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeJComponent } from './home-j.component';

describe('HomeJComponent', () => {
  let component: HomeJComponent;
  let fixture: ComponentFixture<HomeJComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeJComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
