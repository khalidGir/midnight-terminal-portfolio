import React from 'react';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="relative min-h-screen bg-black text-zinc-100">
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default MainLayout;
