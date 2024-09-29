import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    MenubarModule,
    BadgeModule, 
    AvatarModule, 
    InputTextModule, 
    RippleModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
