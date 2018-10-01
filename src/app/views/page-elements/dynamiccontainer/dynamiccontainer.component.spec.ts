import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { dynamiccontainerComponent } from './dynamiccontainer.component';

describe('dynamiccontainerComponent', () => {
  let component: dynamiccontainerComponent;
  let fixture: ComponentFixture<dynamiccontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ dynamiccontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(dynamiccontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
