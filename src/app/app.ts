import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Injektionen } from "./injektionen/injektionen";
import { Header } from "./header/header";

@Component({
  selector: 'app-root',
  imports: [Injektionen, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'injectionsprotokoll';
}
