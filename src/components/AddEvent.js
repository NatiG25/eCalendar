import { useState } from "react";
import AppointmentItem from "./AppointmentItem";
import PopUp from "./PopUp";

export default function AddEvent() {
  const [addEvent, setAddEvent] = useState(false);
  const [appointments, setAppointments] = useState("");

  function addNewAppointment(newAppointment) {
    setAppointments([...appointments, newAppointment]);
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
      {appointments ? (
        appointments.map((item) => {
          return (
            <ul>
              <AppointmentItem appointments={item} />
            </ul>
          );
        })
      ) : (
        <p>No Appointments</p>
      )}
    </>
  );
}
