import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { SearchCompanyComponent } from './web-list/search-company/search-company.component';

const routes: Routes = [
  {
    path: 'home', loadChildren: () => import('./home/home.module').then(module => module.HomeModule)
  },
  {
   path: '',   redirectTo: 'home', pathMatch: 'full',
  },
  {
    path: 'list', loadChildren: () => import('./web-list/web-list.module').then(module => module.WebListModule)    
  },
  {
    path: 'search', component: SearchCompanyComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
