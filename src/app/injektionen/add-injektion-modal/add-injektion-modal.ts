import { Component, output, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { injektionenService } from '../injektionen.service';

@Component({
  selector: 'app-add-injektion-modal',
  imports: [FormsModule],
  templateUrl: './add-injektion-modal.html',
  styleUrl: './add-injektion-modal.css'
})
export class AddInjektionModal {
  close = output<void>();

  injektionenService = inject(injektionenService)

  injektionDatum = signal<string>('');
  injektionName = signal<string>('');
  injektionGroesse = signal<string>('');

  addInjektion() { 
    let id = 'i' + this.injektionenService._injektionen().length + 1;
    this.injektionenService.addInjection({
      id: id,
      injektionDatum: this.injektionDatum(),
      injektionName: this.injektionName(),
      injektionGroesse: parseFloat(this.injektionGroesse())
    });
    this.close.emit();
  }

  onClose() {
    this.close.emit();
  }
}
