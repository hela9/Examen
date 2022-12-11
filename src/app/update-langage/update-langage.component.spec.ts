import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLangageComponent } from './update-langage.component';

describe('UpdateLangageComponent', () => {
  let component: UpdateLangageComponent;
  let fixture: ComponentFixture<UpdateLangageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLangageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLangageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
