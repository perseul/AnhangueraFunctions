import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgFor, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-form-dynamic',
  standalone: true,
  imports: [ReactiveFormsModule,
            TitleCasePipe,
            NgFor],
  templateUrl: './form-dynamic.component.html',
  styleUrl: './form-dynamic.component.css'
})
export class FormDynamicComponent {
  
  formData = {
    nome: '',
    email: '',
    idade: null,
    habilidades: []
  };

  form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({});
  }

  objectKeys(obj: any){
    return Object.keys(obj);
  }

  onSubmit() {
    console.log('Formulario enviado:', this.formData);
  }

  addSkill() {
    this.formData.habilidades.push();
  }
}
