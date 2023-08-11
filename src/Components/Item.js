import React from "react";

export default function Item({ item }) {
  return (
    <li>
      <span className={item.packed ? "crossed" : ""}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
