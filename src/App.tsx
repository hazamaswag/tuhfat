import React from "react";
import "./App.css";
import Switch from "./Switch";
import { entries } from "./entries";

function App() {
  return (
    <>
      {entries.map((entry) => {
        return <Switch key={entry.id} {...entry}></Switch>;
      })}
    </>
  );
}

export default App;
