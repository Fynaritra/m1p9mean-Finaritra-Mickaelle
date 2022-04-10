import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivraisonclComponent } from './livraisoncl.component';

describe('LivraisonclComponent', () => {
  let component: LivraisonclComponent;
  let fixture: ComponentFixture<LivraisonclComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivraisonclComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivraisonclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
