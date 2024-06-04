import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListoParaAyudarteComponent } from './listo-para-ayudarte.component';

describe('ListoParaAyudarteComponent', () => {
  let component: ListoParaAyudarteComponent;
  let fixture: ComponentFixture<ListoParaAyudarteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListoParaAyudarteComponent]
    });
    fixture = TestBed.createComponent(ListoParaAyudarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
