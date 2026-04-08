import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface GalleryItem {
  id: number;
  title: string;
  thumb: string;
  image: string;
  video?: string;
  platform: string;
  year: number;
  developer: string;
  publisher: string;
  tags: string[];
}

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  selectedItem = signal<GalleryItem | null>(null);
  activeFilter = signal<string | null>(null);

  items: GalleryItem[] = [
    {
      id: 1,
      title: '2001 Aepita-Bokunatsu',
      thumb: 'gallery/Aepita-Bokunatsu-grid.webp',
      image: '/gallery/Aepita-Bokunatsu.webp',
      platform: 'PS2',
      year: 2001,
      developer: 'Kiel',
      publisher: 'Kitch',
      tags: ['ADVENTURE', 'SLICE OF LIFE', 'COZY', 'ANIMATED'],
    },
    {
      id: 2,
      title: '2005 Angel-Buildings',
      thumb: '/gallery/Angel-Buildings-grid.webp',
      image: '/gallery/Angel-Buildings.webp',
      platform: 'PS2',
      year: 2005,
      developer: 'Kiel',
      publisher: 'Kitch',
      tags: ['DRAMA', 'IYASHIKEI', 'ANIMATED', 'SCI-FI'],
    },
    {
      id: 3,
      title: '2008 Oyasumi Punpun',
      thumb: 'gallery/Punpun-and-Aiko-grid.webp',
      image: 'gallery/Punpun-and-Aiko.webp',
      platform: 'PS2',
      year: 2008,
      developer: 'Kiel',
      publisher: 'Kitch',
      tags: ['TRADEGY', 'SEINEN', 'ANIMATED', 'DRAMA', 'COMING-OF-AGE'],
    },
    {
      id: 4,
      title: '1999 Angel TV',
      thumb: 'gallery/Angel TV Background-grid.webp',
      image: 'gallery/Angel TV Background.webp',
      platform: 'PS1',
      year: 1999,
      developer: 'Kiel',
      publisher: 'Kitch',
      tags: ['DRAMA', 'SPORTS', 'ANIMATED', 'SCI-FI'],
    },
    {
      id: 5,
      title: '2001 Ryujin.',
      thumb: '/gallery/Ryujin-thumb.webp',
      image: '/imagem.png',
      video: '/gallery/Ryujin.webm',
      platform: 'PS1',
      year: 2001,
      developer: 'Kiel',
      publisher: 'Kitch',
      tags: ['SIMULATION', 'SPORTS', 'ANIMATED', 'SCI-FI'],
    },
    {
      id: 6,
      title: '2020 SUPER BASEBALL',
      thumb: '/gallery/Aiko and Punpun.webp',
      image: '/imagem.png',
      video:'/gallery/Aiko and Punpun Train.webm',
      platform: 'SNES',
      year: 1993,
      developer: 'Pallas',
      publisher: 'Tradewest',
      tags: ['SIMULATION', 'SPORTS', 'ANIMATED', 'SCI-FI'],
    },
    {
      id: 7,
      title: '2020 SUPER BASEBALL',
      thumb: '/gallery/Ryujin-clock-thumb.png',
      image: '/imagem.png',
      video: '/gallery/Ryujin Clocktower.webm',
      platform: 'SNES',
      year: 1993,
      developer: 'Pallas',
      publisher: 'Tradewest',
      tags: ['SIMULATION', 'SPORTS', 'ANIMATED', 'SCI-FI'],
    },
    {
      id: 8,
      title: '2020 SUPER BASEBALL',
      thumb: '/gallery/aepita-hoverboard-thumb.webp',
      image: '/imagem.png',
      video: '/gallery/Aepita Hoverboard.webm',
      platform: 'SNES',
      year: 1993,
      developer: 'Pallas',
      publisher: 'Tradewest',
      tags: ['SIMULATION', 'SPORTS', 'ANIMATED', 'SCI-FI'],
    },
    {
      id: 9,
      title: '2020 SUPER BASEBALL',
      thumb: '/gallery/aepita-milkshake-thumb.webp',
      image: '/imagem.png',
      video: '/gallery/Aepita Milkshake.webm',
      platform: 'SNES',
      year: 1993,
      developer: 'Pallas',
      publisher: 'Tradewest',
      tags: ['SIMULATION', 'SPORTS', 'ANIMATED', 'SCI-FI'],
    },
    {
      id: 10,
      title: '2020 SUPER BASEBALL',
      thumb: '/gallery/ryujin-angel-thumb.webp',
      image: '/imagem.png',
      video : '/gallery/Aepita Ryujin Angel Train.webm',
      platform: 'SNES',
      year: 1993,
      developer: 'Pallas',
      publisher: 'Tradewest',
      tags: ['SIMULATION', 'SPORTS', 'ANIMATED', 'SCI-FI'],
    },
    {
      id: 11,
      title: '2020 SUPER BASEBALL',
      thumb: '/gallery/angel-icecream-thumb.webp',
      image: '/imagem.png',
      video: '/gallery/Angel-Icecream.webm',
      platform: 'SNES',
      year: 1993,
      developer: 'Pallas',
      publisher: 'Tradewest',
      tags: ['SIMULATION', 'SPORTS', 'ANIMATED', 'SCI-FI'],
    },
    {
      id: 12,
      title: '2020 SUPER BASEBALL',
      thumb: '/gallery/denji-asa-thumb.webp',
      image: '/imagem.png',
      video: '/gallery/Asa Mitaka and Denji - i am CHAINSAW MAN.webm',
      platform: 'SNES',
      year: 1993,
      developer: 'Pallas',
      publisher: 'Tradewest',
      tags: ['SIMULATION', 'SPORTS', 'ANIMATED', 'SCI-FI'],
    },
    {
      id: 13,
      title: '2020 SUPER BASEBALL',
      thumb: '/gallery/confused-thumb.webp',
      image: '/imagem.png',
      video: '/gallery/Confused.webm',
      platform: 'SNES',
      year: 1993,
      developer: 'Pallas',
      publisher: 'Tradewest',
      tags: ['SIMULATION', 'SPORTS', 'ANIMATED', 'SCI-FI'],
    },
    {
      id: 14,
      title: '2020 SUPER BASEBALL',
      thumb: '/gallery/denji-penguim-thumb.webp',
      image: '/imagem.png',
      video: '/gallery/Denji Penguin.webm',
      platform: 'SNES',
      year: 1993,
      developer: 'Pallas',
      publisher: 'Tradewest',
      tags: ['SIMULATION', 'SPORTS', 'ANIMATED', 'SCI-FI'],
    },
    {
      id: 15,
      title: '2020 SUPER BASEBALL',
      thumb: '/gallery/rei-beach-thumb.webp',
      image: '/imagem.png',
      video: '/gallery/Rei Evangelion - Beach Scene.webm',
      platform: 'SNES',
      year: 1993,
      developer: 'Pallas',
      publisher: 'Tradewest',
      tags: ['SIMULATION', 'SPORTS', 'ANIMATED', 'SCI-FI'],
    },
    {
      id: 16,
      title: '2020 SUPER BASEBALL',
      thumb: '/imagem.png',
      image: '/imagem.png',
      platform: 'SNES',
      year: 1993,
      developer: 'Pallas',
      publisher: 'Tradewest',
      tags: ['SIMULATION', 'SPORTS', 'ANIMATED', 'SCI-FI'],
    },
    {
      id: 17,
      title: '2020 SUPER BASEBALL',
      thumb: '/imagem.png',
      image: '/imagem.png',
      platform: 'SNES',
      year: 1993,
      developer: 'Pallas',
      publisher: 'Tradewest',
      tags: ['SIMULATION', 'SPORTS', 'ANIMATED', 'SCI-FI'],
    },
    {
      id: 18,
      title: '2020 SUPER BASEBALL',
      thumb: '/imagem.png',
      image: '/imagem.png',
      platform: 'SNES',
      year: 1993,
      developer: 'Pallas',
      publisher: 'Tradewest',
      tags: ['SIMULATION', 'SPORTS', 'ANIMATED', 'SCI-FI'],
    },
    {
      id: 19,
      title: '2020 SUPER BASEBALL',
      thumb: '/imagem.png',
      image: '/imagem.png',
      platform: 'SNES',
      year: 1993,
      developer: 'Pallas',
      publisher: 'Tradewest',
      tags: ['SIMULATION', 'SPORTS', 'ANIMATED', 'SCI-FI'],
    },
    {
      id: 20,
      title: '2020 SUPER BASEBALL',
      thumb: '/imagem.png',
      image: '/imagem.png',
      platform: 'SNES',
      year: 1993,
      developer: 'Pallas',
      publisher: 'Tradewest',
      tags: ['SIMULATION', 'SPORTS', 'ANIMATED', 'SCI-FI'],
    },
    {
      id: 21,
      title: '2020 SUPER BASEBALL',
      thumb: '/imagem.png',
      image: '/imagem.png',
      platform: 'SNES',
      year: 1993,
      developer: 'Pallas',
      publisher: 'Tradewest',
      tags: ['SIMULATION', 'SPORTS', 'ANIMATED', 'SCI-FI'],
    },
  ];

  openModal(item: GalleryItem) {
    this.selectedItem.set(item);
  }

  closeModal() {
    this.selectedItem.set(null);
  }

  onOverlayClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.closeModal();
    }
  }
}
