import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-search-company',
  templateUrl: './search-company.component.html',
  styleUrls: ['./search-company.component.css']
})
export class SearchCompanyComponent implements OnInit {
  searchText: string = '';
  companyList: any   = [];
  headers: any = [
    {fieldName: 'name', displayName: 'Company Name', isLink: false},
    {fieldName: 'city', displayName: 'City', isLink: false},
    {fieldName: 'view', displayName: 'Action', isLink: true},
  ];
  selectedRecord: any = [];
  isSearched = false;
  constructor(private comService: CompanyService, 
    private router: Router) { }

  ngOnInit(): void {
  }


  getCompanyList(){

    if(this.searchText.length>0){
      this.isSearched = true;
      this.comService.searchCompaniesByName(this.searchText).subscribe((res:any)=>{
        res.forEach((ele:any) =>{
          ele['view'] = "VIEW"
        })
        this.companyList = res || [];

      })
    }else{
      alert('please Enter atleast one character')
    }
      
  }
  viewCompanyDetails(selectedCompany:any){
    console.log('selected com', selectedCompany);
    this.selectedRecord = [selectedCompany]
    this.router.navigate(['list', selectedCompany.id])
    
  }
}
