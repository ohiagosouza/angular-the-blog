import { Routes } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'content/:id',
    component: ContentComponent,
  },
];
export default routeConfig;
