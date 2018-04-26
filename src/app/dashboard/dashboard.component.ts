import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { NgForm } from '@angular/forms';
import { User } from '../core/classes/user';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  editing = false;

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  updateFocus(form: NgForm) {
    this.auth.user
      .take(1)
      .subscribe(user => {
        this.auth.updateUserData(user.uid, {
          focus: {
            text: form.value.focus,
            done: user.focus.done
          }
        });
        this.editing = false;
      });
  }

  achieveGoal() {
    this.auth.user
      .take(1)
      .subscribe(user => {
        this.auth.updateUserData(user.uid, {
          focus: {
            text: user.focus.text,
            done: true
          }
        });
        this.editing = false;
      });
  }
}
