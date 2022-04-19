import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  comanyList: any = [];
  headers: any = [
    {fieldName: 'name', displayName: 'Company Name'},
    {fieldName: 'brewery_type', displayName: 'Type'},
    {fieldName: 'country', displayName: 'Address'},
    {fieldName: 'website_url', displayName: 'Website URL'},
  ];
  constructor(private comService: CompanyService) { }

  ngOnInit(): void {
    this.getCompanyList();
  }


  getCompanyList(){
    this.comService.getCompanyList().subscribe(
      (res)=> {
        this.comanyList = res || [];
      }
    );
    
  }

}
