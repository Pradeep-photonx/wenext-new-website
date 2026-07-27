import Typography from '@mui/material/Typography';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChevronRight, BarChart2, Activity, Smile, BookOpen,
  MessageSquare, PlayCircle, Building, Box, Zap, Globe, Users,
  HeartPulse, GraduationCap, Gem, ShoppingBag, Utensils, Calendar, ShieldCheck
} from 'lucide-react';
import UnifiedInboxIcon from "../assets/icons/navbar/unified-inbox.png"
import CampaignsIcon from "../assets/icons/navbar/campaign.png"
import SocialMediaIcon from "../assets/icons/navbar/social-media.png"
import SmartSchedulingIcon from "../assets/icons/navbar/smart-scheduling.png"
import AgentsIcon from "../assets/icons/navbar/agents.png"
import CRMIcon from "../assets/icons/navbar/crm.png"
import AdsManagementIcon from "../assets/icons/navbar/ads-management.png"
import IntegrationIcon from "../assets/icons/navbar/integration.png"

const imgVector = "/figma/imgVector.png";
const imgIcon = "/figma/imgIcon.svg";
const imgImage27 = "/figma/imgImage27.png";
const imgIcon1 = "/figma/imgIcon1.svg";
import imgVector1 from "../assets/logo.svg"

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);

const MENU_DATA = {
  features: [
    { id: 'f1', title: 'Unified Inbox', description: 'Analyze conversion rates and improve your sales revenue.', icon: UnifiedInboxIcon, to: '/features#convert' },
    { id: 'f2', title: 'Ai Agents', description: 'Measure active usage and target areas to improve your product.', icon: AgentsIcon, to: '/features#engage' },
    { id: 'f3', title: 'Campaigns', description: 'Find your retention drivers and make your customers smile.', icon: CampaignsIcon, to: '/features#retain' },
    { id: 'f4', title: 'CRM', description: 'Analyze conversion rates and improve your sales revenue.', icon: CRMIcon, to: '/features#convert' },
    { id: 'f5', title: 'Social Media Post', description: 'Measure active usage and target areas to improve your product.', icon: SocialMediaIcon, to: '/features#engage' },
    { id: 'f6', title: 'Ads Management', description: 'Find your retention drivers and make your customers smile.', icon: AdsManagementIcon, to: '/features#retain' },
    { id: 'f7', title: 'Smart Scheduling', description: 'Analyze conversion rates and improve your sales revenue.', icon: SmartSchedulingIcon, to: '/features#convert' },
    { id: 'f8', title: 'Inegrations', description: 'Measure active usage and target areas to improve your product.', icon: IntegrationIcon, to: '/features#engage' },
  ],
  solutions: [
    { id: 's1', title: 'Enterprise', description: 'Scalable infrastructure for large teams.', icon: Building, to: '/solutions#enterprise' },
    { id: 's2', title: 'Startups', description: 'Fast growth and easy setup.', icon: Zap, to: '/solutions#startups' },
    { id: 's3', title: 'Agencies', description: 'Manage multiple clients efficiently.', icon: Users, to: '/solutions#agencies' },
  ],
  industries: [
    { id: 'ind1', title: 'Health', description: 'Automated patient booking, consultation & lab alerts.', icon: HeartPulse, to: '/industries/health' },
    { id: 'ind2', title: 'Education', description: 'Admissions, student inquiries & fee notification bots.', icon: GraduationCap, to: '/industries/education' },
    { id: 'ind3', title: 'Jewellery', description: 'Digital catalog showcase & custom order inquiries.', icon: Gem, to: '/industries/jewellery' },
    { id: 'ind4', title: 'Real Estate', description: 'Property lead generation, site visits & automated CRM.', icon: Building, to: '/industries/real-estate' },
    { id: 'ind5', title: 'E-Commerce', description: 'Abandoned cart recovery, order updates & WhatsApp sales.', icon: ShoppingBag, to: '/industries/e-commerce' },
    { id: 'ind6', title: 'Food & Dining', description: 'Order bookings, digital menus & delivery status.', icon: Utensils, to: '/industries/food' },
    { id: 'ind7', title: 'Event Management', description: 'Ticket sales, attendee RSVP & schedule notifications.', icon: Calendar, to: '/industries/event-management' },
    { id: 'ind8', title: 'Insurance', description: 'Policy renewals, claim tracking & instant quotes.', icon: ShieldCheck, to: '/industries/insurance' },
  ],
  resources: [
    { id: 'r1', title: 'Blog', description: 'The latest industry news, updates and info from our expert team.', icon: BookOpen, to: '/blog' },
    { id: 'r2', title: 'Customer stories', description: 'Learn how our customers are making big changes in their APIs.', icon: MessageSquare, to: '/stories' },
    { id: 'r3', title: 'Video tutorials', description: 'Get up and running on new features and the latest technology.', icon: PlayCircle, to: '/tutorials' },
  ],
};

export default function Header() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const [navHidden, setNavHidden] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const menuTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnterNav = (menuKey: string) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
    }
    setActiveMenu(menuKey);
  };

  const handleMouseLeaveNav = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 300);
  };

  const handleMouseEnterMenu = () => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
    }
  };

  useEffect(() => {
    let lastY = 0;
    const onScroll = (e: Event) => {
      const el = e.target as HTMLElement | Document;
      const y = el instanceof HTMLElement ? el.scrollTop : (window.scrollY || document.documentElement.scrollTop || 0);
      setNavScrolled(y > 8);
      if (y > lastY && y > 140) setNavHidden(true);
      else if (y < lastY - 2) setNavHidden(false);
      
      // Only close if scrolling significantly
      if (Math.abs(y - lastY) > 30) {
        if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
        setActiveMenu(null);
      }
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true, capture: true });
    return () => window.removeEventListener('scroll', onScroll, { capture: true } as EventListenerOptions);
  }, []);

  const NavItem = ({ label, menuKey, onClick }: { label: string, menuKey?: string, onClick?: () => void }) => {
    const isActive = activeMenu === menuKey;
    return (
      <div
        className={`content-stretch h-full flex gap-[0px] items-center cursor-pointer select-none transition-colors ${navScrolled ? 'text-white hover:text-gray-300' : 'text-[#092511] hover:text-[#06b349]'}`}
        onMouseEnter={() => menuKey && handleMouseEnterNav(menuKey)}
        onMouseLeave={handleMouseLeaveNav}
        onClick={onClick}
      >
        <Typography
          className="[word-break:break-word] font-['Geist'] font-medium leading-[1.4] relative shrink-0 text-[16px] whitespace-nowrap transition-opacity color-inherit"
          style={{ color: 'inherit' }}
        >
          {label}
        </Typography>
        {menuKey && (
          <div
            className="relative shrink-0 size-[16px]"
            style={{
              transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease',
            }}
          >
            <img alt="" className="absolute block inset-0 max-w-none size-full" style={{ filter: navScrolled ? 'none' : 'invert(1) brightness(0)' }} src={imgIcon} />
          </div>
        )}
      </div>
    );
  };

  return (
    <div id="main-header" className="relative shrink-0 w-full" style={{ height: '80px', zIndex: 100 }}>
      <div
        className={`fixed top-0 left-0 right-0 h-[80px] border-[rgba(255,255,255,0.1)] border-b border-solid flex items-center w-full transition-colors duration-300 ${navScrolled ? 'bg-[#092511]' : 'bg-[#f8f5ec]'}`}
        style={{
          zIndex: 100,
          transform: (navHidden && !activeMenu) ? 'translateY(-100%)' : 'translateY(0)',
          boxShadow: navScrolled ? '0 14px 34px -14px rgba(0,0,0,0.6)' : '0 0 0 0 rgba(0,0,0,0)',
          transition: 'transform 0.42s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease, background-color 0.3s ease',
          willChange: 'transform, background-color',
          borderBlock: '1px solid rgba(9,37,17,0.08)',
        }}
      >
        <div className="container mx-auto px-4 xl:px-0 relative h-full w-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">

            {/* Logo */}
            <div
              className="relative shrink-0 w-[150px] cursor-pointer"
              onClick={() => navigate('/')}
            >
              <img alt="" className={`block w-full h-auto object-contain transition-opacity duration-300 ${navScrolled ? 'opacity-100' : 'opacity-0'}`} src={imgVector} />
              <img alt="" className={`absolute top-0 left-0 w-full h-auto object-contain transition-opacity duration-300 ${!navScrolled ? 'opacity-100' : 'opacity-0'}`} src={imgVector1} />
            </div>

            {/* Nav links */}
            <div className="flex-[1_0_0] min-w-px relative h-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-end relative size-full h-full">
                <div className="flex flex-row items-center self-stretch h-full">
                  <div className="h-full relative shrink-0">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-center justify-end relative size-full h-full">

                      <NavItem label="Features" menuKey="features" />
                      <NavItem label="Solutions" menuKey="solutions" />
                      <NavItem label="Industries" menuKey="industries" />
                      <NavItem label="Pricing" onClick={() => { navigate('/pricing'); setActiveMenu(null); }} />
                      <NavItem label="About" onClick={() => { navigate('/about'); setActiveMenu(null); }} />
                      <NavItem label="Resources" menuKey="resources" />

                    </div>
                  </div>
                </div>

                {/* Book a demo button */}
                <div className="relative shrink-0 ml-[20px]">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pl-[20px] relative size-full">
                    <div className="bg-[#06b349] content-stretch flex gap-[11.992px] items-center overflow-clip pl-[20px] pr-[15px] py-[15px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#05a043] active:scale-[0.98] transition-all duration-150">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[1410px] left-[calc(50%+0.5px)] mix-blend-color-burn top-1/2 w-[2115px]">
                        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover opacity-25 pointer-events-none size-full" src={imgImage27} />
                      </div>
                      <Typography className="[word-break:break-word] font-['Geist'] font-medium leading-none relative shrink-0 text-[18px] text-white whitespace-nowrap">
                        Book a demo
                      </Typography>
                      <div className="relative shrink-0 size-[20px]">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mega Menu Dropdown */}
            <div
              className={`absolute top-full left-0 right-0 bg-white transition-all duration-300 overflow-hidden border border-t-0 border-gray-100 ${activeMenu ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
                }`}
              style={{ zIndex: 999 }}
              onMouseEnter={handleMouseEnterMenu}
              onMouseLeave={handleMouseLeaveNav}
            >
              <div className="flex flex-col md:flex-row w-full min-h-[320px]">
                {/* Left Side: Grid of links */}
                <div className="flex-[2] p-10">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-8 font-['Geist']">
                    {activeMenu === 'features' ? 'Use Cases' :
                      activeMenu === 'solutions' ? 'Solutions' :
                        activeMenu === 'industries' ? 'Industries' :
                          activeMenu === 'resources' ? 'Resources' : ''}
                  </div>
                  <div className="border border-gray-200/80 rounded-none overflow-hidden grid grid-cols-1 md:grid-cols-2">
                    {(activeMenu ? MENU_DATA[activeMenu as keyof typeof MENU_DATA] : []).map((item, idx, arr) => {
                      const isLeftColumn = idx % 2 === 0;
                      const isLastRow = idx >= arr.length - (arr.length % 2 === 0 ? 2 : 1);
                      const bgColors = [
                        'bg-blue-50/80 text-blue-600',
                        'bg-purple-50/80 text-purple-600',
                        'bg-emerald-50/80 text-emerald-600',
                        'bg-teal-50/80 text-teal-600',
                        'bg-amber-50/80 text-amber-600',
                        'bg-rose-50/80 text-rose-600',
                        'bg-indigo-50/80 text-indigo-600',
                        'bg-green-50/80 text-green-600',
                      ];
                      const iconStyle = bgColors[idx % bgColors.length];

                      return (
                        <div
                          key={item.id}
                          onClick={() => { navigate(item.to); setActiveMenu(null); }}
                          className={`flex items-start gap-4 p-5 bg-white hover:bg-gray-50/80 cursor-pointer transition-colors duration-150 group ${
                            isLeftColumn ? 'md:border-r border-gray-200/80' : ''
                          } ${
                            !isLastRow ? 'border-b border-gray-200/80' : ''
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-xl ${iconStyle} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform p-2`}>
                            {typeof item.icon === 'string' ? (
                              <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                            ) : (
                              <item.icon size={20} strokeWidth={1.8} />
                            )}
                          </div>
                          <div>
                            <div className="text-[15px] font-semibold text-gray-900 mb-1 font-['Geist'] group-hover:text-[#06b349] transition-colors">{item.title}</div>
                            <div className="text-[13px] text-gray-500 font-normal leading-snug font-['Geist']">{item.description}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Side: Gray Box */}
                <div className="flex-1 bg-[#f9fafa] p-10 flex flex-col min-w-[280px] max-w-[340px]">
                  <div className="text-sm font-bold text-black-300 uppercase tracking-wider mb-2 font-['Geist']">
                    Follow Us On
                  </div>
                  <p className="text-[13px] text-gray-500 mb-6 font-['Geist'] leading-relaxed">
                    Stay connected with us on social media for the latest updates, tips, and feature announcements.
                  </p>

                  <div className="flex flex-col gap-3 mb-8">
                    <a href="#" className="flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-white hover:shadow-sm cursor-pointer transition-all group border border-transparent hover:border-gray-100">
                      <div className="w-8 h-8 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <InstagramIcon className="w-4 h-4" />
                      </div>
                      <span className="text-[15px] font-medium text-gray-700 group-hover:text-pink-600 transition-colors font-['Geist']">Instagram</span>
                      <ChevronRight size={16} className="ml-auto text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </a>
                    <a href="#" className="flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-white hover:shadow-sm cursor-pointer transition-all group border border-transparent hover:border-gray-100">
                      <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <FacebookIcon className="w-4 h-4" />
                      </div>
                      <span className="text-[15px] font-medium text-gray-700 group-hover:text-blue-600 transition-colors font-['Geist']">Facebook</span>
                      <ChevronRight size={16} className="ml-auto text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </a>
                    <a href="#" className="flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-white hover:shadow-sm cursor-pointer transition-all group border border-transparent hover:border-gray-100">
                      <div className="w-8 h-8 rounded-full bg-green-50 text-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <WhatsAppIcon className="w-4 h-4" />
                      </div>
                      <span className="text-[15px] font-medium text-gray-700 group-hover:text-green-600 transition-colors font-['Geist']">WhatsApp</span>
                      <ChevronRight size={16} className="ml-auto text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </a>
                  </div>

                  <div className="mt-auto">
                    <div onClick={() => { navigate('/demo'); setActiveMenu(null); }} className="bg-[#06b349] content-stretch flex gap-[11.992px] items-center justify-center overflow-clip px-[20px] py-[15px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#05a043] active:scale-[0.98] transition-all duration-150 w-full shadow-sm">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[1410px] left-[calc(50%+0.5px)] mix-blend-color-burn top-1/2 w-[2115px]">
                        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover opacity-25 pointer-events-none size-full" src={imgImage27} />
                      </div>
                      <Typography className="[word-break:break-word] font-['Geist'] font-medium leading-none relative shrink-0 text-[18px] text-white whitespace-nowrap">
                        Book a demo
                      </Typography>
                      <div className="relative shrink-0 size-[20px]">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
