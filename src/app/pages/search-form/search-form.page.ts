import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Country } from 'src/app/models/country';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.page.html',
  styleUrls: ['./search-form.page.scss'],
})
export class SearchFormPage implements OnInit {
  countries: Country;

  constructor(
    private countryService: CountryService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.countryService.getCountries().subscribe(
      countries => {
        console.log(countries);
        this.countries = countries;
      }
    );
  }

  async filterList(evt) {
    const searchTerm = evt.srcElement.value;

    console.log(searchTerm);
    if (!searchTerm) {
      return;
    }

    this.countryService.searchCountries(searchTerm).subscribe(
      countries => {
        console.log(countries);
        this.countries = countries;
      }
    );
  }
}
