import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarMenu } from './sidebar-menu/sidebar-menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarMenu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  sidebarOpen = false;
  protected readonly title = signal('portfolio-app');
}
