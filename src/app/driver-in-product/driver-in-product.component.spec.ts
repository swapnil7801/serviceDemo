import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverInProductComponent } from './driver-in-product.component';

describe('DriverInProductComponent', () => {
  let component: DriverInProductComponent;
  let fixture: ComponentFixture<DriverInProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverInProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverInProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
