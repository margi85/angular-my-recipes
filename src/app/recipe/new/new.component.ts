import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})

export class NewComponent implements OnInit {
  constructor(
    private recipeService: RecipeService,
    private router: Router
  ) { }


  ngOnInit(): void {
  }

  submitHandler(data: any): void {
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
