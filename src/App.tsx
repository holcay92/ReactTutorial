import ListGroup from "./components/ListGroup";
function App() {
  let items = [
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

  const handleClick = (item: string) => console.log(item);
  return (
    <div>
      <ListGroup
        items={items}
        heading="New Cities"
        onItemSelect={handleClick}
      />
    </div>
  );
}
export default App;
