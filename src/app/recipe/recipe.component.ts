import { Component, OnInit } from '@angular/core';
import { RecipeMockService } from '../recipe-mock.service';
import { RecipeHttpService } from '../recipe-http.service';
import { ActivatedRoute } from '@angular/router';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe: IRecipe = null;
  constructor(private route: ActivatedRoute, private recipeService: RecipeHttpService) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.recipeService.getRecipe(id)
        .subscribe(r => this.recipe = r);
  }

}
