import { Component, inject } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { BottomNav } from '../bottom-nav/bottom-nav';

@Component({
  selector: 'app-profile',
  imports: [BottomNav],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  sidebarService = inject(SidebarService);
}
