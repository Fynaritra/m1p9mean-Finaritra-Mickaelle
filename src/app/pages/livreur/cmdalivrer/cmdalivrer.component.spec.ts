import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdalivrerComponent } from './cmdalivrer.component';

describe('CmdalivrerComponent', () => {
  let component: CmdalivrerComponent;
  let fixture: ComponentFixture<CmdalivrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmdalivrerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmdalivrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
