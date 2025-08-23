import { Component, output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  add = output<void>();

  openAddMenu() { 
    this.add.emit();
  }
}
