import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent {

  paths = [
    {
      page: 'page1',
      pageNum: 1
    },
    {
      page: 'page2',
      pageNum: 2
    },
    {
      page: 'page3',
      pageNum: 3
    },
    {
      page: 'page4',
      pageNum: 4
    },
    {
      page: 'page5',
      pageNum: 5
    },
    {
      page: 'page6',
      pageNum: 6
    }
  ];

}
