import { Component, inject } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { BottomNav } from '../bottom-nav/bottom-nav';

@Component({
  selector: 'app-article',
  imports: [BottomNav],
  templateUrl: './article.html',
  styleUrl: './article.css'
})
export class Article {
  sidebarService = inject(SidebarService);
}
