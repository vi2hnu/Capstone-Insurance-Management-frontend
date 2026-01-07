import { Component, inject, OnInit } from '@angular/core';
import { Roleservice } from '../../../../core/service/roleservice';
import { UserCheckComponent } from "../../../../shared/component/user-check-component/user-check-component";
import { PolicyCard } from "../../components/policy-card/policy-card";
import { UserService } from '../../../../core/service/user/user-service';

@Component({
  selector: 'app-your-policies',
  imports: [UserCheckComponent, PolicyCard],
  templateUrl: './your-policies.html',
  styleUrl: './your-policies.css',
})
export class YourPolicies implements OnInit {
  role = '';
  haveUserDetails = false;
  id = '';

  readonly roleService = inject(Roleservice);
  readonly userService = inject(UserService);

  ngOnInit(): void {
    this.role = this.roleService.getRole()!;

    if (this.role === 'USER') {
      this.haveUserDetails = true;
      this.id = this.userService.getUserId()!;
    }
  }

  onCustomerChecked(customerId: string) {
    this.id = customerId;
    this.haveUserDetails = true;
  }
}

