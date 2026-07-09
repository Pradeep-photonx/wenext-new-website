import Typography from '@mui/material/Typography';
import { useRef, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const imgImage27 = '/figma/imgImage27.png';
const imgIcon1 = '/figma/imgIcon1.svg';
const imgWhatsApp = '/figma/imgImage1.svg';
const imgInstagram = '/figma/imgImage2.svg';
const imgFacebook = '/figma/imgImage3.svg';

const gridCanvas: React.CSSProperties = {
  backgroundImage:
    'linear-gradient(rgba(9,37,17,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(9,37,17,0.04) 1px, transparent 1px)',
  backgroundSize: '30px 30px',
};

// ─── scroll reveal ────────────────────────────────────────────────────────────
function useInView<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setInView(true); }),
      { threshold }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const [ref, inView] = useInView(0.12);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(26px)',
        transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ─── shared bits ──────────────────────────────────────────────────────────────
function Eyebrow({ label, light = false, center = false }: { label: string; light?: boolean; center?: boolean }) {
  return (
    <div className={`flex gap-[10px] items-center mb-[16px] ${center ? 'justify-center' : ''}`}>
      <div className="bg-[#06b349] size-[8px] rounded-full" />
      <Typography sx={{ lineHeight: '100%' }} className={`font-['Courier_Prime'] text-[13px] uppercase tracking-[0.2em] ${light ? 'text-[#06b349]' : 'text-[#0c221f]'}`}>{label}</Typography>
    </div>
  );
}

function PrimaryButton({ label }: { label: string }) {
  return (
    <div className="bg-[#06b349] hover:bg-[#05a043] active:scale-[0.98] transition-all duration-150 rounded-[8px] cursor-pointer overflow-hidden relative inline-flex">
      <div className="flex gap-[12px] items-center pl-[20px] pr-[15px] py-[15px]">
        <div className="absolute inset-0 pointer-events-none"><img alt="" className="size-full object-cover opacity-20 mix-blend-color-burn" src={imgImage27} /></div>
        <Typography className="font-['Geist:Medium'] font-medium text-[17px] text-white whitespace-nowrap relative">{label}</Typography>
        <div className="size-[20px] relative shrink-0"><img alt="" className="absolute inset-0 size-full" src={imgIcon1} /></div>
      </div>
    </div>
  );
}

function GhostButton({ label, dark = false }: { label: string; dark?: boolean }) {
  return dark ? (
    <div className="bg-transparent border border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.05)] active:scale-[0.98] transition-all duration-150 rounded-[8px] cursor-pointer inline-flex items-center px-[21px] py-[15px]">
      <Typography className="font-['Geist:Medium'] font-medium text-[17px] text-white whitespace-nowrap">{label}</Typography>
    </div>
  ) : (
    <div className="bg-white border border-[#dedace] hover:bg-[#f3efe3] active:scale-[0.98] transition-all duration-150 rounded-[8px] cursor-pointer inline-flex items-center px-[21px] py-[15px]">
      <Typography className="font-['Geist:Medium'] font-medium text-[17px] text-[#092511] whitespace-nowrap">{label}</Typography>
    </div>
  );
}

function Check() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>;
}

function CrossIcon() {
  return <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#d9773f" strokeWidth="3" strokeLinecap="round"><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></svg>;
}

// ══════════════════════════════════════════════════════════════════════════════
// SECTION MOCKUPS — full app dashboards (browser chrome + wenext shell)
// ══════════════════════════════════════════════════════════════════════════════
function HfIco({ d }: { d: ReactNode }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{d}</svg>;
}

function MkIcon({ k }: { k: string }) {
  const s = { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  if (k === 'mega') return <svg {...s}><path d="m3 11 18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></svg>;
  if (k === 'ad') return <svg {...s}><rect x="2" y="4" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="18" x2="12" y2="21" /></svg>;
  if (k === 'globe') return <svg {...s}><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>;
  if (k === 'user') return <svg {...s}><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>;
  if (k === 'cal') return <svg {...s}><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>;
  if (k === 'whatsapp') return <svg {...s}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" /><path d="M9.5 9.5c0 3 2 5 5 5" /></svg>;
  if (k === 'instagram') return <svg {...s}><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>;
  if (k === 'facebook') return <svg {...s}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
  return <svg {...s}><rect x="4" y="3" width="16" height="18" rx="2" /><line x1="8" y1="8" x2="16" y2="8" /><line x1="8" y1="12" x2="16" y2="12" /><line x1="8" y1="16" x2="12" y2="16" /></svg>;
}

function AppShell({ expanded, activeTop, activeSub, credits = '9.2 / 99', children }: { expanded?: string; activeTop?: string; activeSub?: string; credits?: string; children: ReactNode }) {
  const SIDE: { label: string; icon: ReactNode; caret?: boolean; subs?: { l: string; mk?: string; sparkle?: boolean }[] }[] = [
    { label: 'Dashboard', icon: <HfIco d={<><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /></>} /> },
    { label: 'Channels', icon: <HfIco d={<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />} />, subs: [{ l: 'Whatsapp', mk: 'whatsapp' }, { l: 'Instagram', mk: 'instagram' }, { l: 'Facebook', mk: 'facebook' }, { l: 'AI Agents', sparkle: true }] },
    { label: 'Marketing', icon: <HfIco d={<><path d="m3 11 18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></>} />, subs: [{ l: 'Campaigns', mk: 'mega' }, { l: 'Ads', mk: 'ad' }, { l: 'Social Media Posts', mk: 'globe' }, { l: 'WhatsApp Forms', mk: 'form' }] },
    { label: 'Customers', icon: <HfIco d={<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>} />, subs: [{ l: 'CRM', mk: 'user' }, { l: 'Appointments', mk: 'cal' }] },
    { label: 'AI Agents', icon: <HfIco d={<path d="M12 3l1.9 5.8 5.8 1.9-5.8 1.9L12 18.4l-1.9-5.8L4.3 10.7l5.8-1.9z" />} /> },
    { label: 'Automations', icon: <HfIco d={<><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></>} /> },
    { label: 'Commerce', icon: <HfIco d={<><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></>} />, caret: true },
    { label: 'Integrations', icon: <HfIco d={<><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>} /> },
  ];
  return (
    <div className="w-full max-w-[1180px] bg-[#f5f7f9] rounded-[16px] border border-[#e0dac6] shadow-[0_44px_100px_-40px_rgba(11,31,26,0.55)] overflow-hidden text-left">
      {/* TOP BAR */}
      <div className="h-[60px] bg-white border-b border-[#edf0f4] flex items-center shrink-0">
        <div className="w-[238px] flex items-center justify-between px-[18px] shrink-0">
          <div className="flex items-center gap-[9px]"><div className="size-[28px] rounded-[8px] bg-[#06b349] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></div><span className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[19px] tracking-[-0.5px]">wenext</span></div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="11 17 6 12 11 7" /><polyline points="18 17 13 12 18 7" /></svg>
        </div>
        <div className="flex-1 flex items-center justify-between px-[20px]">
          <div className="w-[420px] h-[40px] rounded-[12px] border border-[#e5e7eb] bg-[#f8fafc] flex items-center px-[14px] gap-[9px]"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg><span className="text-[#9ca3af] text-[14px] flex-1">Search anything...</span><span className="bg-white border border-[#e5e7eb] rounded-[6px] px-[7px] py-[2px] font-['Courier_Prime'] text-[#9ca3af] text-[11px]">⌘ K</span></div>
          <div className="flex items-center gap-[16px]">
            <div className="h-[40px] rounded-[10px] px-[16px] flex items-center gap-[8px]" style={{ background: 'linear-gradient(135deg,#0aa25a,#16c46f)' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" /></svg><span className="text-white text-[14px] font-['Geist:SemiBold'] font-semibold">NEXA AI</span></div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
            <div className="relative"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg><span className="absolute -top-[1px] -right-[1px] size-[8px] rounded-full bg-[#ef4444] border-2 border-white" /></div>
            <div className="flex items-center gap-[10px]"><div className="size-[40px] rounded-[10px] bg-[#eceff3] flex items-center justify-center font-['Geist:SemiBold'] font-semibold text-[#64748b] text-[14px]">MK</div><div className="leading-none"><div className="flex items-center gap-[4px]"><span className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[14px]">Manish Kumar</span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg></div><span className="font-['Courier_Prime'] text-[#9ca3af] text-[12px]">+91 80196 72323</span></div></div>
          </div>
        </div>
      </div>
      {/* BODY */}
      <div className="flex h-[600px]">
        {/* SIDEBAR */}
        <div className="w-[238px] bg-white border-r border-[#edf0f4] flex flex-col shrink-0">
          <div className="flex-1 overflow-hidden p-[14px] flex flex-col gap-[3px]">
            {SIDE.map((s) => {
              const isActive = s.label === activeTop;
              const isExp = s.label === expanded;
              const showCaret = !!s.subs || s.caret;
              const parentGreen = isExp && !!s.subs && s.subs.some((c) => c.l === activeSub);
              return (
                <div key={s.label}>
                  <div className={`flex items-center gap-[12px] px-[14px] py-[10px] rounded-[10px] ${isActive ? 'bg-[#e7f6ee]' : ''}`}>
                    <span className={isActive ? 'text-[#06824f]' : parentGreen ? 'text-[#06b349]' : 'text-[#64748b]'}>{s.icon}</span>
                    <span className={`font-['Geist:Medium'] font-medium text-[14.5px] flex-1 ${isActive ? 'text-[#06824f]' : parentGreen ? 'text-[#0c221f]' : 'text-[#475569]'}`}>{s.label}</span>
                    {showCaret && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5"><polyline points={isExp ? '18 15 12 9 6 15' : '6 9 12 15 18 9'} /></svg>}
                  </div>
                  {isExp && s.subs && (
                    <div className="ml-[18px] mt-[3px] pl-[16px] border-l border-[#edf0f4] flex flex-col gap-[2px]">
                      {s.subs.map((c) => {
                        const sa = c.l === activeSub;
                        return (
                          <div key={c.l} className={`flex items-center gap-[11px] px-[12px] py-[9px] rounded-[9px] ${sa ? 'bg-[#e7f6ee]' : ''}`}>
                            {c.sparkle ? <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={sa ? '#06824f' : '#7c8694'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.9 5.8 5.8 1.9-5.8 1.9L12 18.4l-1.9-5.8L4.3 10.7l5.8-1.9z" /></svg> : <span className={sa ? 'text-[#06824f]' : 'text-[#64748b]'}><MkIcon k={c.mk || ''} /></span>}
                            <span className={`font-['Geist:Medium'] font-medium text-[13.5px] flex-1 ${sa ? 'text-[#06824f]' : 'text-[#475569]'}`}>{c.l}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="px-[14px] pb-[14px] flex flex-col gap-[14px]">
            <div className="rounded-[14px] p-[14px] text-white" style={{ background: 'linear-gradient(135deg,#0a8f4f,#15b866)' }}>
              <div className="flex items-center gap-[6px] mb-[8px]"><Typography className="font-['Geist:SemiBold'] font-semibold text-white text-[12px] tracking-[0.06em]">ENTERPRISE</Typography><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" opacity="0.8"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg></div>
              <div className="flex items-end gap-[6px]"><Typography className="font-['Geist:SemiBold'] font-semibold text-white text-[22px] leading-none">{credits}</Typography><Typography className="font-['Geist:Regular'] text-white/80 text-[12px] mb-[2px]">AI Credits</Typography></div>
            </div>
            <div className="flex items-center justify-between">
              <div><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[14px] leading-none">Nexus GenUI</Typography><Typography className="font-['Geist:Regular'] text-[#94a3b8] text-[12px] mt-[3px]">Interactive experiences</Typography></div>
              <div className="w-[40px] h-[22px] rounded-full bg-[#06b349] p-[2px] flex justify-end"><div className="size-[18px] rounded-full bg-white shadow" /></div>
            </div>
          </div>
        </div>
        {/* CONTENT */}
        <div className="flex-1 flex flex-col min-w-0 bg-[#f6f8fa]">{children}</div>
      </div>
    </div>
  );
}

function ContentHeader({ title, badge, right }: { title: string; badge?: ReactNode; right?: ReactNode }) {
  return (
    <div className="h-[56px] shrink-0 bg-white border-b border-[#edf0f4] flex items-center justify-between px-[22px]">
      <div className="flex items-center gap-[10px]"><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[19px] tracking-[-0.4px]">{title}</Typography>{badge}</div>
      <div className="flex items-center gap-[10px]">{right}</div>
    </div>
  );
}

const LivePill = <span className="flex items-center gap-[5px] bg-[#e5f6e7] rounded-full px-[10px] py-[3px]"><span className="size-[6px] rounded-full bg-[#06b349] step-live-dot" /><Typography className="font-['Geist:Medium'] text-[#06824f] text-[11px]">Live</Typography></span>;

// 1 · UNIFIED PLATFORM — Overview
function PlatformMock() {
  const kpis = [
    { l: 'Revenue · 30d', v: '₹8.4L', d: '+38%', ic: <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /> },
    { l: 'Orders', v: '1,240', d: '+12%', ic: <><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" /></> },
    { l: 'Avg reply', v: '0.4s', d: '−92%', ic: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></> },
    { l: 'Carts recovered', v: '328', d: '+40%', ic: <><path d="M3 3h2l.4 2M7 13h10l3-8H5.4" /><circle cx="9" cy="20" r="1" /><circle cx="17" cy="20" r="1" /></> },
  ];
  const feed = [
    { ch: 'wa', c: '#25d366', t: 'Priya asked about the linen kurta (M)', tag: 'WhatsApp', tm: '2m' },
    { ch: 'pay', c: '#06b349', t: '₹2,490 received · UPI · Order #4821', tag: 'Payments', tm: '4m' },
    { ch: 'ig', c: '#E1306C', t: 'New DM from @aanya.styles', tag: 'Instagram', tm: '6m' },
    { ch: 'crm', c: '#3f6cab', t: 'Lead qualified → moved to Hot', tag: 'CRM', tm: '9m' },
    { ch: 'cart', c: '#c98a3a', t: 'Cart recovered · ₹1,890', tag: 'Recovery', tm: '12m' },
    { ch: 'wa', c: '#25d366', t: 'AI answered "where is my order?"', tag: 'WhatsApp', tm: '14m' },
  ];
  const integ = [
    { n: 'WhatsApp', ic: imgWhatsApp }, { n: 'Instagram', ic: imgInstagram }, { n: 'Facebook', ic: imgFacebook },
    { n: 'Razorpay', dot: '#0C4D9E' }, { n: 'Shopify', dot: '#5E8E3E' }, { n: 'Analytics', dot: '#c98a3a' },
  ];
  return (
    <AppShell activeTop="Dashboard" credits="9.2 / 99">
      <ContentHeader title="Overview" badge={LivePill} right={<><div className="h-[34px] rounded-[9px] border border-[#e5e7eb] bg-white flex items-center px-[12px] gap-[7px]"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="3" y1="10" x2="21" y2="10" /></svg><Typography className="text-[#475569] text-[12.5px] font-['Geist:Medium']">Last 30 days</Typography></div><div className="h-[34px] rounded-[9px] bg-[#06b349] flex items-center px-[13px]"><Typography className="text-white text-[12.5px] font-['Geist:Medium']">Export</Typography></div></>} />
      <div className="flex-1 p-[18px] flex flex-col gap-[14px] overflow-hidden">
        <div className="grid grid-cols-4 gap-[12px]">
          {kpis.map((k) => (
            <div key={k.l} className="bg-white border border-[#eef1f4] rounded-[13px] p-[15px]">
              <div className="flex items-center justify-between"><Typography className="font-['Geist:Medium'] text-[#64748b] text-[11px] uppercase tracking-[0.5px]">{k.l}</Typography><span className="size-[26px] rounded-[8px] bg-[#e8f9ee] flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{k.ic}</svg></span></div>
              <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[26px] tracking-[-1px] mt-[8px] leading-none">{k.v}</Typography>
              <Typography className="font-['Courier_Prime'] text-[#06824f] text-[11px] mt-[7px]">▲ {k.d}</Typography>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-[1.55fr_1fr] gap-[14px] flex-1 min-h-0">
          <div className="bg-white border border-[#eef1f4] rounded-[14px] flex flex-col overflow-hidden">
            <div className="px-[18px] py-[13px] border-b border-[#f1f3f6] flex items-center justify-between"><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[14px]">Unified activity</Typography><Typography className="font-['Courier_Prime'] text-[#9ca3af] text-[11px]">all channels · one feed</Typography></div>
            <div className="flex-1 overflow-hidden">
              {feed.map((f, i) => (
                <div key={i} className="px-[18px] py-[12px] flex items-center gap-[12px] border-b border-[#f6f7f9]">
                  <span className="size-[32px] rounded-[9px] flex items-center justify-center shrink-0" style={{ background: `${f.c}1f` }}>{f.ch === 'wa' ? <img alt="" src={imgWhatsApp} className="size-[16px]" /> : f.ch === 'ig' ? <img alt="" src={imgInstagram} className="size-[16px]" /> : <span className="size-[9px] rounded-full" style={{ background: f.c }} />}</span>
                  <Typography className="font-['Geist:Regular'] text-[#0c221f] text-[13px] flex-1 truncate">{f.t}</Typography>
                  <span className="text-[10px] font-['Geist:Medium'] rounded-full px-[8px] py-[2px]" style={{ background: `${f.c}18`, color: f.c }}>{f.tag}</span>
                  <Typography className="font-['Courier_Prime'] text-[#9ca3af] text-[11px] w-[30px] text-right">{f.tm}</Typography>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white border border-[#eef1f4] rounded-[14px] flex flex-col overflow-hidden">
            <div className="px-[18px] py-[13px] border-b border-[#f1f3f6] flex items-center justify-between"><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[14px]">Connected</Typography><span className="bg-[#e5f6e7] text-[#06824f] text-[10px] font-['Geist:Medium'] px-[8px] py-[2px] rounded-full">6 live</span></div>
            <div className="flex-1 p-[12px] flex flex-col gap-[7px]">
              {integ.map((m) => (
                <div key={m.n} className="flex items-center gap-[11px] rounded-[10px] border border-[#eef1f4] px-[12px] py-[9px]">
                  <span className="size-[28px] rounded-[8px] bg-[#f6f8fa] flex items-center justify-center shrink-0">{m.ic ? <img alt="" src={m.ic} className="size-[16px]" /> : <span className="size-[14px] rounded-[4px]" style={{ background: m.dot }} />}</span>
                  <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[13px] flex-1">{m.n}</Typography>
                  <span className="flex items-center gap-[4px]"><span className="size-[6px] rounded-full bg-[#06b349] step-live-dot" /><Typography className="text-[#06824f] text-[11px] font-['Geist:Medium']">Live</Typography></span>
                </div>
              ))}
            </div>
            <div className="px-[16px] py-[11px] border-t border-[#f1f3f6] bg-[#fafbfc] flex items-center justify-between"><Typography className="font-['Geist:Medium'] text-[#0c221f] text-[11.5px]">1 source of truth</Typography><Typography className="font-['Courier_Prime'] text-[#06824f] text-[11px]">0 silos</Typography></div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

// 2 · AI AUTO-REPLY — Inbox
function AiReplyMock() {
  const convos = [
    { i: 'P', bg: '#d8f3e3', c: '#0a8f5a', n: 'Priya Sharma', p: 'Yes, please share the link', ai: true, sel: true, t: '0.4s' },
    { i: 'A', bg: '#fde2e8', c: '#d9577e', n: 'Aanya Verma', p: 'COD available?', ai: true, t: '0.6s' },
    { i: 'K', bg: '#dbeafe', c: '#3f6cab', n: 'Karthik Iyer', p: 'Where is my order?', ai: true, t: '0.3s' },
    { i: 'R', bg: '#d8f3e3', c: '#0a8f5a', n: 'Rahul Mehta', p: 'Need a bigger size', esc: true },
    { i: 'D', bg: '#fde2e8', c: '#d9577e', n: 'Diya Patel', p: 'Free shipping?', ai: true, t: '0.5s' },
  ];
  const stats = [{ l: 'Auto-resolved', v: '94%' }, { l: 'Avg reply', v: '0.4s' }, { l: 'Escalated', v: '6%' }, { l: 'Handled today', v: '2,840' }];
  return (
    <AppShell expanded="Channels" activeSub="Whatsapp">
      <ContentHeader title="Inbox" badge={<span className="flex items-center gap-[6px] bg-[#e5f6e7] rounded-full px-[11px] py-[4px]"><span className="size-[6px] rounded-full bg-[#06b349] step-live-dot" /><Typography className="text-[#06824f] text-[11.5px] font-['Geist:Medium']">AI Auto-pilot ON</Typography></span>} right={<Typography className="font-['Geist:Regular'] text-[#94a3b8] text-[12.5px]">3 unread · 5 active</Typography>} />
      <div className="flex-1 flex min-h-0">
        <div className="w-[288px] border-r border-[#edf0f4] bg-white flex flex-col shrink-0">
          {convos.map((r, i) => (
            <div key={i} className={`px-[14px] py-[12px] flex items-start gap-[10px] border-b border-[#f6f7f9] ${r.sel ? 'bg-[#f5f9f6] border-l-[3px] border-l-[#06b349]' : 'border-l-[3px] border-l-transparent'}`}>
              <div className="size-[38px] rounded-full flex items-center justify-center font-['Geist:SemiBold'] font-semibold text-[13px] shrink-0" style={{ background: r.bg, color: r.c }}>{r.i}</div>
              <div className="flex-1 min-w-0"><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[13.5px] truncate">{r.n}</Typography><Typography className="font-['Geist:Regular'] text-[#94a3b8] text-[12px] truncate mt-[2px]">{r.p}</Typography>
                <div className="mt-[5px]">{r.esc ? <span className="text-[10px] font-['Geist:Medium'] bg-[#fff1d6] text-[#a06a00] px-[7px] py-[2px] rounded-full">↑ Human</span> : <span className="text-[10px] font-['Geist:Medium'] bg-[#e5f6e7] text-[#06824f] px-[7px] py-[2px] rounded-full">✦ AI · {r.t}</span>}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 flex flex-col min-w-0">
          <div className="px-[20px] py-[13px] border-b border-[#edf0f4] bg-white flex items-center gap-[11px]"><div className="size-[40px] rounded-full bg-[#d8f3e3] flex items-center justify-center font-['Geist:SemiBold'] font-semibold text-[#0a8f5a] text-[14px]">P</div><div><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[15px] leading-none">Priya Sharma</Typography><Typography className="font-['Geist:Regular'] text-[#06824f] text-[11px] mt-[4px] flex items-center gap-[4px]"><span className="size-[5px] rounded-full bg-[#06b349]" />AI handling · online</Typography></div></div>
          <div className="flex-1 px-[24px] py-[18px] flex flex-col gap-[12px] overflow-hidden" style={{ background: '#f6f8fa' }}>
            <div className="self-start bg-white rounded-[12px] rounded-tl-[3px] px-[14px] py-[9px] shadow-sm max-w-[70%]"><Typography className="text-[#0c221f] text-[13px]">Is the linen kurta in M available?</Typography></div>
            <div className="self-end flex flex-col items-end gap-[3px] max-w-[74%]"><div className="bg-[#dcf8e8] rounded-[12px] rounded-tr-[3px] px-[14px] py-[9px]"><Typography className="text-[#0c221f] text-[13px] leading-[1.45]">Yes! 3 left in M. Here's a secure UPI link to check out 👇</Typography></div><div className="flex items-center gap-[4px]"><Typography className="font-['Courier_Prime'] text-[#06824f] text-[9.5px]">✦ AI · 0.4s</Typography><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#34b7f1" strokeWidth="2.5"><polyline points="18 7 9.5 16 7 13.5" /><polyline points="23 7 14.5 16 14 15.5" /></svg></div></div>
            <div className="self-end bg-[#0b1f17] rounded-[12px] rounded-tr-[3px] px-[14px] py-[10px] max-w-[60%] flex items-center gap-[10px]"><div className="size-[30px] rounded-[8px] bg-[#06b349] flex items-center justify-center shrink-0"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg></div><div><Typography className="text-white text-[12.5px] font-['Geist:SemiBold']">Pay ₹1,499</Typography><Typography className="text-[#8fdcae] text-[10.5px]">Secure · UPI / Card</Typography></div></div>
            <div className="flex items-center gap-[8px] my-[2px]"><div className="flex-1 h-px bg-[#e6ebf0]" /><Typography className="font-['Courier_Prime'] text-[#a06a00] text-[9.5px] uppercase tracking-[0.08em]">Complex → escalated to human</Typography><div className="flex-1 h-px bg-[#e6ebf0]" /></div>
            <div className="self-start bg-white rounded-[12px] rounded-tl-[3px] px-[14px] py-[9px] shadow-sm max-w-[70%]"><Typography className="text-[#0c221f] text-[13px]">Can I get a custom size?</Typography></div>
          </div>
          <div className="px-[18px] py-[12px] border-t border-[#edf0f4] bg-white flex items-center gap-[10px]"><div className="flex-1 h-[38px] rounded-[10px] border border-[#e5e7eb] flex items-center px-[13px]"><Typography className="text-[#9ca3af] text-[13px]">AI is drafting a reply…</Typography></div><div className="size-[38px] rounded-[10px] bg-[#06b349] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg></div></div>
        </div>
        <div className="w-[210px] border-l border-[#edf0f4] bg-white flex flex-col shrink-0 p-[14px] gap-[10px]">
          <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[13px]">AI performance</Typography>
          {stats.map((s) => (
            <div key={s.l} className="rounded-[11px] border border-[#eef1f4] bg-[#fbfcfd] p-[12px]"><Typography className="font-['Geist:SemiBold'] font-semibold text-[#06b349] text-[22px] tracking-[-0.5px] leading-none">{s.v}</Typography><Typography className="font-['Geist:Regular'] text-[#64748b] text-[11px] mt-[5px]">{s.l}</Typography></div>
          ))}
          <div className="rounded-[11px] bg-[#0b1f17] p-[12px] mt-auto"><Typography className="text-[#8fdcae] text-[10px] uppercase tracking-[0.5px]">24/7</Typography><Typography className="text-white text-[13px] font-['Geist:SemiBold'] mt-[3px]">Always-on AI</Typography></div>
        </div>
      </div>
    </AppShell>
  );
}

// 3 · CONVERSATIONAL AI — Lead pipeline
function ConversationMock() {
  const cols = [
    { t: 'New', n: 42, c: '#94a3b8', cards: [{ n: 'Sneha R.', s: 34, m: 'Asked about pricing', ch: '#25d366' }, { n: 'Vikram S.', s: 28, m: 'Clicked catalog link', ch: '#E1306C' }] },
    { t: 'Engaging', n: 18, c: '#3f6cab', cards: [{ n: 'Meera I.', s: 61, m: 'Answered 2 questions', ch: '#25d366' }, { n: 'Dev K.', s: 55, m: 'Shared budget range', ch: '#1877F2' }] },
    { t: 'Qualified', n: 11, c: '#06b349', cards: [{ n: 'Riya N.', s: 82, m: 'Occasion wear · ₹2–3k', ch: '#25d366' }, { n: 'Arjun P.', s: 78, m: 'Ready to buy', ch: '#E1306C' }] },
    { t: 'Hot', n: 5, c: '#dc2626', cards: [{ n: 'Priya S.', s: 94, m: 'Pay link sent', ch: '#25d366', hot: true }, { n: 'Kabir M.', s: 90, m: 'Cart ₹4,200', ch: '#1877F2', hot: true }] },
  ];
  return (
    <AppShell expanded="Customers" activeSub="CRM">
      <ContentHeader title="Lead Pipeline" badge={<span className="bg-[#e5f6e7] text-[#06824f] text-[11px] font-['Geist:Medium'] px-[10px] py-[3px] rounded-full">✦ AI-qualified</span>} right={<><Typography className="font-['Geist:Regular'] text-[#94a3b8] text-[12.5px]">76 leads · two-way AI</Typography><div className="h-[34px] rounded-[9px] bg-[#06b349] flex items-center px-[13px] gap-[6px]"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg><Typography className="text-white text-[12.5px] font-['Geist:Medium']">New flow</Typography></div></>} />
      <div className="flex-1 p-[16px] grid grid-cols-4 gap-[12px] overflow-hidden">
        {cols.map((col) => (
          <div key={col.t} className="bg-white border border-[#eef1f4] rounded-[14px] flex flex-col overflow-hidden">
            <div className="px-[14px] py-[12px] flex items-center justify-between border-b border-[#f1f3f6]"><div className="flex items-center gap-[7px]"><span className="size-[8px] rounded-full" style={{ background: col.c }} /><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[13.5px]">{col.t}</Typography></div><span className="bg-[#eef1f4] text-[#64748b] text-[11px] font-['Geist:Medium'] px-[7px] py-[1px] rounded-full">{col.n}</span></div>
            <div className="p-[10px] flex flex-col gap-[9px]">
              {col.cards.map((cd) => (
                <div key={cd.n} className={`rounded-[11px] border p-[11px] ${cd.hot ? 'border-[#f6c9c0] bg-[#fdf3f0]' : 'border-[#eef1f4] bg-[#fbfcfd]'}`}>
                  <div className="flex items-center justify-between mb-[8px]"><div className="flex items-center gap-[7px]"><div className="size-[26px] rounded-full bg-[#eceff3] flex items-center justify-center font-['Geist:SemiBold'] font-semibold text-[#475569] text-[10px]">{cd.n.split(' ').map((w) => w[0]).join('')}</div><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[12.5px]">{cd.n}</Typography></div><img alt="" src={cd.ch === '#25d366' ? imgWhatsApp : cd.ch === '#E1306C' ? imgInstagram : imgFacebook} className="size-[14px]" /></div>
                  <Typography className="font-['Geist:Regular'] text-[#64748b] text-[11px] mb-[8px] leading-[1.35]">{cd.m}</Typography>
                  <div className="flex items-center justify-between mb-[4px]"><Typography className="font-['Courier_Prime'] text-[#9ca3af] text-[9.5px]">score</Typography><Typography className="font-['Geist:SemiBold'] font-semibold text-[10.5px]" style={{ color: cd.s >= 80 ? '#06b349' : '#64748b' }}>{cd.s}</Typography></div>
                  <div className="h-[5px] rounded-full bg-[#eef1f4] overflow-hidden"><div className="h-full rounded-full" style={{ width: `${cd.s}%`, background: cd.s >= 80 ? 'linear-gradient(90deg,#06b349,#25d366)' : '#94a3b8' }} /></div>
                </div>
              ))}
              <div className="rounded-[10px] border border-dashed border-[#e0dac6] py-[8px] text-center"><Typography className="font-['Geist:Regular'] text-[#9ca3af] text-[11px]">+ {col.n - col.cards.length} more</Typography></div>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}

// 4 · CART RECOVERY — campaign dashboard
function CartRecoveryMock() {
  const funnel = [{ l: 'Abandoned', v: '820', p: 100, c: '#c98a3a' }, { l: 'Nudged', v: '780', p: 95, c: '#3f6cab' }, { l: 'Clicked', v: '410', p: 50, c: '#7c5bd6' }, { l: 'Recovered', v: '328', p: 40, c: '#06b349' }];
  const seq = [{ a: 'Nudge sent', d: '"Still thinking? Only 3 left"', t: '+4h', done: true }, { a: 'Reminder + ₹200 off', d: 'Personalised offer', t: '+1d', done: true }, { a: 'Recovered', d: 'Paid via UPI', t: '', done: true, win: true }];
  const rows = [
    { n: 'Priya Sharma', it: 'Linen Kurta · M', v: '₹2,490', st: 'Recovered' },
    { n: 'Aanya Verma', it: 'Cotton Dress · L', v: '₹1,890', st: 'Recovered' },
    { n: 'Kabir Mehta', it: 'Silk Saree', v: '₹4,200', st: 'Nudged' },
    { n: 'Riya Nair', it: 'Kurta Set · S', v: '₹3,150', st: 'Recovered' },
  ];
  return (
    <AppShell expanded="Marketing" activeSub="Campaigns">
      <ContentHeader title="Cart Recovery" badge={<span className="flex items-center gap-[6px] bg-[#e5f6e7] rounded-full px-[11px] py-[4px]"><span className="size-[6px] rounded-full bg-[#06b349] step-live-dot" /><Typography className="text-[#06824f] text-[11.5px] font-['Geist:Medium']">Automation ON</Typography></span>} right={<span className="bg-[#06b349] text-white text-[12px] font-['Geist:SemiBold'] px-[12px] py-[6px] rounded-[9px]">40% recovered</span>} />
      <div className="flex-1 p-[18px] flex flex-col gap-[14px] overflow-hidden">
        <div className="bg-white border border-[#eef1f4] rounded-[14px] p-[18px]">
          <div className="flex items-center justify-between mb-[14px]"><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[14px]">Recovery funnel · this week</Typography><Typography className="font-['Courier_Prime'] text-[#06824f] text-[12px]">₹6.1L recovered</Typography></div>
          <div className="flex items-end gap-[10px]">
            {funnel.map((f, i) => (
              <div key={f.l} className="flex-1 flex items-center gap-[10px]">
                <div className="flex-1">
                  <div className="flex items-baseline justify-between mb-[6px]"><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[22px] tracking-[-0.5px]">{f.v}</Typography><Typography className="font-['Courier_Prime'] text-[#9ca3af] text-[11px]">{f.p}%</Typography></div>
                  <Typography className="font-['Geist:Medium'] text-[#64748b] text-[12px] mb-[7px]">{f.l}</Typography>
                  <div className="h-[8px] rounded-full bg-[#f1f3f6] overflow-hidden"><div className="h-full rounded-full step-bar" style={{ width: `${f.p}%`, background: f.c }} /></div>
                </div>
                {i < funnel.length - 1 && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2.5" className="mb-[8px] shrink-0"><polyline points="9 18 15 12 9 6" /></svg>}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-[1fr_1.35fr] gap-[14px] flex-1 min-h-0">
          <div className="bg-white border border-[#eef1f4] rounded-[14px] p-[16px] flex flex-col">
            <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[14px] mb-[14px]">Recovery sequence</Typography>
            <div className="flex-1">
              {seq.map((s, i) => (
                <div key={i} className="flex gap-[12px]">
                  <div className="flex flex-col items-center"><div className={`size-[24px] rounded-full flex items-center justify-center shrink-0 ${s.win ? 'bg-[#06b349]' : 'bg-[#e5f6e7]'}`}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={s.win ? 'white' : '#06b349'} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></div>{i < seq.length - 1 && <div className="w-px flex-1 min-h-[24px] bg-[#e0dac6]" />}</div>
                  <div className="pb-[18px]"><div className="flex items-center gap-[8px]"><Typography className={`font-['Geist:SemiBold'] font-semibold text-[13.5px] ${s.win ? 'text-[#06824f]' : 'text-[#0c221f]'}`}>{s.a}</Typography>{s.t && <Typography className="font-['Courier_Prime'] text-[#9ca3af] text-[10px]">{s.t}</Typography>}</div><Typography className="font-['Geist:Regular'] text-[#64748b] text-[12px] mt-[2px]">{s.d}</Typography></div>
                </div>
              ))}
            </div>
            <div className="rounded-[11px] bg-[#f3fbf5] border border-[#cdeeda] p-[12px] flex items-center justify-between"><Typography className="font-['Geist:Medium'] text-[#06824f] text-[12px]">Avg recovery time</Typography><Typography className="font-['Geist:SemiBold'] font-semibold text-[#06824f] text-[14px]">6h 20m</Typography></div>
          </div>
          <div className="bg-white border border-[#eef1f4] rounded-[14px] flex flex-col overflow-hidden">
            <div className="px-[16px] py-[12px] border-b border-[#f1f3f6] grid grid-cols-[1.4fr_1.4fr_0.8fr_0.9fr] gap-[10px]">{['Customer', 'Item', 'Value', 'Status'].map((h) => <Typography key={h} className="font-['Geist:Medium'] text-[#94a3b8] text-[10.5px] uppercase tracking-[0.5px]">{h}</Typography>)}</div>
            {rows.map((r) => (
              <div key={r.n} className="px-[16px] py-[12px] border-b border-[#f6f7f9] grid grid-cols-[1.4fr_1.4fr_0.8fr_0.9fr] gap-[10px] items-center">
                <div className="flex items-center gap-[8px] min-w-0"><div className="size-[26px] rounded-full bg-[#d8f3e3] flex items-center justify-center font-['Geist:SemiBold'] font-semibold text-[#0a8f5a] text-[10px] shrink-0">{r.n.split(' ').map((w) => w[0]).join('')}</div><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[12.5px] truncate">{r.n}</Typography></div>
                <Typography className="font-['Geist:Regular'] text-[#475569] text-[12px] truncate">{r.it}</Typography>
                <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[12.5px]">{r.v}</Typography>
                <span className={`justify-self-start rounded-full px-[9px] py-[3px] text-[10.5px] font-['Geist:Medium'] ${r.st === 'Recovered' ? 'bg-[#e5f6e7] text-[#06824f]' : 'bg-[#fff1d6] text-[#a06a00]'}`}>{r.st}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// DATA
// ══════════════════════════════════════════════════════════════════════════════
const SECTIONS = [
  {
    problem: 'Fragmented Tech Stack',
    body: 'Disconnected tools across CRM, WhatsApp, payments and analytics — nothing talks to each other.',
    pain: [
      'No single system to view and manage the complete customer journey.',
      'Disconnected tools causing data silos, manual work and operational drag.',
      'Limited visibility into customer behaviour, making it hard to act in time.',
    ],
    solution: 'From Fragmented Tools to One Platform',
    fix: [
      'Integrates WhatsApp, Instagram, CRM, payments and analytics in one place.',
      'Eliminates tool sprawl and creates a single source of truth.',
      'Complete customer-journey visibility across every channel.',
    ],
    Mock: PlatformMock,
  },
  {
    problem: 'Manual Work Overload',
    body: 'Your team spends hours every day on repetitive queries — slow replies and burnt-out agents.',
    pain: [
      'Teams overwhelmed handling repetitive customer queries all day.',
      'Slow response times lead to frustrated customers and lost sales.',
      'Human effort wasted on routine chats instead of high-value work.',
    ],
    solution: 'AI That Handles It for You',
    fix: [
      'Handles FAQs, order queries, follow-ups and payment nudges automatically.',
      'Escalates to humans only for complex conversations that need it.',
      'Instant 24/7 responses with under-30-second reply times.',
    ],
    Mock: AiReplyMock,
  },
  {
    problem: 'Broken Automation',
    body: 'Bulk-message tools that fall apart in real conversations — leads go cold and context is lost.',
    pain: [
      'One-way bulk messaging fails to engage customers meaningfully.',
      'Leads stay unqualified with no intelligent, interactive follow-up.',
      'Customer context is lost across interactions.',
    ],
    solution: 'Conversational AI That Understands, Engages & Acts',
    fix: [
      'Real two-way conversations, not just broadcasts.',
      'Qualifies leads through smart question flows and behaviour.',
      'Maintains context across every single interaction.',
    ],
    Mock: ConversationMock,
  },
  {
    problem: 'Cart Abandonment',
    body: 'High-intent shoppers vanish after a question — with no follow-up, that revenue is gone.',
    pain: [
      'High-intent shoppers drop off with no automated follow-up.',
      'No personalised re-engagement based on customer behaviour.',
      'Lost revenue from missing contextual nudges.',
    ],
    solution: 'From Cart Abandonment to Automated Recovery',
    fix: [
      'Triggers personalised recovery sequences the moment a cart is abandoned.',
      'Sends contextual nudges with product details and secure pay links.',
      'Recovers up to 40% of abandoned carts.',
    ],
    Mock: CartRecoveryMock,
  },
];

const STATS = [
  { v: '8X', l: 'Faster response speed' },
  { v: '3X', l: 'Higher customer satisfaction' },
  { v: '40%', l: 'Abandoned carts recovered' },
  { v: '24/7', l: 'Always-on AI coverage' },
];

const TESTIMONIALS = [
  { q: 'We were drowning in messages across WhatsApp and Instagram. WeNext unified everything and our team finally breathes.', c: 'Fibers Club', r: 'D2C Apparel' },
  { q: 'Before WeNext, appointment booking on WhatsApp was chaos. Now it runs end-to-end, automatically.', c: 'Neehar Neuro', r: 'Healthcare' },
  { q: 'WeNext automated our repeated WhatsApp queries and freed up hours of our team every single day.', c: 'Swagruha Foods', r: 'Food & Beverage' },
  { q: 'We were bleeding leads to slow WhatsApp responses. Now our reply time is down to seconds.', c: 'Udaya Group', r: 'Retail' },
];

const FAQS = [
  { q: 'My customers keep asking "Where is my order?" — how does WeNext help?', a: 'WeNext gives customers real-time order and dispatch visibility on WhatsApp, and proactively sends tracking updates — so the "where is my order" messages stop before they start.' },
  { q: 'How can I reduce high shipping and fulfilment costs as a D2C brand?', a: 'High costs usually come from fragmented operations and manual work. WeNext unifies orders, support and follow-ups so your team does less, errors drop, and every conversation converts more.' },
  { q: 'Can WeNext improve customer experience without adding headcount?', a: 'Yes. WeNext automates key workflows — order queries, follow-ups, payment nudges and cart recovery — so you deliver instant, 24/7 service without hiring more agents.' },
  { q: 'How does WeNext handle order surges during sales or festive spikes?', a: 'Order spikes break traditional systems. WeNext is built to scale — AI handles unlimited concurrent conversations, so response times stay in seconds even at peak volume.' },
  { q: 'I use multiple tools for orders, shipping and support. Can WeNext fit in?', a: 'Absolutely. WeNext integrates with your existing CRM, payments, catalog and analytics — one platform on top of your stack, not a rip-and-replace.' },
];

// ══════════════════════════════════════════════════════════════════════════════
export default function D2C() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <div className="bg-[#f8f5ec] relative size-full min-h-screen flex flex-col overflow-x-clip">
      <Header />

      {/* HERO */}
      <div className="bg-[#092511] shadow-[0_0_0_100vmax_#092511] [clip-path:inset(0_-100vmax)] shrink-0 w-full">
        <div className="container mx-auto border-x border-[rgba(255,255,255,0.08)] px-4 xl:px-[75px] py-[96px] flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]"><img alt="" className="size-full object-cover" src={imgImage27} /></div>
          <div className="absolute -top-[120px] left-1/2 -translate-x-1/2 size-[420px] bg-[#06b349] opacity-[0.14] blur-[110px] rounded-full pointer-events-none" />
          <div className="flex gap-[10px] items-center justify-center mb-[20px] relative">
            <div className="bg-[#06b349] size-[8px] rounded-full" />
            <Typography className="font-['Courier_Prime'] text-[#06b349] text-[14px] uppercase tracking-[0.2em]">Industries · D2C</Typography>
          </div>
          <Typography component="h1" className="font-['Geist:SemiBold'] font-semibold leading-[1.1] text-white text-[60px] tracking-[-2px] max-w-[860px] mb-[22px] relative">
            D2C WhatsApp automation<br />built to <span className="text-[#25d366]">sell</span>
          </Typography>
          <Typography className="font-['Geist:Regular'] text-[#a0b8a8] text-[20px] max-w-[680px] leading-[1.6] mb-[40px] relative">
            Stop losing money to slow replies, broken tools and abandoned carts. WeNext turns every WhatsApp chat into a sale — automatically.
          </Typography>
          <div className="flex gap-[16px] items-center relative">
            <PrimaryButton label="Book a Demo" />
            <GhostButton label="Get Started" dark />
          </div>
          <div className="flex flex-wrap gap-x-[40px] gap-y-[16px] items-center justify-center mt-[52px] relative">
            {STATS.map((s) => (
              <div key={s.l} className="flex flex-col items-center">
                <Typography className="font-['Geist:SemiBold'] font-semibold text-white text-[30px] tracking-[-1px] leading-none">{s.v}</Typography>
                <Typography className="font-['Geist:Regular'] text-[#7aaa88] text-[12.5px] mt-[6px]">{s.l}</Typography>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* INTRO */}
      <div className="container mx-auto border-x border-b border-[#e0dac6]">
        <div className="py-[60px] px-4 xl:px-[75px] flex flex-col items-center text-center">
          <Eyebrow label="The Problem" center />
          <Typography component="h2" className="font-['Geist:SemiBold'] font-semibold text-[44px] text-[#0c221f] tracking-[-1.5px] leading-[1.15] max-w-[760px]">
            Four things quietly killing your D2C revenue
          </Typography>
          <Typography className="font-['Geist:Regular'] text-[#60584c] text-[18px] max-w-[600px] leading-[1.55] mt-[14px]">
            And exactly how WeNext fixes each one — turning fragmented, manual, leaky operations into one automated growth engine.
          </Typography>
        </div>
      </div>

      {/* PROBLEM → SOLUTION SECTIONS */}
      {SECTIONS.map((s, i) => {
        const Mock = s.Mock;
        return (
          <div key={s.problem} className="container mx-auto border-x border-b border-[#e0dac6]">
            <div className="grid grid-cols-2 divide-x divide-[#e0dac6] border-b border-[#e0dac6]">
              {/* problem */}
              <Reveal className="px-[56px] py-[52px]">
                <div className="flex items-center gap-[10px] mb-[16px]">
                  <span className="font-['Courier_Prime'] text-[#d9773f] text-[12px] uppercase tracking-[0.16em] bg-[#fbeee5] border border-[#f2d9c6] rounded-full px-[11px] py-[3px]">The Problem 0{i + 1}</span>
                </div>
                <Typography component="h3" className="font-['Geist:SemiBold'] font-semibold text-[30px] text-[#0c221f] tracking-[-0.8px] leading-[1.15] mb-[12px]">{s.problem}</Typography>
                <Typography className="font-['Geist:Regular'] text-[#60584c] text-[16px] leading-[1.6] mb-[22px]">{s.body}</Typography>
                <div className="flex flex-col gap-[12px]">
                  {s.pain.map((p) => (
                    <div key={p} className="flex items-start gap-[11px]">
                      <div className="size-[20px] rounded-[6px] bg-[#fbeee5] border border-[#f2d9c6] flex items-center justify-center shrink-0 mt-[1px]"><CrossIcon /></div>
                      <Typography className="font-['Geist:Regular'] text-[#4a4034] text-[14.5px] leading-[1.5]">{p}</Typography>
                    </div>
                  ))}
                </div>
              </Reveal>
              {/* solution */}
              <Reveal className="px-[56px] py-[52px] bg-[#f3fbf5]" delay={0.08}>
                <div className="inline-flex items-center gap-[7px] mb-[16px] bg-[#e5f6e7] rounded-full px-[12px] py-[4px]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.9 5.8 5.8 1.9-5.8 1.9L12 18.4l-1.9-5.8L4.3 10.7l5.8-1.9z" /></svg>
                  <Typography className="font-['Courier_Prime'] text-[#06824f] text-[11.5px] uppercase tracking-[0.14em]">WeNext Solution</Typography>
                </div>
                <Typography component="h3" className="font-['Geist:SemiBold'] font-semibold text-[26px] text-[#0c221f] tracking-[-0.6px] leading-[1.2] mb-[22px]">{s.solution}</Typography>
                <div className="flex flex-col gap-[14px]">
                  {s.fix.map((f) => (
                    <div key={f} className="flex items-start gap-[11px]">
                      <div className="size-[22px] rounded-full bg-[#06b349] flex items-center justify-center shrink-0 mt-[1px]"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></div>
                      <Typography className="font-['Geist:Regular'] text-[#2f3a34] text-[15px] leading-[1.55]">{f}</Typography>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            {/* mockup */}
            <div className="px-[40px] py-[54px] bg-[#f3efe3] relative overflow-hidden flex justify-center" style={gridCanvas}>
              <Reveal className="w-full flex justify-center">
                <Mock />
              </Reveal>
            </div>
          </div>
        );
      })}

      {/* RESULTS */}
      <div className="container mx-auto border-x border-b border-[#e0dac6]">
        <div className="py-[60px] px-4 xl:px-[75px] flex flex-col items-center text-center border-b border-[#e0dac6]">
          <Eyebrow label="Results" center />
          <Typography component="h2" className="font-['Geist:SemiBold'] font-semibold text-[44px] text-[#0c221f] tracking-[-1.5px] leading-[1.15] max-w-[700px]">
            Results that speak volumes
          </Typography>
          <Typography className="font-['Geist:Regular'] text-[#60584c] text-[18px] max-w-[560px] leading-[1.55] mt-[14px]">
            See how D2C brands are transforming customer conversations into revenue with WeNext.
          </Typography>
        </div>
        <div className="grid grid-cols-4 divide-x divide-[#e0dac6] border-b border-[#e0dac6]">
          {STATS.map((s) => (
            <Reveal key={s.l} className="px-[30px] py-[40px] flex flex-col items-center text-center">
              <Typography className="font-['Geist:SemiBold'] font-semibold text-[#06b349] text-[46px] tracking-[-1.5px] leading-none">{s.v}</Typography>
              <Typography className="font-['Geist:Regular'] text-[#60584c] text-[14px] mt-[10px] leading-[1.4]">{s.l}</Typography>
            </Reveal>
          ))}
        </div>
        <div className="grid grid-cols-2 divide-x divide-[#e0dac6]">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.c} className={`px-[50px] py-[40px] ${i < 2 ? 'border-b border-[#e0dac6]' : ''}`} delay={(i % 2) * 0.06}>
              <div className="flex items-center gap-[2px] mb-[16px]">{[...Array(5)].map((_, k) => <svg key={k} width="15" height="15" viewBox="0 0 24 24" fill="#06b349"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" /></svg>)}</div>
              <Typography className="font-['Geist:Regular'] text-[#3a4540] text-[19px] leading-[1.55] mb-[20px]">“{t.q}”</Typography>
              <div className="flex items-center gap-[12px]">
                <div className="size-[42px] rounded-full bg-[#06b349] flex items-center justify-center text-white font-['Geist:SemiBold'] font-semibold text-[15px]">{t.c.split(' ').map((w) => w[0]).join('').slice(0, 2)}</div>
                <div>
                  <Typography className="font-['Geist:SemiBold'] font-semibold text-[#06b349] text-[16px] leading-none">{t.c}</Typography>
                  <Typography className="font-['Geist:Regular'] text-[#60584c] text-[13px] mt-[4px]">{t.r}</Typography>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="container mx-auto border-x border-b border-[#e0dac6]">
        <div className="grid grid-cols-[380px_1fr]">
          <div className="px-[60px] py-[60px] border-r border-[#e0dac6]">
            <Eyebrow label="FAQ's" />
            <Typography component="h2" className="font-['Geist:SemiBold'] font-semibold text-[42px] text-[#0c221f] tracking-[-1.2px] leading-[1.15]">Got questions?<br />We've got answers.</Typography>
          </div>
          <div className="px-[24px] py-[24px]">
            {FAQS.map((faq, i) => {
              const open = openFaq === i;
              return (
                <div key={i} className={`${i < FAQS.length - 1 ? 'border-b border-[#e5e5e5]' : ''}`}>
                  <button onClick={() => setOpenFaq(open ? null : i)} className="w-full text-left flex items-start justify-between gap-[20px] py-[24px] px-[16px] cursor-pointer group">
                    <Typography className={`font-['Geist:Medium'] font-medium text-[19px] leading-[1.4] transition-colors ${open ? 'text-[#06b349]' : 'text-[#0c221f] group-hover:text-[#06b349]'}`}>{faq.q}</Typography>
                    <div className="size-[26px] rounded-full border border-[#e0dac6] flex items-center justify-center shrink-0 mt-[2px]" style={{ transform: open ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.25s ease' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                    </div>
                  </button>
                  <div className="overflow-hidden transition-[max-height] duration-300 ease-in-out" style={{ maxHeight: open ? '240px' : '0px' }}>
                    <Typography className="font-['Geist:Regular'] text-[#60584c] text-[16px] leading-[1.65] px-[16px] pb-[26px] max-w-[640px]">{faq.a}</Typography>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>



      <Footer />
    </div>
  );
}
