import { Routes } from "@angular/router";
import { CreateUser } from "./pages/create-user/create-user";
import { AddPlan } from "./pages/add-plan/add-plan";
import { AddHospital } from "./pages/add-hospital/add-hospital";
import { Dashboard } from "./pages/dashboard/dashboard";

export const ADMIN_ROUTES: Routes = [
  { path: 'create/user', component: CreateUser ,title: 'Create User'},
  { path: 'add/plan', component: AddPlan ,title: 'Add plan'},
  { path: 'add/hospital', component: AddHospital ,title: 'Add Hospital'},
  { path: 'dashboard', component: Dashboard ,title: 'Dashboard'}
];