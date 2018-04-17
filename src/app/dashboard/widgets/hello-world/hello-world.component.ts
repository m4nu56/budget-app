import { Component, OnInit, Input } from '@angular/core';
import { DashingGridsterItem } from '../../interfaces/dashing-gridster-item';

@Component({
  selector: 'app-hello-world',
  template: `
    <h4>Hello World!<h4>
    c: {{ data.cols }} r: {{ data.rows }}
  `,
})
export class HelloWorldComponent implements OnInit {

  @Input() data: DashingGridsterItem;

  constructor() { }

  ngOnInit() {
  }

}
