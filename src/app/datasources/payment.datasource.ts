import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Payment } from '../models/payment.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentDatasource {

  private serverUrl = `${environment.serverUrl}/payments`;

  constructor(private httpClient: HttpClient) { }

  /**
   * Gets payments
   */
  getPayments(): Observable<Payment[]> {
    return this.httpClient.get<Payment[]>(this.serverUrl);
  }

  /**
   * Creates payment
   */
  createPayment(payment: any): Observable<Payment> {
    return this.httpClient.post<Payment>(this.serverUrl, payment);
  }

  /**
   * Updates selected months of payment
   */
  updatePayment(payment: Payment): Observable<Payment> {
    return this.httpClient.put<Payment>(`${this.serverUrl}/${payment.id}`, payment);
  }

  /**
   * Removes payment
   */
  removePayment(id: number): Observable<any> {
    return this.httpClient.delete(`${this.serverUrl}/${id}`);
  }
}
