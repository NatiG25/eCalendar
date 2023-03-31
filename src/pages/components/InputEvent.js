export default function InputEvent({setAddEvent}) {
  return (
    <>
      <form>
        <label for="title">Title</label>
        <input type="text" id="title" placeholder="Event Title" required />

        <label for="date">Date</label>
        <input type="date" id="date" placeholder="mm/dd/yyyy" required />

        <label for="description">Description</label>
        <input type="text" id="description" />

        <button type="submit">Add Event</button>
      </form>

      <button onClick={() => setAddEvent((prev) => !prev)}>Close</button>
    </>
  );
}
