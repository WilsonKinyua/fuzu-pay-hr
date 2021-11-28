import { TokenService } from './../../core/services/token.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../core/services/login.service';
import { Subject, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private tokenService: TokenService,
    private router: Router,
    private authService: AuthenticationService
  ) {}

  isLoading = false;
  errorMessage: any = [];
  token;
  responseUser;
  isHumanResource;

  ngOnInit(): void {}

  onSubmitLogin(form: NgForm) {
    this.isLoading = true;
    this.loginService.login(form.value).subscribe(
      (response) => {
        console.log(response);
        this.token = response;
        this.token = this.token.token;
        this.responseUser = response;
        this.responseUser = this.responseUser.user;
        this.isHumanResource = this.responseUser.role.name;
        this.isLoading = false;
        if (this.isHumanResource === 'human_resources') {
          // this.authService.setUser(this.responseUser);
          this.tokenService.setToken(this.token);
          this.router.navigate(['/dashboard']);
        } else {
          // display error message
          this.errorMessage = [
              'You are not authorized to access this page',
          ];
        }
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
