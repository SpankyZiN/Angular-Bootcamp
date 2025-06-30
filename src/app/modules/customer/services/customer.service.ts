import { Injectable } from "@angular/core";
import { HttpClient }  from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customerList: any[] = [];

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<any> {
    return this.http.get('http://54.173.20.225:8080/api/Customer');
  }

  saveCustomer(customer: any): Observable<any> {
    return this.http.post('http://54.173.20.225:8080/api/Customer', customer);
  }

  get getCustomer(): any[] {
    console.log("funciona")
    return this.customerList;
  }
}
