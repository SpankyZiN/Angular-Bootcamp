import { Component } from '@angular/core';
import {InputText} from 'primeng/inputtext';
import {Button} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import { Customer } from '../../../store/customer.api';
import { DynamicDialogRef} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-customer-add',
  imports: [
    InputText,
    Button,
    FormsModule
  ],
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.css'
})
export class CustomerAddDialog {

  name?: string;
  document?: string;


  constructor(private dialogRef : DynamicDialogRef<CustomerAddDialog>) {
  }


  save(){
    let model : Customer = {
      id: 4,
      name: this.name,
      document: this.document
    }

    this.dialogRef.close(model);
  }

}