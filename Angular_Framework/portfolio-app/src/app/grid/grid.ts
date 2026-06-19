import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../sidebar.service';
import { BottomNav } from '../bottom-nav/bottom-nav';

@Component({
  selector: 'app-grid',
  imports: [CommonModule, BottomNav],
  templateUrl: './grid.html',
  styleUrl: './grid.css'
})
export class Grid {
  sidebarService = inject(SidebarService);
  
  items = Array(10).fill(0).map((_, i) => ({
    title: `Item ${i + 1}`,
    color: `hsl(${i * 36}, 70%, 60%)`
  }));
}
