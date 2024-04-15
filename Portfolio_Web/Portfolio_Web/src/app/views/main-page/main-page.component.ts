import { Component } from '@angular/core';
import { materialComponents } from '../../components/material';
import { sharedComponents } from '../../components';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [materialComponents, sharedComponents],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
