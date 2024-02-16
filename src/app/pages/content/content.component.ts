import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css', './content.responsive.component.css'],
})
export class ContentComponent {
  @Input()
  photoCover: String = '';
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

  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setValueToComponent(this.id);
  }

  setValueToComponent(id: string | null) {
    const result = dataFake.filter((article) => article.id === id)[0];

    this.cardTitle = result.title;
    this.photoCover = result.photoCover;
    this.cardPosted = result.postedOn;
    this.cardDescription = result.description;
  }
}
