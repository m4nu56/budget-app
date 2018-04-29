import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutesModule } from './dashboard.routes';
import { GridsterModule } from 'angular-gridster2';
import { DashboardGridsterConfigService } from './dashboard-gridster-config.service';
import { WidgetContainerComponent } from './widget-container.component';
import { WidgetHostDirective } from './widget-host.directive';
import { HelloWorldComponent } from './widgets/hello-world/hello-world.component';
import { HttpClientModule } from '@angular/common/http';
import { WidgetGiphyComponent } from './widgets/widget-giphy/widget-giphy.component';
import { WidgetDogComponent } from './widgets/widget-dog/widget-dog.component';
import { WidgetWeatherComponent } from './widgets/widget-weather/widget-weather.component';

@NgModule({
  imports: [CommonModule, DashboardRoutesModule, GridsterModule, HttpClientModule],
  declarations: [
    DashboardComponent,
    WidgetContainerComponent,
    WidgetHostDirective,
    HelloWorldComponent,
    WidgetGiphyComponent,
    WidgetDogComponent,
    WidgetWeatherComponent
  ],
  providers: [DashboardGridsterConfigService],
  entryComponents: [HelloWorldComponent, WidgetGiphyComponent, WidgetDogComponent, WidgetWeatherComponent]
})
export class DashboardModule {}
