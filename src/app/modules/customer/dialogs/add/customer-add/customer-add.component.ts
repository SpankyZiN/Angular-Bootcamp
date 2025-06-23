import { Component } from '@angular/core';
import {InputText} from 'primeng/inputtext';
import {Button} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import { Customer} from '../../../store/customer.api';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-customer-add',
    standalone: true,
  imports: [
    InputText,
    Button,
    FormsModule
  ],
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.css'
})
export class CustomerEditDialog {

  customer?: Customer;
  name?: string;
  document?: string;
  id?: number;


  constructor(private dialogRef: DynamicDialogRef,
              private dialogConfig: DynamicDialogConfig) {
    if (dialogConfig.data?.customer) {
      this.assignValue(dialogConfig.data.customer);
    }
  }



  save(){
    let model : Customer = {
      id: this.id,
      name: this.name,
      document: this.document
    }

    this.dialogRef.close(model);
  }

  assignValue(value : any){
    this.id = value.id
    this.name = value.name;
    this.document = value.document;
  }

}
