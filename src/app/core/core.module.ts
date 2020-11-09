import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { DbService } from '../services/db.service';
import { PaymentModule } from '../payment/payment.module';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DbService, { put204: false }),
  ],
  exports: [
    PaymentModule
  ]
})
export class CoreModule { }
