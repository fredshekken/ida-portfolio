interface WaveDividerProps {
  fillColor: string;
  isDark?: boolean;
}

export default function WaveDivider({ fillColor }: WaveDividerProps) {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '220px',
        pointerEvents: 'none',
        zIndex: 5,
        background: `linear-gradient(to bottom, transparent 0%, ${fillColor} 100%)`,
      }}
    />
  );
}
