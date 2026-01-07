import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../../../core/service/user/user-service';
import { ChangePasswordForm } from "../../components/change-password-form/change-password-form";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-your-info',
  imports: [ChangePasswordForm, FormsModule],
  templateUrl: './your-info.html',
  styleUrl: './your-info.css',
})
export class YourInfo implements OnInit{
  userName :string ='';
  email : string ='';
  readonly userService = inject(UserService);

  ngOnInit(): void {
    this.userName = this.userService.getUserName()!;
    this.email = this.userService.getUserEmail()!;
  }
}
