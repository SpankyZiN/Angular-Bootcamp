import { Component } from '@angular/core';
import {InputText} from 'primeng/inputtext';
import {Button} from 'primeng/button';
import {FormsModule} from '@angular/forms';
// import { Customer} from '../../store/bank.api';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {BankEntity} from '../../store/bank.api';

@Component({
  selector: 'app-customer-add',
  imports: [
    InputText,
    Button,
    FormsModule
  ],
  templateUrl: './bank-edit.dialog.html',
  styleUrl: './bank-edit.dialog.css'
})
export class BankEditDialog {

  // customer?: Customer;
  name?: string;
  phone?: string;
  mail?: string;
  address?: string;

  constructor(private dialogRef : DynamicDialogRef<BankEditDialog>,
              private dialogConfig : DynamicDialogConfig) {

    this.assignValue(dialogConfig.data.customer);

  }




  save(){
      let model : BankEntity = {
          name: this.name,
          address: this.address,
          phone: this.phone,
          mail: this.phone,
        }

        this.dialogRef.close(model);
  }

  assignValue(value : any){
    this.name = value.name;
    this.phone = value.phone;
    this.mail = value.mail;
    this.address = value.address;
  }

}
