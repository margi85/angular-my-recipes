import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { NewComponent } from './new/new.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RecipesComponent,
    data: {
      title: 'RECIPE'
    }
  },
  {
    path: 'new',
    component: NewComponent,
    data: {
      title: 'NEW RECIPE',
      isLogged: true
    }
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
    data: {
      title: 'RECIPE DETAIL',
      isLogged: true
    }
  }
];

export const RecipeRouterModule = RouterModule.forChild(routes);
