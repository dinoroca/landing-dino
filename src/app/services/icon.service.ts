import { Injectable } from '@angular/core';
import * as SimpleIcons from 'simple-icons';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  getIcon(name: string): SimpleIcons.SimpleIcon {
    const icon = SimpleIcons[name as keyof typeof SimpleIcons];
    if (typeof icon === 'object' && 'title' in icon && 'slug' in icon && 'svg' in icon && 'path' in icon) {
      return icon as SimpleIcons.SimpleIcon;
    }
    throw new Error(`Icon ${name} not found or invalid`);
  }
}