import { Routes } from "@angular/router";
import { PlanDetails } from "./pages/plan-details/plan-details";
import { MakeClaim } from "./pages/make-claim/make-claim";
import { ViewClaim } from "./pages/view-claim/view-claim";
import { VerifyClaim } from "./pages/verify-claim/verify-claim";

export const PROVIDER_ROUTES: Routes = [
  { path: 'details/:id', component:  PlanDetails,title: 'Plan'},
  { path: 'claim/:id', component:  MakeClaim,title: 'Submit claim'},
  { path: 'view/claim', component:  ViewClaim,title: 'Verify claim'},
  { path: 'review/claims', component:  VerifyClaim,title: 'Verify claim'},
];