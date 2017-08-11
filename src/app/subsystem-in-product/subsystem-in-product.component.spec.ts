import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsystemInProductComponent } from './subsystem-in-product.component';

describe('SubsystemInProductComponent', () => {
  let component: SubsystemInProductComponent;
  let fixture: ComponentFixture<SubsystemInProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubsystemInProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsystemInProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
