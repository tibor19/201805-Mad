import { Component, OnInit } from '@angular/core';
import { RecipeMockService } from '../recipe-mock.service';
import { RecipeHttpService } from '../recipe-http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weekly-menu',
  templateUrl: './weekly-menu.component.html',
  styleUrls: ['./weekly-menu.component.css']
})
export class WeeklyMenuComponent implements OnInit {

  recipes: Observable<IRecipe[]>;
  weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  constructor(private recipeService: RecipeHttpService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
}
