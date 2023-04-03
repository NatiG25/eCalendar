import { useState } from "react";
import PopUp from "./PopUp";

export default function AddEvent() {
  const [addEvent, setAddEvent] = useState(false);
  const [appointments, setAppointments] = useState("");

  function addNewAppointment(newAppointment) {
    setAppointments([...appointments, newAppointment]);
  }

  function displayAppointments() {
    appointments.map((item) => {
      return <p>{item.title}</p>;
    });
  }

  return (
    <>
      <button onClick={() => setAddEvent(true)}>Add Event</button>
      {addEvent && (
        <PopUp
          setAddEvent={setAddEvent}
          addNewAppointment={addNewAppointment}
        />
      )}
      {appointments ? displayAppointments : <p>No appointments</p>}
    </>
  );
}
