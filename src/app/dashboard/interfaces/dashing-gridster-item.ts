import { GridsterItem } from 'angular-gridster2';

interface Widget {
  component: any;
  icon: string | null;
  class: string | null;
  params?: any;
}

export interface DashingGridsterItem extends GridsterItem {
  widget: Widget;
}
