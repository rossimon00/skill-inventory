import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-dipendente',
  templateUrl: './account-dipendente.component.html',
  styleUrls: ['./account-dipendente.component.css']
})
export class AccountDipendenteComponent {
  changeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
     this.changeForm = this.formBuilder.group({
       username: ['', Validators.required],
       password: ['', Validators.required],
       confirmPassword: ['', Validators.required]
     });
  }
 
  onSubmit(): void {
     if (this.changeForm.invalid) {
       return;
     }
 
     if (this.changeForm.value.password !== this.changeForm.value.confirmPassword) {
       alert('Passwords do not match.');
       return;
     }
 
     // Code to execute when the form is submitted
     console.log('Form submitted:', this.changeForm.value);
  }
}
