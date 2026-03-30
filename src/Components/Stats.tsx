interface StatsProps {
  health: number;
  gold: number;
  xp: number;
}

function Stats({ health, gold, xp }: StatsProps) {
  return (
    <div className="stats absolute top-0 left-0 ml-90 mt-4 px-4 py-1 bg-gray-500/70 text-white font-mono tracking-widest text-sm flex flex-row gap-8 z-20">
      <span>Vie: {health}</span>
      <span>Or: {gold}</span>
      <span>XP: {xp}</span>
    </div>
  );
}

export default Stats;
