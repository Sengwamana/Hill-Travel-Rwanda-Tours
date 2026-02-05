import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import ImageWithFallback from '../components/ImageWithFallback';

const PortalLayout: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  const isActive = (p: string) => path.includes(p) ? "bg-forest/10 text-forest font-bold" : "text-earth/70 hover:bg-sandstone/50 hover:text-earth transition-colors";

  return (
    <div className="flex h-screen bg-sandstone font-body overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-sandstone/20 flex flex-col hidden md:flex">
        <div className="p-6 flex items-center gap-3">
          <div className="size-8 bg-forest rounded-sm flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-xl">travel_explore</span>
          </div>
          <span className="text-lg font-serif font-bold text-earth">Traveler Portal</span>
        </div>

        <nav className="flex-1 px-4 space-y-2 overflow-y-auto pt-4">
          <p className="px-4 py-2 text-xs font-bold text-earth/40 uppercase tracking-[0.2em]">My Trip</p>
          <Link to="/portal/student" className={`flex items-center gap-3 px-4 py-3 rounded-sm text-sm ${isActive('/portal/student')}`}>
            <span className="material-symbols-outlined text-[20px]">dashboard</span>
            Overview
          </Link>
          <Link to="/portal/itinerary" className={`flex items-center gap-3 px-4 py-3 rounded-sm text-sm ${isActive('/portal/itinerary')}`}>
            <span className="material-symbols-outlined text-[20px]">calendar_month</span>
            Itinerary
          </Link>
          <Link to="/portal/documents" className={`flex items-center gap-3 px-4 py-3 rounded-sm text-sm ${isActive('/portal/documents')}`}>
            <span className="material-symbols-outlined text-[20px]">folder_open</span>
            Documents
          </Link>
          
          <p className="px-4 py-2 mt-6 text-xs font-bold text-earth/40 uppercase tracking-[0.2em]">Support</p>
          <Link to="/portal/messages" className={`flex items-center gap-3 px-4 py-3 rounded-sm text-sm ${isActive('/portal/messages')}`}>
            <span className="material-symbols-outlined text-[20px]">chat</span>
            Concierge
          </Link>
        </nav>

        <div className="p-4 border-t border-sandstone/20">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-sm text-earth/60 hover:text-forest hover:bg-forest/5 transition-colors font-medium text-sm">
            <span className="material-symbols-outlined text-[20px]">logout</span>
            Return to Site
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b border-sandstone/20 flex items-center justify-between px-6 shrink-0">
          <div className="md:hidden flex items-center gap-3">
             <div className="size-8 bg-forest rounded-sm flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-xl">travel_explore</span>
             </div>
             <span className="font-serif font-bold text-earth">Portal</span>
          </div>
          
          <div className="flex-1 max-w-xl mx-auto hidden md:block">
             <div className="relative">
               <span className="absolute left-3 top-1/2 -translate-y-1/2 text-earth/40 material-symbols-outlined text-[20px]">search</span>
               <input type="text" placeholder="Search your itinerary..." className="w-full bg-sandstone/30 border-none rounded-sm py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-forest text-earth placeholder-earth/40" />
             </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="size-10 flex items-center justify-center rounded-sm hover:bg-sandstone/50 text-earth/60">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-sandstone/20">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-earth">Alex Johnson</p>
                <p className="text-xs text-earth/60">Upcoming: Gorilla Trek</p>
              </div>
              <div className="size-10 rounded-full bg-sandstone overflow-hidden border border-sandstone">
                <ImageWithFallback src="https://ui-avatars.com/api/?name=Alex+Johnson&background=2D5A27&color=fff" alt="User" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 md:p-10 bg-sandstone/30">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PortalLayout;