import { Component } from '@angular/core';
import { materialComponents } from '../material';
import { CommonModule } from '@angular/common';
import { Project } from './models/project-type';

const projectsMock: Project[] = [
  {
    Title: "User management",
    Description: "A grid view with CRUD operations to manage user information and operations.",
    Stack: "Angular | .NET | SQL",
    ImgUrl: ""
  },
  {
    Title: "User Registration",
    Description: "View with registration form and grid view.",
    Stack: "ReactJS | Node.JS | MongoDB",
    ImgUrl: ""
  },
  {
    Title: "Car List",
    Description: "A grid view with different view to manage CRUD operations regarding car registration.",
    Stack: "Angular | .NET | SQL",
    ImgUrl: ""
  },
  {
    Title: "Gifs",
    Description: "An app to search the GIFs you want to see, including an search historial.",
    Stack: "Angular | GIFs API Consuption",
    ImgUrl: ""
  }
];;

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [materialComponents, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = projectsMock;
}
