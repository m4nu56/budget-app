import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DogImage } from './interfaces/dog-image';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DogDataService {
  private timer = Observable.interval(3000).startWith(0);

  constructor(private http: HttpClient) {}

  public getImage(): Observable<DogImage> {
    return this.timer.switchMap(() => this.getDogImage());
  }

  private getDogImage(): Observable<DogImage> {
    const params = new HttpParams();

    return this.http
      .get('//dog.ceo/api/breeds/image/random', { params: params })
      .map(response => this.mapDataFromApi(response));
  }

  private mapDataFromApi(response: any | undefined): DogImage {
    const dogImage: DogImage = response;
    return dogImage;
  }
}
