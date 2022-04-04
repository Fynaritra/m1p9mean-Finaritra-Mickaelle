import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersBOComponent } from './users-bo.component';

describe('UsersBOComponent', () => {
  let component: UsersBOComponent;
  let fixture: ComponentFixture<UsersBOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersBOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersBOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
