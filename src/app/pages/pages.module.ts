import { IconsModule } from './../ui/icons/icons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { AdminComponent } from './admin/admin.component';
import { LostPageComponent } from './lost-page-component/lost-page-component.component';
import { EventsComponent } from './events/events.component';
import { RegisterComponent } from './register/register.component';

//ui
import { RootcontainerComponent } from '../ui/rootcontainer/rootcontainer.component';
import { TypewriterheaderComponent } from './../ui/typewriterheader/typewriterheader.component';
import { InnercontainerComponent } from '../ui/innercontainer/innercontainer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { headertitleComponent } from '../ui/headertitle/headertitle.component';
import { naviconsComponent} from '../ui/navicons/navicons.component';
import { headertopComponent } from '../ui/headertop/headertop.component';
import { footersiteComponent } from './../ui/footersite/footersite.component';
import { SlideInOutAnimation } from './../animations/slideinout';
import { leftnavComponent } from './../ui/leftnav/lefnav.component';


@NgModule({
  imports: [
    CommonModule,
    IconsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AdminComponent,
    EventsComponent,
    InnercontainerComponent,
    footersiteComponent,
    headertopComponent,
    headertitleComponent,
    naviconsComponent,
    leftnavComponent,
    LostPageComponent,
    RootComponent,
    RootcontainerComponent,
    TypewriterheaderComponent,
    RegisterComponent
  ],
  
  exports:[
    InnercontainerComponent,
    RootcontainerComponent,
    TypewriterheaderComponent,
    headertopComponent,
    headertitleComponent 
  ]
})
export class PagesModule { }
