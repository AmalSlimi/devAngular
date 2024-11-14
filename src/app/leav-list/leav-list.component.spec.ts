import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavListComponent } from './leav-list.component';

describe('LeavListComponent', () => {
  let component: LeavListComponent;
  let fixture: ComponentFixture<LeavListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeavListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
