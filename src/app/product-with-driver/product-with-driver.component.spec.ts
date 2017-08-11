import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWithDriverComponent } from './product-with-driver.component';

describe('ProductWithDriverComponent', () => {
  let component: ProductWithDriverComponent;
  let fixture: ComponentFixture<ProductWithDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductWithDriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductWithDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
