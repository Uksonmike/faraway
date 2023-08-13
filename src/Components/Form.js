import React, { useState } from "react";

export default function Form({onAddItems}) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // on submit should create a new object that should be added to an array
    if (!description) {
      return alert(`What's the ${quantity} items you want to carry?`)
    };

    // create a new task object
    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };

    // add the new item into a new array
    onAddItems(newItem)
    // console.log(newItem);
    setDescription("")
    setQuantity(1)
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      What do you need for your trip?
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Item..."
      />
      <button type="submit">Add</button>
    </form>
  );
}
