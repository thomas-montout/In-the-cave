import { useState } from "react";
import { useGameStore } from "./store/gameStore";
import { locations, monsters } from "./data/gameData";
import titleImage from "./assets/minia-inthecave.jpg";
import Stats from "./Components/Stats";
import MonsterStats from "./Components/MonsterStats";
import Screen from "./Components/Screen";
import Board from "./Components/Board";
import Controls from "./Components/Controls";
import "./index.css";
import Background from "./Components/Background";

function App() {
  const [started, setStarted] = useState(false);
  const health = useGameStore((state) => state.health);
  const gold = useGameStore((state) => state.gold);
  const xp = useGameStore((state) => state.xp);
  const text = useGameStore((state) => state.text);
  const currentLocation = useGameStore((state) => state.currentLocation);
  const fighting = useGameStore((state) => state.fighting);
  const showMonsterStats = useGameStore((state) => state.showMonsterStats);

  if (!started) {
    return (
      <Background>
        <Screen>
          <div className="relative w-full h-full border-8">
            <img
              src={titleImage}
              alt="In the Cave"
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => setStarted(true)}
              className="absolute bottom-28 left-46 -translate-x-1/2 px-6 py-2 bg-black text-white border-2 border-white font-mono tracking-widest text-lg cursor-pointer hover:bg-white hover:text-black transition-colors duration-300"
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
        <Stats health={health} gold={gold} xp={xp} />
        {showMonsterStats && fighting !== undefined && (
          <MonsterStats
            level={monsters[fighting].level}
            health={monsters[fighting].health}
          />
        )}
        <img
          src={
            showMonsterStats
              ? monsters[fighting].image
              : locations[currentLocation].image
          }
          alt="Location"
          className="w-full h-full object-cover"
        />
        <Board>
          <Controls />
          <p className="text-white font-mono tracking-widest leading-relaxed text-sm whitespace-pre-line">
            {text}
          </p>
        </Board>
      </Screen>
    </Background>
  );
}

export default App;
