import { Component, effect, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type Injektion } from '../injektion.model';
import { injektionenService } from '../injektionen.service';

@Component({
  selector: 'app-edit-modal',
  imports: [FormsModule],
  templateUrl: './edit-modal.html',
  styleUrl: './edit-modal.css'
})

export class EditModal {
  injektion = input.required<Injektion>();
  close = output<void>();

  injektionenService = inject(injektionenService)

  injektionDatum = signal<string>('');
  injektionName = signal<string>('');
  injektionGroesse = signal<string>('');

  constructor() {
    effect(() => {
      if (this.injektion()) {
        this.injektionDatum.set(this.injektion().injektionDatum);
        this.injektionName.set(this.injektion().injektionName);
        this.injektionGroesse.set(this.injektion().injektionGroesse.toString());
      }
    })
  }

  setEdits() {
    this.injektionenService.updateInjection({
      id: this.injektion().id,
      injektionDatum: this.injektionDatum(),
      injektionName: this.injektionName(),
      injektionGroesse: parseFloat(this.injektionGroesse())
    })
    this.close.emit();
  }

  deleteData() { 
    this.injektionenService.removeInjection(this.injektion().id);
    this.close.emit();
  }

  onClose() {
    this.close.emit();
  }
}
