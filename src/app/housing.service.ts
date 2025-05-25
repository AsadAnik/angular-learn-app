import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: '2.avif',
      availableUnits: 4,
      wifi: true,
      laundry: true
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: '1.jpg',
      availableUnits: 0,
      wifi: false,
      laundry: true
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: '3.jpg',
      availableUnits: 1,
      wifi: false,
      laundry: false
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo: '4.jpg',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo: '5.jpg',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo: '6.jpg',
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: '7.jpg',
      availableUnits: 5,
      wifi: true,
      laundry: true
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo: '1.jpg',
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: '3.jpg',
      availableUnits: 10,
      wifi: false,
      laundry: false
    },
  ];

  /**
   * Retrieves a list of all available housing locations.
   * @return {HousingLocation[]} An array containing all housing locations.
   */
  getAlHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  /**
   * Retrieves a housing location by its unique identifier.
   * @param {number} id - The unique identifier of the housing location.
   * @return {HousingLocation | undefined} The housing location object if found, otherwise undefined.
   */
  getHousingLocationById(id: number): HousingLocation | undefined {
    const housingLocationDetails = this.housingLocationList.find((housingLocation) => housingLocation.id === id);
    return housingLocationDetails;
  }

  /**
   * Filters and returns a list of housing locations based on Wi-Fi availability.
   * @param {boolean} isWifi - A boolean indicating whether to filter for housing locations with Wi-Fi availability (true) or without (false).
   * @return {HousingLocation[]} A filtered array of HousingLocation objects matching the Wi-Fi availability criterion.
   */
  private getFilteredWifiLocation(isWifi: boolean): HousingLocation[] {
    const filteredWifiLocation = this.housingLocationList.filter((housingLocation: HousingLocation) => housingLocation.wifi === isWifi);
    return filteredWifiLocation;
  }

  /**
   * Searches for housing locations that match the given search terms.
   * @param {string} searchTerms The terms to search for within the housing location names.
   * @return {HousingLocation[]} An array of housing locations that match the search terms.
   */
  searchItemsByTerms(searchTerms: string): HousingLocation[] {
    const searched = this.housingLocationList.filter(housingItem => {
      const name = housingItem.name.toLowerCase();
      const userData = searchTerms.toLowerCase();
      return name.includes(userData);
    });

    return searched;
  }

  /**
   * Submits a form with the provided user details.
   * @param {string} firstName - The first name of the user submitting the form.
   * @param {string} lastName - The last name of the user submitting the form.
   * @param {string} email - The email address of the user submitting the form.
   * @param {string} message - The message or content submitted by the user.
   * @return {void} This method does not return a value.
   */
  submitForm(firstName: string, lastName: string, email: string, message: string): void {
    console.log(firstName, lastName, email, message);
  }
}
