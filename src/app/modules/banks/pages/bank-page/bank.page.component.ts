import {Component, OnInit} from '@angular/core';
import {TableModule} from 'primeng/table';
import {BankTableComponent} from '../../components/customer-table/bank-table.component';
import {BankService} from '../../services/bank.service';
import {Button} from 'primeng/button';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {BankEditDialog} from '../../dialogs/edit/bank-edit.dialog';
//import {Customer} from '../../store/bank.api';
import {ListEvent} from '../../../../shared/utils';
import {MessageService} from 'primeng/api';
import {BankEntity} from '../../store/bank.api';
import {BankAddDialog} from '../../dialogs/add/bank-add.component';

@Component({
  selector: 'app-bank-page',
  imports: [
    TableModule,
    BankTableComponent,
    Button
  ],
    providers: [BankService,
      DialogService,
      MessageService
    ],
  templateUrl: './bank.page.component.html',
  styleUrl: './bank.page.component.css'
})
export class BankPageComponent implements OnInit {

  listBanks: BankEntity[] = [];

  ref: DynamicDialogRef | undefined;

  constructor(private bankService: BankService,
              private dialogService: DialogService,
              private messageService: MessageService) {

  }

  ngOnInit() {
    this.loadEntities();
  }

  onStartAddAction(event?: any) {
    const data = {
      header: 'Agregar Banco',
      closable: true,
      height: '50dvh',
      width: '50dvh',
      modal: true,
    }
    this.ref = this.dialogService.open(BankEditDialog, data);
    this.ref.onClose.subscribe((result: any) => {
        //this.listBanks.push(result);
      }
    )
  }

  onListAction(event: ListEvent) {
    switch (event.type) {
      case 'selected':
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


  onEdit(value?: BankEntity) {
    console.log('Editando Banco', value);
    const data = {
      data: {
        customer: value,
      },
      header: 'Editar Banco',
      closable: true,
      height: '50dvh',
      width: '50dvh',
    }
    this.dialogService.open(BankEditDialog, data)
      .onClose
      .subscribe((result: any) => {
        // const newGetBankList = this.bankService.getListBanks();
        // const newCustomer =  newCustomerList.find((customer) => customer.id === result.id);
        // if (newCustomer) {
        //   newCustomer.id = result.id;
        //   newCustomer.name = result.name;
        //   newCustomer.document = result.document;
        // }
      })
  }

  loadEntities() {
    this.bankService.getListBanks().subscribe(
      {
        next: data => {
          this.listBanks = <BankEntity[]>data
        }
      }
    )
  }

}
