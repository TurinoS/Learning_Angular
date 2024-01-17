import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrl: './emitter.component.css',
})
export class EmitterComponent {
  myNumber: number = 2;

  onChangeNumber() {
    this.myNumber += this.myNumber;
  }
}
