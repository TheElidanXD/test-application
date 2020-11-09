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
  /**
   * Array of payments
   */
  payments: Payment[];

  /**
   * Is data loaded flag
   */
  isDataLoaded = false;

  constructor(private paymentDatasource: PaymentDatasource) { }

  /**
   * On init hook
   */
  ngOnInit(): void {
    this.getPayments();
  }

  /**
   * Gets payments
   */
  getPayments(): void {
    this.isDataLoaded = false;
    this.paymentDatasource.getPayments().subscribe(response => {
      if (response) {
        this.payments = response;
        this.isDataLoaded = true;
      }
    });
  }

  /**
   * Updates selected months of payment
   */
  onMonthsSelectionChanged(payment: Payment): void {
    this.paymentDatasource.updatePayment(payment).subscribe(() => {});
  }

  /**
   * Creates payment
   */
  onPaymentCreated(payment: Payment): void {
    this.isDataLoaded = false;
    this.paymentDatasource.createPayment(payment).subscribe(response => {
      if (response) {
        this.getPayments();
      }
    });
  }

  /**
   * Removes payment
   */
  onPaymentRemoved(id: number): void {
    this.isDataLoaded = false;
    this.paymentDatasource.removePayment(id).subscribe(response => {
        this.getPayments();
    });
  }
}
