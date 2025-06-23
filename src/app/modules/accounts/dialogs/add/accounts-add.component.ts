import { Component } from '@angular/core';
import {InputText} from 'primeng/inputtext';
import {Button} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import { BankEntity } from '../../store/bank.api';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {BankService} from '../../services/bank.service';

@Component({
  selector: 'app-customer-add',
    standalone: true,
  imports: [
    InputText,
    Button,
    FormsModule
  ],
  templateUrl: './accounts-add.component.html',
  styleUrl: './accounts-add.component.css'
})
export class BankAddDialog {

  name?: string;
  phone?: string;
  mail?: number;
  address?: string;
  id?: number;

  model : BankEntity ={
    name: "",
    phone: "",
    mail: "",
    address: "",
  }


  constructor(private dialogRef : DynamicDialogRef<BankAddDialog>,
              private dialogConfig : DynamicDialogConfig,
              private bankService: BankService,) {

    this.assignValue(dialogConfig.data.customer);

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
  assignValue(value : any){
    this.id = value.id
    this.name = value.name;
    this.phone = value.phone;
    this.mail = value.mail;
    this.address = value.address;
  }

}
