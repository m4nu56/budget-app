import { DashingConfig } from '../app/dashboard/interfaces/dashing-config';
import { HelloWorldComponent } from '../app/dashboard/widgets/hello-world/hello-world.component';
import { WidgetGiphyComponent } from '../app/dashboard/widgets/widget-giphy/widget-giphy.component';
import { WidgetWeatherComponent } from '../app/dashboard/widgets/widget-weather/widget-weather.component';

const dashingConfig: DashingConfig = {
  items: [
    {
      cols: 1,
      rows: 1,
      widget: { component: WidgetWeatherComponent, params: { city: 'Vannes, France' }, icon: null, class: 'bg-success' }
    },
    { cols: 1, rows: 1, widget: { component: HelloWorldComponent, icon: 'fa fa-magic', class: 'bg-primary' } },
    {
      cols: 2,
      rows: 2,
      widget: { component: null, params: { q: 'funny silicon valley' }, icon: null, class: null }
    },
    {
      cols: 1,
      rows: 1,
      widget: {
        component: WidgetWeatherComponent,
        params: { city: 'Biarritz, France' },
        icon: null,
        class: 'bg-success'
      }
    },
    { cols: 2, rows: 1, widget: { component: null, icon: 'fi flaticon-book', class: 'bg-warning' } },
    {
      cols: 1,
      rows: 1,
      widget: { component: WidgetGiphyComponent, params: { q: 'funny babies' }, icon: null, class: 'bg-info' }
    },
    {
      cols: 1,
      rows: 1,
      widget: { component: WidgetGiphyComponent, params: { q: 'la casa de papel' }, icon: null, class: 'bg-info' }
    },
    { cols: 2, rows: 1, widget: { component: null, icon: null, class: 'bg-info' } },
    { cols: 1, rows: 1, widget: { component: null, icon: null, class: 'bg-light text-dark' } },
    { cols: 1, rows: 1, widget: { component: null, icon: 'fa fa-bitcoin', class: 'bg-dark' } },
    { cols: 3, rows: 2, widget: { component: null, icon: 'fa fa-dowload', class: 'bg-primary' } },
    { cols: 1, rows: 1, widget: { component: null, icon: 'fi flaticon-github', class: 'bg-success' } },
    { cols: 1, rows: 1, widget: { component: null, icon: null, class: 'bg-warning' } },
    { cols: 1, rows: 1, widget: { component: null, icon: 'fa fa-warning', class: 'bg-danger' } }
  ]
};

export const environment = {
  production: true,
  dashingConfig: dashingConfig
};
