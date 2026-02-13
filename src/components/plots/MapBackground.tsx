import React, { useMemo } from 'react';
import background from '@/assets/sripuram-layout.svg';

interface MapBackgroundProps {
    isMobile: boolean;
}

const MapBackground: React.FC<MapBackgroundProps> = ({ isMobile }) => {
    const svgDimensions = useMemo(() => ({
        width: 4000,
        height: isMobile ? 2700 : 2920
    }), [isMobile]);

    const svgStyles = useMemo(() => ({
        position: 'absolute',
        top: 0,
        left: '-90px',
        zIndex: 0,
        width: isMobile ? '120%' : '100%',
        height: '100%',
        imageRendering: isMobile ? 'auto' : 'crisp-edges',
        shapeRendering: isMobile ? 'auto' : 'crispEdges',
        textRendering: 'optimizeLegibility',
        willChange: 'transform',
        transform: 'translateZ(0)',
        filter: isMobile ? 'contrast(1.05) brightness(1.02)' : 'contrast(1.1) brightness(1.0) saturate(1.1)',
        scrollBehavior: 'smooth',
        backfaceVisibility: 'hidden',
        perspective: '1000px'
    } as React.CSSProperties), [isMobile]);

    const imageStyles = useMemo(() => ({
        imageRendering: isMobile ? 'auto' : 'crisp-edges',
        filter: isMobile ? 'contrast(1.02) brightness(1.01)' : 'url(#smoothFilter) contrast(1.05) saturate(1.1) brightness(1.02)',
        transform: 'translateZ(0)',
        willChange: 'transform'
    } as React.CSSProperties), [isMobile]);

    return (
        <svg
            width={svgDimensions.width}
            height={svgDimensions.height}
            viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
            preserveAspectRatio="none"
            style={svgStyles}
        >
            <defs>
                {!isMobile && (
                    <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f7fafc" />
                        <stop offset="30%" stopColor="#e0f2fe" />
                        <stop offset="70%" stopColor="#dbeafe" />
                        <stop offset="100%" stopColor="#bfdbfe" />
                    </linearGradient>
                )}
                {!isMobile && (
                    <filter id="smoothFilter">
                        <feGaussianBlur stdDeviation="0.5" />
                        <feComponentTransfer>
                            <feFuncA type="discrete" tableValues="0 0.6 1" />
                        </feComponentTransfer>
                        <feComposite operator="over" in2="SourceGraphic" />
                    </filter>
                )}
            </defs>

            <rect
                x="0"
                y="0"
                width={svgDimensions.width}
                height={svgDimensions.height}
                fill={isMobile ? '#f0f9ff' : 'url(#backgroundGradient)'}
                stroke="#9aa7baff"
                strokeWidth={isMobile ? "0.3" : "0.5"}
            />

            <image
                href={background}
                x="0"
                y="0"
                width={svgDimensions.width}
                height={svgDimensions.height}
                preserveAspectRatio="none"
                opacity={isMobile ? 0.9 : 0.8}
                style={imageStyles}
            />
        </svg>
    );
};

export default MapBackground;
