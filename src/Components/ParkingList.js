import React from "react";
import Item from "./Item";

export default function ParkingList({ items, onDeleteItems, onToggleItems }) {
  return (
    <div className="list">
      <ul>
        {items.map((items) => (
          <Item
            key={items.id}
            item={items}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
    </div>
  );
}
