import { useState } from "react";
import Heading from "./Heading";
import Calendar from "./Calendar";
import AddEvent from "./AddEvent";

export default function EventsLogic() {
  const [events, setEvents] = useState([
    { title: "Meeting", date: "2023-04-10", description: "hello" },
    { title: "space", date: "2023-04-11", description: "hello" },
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
