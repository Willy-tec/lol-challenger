import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacityInfoComponent } from './capacity-info.component';

describe('CapacityInfoComponent', () => {
  let component: CapacityInfoComponent;
  let fixture: ComponentFixture<CapacityInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapacityInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapacityInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
