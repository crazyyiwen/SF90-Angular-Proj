import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateTestChildComponent } from './template-test-child.component';

describe('TemplateTestChildComponent', () => {
  let component: TemplateTestChildComponent;
  let fixture: ComponentFixture<TemplateTestChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateTestChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateTestChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
