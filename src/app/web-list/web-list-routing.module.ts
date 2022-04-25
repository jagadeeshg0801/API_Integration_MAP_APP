import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { SearchCompanyComponent } from './search-company/search-company.component';
import { ViewCompanyComponent } from './view-company/view-company.component';

const routes: Routes = [
  {
    path: '', component: CompanyListComponent,
    children: [
      {
        path: 'search', component: SearchCompanyComponent
      },
      {
        path: ':id', component: ViewCompanyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebListRoutingModule { }
