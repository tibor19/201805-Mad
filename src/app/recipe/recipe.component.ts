import { Component, OnInit } from '@angular/core';
import { RecipeMockService } from '../recipe-mock.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe: IRecipe = null;
  constructor(private recipeService: RecipeMockService) { }

  ngOnInit() {
    this.recipe = this.recipeService.getRecipe(0);
  }

}
