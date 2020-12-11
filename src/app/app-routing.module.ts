import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
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
    path: '**',
    component: NotFoundComponent,
    data: {
      title: '404'
    }
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
