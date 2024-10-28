import { Component } from '@angular/core';

interface EventItem {
  status?: string;
  subtitle?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
  text?: string;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  events: EventItem[];
  images: any[] | undefined;
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  constructor() {
    this.events = [
      {
        status: 'Selecta Genetica y Biotecnologia S.A.C.',
        subtitle: 'Desarrollador web fullstack',
        date: '19/04/2023 - Acualidad', icon: 'pi pi-bolt',
        color: '#9C27B0', image: 'game-controller.jpg',
        text: 'En esta empresa ocupo el cargo de desarrollador web FullStack'
      },

      { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
      { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
      { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];

    this.images = [
      {itemImageSrc: '../../../../assets/imgs/selectagenetica1.png'},
      {itemImageSrc: '../../../../assets/imgs/selectagenetica.png'},
      {itemImageSrc: '../../../../assets/imgs/wkp1.png'},
      {itemImageSrc: '../../../../assets/imgs/wkp.png'},
      {itemImageSrc: '../../../../assets/imgs/agp1.png'},
      {itemImageSrc: '../../../../assets/imgs/agp2.png'},
      {itemImageSrc: '../../../../assets/imgs/agp.png'}
    ]
  }
}