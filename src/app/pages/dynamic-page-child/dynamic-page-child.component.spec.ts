import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicPageChildComponent } from './dynamic-page-child.component';

describe('DynamicPageChildComponent', () => {
  let component: DynamicPageChildComponent;
  let fixture: ComponentFixture<DynamicPageChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicPageChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicPageChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
