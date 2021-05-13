import React from "react";
import "./styles.css";
import ShowState from "./comp/ShowState";
import LikeOrDislike from "./comp/LikeOrDislike";

import Headers from "./comp/Headers";

export default function App() {
  return (
    <div className="App">
      <Headers />
      <ShowState />
      <LikeOrDislike />
    </div>
  );
}
