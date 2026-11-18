import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Layers, Phone, MessageSquare, IndianRupee } from 'lucide-react';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import { getTelUrl } from '../../utils/phone';

interface BottomActionBarProps {
  onOpenEnquiry: () => void;
}

export const BottomActionBar: React.FC<BottomActionBarProps> = ({ onOpenEnquiry }) => {
  const location = useLocation();

  return (
    <nav 
      aria-label="Mobile Floating Dock Navigation" 
      className="fixed bottom-3.5 inset-x-3.5 sm:inset-x-6 max-w-md mx-auto z-40 lg:hidden bg-[#1e1c17]/92 backdrop-blur-2xl rounded-full border border-[#D4AF37]/45 shadow-[0_12px_40px_rgba(0,0,0,0.65),0_0_25px_rgba(212,175,55,0.2)] px-2 pt-1 pb-1.5 transition-all duration-300"
    >
      <div className="grid grid-cols-5 items-center text-center h-[52px]">
        
        {/* Tab 1: Home */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center h-full py-0.5 text-center transition-all duration-150 active:scale-90 ${
              isActive && location.pathname === '/'
                ? 'text-[#D4AF37]'
                : 'text-[#A8A29E] hover:text-[#E9D5A5]'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <Home className="w-5 h-5 mb-0.5 transition-transform" />
              <span className="text-[10px] font-bold tracking-tight uppercase leading-none">
                Home
              </span>
              {isActive && location.pathname === '/' ? (
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-sm shadow-[#D4AF37] mt-1 animate-pulse" />
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-transparent mt-1" />
              )}
            </>
          )}
        </NavLink>

        {/* Tab 2: Services */}
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center h-full py-0.5 text-center transition-all duration-150 active:scale-90 ${
              isActive
                ? 'text-[#D4AF37]'
                : 'text-[#A8A29E] hover:text-[#E9D5A5]'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <Layers className="w-5 h-5 mb-0.5 transition-transform" />
              <span className="text-[10px] font-bold tracking-tight uppercase leading-none">
                Services
              </span>
              {isActive ? (
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-sm shadow-[#D4AF37] mt-1 animate-pulse" />
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-transparent mt-1" />
              )}
            </>
          )}
        </NavLink>

        {/* Tab 3: Prominent Elevated Central FAB (SELL GOLD) with Rupee Symbol */}
        <div className="flex flex-col items-center justify-center relative -top-3.5">
          <button
            onClick={onOpenEnquiry}
            className="w-13 h-13 rounded-full bg-gradient-to-br from-[#F6E7B8] via-[#D4AF37] to-[#B89548] p-0.5 ring-4 ring-[#1e1c17] shadow-xl shadow-[#D4AF37]/45 active:scale-90 transition-transform duration-150 flex flex-col items-center justify-center group focus:outline-none"
            aria-label="Sell Your Gold - Instant Cash in Rupees"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#D4AF37] to-[#92702F] flex flex-col items-center justify-center text-white shadow-inner">
              <IndianRupee className="w-5 h-5 stroke-[2.8] text-white drop-shadow-md group-hover:scale-110 transition-transform" />
            </div>
          </button>
          <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#E9D5A5] mt-1 leading-none drop-shadow-sm">
            SELL GOLD
          </span>
        </div>

        {/* Tab 4: Direct Phone Call (Replaced Calculator) */}
        <a
          href={getTelUrl()}
          className="flex flex-col items-center justify-center h-full py-0.5 text-center text-[#A8A29E] hover:text-[#E9D5A5] active:scale-90 transition-all duration-150"
          aria-label="Call JS BROTHER'S GOLD Kadapa"
        >
          <Phone className="w-5 h-5 mb-0.5 transition-transform" />
          <span className="text-[10px] font-bold tracking-tight uppercase leading-none">
            Call
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-transparent mt-1" />
        </a>

        {/* Tab 5: WhatsApp Direct Support - Unified Bottom Nav Aesthetics */}
        <a
          href={getWhatsAppUrl("Hi JS BROTHER'S GOLD, I would like to get my gold valued in Kadapa.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center h-full py-0.5 text-center text-[#A8A29E] hover:text-[#E9D5A5] active:scale-90 transition-all duration-150"
          aria-label="Chat with JS BROTHER'S GOLD on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 mb-0.5 transition-transform" />
          <span className="text-[10px] font-bold tracking-tight uppercase leading-none">
            WhatsApp
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-transparent mt-1" />
        </a>

      </div>
    </nav>
  );
};
