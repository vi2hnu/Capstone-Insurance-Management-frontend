import { Routes } from "@angular/router";
import { LoginPage } from "./pages/login-page/login-page";
import { RegistrationPage } from "./pages/registration-page/registration-page";
import { ForgotPasswordPage } from "./pages/forgot-password-page/forgot-password-page";
import { YourInfo } from "./pages/your-info/your-info";

export const AUTH_ROUTES: Routes = [
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegistrationPage },
  { path: 'forgot-password', component: ForgotPasswordPage},
  { path: 'info', component: YourInfo}
];