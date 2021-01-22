import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAssigComponent } from './new-assig.component';

describe('NewAssigComponent', () => {
  let component: NewAssigComponent;
  let fixture: ComponentFixture<NewAssigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAssigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAssigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
