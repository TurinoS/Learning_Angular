import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css',
})
export class ListRenderComponent {
  lista: string = 'lista';

  animals = [
    { name: 'Garota', type: 'Dog' },
    { name: 'Tuca', type: 'Dog' },
    { name: 'Caíque', type: 'Cat' },
    { name: 'Rapidash', type: 'Horse' },
  ];
}
