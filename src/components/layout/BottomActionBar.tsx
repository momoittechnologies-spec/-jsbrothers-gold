import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Layers, Calculator, MessageSquare, Coins } from 'lucide-react';
import { getWhatsAppUrl } from '../../utils/whatsapp';

interface BottomActionBarProps {
  onOpenEnquiry: () => void;
}

export const BottomActionBar: React.FC<BottomActionBarProps> = ({ onOpenEnquiry }) => {
  const location = useLocation();

  return (
    <nav 
      aria-label="Mobile Bottom App Navigation" 
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#1e1c17]/95 backdrop-blur-xl border-t border-[#D4AF37]/30 shadow-[0_-8px_30px_rgba(0,0,0,0.5)] px-2 pt-1 pb-[max(0.6rem,env(safe-area-inset-bottom))]"
    >
      <div className="grid grid-cols-5 items-end max-w-md mx-auto text-center h-[54px]">
        
        {/* Tab 1: Home */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center h-full py-1 text-center transition-all duration-150 active:scale-90 ${
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
                <span className="w-1 h-1 rounded-full bg-[#D4AF37] shadow-sm shadow-[#D4AF37] mt-1" />
              ) : (
                <span className="w-1 h-1 rounded-full bg-transparent mt-1" />
              )}
            </>
          )}
        </NavLink>

        {/* Tab 2: Services */}
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center h-full py-1 text-center transition-all duration-150 active:scale-90 ${
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
                <span className="w-1 h-1 rounded-full bg-[#D4AF37] shadow-sm shadow-[#D4AF37] mt-1" />
              ) : (
                <span className="w-1 h-1 rounded-full bg-transparent mt-1" />
              )}
            </>
          )}
        </NavLink>

        {/* Tab 3: Prominent Elevated Central FAB (SELL GOLD) */}
        <div className="flex flex-col items-center justify-start relative -top-3">
          <button
            onClick={onOpenEnquiry}
            className="w-13 h-13 rounded-full bg-gradient-to-br from-[#F6E7B8] via-[#D4AF37] to-[#B89548] p-0.5 ring-4 ring-[#1e1c17] shadow-xl shadow-[#D4AF37]/35 active:scale-90 transition-transform duration-150 flex flex-col items-center justify-center group focus:outline-none"
            aria-label="Sell Your Gold - Instant Valuation Enquiry"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#D4AF37] to-[#92702F] flex flex-col items-center justify-center text-[#28251F]">
              <Coins className="w-5 h-5 text-white drop-shadow-sm group-hover:scale-110 transition-transform" />
            </div>
          </button>
          <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#E9D5A5] mt-1 leading-none">
            SELL GOLD
          </span>
        </div>

        {/* Tab 4: Calculator */}
        <NavLink
          to="/valuation-calculator"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center h-full py-1 text-center transition-all duration-150 active:scale-90 ${
              isActive
                ? 'text-[#D4AF37]'
                : 'text-[#A8A29E] hover:text-[#E9D5A5]'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <Calculator className="w-5 h-5 mb-0.5 transition-transform" />
              <span className="text-[10px] font-bold tracking-tight uppercase leading-none">
                Calculator
              </span>
              {isActive ? (
                <span className="w-1 h-1 rounded-full bg-[#D4AF37] shadow-sm shadow-[#D4AF37] mt-1" />
              ) : (
                <span className="w-1 h-1 rounded-full bg-transparent mt-1" />
              )}
            </>
          )}
        </NavLink>

        {/* Tab 5: WhatsApp Direct Support */}
        <a
          href={getWhatsAppUrl("Hi JS BROTHER'S GOLD, I would like to get my gold valued in Kadapa.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center h-full py-1 text-center text-[#A8A29E] hover:text-emerald-400 active:scale-90 transition-all duration-150 relative"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 mb-0.5 text-emerald-400" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-[#1e1c17] animate-pulse" />
          </div>
          <span className="text-[10px] font-bold tracking-tight uppercase leading-none text-emerald-300">
            WhatsApp
          </span>
          <span className="w-1 h-1 rounded-full bg-transparent mt-1" />
        </a>

      </div>
    </nav>
  );
};
