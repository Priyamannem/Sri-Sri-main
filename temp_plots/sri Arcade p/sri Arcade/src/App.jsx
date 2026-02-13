import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PlotLayout from './components/PlotLayout';
import plotsData from './plots.json';
import './App.css';

function App() {
  const [plotsDataState, setPlotsData] = useState(null);
  const [selectedPlot, setSelectedPlot] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    setPlotsData(plotsData);
    
    // Detect device type
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const handlePlotClick = (plot) => {
    setSelectedPlot(plot);
  };
  if (!plotsDataState) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#6b7280' }}>Loading...</div>
      </div>
    );
  }

  const mainStyle = {
    minHeight: '100vh',
    backgroundColor: '#f3f4f6',
    overflow: 'hidden'
  };

  const containerStyle = {
    maxWidth: isMobile ? '100%' : (isTablet ? '1400px' : '2600px'),
    margin: '0 auto',
    padding: isMobile ? '16px 8px' : (isTablet ? '24px 16px' : '32px 16px'),
    height: isMobile ? 'calc(100vh - 80px)' : 'auto'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : (isTablet ? '300px 1fr' : '400px 1fr'),
    gap: isMobile ? '16px' : '24px',
    height: isMobile ? '100%' : 'auto'
  };

  const sidebarStyle = {
    display: isMobile ? 'none' : 'flex',
    flexDirection: 'column',
    gap: '16px',
    marginTop: isMobile ? '0' : '50px',
    marginLeft: '0px',
    maxHeight: isMobile ? 'none' : 'calc(100vh - 200px)',
    overflowY: 'auto'
  };

  const detailsContainerStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    padding: isMobile ? '12px' : '14px',
    color: 'white',
    transition: 'background 0.3s ease'
  };

  const detailsTitleStyle = {
    fontSize: isMobile ? '16px' : '20px',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: 'white',
    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
  };
  const detailsContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    color: 'white'
  };
  const detailItemStyle = {
    fontSize: isMobile ? '12px' : '16px',
    color: 'white',
    textShadow: '0 1px 2px rgba(0,0,0,0.2)',
    margin: '0',
    padding: '0',
    lineHeight: '1.2'
  };
  const statsContainerStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    padding: isMobile ? '12px' : '16px',
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    border: '2px solid #FF6B35',
    color: 'white'
  };

  const statsItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: isMobile ? '12px' : '16px',
    color: 'white',
    textShadow: '0 1px 2px rgba(0,0,0,0.2)'
  };

  const statsLabelStyle = {
    fontWeight: '500',
    fontSize: isMobile ? '12px' : '16px',
    color: 'white',
    textShadow: '0 1px 2px rgba(0,0,0,0.2)'
  };

  return (
    <div style={mainStyle}>
      <Header />
      <main style={containerStyle}>
        <div style={gridStyle}>
          {/* Sidebar (Navbar Area) - Hidden on mobile */}
          {!isMobile && (
            <div style={sidebarStyle}>
              {/* Selected Plot Info */}
              {selectedPlot && (
                <div style={{...detailsContainerStyle, backgroundColor: selectedPlot ? plotsDataState.statusColors[selectedPlot.status] : 'white', transition: 'background 0.3s ease'}}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '10px'
                  }}>
                    <h3 style={detailsTitleStyle}>Plot Details</h3>
                  </div>
                  <div style={detailsContentStyle}>
                    <p style={{...detailItemStyle, fontSize: '16px', fontWeight: 'bold', marginBottom: '5px'}}>
                      {selectedPlot.id ? `SRI SRI ARCADE` : ''}
                    </p>
                    <p style={{...detailItemStyle, fontSize: '16px'}}>
                      /HOUSE SITE PLOTS W-B:
                    </p>
                    <p style={{...detailItemStyle, fontSize: '16px'}}>
                      PLOT: {selectedPlot.id} EXTENT: 328 SQ.Yds
                    </p>
                    <p style={{...detailItemStyle, fontSize: '16px'}}>
                      STATUS: {selectedPlot.status ? selectedPlot.status.toUpperCase() : 'AVAILABLE'}
                    </p>
                    <p style={{...detailItemStyle, fontSize: '16px', marginTop: '5px'}}>
                      Boundaries:
                    </p>
                    <p style={{...detailItemStyle, fontSize: '14px', marginLeft: '20px'}}>
                      [N]: BY 33' WIDE ROAD
                    </p>
                    <p style={{...detailItemStyle, fontSize: '14px', marginLeft: '20px'}}>
                      (S): BY PLOT NO.{parseInt(selectedPlot.id) - 1}
                    </p>
                    <p style={{...detailItemStyle, fontSize: '14px', marginLeft: '20px'}}>
                      (E): BY 60' WIDE ROAD
                    </p>
                    <p style={{...detailItemStyle, fontSize: '14px', marginLeft: '20px'}}>
                      [W]: BY PLOT NO.{parseInt(selectedPlot.id) + 20}
                    </p>
                  </div>
                </div>
              )}
              
              {/* Statistics */}
              <div style={statsContainerStyle}>
                <h3 style={detailsTitleStyle}>Statistics</h3>
                <div style={detailsContentStyle}>
                  {Object.entries(plotsDataState.statusLabels).map(([status, label]) => (
                    <div key={status} style={statsItemStyle}>
                      <span style={statsLabelStyle}>{label}:</span>
                      <span style={{ fontWeight: 'bold' }}>{plotsDataState.plots.filter(p => p.status === status).length}</span>
                    </div>
                  ))}
                  <div key="total" style={{...statsItemStyle, borderTop: '1px solid rgba(255,255,255,0.3)', paddingTop: '8px', marginTop: '8px'}}>
                    <span style={{...statsLabelStyle, fontWeight: 'bold'}}>Total Plots:</span>
                    <span style={{ fontWeight: 'bold' }}>{plotsDataState.plots.length}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Main Plot Layout - Full width on mobile */}
          <div style={{ height: isMobile ? 'calc(100vh - 120px)' : 'auto' }}>
            <PlotLayout 
              plots={plotsDataState.plots} 
              statusColors={plotsDataState.statusColors}
              onPlotClick={handlePlotClick}
              isMobile={isMobile}
              isTablet={isTablet}
            />
            
            {/* Mobile Plot Details - Show at bottom on mobile */}
            {isMobile && selectedPlot && (
              <div style={{
                ...detailsContainerStyle, 
                backgroundColor: selectedPlot ? plotsDataState.statusColors[selectedPlot.status] : 'white',
                marginTop: '16px',
                position: 'fixed',
                bottom: '0',
                left: '0',
                right: '0',
                zIndex: 1000,
                borderRadius: '16px 16px 0 0',
                maxHeight: '40vh',
                overflowY: 'auto'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '12px'
                }}>
                  <h3 style={detailsTitleStyle}>Plot Details</h3>
                  <button
                    onClick={() => setSelectedPlot(null)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'white',
                      fontSize: '20px',
                      cursor: 'pointer',
                      padding: '4px'
                    }}
                  >
                    ✕
                  </button>
                </div>
                <div style={detailsContentStyle}>
                  <p style={{...detailItemStyle, fontSize: '14px', fontWeight: 'bold', marginBottom: '5px'}}>
                    {selectedPlot.id ? `SRI SRI ARCADE` : ''}
                  </p>
                  <p style={{...detailItemStyle, fontSize: '14px'}}>
                    /HOUSE SITE PLOTS W-B:
                  </p>
                  <p style={{...detailItemStyle, fontSize: '14px'}}>
                    PLOT: {selectedPlot.id} EXTENT: 328 SQ.Yds
                  </p>
                  <p style={{...detailItemStyle, fontSize: '14px'}}>
                    STATUS: {selectedPlot.status ? selectedPlot.status.toUpperCase() : 'AVAILABLE'}
                  </p>
                  <p style={{...detailItemStyle, fontSize: '14px', marginTop: '5px'}}>
                    Boundaries:
                  </p>
                  <p style={{...detailItemStyle, fontSize: '14px', marginLeft: '20px'}}>
                    [N]: BY 33' WIDE ROAD
                  </p>
                  <p style={{...detailItemStyle, fontSize: '14px', marginLeft: '20px'}}>
                    (S): BY PLOT NO.{parseInt(selectedPlot.id) - 1}
                  </p>
                  <p style={{...detailItemStyle, fontSize: '14px', marginLeft: '20px'}}>
                    (E): BY 60' WIDE ROAD
                  </p>
                  <p style={{...detailItemStyle, fontSize: '14px', marginLeft: '20px'}}>
                    [W]: BY PLOT NO.{parseInt(selectedPlot.id) + 20}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
