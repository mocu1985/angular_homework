import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { IndexComponent } from './layout/index/index.component';
import { LoginComponent } from './layout/login/login.component';
import { TermsComponent } from './layout/terms/terms.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    // loadChildren: './layout/layout.module#LayoutModule',
    children: [
      {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
      },
      {
        path: 'index',
        component: IndexComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'terms',
        component: TermsComponent
      }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
