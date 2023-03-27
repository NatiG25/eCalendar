import { useState } from "react"
import PopUp from "./PopUp";

export default function AddEvent() {
  const [addEvent, setAddEvent] = useState(false);
    return (
        <>
          <button onClick={() => setAddEvent(true)}>Add Event</button>
          {addEvent && (
            <PopUp setAddEvent={setAddEvent}/>
          )}
        </>
    )
}
