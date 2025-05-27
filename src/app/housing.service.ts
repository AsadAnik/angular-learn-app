import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  private readonly url: string = 'http://localhost:3000/locations';

  /**
   * Retrieves a list of all available housing locations.
   * @return {HousingLocation[]} An array containing all housing locations.
   */
  async getAlHousingLocations(): Promise<HousingLocation[] | []> {
    // return this.housingLocationList;
    const data = await fetch(this.url);
    const housingLocationList = await data.json() ?? [];
    console.log('THE HOUSING LOCATION API HEAT - ', housingLocationList);
    return housingLocationList;
  }

  /**
   * Retrieves a housing location by its unique identifier.
   * @param {number} id - The unique identifier of the housing location.
   * @return {HousingLocation | undefined} The housing location object if found, otherwise undefined.
   */
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}?id=${id}`);
    const housingLocationData = await data.json();
    return housingLocationData[0] ?? undefined;
  }

  /**
   * Filters and returns a list of housing locations based on Wi-Fi availability.
   * @param {boolean} isWifi - A boolean indicating whether to filter for housing locations with Wi-Fi availability (true) or without (false).
   * @return {HousingLocation[]} A filtered array of HousingLocation objects matching the Wi-Fi availability criterion.
   */
  async getFilteredWifiLocation(isWifi: boolean): Promise<HousingLocation[] | []> {
    // const filteredWifiLocation = this.housingLocationList.filter((housingLocation: HousingLocation) => housingLocation.wifi === isWifi);
    // return filteredWifiLocation;
    const data = await fetch(`${this.url}?wifi=${isWifi}`);
    const filteredWifiLocation = await data.json() ?? [];
    return filteredWifiLocation;
  }

  /**
   * Searches for housing locations that match the given search terms.
   * @param {string} searchTerms The terms to search for within the housing location names.
   * @return {HousingLocation[]} An array of housing locations that match the search terms.
   */
  async searchItemsByTerms(searchTerms: string): Promise<HousingLocation[] | []> {
    const data = await fetch(this.url);
    const responseData = await data.json() ?? [];
    let searched = [];

    if (responseData.length > 0) {
      searched = responseData.filter((housingItem: HousingLocation) => {
        const name = housingItem.name.toLowerCase();
        const userData = searchTerms.toLowerCase();
        return name.includes(userData);
      });
    }

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
