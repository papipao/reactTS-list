import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      age: 36,
      url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png",
      note: "SFG",
    },
  ]);

  return (
    <div className="App">
      <p>People Invited to my Party</p>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
