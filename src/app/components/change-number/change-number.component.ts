import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrl: './change-number.component.css',
})
export class ChangeNumberComponent {
  @Output() changeNumber: EventEmitter<MouseEvent> = new EventEmitter();

  handleClick(): void {
    this.changeNumber.emit();
  }
}
