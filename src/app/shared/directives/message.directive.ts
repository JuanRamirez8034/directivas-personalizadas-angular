import { Directive, Input, ElementRef, OnInit, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[form-message]'
})
export class MessageDirective implements OnInit{

  private _element : HTMLElement;
  private _text : string = 'usa <text="tu mensaje"> para mensaje personalizado';
  private _color : string = '#ff0000';
  private _hide : boolean | null = false;

  @Input('text') set text(text:string){
    this._text = text;
    this.setText();
  }
  @Input('color') set color(color:string){
    this._color = color;
    this.setColor();
  }
  @Input('hide') set hide(hide:boolean | null){
    this._hide = hide;
    this.setVisible();
  }
  // @Input('hideImportant') set hideImportant(hide : boolean){
  //   if(hide){
  //     this.ViewContainer.createComponent();
  //   }else{
  //     this.ViewContainer.clear();
  //   }
  // }

  constructor(private htmlElement : ElementRef<HTMLElement>, private ViewContainer:ViewContainerRef ) { 
    this._element = htmlElement.nativeElement;
    console.log(this._element);
  }

  ngOnInit(): void {
    this.setText();
    this.setColor();
    this.setVisible();
  }

  private setText():void{
    this._element.textContent = this._text;
  }

  private setColor():void{
    this._element.style.color = this._color;
  }

  private setVisible():void{
    this._element.style.display = this._hide ? 'none' : 'block';
  }

}
