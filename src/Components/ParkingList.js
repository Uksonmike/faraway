import React, { useState } from "react";
import Item from "./Item";

export default function ParkingList({
  items,
  onDeleteItems,
  onToggleItems,
  clearItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description") {
    sortedItems = items.slice().sort((a, b) => {
      return a.description.localeCompare(b.description);
    });
  }
  if (sortBy === "packed") {
    sortedItems = items.slice().sort((a, b) => {
      return Number(a.packed) - Number(b.packed);
    });
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((items) => (
          <Item
            key={items.id}
            item={items}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed</option>
        </select>
        <button onClick={clearItems}>Clear List</button>
      </div>
    </div>
  );
}
