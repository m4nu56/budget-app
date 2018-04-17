import { Directive, Input, ViewContainerRef, ElementRef } from '@angular/core';
import { DashingGridsterItem } from './interfaces/dashing-gridster-item';

@Directive({
  selector: '[appWidgetHost]'
})
export class WidgetHostDirective {

  private data: DashingGridsterItem;

  @Input('appWidgetHost') set appWidgetHost(data: DashingGridsterItem){
    this.data = data;
  }

  constructor(public viewContainerRef: ViewContainerRef) { 

  }

}
