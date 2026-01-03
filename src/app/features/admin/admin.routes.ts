import { Routes } from "@angular/router";
import { CreateUser } from "./pages/create-user/create-user";

export const ADMIN_ROUTES: Routes = [
  { path: 'create/user', component: CreateUser },
];