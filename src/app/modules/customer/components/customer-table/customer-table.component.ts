import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TableModule} from "primeng/table";
import {Customer} from "../../store/customer.api"
import {ListEvent} from '../../../../shared/utils';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-table',
    standalone: true,
  imports: [
    TableModule
  ],
  templateUrl: './customer-table.component.html',
  styleUrl: './customer-table.component.css'
})
export class CustomerTableComponent {

  _list: Customer[] = [];

constructor( private customerService: CustomerService) {
}

  ngOnInit() {
    this.loadCustomers();
  }

  loadCustomers() {
    this.customerService.getCustomers().subscribe(
      (data: Customer[]) => {
        this._list = data;
      },
      (error) => {
        console.error('Error loading customers:', error);
      }
    );
  }

   @Input() list: Customer[] = [];

  @Output() action = new EventEmitter<ListEvent>();

  onRowClick(customer: any, event: any) {
    event.stopPropagation();
    this.action.emit(
      {
        type: "selected",
        value: customer
      }
    );
  }

  onEdit(customer: any, event: any) {
    event.stopPropagation();
    this.action.emit(
      {
        type: "edit",
        value: customer
      }
    );
  }


  onDelete(customer: any, event: any) {
    event.stopPropagation();
    this.action.emit(
      {
        type: "delete",
        value: customer
      }
    );
  }
}
