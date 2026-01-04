import { Routes } from "@angular/router";
import { PlanDetails } from "./pages/plan-details/plan-details";
import { MakeClaim } from "./pages/make-claim/make-claim";
import { ViewClaim } from "./pages/view-claim/view-claim";

export const PROVIDER_ROUTES: Routes = [
  { path: 'details/:id', component:  PlanDetails},
  { path: 'claim/:id', component:  MakeClaim},
  { path: 'view/claim', component:  ViewClaim},
];