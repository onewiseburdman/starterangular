import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicPageParentComponent } from './dynamic-page-parent.component';

describe('DynamicPageParentComponent', () => {
  let component: DynamicPageParentComponent;
  let fixture: ComponentFixture<DynamicPageParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicPageParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicPageParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
