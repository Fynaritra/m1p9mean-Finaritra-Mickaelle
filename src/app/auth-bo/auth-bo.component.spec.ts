import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthBOComponent } from './auth-bo.component';

describe('AuthBOComponent', () => {
  let component: AuthBOComponent;
  let fixture: ComponentFixture<AuthBOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthBOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthBOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
