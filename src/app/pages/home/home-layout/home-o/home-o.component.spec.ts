import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOComponent } from './home-o.component';

describe('HomeOComponent', () => {
  let component: HomeOComponent;
  let fixture: ComponentFixture<HomeOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
