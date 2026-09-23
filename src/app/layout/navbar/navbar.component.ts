import { Component, ElementRef, HostListener, ViewChild, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @ViewChild('menuButton') private menuButton?: ElementRef<HTMLButtonElement>;
  readonly menuOpen = signal(false);
  readonly isScrolled = signal(false);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 12);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.menuOpen()) {
      this.closeMenu(true);
    }
  }

  closeMenu(returnFocus = false): void {
    this.menuOpen.set(false);
    if (returnFocus) {
      this.menuButton?.nativeElement.focus();
    }
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }
}
