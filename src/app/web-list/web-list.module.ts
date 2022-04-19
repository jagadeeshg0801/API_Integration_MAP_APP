import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebListRoutingModule } from './web-list-routing.module';
import { CompanyListComponent } from './company-list/company-list.component';
import { ViewCompanyComponent } from './view-company/view-company.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CompanyListComponent,
    ViewCompanyComponent
  ],
  imports: [
    CommonModule,
    WebListRoutingModule,
    
    TableModule,
    HttpClientModule

  ]
})
export class WebListModule { }
