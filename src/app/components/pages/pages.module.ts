import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SharedModule } from '../shared/shared.module';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { CvComponent } from './cv/cv.component';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';

import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    HomeComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    CvComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ButtonModule,
    ImageModule,
    CardModule
  ]
})
export class PagesModule { }
