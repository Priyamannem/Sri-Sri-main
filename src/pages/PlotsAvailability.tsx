import React, { useState, useEffect } from 'react';
import Header from '../components/plots/Header';
import PlotLayout from '../components/plots/PlotLayout';
import plotsData from '../plots.json';

const PlotsAvailability = () => {
    const [plotsDataState, setPlotsData] = useState<any>(null);
    const [selectedPlot, setSelectedPlot] = useState<any>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        setPlotsData(plotsData);

        const checkDevice = () => {
            const width = window.innerWidth;
            setIsMobile(width <= 768);
            setIsTablet(width > 768 && width <= 1024);
        };

        checkDevice();
        window.addEventListener('resize', checkDevice);

        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    const handlePlotClick = (plot: any) => {
        setSelectedPlot(plot);
    };

    if (!plotsDataState) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="text-xl font-bold text-slate-400 animate-pulse">Loading Plot Map...</div>
            </div>
        );
    }

    const mainStyle: React.CSSProperties = {
        minHeight: '100vh',
        backgroundColor: 'hsl(var(--background))',
        overflow: 'hidden'
    };

    const containerStyle: React.CSSProperties = {
        maxWidth: isMobile ? '100%' : (isTablet ? '1400px' : '2600px'),
        margin: '0 auto',
        padding: isMobile ? '16px 8px' : (isTablet ? '24px 16px' : '32px 16px'),
        height: isMobile ? 'calc(100vh - 80px)' : 'auto'
    };

    const gridStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : (isTablet ? '350px 1fr' : '450px 1fr'),
        gap: isMobile ? '16px' : '32px',
        height: isMobile ? '100%' : 'auto'
    };

    const sidebarStyle: React.CSSProperties = {
        display: isMobile ? 'none' : 'flex',
        flexDirection: 'column',
        gap: '24px',
        marginTop: '0px',
        maxHeight: 'calc(100vh - 120px)',
        overflowY: 'auto',
        paddingRight: '10px'
    };

    const detailsContainerStyle: React.CSSProperties = {
        backgroundColor: 'hsl(var(--secondary))',
        borderRadius: '24px',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)',
        padding: isMobile ? '20px' : '32px',
        color: 'hsl(var(--cream))',
        transition: 'all 0.3s ease',
        border: '1px solid rgba(255,255,255,0.1)'
    };

    const detailsTitleStyle: React.CSSProperties = {
        fontSize: isMobile ? '20px' : '26px',
        fontWeight: 'bold',
        marginBottom: '20px',
        fontFamily: "'Playfair Display', serif",
        color: 'hsl(var(--primary))'
    };

    const detailItemStyle: React.CSSProperties = {
        fontSize: isMobile ? '14px' : '16px',
        marginBottom: '8px',
        fontFamily: "'Inter', sans-serif"
    };

    const statsContainerStyle: React.CSSProperties = {
        borderRadius: '24px',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.1)',
        padding: isMobile ? '20px' : '32px',
        backgroundColor: 'white',
        border: '1px solid hsl(var(--border))',
        color: 'hsl(var(--foreground))'
    };

    return (
        <div style={mainStyle}>
            <Header title="Sri Sri Arcades — Plot Masterplan" />
            <main style={containerStyle}>
                <div style={gridStyle}>
                    {!isMobile && (
                        <div style={sidebarStyle} className="custom-scrollbar">
                            {selectedPlot ? (
                                <div style={{
                                    ...detailsContainerStyle,
                                    backgroundColor: 'hsl(var(--secondary))'
                                }}>
                                    <h3 style={detailsTitleStyle}>Plot Details</h3>
                                    <div className="space-y-4">
                                        <p style={{ ...detailItemStyle, fontSize: '18px', fontWeight: 'bold' }} className="text-gold uppercase tracking-widest pb-2 border-b border-white/10">
                                            SRI SRI ARCADE
                                        </p>
                                        <div className="flex justify-between items-center py-2 border-b border-white/5">
                                            <span className="text-cream/50 uppercase text-[10px] font-black">Plot No</span>
                                            <span className="text-xl font-black text-gold">{selectedPlot.id}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b border-white/5">
                                            <span className="text-cream/50 uppercase text-[10px] font-black">Area Extent</span>
                                            <span className="font-bold">{selectedPlot.area || 328} SQ.Yds</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2">
                                            <span className="text-cream/50 uppercase text-[10px] font-black">Status</span>
                                            <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase ${selectedPlot.status === 'available' ? 'bg-green-500/20 text-green-400' :
                                                    selectedPlot.status === 'sold' || selectedPlot.status === 'registered' ? 'bg-red-500/20 text-red-400' : 'bg-gold/20 text-gold'
                                                }`}>
                                                {selectedPlot.status}
                                            </span>
                                        </div>

                                        <div className="mt-8 pt-6 border-t border-white/10">
                                            <h4 className="text-[10px] uppercase font-black tracking-[0.2em] text-cream/30 mb-4">Boundaries View</h4>
                                            <div className="grid grid-cols-1 gap-3 text-[11px] font-bold">
                                                <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex justify-between">
                                                    <span className="text-gold/50">[N]</span>
                                                    <span>BY 33' WIDE ROAD</span>
                                                </div>
                                                <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex justify-between">
                                                    <span className="text-gold/50">(S)</span>
                                                    <span>BY PLOT NO.{parseInt(selectedPlot.id) - 1}</span>
                                                </div>
                                                <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex justify-between">
                                                    <span className="text-gold/50">(E)</span>
                                                    <span>BY 60' WIDE ROAD</span>
                                                </div>
                                                <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex justify-between">
                                                    <span className="text-gold/50">[W]</span>
                                                    <span>BY PLOT NO.{parseInt(selectedPlot.id) + 20}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setSelectedPlot(null)}
                                        className="mt-8 w-full py-4 bg-white/5 hover:bg-white/10 text-xs font-black uppercase tracking-widest rounded-xl transition-all border border-white/10"
                                    >
                                        Deselect Plot
                                    </button>
                                </div>
                            ) : (
                                <div style={statsContainerStyle}>
                                    <h3 style={detailsTitleStyle}>Project Statistics</h3>
                                    <div className="space-y-6">
                                        <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                                            <p className="text-[10px] uppercase font-black text-slate-400 mb-2 tracking-widest">Total Inventory</p>
                                            <p className="text-4xl font-serif font-black text-secondary">25+ Acres</p>
                                        </div>
                                        <div className="space-y-3">
                                            {Object.entries(plotsDataState.statusLabels).map(([status, label]: [string, any]) => (
                                                <div key={status} className="flex justify-between items-center p-3 hover:bg-slate-50 transition-colors rounded-xl">
                                                    <span className="text-sm font-medium text-muted-foreground">{label}</span>
                                                    <span className="font-bold">{plotsDataState.plots.filter((p: any) => p.status === status).length}</span>
                                                </div>
                                            ))}
                                            <div className="flex justify-between items-center p-3 bg-secondary text-cream rounded-xl mt-4">
                                                <span className="text-sm font-black uppercase tracking-widest">Total Plots</span>
                                                <span className="font-black text-lg">{plotsDataState.plots.length}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    <div className="bg-white rounded-[2rem] border border-border shadow-2xl relative overflow-hidden" style={{ height: isMobile ? 'calc(100vh - 120px)' : 'auto' }}>
                        <PlotLayout
                            plots={plotsDataState.plots}
                            statusColors={plotsDataState.statusColors}
                            onPlotClick={handlePlotClick}
                            isMobile={isMobile}
                            isTablet={isTablet}
                        />

                        {isMobile && selectedPlot && (
                            <div style={{
                                ...detailsContainerStyle,
                                position: 'fixed',
                                bottom: '0',
                                left: '0',
                                right: '0',
                                zIndex: 1000,
                                borderRadius: '32px 32px 0 0',
                                maxHeight: '50vh',
                                overflowY: 'auto',
                                padding: '32px'
                            }}>
                                <div className="flex justify-between items-center mb-6">
                                    <h3 style={detailsTitleStyle} className="m-0 text-xl">Plot Details</h3>
                                    <button onClick={() => setSelectedPlot(null)} className="text-white/50 hover:text-white text-2xl font-light">✕</button>
                                </div>
                                <div className="space-y-4">
                                    <p className="font-black text-gold uppercase tracking-widest text-sm">Sri Sri Arcade</p>
                                    <div className="flex justify-between border-b border-white/10 pb-3">
                                        <span className="text-cream/50 text-xs">PLOT NO</span>
                                        <span className="font-black text-xl">{selectedPlot.id}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-white/10 pb-3">
                                        <span className="text-cream/50 text-xs">AREA</span>
                                        <span className="font-bold">{selectedPlot.area || 328} SQ.Yds</span>
                                    </div>
                                    <div className="flex justify-between pb-3">
                                        <span className="text-cream/50 text-xs">STATUS</span>
                                        <span className={`font-black text-sm uppercase ${selectedPlot.status === 'available' ? 'text-green-400' :
                                                selectedPlot.status === 'sold' || selectedPlot.status === 'registered' ? 'text-red-400' : 'text-gold'
                                            }`}>{selectedPlot.status}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PlotsAvailability;
