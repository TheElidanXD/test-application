import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

import { Payment } from '../../models/payment.model';

@Component({
  selector: 'app-payment-table',
  templateUrl: './payment-table.component.html',
  styleUrls: ['./payment-table.component.scss']
})
export class PaymentTableComponent {
  months: string[] = moment.monthsShort();
  displayedColumns: string[] = ['name', 'cost', ...this.months, 'remove'];

  @Input()
  payments: Payment[];

  @Output()
  monthsSelectionChanged = new EventEmitter<Payment>();

  @Output()
  paymentRemoved = new EventEmitter<number>();

  constructor() { }

  onSelect(payment: Payment, selectedMonth: number, event: any): void {
    if (event.checked) {
      payment.months.push(selectedMonth);
    } else {
      payment.months = payment.months.filter(month => month !== selectedMonth);
    }
    this.monthsSelectionChanged.emit(payment);
  }

  removePayment(payment: Payment): void {
    this.paymentRemoved.emit(payment.id);
  }
}
