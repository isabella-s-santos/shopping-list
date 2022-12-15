import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { ShoppingItemAddComponent } from './pages/shopping-item-add/shopping-item-add.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "list", component: ShoppingListComponent },
  { path: "add", component: ShoppingItemAddComponent },
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };