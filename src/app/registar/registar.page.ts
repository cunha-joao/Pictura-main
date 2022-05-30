import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registar',
  templateUrl: './registar.page.html',
  styleUrls: ['./registar.page.scss'],
})
export class RegistarPage implements OnInit {
  Registar: FormGroup;
  isSubmitted: boolean;
  
  constructor(public formBuilder: FormBuilder) {
    this.isSubmitted = false;
  }

  ngOnInit() {
    this.Registar = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      senha: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      morada: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.Registar.valid) {
      return false;
    } else {
      console.log(this.Registar.value);
    }
  }

  get formControls() {
    return this.Registar.controls;
  }

}
