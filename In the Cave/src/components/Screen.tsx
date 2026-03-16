import React from "react";

type ScreenProps = {
  children: React.ReactNode;
};

function Screen({ children }: ScreenProps) {
  return (
    <div className="my-40 mx-80 h-100 border-2 border-solid flex flex-col justify-between">
      {children}
    </div>
  );
}

export default Screen;
