import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetStoreFormComponent } from './pet-store-form/pet-store-form.component';
import { SuccessPageComponent } from './success-page/success-page.component';

const routes: Routes = [
  { path: '', component: PetStoreFormComponent },
  { path: 'success', component: SuccessPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
