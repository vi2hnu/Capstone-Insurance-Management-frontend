import { Component, inject, OnInit } from '@angular/core';
import { ClaimModel } from '../../../../core/model/claim/claim';
import { UserService } from '../../../../core/service/user/user-service';
import { ClaimService } from '../../service/claim-service';
import { catchError, of } from 'rxjs';
import { ClaimsListComponent } from '../../components/claims-list-component/claims-list-component';

@Component({
  selector: 'app-see-all-claims',
  imports: [ClaimsListComponent],
  templateUrl: './see-all-claims.html',
  styleUrl: './see-all-claims.css',
})
export class SeeAllClaims implements OnInit {
  claims: ClaimModel[] = [];
  errorMessage: string = '';

  private userService = inject(UserService);
  private claimService = inject(ClaimService);

  ngOnInit(): void {
    const userId = this.userService.getUserId();
    if (!userId) {
      this.errorMessage = 'User not logged in.';
      return;
    }

    this.claimService.getAllClaimOfUser(userId)
      .pipe(
        catchError(err => {
          this.errorMessage = 'Failed to load claims.';
          return of([] as ClaimModel[]);
        })
      )
      .subscribe(claims => {
        this.claims = claims.sort(
          (a, b) =>
            new Date(b.claimRequestDate).getTime() -
            new Date(a.claimRequestDate).getTime()
        );
      });
  }
}
