import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  text: string = 'TESTANDO OS PIPE OPERATORS';

  today = new Date();
}
