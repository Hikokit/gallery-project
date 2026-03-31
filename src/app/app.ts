import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Content } from './components/content/content';
import { Marquee } from './components/marquee/marquee';
import { Stage } from './components/stage/stage';
import { Gallery } from './components/gallery/gallery';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Content, Marquee, Stage, Gallery],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto-angular');
}

