import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { ReactiveFormDirectiveComponent } from './reactive-form-directive/reactive-form-directive.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReactiveFormDirectiveComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormRoutingModule,
    SharedModule,
  ]
})
export class FormModule { }
