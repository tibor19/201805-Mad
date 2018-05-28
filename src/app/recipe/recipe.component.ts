import { Component, OnInit } from '@angular/core';
import { RecipeMockService } from '../recipe-mock.service';
import { RecipeHttpService } from '../recipe-http.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe: IRecipe = null;
  constructor(private route: ActivatedRoute, private recipeService: RecipeHttpService) { }

  ngOnInit() {
    //const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);

    this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap) => this.recipeService.getRecipe(parseInt(params.get('id'), 10))
      )).subscribe(r => this.recipe = r);
  }

}
