import { Component } from '@angular/core';
import { materialComponents } from '../material';
import { CommonModule } from '@angular/common';
import { Project } from './models/project-type';

const projectsMock: Project[] = [
  {
    Title: "User management",
    Description: "A grid view with CRUD operations to manage user information and operations.",
    Stack: "Angular | .NET | SQL",
    ImgUrl: "../../../assets/img/user-management-app.png"
  },
  {
    Title: "User Registration",
    Description: "View with registration form and grid view.",
    Stack: "ReactJS | Node.JS | MongoDB",
    ImgUrl: "../../../assets/img/upet-app.png"
  },
  {
    Title: "Car List",
    Description: "A grid view with different view to manage CRUD operations regarding car registration.",
    Stack: "Angular | .NET | SQL",
    ImgUrl: "../../../assets/img/cars-app.png"
  },
  {
    Title: "Countries App",
    Description: "An app to search information about all countries.",
    Stack: "Angular | Countries API Consuption",
    ImgUrl: "../../../assets/img/countries-app.png"
  },
  {
    Title: "Gifs",
    Description: "An app to search the GIFs you want to see, including an search historial.",
    Stack: "Angular | GIFs API Consuption",
    ImgUrl: "../../../assets/img/gif-app.png"
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
