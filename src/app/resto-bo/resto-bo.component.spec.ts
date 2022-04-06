import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoBoComponent } from './resto-bo.component';

describe('RestoBoComponent', () => {
  let component: RestoBoComponent;
  let fixture: ComponentFixture<RestoBoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoBoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoBoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
