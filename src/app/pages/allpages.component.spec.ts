import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpagesComponent } from './allpages.component';
import { HeaderboComponent } from '../include/headerbo/headerbo.component';

describe('AllpagesComponent', () => {
  let component: AllpagesComponent;
  let fixture: ComponentFixture<AllpagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllpagesComponent,
      HeaderboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
