import React from 'react';


interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="relative min-h-screen bg-bg-primary text-text-primary selection:bg-accent-cyan/20 selection:text-accent-cyan">
            <div className="noise-overlay" />

            {/* Top Navigation Spacer (Fixed Nav handling) */}
            <div className="h-16" />

            {/* Main Content */}
            <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 space-y-32 pb-32">
                {children}
            </main>

            {/* Footer handles its own layout */}
        </div>
    );
};

export default MainLayout;
