import {Component, OnInit} from '@angular/core';
import {TableModule} from 'primeng/table';
import {AccountsTableComponent} from '../../components/customer-table/accounts-table.component';
import {AccountsService} from '../../services/accounts.service';
import {Button} from 'primeng/button';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {AccountsEditDialog} from '../../dialogs/edit/accounts-edit.dialog';
import {ListEvent} from '../../../../shared/utils';
import {MessageService} from 'primeng/api';
import {BankEntity} from '../../store/accounts.api';
import {BankAddDialog} from '../../dialogs/add/accounts-add.component';

@Component({
  selector: 'app-bank-page',
  imports: [
    TableModule,
    AccountsTableComponent,
    Button
  ],
    providers: [AccountsService,
      DialogService,
      MessageService
    ],
  templateUrl: './accounts.page.component.html',
  styleUrl: './accounts.page.component.css'
})
export class AccountsPageComponent implements OnInit {

  listBanks: BankEntity[] = [];

  ref: DynamicDialogRef | undefined;

  constructor(private bankService: AccountsService,
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
    this.ref = this.dialogService.open(AccountsEditDialog, data);
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


  onEdit(value?: any) {
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
    this.dialogService.open(AccountsEditDialog, data)
      .onClose
      .subscribe((result: any) => {
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
