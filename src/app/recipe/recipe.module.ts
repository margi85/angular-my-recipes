import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponent } from './new/new.component';
import { RecipesComponent } from './recipes/recipes.component';
import { CoreModule } from '../core/core.module';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeListItemComponent } from './recipe-list-item/recipe-list-item.component';
import { RecipeService } from './recipe.service';
import { SharedModule } from '../shared/shared.module';
import { RecipeRouterModule } from './recipe-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: 
  [NewComponent, 
    RecipesComponent, 
    RecipeListComponent, 
    RecipeListItemComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RecipeRouterModule,
    FormsModule
  ],
  providers: [
    RecipeService
  ],
  exports: [
    RecipeListComponent,
    RecipeListItemComponent
  ]
})
export class RecipeModule { }
