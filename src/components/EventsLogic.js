import { useState } from "react";
import Heading from "./Heading";
import Calendar from "./Calendar";
import AddEvent from "./AddEvent";

export default function EventsLogic() {
  const [events, setEvents] = useState([
    { title: "Meeting", start: "2023-04-10", end: "2023-04-15", description: "hello" },
    { title: "space", start: "2023-05-11", end: "2023-05-20", description: "hello" },
  ]);

  function addNewEvent(newEvent) {
    setEvents([...events, newEvent]);
  }
  return (
    <>
      <header>
        <Heading />
      </header>
      <main>
        <Calendar events={events} />
        <AddEvent addNewEvent={addNewEvent} />
      </main>
    </>
  );
}
