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
import { TimelineModule } from 'primeng/timeline';
import { StepperModule } from 'primeng/stepper';
import { FieldsetModule } from 'primeng/fieldset';
import { GalleriaModule } from 'primeng/galleria';


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
    CardModule,
    TimelineModule,
    StepperModule,
    FieldsetModule,
    GalleriaModule
  ]
})
export class PagesModule { }
