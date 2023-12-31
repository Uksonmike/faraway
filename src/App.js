import React, { useState } from "react";
import Form from "./Components/Form";
import Logo from "./Components/Logo";
import ParkingList from "./Components/ParkingList";
import Stats from "./Components/Stats";

function App() {
  const [items, setItems] = useState([]);
  
  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItems = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItems = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const clearItems = () => {
    const confirm = window.confirm("Delete all items?")
    if (confirm) setItems([])
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <ParkingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggleItems}
        clearItems={clearItems}
      />
      <Stats items={items}/>
    </div>
  );
}

export default App;
