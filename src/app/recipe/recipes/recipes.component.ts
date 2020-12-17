import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRecipe } from 'src/app/shared/interfaces/recipe';
import { UserService } from 'src/app/user/user.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipe: IRecipe = <any>{};
  recipeList: IRecipe[] = [];

  get isLogged(): boolean {
    return this.userService.isLogged;
  }
  constructor(private userService: UserService,
    public recipeService: RecipeService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipeService.loadRecipesByOwnerId(this.userService.userId).subscribe(recipeList => {
      this.recipeList = recipeList;
    });
  }

}
