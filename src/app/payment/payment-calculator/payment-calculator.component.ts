import {Component, Input} from '@angular/core';
import * as moment from 'moment';

import { Payment } from '../../models/payment.model';
import { PaymentTextKeys } from '../payment-text-keys';

@Component({
  selector: 'app-payment-calculator',
  templateUrl: './payment-calculator.component.html',
  styleUrls: ['./payment-calculator.component.scss']
})
export class PaymentCalculatorComponent {
  /**
   * Text keys
   */
  readonly paymentTextKeys: typeof PaymentTextKeys = PaymentTextKeys;

  /**
   * Current year
   */
  currentYear = moment().year();

  /**
   * Array of payments
   */
  @Input() payments: Payment[];

  /**
   * Calculates the total costs for all payments
   * @return total cost
   */
  calculateCost(): number {
    if (this.payments) {
      let result = 0;
      this.payments.forEach(payment => {
        payment.months.forEach(month => {
          result += payment.dayCost * moment([this.currentYear, month]).daysInMonth();
        });
      });
      return result;
    } else {
      return 0;
    }
  }
}
