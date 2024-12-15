import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  items: { label?: string; icon?: string; separator?: boolean }[] = [];

  ngOnInit() {

  }
}
