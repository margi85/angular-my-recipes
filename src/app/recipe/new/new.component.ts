import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IRecipe } from 'src/app/shared/interfaces/recipe';
import { UserService } from 'src/app/user/user.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})

export class NewComponent implements OnInit {
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private userService: UserService
  ) { }


  ngOnInit(): void {
  }

  submitHandler(data: IRecipe): void {
    data.ownerId = this.userService.userId;
    this.recipeService.saveRecipe(data)
      .subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: (err) => {

        }
      });
  }

}
