import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsHousingComponent } from './details-housing.component';

describe('DetailsHousingComponent', () => {
  let component: DetailsHousingComponent;
  let fixture: ComponentFixture<DetailsHousingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsHousingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsHousingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
