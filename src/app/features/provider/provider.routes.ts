import { Routes } from "@angular/router";
import { PlanDetails } from "./pages/plan-details/plan-details";

export const PROVIDER_ROUTES: Routes = [
  { path: 'details/:id', component:  PlanDetails}
];