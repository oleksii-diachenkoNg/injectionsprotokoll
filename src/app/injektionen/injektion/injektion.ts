import { Component, input, output } from '@angular/core';

import { Injektion as InjektionType } from '../injektion.model';

@Component({
  selector: 'app-injektion',
  imports: [],
  templateUrl: './injektion.html',
  styleUrl: './injektion.css'
})

export class Injektion {
  injektion = input.required<InjektionType>()
  edit = output<InjektionType>();

  editData() { 
    this.edit.emit(this.injektion());
  }
}
