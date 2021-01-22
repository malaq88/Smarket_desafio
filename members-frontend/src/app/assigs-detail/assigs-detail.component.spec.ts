import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigsDetailComponent } from './assigs-detail.component';

describe('AssigsDetailComponent', () => {
  let component: AssigsDetailComponent;
  let fixture: ComponentFixture<AssigsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssigsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
