import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from './interfaces/weather';

@Injectable()
export class WeatherDataService {
  constructor(private http: HttpClient) {}

  public getWeather(city: string): Observable<Weather> {
    return this.getWeatherYahoo(city);
  }

  private makeYqlQuery(city: string): string{
    const query = `
    select item.condition from weather.forecast where woeid in 
    (select woeid from geo.places(1) where text="${city}")
    `;
    return query;
  }

  private getWeatherYahoo(city: string): Observable<Weather> {
    const params = new HttpParams()
    .set('q', this.makeYqlQuery(city))
    .set('format', 'json')
    ;

    return this.http
      .get('https://query.yahooapis.com/v1/public/yql', { params: params })
      .map(response => this.mapDataFromApi(response));
  }

  private mapDataFromApi(response: any | undefined): Weather{
    console.log(response);
    debugger;
    if(response.count!==1){
      return null;
    }
    console.log(response.results.channel.item);
    return response.results.channel.item;
  }
}
