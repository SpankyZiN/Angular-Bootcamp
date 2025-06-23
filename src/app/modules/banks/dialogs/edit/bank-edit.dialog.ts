import { Component } from '@angular/core';
import {InputText} from 'primeng/inputtext';
import {Button} from 'primeng/button';
import {FormsModule} from '@angular/forms';
// import { Customer} from '../../store/bank.api';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import { BankEntity } from '../../store/bank.api'

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
  id?: string;
  name?: string;
  phone?: string;
  mail?: number;
  address?: string;


  constructor(private dialogRef : DynamicDialogRef<BankEditDialog>,
              private dialogConfig : DynamicDialogConfig) {

    this.assignValue(dialogConfig.data.customer);

  }


  save(){
   let model : BankEntity = {
      id: this.id,
      name: this.name,
      phone: this.phone,
      mail: this.mail?.toString(),
     address: this.address
    }

    this.dialogRef.close(model);
  }

  assignValue(value : any){
    this.id = value.id
    this.name = value.name;
    this.phone = value.phone;
    this.mail = value.mail;
    this.address = value.address;

  }

}
