import { Component, Input, OnInit } from '@angular/core';
import { WeatherDataService } from './weather-data.service';
import { Weather } from './interfaces/weather';
import { DashingGridsterItem } from '../../interfaces/dashing-gridster-item';

@Component({
  selector: 'app-widget-weather',
  templateUrl: './widget-weather.component.html',
  styleUrls: ['./widget-weather.component.scss'],
  providers: [WeatherDataService]
})
export class WidgetWeatherComponent implements OnInit {
  weather: Weather;
  city = 'biarritz';

  @Input() data: DashingGridsterItem;

  constructor(private weatherDataService: WeatherDataService) {}

  ngOnInit() {
    this.city = this.data.widget.params.city;
    this.weatherDataService.getWeather(this.city).subscribe(weather => {
      this.weather = weather;
    });
  }
}
