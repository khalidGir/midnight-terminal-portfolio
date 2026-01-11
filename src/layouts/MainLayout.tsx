import React from 'react';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="relative min-h-screen bg-bg-primary text-text-primary">
            {/* Top Navigation Wrapper */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default MainLayout;
