import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheplatComponent } from './ficheplat.component';

describe('FicheplatComponent', () => {
  let component: FicheplatComponent;
  let fixture: ComponentFixture<FicheplatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheplatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheplatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
