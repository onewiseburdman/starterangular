import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultViewComponent } from './views/default-view/default-view.component';
import { ItemViewComponent } from './views/item-view/item-view.component';
import { LostViewComponent } from './views/lost-view/lost-view-component.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { 
	  path: ':parent', 
	  component: DefaultViewComponent
  },
  { 
	  path: ':parent/:child', 
	  component: DefaultViewComponent
  },
  { 
	  path: ':parent/:child/:grandchild', 
	  component: DefaultViewComponent
  },
  { 
	  path: ':parent/:child/:grandchild/:name', 
	  component: ItemViewComponent
  },
  { path: '**', component: LostViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
