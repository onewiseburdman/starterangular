import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  IconCamera, 
  IconCalendar,
  IconHeart, 
  IconHome,
  IconGithub, 
  IconPlusCircle,
  IconFacebook,
  IconTwitter,
  IconLinkedin,
  IconVideo,
  IconStar, 
  IconLogIn, 
  IconLogOut,
  IconShoppingBag,
  IconShoppingCart,
  IconSearch,
  IconUnlock,
  IconUsers,
  IconX
} from 'angular-feather';

const icons = [
  IconCamera,
  IconCalendar,
  IconHeart,
  IconHome,
  IconGithub,
  IconPlusCircle,
  IconFacebook,
  IconTwitter,
  IconVideo,
  IconLinkedin,
  IconStar,
  IconSearch,
  IconUsers,
  IconUnlock,
  IconLogIn,
  IconLogOut,
  IconShoppingBag,
  IconShoppingCart,
  IconX
];
@NgModule({
  imports: [
    CommonModule,
    
  ],
  exports: [
    icons
  ],
  declarations: []
})
export class IconsModule { }
