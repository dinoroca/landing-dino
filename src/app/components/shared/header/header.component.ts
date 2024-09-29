import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ThemeService } from '../../../services/theme.service';
import { Observable } from 'rxjs';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isDarkTheme$!: Observable<boolean>;
  items: MenuItem[] | undefined;

  public isDark: boolean = false;

  constructor(private themeService: ThemeService) {

    const storedTheme = localStorage.getItem('isDarkTheme');
    this.isDark = storedTheme === 'true';
  }

  ngOnInit() {
    this.isDarkTheme$ = this.themeService.isDarkTheme$;

    this.items = [
      {
          label: 'About',
          icon: 'pi pi-info-circle',
          routerLink: '/',
          routerLinkActiveOptions: { exact: true }
      },
      {
          label: 'Experience',
          icon: 'pi pi-star',
          routerLink: '/experience'
      },
      {
          label: 'Projects',
          icon: 'pi pi-search',
          routerLink: '/projects'
      },
      {
          label: 'Contact',
          icon: 'pi pi-envelope',
          routerLink: '/contact'
      }
  ];
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    const storedTheme = localStorage.getItem('isDarkTheme');
    this.isDark = storedTheme === 'true';
  }
}
