import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsHousingComponent } from './details-housing/details-housing.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Screen',
  },
  {
    path: 'details/:id',
    component: DetailsHousingComponent,
    title: 'Details Screen',
  }
];
