import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RecipeComponent } from './recipe/recipe.component';
import { WeeklyMenuComponent } from './weekly-menu/weekly-menu.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { ImagePipe } from './image.pipe';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'recipe/:id', component: RecipeComponent },
  {
    path: 'weekly-menu',
    component: WeeklyMenuComponent
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    RecipeComponent,
    WeeklyMenuComponent,
    InstructionsComponent,
    IngredientsComponent,
    ImagePipe
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
