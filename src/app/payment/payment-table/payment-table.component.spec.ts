import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTableComponent } from './payment-table.component';
import { Payment } from '../../models/payment.model';

describe('PaymentTableComponent', () => {
  let component: PaymentTableComponent;
  let fixture: ComponentFixture<PaymentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select or deselect payment month', () => {
    const payment = {name: 'test', dayCost: 2, months: [1, 2]} as Payment;
    const spy = spyOn(component.monthsSelectionChanged, 'emit');
    component.onSelect(payment, 3, {checked: true});
    expect(payment.months).toEqual([1, 2, 3]);
    component.onSelect(payment, 2, {checked: false});
    expect(spy).toHaveBeenCalled();
  });

  it('should remove payment', () => {
    const spy = spyOn(component.paymentRemoved, 'emit');
    component.removePayment({id: 3} as Payment);
    expect(spy).toHaveBeenCalled();
  });
});
