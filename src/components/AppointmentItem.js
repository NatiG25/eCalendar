export default function AppointmentItem({ appointments }) {
  return (
    <li>
      {appointments.title} ({appointments.date})
    </li>
  );
}
