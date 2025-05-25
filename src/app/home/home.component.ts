import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAlHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }

  /**
   * Handles changes to the filter search input and triggers a search operation.
   * @param {any} event - The event object from the input field. The event's `target.value` contains the search term entered by the user.
   * @return {void} This method does not return a value.
   */
  onFilterSearchChange(event: any): void {
    const searchTerm: string = event.target.value;
    this.housingLocationList = this.housingService.searchItemsByTerms(searchTerm);
  }

  /**
   * Handles the selection of a housing location from the search results.
   * @param searchFilterTerm
   */
  searchFilterResults(searchFilterTerm: string): void {
    console.log('My Item here - ', searchFilterTerm);
    if (!searchFilterTerm) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingService.searchItemsByTerms(searchFilterTerm);
  }
}
