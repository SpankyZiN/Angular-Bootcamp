import {Component, OnInit} from '@angular/core';
import {TableModule} from 'primeng/table';
import {BankTableComponent} from '../../components/customer-table/bank-table.component';
// {CustomerService} from '../../services/bank.service';
import {Button} from 'primeng/button';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {BankEditDialog} from '../../dialogs/add/bank-add.component';
//import {Customer} from '../../store/bank.api';
import {ListEvent} from '../../../../shared/utils';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-customer-page',
  imports: [
    TableModule,
    BankTableComponent,
    Button
  ],
    providers: [CustomerService,
      DialogService,
      MessageService
    ],
  templateUrl: './bank.page.component.html',
  styleUrl: './bank.page.component.css'
})
export class CustomerPage implements OnInit {

  customerList: Customer[] = [];

  ref: DynamicDialogRef | undefined;

  constructor(private customerService: CustomerService,
              private dialogService: DialogService,
              private messageService: MessageService) {

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
      modal: true,
          dismissableMask: false

    }
    this.ref = this.dialogService.open(CustomerEditDialog, data);
    this.ref.onClose.subscribe((result: any) => {
        this.customerList.push(result);
      }
    )
  }

  onListAction(event: ListEvent) {
    switch (event.type) {
      case 'selected':
        console.log('Evento recibido:', event);
        this.messageService.add(
          {summary: `El objeto seleccionado \ ${event.value.name}`}
        )
        break;
      case 'edit':
        this.onEdit(event.value)
        break;
      case 'delete':
        break
      default:
        break;
    }

  }


  onEdit(value?: Customer) {
    console.log('Editando cliente', value);
    const data = {
      data: {
        customer: value,
      },
      header: 'Editar Cliente',
      closable: true,
      height: '50dvh',
      width: '50dvh',
    }
    this.dialogService.open(CustomerEditDialog, data)
      .onClose
      .subscribe((result: any) => {
        const newCustomerList = this.customerService.getCustomerList;
        const newCustomer =  newCustomerList.find((customer) => customer.id === result.id);
        if (newCustomer) {
          newCustomer.id = result.id;
          newCustomer.name = result.name;
          newCustomer.document = result.document;
        }
      })
  }

}
