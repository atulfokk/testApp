import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibonaciComponent } from './fibonaci.component';

describe('FibonaciComponent', () => {
  let component: FibonaciComponent;
  let fixture: ComponentFixture<FibonaciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FibonaciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FibonaciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
