import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderlibComponent } from './orderlib.component';

describe('OrderlibComponent', () => {
  let component: OrderlibComponent;
  let fixture: ComponentFixture<OrderlibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderlibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
