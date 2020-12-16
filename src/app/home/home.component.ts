import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe/recipe.service';
import { IRecipe } from '../shared/interfaces/recipe';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  recipe: IRecipe = <any>{};
  recipeList: IRecipe[] = [];

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  constructor(public userService: UserService,
    public recipeService: RecipeService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipeService.loadRecipeList().subscribe(recipeList => {
      this.recipeList = recipeList;
    });
  }

}
