import { Component } from '@angular/core';
import { Toggle } from './toggle'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
  toggle:Toggle={
    toggle:true
  };
}
