import { useState } from "react";
import AppointmentItem from "./AppointmentItem";
import PopUp from "./PopUp";

export default function AddEvent({ addNewEvent }) {
  const [addEvent, setAddEvent] = useState(false);

  return (
    <>
      <button onClick={() => setAddEvent(true)}>Add Event</button>
      {addEvent && (
        <PopUp
          setAddEvent={setAddEvent}
          addNewEvent={addNewEvent}
        />
      )}
      {/* {appointments ? (
        appointments.map((item) => {
          return (
            <ul>
              <AppointmentItem appointments={item} />
            </ul>
          );
        })
      ) : (
        <p>No Appointments</p>
      )} */}
    </>
  );
}
