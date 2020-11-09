import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

import { Payment } from '../../models/payment.model';
import { PaymentTextKeys } from '../payment-text-keys';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddPaymentComponent implements OnInit {
  /**
   * Text keys
   */
  readonly paymentTextKeys: typeof PaymentTextKeys = PaymentTextKeys;

  /**
   * Payment form
   */
  paymentForm: FormGroup;

  /**
   * Event emitter for payment creating
   */
  @Output()
  paymentCreated = new EventEmitter<Payment>();

  /**
   * On init hook
   */
  ngOnInit(): void {
    this.paymentForm = new FormGroup({
      paymentName: new FormControl('', Validators.required),
      paymentCost: new FormControl(null, [Validators.required, Validators.min(1)])
    });
  }

  /**
   * Getter for payment name abstract control
   */
  get paymentName(): AbstractControl { return this.paymentForm.get('paymentName'); }

  /**
   * Getter for payment cost abstract control
   */
  get paymentCost(): AbstractControl { return this.paymentForm.get('paymentCost'); }

  /**
   * Creates payment
   */
  createPayment(): void {
    const payment = {
      name: this.paymentName.value,
      dayCost: this.paymentCost.value,
      months: []
    } as Payment;
    this.paymentCreated.emit(payment);
  }
}
