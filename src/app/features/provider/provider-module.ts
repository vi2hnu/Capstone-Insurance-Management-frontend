import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROVIDER_ROUTES } from './provider.routes';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(PROVIDER_ROUTES)
  ]
})
export class ProviderModule { }
