import { Component,signal,computed,inject } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ServiceStatusService } from '../../service-status.service';

@Component({
  selector: 'app-tool-bar',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule,],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.css'
})
export class ToolBarComponent {
  constructor(private ServiceStatusService: ServiceStatusService) {
  }
  clickMenu() { 
    this.ServiceStatusService.toggle();
  }
}
