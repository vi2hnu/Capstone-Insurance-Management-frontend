import { Routes } from "@angular/router";
import { CreateUser } from "./pages/create-user/create-user";
import { AddPlan } from "./pages/add-plan/add-plan";

export const ADMIN_ROUTES: Routes = [
  { path: 'create/user', component: CreateUser },
  { path: 'add/plan', component: AddPlan}
];