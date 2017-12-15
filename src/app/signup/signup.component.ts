import { UserService } from './../core/services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupCredentials: {
    userName: string,
    email: string,
    password: string,
    verfiyPassword: string,
  } = {
    userName: '',
    email: '',
    password: '',
    verfiyPassword: '',
  };
  constructor(private userService: UserService) { }


  onSubmit(credentials) {
    this.userService.signup(this.signupCredentials)
    .subscribe((signedUp) => {
      console.log(signedUp);
    });
  }

}
