import { Component, Input, OnInit } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [RouterModule],
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css'],
  standalone: true,
})
export class HousingLocationComponent implements OnInit {
  @Input() housingLocation!: HousingLocation;

  // To troubleshoot the issue with onInit() method from Angular core.
  ngOnInit(): void {
    console.log('HousingLocation Prop Data - ', this.housingLocation);
  }
}
