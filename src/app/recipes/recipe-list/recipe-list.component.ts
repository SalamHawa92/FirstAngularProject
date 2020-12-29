import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/spaghetti-puttanesca_1-1ce4e81.jpg?quality=90&resize=440%2C400'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg')
    // we actually calling the constructor so we need to pass arguments
  ]; // we added the model we made as a type , couple of objects // we have to import it

  constructor() { }

  ngOnInit(): void {
  }

}
