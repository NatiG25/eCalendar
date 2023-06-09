export default function CurrentDate() {
  const date = new Date();
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = date.getFullYear();

  const today = mm + "/" + dd + "/" + yyyy;
  return <h2>{ today }</h2>;
}
