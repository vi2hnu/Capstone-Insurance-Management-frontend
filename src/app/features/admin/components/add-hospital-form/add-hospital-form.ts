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
    this.providerService.addHospital(this.request).subscribe({
      next: ()=>{
        this.successMessage = "Hospital entry created successfully";
      },
      error: (err)=>{
        if(err.status === 409){
          this.errorMessage = "User already mapped with another hospital";
        }
        else{
          this.errorMessage = "Failed to create hospital";
        }
      }
    })
  }

}
