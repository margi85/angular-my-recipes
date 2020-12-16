import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { NewComponent } from './recipe/new/new.component';
import { RecipesComponent } from './recipe/recipes/recipes.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeListItemComponent } from './recipe/recipe-list-item/recipe-list-item.component';
import { DetailComponent } from './recipe/detail/detail.component';
import { RecipeService } from './recipe/recipe.service';
import { UserService } from './user/user.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    AboutComponent,
    NewComponent, 
    RecipesComponent, 
    RecipeListComponent, 
    RecipeListItemComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    UserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    RecipeService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
