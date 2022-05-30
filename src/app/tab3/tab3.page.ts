import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  Login: FormGroup;
  isSubmitted: boolean;
  
  constructor(public formBuilder: FormBuilder) {
    this.isSubmitted = false;
  }

  ngOnInit() {
    this.Login = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      senha: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]]
    });
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.Login.valid) {
      return false;
    } else {
      console.log(this.Login.value);
    }
  }

  get formControls() {
    return this.Login.controls;
  }

}
