import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { BaseComponent } from '@core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking

@Component({
  selector: 'prx-fullcalendar-basic',
  templateUrl: './fullcalendar-basic.component.html',
  styleUrls: ['./fullcalendar-basic.component.scss'],
})
export class FullcalendarBasicComponent extends BaseComponent implements OnInit {
  events: any[];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    navLinks: true,
    editable: true,
    //eventLimit: true,
  };

  constructor(private _events: EventsService) {
    super();
  }

  ngOnInit() {
    this._events.getEvents().subscribe((events) => {
      this.isLoading = false;
      this.calendarOptions = { ...this.calendarOptions, events };

      console.log(this.calendarOptions);
    });
  }
}
