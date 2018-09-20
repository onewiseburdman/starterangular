import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LostPageComponent } from './views/lost-page-component/lost-page-component.component';
import { RootComponent } from './views/root/root.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { 
	  path: 'columbus/ohio', 
	  component: RootComponent
  },
  { 
	  path: ':parent', 
	  component: RootComponent
  },
  { 
	  path: ':parent/:child', 
	  component: RootComponent
  },
  { 
	  path: ':parent/:child/:grandchild', 
	  component: RootComponent
  },
  { path: '**', component: LostPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
