import { Component } from '@angular/core';
import { AddUserForm } from "../../components/add-user-form/add-user-form";

@Component({
  selector: 'app-create-user',
  imports: [AddUserForm],
  templateUrl: './create-user.html',
  styleUrl: './create-user.css',
})
export class CreateUser {
name: any;

}
