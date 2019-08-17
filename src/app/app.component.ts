import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { Service } from './Service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'barchartangular';

  dataSource: Data[];

  constructor(service: Service) {
      this.dataSource = service.getData();
  }
}
