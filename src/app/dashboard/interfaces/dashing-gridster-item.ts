import { GridsterItem } from 'angular-gridster2';

interface Widget {
  component: any;
  icon: string | null;
  class: string | null;
}

export interface DashingGridsterItem extends GridsterItem {
  widget: Widget;
}
