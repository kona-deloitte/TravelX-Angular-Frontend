import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { packages } from '../type';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-package-details',
  imports: [RouterLink],
  templateUrl: './package-details.html',
  styleUrl: './package-details.css',
})
export class PackageDetails {
  @Input() package: packages | null = null;

  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }
}
