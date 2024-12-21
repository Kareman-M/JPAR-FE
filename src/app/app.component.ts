import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Route, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'JPAR';
  isInLoginRoute:boolean =false;

  constructor(private router:Router) { }
  
  ngOnInit(){
    this.navigation()
  }

  navigation() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {

      if(this.router.url.includes('login')) this.isInLoginRoute =true;
      else this.isInLoginRoute =false;
    });
  }
}
