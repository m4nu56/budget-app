import { Component, OnInit } from '@angular/core';
import { DashboardGridsterConfigService } from './dashboard-gridster-config.service';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { environment } from '../../environments/environment.prod';
import { DashingGridsterItem } from './interfaces/dashing-gridster-item';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  config: GridsterConfig;

  items: Array<DashingGridsterItem>;

  constructor(private dashboardGridsterConfigService: DashboardGridsterConfigService) {}

  ngOnInit() {
    this.config = this.dashboardGridsterConfigService.getConfig();
    this.items = environment.dashingConfig.items;
  }
}
