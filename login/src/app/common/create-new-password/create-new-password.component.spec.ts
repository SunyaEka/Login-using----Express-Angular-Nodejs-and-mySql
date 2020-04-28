import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewPasswordComponent } from './create-new-password.component';

describe('CreateNewPasswordComponent', () => {
  let component: CreateNewPasswordComponent;
  let fixture: ComponentFixture<CreateNewPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
