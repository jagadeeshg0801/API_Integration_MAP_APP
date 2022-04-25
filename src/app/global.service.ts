import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  public routerObj ={
    '/list' : {
      'url': '/list',
      'text': 'List'
    },
    '/list/search':{
      'url': '/list/search',
      'text': 'Search',
    }
  }
  public prevURL$ = new BehaviorSubject<any>(null);

  setPreviousUrl(url: any){
    this.prevURL$.next(url);
  }
}
