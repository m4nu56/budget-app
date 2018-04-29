import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { DashingGridsterItem } from './interfaces/dashing-gridster-item';
import { WidgetHostDirective } from './widget-host.directive';
import { HelloWorldComponent } from './widgets/hello-world/hello-world.component';

@Component({
  selector: 'app-widget-container',
  template: '<ng-template [appWidgetHost]="data"></ng-template>',
  styles: ['host{height: 100%; display: flex; align-items: center; }']
})
export class WidgetContainerComponent implements OnInit {
  @Input() data: DashingGridsterItem;

  @ViewChild(WidgetHostDirective) widgetHostDirective: WidgetHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  private injectComponent(): void {
    if (this.data.widget.component === null) {
      return;
    }

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.data.widget.component);
    const componentRef = this.widgetHostDirective.viewContainerRef.createComponent(componentFactory);
    (<DashingGridsterItem>componentRef.instance).data = this.data;
  }

  ngOnInit() {
    this.injectComponent();
  }
}
