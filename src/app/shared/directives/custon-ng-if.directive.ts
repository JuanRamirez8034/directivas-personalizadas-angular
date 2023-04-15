import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[custonNgIf]'
})
export class CustonNgIfDirective {
  
  @Input('custonNgIf') set custonNgIf(condition : boolean | null){
    if(condition){
      this.viewContainer.createEmbeddedView(this.templateRef);
      return;
    }
    this.viewContainer.clear();
  }

  constructor(
    private templateRef   : TemplateRef<HTMLAreaElement>,
    private viewContainer : ViewContainerRef
  ) { }

}
