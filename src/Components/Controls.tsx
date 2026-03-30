import { useGameStore } from "../store/gameStore";
import { locations } from "../data/gameData";

function Controls() {
  const currentLocation = useGameStore((state) => state.currentLocation);

  const goTown = useGameStore((state) => state.goTown);
  const goStore = useGameStore((state) => state.goStore);
  const goCave = useGameStore((state) => state.goCave);
  const buyHealth = useGameStore((state) => state.buyHealth);
  const buyWeapon = useGameStore((state) => state.buyWeapon);
  const fightSlime = useGameStore((state) => state.fightSlime);
  const fightBeast = useGameStore((state) => state.fightBeast);
  const fightDragon = useGameStore((state) => state.fightDragon);
  const attack = useGameStore((state) => state.attack);
  const dodge = useGameStore((state) => state.dodge);
  const run = useGameStore((state) => state.goTown);
  const restart = useGameStore((state) => state.restart);

  // L'objet actions fait le pont entre le nom (string) et la vraie fonction
  const actions: Record<string, () => void> = {
    goTown,
    goStore,
    goCave,
    buyHealth,
    buyWeapon,
    fightSlime,
    fightBeast,
    fightDragon,
    attack,
    dodge,
    run,
    restart,
  };

  const buttonActions = locations[currentLocation].buttonActions;

  return (
    <div className="flex flex-row gap-4 ">
      {locations[currentLocation].buttonText.map((text, idx) => (
        <button
          key={idx}
          className="flex-1 py-1 bg-gray-700 text-white font-mono tracking-widest text-xs border border-gray-600 hover:bg-yellow-900 transition-colors duration-300"
          onClick={actions[buttonActions[idx]]}
        >
          {text}
        </button>
      ))}
    </div>
  );
}
export default Controls;
