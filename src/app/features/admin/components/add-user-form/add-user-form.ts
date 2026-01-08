import { Component, inject } from '@angular/core';
import { AdminService } from '../../service/admin/admin-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreateUser } from '../../model/create-user';
import { Hospital } from '../../../../core/model/provider/provider';
import { Provider } from '../../service/provider/provider';

@Component({
  selector: 'app-add-user-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-user-form.html',
  styleUrl: './add-user-form.css',
})
export class AddUserForm {
  request: CreateUser = { name: '', username: '', email: '', role: 'CUSTOMER', gender: 'MALE' };
  readonly adminService = inject(AdminService);
  readonly providerService = inject(Provider);
  hospital !:Hospital[];
  successMessage = '';
  errorMessage = '';
  showHospitalList:boolean = false;
  userId = '';
  selectedHospitalId = '';

  createUser() {
    this.successMessage = '';
    this.errorMessage = '';

    this.adminService.addUser(this.request).subscribe({
      next: (response) => {
        this.successMessage = 'User created successfully!';
        this.request = { name: '', username: '', email: '', role: 'CUSTOMER', gender: 'MALE' };
        if(response.role=='PROVIDER'){
          this.userId = response.id;
          this.getHospitals();
          this.showHospitalList = true;
        }
      },
      error: (err) => {
        if (err.status === 409) {
          this.errorMessage = 'Username or Email already taken';
        } 
        else {
          this.errorMessage = 'Failed to create user';
        }
      },
    });
  }

  getHospitals(){
    this.providerService.getHospitals().subscribe({
      next: (response) =>{
        this.hospital = response;
      }
    });
  }

  mapUser(){
    this.providerService.mapUser(this.userId,this.selectedHospitalId).subscribe({
      next:() =>{
        this.successMessage = 'User mapped successfully!';
      },
      error: () => {
          this.errorMessage = 'Failed to create user';
      },
    })
  }
}
