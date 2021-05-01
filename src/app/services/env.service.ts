import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URL = 'https://restcountries.eu/rest/v2';

  constructor() { }
}
