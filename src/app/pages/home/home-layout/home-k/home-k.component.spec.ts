import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeKComponent } from './home-k.component';

describe('HomeKComponent', () => {
  let component: HomeKComponent;
  let fixture: ComponentFixture<HomeKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
