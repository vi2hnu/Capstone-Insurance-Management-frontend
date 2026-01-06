import { Routes } from "@angular/router";
import { OfficerDashboard } from "./pages/officer-dashboard/officer-dashboard";
import { OfficerReview } from "./pages/officer-review/officer-review";

export const CLAIMS_OFFICER_ROUTES: Routes = [
  { path: 'dashboard', component: OfficerDashboard ,title: 'Dashboard'},
  { path: 'review', component: OfficerReview ,title: 'Review claim'},
];