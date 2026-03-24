import React from "react";

interface BoardProps {
  children: React.ReactNode;
}

function Board({ children }: BoardProps) {
  return (
    <div className="flex flex-row justify-between items-center m-4 p-5 border border-solid">
      {children}
    </div>
  );
}

export default Board;
