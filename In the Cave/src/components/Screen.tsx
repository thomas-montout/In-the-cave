import React from "react";

interface ScreenProps {
  children: React.ReactNode;
}

function Screen({ children }: ScreenProps) {
  return (
    <div className="my-25 mx-80 mb-2 h-100 flex flex-col justify-between bg-gray-300">
      {children}
    </div>
  );
}

export default Screen;
