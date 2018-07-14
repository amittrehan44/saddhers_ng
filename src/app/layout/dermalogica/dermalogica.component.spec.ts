import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DermalogicaComponent } from './dermalogica.component';

describe('DermalogicaComponent', () => {
  let component: DermalogicaComponent;
  let fixture: ComponentFixture<DermalogicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DermalogicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DermalogicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
