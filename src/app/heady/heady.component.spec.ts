import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadyComponent } from './heady.component';

describe('HeadyComponent', () => {
  let component: HeadyComponent;
  let fixture: ComponentFixture<HeadyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
