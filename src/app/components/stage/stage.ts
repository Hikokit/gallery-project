import { Component, signal } from '@angular/core';
import { MusicPlayer } from '../music-player/music-player';

export interface DesktopIcon {
  id: string;
  label: string;
  icon: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

@Component({
  selector: 'app-stage',
  imports: [MusicPlayer],
  templateUrl: './stage.html',
  styleUrl: './stage.css',
})
export class Stage {
  activeWindow = signal<string | null>(null);

  icons: DesktopIcon[] = [
    { id: 'about',     label: 'about.txt',    icon: '📄', top: '8%',  left: '3%'  },
    { id: 'works',     label: 'my works',     icon: '🗂️', top: '26%', left: '3%'  },
    { id: 'guestbook', label: 'guestbook',    icon: '📖', top: '46%', left: '5%'  },
    { id: 'internet',  label: 'internet.exe', icon: '🌐', top: '8%',  right: '3%' },
    { id: 'links',     label: 'links.html',   icon: '🔗', top: '26%', right: '3%' },
    { id: 'mail',      label: 'mail',         icon: '✉️', top: '46%', right: '5%' },
  ];

  openWindow(id: string) {
    this.activeWindow.set(id);
  }

  closeWindow(event: MouseEvent) {
    event.stopPropagation();
    this.activeWindow.set(null);
  }

  onOverlayClick() {
    this.activeWindow.set(null);
  }
}
