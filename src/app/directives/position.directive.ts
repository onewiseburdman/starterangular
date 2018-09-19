import { Directive, ViewContainerRef, TemplateRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[pub]'
})
export class PositionDirective implements OnInit{
  published=false;
  constructor(private viewContainer: ViewContainerRef,
    private template: TemplateRef<Object>) { }
ngOnInit(){
  const published = this.published;
  if(published){
    this.viewContainer.createEmbeddedView(this.template);
  } else {
    this.viewContainer.clear();
  }
  }

}


