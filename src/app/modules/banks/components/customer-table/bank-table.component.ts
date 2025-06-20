import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TableModule} from "primeng/table";
import {Customer} from "../../store/bank.api"
import {ListEvent} from '../../../../shared/utils';

@Component({
  selector: 'app-customer-table',
    standalone: true,
  imports: [
    TableModule
  ],
  templateUrl: './bank-table.component.html',
  styleUrl: './bank-table.component.css'
})
export class BankTableComponent {

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
