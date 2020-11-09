import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AddPaymentComponent } from './add-payment/add-payment.component';
import { PaymentPresentationComponent } from './payment.presentation.component';
import { PaymentDatasource } from '../datasources/payment.datasource';
import { PaymentTableComponent } from './payment-table/payment-table.component';
import { PaymentSmartComponent } from './payment.smart.component';
import { PaymentCalculatorComponent } from './payment-calculator/payment-calculator.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AddPaymentComponent,
    PaymentPresentationComponent,
    PaymentTableComponent,
    PaymentSmartComponent,
    PaymentCalculatorComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCheckboxModule,
    MatCardModule,
    MatProgressSpinnerModule,
    SharedModule
  ],
  providers: [
    PaymentDatasource
  ],
  exports: [
    PaymentPresentationComponent,
    PaymentSmartComponent
  ]
})
export class PaymentModule { }
