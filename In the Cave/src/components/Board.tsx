import React from "react";

type BoardProps = {
  children: React.ReactNode;
};

function Board({ children }: BoardProps) {
  return (
    <div className="flex flex-row justify-between items-center m-4 p-5 border-1 border-solid">
      {children}
    </div>
  );
}

export default Board;
