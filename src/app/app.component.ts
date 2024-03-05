import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolBarComponent } from './component/tool-bar/tool-bar.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolBarComponent, SideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-sms';
}
