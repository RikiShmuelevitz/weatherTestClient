import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(public http:HttpClient) { }

  getweather( city:string): Observable<string> {
    console.log("getttt")
    return this.http.get<string>(`https://localhost:7233/WeatherForecast/${city},3`);
  }
}
