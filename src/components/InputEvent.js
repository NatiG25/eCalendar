import { useRef, useState } from "react";

export default function InputEvent({ setAddEvent, addNewAppointment }) {
  const [appointmentDetails, setAppointmentDetails] = useState({});
  const titleRef = useRef();
  const dateRef = useRef();
  const descriptionRef = useRef();

  function handleChange() {
    setAppointmentDetails({
      title: titleRef.current.value,
      date: dateRef.current.value,
      description: descriptionRef.current.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addNewAppointment(appointmentDetails);
// Clear input fields
    titleRef.current.value = "";
    dateRef.current.value = "";
    descriptionRef.current.value = "";
    setAppointmentDetails("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Event Title"
          ref={titleRef}
          onChange={handleChange}
          required
        />

        <label for="date">Date</label>
        <input
          type="date"
          id="date"
          placeholder="mm/dd/yyyy"
          ref={dateRef}
          onChange={handleChange}
          required
        />

        <label for="description">Description</label>
        <input
          type="text"
          id="description"
          ref={descriptionRef}
          onChange={handleChange}
        />

        <button type="submit">Add Event</button>
      </form>

      <button onClick={() => setAddEvent((prev) => !prev)}>Close</button>
    </>
  );
}
