import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekly-menu',
  templateUrl: './weekly-menu.component.html',
  styleUrls: ['./weekly-menu.component.css']
})
export class WeeklyMenuComponent implements OnInit {

  recipes: IRecipe[] = [{
    'recipeId': 1,
    'name': 'Fish sticks and Rice',
    'price': 2.0,
    'time': 20,
    'image': 'fishsticks-mine',
    'recipeIngredients': [],
    'recipeInstructions': []
  }, {
    'recipeId': 2,
    'name': 'Pizza',
    'price': 13.0,
    'time': 30,
    'image': 'pizza-clip',
    'recipeIngredients': [],
    'recipeInstructions': []
  }, {
    'recipeId': 3,
    'name': 'Pasta with Meatsauce',
    'price': 3.0,
    'time': 11,
    'image': 'pasta-clip',
    'recipeIngredients': [],
    'recipeInstructions': []
  }, {
    'recipeId': 4,
    'name': 'Cereal with Millk',
    'price': 1.0,
    'time': 1,
    'image': 'cereal-clip',
    'recipeIngredients': [],
    'recipeInstructions': []
  }, {
    'recipeId': 5,
    'name': 'Meatballs and Mashed Potatoes',
    'price': 4.0,
    'time': 5,
    'image': 'meatballs-clip',
    'recipeIngredients': [],
    'recipeInstructions': []
  }, {
    'recipeId': 6,
    'name': 'Waffles and Jam',
    'price': 3.0,
    'time': 12,
    'image': 'waffles-clip',
    'recipeIngredients': [],
    'recipeInstructions': []
  }, {
    'recipeId': 7,
    'name': 'Hamburgers',
    'price': 3.0,
    'time': 15,
    'image': 'hamburger-clip',
    'recipeIngredients': [],
    'recipeInstructions': []
  }, {
    'recipeId': 8,
    'name': 'Ham and Cheeze Sandwich',
    'price': 2.0,
    'time': 5,
    'image': 'sandwich-clip',
    'recipeIngredients': [],
    'recipeInstructions': []
  }, {
    'recipeId': 9,
    'name': 'Magic Ice cream',
    'price': 4.0,
    'time': 3,
    'image': 'icecream-clip',
    'recipeIngredients': [],
    'recipeInstructions': []
  }];

  weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  constructor() { }

  ngOnInit() {
    const recipes = this.recipes.map((r, index) => {
      r.weekDay = this.weekDays[index % 7];
      return r;
    });
    this.recipes = recipes;
  }
}
