import React from "react";
import "./App.css";
import Switch from "./Switch";
import { entries } from "./entries";
import Bismillah from "./Bismillah";

function App() {
  return (
    <>
      <div className="dark">
        <Bismillah />
        {entries.map((entry) => {
          return <Switch key={entry.id} {...entry}></Switch>;
        })}
      </div>
    </>
  );
}

export default App;
