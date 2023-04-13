import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormDirectiveComponent } from './reactive-form-directive/reactive-form-directive.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'custom-directive',
        component: ReactiveFormDirectiveComponent
      },
      {
        path:'**',
        redirectTo:'custom-directive'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
