import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebListRoutingModule } from './web-list-routing.module';
import { CompanyListComponent } from './company-list/company-list.component';
import { ViewCompanyComponent } from './view-company/view-company.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AgmCoreModule } from '@agm/core';
import { SearchCompanyComponent } from './search-company/search-company.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CompanyListComponent,
    ViewCompanyComponent,
    SearchCompanyComponent
  ],
  imports: [
    CommonModule,
    WebListRoutingModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDkN1aki3_aiscyePlZLciulJkuF7Gh3YI',
      libraries: ['places']
    })
    

  ]
})
export class WebListModule { }
