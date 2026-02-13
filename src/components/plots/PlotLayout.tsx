import React, { useState, useEffect, useRef } from 'react';
import MapBackground from './MapBackground';
import PlotLabel from './PlotLabel';

interface Plot {
    id: string | number;
    x: number;
    y: number;
    width: number;
    height: number;
    status: string;
    shape?: string;
    points?: string;
    area?: number;
}

interface PlotLayoutProps {
    plots: Plot[];
    statusColors: Record<string, string>;
    onPlotClick: (plot: Plot) => void;
    isMobile: boolean;
    isTablet: boolean;
}

const PlotLayout: React.FC<PlotLayoutProps> = ({ plots, statusColors, onPlotClick, isMobile, isTablet }) => {
    const svgWidth = 4000;
    const svgHeight = isMobile ? 2700 : 2920;
    const svgRef = useRef<SVGSVGElement>(null);
    const [zoomScale, setZoomScale] = useState(1);

    const getCoordinateScale = () => {
        const baseScale = 4000 / 2368;
        return isMobile ? baseScale * 1.2 : baseScale;
    };

    const scalePlotCoordinates = (plot: Plot) => {
        const coordinateScale = getCoordinateScale();
        let xOffset = 0;
        let yOffset = 0;
        let heightScale = 1;
        let widthScale = 1;

        const plotIdNum = typeof plot.id === 'string' ? parseInt(plot.id) : plot.id;

        if (isMobile) {
            if (plotIdNum >= 1 && plotIdNum <= 7 && plotIdNum !== 3) {
                xOffset = -10;
                yOffset = -380;
                if (plotIdNum === 1) {
                    yOffset -= 60;
                    xOffset = 10;
                    heightScale = 0.75;
                    widthScale = 1.0;
                }
                if (plotIdNum >= 4 && plotIdNum <= 7) {
                    xOffset += 25;
                    yOffset -= 20;
                    heightScale = 0.90;
                }
                if (plotIdNum === 2) {
                    heightScale = 0.80;
                    yOffset -= 20;
                    widthScale = 1.2;
                }
                if (plotIdNum === 5) heightScale = 0.60;
                if (plotIdNum === 6) {
                    heightScale = 0.60;
                    yOffset -= 50;
                }
                if (plotIdNum === 7) {
                    heightScale = 0.88;
                    yOffset = -490;
                    xOffset = 10;
                }
                if (plotIdNum !== 3) yOffset -= 50;
            } else if (plotIdNum >= 3 && plotIdNum <= 77) {
                yOffset = -200;
                if (plotIdNum !== 3) yOffset -= 140;
                if (plotIdNum === 14) { heightScale = 0.78; widthScale = 1.02; yOffset = -350; }
                if (plotIdNum === 15) { heightScale = 0.78; widthScale = 1.02; yOffset = -400; }
                if (plotIdNum === 16) { heightScale = 0.75; widthScale = 1.02; yOffset = -425; }
                if (plotIdNum === 17) { heightScale = 0.82; widthScale = 1.02; yOffset = -460; }
                if (plotIdNum === 18) { heightScale = 0.78; widthScale = 1.02; yOffset = -475; }
                if (plotIdNum === 19) { heightScale = 0.78; widthScale = 1.02; yOffset = -500; }
                if (plotIdNum === 20) { heightScale = 0.78; widthScale = 1.02; yOffset = -525; }
                if (plotIdNum === 21) { heightScale = 0.80; widthScale = 1.02; yOffset = -550; }
                if (plotIdNum === 48) { heightScale = 0.77; widthScale = 0.92; yOffset = -355; xOffset = 10; }
                if (plotIdNum === 47) { heightScale = 0.80; widthScale = 0.95; yOffset = -401; xOffset = 10; }
                if (plotIdNum === 46) { heightScale = 0.80; widthScale = 0.90; yOffset = -430; xOffset = 10; }
                if (plotIdNum === 45) { heightScale = 0.1; widthScale = 0.95; yOffset = -440; xOffset = 10; }
                if (plotIdNum === 44) { heightScale = 0.85; widthScale = 0.92; yOffset = -470; xOffset = 10; }
                if (plotIdNum === 43) { heightScale = 0.85; widthScale = 0.96; yOffset = -500; xOffset = 10; }
                if (plotIdNum === 42) { heightScale = 0.75; widthScale = 0.90; yOffset = -520; xOffset = 10; }
                if (plotIdNum === 41) { heightScale = 0.75; widthScale = 0.88; yOffset = -550; xOffset = 10; }
                if (plotIdNum === 40) { heightScale = 0.83; widthScale = 0.90; yOffset = -573; xOffset = 10; }
                if (plotIdNum === 39) { heightScale = 0.78; widthScale = 0.96; yOffset = -594; xOffset = 10; }
                if (plotIdNum === 49) { heightScale = 0.75; widthScale = 1.02; yOffset = -350; }
                if (plotIdNum === 50) { heightScale = 0.82; widthScale = 1.02; yOffset = -400; }
                if (plotIdNum === 51) { heightScale = 0.85; widthScale = 1.02; yOffset = -430; }
                if (plotIdNum === 52) { heightScale = 0.85; widthScale = 1.02; yOffset = -450; }
                if (plotIdNum === 53) { heightScale = 0.85; widthScale = 1.02; yOffset = -480; }
                if (plotIdNum === 54) { heightScale = 0.95; widthScale = 1.02; yOffset = -500; }
                if (plotIdNum === 55) { heightScale = 0.80; widthScale = 1.02; yOffset = -520; }
                if (plotIdNum === 56) { heightScale = 0.78; widthScale = 1.02; yOffset = -545; }
                if (plotIdNum === 57) { heightScale = 0.78; widthScale = 1.02; yOffset = -570; }
                if (plotIdNum === 58) { heightScale = 0.79; widthScale = 1.02; yOffset = -600; }
                if (plotIdNum === 13) { heightScale = 0.78; widthScale = 0.92; yOffset -= 15; }
                if (plotIdNum === 12) { heightScale = 0.78; widthScale = 0.94; yOffset = -430; }
                if (plotIdNum === 11) { heightScale = 0.86; widthScale = 0.92; yOffset = -460; xOffset = 7; }
                if (plotIdNum === 10) { heightScale = 0.81; widthScale = 0.92; yOffset = -480; }
                if (plotIdNum === 9) { heightScale = 0.81; widthScale = 0.92; yOffset = -500; }
                if (plotIdNum === 8) { heightScale = 0.76; widthScale = 0.92; yOffset = -525; }
                if (plotIdNum === 29) { heightScale = 0.80; widthScale = 0.98; yOffset = -357; xOffset = 10; }
                if (plotIdNum === 28) { heightScale = 0.78; widthScale = 0.98; yOffset = -400; xOffset = 10; }
                if (plotIdNum === 27) { heightScale = 0.79; widthScale = 0.98; yOffset = -430; xOffset = 10; }
                if (plotIdNum === 26) { heightScale = 0.81; widthScale = 0.98; yOffset = -455; xOffset = 10; }
                if (plotIdNum === 25) { heightScale = 0.82; widthScale = 0.98; yOffset = -480; xOffset = 10; }
                if (plotIdNum === 24) { heightScale = 0.81; widthScale = 0.98; yOffset = -500; xOffset = 10; }
                if (plotIdNum === 23) { heightScale = 0.81; widthScale = 0.98; yOffset = -520; xOffset = 10; }
                if (plotIdNum === 22) { heightScale = 0.78; widthScale = 0.96; yOffset = -545; xOffset = 10; }
                if (plotIdNum === 30) { heightScale = 0.75; widthScale = 0.94; xOffset = 10; yOffset = -355; }
                if (plotIdNum === 31) { heightScale = 0.80; widthScale = 0.95; xOffset = 10; yOffset = -405; }
                if (plotIdNum === 32) { heightScale = 0.76; widthScale = 0.95; xOffset = 10; yOffset = -430; }
                if (plotIdNum === 33) { heightScale = 0.76; widthScale = 0.94; xOffset = 10; yOffset = -450; }
                if (plotIdNum === 34) { heightScale = 0.80; widthScale = 0.94; xOffset = 10; yOffset = -480; }
                if (plotIdNum === 35) { heightScale = 0.80; widthScale = 0.95; xOffset = 10; yOffset = -500; }
                if (plotIdNum === 36) { heightScale = 0.85; widthScale = 0.95; xOffset = 10; yOffset = -520; }
                if (plotIdNum === 37) { heightScale = 0.63; widthScale = 0.94; xOffset = 10; yOffset = -540; }
                if (plotIdNum === 38) { heightScale = 0.82; widthScale = 0.99; xOffset = 5; yOffset = -580; }
                if (plotIdNum === 45) { yOffset -= 8; heightScale = 1.1; }
                if (plotIdNum === 67) { yOffset -= 54; heightScale = 0.85; }
                if (plotIdNum === 68) { yOffset -= 85; heightScale = 0.99; }
                if (plotIdNum === 69) { yOffset -= 108; }
                if (plotIdNum === 70) { yOffset -= 130; heightScale = 1.5; widthScale = 0.95; }
                if (plotIdNum === 71) { yOffset -= 160; }
                if (plotIdNum === 72) { yOffset -= 180; }
                if (plotIdNum === 64) { yOffset -= 163; xOffset = 10; widthScale = 0.95; heightScale = 0.80; }
                if (plotIdNum === 63) { yOffset -= 190; xOffset = 10; heightScale = 0.80; }
                if (plotIdNum === 62) { yOffset -= 220; xOffset = 10; heightScale = 0.85; }
                if (plotIdNum === 61) { yOffset -= 240; xOffset = 10; heightScale = 0.80; }
                if (plotIdNum === 60) { yOffset -= 260; xOffset = 10; heightScale = 0.8; }
                if (plotIdNum === 59) { yOffset -= 280; xOffset = 10; heightScale = 0.78; }
                if (plotIdNum >= 65 && plotIdNum <= 72) { yOffset -= 108; xOffset = 10; heightScale = 0.82; }
                if (plotIdNum >= 73 && plotIdNum <= 76) {
                    yOffset -= 110; heightScale = 0.80;
                    if (plotIdNum === 73 || plotIdNum === 76) { yOffset -= 50; heightScale = 0.76; }
                }
                if (plotIdNum === 77) { yOffset -= 182; heightScale = 0.74; widthScale = 1.03; }
            } else if (plotIdNum >= 82 && plotIdNum <= 92) {
                yOffset = -400; heightScale = 0.80; xOffset = 5;
            } else if (plotIdNum >= 93 && plotIdNum <= 102) {
                xOffset = 10; yOffset = -355; heightScale = 0.78;
            } else if (plotIdNum === 79 || plotIdNum === 80 || plotIdNum === 81) {
                yOffset = -450; heightScale = 0.78;
            } else if (plotIdNum === 78) {
                yOffset = -495; heightScale = 0.78;
            } else if (plotIdNum >= 140 && plotIdNum <= 146) {
                yOffset = -115; heightScale = 0.54; widthScale = 0.98;
                if (plotIdNum === 146) { heightScale = 0.81; widthScale = 1.02; }
                if (plotIdNum === 145) { heightScale = 0.85; widthScale = 1.05; yOffset -= 33; }
                if (plotIdNum === 144) { heightScale = 0.80; widthScale = 1.05; yOffset -= 55; }
                if (plotIdNum === 143) { heightScale = 0.84; widthScale = 1.05; yOffset -= 84; }
                if (plotIdNum === 142) { heightScale = 0.78; widthScale = 1.05; yOffset -= 102; }
                if (plotIdNum === 141) { heightScale = 0.85; widthScale = 1.05; yOffset -= 129; }
                if (plotIdNum === 140) { heightScale = 0.70; widthScale = 1.05; yOffset -= 145; }
            }

            if (plotIdNum === 139) { yOffset = -294; heightScale = 0.80; }
            if (plotIdNum === 128) { yOffset = -147; heightScale = 0.80; widthScale = 0.96; }
            if (plotIdNum === 127) { yOffset = -175; heightScale = 0.80; widthScale = 0.95; }
            if (plotIdNum === 126) { yOffset = -200; heightScale = 0.80; }
            if (plotIdNum === 125) { yOffset = -224; heightScale = 0.88; }
            if (plotIdNum === 124) { yOffset = -244; heightScale = 0.88; }
            if (plotIdNum === 123) { yOffset = -260; heightScale = 0.80; }
            if (plotIdNum === 122) { yOffset = -285; heightScale = 0.70; }
            if (plotIdNum === 121) { yOffset = -286; heightScale = 0.74; }
            if (plotIdNum === 120) { yOffset = -270; heightScale = 0.88; }
            if (plotIdNum === 119) { yOffset = -240; heightScale = 0.80; }
            if (plotIdNum === 118) { yOffset = -222; heightScale = 0.85; }
            if (plotIdNum === 117) { yOffset = -202; heightScale = 0.84; }
            if (plotIdNum === 116) { yOffset = -177; heightScale = 0.80; }
            if (plotIdNum === 135) { yOffset = -225; heightScale = 0.90; }
            if (plotIdNum === 115) { yOffset = -154; heightScale = 0.80; }
            if (plotIdNum === 112) { yOffset = -80; heightScale = 0.70; }
            if (plotIdNum === 111) { yOffset = -90; heightScale = 0.76; widthScale = 1.0; }
            if (plotIdNum === 110) { yOffset = -120; heightScale = 0.75; widthScale = 1.2; xOffset = 10; }
            if (plotIdNum === 109) { yOffset = -150; heightScale = 0.80; widthScale = 1.2; }
            if (plotIdNum === 108) { yOffset = -175; heightScale = 0.85; widthScale = 1.2; }
            if (plotIdNum === 107) { xOffset = 1; yOffset = -200; heightScale = 0.85; widthScale = 1.2; }
            if (plotIdNum === 106) { yOffset = -220; heightScale = 0.85; widthScale = 1.2; }
            if (plotIdNum === 105) { yOffset = -240; heightScale = 0.75; widthScale = 1.2; }
            if (plotIdNum === 113) { yOffset = -80; heightScale = 0.80; widthScale = 0.95; }
            if (plotIdNum === 114) { yOffset = -128; heightScale = 0.85; }
            if (plotIdNum === 104) { yOffset = -274; heightScale = 0.88; widthScale = 1.2; }
            if (plotIdNum === 129) { yOffset = -126; heightScale = 0.80; widthScale = 0.95; }
            if (plotIdNum === 103) { yOffset = -298; heightScale = 0.83; widthScale = 1.2; }
            if (plotIdNum === 130) { yOffset = -90; heightScale = 0.80; widthScale = 0.95; }
            if (plotIdNum === 131) { yOffset = -100; heightScale = 0.80; }
            if (plotIdNum === 132) { yOffset = -151; heightScale = 0.85; }
            if (plotIdNum === 133) { yOffset = -174; heightScale = 0.85; }
            if (plotIdNum === 134) { yOffset = -196; heightScale = 0.85; }
            if (plotIdNum === 112) { yOffset = -64; heightScale = 0.80; widthScale = 0.96; }
            if (plotIdNum === 136) { yOffset = -244; heightScale = 0.75; }
            if (plotIdNum === 137) { yOffset = -274; heightScale = 0.80; }
            if (plotIdNum === 138) { yOffset = -304; heightScale = 0.85; }
            if (plotIdNum === 3) { heightScale = 0.78; widthScale = 1.00; xOffset += 7; yOffset -= 180; }
        }

        return {
            ...plot,
            x: (plot.x * coordinateScale) + xOffset,
            y: (plot.y * coordinateScale) + yOffset,
            width: (plot.width * coordinateScale) * widthScale,
            height: (plot.height * coordinateScale) * heightScale,
            points: plot.points ? plot.points.split(' ').map(point => {
                const [px, py] = point.split(',').map(Number);
                return `${(px * coordinateScale) + xOffset},${(py * coordinateScale) + yOffset}`;
            }).join(' ') : undefined
        };
    };

    useEffect(() => {
        const calculateZoomScale = () => {
            if (svgRef.current && svgRef.current.parentElement) {
                const container = svgRef.current.parentElement;
                const containerWidth = container.clientWidth;
                const containerHeight = container.clientHeight;
                const scaleX = containerWidth / svgWidth;
                const scaleY = containerHeight / svgHeight;
                const scale = Math.min(scaleX, scaleY);

                const detectBrowserZoom = () => {
                    if (window.visualViewport) return window.visualViewport.scale;
                    return 1;
                };

                const browserZoom = detectBrowserZoom();
                setZoomScale(scale * browserZoom);
            }
        };

        calculateZoomScale();
        const resizeObserver = new ResizeObserver(calculateZoomScale);
        if (svgRef.current?.parentElement) resizeObserver.observe(svgRef.current.parentElement);

        const handleResize = () => setTimeout(calculateZoomScale, 100);
        const handleWheel = (e: WheelEvent) => {
            if (e.ctrlKey || e.metaKey) setTimeout(calculateZoomScale, 100);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('wheel', handleWheel, { passive: true });

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('wheel', handleWheel);
        };
    }, [isMobile, isTablet, svgWidth, svgHeight]);

    const getDynamicFontSize = (baseSize: number, minSize: number, maxSize: number) => {
        const scaledSize = baseSize * zoomScale;
        return Math.max(minSize, Math.min(maxSize, scaledSize));
    };

    const getPlotLabelFontSize = () => isMobile ? getDynamicFontSize(30, 26, 44) : getDynamicFontSize(36, 32, 52);
    const getStrokeWidth = () => isMobile ? getDynamicFontSize(1.8, 1.6, 2.6) : getDynamicFontSize(2.1, 1.9, 3.1);

    const getShapeStyle = (): React.CSSProperties => ({
        cursor: 'pointer',
        opacity: 0.85,
        transition: isMobile ? 'opacity 0.1s ease' : 'opacity 0.2s ease',
        shapeRendering: (isMobile ? 'auto' : 'crispEdges') as any,
        imageRendering: (isMobile ? 'auto' : 'crisp-edges') as any,
        filter: isMobile ? 'contrast(1.02) brightness(1.01)' : 'contrast(1.05) brightness(1.02)',
        willChange: isMobile ? 'transform' : 'opacity, transform',
        transform: isMobile ? 'translateZ(0)' : 'none',
        backfaceVisibility: 'hidden',
        perspective: '1000px'
    });

    const getPlotFillColor = (plot: Plot) => statusColors[plot.status];

    const containerStyle: React.CSSProperties = {
        backgroundColor: 'white',
        borderRadius: isMobile ? '4px' : '8px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        padding: isMobile ? '4px' : '14px',
        maxWidth: isMobile ? '120vw' : '100%',
        overflowY: isMobile ? 'auto' : 'hidden',
        overflowX: isMobile ? 'auto' : 'hidden',
        height: isMobile ? 'calc(100vh - 90px)' : 'calc(100vh - 170px)',
        display: 'flex',
        flexDirection: 'column',
        margin: isMobile ? '0 -10vw' : '0',
        transform: isMobile ? 'translateZ(0)' : 'none',
        willChange: isMobile ? 'transform' : 'auto',
        backfaceVisibility: 'hidden',
        perspective: '1000px',
        scrollBehavior: isMobile ? 'smooth' : 'auto',
        WebkitOverflowScrolling: 'touch'
    } as any;

    const borderStyle: React.CSSProperties = {
        border: '1px solid #d1d5db',
        borderRadius: '8px',
        overflow: isMobile ? 'visible' : 'hidden',
        position: 'relative',
        width: '100%',
        height: isMobile ? 'auto' : '100%',
        minHeight: '100%',
        display: 'flex',
        backgroundColor: '#f9fafb',
        transform: isMobile ? 'translateZ(0)' : 'none',
        willChange: isMobile ? 'transform' : 'auto',
        backfaceVisibility: 'hidden',
        perspective: '1000px'
    } as any;

    const svgStyle: React.CSSProperties = {
        width: isMobile ? '120%' : '100%',
        height: '100%',
        display: 'block',
        margin: '0',
        padding: '0',
        transform: 'scale(1)',
        transformOrigin: 'top left',
        imageRendering: (isMobile ? 'auto' : 'crisp-edges') as any,
        shapeRendering: (isMobile ? 'auto' : 'crispEdges') as any,
        textRendering: 'optimizeLegibility',
        filter: isMobile ? 'contrast(1.02) brightness(0.98)' : 'contrast(1.1) brightness(0.95) saturate(1.1)',
        willChange: 'transform',
        position: 'relative',
        left: '-90px',
        backfaceVisibility: 'hidden',
        perspective: '1000px'
    } as any;

    return (
        <div style={containerStyle}>
            <div style={borderStyle}>
                <MapBackground isMobile={isMobile} />
                <svg
                    ref={svgRef}
                    width={svgWidth}
                    height={svgHeight}
                    viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                    preserveAspectRatio="none"
                    style={{ ...svgStyle, position: 'relative', zIndex: 1 }}
                >
                    {plots.map((plot) => {
                        const scaledPlot = scalePlotCoordinates(plot);

                        const getTextCenterX = (plot: Plot) => {
                            if (plot.shape === 'square') {
                                return scaledPlot.x + Math.min(scaledPlot.width, scaledPlot.height) / 2;
                            } else {
                                return scaledPlot.x + scaledPlot.width / 2;
                            }
                        };

                        const getTextCenterY = (plot: Plot) => {
                            if (plot.shape === 'square') {
                                return scaledPlot.y + Math.min(scaledPlot.width, scaledPlot.height) / 2;
                            } else {
                                return scaledPlot.y + scaledPlot.height / 2;
                            }
                        };

                        const renderShape = () => {
                            const commonProps = {
                                fill: getPlotFillColor(plot),
                                stroke: "#333",
                                strokeWidth: "2",
                                style: getShapeStyle(),
                                onClick: () => onPlotClick && onPlotClick(plot),
                                onMouseOver: (e: any) => e.currentTarget.style.opacity = '0.6',
                                onMouseOut: (e: any) => e.currentTarget.style.opacity = '0.85',
                            };

                            if (plot.shape === 'square') {
                                const size = Math.min(scaledPlot.width, scaledPlot.height);
                                return <rect x={scaledPlot.x} y={scaledPlot.y} width={size} height={size} {...commonProps} />;
                            } else if (plot.shape === 'rectangle' || !plot.shape) {
                                return <rect x={scaledPlot.x} y={scaledPlot.y} width={scaledPlot.width} height={scaledPlot.height} {...commonProps} />;
                            } else if (plot.shape === 'rotated-rect') {
                                return (
                                    <rect
                                        x={scaledPlot.x}
                                        y={scaledPlot.y}
                                        width={scaledPlot.width}
                                        height={scaledPlot.height}
                                        {...commonProps}
                                        transform={`rotate(-45, ${scaledPlot.x + scaledPlot.width / 2}, ${scaledPlot.y + scaledPlot.height / 2})`}
                                    />
                                );
                            } else if (plot.shape === 'trapezium' || plot.shape === 'polygon') {
                                const getScaledPoints = (points: string, x: number, y: number, width: number, height: number) => {
                                    const originalPoints = points.split(' ').map(point => {
                                        const [px, py] = point.split(',').map(Number);
                                        return { x: px, y: py };
                                    });
                                    const minX = Math.min(...originalPoints.map(p => p.x));
                                    const maxX = Math.max(...originalPoints.map(p => p.x));
                                    const minY = Math.min(...originalPoints.map(p => p.y));
                                    const maxY = Math.max(...originalPoints.map(p => p.y));
                                    const originalWidth = maxX - minX;
                                    const originalHeight = maxY - minY;
                                    return originalPoints.map(point => {
                                        const scaledX = (point.x - minX) * (width / originalWidth);
                                        const scaledY = (point.y - minY) * (height / originalHeight);
                                        return `${x + scaledX},${y + scaledY}`;
                                    }).join(' ');
                                };
                                return (
                                    <polygon
                                        points={scaledPlot.points ? getScaledPoints(plot.points!, scaledPlot.x, scaledPlot.y, scaledPlot.width, scaledPlot.height) : ''}
                                        {...commonProps}
                                    />
                                );
                            } else if (plot.shape === 'L-shape' && plot.points) {
                                return <path d={scaledPlot.points} {...commonProps} />;
                            }
                            return <rect x={scaledPlot.x} y={scaledPlot.y} width={scaledPlot.width} height={scaledPlot.height} {...commonProps} />;
                        };

                        return (
                            <g key={plot.id}>
                                {renderShape()}
                                <foreignObject
                                    x={getTextCenterX(plot) - (isMobile ? 25 : 35)}
                                    y={getTextCenterY(plot) - (isMobile ? 15 : 25)}
                                    width={isMobile ? '60' : '80'}
                                    height={isMobile ? '60' : '70'}
                                    style={{ pointerEvents: 'none' }}
                                >
                                    <PlotLabel
                                        number={plot.id}
                                        isMobile={isMobile}
                                        fontSize={getPlotLabelFontSize()}
                                    />
                                </foreignObject>
                            </g>
                        );
                    })}
                </svg>
            </div>
        </div>
    );
};

export default PlotLayout;
