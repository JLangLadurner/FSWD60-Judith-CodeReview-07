import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantNumbersPageComponent } from './important-numbers-page.component';

describe('ImportantNumbersPageComponent', () => {
  let component: ImportantNumbersPageComponent;
  let fixture: ComponentFixture<ImportantNumbersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportantNumbersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportantNumbersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
