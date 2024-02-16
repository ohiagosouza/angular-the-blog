import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './small-card.component.html',
  styleUrls: [
    './small-card.component.css',
    './small-card.responsive.component.css',
  ],
})
export class SmallCardComponent {
  @Input()
  Id: number = 0;
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
}
