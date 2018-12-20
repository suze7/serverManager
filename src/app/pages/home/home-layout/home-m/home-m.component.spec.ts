import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMComponent } from './home-m.component';

describe('HomeMComponent', () => {
  let component: HomeMComponent;
  let fixture: ComponentFixture<HomeMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
