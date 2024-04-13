import { Component } from '@angular/core';
import { materialComponents } from '../material';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [materialComponents],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
