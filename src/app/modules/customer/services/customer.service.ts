import {Injectable} from '@angular/core';
import {Customer} from '../store/customer.api';

@Injectable()
export class CustomerService {


  private customerList: Customer[] = [
    {
      id: 1,
      name: 'Araceli',
      document: '123456'
    },
    {
      id: 2,
      name: ' Osvaldo',
      document: '123456'
    },
    {
      id: 3,
      name: 'Fabrizio',
      document: '123456'
    }
  ]

  get getCustomerList(): Customer[] {
    return this.customerList;
  }
}