import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userId: string;
  isLogin = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (!sessionStorage.getItem('userId')) {
        this.isLogin = false;
      } else {
        this.isLogin = true;
        this.userId = sessionStorage.getItem('userId');
      }
    });
  }

  ngOnInit() {
  }


  logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }

}
