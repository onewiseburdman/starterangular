import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { DynamicPageComponent } from './dynamic-page/dynamic-page.component';
import { DynamicPageChildComponent } from './dynamic-page-child/dynamic-page-child.component';
import { DynamicPageGrandchildComponent } from './dynamic-page-grandchild/dynamic-page-grandchild.component';
import { AdminComponent } from './admin/admin.component';
import { DynamicPageGrandparentComponent } from './dynamic-page-grandparent/dynamic-page-grandparent.component';
import { LostPageComponentComponent } from './lost-page-component/lost-page-component.component';
import { DynamicPageParentComponent } from './dynamic-page-parent/dynamic-page-parent.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AdminComponent,
    DynamicPageComponent, 
    DynamicPageChildComponent, 
    DynamicPageGrandchildComponent, 
    DynamicPageGrandparentComponent, 
    LostPageComponentComponent,
    RootComponent,
    DynamicPageParentComponent]
})
export class PagesModule { }
