import React from 'react';

interface PlotLabelProps {
    number: string | number;
    area?: number;
    x?: number;
    y?: number;
    isMobile?: boolean;
    fontSize?: number;
    strokeWidth?: number;
}

const PlotLabel: React.FC<PlotLabelProps> = ({ number, x = 0, y = 0, fontSize = 8 }) => {
    const containerStyle: React.CSSProperties = {
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
            }}>
                <span>{number}</span>
            </div>
        </div>
    );
};

export default PlotLabel;
