import { Component } from '@angular/core';
import { materialComponents } from '../material';
import { Icons } from './utilities';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [materialComponents],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  angularIcon: string = Icons.AngularIcon;
  dotnetIcon: string = Icons.DotNetIcon;
 
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('angularIcon', sanitizer.bypassSecurityTrustHtml(this.angularIcon));
    iconRegistry.addSvgIconLiteral('dotnetIcon', sanitizer.bypassSecurityTrustHtml(this.dotnetIcon));
  }
}
