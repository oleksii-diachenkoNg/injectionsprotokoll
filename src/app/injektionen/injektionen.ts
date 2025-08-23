import { Component, inject, signal } from '@angular/core';

import { Injektion } from "./injektion/injektion";
import { EditModal } from './edit-modal/edit-modal';

import { injektionenService } from './injektionen.service';
import { type Injektion as InjektionType } from './injektion.model';

@Component({
  selector: 'app-injektionen',
  imports: [Injektion, EditModal],
  templateUrl: './injektionen.html',
  styleUrl: './injektionen.css'
})
export class Injektionen  {
  private inektionenService = inject(injektionenService);
  currentInjektion = signal<InjektionType | null>(null);

  get injektionen() {
    return this.inektionenService._injektionen();
  }

  editModalIsOpen = signal(false);

  onEditModalOpen(injektion: InjektionType) { 
    this.currentInjektion.set(injektion);
    this.editModalIsOpen.set(true);
  }

  onEditModalClose() {
    this.editModalIsOpen.set(false);
  }
}
