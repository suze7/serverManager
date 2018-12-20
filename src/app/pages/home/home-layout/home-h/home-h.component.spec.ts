import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHComponent } from './home-h.component';

describe('HomeHComponent', () => {
  let component: HomeHComponent;
  let fixture: ComponentFixture<HomeHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
