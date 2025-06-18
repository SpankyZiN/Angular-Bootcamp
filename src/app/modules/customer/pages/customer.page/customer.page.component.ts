import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../store/customer.api';
import { CustomerTableComponent } from '../../components/customer-table/customer-table.component';

@Component({
  selector: 'app-customer-page',
  standalone: true,
  imports: [CommonModule, CustomerTableComponent],
  templateUrl: './customer.page.component.html',
  styleUrls: ['./customer.page.component.css'],
})
export class CustomerPageComponent {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) {
    this.customers = this.customerService.getCustomerList;
  }

  onTableAction(event: any) {
    console.log("Evento desde el hijo:", event);
  }
}
