import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-bottom-nav',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="bottom-nav">
      <a routerLink="/grid" routerLinkActive="active" class="nav-item">
        <span class="icon">⊞</span>
        <span>Grid</span>
      </a>
      <a routerLink="/article" routerLinkActive="active" class="nav-item">
        <span class="icon">📄</span>
        <span>Article</span>
      </a>
      <a routerLink="/profile" routerLinkActive="active" class="nav-item">
        <span class="icon">👤</span>
        <span>Profile</span>
      </a>
    </nav>
  `
})
export class BottomNav {}
