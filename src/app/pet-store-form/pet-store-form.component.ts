import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-store-form',
  templateUrl: './pet-store-form.component.html',
  styleUrls: ['./pet-store-form.component.css']
})
export class PetStoreFormComponent {
  petStoreForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.petStoreForm = this.fb.group({
      storeName: ['', Validators.required],
      ownerName: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^\\d{10,15}$')]],
      email: ['', [Validators.required, Validators.email]],
      website: [''],
      openingHours: ['']
    });
  }

  onSubmit() {
    if (this.petStoreForm.valid) {
      console.log(this.petStoreForm.value);
      alert('Cadastro realizado com sucesso!');
      this.petStoreForm.reset();
      this.router.navigate(['/success']); // Redireciona para a página de sucesso
    } else {
      console.log('Formulário inválido');
    }
  }
}
