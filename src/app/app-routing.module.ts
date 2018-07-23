import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './pages/admin/admin.component';
import { EventsComponent } from './pages/events/events.component';
import { LostPageComponent } from './pages/lost-page-component/lost-page-component.component';
import { RegisterComponent } from './pages/register/register.component';
import { RootComponent } from './pages/root/root.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'admin', component: AdminComponent},
  { path: 'events', component: EventsComponent },
  { path: 'register', component: RegisterComponent },
  { path: ':parent', component: RootComponent},
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
