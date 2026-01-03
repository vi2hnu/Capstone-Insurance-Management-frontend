import { Routes } from "@angular/router";
import { SeeAllClaims } from "./pages/see-all-claims/see-all-claims";
import { AddClaimPage } from "./pages/add-claim-page/add-claim-page";

export const CLAIMS_ROUTE: Routes = [
  { path: 'view/all/claims', component: SeeAllClaims },
  { path: 'make/claim', component: AddClaimPage },
];