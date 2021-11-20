import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../core/services/login.service';
import { Subject, throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  isLoading = false;
  errorMessage: any = [];

  ngOnInit(): void {}

  onSubmitLogin(form: NgForm) {
    this.isLoading = true;
    this.loginService.login(form.value).subscribe(
      (response) => {
        console.log(response);
        this.isLoading = false;
        // this.loginService.setToken(response.token);
        // this.loginService.setUser(response.user);
        // this.loginService.setIsLoggedIn(true);
        // this.loginService.setIsHumanResource(response.user.is_human_resource);
      },
      (error) => {
        console.log(error);
        this.errorMessage = error.error;
        this.isLoading = false;
      }
    );

    // form.reset();
  }
}
