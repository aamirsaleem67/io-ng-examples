import { SignupComponent } from './signup/signup.component';
import { SigniinComponent } from './signiin/signiin.component';
import { HomeComponent } from './home/home.component';
import { AppContentComponent } from './core/components/app-content/app-content.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: AppContentComponent,
    children: [{
      path: '',
      component: HomeComponent
    },
    {
      path: 'login',
      component: SigniinComponent,
      // canActivate: [ AuthGuard ]
    },
    {
      path: 'signup',
      component: SignupComponent,
      // canActivate: [ AuthGuard ]
    }
    ]
  }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
