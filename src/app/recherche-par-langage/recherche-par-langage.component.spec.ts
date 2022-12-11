import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParLangageComponent } from './recherche-par-langage.component';

describe('RechercheParLangageComponent', () => {
  let component: RechercheParLangageComponent;
  let fixture: ComponentFixture<RechercheParLangageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheParLangageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheParLangageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
