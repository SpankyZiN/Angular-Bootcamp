import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {TableModule} from "primeng/table";
import {Customer} from "../../store/customer.api"

@Component({
  selector: 'app-customer-table',
  imports: [
    TableModule
  ],
  templateUrl: './customer-table.component.html',
  styleUrl: './customer-table.component.css'
})
export class CustomerTableComponent implements OnChanges {

  _list : Customer[] = [];


  @Input() set list (list : Customer[]){
    this._list = list;
  }

  @Output() action = new EventEmitter<any>();

  constructor() {
    console.log("me construi", this._list);
  }

  ngOnChanges(changes: SimpleChanges) {

    console.log("me cambie", changes);
  }

  onRowClick(row: any, event: any) {
      this.action.emit({mensajedelhijo: "soy tu hijo, hola",row, event});
  }
}
