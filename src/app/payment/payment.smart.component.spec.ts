import { PaymentSmartComponent } from './payment.smart.component';
import { PaymentDatasource } from '../datasources/payment.datasource';
import { of } from 'rxjs';
import { Payment } from '../models/payment.model';

describe('PaymentSmartComponent', () => {
  let component: PaymentSmartComponent;

  const payments = [{name: 'test', dayCost: 2} as Payment];

  const paymentDatasource = {
    getPayments: () => of(payments),
    updatePayment: (payment: Payment) => of({} as Payment),
    createPayment: (payment: Payment) => of({} as Payment),
    removePayment: (id: number) => of('test')
  } as PaymentDatasource;

  beforeEach(() => {
    component = new PaymentSmartComponent(paymentDatasource);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onInit and get payments', () => {
    component.ngOnInit();
    expect(component.payments).toEqual(payments);
  });

  it('should update payment', () => {
    const spy = spyOn(paymentDatasource, 'updatePayment').and.callThrough();
    component.onMonthsSelectionChanged({} as Payment);
    expect(spy).toHaveBeenCalled();
  });

  it('should create payment', () => {
    const spy = spyOn(component, 'getPayments');
    component.onPaymentCreated({} as Payment);
    expect(spy).toHaveBeenCalled();
  });

  it('should remove payment', () => {
    const spy = spyOn(component, 'getPayments');
    component.onPaymentRemoved(1);
    expect(spy).toHaveBeenCalled();
  });
});
