import { useState } from "react";
import titleImage from "./assets/minia-inthecave.jpg";
import Stats from "./Components/Stats";
import Screen from "./Components/Screen";
import Board from "./Components/Board";
import GameText from "./Components/GameText";
import Controls from "./Components/Controls";
import "./index.css";
import Background from "./Components/Background";

function App() {
  const [started, setStarted] = useState(false);

  if (!started) {
    return (
      <Background>
        <Screen>
          <div className="relative w-full h-full">
            <img
              src={titleImage}
              alt="In the Cave"
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => setStarted(true)}
              className="absolute bottom-34 left-44 -translate-x-1/2 px-6 py-2 bg-black text-white border-2 border-white font-mono tracking-widest text-lg cursor-pointer hover:bg-white hover:text-black transition-colors duration-300"
              style={{
                fontFamily: "'Press Start 2P', monospace",
                imageRendering: "pixelated",
              }}
            >
              PLAY
            </button>
          </div>
        </Screen>
      </Background>
    );
  }

  return (
    <Background>
      <Screen>
        <Stats health={100} gold={50} xp={25} />
        <Board>
          <GameText text="Welcome to the cave!" />
          <Controls />
        </Board>
      </Screen>
    </Background>
  );
}

export default App;
