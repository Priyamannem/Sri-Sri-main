import React from 'react';

const PlotSides = ({ sides, x = 0, y = 0, width = 50, height = 40, isMobile = false, fontSize = 7, strokeWidth = 0.5 }) => {
  const sideStyle = {
    position: 'absolute',
    fontSize: `${fontSize}px`,
    fontWeight: '900',
    fontFamily: 'Arial, sans-serif',
    color: 'white',
    WebkitTextStroke: `${strokeWidth * 3}px white`,
    textStroke: `${strokeWidth * 3}px white`,
    WebkitTextStrokeColor: 'white',
    textStrokeColor: 'white',
    WebkitPaintOrder: 'stroke fill',
    paintOrder: 'stroke fill',
    textShadow: `
      2px 2px 4px rgba(0,0,0,0.9),
      -1px -1px 2px rgba(0,0,0,0.8),
      1px -1px 2px rgba(0,0,0,0.8),
      -1px 1px 2px rgba(0,0,0,0.8),
      0px 0px 6px rgba(255,255,255,0.8)
    `,
    filter: `
      drop-shadow(2px 2px 3px rgba(0,0,0,0.9))
      drop-shadow(-1px -1px 2px rgba(0,0,0,0.8))
      drop-shadow(1px -1px 2px rgba(0,0,0,0.8))
      drop-shadow(-1px 1px 2px rgba(0,0,0,0.8))
      drop-shadow(0px 0px 3px rgba(255,255,255,0.6))
    `,
    opacity: 0.95,
    pointerEvents: 'none',
    userSelect: 'none',
    transition: 'font-size 0.2s ease, WebkitTextStroke 0.2s ease',
    letterSpacing: '0.3px'
  };

  // Calculate dynamic positioning based on font size
  const getOffset = () => fontSize * 1.5;

  return (
    <div style={{ position: 'relative', width: `${width}px`, height: `${height}px` }}>
      {/* Top side - horizontal text, positioned closer to edge */}
      <div
        style={{
          ...sideStyle,
          top: '0px',
          left: '50%',
          transform: `translateX(-40%) rotate(0deg)`,
          whiteSpace: 'normal'
        }}
      >
        {sides?.top && `${sides.top.toFixed(0)}`}
      </div>
      
      {/* Right side - vertical text, positioned closer to edge */}
      <div
        style={{
          ...sideStyle,
          top: '50%',
          right: `-${getOffset()}px`,
          transform: 'translateY(-50%) rotate(-90deg)',
          transformOrigin: 'center',
          whiteSpace: 'nowrap'
        }}
      >
        {sides?.right && `${sides.right.toFixed(1)}`}
      </div>
      
      {/* Bottom side - horizontal text, positioned closer to edge */}
      <div
        style={{
          ...sideStyle,
          bottom: `-${getOffset() * 1.5}px`,
          left: '50%',
          transform: 'translateX(-50%) rotate(0deg)',
          whiteSpace: 'pre-line'
        }}
      >
        {sides?.bottom && `${sides.bottom.toFixed(1)}`}
      </div>
      
      {/* Left side - vertical text, positioned closer to edge */}
      <div
        style={{
          ...sideStyle,
          top: '50%',
          left: `-${getOffset() * 2}px`,
          transform: 'translateY(-50%) rotate(90deg)',
          transformOrigin: 'center',
          whiteSpace: 'nowrap'
        }}
      >
        {sides?.left && `${sides.left.toFixed(1)}`}
      </div>
    </div>
  );
};

export default PlotSides;
