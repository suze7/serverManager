import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProgressbarComponent } from './my-progressbar.component';

describe('MyProgressbarComponent', () => {
  let component: MyProgressbarComponent;
  let fixture: ComponentFixture<MyProgressbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProgressbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
