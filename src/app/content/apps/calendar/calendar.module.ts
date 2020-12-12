import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { UtilsModule } from '@app/blocks/utils';
import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!
import { CalendarRoutingModule } from './calendar-routing.module';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

// register FullCalendar plugins
FullCalendarModule.registerPlugins([dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]);

@NgModule({
  declarations: [...CalendarRoutingModule.declarations],
  imports: [SharedModule, UtilsModule, FullCalendarModule, CalendarRoutingModule],
})
export class CalendarModule {}
