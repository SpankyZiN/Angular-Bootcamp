import { Component, OnInit } from '@angular/core';
import {TableModule} from 'primeng/table';
import {CustomerTableComponent} from '../../components/customer-table/customer-table.component';
import {CustomerService} from '../../services/customer.service';
import {Button} from 'primeng/button';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import { CustomerAddDialog } from '../../dialogs/add/customer-add/customer-add/customer-add.component';
import {Customer} from '../../store/customer.api';

@Component({
  selector: 'app-customer.page',
  imports: [
    TableModule,
    CustomerTableComponent,
    Button,
  ],
  templateUrl: './customer.page.component.html',
  styleUrl: './customer.page.component.css'
})
export class CustomerPageComponent {

  customerList: Customer[] = [];
  ref: DynamicDialogRef | null = null;

  constructor(private customerService: CustomerService, private dialogService: DialogService) {
  }

  ngOnInit() {
    this.customerList = this.customerService.getCustomerList;
  }

  onStartAddAction(event?: any) {
    const data = {
      header: 'Agregar Cliente',
      closable: true,
      height: '50dvh',
      width: '50dvh',
    }
    this.ref = this.dialogService.open(CustomerAddDialog, data);
    this.ref.onClose.subscribe((result: any) => {
        this.customerList.push(result);
      }
    )
  }

  onListAction(event: any) {
    console.log("event", event);
  }

}
