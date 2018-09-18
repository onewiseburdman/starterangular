import { Directive, ViewContainerRef, TemplateRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[published]'
})
export class PositionDirective implements OnInit{
  published: any;
@Input () templateposition: string;
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


