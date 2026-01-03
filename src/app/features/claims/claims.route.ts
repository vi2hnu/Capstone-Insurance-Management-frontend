import { Routes } from "@angular/router";
import { SeeAllClaims } from "./pages/see-all-claims/see-all-claims";

export const CLAIMS_ROUTE: Routes = [
  { path: 'view/all/claims', component: SeeAllClaims },
];