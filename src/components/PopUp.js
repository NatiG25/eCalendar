import InputEvent from "./InputEvent";

export default function PopUp({ setAddEvent, addNewEvent }) {
  return (
    <>
      <InputEvent
        setAddEvent={setAddEvent}
        addNewEvent={addNewEvent}
      />
    </>
  );
}
