import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { backgroundimageComponent} from './page-elements/backgroundimage/backgroundimage.component';
import { backgroundsolidComponent } from './page-elements/backgroundsolid/backgroundsolid.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { csslinkComponent } from './page-elements/csslink/csslink.component';
import { dynamiccontainerComponent} from './page-elements/dynamiccontainer/dynamiccontainer.component';
import { dynamicModule } from '../directives/dynamic/dynamic.module';
import { DefaultViewComponent } from './default-view/default-view.component';
import { EventsViewComponent } from './events-view/events-view.component';
import { fontlinkComponent } from './page-elements/fontlink/fontlink.compontent';
import { footericonsComponent } from './page-elements/footericons/footericons.component';
import { footersiteComponent } from './page-elements/footersite/footersite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetlocationComponent } from './page-elements/getlocation/getlocation.component';
import { headertitleComponent } from './page-elements/headertitle/headertitle.component';
import { HomeViewComponent} from './home-view/home-view.component';
import { IconsModule } from './page-elements/icons/icons.module';
import { InnercontainerComponent } from './page-elements/innercontainer/innercontainer.component';

import { leftnavComponent } from './page-elements/leftnav/lefnav.component';
import { LostViewComponent } from './lost-view/lost-view-component.component';
import { PageContentComponent } from './page-content/page-content.component';

import { RegisterViewComponent } from './register-view/register-view.component';
import { testModule } from '../test/test.component';
import { templateComponent } from './page-elements/template/template.component';
import { TypewriterheaderComponent } from './page-elements/typewriterheader/typewriterheader.component';
import { SanitizerPipe } from '../utils/sanitizer.pipe';
import { SlideInOutAnimation } from '../animations/slideinout';
import { PageStructureComponent } from './page-structure/page-structure.component';
import { ListViewComponent } from './list-view/list-view.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { SiteViewComponent } from './site-view/site-view.component';

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
    GetlocationComponent,
    headertitleComponent,
    HomeViewComponent,
    InnercontainerComponent,
    leftnavComponent,
    LostViewComponent,
    PageContentComponent,
    TypewriterheaderComponent,
    RegisterViewComponent,
    templateComponent,
    SanitizerPipe,
    PageStructureComponent,
    ListViewComponent,
    ItemViewComponent,
    SiteViewComponent,
  ],
  exports: [
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
