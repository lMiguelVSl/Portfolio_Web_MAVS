import { Component } from '@angular/core';
import { materialComponents } from '../material';
import { CommonModule } from '@angular/common';
import { Project } from './models/project-type';

const projectsMock: Project[] = [
  {
      Title: "E-commerce Website",
      Description: "A fully functional e-commerce platform for selling various products online.",
      Stack: "React, Node.js, MongoDB",
      ImgUrl: "https://example.com/ecommerce.png"
  },
  {
      Title: "Fitness Tracker App",
      Description: "An app to track workouts, set fitness goals, and monitor progress over time.",
      Stack: "Flutter, Firebase",
      ImgUrl: "https://example.com/fitness_app.png"
  },
  {
      Title: "Sales Performance Dashboard",
      Description: "A dashboard to analyze sales data, track performance metrics, and visualize trends.",
      Stack: "Python, Pandas, Matplotlib",
      ImgUrl: "https://example.com/sales_dashboard.png"
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
