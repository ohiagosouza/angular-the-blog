import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from './components/components.module';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterModule, ComponentsModule],
})
export class AppComponent {
  title = 'The Blog';
}
