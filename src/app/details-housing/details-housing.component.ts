import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details-housing',
  imports: [ReactiveFormsModule],
  templateUrl: './details-housing.component.html',
  styleUrl: './details-housing.component.css'
})
export class DetailsHousingComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocationId: number = -1;
  housingLocation: HousingLocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('')
  });

  constructor() {
    this.housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingService.getHousingLocationById(this.housingLocationId).then((housingLocationDetails: HousingLocation | undefined) => {
      this.housingLocation = housingLocationDetails
    });
  }

  /**
   * Submits the application form.
   * @return {void}
   */
  submitApplication(): void {
    this.housingService.submitForm(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
      this.applyForm.value.message ?? ''
    );
  }
}
