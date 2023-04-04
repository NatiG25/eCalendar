import FullCalendar from "@fullcalendar/react";
import daygrid from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function Calendar({ events }) {
  return (
    <div>
      <FullCalendar
        plugins={[daygrid, interactionPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        events={events}
        eventContent={renderEventContent}
        // dateClick={handleDateClick}
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

}
