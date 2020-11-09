import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Payment } from '../models/payment.model';

@Component({
  selector: 'app-payment-presentation',
  templateUrl: './payment.presentation.component.html',
  styleUrls: ['./payment.presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentPresentationComponent {
  /**
   * Array of payments
   */
  @Input() payments: Payment[];

  /**
   * Is data loaded flag
   */
  @Input() isDataLoaded: boolean;

  /**
   * Event emitter for months selection changing
   */
  @Output()
  monthsSelectionChanged = new EventEmitter<Payment>();

  /**
   * Event emitter for payment creating
   */
  @Output()
  paymentCreated = new EventEmitter<Payment>();

  /**
   * Event emitter for payment removing
   */
  @Output()
  paymentRemoved = new EventEmitter<number>();

}
