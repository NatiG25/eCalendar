import { useRef, useState } from "react";

export default function InputEvent({ setAddEvent, addNewEvent }) {
  const [appointmentDetails, setAppointmentDetails] = useState({});
  const titleRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();
  const descriptionRef = useRef();

  function handleChange() {
    setAppointmentDetails({
      title: titleRef.current.value,
      start: startDateRef.current.value,
      end: endDateRef.current.value,
      description: descriptionRef.current.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addNewEvent(appointmentDetails);

    titleRef.current.value = "";
    startDateRef.current.value = "";
    endDateRef.current.value = "";
    descriptionRef.current.value = "";
    setAppointmentDetails("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Event Title"
          ref={titleRef}
          onChange={handleChange}
          required
        />

        <label htmlFor="date">Start Date</label>
        <input
          type="date"
          id="date"
          ref={startDateRef}
          onChange={handleChange}
          required
        />

        <label htmlFor="date">End Date</label>
        <input
          type="date"
          id="date"
          ref={endDateRef}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description</label>
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
