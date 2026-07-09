import Typography from '@mui/material/Typography';
import { useState, useRef, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const imgVector = "/figma/imgVector.png";
const imgIcon = "/figma/imgIcon.svg";
const imgImage27 = "/figma/imgImage27.png";
const imgIcon1 = "/figma/imgIcon1.svg";

export default function Header() {
  const navigate = useNavigate();
  const [companyOpen, setCompanyOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [dropdownLeft, setDropdownLeft] = useState(0);
  const [dropdownTop, setDropdownTop] = useState(0);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const [industriesOpen, setIndustriesOpen] = useState(false);
  const industriesTriggerRef = useRef<HTMLDivElement>(null);
  const industriesDropdownRef = useRef<HTMLDivElement>(null);
  const [indLeft, setIndLeft] = useState(0);
  const [indTop, setIndTop] = useState(0);

  const [navHidden, setNavHidden] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);

  const INDUSTRIES = [
    { label: 'D2C', to: '/industries/d2c' },
    { label: 'Hospitality', to: '/industries/hospitality' },
    { label: 'Health Care', to: '/industries/health-care' },
    { label: 'Real Estate', to: '/industries/real-estate' },
  ];

  const openDropdown = useCallback(() => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setDropdownLeft(rect.left + rect.width / 2);
      setDropdownTop(rect.bottom + 8);
    }
    setCompanyOpen(true);
  }, []);

  const toggleDropdown = useCallback(() => {
    if (!companyOpen) {
      openDropdown();
    } else {
      setCompanyOpen(false);
    }
  }, [companyOpen, openDropdown]);

  const openIndustries = useCallback(() => {
    if (industriesTriggerRef.current) {
      const rect = industriesTriggerRef.current.getBoundingClientRect();
      setIndLeft(rect.left + rect.width / 2);
      setIndTop(rect.bottom + 8);
    }
    setIndustriesOpen(true);
  }, []);

  const toggleIndustries = useCallback(() => {
    if (!industriesOpen) {
      openIndustries();
    } else {
      setIndustriesOpen(false);
    }
  }, [industriesOpen, openIndustries]);

  // Close when clicking outside trigger or dropdown
  useEffect(() => {
    if (!companyOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        triggerRef.current && !triggerRef.current.contains(e.target as Node) &&
        dropdownRef.current && !dropdownRef.current.contains(e.target as Node)
      ) {
        setCompanyOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [companyOpen]);

  useEffect(() => {
    if (!industriesOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        industriesTriggerRef.current && !industriesTriggerRef.current.contains(e.target as Node) &&
        industriesDropdownRef.current && !industriesDropdownRef.current.contains(e.target as Node)
      ) {
        setIndustriesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [industriesOpen]);

  // Fixed navbar: hide-on-scroll-down / reveal-on-scroll-up + elevation.
  // Capture phase also catches a nested scroll container; read scrollTop from the event target.
  useEffect(() => {
    let lastY = 0;
    const onScroll = (e: Event) => {
      const el = e.target as HTMLElement | Document;
      const y = el instanceof HTMLElement ? el.scrollTop : (window.scrollY || document.documentElement.scrollTop || 0);
      setNavScrolled(y > 8);
      if (y > lastY && y > 140) setNavHidden(true);
      else if (y < lastY - 2) setNavHidden(false);
      lastY = y;
      setCompanyOpen(false);
      setIndustriesOpen(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true, capture: true });
    return () => window.removeEventListener('scroll', onScroll, { capture: true } as EventListenerOptions);
  }, []);

  return (
    /*
     * Outer wrapper: z-index:100 but NO clip-path.
     * This lets the fixed-position dropdown render above everything
     * without being clipped by the header's own clip-path.
     */
    <div className="relative shrink-0 w-full" style={{ height: '80px', zIndex: 100 }}>

      {/* ── Header bar (original clip-path fully restored, no change to hero) ── */}
      <div
        className="fixed top-0 left-0 right-0 h-[80px] bg-[#092511] border-[rgba(255,255,255,0.1)] border-b border-solid flex items-center w-full"
        style={{
          zIndex: 100,
          transform: (navHidden && !companyOpen && !industriesOpen) ? 'translateY(-100%)' : 'translateY(0)',
          boxShadow: navScrolled ? '0 14px 34px -14px rgba(0,0,0,0.6)' : '0 0 0 0 rgba(0,0,0,0)',
          transition: 'transform 0.42s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease',
          willChange: 'transform',
        }}
        data-node-id="467:953"
        data-name="Container"
      >
        <div className="container mx-auto px-4 xl:px-0 relative h-full w-full" data-node-id="467:954" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">

            {/* Logo */}
            <div
              className="h-[38px] relative shrink-0 w-[150px] cursor-pointer"
              onClick={() => navigate('/')}
              data-node-id="467:955"
              data-name="Vector"
            >
              <img alt="" className="absolute block inset-0 max-w-none size-full" height="38" src={imgVector} width="150" />
            </div>

            {/* Nav links */}
            <div className="flex-[1_0_0] min-w-px relative" data-node-id="467:956" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-end relative size-full">
                <div className="flex flex-row items-center self-stretch">
                  <div className="h-full relative shrink-0" data-node-id="467:957" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-center justify-end relative size-full">

                      <Typography
                        onClick={() => navigate('/features')}
                        className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[1.4] relative shrink-0 text-[16px] text-white whitespace-nowrap hover:opacity-70 transition-opacity cursor-pointer  transition-colors"
                        data-node-id="467:958"
                      >
                        Features
                      </Typography>

                      <Typography
                        className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[1.4] relative shrink-0 text-[16px] text-white whitespace-nowrap hover:opacity-70 transition-opacity cursor-pointer"
                        data-node-id="467:959"
                      >
                        Solutions
                      </Typography>

                      {/* Industries trigger */}
                      <div
                        ref={industriesTriggerRef}
                        className="content-stretch flex gap-[5px] items-center cursor-pointer select-none"
                        onClick={toggleIndustries}
                      >
                        <Typography
                          className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[1.4] relative shrink-0 text-[16px] text-white whitespace-nowrap hover:opacity-70 transition-opacity"
                        >
                          Industries
                        </Typography>
                        <div
                          className="relative shrink-0 size-[16px]"
                          style={{
                            transform: industriesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease',
                          }}
                        >
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                        </div>
                      </div>

                      {/* Company trigger — ref measured for dropdown positioning */}
                      <div
                        ref={triggerRef}
                        className="content-stretch flex gap-[5px] items-center cursor-pointer select-none"
                        data-node-id="467:960"
                        onClick={toggleDropdown}
                      >
                        <Typography
                          className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[1.4] relative shrink-0 text-[16px] text-white whitespace-nowrap hover:opacity-70 transition-opacity"
                          data-node-id="467:961"
                        >
                          Company
                        </Typography>
                        <div
                          className="relative shrink-0 size-[16px]"
                          style={{
                            transform: companyOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease',
                          }}
                          data-node-id="467:962"
                          data-name="Icon"
                        >
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                        </div>
                      </div>

                      <Typography
                        onClick={() => navigate('/pricing')}
                        className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[1.4] relative shrink-0 text-[16px] text-white whitespace-nowrap hover:opacity-70 transition-opacity cursor-pointer"
                      >
                        Pricing
                      </Typography>
                    </div>
                  </div>
                </div>

                {/* Book a demo button */}
                <div className="relative shrink-0" data-node-id="467:965" data-name="Link (margin)">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pl-[20px] relative size-full">
                    <div
                      className="bg-[#06b349] content-stretch flex gap-[11.992px] items-center overflow-clip pl-[20px] pr-[15px] py-[15px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#05a043] active:scale-[0.98] transition-all duration-150"
                      data-node-id="467:966"
                      data-name="Link"
                    >
                      <div
                        className="-translate-x-1/2 -translate-y-1/2 absolute h-[1410px] left-[calc(50%+0.5px)] mix-blend-color-burn top-1/2 w-[2115px]"
                        data-node-id="467:967"
                        data-name="image 27"
                      >
                        <img
                          alt=""
                          className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover opacity-25 pointer-events-none size-full"
                          src={imgImage27}
                        />
                      </div>
                      <Typography
                        className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-none relative shrink-0 text-[18px] text-white whitespace-nowrap"
                        data-node-id="467:968"
                      >
                        Book a demo
                      </Typography>
                      <div className="relative shrink-0 size-[20px]" data-node-id="467:969" data-name="Icon">
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

      {/*
       * ── Dropdown panel ──
       * Rendered OUTSIDE the clip-path div, using position:fixed.
       * clip-path on a parent only clips that element's children —
       * this panel is a sibling, so it is completely unclipped.
       */}
      <div
        ref={dropdownRef}
        style={{
          position: 'fixed',
          top: dropdownTop,
          left: dropdownLeft,
          transform: `translateX(-50%) translateY(${companyOpen ? '0px' : '-8px'})`,
          opacity: companyOpen ? 1 : 0,
          pointerEvents: companyOpen ? 'auto' : 'none',
          transition: 'opacity 0.2s ease, transform 0.2s ease',
          zIndex: 9999,
        }}
      >
        <div className="bg-[#0d3318] border border-[rgba(255,255,255,0.1)] rounded-[10px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-sm min-w-[160px]">
          <button
            onClick={() => { navigate('/about'); setCompanyOpen(false); }}
            className="w-full text-left px-5 py-3 text-white text-[15px] font-medium font-['Geist:Medium'] hover:bg-[rgba(6,179,73,0.12)] hover:text-[#06b349] transition-colors duration-150 flex items-center gap-2 group"
          >
            <span className="w-1 h-1 rounded-full bg-[#06b349] opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
            About Us
          </button>
          <div className="h-px bg-[rgba(255,255,255,0.07)]" />
          <button
            onClick={() => { navigate('/careers'); setCompanyOpen(false); }}
            className="w-full text-left px-5 py-3 text-white text-[15px] font-medium font-['Geist:Medium'] hover:bg-[rgba(6,179,73,0.12)] hover:text-[#06b349] transition-colors duration-150 flex items-center gap-2 group"
          >
            <span className="w-1 h-1 rounded-full bg-[#06b349] opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
            Careers
          </button>
        </div>
      </div>

      {/* ── Industries dropdown panel ── */}
      <div
        ref={industriesDropdownRef}
        style={{
          position: 'fixed',
          top: indTop,
          left: indLeft,
          transform: `translateX(-50%) translateY(${industriesOpen ? '0px' : '-8px'})`,
          opacity: industriesOpen ? 1 : 0,
          pointerEvents: industriesOpen ? 'auto' : 'none',
          transition: 'opacity 0.2s ease, transform 0.2s ease',
          zIndex: 9999,
        }}
      >
        <div className="bg-[#0d3318] border border-[rgba(255,255,255,0.1)] rounded-[10px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-sm min-w-[190px]">
          {INDUSTRIES.map((it, i) => (
            <div key={it.to}>
              {i > 0 && <div className="h-px bg-[rgba(255,255,255,0.07)]" />}
              <button
                onClick={() => { navigate(it.to); setIndustriesOpen(false); }}
                className="w-full text-left px-5 py-3 text-white text-[15px] font-medium font-['Geist:Medium'] hover:bg-[rgba(6,179,73,0.12)] hover:text-[#06b349] transition-colors duration-150 flex items-center gap-2 group"
              >
                <span className="w-1 h-1 rounded-full bg-[#06b349] opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                {it.label}
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
