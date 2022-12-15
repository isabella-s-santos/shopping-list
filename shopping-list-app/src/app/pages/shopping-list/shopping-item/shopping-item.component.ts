import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import Item from 'src/app/models/Item';

import { ShoppingItemService } from './../../../services/shopping-item.service';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent {
  @Input() item?: Item;
  @ViewChild('dialogTemplate') dialogTemplate?: TemplateRef<any>;

  dialogRef?: MatDialogRef<any, any>

  constructor(private shoppingItemService: ShoppingItemService, private dialog: MatDialog) { };

  changeStatus(): void {
    if (this.item) this.item.status = !this.item?.status;
  };

  deleteShoppingItem(): void {
    if (this.item) this.shoppingItemService.deleteShoppingItem(this.item.id);
  };

  openDialog(): void {
    if (this.dialogTemplate) {
      this.dialogRef = this.dialog.open(this.dialogTemplate, { 
        data: { title: "Editar item"} 
      });
    };
  };
};