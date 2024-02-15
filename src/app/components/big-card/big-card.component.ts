import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrls: [
    './big-card.component.css',
    './big-card.responsive.component.css',
  ],
})
export class BigCardComponent {
  @Input()
  photoCover: String = 'https://placehold.co/600x400?text=No+Preview';
  @Input()
  cardPosted: String = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  @Input()
  cardTitle: String = '';
  @Input()
  cardDescription: String = '';
}
