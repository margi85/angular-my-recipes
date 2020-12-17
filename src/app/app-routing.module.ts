import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailComponent } from './recipe/detail/detail.component';
import { NewComponent } from './recipe/new/new.component';
import { RecipeListItemComponent } from './recipe/recipe-list-item/recipe-list-item.component';
import { RecipesComponent } from './recipe/recipes/recipes.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'HOME'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'ABOUT'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      isLogged: false,
      noNavigation: true,
      title: 'REGISTER USER'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      isLogged: false,
      noNavigation: true,
      title: 'LOGIN USER'
    }
  },
  {
    path: 'recipes',
    canActivate: [AuthGuard],
    component: RecipesComponent,
    data: {
      title: 'RECIPE'
    }
  },
  {
    path: 'recipes/new',
    component: NewComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'NEW RECIPE',
      isLogged: true
    }
  },
  {
    path: 'recipes/detail/:id',
    component: DetailComponent,
    data: {
      title: 'RECIPE DETAIL',
      isLogged: true
    }
  },
  {
    path: 'recipes/edit/:id',
    canActivate: [AuthGuard],
    component: RecipeListItemComponent,
    data: {
      title: 'RECIPE EDIT',
      isLogged: true
    }
  },
  {
    path: 'recipes/delete/:id',
    canActivate: [AuthGuard],
    component: HomeComponent,
    data: {
      title: 'RECIPE DELETE',
      isLogged: true
    }
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: {
      title: '404'
    }
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
