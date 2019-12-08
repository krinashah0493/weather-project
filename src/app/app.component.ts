import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import { of } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  city = '';
  humidity = '0';
  wind = '0';
  temperature = '0';

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  ngOnInit() {     

    this.myControl.valueChanges.subscribe(async value => {
      let res = await this._filter(value);
      this.filteredOptions = of(res);
    });
  }

  constructor(private apiService: ApiService) { }

  private async _filter(value: string) {
    return this.apiService.get(value)
      .toPromise()
      .then((data: any)=>{  
        return data['_embedded']['city:search-results']
          .map(res => {
            return res['matching_full_name'];
          });
      });
  }

  fetchWeather(event) {
    if (event.key === "Enter") {
      this.apiService.getWeather(this.myControl.value.split(',')[0])
        .subscribe(res => {
          if (res) {
            this.city = res.name;
            // convert kelvin to deg c
            this.temperature = (res.main.temp - 273.15).toFixed(2);
            // convert m/sec to km/hr
            this.wind = (res.wind.speed * 3.6).toFixed(2);

            this.humidity = res.main.humidity;
          }
          
        })
    }

  }
}