import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }


  getCompanyList(){
   return  this.http.get('https://api.openbrewerydb.org/breweries')
  }


  getCompanyData(companyId:string){
    console.log('id', companyId);
    
    return this.http.get('https://api.openbrewerydb.org/breweries/'+ companyId);
  }
}
