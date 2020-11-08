import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Payment } from '../models/payment.model';

@Injectable({
  providedIn: 'root'
})
export class DbService implements InMemoryDbService {

  constructor() { }

  createDb(): any {

    const payments: Payment[] =  [
      {  id:  1,  name: 'Music', dayCost: 100, months: [1, 5, 11] },
      {  id:  2,  name: 'Internet', dayCost: 400, months: [3, 5, 6, 8] },
      {  id:  3,  name: 'Phone', dayCost: 250, months: [7] },
      {  id:  4,  name: 'Netflix', dayCost: 666, months: [2, 4, 10] }
    ];

    return { payments };

  }
}
