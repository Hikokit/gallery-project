import { Component, signal, computed, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface Track {
  name: string;
  src: string;
}

@Component({
  selector: 'app-music-player',
  imports: [],
  templateUrl: './music-player.html',
  styleUrl: './music-player.css',
})
export class MusicPlayer implements OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  tracks: Track[] = [
    { name: 'LAGTRAIN (TRAP/JERSEY CLUB REMIX) - FIELPS', src: '/music/Lagtrain (Trap_Jersey Club remix) - Fielps (youtube).mp3' },
    { name: "FCKIN' ACTIVE VOICE LOL - KIEL", src: "/music/fckin' active voice lol - KIEL (youtube).mp3" },
    { name: 'LISA FRANK 420 - MACINTOSH PLUS', src: '/music/MACINTOSH PLUS - FLORAL SHOPPE - 02 リサフランク420 - 現代のコンピュー - ａｅｓｔｈｅｔｉｃｓ (youtube).mp3' },
  ];

  currentIndex = signal(0);
  isPlaying = signal(false);
  currentTime = signal(0);
  duration = signal(0);
  volume = signal(1);
  isMuted = signal(false);

  currentTrack = computed(() => this.tracks[this.currentIndex()]);
  progressPercent = computed(() =>
    this.duration() > 0 ? (this.currentTime() / this.duration()) * 100 : 0
  );

  private audio: HTMLAudioElement | null = null;

  constructor() {
    if (this.isBrowser) {
      this.audio = new Audio();
      this.audio.addEventListener('ended', () => this.nextTrack());
      this.audio.addEventListener('timeupdate', () => this.currentTime.set(this.audio!.currentTime));
      this.audio.addEventListener('loadedmetadata', () => this.duration.set(this.audio!.duration));
    }
  }

  togglePlay() {
    if (!this.audio || !this.currentTrack().src) return;
    if (this.isPlaying()) {
      this.audio.pause();
      this.isPlaying.set(false);
    } else {
      if (this.audio.src !== location.origin + this.currentTrack().src) {
        this.audio.src = this.currentTrack().src;
      }
      this.audio.play().catch(() => this.isPlaying.set(false));
      this.isPlaying.set(true);
    }
  }

  prevTrack() {
    if (!this.audio) return;
    const wasPlaying = this.isPlaying();
    this.audio.pause();
    this.currentTime.set(0);
    this.duration.set(0);
    this.currentIndex.update(i => (i - 1 + this.tracks.length) % this.tracks.length);
    if (wasPlaying) this.playCurrentTrack();
  }

  nextTrack() {
    if (!this.audio) return;
    const wasPlaying = this.isPlaying();
    this.audio.pause();
    this.currentTime.set(0);
    this.duration.set(0);
    this.currentIndex.update(i => (i + 1) % this.tracks.length);
    if (wasPlaying) this.playCurrentTrack();
  }

  private draggingVolume = false;

  onVolumePointerDown(event: PointerEvent) {
    if (!this.isBrowser) return;
    const bar = event.currentTarget as HTMLElement;
    bar.setPointerCapture(event.pointerId);
    this.draggingVolume = true;
    this.updateVolume(event, bar);
  }

  onVolumePointerMove(event: PointerEvent) {
    if (!this.draggingVolume) return;
    const bar = event.currentTarget as HTMLElement;
    this.updateVolume(event, bar);
  }

  onVolumePointerUp() {
    this.draggingVolume = false;
  }

  private updateVolume(event: PointerEvent, bar: HTMLElement) {
    if (!this.audio) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    this.volume.set(ratio);
    this.audio.volume = ratio;
    this.isMuted.set(ratio === 0);
  }


  toggleMute() {
    if (!this.audio) return;
    const muted = !this.isMuted();
    this.isMuted.set(muted);
    this.audio.volume = muted ? 0 : this.volume();
  }

  seek(event: MouseEvent) {
    if (!this.audio) return;
    const bar = event.currentTarget as HTMLElement;
    const ratio = event.offsetX / bar.offsetWidth;
    this.audio.currentTime = ratio * this.audio.duration;
  }

  formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  private playCurrentTrack() {
    if (!this.audio) return;
    this.audio.src = this.currentTrack().src;
    this.audio.play().catch(() => this.isPlaying.set(false));
    this.isPlaying.set(true);
  }

  ngOnDestroy() {
    if (this.audio) {
      this.audio.pause();
      this.audio.src = '';
    }
  }
}
