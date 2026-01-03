import { Component } from '@angular/core';
import { LoginFormComponent } from "../../components/login-form-component/login-form-component";
import { RegistrationFormComponent } from '../../components/registration-form-component/registration-form-component';
import { HeaderComponent } from '../../../../shared/component/header-component/header-component';

@Component({
  selector: 'app-registration-page',
  imports: [RegistrationFormComponent, HeaderComponent],
  templateUrl: './registration-page.html',
  styleUrl: './registration-page.css',
})
export class RegistrationPage {

}
