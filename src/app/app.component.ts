import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'API_Integration_MAP_APP';


  constructor(private router: Router,
    private globlService: GlobalService){
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
  ).subscribe((event: any) => {
    const urlObj = {url: event.url}
    this.globlService.setPreviousUrl(event.url);
  });
  }
}
