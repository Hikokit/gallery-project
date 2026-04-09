import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Track {
  id: number;
  title: string;
  artist: string;
  url: string;
}

@Component({
  selector: 'app-music-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music-player.html',
  styleUrl: './music-player.css',
})
export class MusicPlayer implements OnInit {
  tracks = signal<Track[]>([
    { id: 1, title: 'Track 01', artist: 'Artist Name', url: '/music/track1.mp3' },
    { id: 2, title: 'Track 02', artist: 'Artist Name', url: '/music/track2.mp3' },
  ]);

  currentTrackIndex = signal(0);
  isPlaying = signal(false);
  currentTime = signal(0);
  duration = signal(0);
  volume = signal(70);
  showPlaylist = signal(false);

  private audio: HTMLAudioElement | null = null;

  ngOnInit() {
    this.audio = new Audio();
    this.audio.addEventListener('timeupdate', () =>
      this.currentTime.set(this.audio!.currentTime)
    );
    this.audio.addEventListener('loadedmetadata', () =>
      this.duration.set(this.audio!.duration)
    );
    this.audio.addEventListener('ended', () => this.nextTrack());
    this.loadTrack(0);
  }

  loadTrack(index: number) {
    if (index >= 0 && index < this.tracks().length) {
      this.currentTrackIndex.set(index);
      const track = this.tracks()[index];
      if (this.audio) {
        this.audio.src = track.url;
        this.audio.load();
      }
    }
  }

  play() {
    if (this.audio && !this.isPlaying()) {
      this.audio.play();
      this.isPlaying.set(true);
    }
  }

  pause() {
    if (this.audio) {
      this.audio.pause();
      this.isPlaying.set(false);
    }
  }

  stop() {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.currentTime.set(0);
      this.isPlaying.set(false);
    }
  }

  togglePlayPause() {
    this.isPlaying() ? this.pause() : this.play();
  }

  previousTrack() {
    const newIndex = this.currentTrackIndex() - 1;
    this.loadTrack(newIndex >= 0 ? newIndex : this.tracks().length - 1);
    if (this.isPlaying()) this.play();
  }

  nextTrack() {
    const newIndex = this.currentTrackIndex() + 1;
    this.loadTrack(newIndex < this.tracks().length ? newIndex : 0);
    if (this.isPlaying()) this.play();
  }

  seek(event: any) {
    if (this.audio) {
      this.audio.currentTime = parseFloat(event.target.value);
    }
  }

  setVolume(event: any) {
    const val = parseFloat(event.target.value);
    this.volume.set(val);
    if (this.audio) {
      this.audio.volume = val / 100;
    }
  }

  addTrack(title: string, artist: string, url: string) {
    const newTrack: Track = {
      id: this.tracks().length + 1,
      title,
      artist,
      url,
    };
    this.tracks.update(tracks => [...tracks, newTrack]);
  }

  formatTime(seconds: number): string {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }
}
