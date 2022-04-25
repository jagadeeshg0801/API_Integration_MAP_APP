import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterState, RoutesRecognized } from '@angular/router';
import { CompanyService } from '../company.service';
import { filter } from 'rxjs';
import { Location } from '@angular/common';
import { GlobalService } from 'src/app/global.service';
@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.css'],
})
export class ViewCompanyComponent implements OnInit, OnDestroy {

  lat = 22.2736308;
  long = 70.7512555;
  showMap: boolean =false;
  companyData: any = {};
  routesList = {
    '/list/search': {
      url: '/list/search', text: 'Search'
    },
    '/list': {
      url: '/list', text: 'Company List'
    }
  };
  prevRoute : string = '';
  previousUrl: any;
  currentUrl: string;
  history: any[] =[];

  constructor(private activeRoute: ActivatedRoute, private comService: CompanyService, private router: Router,
     private location:Location, private globalService: GlobalService) {
      this.activeRoute.params.subscribe((params: any) => {
        this.showMap = true;
        this.getCompanyData(params);
      });   
  }

  ngOnInit(): void {
    
  }

  getCompanyData(arg: any) {
    this.comService.getCompanyData(arg.id).subscribe((res) => {
      this.companyData = { ...res };
    });
  }

  navigateTo(){    
    this.location.back();
   
  }

  ngOnDestroy(): void {
      this.showMap = false;
      console.log('destroyed');
      
  }



}


