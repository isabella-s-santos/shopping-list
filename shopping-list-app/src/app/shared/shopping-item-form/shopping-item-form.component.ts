import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ShoppingItemService } from '../../services/shopping-item.service';

import Item from 'src/app/models/Item';

@Component({
  selector: 'app-shopping-item-form',
  templateUrl: './shopping-item-form.component.html',
  styleUrls: ['./shopping-item-form.component.css']
})
export class ShoppingItemFormComponent {
  @Input() newItem: Item = new Item("");
  @Input() requestType: string = "post";

  constructor(private shoppingItemService: ShoppingItemService) {};

  itemForm?: FormGroup;

  ngOnInit() {
    this.itemForm = new FormGroup({
      name: new FormControl(this.newItem.name),
      measurementUnit: new FormControl(this.newItem.measurementUnit),
      quantity: new FormControl(this.newItem.quantity),
      price: new FormControl(this.newItem.price),
      date: new FormControl(this.newItem.date),
      status: new FormControl(this.newItem.status)
    });
  };

  onSubmitForm() {
    this.itemForm?.patchValue({
      name: this.itemForm?.controls['name'].value,
      measurementUnit: this.itemForm?.controls['measurementUnit'].value,
      quantity: this.itemForm?.controls['quantity'].value,
      price: this.itemForm?.controls['price'].value,
      date: this.itemForm?.controls['date'].value,
      status: this.itemForm?.controls['status'].value
    });

    this.newItem = {id: this.newItem.id, ... this.itemForm?.value};
    
    if (this.requestType == "post")
      this.shoppingItemService.postShoppingItem(this.newItem);
    else 
      this.shoppingItemService.updateShoppingItem(this.newItem.id, this.newItem);

    console.log(this.newItem.id);
  };
};