function ListGroup() {
  let items = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
    "Austin",
    "Jacksonville",
    "Fort Worth",
    "Columbus",
    "San Francisco",
    "Charlotte",
    "Indianapolis",
    "Seattle",
    "Denver",
    "Washington",
    "Boston",
    "El Paso",
    "Nashville",
    "Detroit",
    "Oklahoma City",
    "Portland",
    "Las Vegas",
    "Memphis",
    "Louisville",
    "Baltimore",
    "Milwaukee",
    "Albuquerque",
    "Tucson",
    "Fresno",
    "Sacramento",
    "Mesa",
    "Kansas City",
    "Atlanta",
    "Long Beach",
    "Colorado Springs",
    "Raleigh",
    "Miami",
    "Virginia Beach",
    "Omaha",
    "Oakland",
    "Minneapolis",
    "Tulsa",
    "Arlington",
    "New Orleans",
    "Wichita",
    "Cleveland",
    "Tampa",
    "Bakersfield",
    "Aurora",
    "Honolulu",
    "Anaheim",
    "Santa Ana",
    "Corpus Christi",
    "Riverside",
    "St. Louis",
    "Lexington",
    "Pittsburgh",
    "Stockton",
    "Anchorage",
    "Cincinnati",
    "Saint Paul",
    "Greensboro",
    "Toledo",
    "Newark",
    "Plano",
    "Henderson",
    "Lincoln",
    "Orlando",
    "Jersey City",
    "Chula Vista",
    "Buffalo",
    "Fort Wayne",
    "Chandler",
    "St. Petersburg",
    "Laredo",
    "Durham",
    "Irvine",
    "Madison",
    "Norfolk",
    "Lubbock",
    "Gilbert",
    "Winston–Salem",
    "Glendale",
    "Reno",
    "Hialeah",
    "Garland",
    "Chesapeake",
    "Irving",
    "North Las Vegas",
    "Scottsdale",
    "Baton Rouge",
    "Fremont",
    "Richmond",
    "Boise",
    "San Bernardino",
  ];
  //items = [];

  const getEmptyMessage = () => {
    return items.length === 0 ? <p>There are no items in the list.</p> : null;
  };

  return (
    <ul className="list-group">
      <h1>List</h1>
      {/*getEmptyMessage()*/}
      {/* it is the same as above with short circuit operator */}
      {items.length === 0 && <p>There are no items in the list.</p>}
      {items.map((item, index) => (
        <li className="list-group-item" key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
}
export default ListGroup;
