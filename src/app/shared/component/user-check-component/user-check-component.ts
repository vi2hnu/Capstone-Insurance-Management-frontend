import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CheckUserModel } from '../../../core/model/user/check-user-model';
import { UserService } from '../../../core/service/user/user-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-check-component',
  imports: [FormsModule],
  templateUrl: './user-check-component.html',
  styleUrl: './user-check-component.css',
})
export class UserCheckComponent {
  user : CheckUserModel ={
    name:'',
    email:'',
    gender:'MALE'
  }
  readonly userService = inject(UserService);
  errorMessage = '';

  @Output() customerChecked = new EventEmitter<string>();

  submit(){
    this.userService.checkUser(this.user).subscribe({
      next: (response) =>{
        const customerId = response.toString();
        localStorage.setItem("customerId",customerId);
        this.customerChecked.emit(customerId);
      },
      error: () =>{
        this.errorMessage = 'failed to check user'
      }
    })
  }

}
