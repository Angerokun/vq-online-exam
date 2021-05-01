import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Country } from 'src/app/models/country';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.page.html',
  styleUrls: ['./country-detail.page.scss'],
})
export class CountryDetailPage implements OnInit {

  @Input() code: String;
  country: Country;

  constructor(
    private modalController: ModalController,
    private countryService: CountryService
  ) { }

  ngOnInit() {
  }

  /**
   * Dismiss Detail Page
   */
  dismissDetail() {
    this.modalController.dismiss();
  }

  /**
   * View Country Detail
   */
  ionViewWillEnter() {
    this.countryService.getCountryDetail(this.code).subscribe(
      country => {
        console.log(country);
        this.country = country;
      }
    );
  }

}
