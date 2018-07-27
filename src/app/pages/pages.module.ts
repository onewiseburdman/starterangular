import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { AdminComponent } from './admin/admin.component';
import { LostPageComponent } from './lost-page-component/lost-page-component.component';
import { EventsComponent } from './events/events.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AdminComponent,
    LostPageComponent,
    RootComponent,
    EventsComponent,
    RegisterComponent
  ]
})
export class PagesModule { }
