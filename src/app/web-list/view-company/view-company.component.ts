import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.css']
})
export class ViewCompanyComponent implements OnInit {

  companyData: any  = {};
  constructor(private activeRoute: ActivatedRoute, private comService: CompanyService) { 
    this.activeRoute.params.subscribe((params: any)=>{
      console.log('params', params)
        this.getCompanyData(params);
    })
  }

  ngOnInit(): void {
  }

 

  getCompanyData(params:any){
    this.comService.getCompanyData(params.id).subscribe((res)=>{
      this.companyData = {...res}
    })
  }
}
