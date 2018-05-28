import { Component, OnInit } from '@angular/core';
import { RecipeMockService } from '../recipe-mock.service';
import { RecipeHttpService } from '../recipe-http.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe: IRecipe = null;
  constructor(private recipeService: RecipeHttpService) { }

  ngOnInit() {
    this.recipeService.getRecipe(0)
        .subscribe(r => this.recipe = r);
  }

}
