import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mm-mk';
  total = 150;
  args = {
    speed: 'fast',
    size: 1.2
  }
 
}
