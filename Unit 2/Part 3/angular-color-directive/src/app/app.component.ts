import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SetColorDirective } from './directives/set-color.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SetColorDirective, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  color = signal("yellow");


}
