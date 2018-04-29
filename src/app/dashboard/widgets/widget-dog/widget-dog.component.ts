import { Component, OnInit, Input } from '@angular/core';
import { DashingGridsterItem } from '../../interfaces/dashing-gridster-item';
import { DogImage } from './interfaces/dog-image';
import { DogDataService } from './dog-data.service';

@Component({
  selector: 'app-widget-dog',
  template: `
  <img *ngIf="image" [src]="image.message">
  <small>&copy;DogAPI.com</small>
  `,
  styleUrls: ['./widget-dog.component.scss'],
  providers: [DogDataService]
})
export class WidgetDogComponent implements OnInit {
  image: DogImage;

  @Input() data: DashingGridsterItem;

  constructor(private dogDataService: DogDataService) {}

  private getImage() {
    this.dogDataService.getImage().subscribe(image => {
      this.image = image;
    });
  }

  ngOnInit() {
    this.getImage();
  }
}
