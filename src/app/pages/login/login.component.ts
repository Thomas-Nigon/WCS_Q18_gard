import { Component } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private userService: UserService) {}
  logIn() {
    this.userService.logIn();
  }
  logOut() {
    this.userService.logOut();
  }
}
