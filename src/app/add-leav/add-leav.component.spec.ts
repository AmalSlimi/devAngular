import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeavComponent } from './add-leav.component';

describe('AddLeavComponent', () => {
  let component: AddLeavComponent;
  let fixture: ComponentFixture<AddLeavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLeavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLeavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
