import {Component, OnInit} from '@angular/core';
import {TableModule} from 'primeng/table';
import {BankTableComponent} from '../../components/customer-table/bank-table.component';
import {BankService} from '../../services/bank.service';
import {Button} from 'primeng/button';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {BankEditDialog} from '../../dialogs/edit/bank-edit.dialog';
import {ListEvent} from '../../../../shared/utils';
import {MessageService} from 'primeng/api';
import {BankEntity} from '../../store/bank.api';
import {BankAddDialog} from '../../dialogs/add/bank-add.component';

@Component({
  selector: 'app-accounts-page',
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
      height: '70dvh',
      width: '50dvh',
    }
    this.ref = this.dialogService.open(BankAddDialog, data);
    this.ref.onClose.subscribe((result: any) => {
        // this.bankList.push(result);
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
    this.dialogService.open(BankEditDialog, data)
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
