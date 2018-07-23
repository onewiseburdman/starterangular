import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicPageGrandparentComponent } from './dynamic-page-grandparent.component';

describe('DynamicPageGrandparentComponent', () => {
  let component: DynamicPageGrandparentComponent;
  let fixture: ComponentFixture<DynamicPageGrandparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicPageGrandparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicPageGrandparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
