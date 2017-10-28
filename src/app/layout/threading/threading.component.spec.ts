import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadingComponent } from './threading.component';

describe('ThreadingComponent', () => {
  let component: ThreadingComponent;
  let fixture: ComponentFixture<ThreadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
