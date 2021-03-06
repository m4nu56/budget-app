import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GiphyImage } from './interfaces/giphy-image';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GiphyDataService {
  private GIPHY_API_KEY = 'dJVzoxvFRc7d6TNaUMduf9qsFrrtUQde';
  private timer = Observable.interval(60000).startWith(0);
  private offset_max = 100;
  private q: string;

  constructor(private http: HttpClient) {}

  public getImages(q: string): Observable<GiphyImage[]> {
    this.q = q;
    return this.timer.switchMap(() => this.getGiphyImages(q));
  }

  private getGiphyImages(q: string): Observable<GiphyImage[]> {
    const params = new HttpParams()
      .set('q', q)
      .set('limit', '100')
      .set('offset', Math.abs(Math.floor(Math.random() * this.offset_max + 1)).toString())
      .set('api_key', this.GIPHY_API_KEY);

    return this.http
      .get('//api.giphy.com/v1/gifs/search', { params: params })
      .map(response => this.mapDataFromApi(response));
  }

  private mapDataFromApi(response: any | undefined): GiphyImage[] {
    this.offset_max = response.pagination.total_count - 100;

    if (0 === response.data.length) {
      this.getImages(this.q);
      return;
    }

    const images = [];

    for (let i = 0; i < response.data.length; i++) {
      const image: GiphyImage = response.data[i].images.fixed_height;

      // only landscape image
      if (image.width > image.height) {
        images.push(image);
      }
    }

    return images;
  }
}
