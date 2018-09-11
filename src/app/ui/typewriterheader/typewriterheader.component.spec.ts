import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypewriterheaderComponent } from './typewriterheader.component';

describe('TypewriterheaderComponent', () => {
  let component: TypewriterheaderComponent;
  let fixture: ComponentFixture<TypewriterheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypewriterheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypewriterheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
