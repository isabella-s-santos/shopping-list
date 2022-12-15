import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './../material/material.module';

import { StatusPipe } from './pipes/status.pipe';

import { HeaderComponent } from './header/header.component';
import { DialogComponent } from './dialog/dialog.component';
import { ShoppingItemFormComponent } from './shopping-item-form/shopping-item-form.component';

@NgModule({
  declarations: [
    HeaderComponent,
    StatusPipe,
    DialogComponent,
    ShoppingItemFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    StatusPipe,
    DialogComponent,
    ShoppingItemFormComponent
  ]
})
export class SharedModule { };