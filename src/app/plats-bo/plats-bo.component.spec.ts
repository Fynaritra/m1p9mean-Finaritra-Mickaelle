import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatsBOComponent } from './plats-bo.component';

describe('PlatsBOComponent', () => {
  let component: PlatsBOComponent;
  let fixture: ComponentFixture<PlatsBOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatsBOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatsBOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
