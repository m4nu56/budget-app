import { DashingConfig } from '../app/dashboard/interfaces/dashing-config';
import { HelloWorldComponent } from '../app/dashboard/widgets/hello-world/hello-world.component';
import { WidgetGiphyComponent } from '../app/dashboard/widgets/widget-giphy/widget-giphy.component';

const dashingConfig: DashingConfig = {
  items: [
    { cols: 1, rows: 1, widget: { component: HelloWorldComponent, icon: 'fa fa-magic', class: 'bg-primary' } },
    {
      cols: 2,
      rows: 2,
      widget: { component: WidgetGiphyComponent, params: { q: 'funny silicon valley' }, icon: null, class: null }
    },
    { cols: 1, rows: 1, widget: { component: null, icon: null, class: 'bg-success' } },
    { cols: 2, rows: 1, widget: { component: null, icon: 'fi flaticon-book', class: 'bg-warning' } },
    {
      cols: 1,
      rows: 1,
      widget: { component: WidgetGiphyComponent, params: { q: 'funny baby' }, icon: null, class: 'bg-warning' }
    },
    { cols: 2, rows: 1, widget: { component: HelloWorldComponent, icon: null, class: 'bg-info' } },
    { cols: 1, rows: 1, widget: { component: null, icon: null, class: 'bg-light text-dark' } },
    { cols: 1, rows: 1, widget: { component: null, icon: 'fa fa-bitcoin', class: 'bg-dark' } },
    { cols: 3, rows: 2, widget: { component: null, icon: 'fa fa-dowload', class: 'bg-primary' } },
    { cols: 1, rows: 1, widget: { component: null, icon: 'fi flaticon-github', class: 'bg-success' } },
    { cols: 1, rows: 1, widget: { component: null, icon: null, class: 'bg-secondary' } },
    { cols: 1, rows: 1, widget: { component: null, icon: null, class: 'bg-warning' } },
    { cols: 1, rows: 1, widget: { component: null, icon: 'fa fa-warning', class: 'bg-danger' } }
  ]
};

export const environment = {
  production: true,
  dashingConfig: dashingConfig
};
