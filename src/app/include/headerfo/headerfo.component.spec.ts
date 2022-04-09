import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderfoComponent } from './headerfo.component';

describe('HeaderfoComponent', () => {
  let component: HeaderfoComponent;
  let fixture: ComponentFixture<HeaderfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
