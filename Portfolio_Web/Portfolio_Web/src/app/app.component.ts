import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { shareableComponents } from './components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, shareableComponents],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio_Web';
}
