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

  ngOnInit(): void {}

  onSubmitLogin(form: NgForm) {
    this.isLoading = true;
    this.loginService.login(form.value).subscribe(
      (response) => {
        console.log(response);
        this.isLoading = false;
        this.token = response;
        this.tokenService.setToken(this.token.token);
        this.authService.isLoggedIn();
        console.log(this.authService.isLoggedIn());
        this.router.navigateByUrl('/')
        .then(() => {
          location.reload();
        });
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
