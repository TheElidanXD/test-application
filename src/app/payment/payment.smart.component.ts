import { Component, OnInit } from '@angular/core';

import { PaymentDatasource } from '../datasources/payment.datasource';
import { Payment } from '../models/payment.model';

@Component({
  selector: 'app-payment-smart',
  template: `
      <app-payment-presentation
        [payments]="payments"
        [isDataLoaded]="isDataLoaded"
        (monthsSelectionChanged)="onMonthsSelectionChanged($event)"
        (paymentCreated)="onPaymentCreated($event)"
        (paymentRemoved)="onPaymentRemoved($event)"
      ></app-payment-presentation>`,
})
export class PaymentSmartComponent implements OnInit {

  payments: Payment[];

  isDataLoaded = false;

  constructor(private paymentDatasource: PaymentDatasource) { }

  ngOnInit(): void {
    this.getPayments();
  }

  getPayments(): void {
    this.isDataLoaded = false;
    this.paymentDatasource.getPayments().subscribe(response => {
      if (response) {
        this.payments = response;
        this.isDataLoaded = true;
      }
    });
  }

  onMonthsSelectionChanged(payment: Payment): void {
    this.paymentDatasource.updatePayment(payment).subscribe(() => {
      this.isDataLoaded = true;
    });
  }

  onPaymentCreated(payment: Payment): void {
    this.isDataLoaded = false;
    this.paymentDatasource.createPayment(payment).subscribe(response => {
      if (response) {
        this.getPayments();
      }
    });
  }

  onPaymentRemoved(id: number): void {
    this.isDataLoaded = false;
    this.paymentDatasource.removePayment(id).subscribe(response => {
        this.getPayments();
    });
  }
}
