import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = 'ed122ecb754f12263f75dc6612ab0624';

  constructor(private http: HttpClient) { 
  }
  public get(value){
    return this.http.get(`https://api.teleport.org/api/cities/?search=${value}`, {
      headers: {
        'Accept': 'application/vnd.teleport.v1+json'
      }
    });
  }

  public getWeather(value): any {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${this.API_KEY}`)
  }
}
