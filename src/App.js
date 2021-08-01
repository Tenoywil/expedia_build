import React from "react";
import Nav from "./components/Nav/Nav";
import "./App.css";
import Tabs from "./components/Tabs/TabsLayer";
import InfoCon from "./components/InfoCon/InfoCon";
import CardDisplay from "./components/Card/CardDisplay";
import DestinationsCarousel from "./components/DestinationsCarousel/DestinationsCarousel";

function App() {
  return (
    <div className="App">
      <Nav />
      <Tabs />
      <InfoCon />
      <CardDisplay />
      <DestinationsCarousel />
    </div>
  );
}

export default App;
