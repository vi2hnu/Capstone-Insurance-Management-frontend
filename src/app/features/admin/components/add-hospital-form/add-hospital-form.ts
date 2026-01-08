import { Component, inject } from '@angular/core';
import { CreateHospital } from '../../model/create-hospital';
import { Provider } from '../../service/provider/provider';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-hospital-form',
  imports: [FormsModule],
  templateUrl: './add-hospital-form.html',
  styleUrl: './add-hospital-form.css',
})
export class AddHospitalForm {
  request: CreateHospital = {
    hospitalName:'',
    cityName:'',
    phoneNumber:'',
    email:''
  };
  readonly providerService = inject(Provider);
  successMessage = '';
  errorMessage = '';


  createHospital(){
    if (!this.request.hospitalName?.trim() || !this.request.cityName?.trim() || !this.request.phoneNumber?.trim()){
      this.errorMessage = 'Fields cannot be empty or spaces only';
      return;
    }

    this.providerService.addHospital(this.request).subscribe({
      next: ()=>{
        this.successMessage = "Hospital entry created successfully";
      },
      error: (err)=>{
        if(err.status === 409){
          this.errorMessage = "Hospital already exists";
        }
        else{
          this.errorMessage = "Failed to create hospital";
        }
      }
    })
  }

}
