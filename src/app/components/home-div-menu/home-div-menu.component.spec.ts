import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDivMenuComponent } from './home-div-menu.component';

describe('HomeDivMenuComponent', () => {
  let component: HomeDivMenuComponent;
  let fixture: ComponentFixture<HomeDivMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDivMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDivMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
