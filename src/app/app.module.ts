import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DbService } from './services/db.service';

import { AppComponent } from './app.component';
import { PaymentModule } from './payment/payment.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    PaymentModule,
    InMemoryWebApiModule.forRoot(DbService, { put204: false })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
