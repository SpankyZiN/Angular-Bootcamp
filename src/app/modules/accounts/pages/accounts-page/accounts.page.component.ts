import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { TreeTableModule } from 'primeng/treetable';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [CommonModule, TreeTableModule, ButtonModule, ToastModule],
  providers: [MessageService],
  templateUrl: './accounts.page.component.html'
})
export class AccountsComponent {
  accounts: TreeNode[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.accounts = [
      {
        data: {
          type: 'Caja de ahorro',
          balance: 'Gs 12.500.000',
        },
        children: [
          {
            data: {
              type: 'Transferencia a Juan Pérez',
              balance: '- Gs 500.000',
              date: '10/06/2025',
            },
          },
          {
            data: {
              type: 'Depósito',
              balance: '+ Gs 1.000.000',
              date: '07/06/2025',
            },
          },
        ],
      },
    ];
  }

  transfer() {
    this.messageService.add({ severity: 'info', summary: 'Transferencia', detail: 'Función transferir dinero activada' });
  }

  share() {
    this.messageService.add({ severity: 'success', summary: 'Compartido', detail: 'Datos de cuenta compartidos' });
  }

  more() {
    this.messageService.add({ severity: 'warn', summary: 'Más opciones', detail: 'Mostrando más opciones' });
  }
}
