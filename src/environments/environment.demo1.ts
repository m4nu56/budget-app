import { DashingConfig } from "../app/dashboard/interfaces/dashing-config";

const dashingConfig: DashingConfig = {
  items: [
    { cols: 1, rows: 1, widget: {icon: null, class:'bg-primary'} },
    { cols: 1, rows: 1, widget: {icon: null, class:'bg-secondary'} },
    { cols: 1, rows: 1, widget: {icon: null, class:'bg-success'} },
    { cols: 2, rows: 1, widget: {icon: null, class:'bg-warning'} },
    { cols: 1, rows: 1, widget: {icon: null, class:'bg-warning'} },
    { cols: 2, rows: 1, widget: {icon: null, class:'bg-info'} },
    { cols: 1, rows: 1, widget: {icon: null, class:'bg-light text-dark'} },
    { cols: 1, rows: 1, widget: {icon: null, class:'bg-dark'} },
    { cols: 3, rows: 2, widget: {icon: null, class:'bg-primary'} },
    { cols: 1, rows: 1, widget: {icon: null, class:'bg-success'} },
    { cols: 1, rows: 1, widget: {icon: null, class:'bg-secondary'} },
    { cols: 1, rows: 1, widget: {icon: null, class:'bg-warning'} },
    { cols: 1, rows: 1, widget: {icon: null, class:'bg-danger'} }
  ]
}


export const environment = {
  production: true,
  dashingConfig: dashingConfig
};
