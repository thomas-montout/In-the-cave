interface StatsProps {
  health: number;
  gold: number;
  xp: number;
}

function Stats({ health, gold, xp }: StatsProps) {
  return (
    <div className="flex flex-col gap-2">
      <span>Health: {health}</span>
      <span>Gold: {gold}</span>
      <span>XP: {xp}</span>
    </div>
  );
}

export default Stats;
