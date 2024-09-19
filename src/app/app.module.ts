import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Importar ReactiveFormsModule
import { AppComponent } from './app.component';
import { PetStoreFormComponent } from './pet-store-form/pet-store-form.component';
import { PetStoreHeaderComponent } from './pet-store-header/pet-store-header.component';
import { PetStoreFooterComponent } from './pet-store-footer/pet-store-footer.component';
import { SuccessPageComponent } from './success-page/success-page.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PetStoreFormComponent,
    PetStoreHeaderComponent,
    PetStoreFooterComponent,
    SuccessPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule // Adicionar ReactiveFormsModule aos imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
