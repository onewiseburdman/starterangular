import { DynamicPageParentComponent } from './pages/dynamic-page-parent/dynamic-page-parent.component';
import { LostPageComponentComponent } from './pages/lost-page-component/lost-page-component.component';
import { AdminComponent } from './pages/admin/admin.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RootComponent } from './pages/root/root.component';
import { DynamicPageComponent } from './pages/dynamic-page/dynamic-page.component';
import { DynamicPageChildComponent } from './pages/dynamic-page-child/dynamic-page-child.component';
import { DynamicPageGrandparentComponent } from './pages/dynamic-page-grandparent/dynamic-page-grandparent.component';
import { DynamicPageGrandchildComponent } from './pages/dynamic-page-grandchild/dynamic-page-grandchild.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: RootComponent},
  { path: 'admin', component: AdminComponent},
  { 
	  path: ':parent', 
	  component: RootComponent, 
	  children: [
		  {path: ':child', component: DynamicPageParentComponent}
  	]
  },
  { path: '**', component: LostPageComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
