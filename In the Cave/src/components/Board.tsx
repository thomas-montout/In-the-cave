import React from "react";

interface BoardProps {
  children: React.ReactNode;
}

function Board({ children }: BoardProps) {
  return (
    <div className="flex flex-col space-y-4 p-4 bg-gray-800">{children}</div>
  );
}

export default Board;
