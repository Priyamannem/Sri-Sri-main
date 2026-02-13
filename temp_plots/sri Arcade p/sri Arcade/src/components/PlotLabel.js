import React from 'react';

const PlotLabel = ({ number, area, x = 0, y = 0, isMobile = false, fontSize = 8, strokeWidth = 0.5 }) => {
  const containerStyle = {
    position: 'absolute',
    left: `${x}px`,
    top: `${y}px`,
    pointerEvents: 'none',
    userSelect: 'none'
  };

  return (
    <div style={containerStyle}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: `${fontSize}px`,
        fontWeight: '900',
        fontFamily: 'Arial Black, Arial, sans-serif',
        color: 'white',
        lineHeight: 1.1,
        opacity: 1.0,
        transition: 'font-size 0.2s ease',
        letterSpacing: '0.8px',
        textTransform: 'bold'
      }}>
        <span>{number}</span>
      </div>
    </div>
  );
};

export default PlotLabel;
