import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeveloppeurComponent } from './update-developpeur.component';

describe('UpdateDeveloppeurComponent', () => {
  let component: UpdateDeveloppeurComponent;
  let fixture: ComponentFixture<UpdateDeveloppeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDeveloppeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDeveloppeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
