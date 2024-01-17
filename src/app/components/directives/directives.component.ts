import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  bg: string = '#482';
  font: number = 52;
  fontColor: string = '#627';

  invert: string = 'invert';
}
