interface StatsProps {
  level: number;
  health: number;
}

function MonsterStats({ level, health }: StatsProps) {
  return (
    <div className="stats absolute top-0 right-0 mr-90 mt-4 px-4 py-1 bg-red-500/50 text-white font-mono tracking-widest text-sm flex flex-row gap-8 z-20">
      <span>Niveau: {level}</span>
      <span>Vie: {health}</span>
    </div>
  );
}

export default MonsterStats;
