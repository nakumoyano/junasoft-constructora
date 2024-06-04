import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorqueElegirnosComponent } from './porque-elegirnos.component';

describe('PorqueElegirnosComponent', () => {
  let component: PorqueElegirnosComponent;
  let fixture: ComponentFixture<PorqueElegirnosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PorqueElegirnosComponent]
    });
    fixture = TestBed.createComponent(PorqueElegirnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
