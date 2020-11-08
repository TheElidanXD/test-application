import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

import { Payment } from '../../models/payment.model';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.scss']
})
export class AddPaymentComponent implements OnInit {

  readonly requiredErrorMessage = 'This is required field';

  paymentForm: FormGroup;

  @Output()
  paymentCreated = new EventEmitter<Payment>();

  ngOnInit(): void {
    this.paymentForm = new FormGroup({
      paymentName: new FormControl('', Validators.required),
      paymentCost: new FormControl(null, [Validators.required, Validators.min(1)])
    });
  }

  get paymentName(): AbstractControl { return this.paymentForm.get('paymentName'); }

  get paymentCost(): AbstractControl { return this.paymentForm.get('paymentCost'); }

  createPayment(): void {
    const payment = {
      name: this.paymentName.value,
      dayCost: this.paymentCost.value,
      months: []
    } as Payment;
    this.paymentCreated.emit(payment);
  }
}
