import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminFooterComponent } from './view-elements/admin-footer/admin-footer.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { backgroundimageComponent} from './view-elements/backgroundimage/backgroundimage.component';
import { backgroundsolidComponent } from './view-elements/backgroundsolid/backgroundsolid.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { csslinkComponent } from './view-elements/csslink/csslink.component';
import { dynamiccontainerComponent} from './view-elements/dynamiccontainer/dynamiccontainer.component';
import { dynamicModule } from '../directives/dynamic/dynamic.module';
import { DefaultViewComponent } from './default-view/default-view.component';
import { EventsViewComponent } from './events-view/events-view.component';
import { fontlinkComponent } from './view-elements/fontlink/fontlink.compontent';
import { footericonsComponent } from './view-elements/footericons/footericons.component';
import { footersiteComponent } from './view-elements/footersite/footersite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetlocationComponent } from './view-elements/getlocation/getlocation.component';
import { headertitleComponent } from './view-elements/headertitle/headertitle.component';
import { HomeViewComponent} from './home-view/home-view.component';
import { IconsModule } from './view-elements/icons/icons.module';
import { InnercontainerComponent } from './view-elements/innercontainer/innercontainer.component';
import { leftnavComponent } from './view-elements/leftnav/lefnav.component';
import { LostViewComponent } from './lost-view/lost-view-component.component';

import { RegisterViewComponent } from './register-view/register-view.component';
import { testModule } from '../test/test.component';
import { templateComponent } from './view-elements/template/template.component';
import { TypewriterheaderComponent } from './view-elements/typewriterheader/typewriterheader.component';
import { SanitizerPipe } from '../utils/sanitizer.pipe';
import { SlideInOutAnimation } from '../animations/slideinout';
import { ListViewComponent } from './list-view/list-view.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { GenericViewComponent } from './generic-view/generic-view.component';

//ui



@NgModule({
  imports: [
    CommonModule,
    dynamicModule,
    IconsModule,
    FormsModule,
    ReactiveFormsModule,
    testModule,
  ],
  declarations: [
    AdminViewComponent,
    AdminFooterComponent,
    backgroundimageComponent,
    backgroundsolidComponent,
    csslinkComponent,
    ContactViewComponent,
    DefaultViewComponent,
    dynamiccontainerComponent,
    EventsViewComponent,
    fontlinkComponent,
    footericonsComponent,
    footersiteComponent,
    GenericViewComponent,
    GetlocationComponent,
    headertitleComponent,
    HomeViewComponent,
    InnercontainerComponent,
    ItemViewComponent,
    leftnavComponent,
    ListViewComponent,
    LostViewComponent,
    RegisterViewComponent,
    SanitizerPipe,
    templateComponent,
    TypewriterheaderComponent,
    AdminFooterComponent,
    
  ],
  entryComponents: [ 
    csslinkComponent, 
    backgroundimageComponent, 
    backgroundsolidComponent, 
    headertitleComponent,
    templateComponent  
  ],

})
export class viewsModule { }
