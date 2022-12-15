import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { ShoppingItemService } from './../../services/shopping-item.service';

import Item from 'src/app/models/Item';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
  // providers: [ShoppingItemService]
})
export class ShoppingListComponent /* implements OnInit, OnChanges */ {
  shoppingList: Item[] = [];

  constructor(private shoppingItemService: ShoppingItemService) { };

  ngOnInit(): void {
    this.shoppingList = this.shoppingItemService.getShoppingItems();
  };

  ngOnChanges() {

  };
};