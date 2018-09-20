import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostPageComponentComponent } from './lost-page-component.component';

describe('LostPageComponentComponent', () => {
  let component: LostPageComponentComponent;
  let fixture: ComponentFixture<LostPageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostPageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
