import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  /*   let items = [
    "Niğde",
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Portland",
    "Las Vegas",
    "Memphis",
    "North Las Vegas",
    "Scottsdale",
    "Baton Rouge",
    "Fremont",
    "Richmond",
    "Boise",
    "San Bernardino",
  ];
 */

  // const handleClick = (item: string) => console.log(item);

  return (
    <>
      <Alert>
        Hello Halil,
        <span> How are you?</span>
      </Alert>
      <Button
        color="secondary"
        text="Click Me!"
        onClick={() => console.log("clicked")}
      ></Button>
    </>
  );
}
export default App;
