import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeLangagesComponent } from './liste-langages.component';

describe('ListeLangagesComponent', () => {
  let component: ListeLangagesComponent;
  let fixture: ComponentFixture<ListeLangagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeLangagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeLangagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
