import FullCalendar from "@fullcalendar/react";
import daygrid from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

export default function Calendar({ events }) {
  return (
    <div>
      <FullCalendar
        plugins={[daygrid, interactionPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "timeGridWeek,timeGridDay,dayGridMonth",
        }}
        height={"90vh"}
        events={events}
        eventContent={renderEventContent}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
      />
    </div>
  );
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

function handleEventClick(arg) {
  alert(arg.event.extendedProps.description);
  console.log(arg.event.allDay);
}

function handleDateClick(arg) {
  alert(arg.dateStr);
}
