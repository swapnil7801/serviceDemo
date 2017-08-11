import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInSubsystemComponent } from './product-in-subsystem.component';

describe('ProductInSubsystemComponent', () => {
  let component: ProductInSubsystemComponent;
  let fixture: ComponentFixture<ProductInSubsystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductInSubsystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInSubsystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
