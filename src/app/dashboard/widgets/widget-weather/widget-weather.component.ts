import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from './weather-data.service';
import { Weather } from './interfaces/weather';

@Component({
  selector: 'app-widget-weather',
  template: `<span *ngIf="weather">{{weather.text}}</span>`,
  styleUrls: ['./widget-weather.component.scss'],
  providers: [WeatherDataService]
})
export class WidgetWeatherComponent implements OnInit {

  private weather: Weather;

  constructor(private weatherDataService: WeatherDataService) { }

  ngOnInit() {
    this.weatherDataService.getWeather('vannes').subscribe(
      weather => {
        this.weather = weather;
        console.log(weather);
      }
    );
  }

}
