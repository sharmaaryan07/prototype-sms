import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterModule } from '@angular/router';
import { ServiceStatusService } from '../../service-status.service';
import { MatSidenav } from '@angular/material/sidenav';

export type MenuType = {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, MatIconModule, MatListModule, CommonModule, RouterOutlet,RouterModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit{
// export class SideBarComponent{
  menuitem = signal<MenuType[]>([
    {
      icon: 'dashboard',
      label: 'DashBoard',
      route: 'dashboard',
    },
    {
      icon: 'analytics',
      label: 'Attendance',
      route: 'attendance',
    },
    {
      icon: 'dashboard',
      label: 'Results',
      route: 'results',
    },
    {
      icon: 'schedule',
      label: 'Time Table',
      route: 'time-table',
    },
    {
      icon: 'help_outline',
      label: 'Help',
      route: 'help',
    }
  ]); 
  @ViewChild('sidenav') private sidenav?: MatSidenav;

  constructor(private ServiceStatusService: ServiceStatusService) { 
  }

  ngOnInit() { 
   this.ServiceStatusService.sideNavToggleSubject.subscribe(()=> {
      this.sidenav?.toggle()
    });
  }
}
