import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostViewComponent } from './lost-view-component.component';

describe('LostViewComponentComponent', () => {
  let component: LostViewComponent;
  let fixture: ComponentFixture<LostViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
