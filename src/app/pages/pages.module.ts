import { cssimporterComponent } from './../ui/cssimporter/cssimporter.component';
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

import { headertopComponent } from '../ui/headertop/headertop.component';

import { TypewriterheaderComponent } from './../ui/typewriterheader/typewriterheader.component';
import { InnercontainerComponent } from '../ui/innercontainer/innercontainer.component';
import { fontimporterComponent } from './../ui/fontimporter/fontimporter.compontent';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { footericonsComponent } from '../ui/footericons/footericons.component';
import { footersiteComponent } from './../ui/footersite/footersite.component';
import { SlideInOutAnimation } from './../animations/slideinout';
import { leftnavComponent } from './../ui/leftnav/lefnav.component';
import {dynamicbackgroundComponent} from './../ui/dynamicbackground/dynamicbackground.component';

import { DynamicModule } from '../directives/dynamic/dynamic.module';

@NgModule({
  imports: [
    CommonModule,
    IconsModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicModule
  ],
  declarations: [
    AdminComponent,
    cssimporterComponent,
    dynamicbackgroundComponent,
    EventsComponent,
    InnercontainerComponent,
    fontimporterComponent,
    footericonsComponent,
    footersiteComponent,
    leftnavComponent,
    LostPageComponent,
    RootComponent,
    RootcontainerComponent,
    TypewriterheaderComponent,
    RegisterComponent,
    headertopComponent
  ],
  exports: [
    fontimporterComponent,
    InnercontainerComponent,
    RootcontainerComponent,
    TypewriterheaderComponent,
  ],
  entryComponents: [ headertopComponent, RegisterComponent ],

})
export class PagesModule { }
