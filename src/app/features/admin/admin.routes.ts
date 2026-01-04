import { Routes } from "@angular/router";
import { CreateUser } from "./pages/create-user/create-user";
import { AddPlan } from "./pages/add-plan/add-plan";
import { AddHospital } from "./pages/add-hospital/add-hospital";

export const ADMIN_ROUTES: Routes = [
  { path: 'create/user', component: CreateUser },
  { path: 'add/plan', component: AddPlan},
  { path: 'add/hospital', component: AddHospital}
];