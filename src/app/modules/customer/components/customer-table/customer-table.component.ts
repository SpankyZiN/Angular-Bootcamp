import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TableModule} from "primeng/table";
import {Customer} from "../../store/customer.api"
import {ListEvent} from '../../../../shared/utils';

@Component({
  selector: 'app-customer-table',
    standalone: true, // <-- ¡AGREGAR ESTO!
  imports: [
    TableModule
  ],
  templateUrl: './customer-table.component.html',
  styleUrl: './customer-table.component.css'
})
export class CustomerTableComponent {

  _list: Customer[] = [];



  @Input() 
  set list(value: Customer[]) {
    this._list = value;
  }

  @Output() action = new EventEmitter<ListEvent>();

  constructor() {
  }

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
