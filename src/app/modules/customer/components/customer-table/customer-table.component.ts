import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { TableModule } from "primeng/table";
import { Customer } from "../../store/customer.api";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-table',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './customer-table.component.html',
  styleUrl: './customer-table.component.css'
})
export class CustomerTableComponent {
  @Input() list: Customer[] = [];
  @Output() action = new EventEmitter<any>();

  onRowClick(row: any, event: any) {
    this.action.emit({ mensajedelhijo: "soy tu hijo, hola", row, event });
  }
}
