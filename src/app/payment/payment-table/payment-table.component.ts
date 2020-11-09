import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import * as moment from 'moment';

import { Payment } from '../../models/payment.model';
import { PaymentTextKeys } from '../payment-text-keys';

@Component({
  selector: 'app-payment-table',
  templateUrl: './payment-table.component.html',
  styleUrls: ['./payment-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentTableComponent {
  /**
   * Text keys
   */
  readonly paymentTextKeys: typeof PaymentTextKeys = PaymentTextKeys;

  /**
   * Array of months
   */
  months: string[] = moment.monthsShort();

  /**
   * Array of displayed columns
   */
  displayedColumns: string[] = ['name', 'cost', ...this.months, 'remove'];

  /**
   * Array of payments
   */
  @Input()
  payments: Payment[];

  /**
   * Event emitter for months selection changing
   */
  @Output()
  monthsSelectionChanged = new EventEmitter<Payment>();

  /**
   * Event emitter for payment removing
   */
  @Output()
  paymentRemoved = new EventEmitter<number>();

  /**
   * Month select handler
   * @param payment
   * @param selectedMonth
   * @param event
   */
  onSelect(payment: Payment, selectedMonth: number, event: any): void {
    if (event.checked) {
      payment.months.push(selectedMonth);
    } else {
      payment.months = payment.months.filter(month => month !== selectedMonth);
    }
    this.monthsSelectionChanged.emit(payment);
  }

  /**
   * Removes payment
   * @param payment
   */
  removePayment(payment: Payment): void {
    this.paymentRemoved.emit(payment.id);
  }
}
