import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../material/material.module';
import { SharedModule } from './../shared/shared.module';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingItemComponent } from './shopping-list/shopping-item/shopping-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShoppingItemAddComponent } from './shopping-item-add/shopping-item-add.component';

@NgModule({
  declarations: [ 
    ShoppingListComponent,
    ShoppingItemComponent,
    PageNotFoundComponent,
    ShoppingItemAddComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    ShoppingListComponent,
    ShoppingItemComponent
  ]
})
export class PagesModule { };