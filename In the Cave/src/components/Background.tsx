function Background({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-neutral-900 z-0 overflow-hidden">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${2 + (i % 6) * 2}px`,
            height: `${2 + (i % 6) * 2}px`,
            left: `${5 + i * 8}%`,
            bottom: `-5px`,
            background: i % 2 === 0 ? "#f97316" : "#dc2626",
            animation: `ember-rise ${4 + (i % 4) * 2}s ease-in ${i * 0.5}s infinite`,
          }}
        />
      ))}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default Background;
