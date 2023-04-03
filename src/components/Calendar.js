import FullCalendar from '@fullcalendar/react'
import daygrid from '@fullcalendar/daygrid'

const events = [
    { title: 'Meeting', start: new Date() }
  ]
  
export default function Calendar() {
  return (
    <div>
    <h1>Demo App</h1>
    <FullCalendar
      plugins={[daygrid]}
      initialView='dayGridMonth'
      weekends={false}
      events={events}
      eventContent={renderEventContent}
    />
  </div>
  )
}

function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }
