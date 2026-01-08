import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-conformation-component',
  standalone: true,
  templateUrl: './conformation-component.html',
  styleUrl: './conformation-component.css',
})
export class ConformationComponent {
  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  onYes() {
    this.confirm.emit();
  }

  onNo() {
    this.cancel.emit();
  }
}
