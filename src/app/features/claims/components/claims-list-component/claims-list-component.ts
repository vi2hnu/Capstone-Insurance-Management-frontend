import { Component, Input } from '@angular/core';
import { ClaimModel } from '../../../../core/model/claim/claim';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-claims-list-component',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './claims-list-component.html',
  styleUrl: './claims-list-component.css',
})
export class ClaimsListComponent {
  @Input() claims: ClaimModel[] = [];
}
