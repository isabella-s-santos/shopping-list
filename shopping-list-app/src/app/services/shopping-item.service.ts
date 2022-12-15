import { Injectable } from '@angular/core';

import Item from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class ShoppingItemService {
  shoppingList: Item[] = [
    {
      id: 1,
      name: "Nome",
      measurementUnit: "Unidade de medida",
      quantity: 12,
      price: 1200,
      date: new Date(),
      status: false
    }
  ];

  constructor() { 
    // Item.updateLastId(this.shoppingList[this.shoppingList.length-1].id);
    console.log(Item.lastId);
  };

  getShoppingItems(): Item[] {
    return this.shoppingList;
  };

  postShoppingItem(newItem: Item): void {
    this.shoppingList.push(newItem);
  };

  updateShoppingItem(id: number, updateShoppingItem: Item) {
    const index = this.shoppingList.findIndex((item) => item.id == id);
    this.shoppingList[index] = updateShoppingItem;
  };

  deleteShoppingItem(id: number) {
    const index = this.shoppingList.findIndex((shoppingItem) => shoppingItem.id == id);
    this.shoppingList.splice(index, 1);
  };
};
