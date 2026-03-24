import React from "react";

interface ScreenProps {
  children: React.ReactNode;
}

function Screen({ children }: ScreenProps) {
  return (
    <div className="my-40 mx-80 h-100 border border-gray-400 flex flex-col justify-between bg-gray-300">
      {children}
    </div>
  );
}

export default Screen;
