import { Component } from '@angular/core';
import { materialComponents } from '../material';
import { CommonModule } from '@angular/common';
import { Project } from './models/project-type';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [materialComponents, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [];
}
