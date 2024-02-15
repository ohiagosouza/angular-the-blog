import { Component } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [ComponentsModule],
})
export class HomeComponent {}
