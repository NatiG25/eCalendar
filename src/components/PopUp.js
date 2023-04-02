import InputEvent from "./InputEvent";

export default function PopUp({ setAddEvent, addNewAppointment }) {
  return (
    <>
      <InputEvent
        setAddEvent={setAddEvent}
        addNewAppointment={addNewAppointment}
      />
    </>
  );
}
