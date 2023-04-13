import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { ReactiveFormDirectiveComponent } from './reactive-form-directive/reactive-form-directive.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ReactiveFormDirectiveComponent,
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    SharedModule,
  ]
})
export class FormModule { }
