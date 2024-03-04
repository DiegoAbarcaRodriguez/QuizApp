import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class CountryService {
    constructor(private http: HttpClient) { }

    index: number = 0;
    numberCorrectedAnwers: number = 0;
    disableButtonNext:boolean=true;

    private searchCountry(url: string, query: string): Observable<string> {
        return this.http.get<Country[]>(`${url}/${query}`)
            .pipe(map((country) => {
                return country[0].name.common
            }),
                catchError(() => of(''))
            )
    }

    searchByCapital(capital: string): Observable<string> {
        return this.searchCountry('https://restcountries.com/v3.1/capital', capital);
    }


    searchByCurrency(currency: string): Observable<string> {
        return this.searchCountry('https://restcountries.com/v3.1/currency', currency);
    }

    searchByCitizen(citizen: string): Observable<string> {
        return this.searchCountry('https://restcountries.com/v3.1/demonym', citizen);
    }


    searchByFlag(flag: string): Observable<string> {
        return this.http.get<Country[]>(`https://restcountries.com/v3.1/name/${flag}`)
            .pipe(map((country) => {
                return country[0].flags.png
            }),
                catchError(() => of(''))
            )
    }


}