import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IRecipe } from 'src/app/shared/interfaces/recipe';
import { UserService } from 'src/app/user/user.service';
import { RecipeService } from '../recipe.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})

export class NewComponent implements OnInit {

  f: FormGroup;

  constructor(
    private fb: FormBuilder,
    private recipeService: RecipeService,
    private router: Router,
    private userService: UserService
  ) { 
    this.f = this.fb.group({
      title: [ '', [Validators.required, Validators.minLength(4)] ],
      ingredients: [ '', [Validators.required] ],
      preparation: [ '', [Validators.required, Validators.minLength(10)] ],
      imageURL: [ '', [Validators.required] ],
    });
  }


  ngOnInit(): void {
  }

  submitHandler(data: IRecipe): void {
    data.ownerId = this.userService.userId;
    this.recipeService.saveRecipe(data)
      .subscribe({
        next: () => {
          this.router.navigate(['/recipes']);
        },
        error: (err) => {

        }
      });
  }

}
