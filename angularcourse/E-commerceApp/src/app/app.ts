import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from './components/products/products';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [Products,Footer ,Header ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('E-commerceApp');
}
