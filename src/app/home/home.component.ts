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
  private housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];
  private readonly housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingService.getAlHousingLocations().then((housingListResponse: HousingLocation[]) => {
      this.housingLocationList = housingListResponse;
      this.filteredLocationList = housingListResponse;
    });
    console.log('Housing Location LIst - ', this.housingLocationList);
    this.filteredLocationList = this.housingLocationList;
  }

  /**
   * Handles the selection of a housing location from the search results.
   * @param searchFilterTerm
   */
  searchFilterResults(searchFilterTerm: string): void {
    if (!searchFilterTerm) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.housingService.searchItemsByTerms(searchFilterTerm).then((searchResults: HousingLocation[]) => {
      this.filteredLocationList = searchResults;
    });
  }
}
