import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicPageGrandchildComponent } from './dynamic-page-grandchild.component';

describe('DynamicPageGrandchildComponent', () => {
  let component: DynamicPageGrandchildComponent;
  let fixture: ComponentFixture<DynamicPageGrandchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicPageGrandchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicPageGrandchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
