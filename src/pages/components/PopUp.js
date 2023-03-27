export default function PopUp() {
    return (
        <>
          <h3>Add a new event</h3>
          <form>
            <label for='title'>Title</label>
            <input type='text' id='title' placeholder="Event Title" required/>

            <label for='date'>Date</label>
            <input type='date' id='date' placeholder='mm/dd/yyyy' required/>

            <label for='description'>Description</label>
            <input type='text' id='description'/>

            <button type='submit'>Add Event</button>
          </form>

          <button>Close</button>
        </>
    )
}
