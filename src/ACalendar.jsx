import dayjs from "dayjs";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import 'dayjs/locale/si';
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = dayjsLocalizer(dayjs)

const myEventsList = [ 
  {
    title: "Diskretna matematika",
    start: new Date(2026, 2, 3, 8, 0),
    end:   new Date(2026, 2, 3, 9, 45),
  }
]

const ACalendar = () => (
  <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 600, width: 1000  }}
    />
  </div>
)

export default ACalendar;