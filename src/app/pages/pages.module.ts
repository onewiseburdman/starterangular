import { basepagemenuComponent } from './../ui/basepagemenu/basepagemenu.component';
import { basepagelayoutitemComponent } from './../ui/basepagelayoutitem/basepagelayoutitem.component';
import { basepagelayoutComponent } from './../ui/basepagelayout/basepagelayout.component';
import { cssimporterComponent } from './../ui/cssimporter/cssimporter.component';
import { IconsModule } from './../ui/icons/icons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { AdminComponent } from './admin/admin.component';
import { LostPageComponent } from './lost-page-component/lost-page-component.component';
import { EventsComponent } from './events/events.component';
import { RegisterComponent } from './register/register.component';

//directives
import { PositionDirective } from './../directives/position.directive';

//ui
import { RootcontainerComponent } from '../ui/rootcontainer/rootcontainer.component';
import { basepageComponent } from './../ui/basepage/basepage.component';

import { TypewriterheaderComponent } from './../ui/typewriterheader/typewriterheader.component';
import { InnercontainerComponent } from '../ui/innercontainer/innercontainer.component';
import { fontimporterComponent } from './../ui/fontimporter/fontimporter.compontent';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { headertitleComponent } from '../ui/headertitle/headertitle.component';
import { naviconsComponent} from '../ui/navicons/navicons.component';
import { headertopComponent } from '../ui/headertop/headertop.component';
import { footericonsComponent } from '../ui/footericons/footericons.component';
import { footersiteComponent } from './../ui/footersite/footersite.component';
import { SlideInOutAnimation } from './../animations/slideinout';
import { leftnavComponent } from './../ui/leftnav/lefnav.component';
import {dynamicbackgroundComponent} from './../ui/dynamicbackground/dynamicbackground.component';

@NgModule({
  imports: [
    CommonModule,
    IconsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AdminComponent,
    basepageComponent,
    basepagelayoutComponent,
    basepagelayoutitemComponent,
    basepagemenuComponent,
    cssimporterComponent,
    dynamicbackgroundComponent,
    EventsComponent,
    InnercontainerComponent,
    fontimporterComponent,
    footericonsComponent,
    footersiteComponent,
    headertopComponent,
    headertitleComponent,
    naviconsComponent,
    leftnavComponent,
    LostPageComponent,
    RootComponent,
    RootcontainerComponent,
    TypewriterheaderComponent,
    RegisterComponent,
    PositionDirective
  ],
  
  exports:[
    basepageComponent,
    fontimporterComponent,
    InnercontainerComponent,
    RootcontainerComponent,
    TypewriterheaderComponent,
    headertopComponent,
    headertitleComponent 
  ],
  entryComponents: [ basepagemenuComponent],

})
export class PagesModule { }
