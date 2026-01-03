import { Component } from '@angular/core';
import { LoginFormComponent } from "../../components/login-form-component/login-form-component";
import { HeaderComponent } from '../../../../shared/component/header-component/header-component';

@Component({
  selector: 'app-login-page',
  imports: [LoginFormComponent, HeaderComponent],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {

}
