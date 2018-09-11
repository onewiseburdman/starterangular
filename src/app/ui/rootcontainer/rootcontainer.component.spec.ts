import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootcontainerComponent } from './rootcontainer.component';

describe('RootcontainerComponent', () => {
  let component: RootcontainerComponent;
  let fixture: ComponentFixture<RootcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
