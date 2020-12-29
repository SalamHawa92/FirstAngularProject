import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
// add ingredient property here in the shopping list
  testingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Apples', 10)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
