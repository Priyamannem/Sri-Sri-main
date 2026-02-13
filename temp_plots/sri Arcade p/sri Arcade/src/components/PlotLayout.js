import React, { useState, useEffect, useRef } from 'react';
import MapBackground from './MapBackground';
import PlotLabel from './PlotLabel';

const PlotLayout = ({ plots, statusColors, onPlotClick, isMobile, isTablet }) => {
  const svgWidth = 4000;  // Increased from 3500 (14% larger)
  const svgHeight = isMobile ? 2700 : 2920; // Decreased height for mobile
  const svgRef = useRef(null);
  const [zoomScale, setZoomScale] = useState(1);

  // Dynamic scaling factor for plot coordinates based on SVG width and mobile scaling
  const getCoordinateScale = () => {
    const baseScale = 4000 / 2368; // 1.69 - base scaling from original
    // For mobile, we need to scale coordinates to match the increased container width
    // If container is 120vw and SVG is 100%, coordinates need to scale by 1.2x
    return isMobile ? baseScale * 1.2 : baseScale; 
  };

  // Scale plot coordinates to match enlarged SVG
  const scalePlotCoordinates = (plot) => {
    const coordinateScale = getCoordinateScale();
    // Different offsets for different plot ranges on mobile
    let xOffset = 0;
    let yOffset = 0;
    let heightScale = 1; // Default height scale
    let widthScale = 1; // Default width scale
    
    if (isMobile) {
      if (plot.id >= 1 && plot.id <= 7 && plot.id !== 3) {
       
        xOffset = -10;  
        yOffset = -380; // Moved up for shorter SVG
        
        // Move plot 1 slightly upward
        if (plot.id === 1) {
          yOffset -= 60; // Reduced offset for shorter SVG
          xOffset = 10
          heightScale = 0.75 // Reduced from 0.85
          widthScale = 1.0
        }
        
        // Additional adjustments for plots 4-7
        if (plot.id >= 4 && plot.id <= 7) {
          xOffset += 25; 
          yOffset -= 20 // Reduced for shorter SVG (increased from 15)
          heightScale = 0.90; 
        }
        
        
        if (plot.id === 2) {
          heightScale = 0.80; 
          yOffset -= 20; // Reduced for shorter SVG
          widthScale = 1.2
        }
        
   
        if (plot.id === 5) {
          heightScale = 0.60; 
        }
        if (plot.id === 6) {
          heightScale = 0.60; 
          yOffset -= 50; // Reduced for shorter SVG
        }
        if (plot.id === 7) {
          heightScale = 0.88; 
          yOffset = -490 // Moved up for shorter SVG
          xOffset = 10
        }
        
        
        if (plot.id !== 3) {
          yOffset -= 50; // Reduced for shorter SVG
        }
        
      } else if (plot.id >= 3 && plot.id <= 77) {
        yOffset = -200; // Moved up for shorter SVG
        
        
        if (plot.id !== 3) {
          yOffset -= 140; // Reduced for shorter SVG
        }
        if (plot.id === 14) {
          heightScale = 0.78;   
          widthScale = 1.02; 
          yOffset = -350
        }
        if (plot.id === 15) {
          heightScale = 0.78;  
          yOffset = -400 // Moved up for shorter SVG
          widthScale = 1.02; 
        }
        if (plot.id === 16) {
          heightScale = 0.75; 
          yOffset = -425 // Moved up for shorter SVG
          widthScale = 1.02; 
        }
        if (plot.id === 17) {
          heightScale = 0.82; 
          yOffset = -460 // Moved up for shorter SVG
          widthScale = 1.02; 
        }
        if (plot.id === 18) {
          heightScale = 0.78; 
          yOffset = -475 // Moved up for shorter SVG
          widthScale = 1.02; 
        }
        if (plot.id === 19) {
          heightScale = 0.78; 
          yOffset = -500 // Moved up for shorter SVG
          widthScale = 1.02; 
        }
        if (plot.id === 20) {
          heightScale = 0.78; 
          yOffset = -525 // Moved up for shorter SVG
          widthScale = 1.02; 
        }
        if (plot.id === 21) {
          heightScale = 0.80;
          yOffset = -550 // Moved up for shorter SVG
          widthScale = 1.02; 
        }
        if (plot.id === 48) {
          heightScale = 0.77; 
          yOffset = -355 // Moved up for shorter SVG
          widthScale = 0.92;
          xOffset = 10 
        }
        if (plot.id === 47) {
          heightScale = 0.80; 
          yOffset = -401 // Moved up for shorter SVG
          xOffset = 10
          widthScale = 0.95; 
        }
        if (plot.id === 46) {
          heightScale = 0.80; 
          yOffset = -430 // Moved up for shorter SVG
          xOffset = 10
          widthScale = 0.90; 
        }
        if (plot.id === 45) {
          heightScale = 0.1; 
          yOffset = -440
          xOffset = 10
          widthScale = 0.95; 
        }
        if (plot.id === 44) {
          heightScale = 0.85; // Decrease height to 70% of original
          yOffset = -470
          xOffset = 10
          widthScale = 0.92; // Decrease width to 85% of original
        }
        if (plot.id === 43) {
          heightScale = 0.85; // Decrease height to 70% of original
          yOffset = -500
          widthScale = 0.96; // Decrease width to 85% of original
          xOffset = 10
        }
        if (plot.id === 42) {
          heightScale = 0.75; // Decrease height to 70% of original
          yOffset = -520
          xOffset = 10
          widthScale = 0.90; // Decrease width to 85% of original
        }
        if (plot.id === 41) {
          heightScale = 0.75; // Decrease height to 70% of original
          yOffset = -550
          xOffset = 10
          widthScale = 0.88; // Decrease width to 85% of original
        }
        if (plot.id === 40) {
          heightScale = 0.83; // Decrease height to 70% of original
          yOffset = -573
          xOffset = 10
          widthScale = 0.90; // Decrease width to 85% of original
        }
        if (plot.id === 39) {
          heightScale = 0.78; // Decrease height to 70% of original
          yOffset = -594
          xOffset = 10
          widthScale = 0.96; // Decrease width to 85% of original
        }
        if (plot.id === 49) {
          heightScale = 0.75; // Decrease height to 70% of original
          yOffset = -350
          widthScale = 1.02; // Decrease width to 85% of original
        }
        if (plot.id === 50) {
          heightScale = 0.82; // Decrease height to 70% of original
          yOffset = -400
          widthScale = 1.02; // Decrease width to 85% of original
        }
        if (plot.id === 51) {
          heightScale = 0.85; // Decrease height to 70% of original
          yOffset = -430
          widthScale = 1.02; // Decrease width to 85% of original
        }
        if (plot.id === 52) {
          heightScale = 0.85; // Decrease height to 70% of original
          yOffset = -450
          widthScale = 1.02; // Decrease width to 85% of original
        }
        if (plot.id === 53) {
          heightScale = 0.85; // Decrease height to 70% of original
          yOffset = -480
          widthScale = 1.02; // Decrease width to 85% of original
        }
        if (plot.id === 54) {
          heightScale = 0.95; // Decrease height to 70% of original
          yOffset = -500
          widthScale = 1.02; // Decrease width to 85% of original
        }if (plot.id === 55) {
          heightScale = 0.80; // Decrease height to 70% of original
          yOffset = -520
          widthScale = 1.02; // Decrease width to 85% of original
        }if (plot.id === 56) {
          heightScale = 0.78; // Decrease height to 70% of original
          yOffset = -545
          widthScale = 1.02; // Decrease width to 85% of original
        }if (plot.id === 57) {
          heightScale = 0.78; // Decrease height to 70% of original
          yOffset = -570
          widthScale = 1.02; // Decrease width to 85% of original
        }
        if (plot.id === 58) {
          heightScale = 0.79; // Decrease height to 70% of original
          yOffset = -600
          widthScale = 1.02; // Decrease width to 85% of original
        }
        // Adjust plot 13 specifically
        if (plot.id === 13) {
          heightScale = 0.78; // Decrease height to 70% of original
          widthScale = 0.92; // Decrease width to 85% of original
          yOffset -= 15; // Move 15 units further up
        }
        if (plot.id === 12) {
          heightScale = 0.78; 
          yOffset = -430
          widthScale = 0.94; // Decrease width to 85% of original
        }
        if (plot.id === 11) {
          heightScale = 0.86; 
          yOffset = -460
          xOffset = 7
          widthScale = 0.92; // Decrease width to 85% of original
        }
        if (plot.id === 10) {
          heightScale = 0.81; 
          yOffset = -480
          widthScale = 0.92; // Decrease width to 85% of original
        }
        if (plot.id === 9) {
          heightScale = 0.81; 
          yOffset = -500
          widthScale = 0.92; // Decrease width to 85% of original
        }
        if (plot.id === 8) {
          heightScale = 0.76; 
          yOffset = -525
          widthScale = 0.92; // Decrease width to 85% of original
        }
        
        // Decrease size of plot 29
        if (plot.id === 29) {
          heightScale = 0.80; // Decrease height to 75% of original
          yOffset = -357
          xOffset = 10
          widthScale = 0.98; // Decrease width to 80% of original
        }
        if (plot.id === 28) {
          heightScale = 0.78; // Decrease height to 75% of original
          yOffset = -400
          xOffset = 10
          widthScale = 0.98; // Decrease width to 80% of original
        }
        if (plot.id === 27) {
          heightScale = 0.79; // Decrease height to 75% of original
          yOffset = -430
          xOffset = 10
          widthScale = 0.98; // Decrease width to 80% of original
        }
        if (plot.id === 26) {
          heightScale = 0.81; // Decrease height to 75% of original
          yOffset = -455
          xOffset = 10
          widthScale = 0.98; // Decrease width to 80% of original
        }
        if (plot.id === 25) {
          heightScale = 0.82; // Decrease height to 75% of original
          yOffset = -480
          xOffset = 10
          widthScale = 0.98; // Decrease width to 80% of original
        }
        if (plot.id === 24) {
          heightScale = 0.81; // Decrease height to 75% of original
          yOffset = -500
          xOffset = 10
          widthScale = 0.98; // Decrease width to 80% of original
        }
        if (plot.id === 23) {
          heightScale = 0.81; // Decrease height to 75% of original
          yOffset = -520
          xOffset = 10
          widthScale = 0.98; // Decrease width to 80% of original
        }
        if (plot.id === 22) {
          heightScale = 0.78; // Decrease height to 75% of original
          yOffset = -545
          xOffset = 10
          widthScale = 0.96; // Decrease width to 80% of original
        }
        
        // Reduce height of plot 30
        if (plot.id === 30) {
          heightScale = 0.75; // Decrease height to 75% of original
          widthScale = 0.94
          xOffset = 10
          yOffset = -355
          
        }
        if (plot.id === 31) {
          heightScale = 0.80; // Decrease height to 75% of original
          widthScale = 0.95
          xOffset = 10
          yOffset =-405
        }
        if (plot.id === 32) {
          heightScale = 0.76; // Decrease height to 75% of original
          widthScale = 0.95
          xOffset = 10
          yOffset =-430
          
        }
        if (plot.id === 33) {
          heightScale = 0.76; // Decrease height to 75% of original
          widthScale = 0.94
          xOffset = 10
          yOffset =-450
          
        }
        if (plot.id === 34) {
          heightScale = 0.80; // Decrease height to 75% of original
          widthScale = 0.94
          xOffset = 10
          yOffset =-480
          
        }
        if (plot.id === 35) {
          heightScale = 0.80; 
          widthScale = 0.95
          xOffset = 10
          yOffset =-500
          
        }
        if (plot.id === 36) {
          heightScale = 0.85;
          widthScale = 0.95
          xOffset = 10
          yOffset =-520
          
        }
        if (plot.id === 37) {
          heightScale = 0.63; 
          widthScale = 0.94
          xOffset = 10
          yOffset =-540
          
        }
        if (plot.id === 38) {
          heightScale = 0.82; 
          widthScale = 0.99
          xOffset = 5
          yOffset =-580
          
        }

        
        
        if (plot.id === 45) {
          heightScale = 1.1; 
          yOffset -= 8; 
        }
        if (plot.id === 67) {
          yOffset -= 54; 
          heightScale = 0.85
        }
        if (plot.id === 68) {
          yOffset -= 85; 
          heightScale = 0.99
        }
        if (plot.id === 69) {
          yOffset -= 108; // Move 20 units further up

        }
        if (plot.id === 70) {
          yOffset -= 130; // Move 20 units further up
          heightScale = 1.5 // Increase height to 95% of original
          widthScale = 0.95
        }
        if (plot.id === 71) {
          yOffset -= 160; // Move 20 units further up
        }
        if (plot.id === 72) {
          yOffset -= 180; // Move 20 units further up
        }
        // Move plot 64 upwards
        if (plot.id === 64) {
          yOffset -= 163; // Move 20 units further up
          xOffset = 10
          widthScale = 0.95
          heightScale = 0.80
        }
        if (plot.id === 63) {
          yOffset -= 190; // Move 20 units further up
          xOffset = 10
          heightScale = 0.80
        }
        if (plot.id === 62) {
          yOffset -= 220; // Move 20 units further up
          xOffset = 10
          heightScale = 0.85
        }
        if (plot.id === 61) {
          yOffset -= 240; // Move 20 units further up
          xOffset = 10
          heightScale = 0.80
        }
        if (plot.id === 60) {
          yOffset -= 260; // Move 20 units further up
          xOffset = 10
          heightScale = 0.8
        }
        if (plot.id === 59) {
          yOffset -= 280; // Move 20 units further up
          xOffset = 10
          heightScale = 0.78
        }

        // Move plots 65-72 upwards
        if (plot.id >= 65 && plot.id <= 72) {
          yOffset -= 108; // Move 25 units further up
          xOffset = 10
          heightScale = 0.82
        }
        
        // Adjust plots 73-76 specifically
        if (plot.id >= 73 && plot.id <= 76) {
          yOffset -= 110; 
          heightScale = 0.80
          // Move plots 73 and 76 slightly upwards up
          if (plot.id === 73 || plot.id === 76) {
            yOffset -= 50; 
            heightScale = 0.76
          }
        }
        
        // Move plot 77 slightly upward
        if (plot.id === 77) {
          yOffset -= 182; // Move 30 units further up
          heightScale = 0.74
          widthScale = 1.03
        }
      } else if (plot.id >= 82 && plot.id <= 92) {
        xOffset = 5
        yOffset = -400; // Moved up for shorter SVG
        xOffset = 0
        heightScale = 0.80
      } else if (plot.id >= 93 && plot.id <= 102) {
        xOffset = 10
        yOffset = -355; // Moved up for shorter SVG
        heightScale = 0.78
      } 
      else if(plot.id ===79|| plot.id ===80 || plot.id ===81){
        yOffset = -450; // Moved up for shorter SVG
        heightScale = 0.78
      }
      else if(plot.id ===78){
        yOffset = -495; // Moved up for shorter SVG
        heightScale = 0.78
      }
      else if (plot.id >= 140 && plot.id <= 146) {
        yOffset = -115; // Moved up for shorter SVG
        heightScale = 0.54; 
        widthScale = 0.98;
        
        // Increase height specifically for plot 146
        if (plot.id === 146) {
          heightScale = 0.81; // Increase height to 85% of original (10% more than 60%)
          widthScale = 1.02
        }
        
        // Adjust plot 145 specifically
        if (plot.id === 145) {
          heightScale = 0.85; // Slightly increase height to 70% of original
          widthScale = 1.05; // Slightly increase width to 105% of original
          yOffset -= 33; // Move 8 units further up
        }
        if (plot.id === 144) {
          heightScale = 0.80; // Slightly increase height to 70% of original
          widthScale = 1.05; // Slightly increase width to 105% of original
          yOffset -= 55; // Move 8 units further up
        }
        if (plot.id === 143) {
          heightScale = 0.84; // Slightly increase height to 70% of original
          widthScale = 1.05; // Slightly increase width to 105% of original
          yOffset -= 84; // Move 8 units further up
        }
        if (plot.id === 142) {
          heightScale = 0.78; // Slightly increase height to 70% of original
          widthScale = 1.05; // Slightly increase width to 105% of original
          yOffset -= 102; // Move 8 units further up
        }
        if (plot.id === 141) {
          heightScale = 0.85; // Slightly increase height to 70% of original
          widthScale = 1.05; // Slightly increase width to 105% of original
          yOffset -= 129; // Move 8 units further up
        }
        if (plot.id === 140) {
          heightScale = 0.70; // Slightly increase height to 70% of original
          widthScale = 1.05; // Slightly increase width to 105% of original
          yOffset -= 145; // Move 8 units further up
        }
      }
      
      // Adjust plot 139 specifically
      if (plot.id === 139) {
        yOffset = -294; // Moved up for shorter SVG
        heightScale = 0.80
      }
      if (plot.id === 128) {
        yOffset = -147; // Moved up for shorter SVG
        heightScale = 0.80
        widthScale = 0.96
      }
      if (plot.id === 127) {
        yOffset = -175; // Moved up for shorter SVG
        heightScale = 0.80
        widthScale = 0.95
      }
      if (plot.id === 126) {
        yOffset = -200; // Moved up for shorter SVG
        heightScale = 0.80
      }
      if (plot.id === 125) {
        yOffset = -224; // Moved up for shorter SVG
        heightScale = 0.88
      }
      if (plot.id === 124) {
        yOffset = -244; // Moved up for shorter SVG
        heightScale = 0.88
      }
      if (plot.id === 123) {
        yOffset = -260; // Moved up for shorter SVG
        heightScale = 0.80
      }
      if (plot.id === 122) {
        yOffset = -285; // Moved up for shorter SVG
        heightScale = 0.70
      }
      if (plot.id === 121) {
        yOffset = -286; // Moved up for shorter SVG
        heightScale = 0.74
      }
      if (plot.id === 120) {
        yOffset = -270; // Moved up for shorter SVG
        heightScale = 0.88
      }
      if (plot.id === 119) {
        yOffset = -240; // Moved up for shorter SVG
        heightScale = 0.80
      }
      if (plot.id === 118) {
        yOffset = -222; // Moved up for shorter SVG
        heightScale = 0.85
      }
      if (plot.id === 117) {
        yOffset = -202; // Moved up for shorter SVG
        heightScale = 0.84
      }
      if (plot.id === 116) {
        yOffset = -177; // Moved up for shorter SVG
        heightScale = 0.80
      }
      if(plot.id === 135){
        yOffset = -225 // Moved up for shorter SVG
        heightScale = 0.90
      }
      if (plot.id === 115) {
        yOffset = -154; // Moved up for shorter SVG
        heightScale = 0.80
      }
      if(plot.id ===112){
        yOffset = -80; // Moved up for shorter SVG
        heightScale = 0.70
      }
      if(plot.id ===111){
        yOffset = -90; // Moved up for shorter SVG
        heightScale = 0.76
        widthScale = 1.0
      }
      if(plot.id ===110){
        yOffset = -120; // Moved up for shorter SVG
        heightScale = 0.75
        widthScale = 1.2
        xOffset = 10
      }
      if(plot.id ===109){
        yOffset = -150; // Moved up for shorter SVG
        heightScale = 0.80
        widthScale = 1.2 // Increase width to 120% of original
      }
      if(plot.id ===108){
        yOffset = -175; // Moved up for shorter SVG
        heightScale = 0.85
        widthScale = 1.2 // Increase width to 120% of original
      }
      if(plot.id ===107){
        xOffset = 1
        yOffset = -200; // Moved up for shorter SVG
        heightScale = 0.85
        widthScale = 1.2 // Increase width to 120% of original
      }
      if(plot.id ===106){
        yOffset = -220; // Moved up for shorter SVG
        heightScale = 0.85
        widthScale = 1.2 // Increase width to 120% of original
      }
      if(plot.id ===105){
        yOffset = -240; // Moved up for shorter SVG
        heightScale = 0.75
        widthScale = 1.2 // Increase width to 120% of original
      }

      if (plot.id === 113) {
        yOffset = -80; // Moved up for shorter SVG
        heightScale = 0.80
        widthScale = 0.95
      }
      if (plot.id === 114) {
        yOffset = -128; // Moved up for shorter SVG
        heightScale = 0.85
      }
      if (plot.id === 104) {
        yOffset = -274; // Moved up for shorter SVG
        heightScale = 0.88
        widthScale = 1.2 // Increase width to 120% of original
      }

      if (plot.id === 129) {
        yOffset = -126; // Moved up for shorter SVG
        heightScale = 0.80
        widthScale = 0.95
      }
      if (plot.id === 103) {
        yOffset = -298; // Moved up for shorter SVG
        heightScale = 0.83
        widthScale = 1.2 // Increase width to 120% of original
      }
      if (plot.id === 130) {
        yOffset = -90; // Moved up for shorter SVG
        heightScale = 0.80
        widthScale = 0.95
      }
      if (plot.id === 131) {
        yOffset = -100; // Moved up for shorter SVG
        heightScale = 0.80
      }
      if (plot.id === 132) {
        yOffset = -151; // Moved up for shorter SVG
        heightScale = 0.85
      }
      if (plot.id === 133) {
        yOffset = -174; // Moved up for shorter SVG
        heightScale = 0.85
      }
      if (plot.id === 134) {
        yOffset = -196; // Moved up for shorter SVG
        heightScale = 0.85
      }
      if (plot.id === 112) {
        yOffset = -64; // Move 50 units up (was -54)
        heightScale = 0.80
        widthScale = 0.96
      }
      if (plot.id === 136) {
        yOffset = -244; // Moved up for shorter SVG
        heightScale = 0.75
      }
      if (plot.id === 137) {
        yOffset = -274; // Moved up for shorter SVG
        heightScale = 0.80
      }
      if (plot.id === 138) {
        yOffset = -304; // Moved up for shorter SVG
        heightScale = 0.85
      }
      
      // Increase height and width specifically for plot 3
      if (plot.id === 3) {
        heightScale = 0.78; // Increase height to 80% of original (was 70%)
        widthScale = 1.00; // Increase width to 105% of original (was 95%)
        xOffset += 7; // Move 15 units right
        yOffset -= 180; // Move 20 units up (increased from 160)
      }
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

  // Calculate zoom scale based on container size and SVG dimensions
  useEffect(() => {
    const calculateZoomScale = () => {
      if (svgRef.current && svgRef.current.parentElement) {
        const container = svgRef.current.parentElement;
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        
        // Calculate scale based on how much the SVG is being scaled to fit the container
        const scaleX = containerWidth / svgWidth;
        const scaleY = containerHeight / svgHeight;
        const scale = Math.min(scaleX, scaleY);
        
        // Detect browser zoom level
        const detectBrowserZoom = () => {
          const visualViewport = window.visualViewport;
          if (visualViewport) {
            return visualViewport.scale;
          }
          
          // Fallback method using device pixel ratio
          const testElement = document.createElement('div');
          testElement.style.width = '100vw';
          testElement.style.height = '100vh';
          testElement.style.position = 'fixed';
          testElement.style.visibility = 'hidden';
          testElement.style.pointerEvents = 'none';
          document.body.appendChild(testElement);
          
          const rect = testElement.getBoundingClientRect();
          document.body.removeChild(testElement);
          
          const viewportWidth = rect.width;
          const viewportHeight = rect.height;
          const windowWidth = window.innerWidth;
          const windowHeight = window.innerHeight;
          
          const zoomX = windowWidth / viewportWidth;
          const zoomY = windowHeight / viewportHeight;
          const browserZoom = (zoomX + zoomY) / 2;
          
          return browserZoom;
        };
        
        const browserZoom = detectBrowserZoom();
        const totalScale = scale * browserZoom;
        
        setZoomScale(totalScale);
      }
    };

    calculateZoomScale();
    
    // Add resize observer to detect zoom changes
    const resizeObserver = new ResizeObserver(calculateZoomScale);
    
    if (svgRef.current && svgRef.current.parentElement) {
      resizeObserver.observe(svgRef.current.parentElement);
    }
    
    // Also listen to window resize for browser zoom detection
    const handleResize = () => {
      setTimeout(calculateZoomScale, 100); // Debounce
    };
    
    // Listen for zoom events
    const handleZoom = () => {
      setTimeout(calculateZoomScale, 100);
    };
    
    // Detect wheel events for zoom
    const handleWheel = (e) => {
      if (e.ctrlKey || e.metaKey) {
        setTimeout(calculateZoomScale, 100);
      }
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('wheel', handleWheel, { passive: true });
    
    // Listen for visual viewport changes (mobile zoom)
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleZoom);
    }
    
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('wheel', handleWheel);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleZoom);
      }
    };
  }, [isMobile, isTablet, svgWidth, svgHeight]);

  // Calculate dynamic font sizes based on zoom scale
  const getDynamicFontSize = (baseSize, minSize, maxSize) => {
    const scaledSize = baseSize * zoomScale;
    return Math.max(minSize, Math.min(maxSize, scaledSize));
  };

  // Get responsive font sizes for plot elements
  const getPlotLabelFontSize = () => {
    if (isMobile) {
      return getDynamicFontSize(30, 26, 44);
    } else {
      return getDynamicFontSize(36, 32, 52);
    }
  };


  const getStrokeWidth = () => {
    if (isMobile) {
      return getDynamicFontSize(1.8, 1.6, 2.6);
    } else {
      return getDynamicFontSize(2.1, 1.9, 3.1);
    }
  };

  // Enhanced shape rendering quality with mobile optimizations
  const getShapeStyle = () => ({
    cursor: 'pointer', 
    opacity: 0.85, 
    transition: isMobile ? 'opacity 0.1s ease' : 'opacity 0.2s ease',
    // Mobile-optimized rendering
    shapeRendering: isMobile ? 'auto' : 'crispEdges',
    imageRendering: isMobile ? 'auto' : 'crisp-edges',
    // Simplified filter for mobile performance
    filter: isMobile ? 'contrast(1.02) brightness(1.01)' : 'contrast(1.05) brightness(1.02)',
    // Hardware acceleration for smooth zooming
    willChange: isMobile ? 'transform' : 'opacity, transform',
    transform: isMobile ? 'translateZ(0)' : 'none',
    // Optimize for mobile rendering
    backfaceVisibility: 'hidden',
    perspective: '1000px'
  });

  // Get fill color with special handling for plots 103-109
  const getPlotFillColor = (plot) => {
    // Reverted: plots 103-109 now use original status colors
    return statusColors[plot.status];
  };

  // Get zoom level percentage for display
  // const getZoomPercentage = () => {
  //   return Math.round(zoomScale * 100);
  // };
  const containerStyle = {
    backgroundColor: 'white',
    borderRadius: isMobile ? '4px' : '8px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    padding: isMobile ? '4px' : '14px',
    maxWidth: isMobile ? '120vw' : '100%',
    overflowY: isMobile ? 'auto' : 'hidden', // Enable vertical scrolling for mobile
    overflowX: isMobile ? 'auto' : 'hidden', // Enable horizontal scrolling for mobile
    height: isMobile ? 'calc(100vh - 90px)' : 'calc(100vh - 170px)',
    display: 'flex',
    flexDirection: 'column',
    margin: isMobile ? '0 -10vw' : '0',
    // Performance optimizations for mobile zoom
    transform: isMobile ? 'translateZ(0)' : 'none',
    willChange: isMobile ? 'transform' : 'auto',
    backfaceVisibility: 'hidden',
    perspective: '1000px',
    // Optimize scrolling performance
    scrollBehavior: isMobile ? 'smooth' : 'auto',
    WebkitOverflowScrolling: isMobile ? 'touch' : 'auto'
  };

  const headerStyle = {
    marginBottom: isMobile ? '8px' : '16px'
  };

  const borderStyle = {
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    overflow: isMobile ? 'visible' : 'hidden', // Allow content to be scrollable for mobile
    position: 'relative',
    width: '100%',
    height: isMobile ? 'auto' : '100%', // Allow height to expand for mobile scrolling
    minHeight: '100%', // Ensure minimum height
    display: 'flex',
    backgroundColor: '#f9fafb',
    // Mobile performance optimizations
    transform: isMobile ? 'translateZ(0)' : 'none',
    willChange: isMobile ? 'transform' : 'auto',
    backfaceVisibility: 'hidden',
    perspective: '1000px'
  };

  const svgStyle = {
    width: isMobile ? '120%' : '100%',
    height: '100%',
    display: 'block',
    margin: '0',
    padding: '0',
    transform: 'scale(1)',
    transformOrigin: 'top left',
    // Mobile-optimized rendering
    imageRendering: isMobile ? 'auto' : 'crisp-edges',
    shapeRendering: isMobile ? 'auto' : 'crispEdges',
    textRendering: 'optimizeLegibility',
    // Simplified filter for mobile performance
    filter: isMobile ? 'contrast(1.02) brightness(0.98)' : 'contrast(1.1) brightness(0.95) saturate(1.1)',
    willChange: 'transform',
    position: 'relative',
    left: '-90px',
    // Hardware acceleration for smooth zooming
    backfaceVisibility: 'hidden',
    perspective: '1000px'
  };



  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
      </div>
      
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
          {/* Plot sections with enhanced visibility and labeling */}
          {plots.map((plot) => {
            // Scale plot coordinates to match enlarged SVG
            const scaledPlot = scalePlotCoordinates(plot);
            
            const getTextCenterX = (plot) => {
              if (plot.shape === 'square') {
                return scaledPlot.x + Math.min(scaledPlot.width, scaledPlot.height) / 2;
              } else if ((plot.shape === 'trapezium' || plot.shape === 'polygon') && plot.points) {
                // Scale and center
                const scaledCenterX = scaledPlot.x + (scaledPlot.width / 2);
                return scaledCenterX;
              } else {
                return scaledPlot.x + scaledPlot.width / 2;
              }
            };

            const getTextCenterY = (plot) => {
              if (plot.shape === 'square') {
                return scaledPlot.y + Math.min(scaledPlot.width, scaledPlot.height) / 2;
              } else if ((plot.shape === 'trapezium' || plot.shape === 'polygon') && plot.points) {
                // Calculate center from scaled polygon points
                const scaledCenterY = scaledPlot.y + (scaledPlot.height / 2);
                return scaledCenterY;
              } else {
                return scaledPlot.y + scaledPlot.height / 2;
              }
            };

            const renderShape = () => {
              // Handle different shapes based on plot.shape property
              if (plot.shape === 'square') {
                // Render a perfect square
                const size = Math.min(scaledPlot.width, scaledPlot.height);
                return (
                  <rect
                    x={scaledPlot.x}
                    y={scaledPlot.y}
                    width={size}
                    height={size}
                    fill={getPlotFillColor(plot)}
                    stroke="#333"
                    strokeWidth="2"
                    style={getShapeStyle()}
                    onClick={() => onPlotClick && onPlotClick(plot)}
                    onMouseOver={(e) => e.currentTarget.style.opacity = '0.6'}
                    onMouseOut={(e) => e.currentTarget.style.opacity = '0.85'}
                  />
                );
              } else if (plot.shape === 'rectangle') {
                return (
                  <rect
                    x={scaledPlot.x}
                    y={scaledPlot.y}
                    width={scaledPlot.width}
                    height={scaledPlot.height}
                    fill={getPlotFillColor(plot)}
                    stroke="#333"
                    strokeWidth="2"
                    style={getShapeStyle()}
                    onClick={() => onPlotClick && onPlotClick(plot)}
                    onMouseOver={(e) => e.currentTarget.style.opacity = '0.6'}
                    onMouseOut={(e) => e.currentTarget.style.opacity = '0.85'}
                  />
                );
              } else if (plot.shape === 'rotated-rect') {
                return (
                  <rect
                    x={scaledPlot.x}
                    y={scaledPlot.y}
                    width={scaledPlot.width}
                    height={scaledPlot.height}
                    fill={getPlotFillColor(plot)}
                    stroke="#333"
                    strokeWidth="2"
                    transform={`rotate(-45, ${scaledPlot.x + scaledPlot.width/2}, ${scaledPlot.y + scaledPlot.height/2})`}
                    style={getShapeStyle()}
                    onClick={() => onPlotClick && onPlotClick(plot)}
                    onMouseOver={(e) => e.currentTarget.style.opacity = '0.6'}
                    onMouseOut={(e) => e.currentTarget.style.opacity = '0.85'}
                  />
                );
              } else if (plot.shape === 'trapezium' || plot.shape === 'polygon') {
                const getScaledPoints = (points, x, y, width, height) => {
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
                  
                  // Scale and translate points
                  return originalPoints.map(point => {
                    const scaledX = (point.x - minX) * (width / originalWidth);
                    const scaledY = (point.y - minY) * (height / originalHeight);
                    return `${x + scaledX},${y + scaledY}`;
                  }).join(' ');
                };
                
                return (
                  <polygon
                    points={getScaledPoints(scaledPlot.points, scaledPlot.x, scaledPlot.y, scaledPlot.width, scaledPlot.height)}
                    fill={getPlotFillColor(plot)}
                    stroke="#333"
                    strokeWidth="2"
                    style={getShapeStyle()}
                    onClick={() => onPlotClick && onPlotClick(plot)}
                    onMouseOver={(e) => e.currentTarget.style.opacity = '0.6'}
                    onMouseOut={(e) => e.currentTarget.style.opacity = '0.85'}
                  />
                );
              } else if (plot.shape === 'L-shape' && plot.points) {
                return (
                  <path
                    d={scaledPlot.points}
                    fill={getPlotFillColor(plot)}
                    stroke="#333"
                    strokeWidth="2"
                    style={{ 
                      cursor: 'pointer', 
                      opacity: 0.8, 
                      transition: 'opacity 0.2s'
                    }}
                    onClick={() => onPlotClick && onPlotClick(plot)}
                    onMouseOver={(e) => e.currentTarget.style.opacity = '0.6'}
                    onMouseOut={(e) => e.currentTarget.style.opacity = '0.8'}
                  />
                );
              } else {
                // Default to rectangle for unknown shapes
                return (
                  <rect
                    x={scaledPlot.x}
                    y={scaledPlot.y}
                    width={scaledPlot.width}
                    height={scaledPlot.height}
                    fill={getPlotFillColor(plot)}
                    stroke="#333"
                    strokeWidth="2"
                    style={{ 
                      cursor: 'pointer', 
                      opacity: 0.8, 
                      transition: 'opacity 0.2s'
                    }}
                    onClick={() => onPlotClick && onPlotClick(plot)}
                    onMouseOver={(e) => e.currentTarget.style.opacity = '0.6'}
                    onMouseOut={(e) => e.currentTarget.style.opacity = '0.8'}
                  />
                );
              }
            };

            return (
              <g key={plot.id}>
                {renderShape()}
                {/* Plot number display only - Dynamic sizing based on zoom */}
                <foreignObject 
                  x={getTextCenterX(plot) - (isMobile ? 25 : 35)} 
                  y={getTextCenterY(plot) - (isMobile ? 15 : 25)} 
                  width={isMobile ? '60' : '80'} 
                  height={isMobile ? '60' : '70'}
                  style={{ pointerEvents: 'none' }}
                >
                  <PlotLabel 
                    number={plot.id} 
                    area={plot.area || 183.3}
                    isMobile={isMobile}
                    fontSize={getPlotLabelFontSize()}
                    strokeWidth={getStrokeWidth()}
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

export default PlotLayout
