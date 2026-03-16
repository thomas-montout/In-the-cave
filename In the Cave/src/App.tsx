import { useState } from "react";
import Stats from "./Components/Stats";
import Screen from "./Components/Screen";
import Board from "./Components/Board";
import GameText from "./Components/GameText";
import Controls from "./Components/Controls";
import "./index.css";

function App() {
  return (
    <>
      <Screen>
        <Stats health={100} gold={50} xp={25} />
        <Board>
          <GameText text="Welcome to the cave!" />
          <Controls />
        </Board>
      </Screen>
    </>
  );
}

export default App;
