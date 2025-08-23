import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Injektionen } from "./injektionen/injektionen";
import { Header } from "./header/header";
import { AddInjektionModal } from "./injektionen/add-injektion-modal/add-injektion-modal";

@Component({
  selector: 'app-root',
  imports: [Injektionen, Header, AddInjektionModal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'injectionsprotokoll';
  isAddModalOpen = false;

  onOpenAddModal() { 
    this.isAddModalOpen = true;
  }

  onCloseAddModal() { 
    this.isAddModalOpen = false;
  }
}
