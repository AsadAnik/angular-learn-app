/**
 * Represents a housing location with details about its identification,
 * amenities, and availability.
 */
export interface HousingLocation {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}
