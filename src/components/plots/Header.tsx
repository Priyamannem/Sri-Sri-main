import React from 'react';

interface HeaderProps {
    title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = "SRI SRI ARCADE" }) => {
    return (
        <header className="bg-secondary p-4 shadow-lg border-b border-white/10">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="bg-gold w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-secondary font-black text-xl">S</span>
                    </div>
                    <h1 className="text-gold font-serif text-lg md:text-2xl font-bold tracking-tight">{title}</h1>
                </div>
                <div className="header-button-container">
                    <a
                        href="/"
                        className="text-cream/70 hover:text-gold transition-colors text-xs font-black uppercase tracking-widest border border-white/10 px-4 py-2 rounded-lg"
                    >
                        <span className="hidden md:inline">Back to Home</span>
                        <span className="md:hidden">Home</span>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
