import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCalculatorComponent } from './payment-calculator.component';
import { Payment } from '../../models/payment.model';

describe('PaymentCalculatorComponent', () => {
  let component: PaymentCalculatorComponent;
  let fixture: ComponentFixture<PaymentCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate cost', () => {
    component.payments = [{name: 'test', dayCost: 2, months: [0]} as Payment];
    expect(component.calculateCost()).toEqual(62);
  });
});
