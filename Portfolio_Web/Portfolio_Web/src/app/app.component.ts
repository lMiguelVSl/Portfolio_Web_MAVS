import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { sharedComponents } from './components';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, sharedComponents, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio_Web';

  hideBody:boolean = false;
}
