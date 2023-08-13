import React from "react";

export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>You can start adding your items to your list🚀</em>
      </footer>
    );
  const numItems = items.length;
  const numPacked = items.filter((items) => items.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100 ? "You got everything! Ready to go 🛫" : 
        `You have ${numItems} ${numItems <= 1 ? "item" : "items"} on your list, and
        you already packed ${numPacked} (${percentage}%)`
      }
      </em>
    </footer>
  );
}
