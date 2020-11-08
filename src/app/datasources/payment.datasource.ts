import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Payment } from '../models/payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentDatasource {

  private readonly SERVER_URL = 'http://localhost:8080/api/payments';

  constructor(private httpClient: HttpClient) { }

  getPayments(): Observable<Payment[]> {
    return this.httpClient.get(this.SERVER_URL) as Observable<Payment[]>;
  }

  createPayment(payment: any): Observable<Payment> {
    return this.httpClient.post(this.SERVER_URL, payment) as Observable<Payment>;
  }

  updatePayment(payment: Payment): Observable<Payment> {
    return this.httpClient.put(`${this.SERVER_URL}/${payment.id}`, payment) as Observable<Payment>;
  }

  removePayment(id: number): Observable<any> {
    return this.httpClient.delete(`${this.SERVER_URL}/${id}`) as Observable<any>;
  }
}
