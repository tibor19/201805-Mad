import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeHttpService {

  constructor(private http: HttpClient) { }

  getRecipe(id: number): Observable<IRecipe> {
    return this.http.get<IRecipe>('content/data/recipe.json');
  }

  getRecipes(): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>('content/data/recipies.json');
  }
}
