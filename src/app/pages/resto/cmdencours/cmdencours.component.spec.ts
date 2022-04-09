import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdencoursComponent } from './cmdencours.component';

describe('CmdencoursComponent', () => {
  let component: CmdencoursComponent;
  let fixture: ComponentFixture<CmdencoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmdencoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmdencoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
