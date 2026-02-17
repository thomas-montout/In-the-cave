import { useState } from "react";
import Stats from "./components/Stats";
import "./index.css";

function App() {
  return (
    <>
      <Stats health={100} gold={50} xp={25} />
    </>
  );
}

export default App;
