import {Component, Input} from '@angular/core';
import * as moment from 'moment';

import { Payment } from '../../models/payment.model';

@Component({
  selector: 'app-payment-calculator',
  templateUrl: './payment-calculator.component.html',
  styleUrls: ['./payment-calculator.component.scss']
})
export class PaymentCalculatorComponent {
  currentYear = moment().year();

  @Input() payments: Payment[];

  constructor() { }

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
