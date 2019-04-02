import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    userId: '',
    password: ''
  };


  constructor(private router: Router) { }

  ngOnInit() {
  }


  doLogin() {
    sessionStorage.setItem('userId', this.loginData.userId);
    this.router.navigate(['terms']);
  }

}
