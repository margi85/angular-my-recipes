import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRecipe } from 'src/app/shared/interfaces/recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  recipe: IRecipe;

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.recipeService.loadRecipe(id).subscribe(recipeById => {
      this.recipe = recipeById;
    });
  }

}
