import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.auth.googleLogin();
  }

  logout() {
    this.auth.signOut();
  }
}
