import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNComponent } from './home-n.component';

describe('HomeNComponent', () => {
  let component: HomeNComponent;
  let fixture: ComponentFixture<HomeNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
