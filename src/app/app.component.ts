import {Component, OnInit} from '@angular/core';
import { Router, Event, NavigationEnd} from '@angular/router';
import {ApiService} from "./api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  statusHeaderFooter:boolean = true;
  constructor(private router: Router , private Api : ApiService) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (event.url == "/"){
          this.statusHeaderFooter = false
        }else {
          this.statusHeaderFooter = true
        }
      }
    });
  }

  ngOnInit(): void {
    this.Api.httpApi().subscribe(
      (res) => {
        console.log(res)
      }
    )


  }

}
