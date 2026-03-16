interface GameTextProps {
  text: string;
}
function GameText({ text }: GameTextProps) {
  return <p className="text-sm">{text}</p>;
}

export default GameText;
