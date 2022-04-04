import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseBOComponent } from './analyse-bo.component';

describe('AnalyseBOComponent', () => {
  let component: AnalyseBOComponent;
  let fixture: ComponentFixture<AnalyseBOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyseBOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyseBOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
