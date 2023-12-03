import React, { MouseEvent, useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onItemSelect: (item: string) => void;
}

function ListGroup({ items, heading, onItemSelect }: ListGroupProps) {
  const handleClick = (event: MouseEvent) => console.log(event);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <ul className="list-group">
      <h1>{heading}</h1>
      {/*getEmptyMessage()*/}
      {/* it is the same as above with short circuit operator */}
      {items.length === 0 && <p>There are no items in the list.</p>}
      {items.map((item, index) => (
        <li
          className={
            selectedIndex === index
              ? "list-group-item active"
              : "list-group-item"
          }
          key={index}
          onClick={() => {
            setSelectedIndex(index);
            onItemSelect(item);
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
export default ListGroup;
