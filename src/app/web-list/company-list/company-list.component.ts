import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  comanyList: any = [];
  selectedRecord :any = [];
  headers: any = [
    {fieldName: 'name', displayName: 'Company Name', isLink: true},
    {fieldName: 'brewery_type', displayName: 'Type', isLink: false},
    {fieldName: 'country', displayName: 'Address', isLink: false},
    {fieldName: 'website_url', displayName: 'Website URL', isLink: false},
  ];
  childRouterActivated: boolean = false;
  constructor(private comService: CompanyService,
    private router: Router) { }

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

  viewCompanyDetails(selectedCompany:any){
    console.log('selected com', selectedCompany);
    this.router.navigate(['list', selectedCompany.id])
    
  }

  onActivate(status:any){
    console.log('active status', status);
    this.childRouterActivated = true;
    
  }

  onDeactivate(status:any){
    console.log('Deactive status', status);
    this.childRouterActivated = false;
  }

}
