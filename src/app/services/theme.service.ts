import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private isDarkTheme = new BehaviorSubject<boolean>(this.getStoredThemePreference());
  isDarkTheme$ = this.isDarkTheme.asObservable();

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.initializeTheme();
  }

  private getStoredThemePreference(): boolean {
    const storedPreference = localStorage.getItem('isDarkTheme');
    return storedPreference ? JSON.parse(storedPreference) : false;
  }

  private initializeTheme() {
    this.updateTheme();
  }

  toggleTheme() {
    this.isDarkTheme.next(!this.isDarkTheme.value);
    localStorage.setItem('isDarkTheme', JSON.stringify(this.isDarkTheme.value));
    this.updateTheme();
  }

  private updateTheme() {
    const head = document.getElementsByTagName('head')[0];
    let themeLink = document.getElementById('app-theme') as HTMLLinkElement;
    
    if (themeLink) {
      themeLink.href = this.isDarkTheme.value ? 
        'assets/themes/aura-dark-teal/theme.css' : 
        'assets/themes/aura-light-teal/theme.css';
    } else {
      const linkElement = this.renderer.createElement('link');
      linkElement.rel = 'stylesheet';
      linkElement.id = 'app-theme';
      linkElement.href = this.isDarkTheme.value ? 
        'assets/themes/aura-dark-teal/theme.css' : 
        'assets/themes/aura-light-teal/theme.css';
      
      this.renderer.appendChild(head, linkElement);
    }
  }
}