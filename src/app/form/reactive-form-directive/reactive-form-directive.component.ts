import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-directive',
  templateUrl: './reactive-form-directive.component.html',
  styleUrls: ['./reactive-form-directive.component.css']
})
export class ReactiveFormDirectiveComponent {

  public formulario !: FormGroup;

  constructor(private fb:FormBuilder){

    this.formulario = this.fb.group({
      campo : [null, [Validators.required, Validators.minLength(3)]]
    });
  }

  public get campoError():boolean | null{
    const control  = this.formulario.controls['campo'];
    return !(control.errors && control.touched);
  }
}
