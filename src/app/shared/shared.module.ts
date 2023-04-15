import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MessageDirective } from './directives/message.directive';
import { CustonNgIfDirective } from './directives/custon-ng-if.directive';



@NgModule({
  declarations: [
    MessageDirective,
    CustonNgIfDirective,
  ],
  exports: [
    MessageDirective,
    CustonNgIfDirective
  ]
})
export class SharedModule { }
