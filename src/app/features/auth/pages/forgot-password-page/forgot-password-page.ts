import { Component } from '@angular/core';
import { ForgotPasswordFormComponent } from "../../components/forgot-password-form-component/forgot-password-form-component";
import { HeaderComponent } from '../../../../shared/component/header-component/header-component';

@Component({
  selector: 'app-forgot-password-page',
  imports: [ForgotPasswordFormComponent, HeaderComponent],
  templateUrl: './forgot-password-page.html',
  styleUrl: './forgot-password-page.css',
})
export class ForgotPasswordPage {

}
