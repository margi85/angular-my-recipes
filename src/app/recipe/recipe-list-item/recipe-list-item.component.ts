import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRecipe } from 'src/app/shared/interfaces/recipe';
import { UserService } from 'src/app/user/user.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css']
})
export class RecipeListItemComponent implements OnInit {

  @Input() recipe: IRecipe;
  
  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService
    ) { }

    ngOnInit(): void {
      const id = this.activatedRoute.snapshot.params.id;
      this.recipeService.loadRecipe(id).subscribe(recipeById => {
        this.recipe = recipeById;
      });
    }

    submitHandler(data: IRecipe): void {  
      data.ownerId = this.userService.userId;
      this.recipeService.editRecipe(this.recipe.objectId, data)
        .subscribe({
          next: () => {
            this.router.navigate(['/recipes']);
          },
          error: (err) => {
  
          }
        });
    }
}
