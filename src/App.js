import React from "react";
import Form from "./Components/Form";
import Logo from "./Components/Logo";
import ParkingList from "./Components/ParkingList";
import Stats from "./Components/Stats";

function App() {
  return (
    <div className="app">
      <Logo/>
      <Form/>
      <ParkingList/>
      <Stats/>
    </div>
  );
}

export default App;
