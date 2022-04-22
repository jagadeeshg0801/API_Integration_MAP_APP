import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../company.service';
@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.css']
})
export class ViewCompanyComponent implements OnInit, OnDestroy {

  lat = 22.2736308;
  long = 70.7512555;
  showMap: boolean =false;
  companyData: any = {};
  constructor(private activeRoute: ActivatedRoute, private comService: CompanyService) {
    this.activeRoute.params.subscribe((params: any) => {
      console.log('params', params)
      this.showMap = true;
      this.getCompanyData(params);
    })
  }

  ngOnInit(): void {
  }



  getCompanyData(params: any) {
    this.comService.getCompanyData(params.id).subscribe((res) => {
      this.companyData = { ...res }
    })
  }

  ngOnDestroy(): void {
      this.showMap = false;
      console.log('destroymed');
      
  }
}


