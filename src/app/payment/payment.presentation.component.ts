import {Component, EventEmitter, Input, Output} from '@angular/core';

import { Payment } from '../models/payment.model';

@Component({
  selector: 'app-payment-presentation',
  templateUrl: './payment.presentation.component.html',
  styleUrls: ['./payment.presentation.component.scss']
})
export class PaymentPresentationComponent {

  @Input() payments: Payment[];

  @Input() isDataLoaded: boolean;

  @Output()
  monthsSelectionChanged = new EventEmitter<Payment>();

  @Output()
  paymentCreated = new EventEmitter<Payment>();

  @Output()
  paymentRemoved = new EventEmitter<number>();

}
