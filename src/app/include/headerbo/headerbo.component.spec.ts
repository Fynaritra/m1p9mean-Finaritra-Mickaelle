import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderboComponent } from './headerbo.component';

describe('HeaderboComponent', () => {
  let component: HeaderboComponent;
  let fixture: ComponentFixture<HeaderboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
