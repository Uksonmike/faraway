import React from "react";
import Item from "./Item";

export default function ParkingList() {
  const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 2, description: "Charger", quantity: 5, packed: true },
  ];

  return (
    <div className="list">
      <ul>
        {initialItems.map((items) => (
          <Item item={items} />
        ))}
      </ul>
    </div>
  );
}
