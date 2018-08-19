import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRepeatFormsComponent } from './view-repeat-forms.component';

describe('ViewRepeatFormsComponent', () => {
  let component: ViewRepeatFormsComponent;
  let fixture: ComponentFixture<ViewRepeatFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRepeatFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRepeatFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
