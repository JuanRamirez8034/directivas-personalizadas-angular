import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MessageDirective } from './directives/message.directive';


@NgModule({
  declarations: [
    MessageDirective
  ],
  exports: [
    MessageDirective,
  ]
})
export class SharedModule { }
