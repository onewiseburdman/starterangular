import { GetlocationComponent } from './../ui/getlocation/getlocation.component';
import { cssimporterComponent } from '../ui/cssimporter/cssimporter.component';
import { IconsModule } from '../ui/icons/icons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { AdminComponent } from './admin/admin.component';
import { LostPageComponent } from './lost-page-component/lost-page-component.component';
import { EventsComponent } from './events/events.component';
import { RegisterComponent } from './register/register.component';
//ui
import { RootcontainerComponent } from '../ui/rootcontainer/rootcontainer.component';

import { templateComponent } from '../ui/template/template.component';

import { TypewriterheaderComponent } from '../ui/typewriterheader/typewriterheader.component';
import { InnercontainerComponent } from '../ui/innercontainer/innercontainer.component';
import { fontimporterComponent } from '../ui/fontimporter/fontimporter.compontent';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { footericonsComponent } from '../ui/footericons/footericons.component';
import { footersiteComponent } from '../ui/footersite/footersite.component';
import { SlideInOutAnimation } from '../animations/slideinout';
import { leftnavComponent } from '../ui/leftnav/lefnav.component';
import {dynamicbackgroundComponent} from '../ui/dynamicbackground/dynamicbackground.component';

import { DynamicModule } from '../directives/dynamic/dynamic.module';
import { headertitleComponent } from '../ui/headertitle/headertitle.component';

import { SanitizerPipe } from '../utils/sanitizer.pipe';

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
    GetlocationComponent,
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
    templateComponent,
    SanitizerPipe
  ],
  exports: [
    fontimporterComponent,
    InnercontainerComponent,
    RootcontainerComponent,
    TypewriterheaderComponent,
  ],
  entryComponents: [ templateComponent, cssimporterComponent, dynamicbackgroundComponent, headertitleComponent ],

})
export class ViewsModule { }
