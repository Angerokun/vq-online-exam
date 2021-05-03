import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/country';
import { EnvService } from './env.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private http: HttpClient,
    private env: EnvService
  ) { }

  /**
   * get Countries
   * @returns Country
   */
  getCountries(): Observable<Country> {
    return this.http.get<Country>(`${this.env.API_URL}/all`)
    .pipe(
      tap(countries => {
        return countries;
      })
    )
  }

  /**
   * Search Country by name
   * @param name 
   * @returns Country
   */
  searchCountries(name: String): Observable<Country> {
    return this.http.get<Country>(`${this.env.API_URL}/name/`+ name)
    .pipe(
      tap(countries => {
        return countries;
      })
    )
  }

  /**
   * Get Country Detail by code
   * @param code 
   * @returns Country
   */
   getCountryDetail(code: String): Observable<Country> {
    return this.http.get<Country>(`${this.env.API_URL}/alpha/`+ code)
    .pipe(
      tap(countries => {
        return countries;
      })
    )
  }
}
