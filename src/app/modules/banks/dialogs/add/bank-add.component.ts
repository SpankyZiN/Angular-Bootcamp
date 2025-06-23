import {Component} from '@angular/core';
import {InputText} from 'primeng/inputtext';
import {Button} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {BankEntity} from '../../store/bank.api';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {BankService} from '../../services/bank.service';

@Component({
  selector: 'app-bank-add',
  imports: [
    InputText,
    Button,
    FormsModule
  ],
  templateUrl: './bank-add.component.html',
  //styleUrl: './bank-add.component.css '
})
export class BankAddDialog {

  // customer?: Customer;
  name?: string;
  document?: string;
  id?: number;

  model : BankEntity ={
    name: "",
    phone: "",
    mail: "",
    address: "",
  }


  constructor(private dialogRef: DynamicDialogRef<BankAddDialog>,
              private dialogConfig: DynamicDialogConfig,
              private bankService: BankService,) {

  }


  save() {

    this.bankService.addBank(this.model).subscribe(
      {
        next: data => {
          this.dialogRef.close({ success: true, value: this.model});
        },
        error: data => {}
      }
    )

  }

  assignValue(value: any) {
    this.id = value.id
    this.name = value.name;
    this.document = value.document;
  }

}
