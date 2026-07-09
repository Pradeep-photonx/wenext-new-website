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

// ─── In-view hook ─────────────────────────────────────────────────────────────
function useInView<T extends HTMLElement = HTMLDivElement>(threshold = 0.25) {
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

// ─── Shared bits ──────────────────────────────────────────────────────────────
function Eyebrow({ label, light = false, center = false }: { label: string; light?: boolean; center?: boolean }) {
  return (
    <div className={`flex gap-[10px] items-center mb-[16px] ${center ? 'justify-center' : ''}`}>
      <div className="bg-[#06b349] size-[8px]" />
      <Typography sx={{ lineHeight: "100%" }} className={`font-['Courier_Prime'] text-[14px] uppercase tracking-[0.2em] ${light ? 'text-[#06b349]' : 'text-[#0c221f]'}`}>{label}</Typography>
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

function GhostButton({ label }: { label: string }) {
  return (
    <a href="https://app.wenext.ai" target="_blank" rel="noopener noreferrer"
      className="bg-transparent border border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.05)] active:scale-[0.98] transition-all duration-150 rounded-[8px] cursor-pointer flex items-center px-[21px] py-[15px]">
      <Typography className="font-['Geist:Medium'] font-medium text-[17px] text-white whitespace-nowrap">{label}</Typography>
    </a>
  );
}

const Check = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
);

// Status pill shown on every mockup canvas
function LivePill({ label = 'Live' }: { label?: string }) {
  return (
    <div className="flex items-center gap-[6px] bg-[#e5f6e7] rounded-full px-[10px] py-[4px]">
      <span className="relative flex size-[6px]"><span className="absolute inline-flex size-full rounded-full bg-[#06b349] opacity-60 animate-ping" /><span className="relative inline-flex size-[6px] rounded-full bg-[#06b349]" /></span>
      <Typography className="font-['Courier_Prime'] text-[#06824f] text-[10px] uppercase tracking-[0.08em]">{label}</Typography>
    </div>
  );
}

const cardBase = 'bg-white rounded-[18px] border border-[#e0dac6] shadow-[0_28px_64px_-30px_rgba(11,31,26,0.45)] overflow-hidden';
const gridCanvas: React.CSSProperties = {
  backgroundImage: 'linear-gradient(rgba(9,37,17,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(9,37,17,0.03) 1px, transparent 1px)',
  backgroundSize: '30px 30px',
};

// ─── Feature row wrapper (alternating text | mockup) ──────────────────────────
function FeatureRow({ eyebrow, heading, body, points, reverse = false, last = false, children }: {
  eyebrow: string; heading: ReactNode; body: string; points: string[]; reverse?: boolean; last?: boolean; children: ReactNode;
}) {
  const text = (
    <div className={`p-[60px] flex flex-col justify-center ${!reverse ? 'border-r border-[#e0dac6]' : ''}`}>
      <Eyebrow label={eyebrow} />
      <Typography component="h2" className="font-['Geist:SemiBold'] font-semibold text-[38px] text-[#0c221f] tracking-[-1.2px] leading-[1.15] mb-[18px]">{heading}</Typography>
      <Typography className="font-['Geist:Regular'] text-[#60584c] text-[17px] leading-[1.7] mb-[28px] max-w-[460px]">{body}</Typography>
      <div className="flex flex-col gap-[14px]">
        {points.map((p) => (
          <div key={p} className="flex items-center gap-[12px]">
            <div className="size-[22px] rounded-full bg-[#e5f6e7] flex items-center justify-center shrink-0"><Check /></div>
            <Typography className="font-['Geist:Regular'] text-[#3a4540] text-[16px]">{p}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
  const viz = (
    <div className={`p-[44px] flex items-center justify-center bg-[#f3efe3] relative overflow-hidden ${reverse ? 'border-r border-[#e0dac6]' : ''}`} style={gridCanvas}>
      {children}
    </div>
  );
  return (
    <div className={`container mx-auto border-x ${last ? 'border-b' : 'border-b'} border-[#e0dac6]`}>
      <div className="grid grid-cols-2 min-h-[520px]">
        {reverse ? <>{viz}{text}</> : <>{text}{viz}</>}
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// MOCKUP 1 — Unified Inbox
// ══════════════════════════════════════════════════════════════════════════════
function UnifiedInboxDashboard() {
  const [ref, inView] = useInView<HTMLDivElement>(0.15);

  const NAV: { label: string; icon: ReactNode; active?: boolean; expanded?: boolean; sub?: string[] }[] = [
    { label: 'Overview', icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /></svg> },
    { label: 'Inbox', active: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg> },
    { label: 'Campaigns', expanded: true, sub: ['Message Templates', 'WhatsApp Campaigns', 'Social Media Posts', 'LinkedIn Posts'], icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></svg> },
    { label: 'CRM', icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
    { label: 'Automations', icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg> },
    { label: 'Instagram', icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg> },
    { label: 'Appointments', icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg> },
    { label: 'Commerce', icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg> },
    { label: 'Data Store', icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg> },
    { label: 'Reports', icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></svg> },
    { label: 'Ads', icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" /></svg> },
    { label: 'AI', icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4" /><line x1="8" y1="16" x2="8" y2="16" /><line x1="16" y1="16" x2="16" y2="16" /></svg> },
    { label: 'Petpooja', icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l1-5h16l1 5" /><path d="M4 9v11h16V9" /><path d="M9 20v-6h6v6" /></svg> },
  ];

  const convos = [
    { av: 'N', avBg: '#fde2e1', avC: '#d9534f', name: 'Nanne', star: '', prev: '🔔 LocalStack SQS push test', phone: '+919876543210', date: '06/08/2026', tagBtn: true, tmpl: '1', dot: { l: 'K', c: '#06b349' } },
    { av: 'P', avBg: '#cdeee8', avC: '#0a8f7a', name: 'Krishna Chaitanya', star: '🔴', prev: '💬 Message', phone: '+919876543210', date: '02/16/2026', tags: [{ l: 'VIP', bg: '#e0e7ff', c: '#4f46e5' }], dot: { l: 'P', c: '#ec4899' } },
    { av: '29', avBg: '#d8f3e3', avC: '#06b349', name: 'Hari Krishna', star: '⭐', prev: '💬 Message', phone: '+919876543210', date: '02/16/2026', tagBtn: true, dot: { l: 'T', c: '#ef4444' } },
    { av: 'G', avBg: '#d8f3e3', avC: '#06b349', name: 'Gadde Sai Uma Chowdary', star: '', prev: '💬 Message', phone: '+919876543210', date: '02/15/2026', tags: [{ l: 'aaa', bg: '#eceff3', c: '#64748b' }], dot: { l: 'S', c: '#eab308' } },
    { av: 'P', avBg: '#d8f3e3', avC: '#06b349', name: 'Photonx Technologies …', star: '', prev: 'You: ✅ Form sent', phone: '+919876543210', date: '02/15/2026', tagBtn: true, dot: { l: 'S', c: '#eab308' } },
    { av: 'K', avBg: '#d8f3e3', avC: '#06b349', name: 'Krishna Chaitanya', star: '', prev: 'You: 💬 Message', phone: '+919876543210', date: '02/15/2026', tagBtn: true, dot: { l: 'S', c: '#eab308' } },
    { av: 'P', avBg: '#cdeee8', avC: '#0a8f7a', name: 'PAVAN NAIDU🐦', star: '', prev: '💬 Message', phone: '+919876543210', date: '02/15/2026', tags: [{ l: 'aaa', bg: '#eceff3', c: '#64748b' }, { l: 'jiii', bg: '#eceff3', c: '#64748b' }, { l: '+1', bg: '#eceff3', c: '#64748b' }], tmpl: '1', person: true },
    { av: 'K', avBg: '#d8f3e3', avC: '#06b349', name: 'K Manish Teja', star: '🟢', prev: 'You: ✅ Form sent', phone: '+919876543210', date: '02/14/2026', tagBtn: true, person: true },
  ];

  const channels = [
    { ic: imgWhatsApp, active: true }, { ic: imgInstagram, active: false }, { ic: imgFacebook, active: false },
  ];
  const PhoneIc = () => <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>;
  const PersonIc = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" y1="8" x2="19" y2="14" /><line x1="22" y1="11" x2="16" y2="11" /></svg>;

  return (
    <div ref={ref} className={`w-full max-w-[1180px] bg-white rounded-[16px] border border-[#e0dac6] shadow-[0_40px_90px_-40px_rgba(11,31,26,0.55)] overflow-hidden transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[28px]'}`}>
      {/* browser chrome */}
      <div className="h-[38px] bg-[#f1eee5] border-b border-[#e5e1d4] flex items-center px-[16px] gap-[8px]">
        <div className="flex gap-[7px]"><span className="size-[11px] rounded-full bg-[#ff5f56]" /><span className="size-[11px] rounded-full bg-[#ffbd2e]" /><span className="size-[11px] rounded-full bg-[#27c93f]" /></div>
        <div className="mx-auto bg-white border border-[#e5e1d4] rounded-[7px] px-[16px] py-[3px] flex items-center gap-[7px]"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg><span className="font-['Courier_Prime'] text-[#9ca3af] text-[11px]">app.wenext.ai</span></div>
      </div>

      {/* app top bar */}
      <div className="h-[56px] bg-white border-b border-[#edf0f4] flex items-center justify-between px-[16px]">
        <div className="flex items-center gap-[8px] w-[200px]">
          <div className="size-[28px] rounded-[8px] bg-[#06b349] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></div>
          <span className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[20px] tracking-[-0.5px]">wenext</span>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="w-[290px] h-[38px] rounded-[10px] border border-[#e5e7eb] bg-[#f8fafc] flex items-center px-[12px] gap-[8px]">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            <span className="text-[#9ca3af] text-[14px] flex-1">Ask AI...</span>
            <span className="bg-white border border-[#e5e7eb] rounded-[5px] px-[6px] py-[1px] font-['Courier_Prime'] text-[#9ca3af] text-[11px]">⌘ K</span>
          </div>
          <div className="h-[38px] rounded-[10px] border border-[#bfe9cd] bg-[#eafaf0] flex items-center px-[14px] gap-[7px]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#06b349" stroke="#06b349" strokeWidth="1.5"><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" /></svg>
            <span className="font-['Geist:Medium'] font-medium text-[#06824f] text-[14px]">Ask AI</span>
          </div>
        </div>
        <div className="flex items-center gap-[12px]">
          <span className="bg-[#06b349] text-white font-['Geist:Medium'] font-medium text-[12px] rounded-full px-[12px] py-[5px]">Basic</span>
          <div className="bg-[#0b1f17] rounded-full px-[12px] py-[6px] flex items-center gap-[6px]"><svg width="13" height="13" viewBox="0 0 24 24" fill="#06b349"><circle cx="12" cy="12" r="9" /></svg><span className="text-white text-[12px] font-['Geist:Medium'] font-medium">AI Credits: <span className="text-[#4ade80]">486.50</span></span></div>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
          <div className="flex items-center gap-[8px]">
            <div className="size-[34px] rounded-[9px] bg-[#eceff3] flex items-center justify-center font-['Geist:SemiBold'] font-semibold text-[#64748b] text-[14px]">P</div>
            <div className="leading-none">
              <div className="flex items-center gap-[3px]"><span className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[13px]">Prathik</span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg></div>
              <span className="font-['Courier_Prime'] text-[#9ca3af] text-[11px]">+91 98765 43210</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[640px]">
        {/* sidebar */}
        <div className="w-[210px] border-r border-[#edf0f4] bg-white flex flex-col">
          <div className="flex-1 overflow-hidden py-[10px] px-[10px] flex flex-col gap-[2px]">
            {NAV.map((n) => (
              <div key={n.label}>
                <div className={`flex items-center gap-[11px] px-[12px] py-[8px] rounded-[9px] cursor-pointer ${n.active ? 'bg-[#06b349] text-white' : 'text-[#475569] hover:bg-[#f4f6f8]'}`}>
                  <span className={n.active ? 'text-white' : 'text-[#64748b]'}>{n.icon}</span>
                  <span className="font-['Geist:Medium'] font-medium text-[13.5px] flex-1">{n.label}</span>
                  {(n.expanded || n.sub) && <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg>}
                  {!n.active && !n.sub && !n.expanded && <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>}
                </div>
                {n.expanded && n.sub && (
                  <div className="ml-[20px] mt-[2px] mb-[2px] pl-[14px] border-l border-[#edf0f4] flex flex-col gap-[1px]">
                    {n.sub.map((s) => (
                      <div key={s} className="px-[12px] py-[6px] rounded-[8px] text-[#64748b] hover:bg-[#f4f6f8] cursor-pointer"><span className="font-['Geist:Regular'] text-[12.5px]">{s}</span></div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Nexus AI card */}
          <div className="m-[10px] rounded-[12px] border border-[#edf0f4] bg-[#f8fafc] p-[10px] flex items-center gap-[9px]">
            <div className="size-[34px] rounded-[10px] bg-[#e8f9ee] flex items-center justify-center"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4" /><line x1="8" y1="16" x2="8" y2="16" /><line x1="16" y1="16" x2="16" y2="16" /></svg></div>
            <div className="flex-1 min-w-0"><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[12px] leading-none">Nexus AI</Typography><Typography className="font-['Geist:Regular'] text-[#9ca3af] text-[10px] mt-[3px] truncate">Open the full-page AI wo…</Typography></div>
            <div className="w-[32px] h-[18px] rounded-full bg-[#d6dae0] p-[2px]"><div className="size-[14px] rounded-full bg-white shadow" /></div>
          </div>
        </div>

        {/* conversation list */}
        <div className="w-[384px] border-r border-[#edf0f4] bg-white flex flex-col">
          <div className="px-[18px] pt-[16px] pb-[12px]">
            <div className="flex items-center gap-[8px] mb-[14px]">
              <div className="size-[24px] rounded-full border border-[#edf0f4] flex items-center justify-center"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg></div>
              <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[20px] tracking-[-0.4px]">Conversations</Typography>
            </div>
            <div className="flex items-center gap-[8px] mb-[14px]">
              <div className="flex-1 h-[40px] rounded-[10px] border border-[#e5e7eb] bg-white flex items-center px-[12px] gap-[8px]"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg><span className="text-[#9ca3af] text-[13px]">Search conversations...</span></div>
              <div className="size-[40px] rounded-[10px] border border-[#e5e7eb] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg></div>
            </div>
            <div className="flex items-center gap-[10px] mb-[14px]">
              {channels.map((c, i) => (
                <div key={i} className={`size-[44px] rounded-[12px] flex items-center justify-center border ${c.active ? 'bg-white border-[#06b349] shadow-[0_0_0_1px_#06b349]' : 'bg-[#f8fafc] border-[#e5e7eb]'}`}><img alt="" src={c.ic} className="size-[22px]" /></div>
              ))}
              <div className="size-[44px] rounded-[12px] flex items-center justify-center border bg-[#f8fafc] border-[#e5e7eb]"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg></div>
            </div>
            <div className="flex items-center gap-[8px]">
              {['All', 'Mine', 'Unassigned'].map((f, i) => (
                <span key={f} className={`rounded-full px-[14px] py-[6px] text-[13px] font-['Geist:Medium'] font-medium ${i === 0 ? 'bg-[#1f2937] text-white' : 'bg-[#eceff3] text-[#64748b]'}`}>{f}</span>
              ))}
            </div>
          </div>
          {/* rows */}
          <div className="flex-1 overflow-hidden">
            {convos.map((r, idx) => (
              <div key={idx} className="flex gap-[11px] px-[16px] py-[12px] border-b border-[#f1f3f6] hover:bg-[#f8fafc] cursor-pointer">
                <div className="relative shrink-0">
                  <div className="size-[42px] rounded-full flex items-center justify-center font-['Geist:SemiBold'] font-semibold text-[14px]" style={{ background: r.avBg, color: r.avC }}>{r.av}</div>
                  <div className="absolute -bottom-[1px] -right-[1px] size-[16px] rounded-full bg-white flex items-center justify-center"><img alt="" src={imgWhatsApp} className="size-[12px]" /></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-[5px]"><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[14px] truncate">{r.name}</Typography>{r.star && <span className="text-[11px]">{r.star}</span>}</div>
                  <Typography className="font-['Geist:Regular'] text-[#64748b] text-[12.5px] truncate mt-[3px]">{r.prev}</Typography>
                  <div className="flex items-center gap-[5px] mt-[4px]"><PhoneIc /><Typography className="font-['Geist:Regular'] text-[#9ca3af] text-[12px]">{r.phone}</Typography></div>
                </div>
                <div className="flex flex-col items-end justify-between shrink-0 gap-[6px]">
                  <div className="flex items-center gap-[4px]">
                    {r.tagBtn && <span className="flex items-center gap-[3px] rounded-[7px] border border-dashed border-[#cbd5e1] px-[7px] py-[3px] text-[#94a3b8] text-[11px] font-['Geist:Medium'] font-medium"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="3"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>Tags</span>}
                    {r.tags && r.tags.map((t) => <span key={t.l} className="rounded-[6px] px-[7px] py-[2px] text-[11px] font-['Geist:Medium'] font-medium" style={{ background: t.bg, color: t.c }}>{t.l}</span>)}
                  </div>
                  <div className="flex items-center gap-[4px]">
                    {r.tmpl && <span className="flex items-center gap-[2px] rounded-[5px] bg-[#fef3c7] px-[5px] py-[2px] text-[#b45309] text-[10px] font-['Geist:SemiBold'] font-semibold"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#b45309" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /></svg>{r.tmpl}</span>}
                    {r.person && <span className="size-[18px] rounded-full bg-[#eceff3] flex items-center justify-center"><PersonIc /></span>}
                    {r.dot && <span className="size-[18px] rounded-full flex items-center justify-center text-white font-['Geist:SemiBold'] font-semibold text-[10px]" style={{ background: r.dot.c }}>{r.dot.l}</span>}
                  </div>
                  <Typography className="font-['Geist:Regular'] text-[#9ca3af] text-[11px]">{r.date}</Typography>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* empty chat state */}
        <div className="flex-1 bg-[#fafbfc] flex flex-col items-center justify-center relative">
          <div className="size-[88px] rounded-full bg-[#eef1f4] flex items-center justify-center mb-[20px]">
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#aab4c0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
          </div>
          <Typography className="font-['Geist:Medium'] font-medium text-[#94a3b8] text-[16px]">Select a conversation to start messaging</Typography>
          {/* floating widget */}
          <div className="absolute bottom-[20px] right-[20px] size-[44px] rounded-full bg-white border border-[#e5e7eb] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.25)] flex items-center justify-center">
            <div className="size-[26px] rounded-full" style={{ background: 'conic-gradient(from 180deg, #06b349, #25d366, #1877F2, #DD2A7B, #06b349)' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// MOCKUP 2 — No-Code Flow Builder
// ══════════════════════════════════════════════════════════════════════════════
function FlowBuilderDashboard() {
  const [ref, inView] = useInView<HTMLDivElement>(0.15);

  const NAV: { label: string; icon: ReactNode; active?: boolean; chevron?: boolean; expanded?: boolean; sub?: { l: string; active?: boolean }[] }[] = [
    { label: 'Overview', icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /></svg> },
    { label: 'Inbox', icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg> },
    { label: 'Campaigns', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></svg> },
    { label: 'CRM', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
    { label: 'Automations', active: true, expanded: true, sub: [{ l: 'WhatsApp Automation', active: true }, { l: 'WhatsApp Forms' }, { l: 'Form Submissions' }], icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg> },
    { label: 'Instagram', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg> },
    { label: 'Appointments', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg> },
    { label: 'Commerce', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg> },
    { label: 'Data Store', icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg> },
    { label: 'Reports', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></svg> },
    { label: 'Ads', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" /></svg> },
    { label: 'AI', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4" /><line x1="8" y1="16" x2="8" y2="16" /><line x1="16" y1="16" x2="16" y2="16" /></svg> },
    { label: 'Petpooja', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l1-5h16l1 5" /><path d="M4 9v11h16V9" /><path d="M9 20v-6h6v6" /></svg> },
    { label: 'Account Settings', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg> },
  ];

  const ico = (p: ReactNode) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{p}</svg>;
  const TRIGGERS = [
    { t: 'Starting Step', s: 'Flow entry point', c: '#06b349', icon: ico(<polygon points="5 3 19 12 5 21 5 3" />) },
    { t: 'Cron Trigger', s: 'Recurring schedule (cron)', c: '#7c5cff', icon: ico(<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>) },
    { t: 'Tag Assigned', s: 'When a contact gets a tag', c: '#f59e0b', icon: ico(<><path d="M20.59 13.41 13.42 20.6a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></>) },
    { t: 'Webhook Trigger', s: 'External API trigger', c: '#8b5cf6', icon: ico(<><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></>) },
    { t: 'Campaign Button Trigger', s: 'Triggered by campaign button clic…', c: '#ec4899', icon: ico(<><path d="m3 11 18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></>) },
    { t: 'Google Sheet Trigger', s: 'Trigger on new row', c: '#16a34a', icon: ico(<><rect x="4" y="3" width="16" height="18" rx="2" /><line x1="9" y1="9" x2="15" y2="9" /><line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="13" y2="17" /></>) },
    { t: 'Order Created', s: 'Trigger on new order', c: '#10b981', icon: ico(<><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></>) },
    { t: 'Order Updated', s: 'Trigger on order update', c: '#1f2937', icon: ico(<><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /></>) },
    { t: 'Abandoned Cart', s: 'Trigger on abandoned cart', c: '#06b349', icon: ico(<><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></>) },
    { t: 'New Subscriber', s: 'Trigger on new customer', c: '#06b349', icon: ico(<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" y1="8" x2="19" y2="14" /><line x1="22" y1="11" x2="16" y2="11" /></>) },
    { t: 'Order Shipped', s: 'Trigger when order ships', c: '#06b349', icon: ico(<><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></>) },
    { t: 'Out For Delivery', s: 'Trigger when order is out', c: '#06b349', icon: ico(<><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>) },
    { t: 'Order Delivered', s: 'Trigger when delivered', c: '#06b349', icon: ico(<><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>) },
    { t: 'Order Paid', s: 'Trigger when paid', c: '#06b349', icon: ico(<><rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" /></>) },
  ];

  return (
    <div ref={ref} className={`w-full max-w-[1180px] bg-white rounded-[16px] border border-[#e0dac6] shadow-[0_40px_90px_-40px_rgba(11,31,26,0.55)] overflow-hidden transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[28px]'}`}>
      {/* browser chrome */}
      <div className="h-[38px] bg-[#f1eee5] border-b border-[#e5e1d4] flex items-center px-[16px] gap-[8px]">
        <div className="flex gap-[7px]"><span className="size-[11px] rounded-full bg-[#ff5f56]" /><span className="size-[11px] rounded-full bg-[#ffbd2e]" /><span className="size-[11px] rounded-full bg-[#27c93f]" /></div>
        <div className="mx-auto bg-white border border-[#e5e1d4] rounded-[7px] px-[16px] py-[3px] flex items-center gap-[7px]"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg><span className="font-['Courier_Prime'] text-[#9ca3af] text-[11px]">app.wenext.ai</span></div>
      </div>

      {/* app top bar */}
      <div className="h-[56px] bg-white border-b border-[#edf0f4] flex items-center justify-between px-[16px]">
        <div className="flex items-center gap-[8px] w-[200px]">
          <div className="size-[28px] rounded-[8px] bg-[#06b349] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></div>
          <span className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[20px] tracking-[-0.5px]">wenext</span>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="w-[290px] h-[38px] rounded-[10px] border border-[#e5e7eb] bg-[#f8fafc] flex items-center px-[12px] gap-[8px]">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            <span className="text-[#9ca3af] text-[14px] flex-1">Ask AI...</span>
            <span className="bg-white border border-[#e5e7eb] rounded-[5px] px-[6px] py-[1px] font-['Courier_Prime'] text-[#9ca3af] text-[11px]">⌘ K</span>
          </div>
          <div className="h-[38px] rounded-[10px] border border-[#bfe9cd] bg-[#eafaf0] flex items-center px-[14px] gap-[7px]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#06b349" stroke="#06b349" strokeWidth="1.5"><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" /></svg>
            <span className="font-['Geist:Medium'] font-medium text-[#06824f] text-[14px]">Ask AI</span>
          </div>
        </div>
        <div className="flex items-center gap-[12px]">
          <span className="bg-[#06b349] text-white font-['Geist:Medium'] font-medium text-[12px] rounded-full px-[12px] py-[5px]">Basic</span>
          <div className="bg-[#0b1f17] rounded-full px-[12px] py-[6px] flex items-center gap-[6px]"><svg width="13" height="13" viewBox="0 0 24 24" fill="#06b349"><circle cx="12" cy="12" r="9" /></svg><span className="text-white text-[12px] font-['Geist:Medium'] font-medium">AI Credits: <span className="text-[#4ade80]">486.50</span></span></div>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
          <div className="flex items-center gap-[8px]">
            <div className="size-[34px] rounded-[9px] bg-[#eceff3] flex items-center justify-center font-['Geist:SemiBold'] font-semibold text-[#64748b] text-[14px]">P</div>
            <div className="leading-none">
              <div className="flex items-center gap-[3px]"><span className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[13px]">Prathik</span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg></div>
              <span className="font-['Courier_Prime'] text-[#9ca3af] text-[11px]">+91 98765 43210</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[660px]">
        {/* sidebar */}
        <div className="w-[210px] border-r border-[#edf0f4] bg-white flex flex-col">
          <div className="flex-1 overflow-hidden py-[10px] px-[10px] flex flex-col gap-[2px]">
            {NAV.map((n) => (
              <div key={n.label}>
                <div className={`flex items-center gap-[11px] px-[12px] py-[8px] rounded-[9px] cursor-pointer ${n.active ? 'bg-[#06b349] text-white' : 'text-[#475569] hover:bg-[#f4f6f8]'}`}>
                  <span className={n.active ? 'text-white' : 'text-[#64748b]'}>{n.icon}</span>
                  <span className="font-['Geist:Medium'] font-medium text-[13.5px] flex-1">{n.label}</span>
                  {n.expanded ? <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg> : n.chevron ? <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg> : null}
                </div>
                {n.expanded && n.sub && (
                  <div className="ml-[20px] mt-[3px] mb-[3px] pl-[14px] border-l border-[#edf0f4] flex flex-col gap-[2px]">
                    {n.sub.map((s) => (
                      <div key={s.l} className={`px-[12px] py-[7px] rounded-[8px] cursor-pointer ${s.active ? 'bg-[#eef1f4] text-[#0c221f]' : 'text-[#64748b] hover:bg-[#f4f6f8]'}`}><span className={`text-[12.5px] ${s.active ? "font-['Geist:Medium'] font-medium" : "font-['Geist:Regular']"}`}>{s.l}</span></div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="m-[10px] rounded-[12px] border border-[#edf0f4] bg-[#f8fafc] p-[10px] flex items-center gap-[9px]">
            <div className="size-[34px] rounded-[10px] bg-[#e8f9ee] flex items-center justify-center"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4" /><line x1="8" y1="16" x2="8" y2="16" /><line x1="16" y1="16" x2="16" y2="16" /></svg></div>
            <div className="flex-1 min-w-0"><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[12px] leading-none">Nexus AI</Typography><Typography className="font-['Geist:Regular'] text-[#9ca3af] text-[10px] mt-[3px] truncate">Open the full-page AI wo…</Typography></div>
            <div className="w-[32px] h-[18px] rounded-full bg-[#d6dae0] p-[2px]"><div className="size-[14px] rounded-full bg-white shadow" /></div>
          </div>
        </div>

        {/* flow area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* flow header bar */}
          <div className="h-[54px] border-b border-[#edf0f4] bg-white flex items-center justify-between px-[16px]">
            <div className="flex items-center gap-[12px]">
              <div className="size-[30px] rounded-[8px] border border-[#e5e7eb] flex items-center justify-center"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg></div>
              <div className="flex items-center gap-[8px]">
                <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[15px]">Untitled Flow</Typography>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z" /></svg>
              </div>
              <span className="bg-[#eceff3] text-[#64748b] rounded-[6px] px-[9px] py-[3px] text-[12px] font-['Geist:Medium'] font-medium">Draft</span>
            </div>
            <div className="flex items-center gap-[8px]">
              <div className="flex items-center gap-[5px] text-[#94a3b8] px-[8px]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" /></svg><span className="text-[13px] font-['Geist:Medium'] font-medium">Undo</span></div>
              <div className="flex items-center gap-[5px] text-[#94a3b8] px-[8px]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" /></svg><span className="text-[13px] font-['Geist:Medium'] font-medium">Redo</span></div>
              <div className="flex items-center gap-[6px] rounded-[8px] border border-[#e5e7eb] px-[12px] py-[7px]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" /></svg><span className="text-[#475569] text-[13px] font-['Geist:Medium'] font-medium">Save</span></div>
              <div className="flex items-center gap-[6px] rounded-[8px] bg-[#06b349] px-[14px] py-[7px]"><svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg><span className="text-white text-[13px] font-['Geist:Medium'] font-medium">Publish</span></div>
              <div className="flex items-center gap-[6px] rounded-[8px] border border-[#e5e7eb] px-[12px] py-[7px]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg><span className="text-[#475569] text-[13px] font-['Geist:Medium'] font-medium">Validation</span></div>
              <div className="size-[34px] rounded-[8px] border border-[#e5e7eb] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="#475569"><circle cx="12" cy="5" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="12" cy="19" r="1.6" /></svg></div>
            </div>
          </div>

          <div className="flex-1 flex min-h-0">
            {/* node palette */}
            <div className="w-[268px] border-r border-[#edf0f4] bg-white flex flex-col">
              <div className="p-[14px] flex items-center gap-[8px]">
                <div className="flex-1 h-[38px] rounded-[10px] border border-[#e5e7eb] flex items-center px-[12px] gap-[8px]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg><span className="text-[#9ca3af] text-[13px]">Search nodes...</span></div>
                <div className="size-[38px] rounded-[10px] bg-[#06b349] flex items-center justify-center"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg></div>
              </div>
              <div className="px-[16px] pb-[8px] flex items-center gap-[8px]">
                <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[14px]">Triggers</Typography>
                <span className="bg-[#eceff3] text-[#64748b] rounded-full px-[8px] py-[1px] text-[11px] font-['Geist:SemiBold'] font-semibold">18</span>
              </div>
              <div className="flex-1 overflow-hidden px-[12px] flex flex-col gap-[7px]">
                {TRIGGERS.map((tr) => (
                  <div key={tr.t} className="flex items-center gap-[11px] rounded-[11px] border border-[#edf0f4] px-[11px] py-[9px] hover:border-[#cbd5e1] hover:shadow-sm cursor-grab bg-white">
                    <div className="size-[34px] rounded-[9px] flex items-center justify-center shrink-0" style={{ background: tr.c }}>{tr.icon}</div>
                    <div className="min-w-0">
                      <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[13px] leading-none truncate">{tr.t}</Typography>
                      <Typography className="font-['Geist:Regular'] text-[#94a3b8] text-[11.5px] mt-[3px] truncate">{tr.s}</Typography>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* canvas */}
            <div className="flex-1 relative overflow-hidden bg-[#fbfbf9]" style={{ backgroundImage: 'radial-gradient(#d8d3c4 1.2px, transparent 1.2px)', backgroundSize: '22px 22px' }}>
              {/* toolbar */}
              <div className="absolute top-[16px] left-[16px] flex items-center bg-white border border-[#e5e7eb] rounded-[10px] shadow-sm overflow-hidden">
                {[
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>,
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="8" y1="11" x2="14" y2="11" /></svg>,
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" /></svg>,
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" /></svg>,
                ].map((g, i) => (
                  <div key={i} className={`size-[34px] flex items-center justify-center ${i < 3 ? 'border-r border-[#edf0f4]' : ''}`}>{g}</div>
                ))}
              </div>
              {/* ready pill */}
              <div className="absolute top-[16px] left-1/2 -translate-x-1/2 flex items-center gap-[7px] bg-white border border-[#e5e7eb] rounded-full px-[12px] py-[6px] shadow-sm"><span className="size-[7px] rounded-full bg-[#9ca3af]" /><Typography className="font-['Geist:Medium'] font-medium text-[#64748b] text-[12px]">Ready</Typography></div>

              {/* starting step node */}
              <div className="absolute" style={{ top: '160px', left: '52%' }}>
                <div className="w-[250px] bg-white rounded-[14px] border border-[#e5e7eb] shadow-[0_18px_44px_-22px_rgba(11,31,26,0.4)] p-[16px]">
                  <div className="flex items-center gap-[11px] mb-[12px]">
                    <div className="size-[36px] rounded-[10px] bg-[#06b349] flex items-center justify-center"><svg width="17" height="17" viewBox="0 0 24 24" fill="white" stroke="white"><polygon points="5 3 19 12 5 21 5 3" /></svg></div>
                    <div>
                      <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[14px] leading-none">Starting Step</Typography>
                      <Typography className="font-['Geist:Regular'] text-[#94a3b8] text-[12px] mt-[4px]">Message Keyword</Typography>
                    </div>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    {['hello', 'hi', 'start'].map((k) => <span key={k} className="bg-[#f1f3f6] text-[#475569] rounded-[6px] px-[9px] py-[3px] text-[12px] font-['Geist:Medium'] font-medium">{k}</span>)}
                  </div>
                </div>
                {/* connection handle */}
                <div className="flex justify-center mt-[2px]"><div className="w-[2px] h-[14px] bg-[#cbd5e1]" /></div>
                <div className="flex justify-center"><span className="size-[11px] rounded-full bg-white border-2 border-[#06b349]" /></div>
              </div>

              {/* minimap */}
              <div className="absolute bottom-[16px] left-[16px] w-[150px] h-[92px] bg-white border border-[#e5e7eb] rounded-[10px] shadow-sm flex items-center justify-center">
                <div className="w-[44px] h-[5px] rounded-full bg-[#06b349]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// MOCKUP 3 — Social Media Scheduler
// ══════════════════════════════════════════════════════════════════════════════
function SocialSchedulerDashboard() {
  const [ref, inView] = useInView<HTMLDivElement>(0.15);

  const NAV: { label: string; icon: ReactNode; active?: boolean; chevron?: boolean; expanded?: boolean; sub?: { l: string; active?: boolean }[] }[] = [
    { label: 'Overview', icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /></svg> },
    { label: 'Inbox', icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg> },
    { label: 'Campaigns', active: true, expanded: true, sub: [{ l: 'Message Templates' }, { l: 'WhatsApp Campaigns' }, { l: 'Social Media Posts', active: true }, { l: 'LinkedIn Posts' }], icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></svg> },
    { label: 'CRM', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
    { label: 'Automations', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg> },
    { label: 'Instagram', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg> },
    { label: 'Appointments', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg> },
    { label: 'Commerce', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg> },
    { label: 'Data Store', icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg> },
    { label: 'Reports', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></svg> },
    { label: 'Ads', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" /></svg> },
    { label: 'AI', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4" /><line x1="8" y1="16" x2="8" y2="16" /><line x1="16" y1="16" x2="16" y2="16" /></svg> },
    { label: 'Petpooja', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l1-5h16l1 5" /><path d="M4 9v11h16V9" /><path d="M9 20v-6h6v6" /></svg> },
  ];

  const posts = [
    { cap: 'Are you ready to take your business to the next level? …', date: 'Jun 11, 2026' },
    { cap: 'What if your next adventure began right outside your…', date: 'Jun 11, 2026' },
    { cap: 'No caption', date: 'Feb 23, 2026' },
    { cap: 'Exiting offers', date: 'Feb 23, 2026' },
    { cap: 'Big festive sale is live 🎉 Don’t miss out…', date: 'Feb 23, 2026' },
  ];
  const FbBadge = () => <div className="size-[26px] rounded-[8px] bg-[#1877F2] flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56V12h2.76l-.44 2.89h-2.32v6.99A10 10 0 0 0 22 12z" /></svg></div>;
  const ImgPlaceholder = () => (
    <div className="w-full h-[150px] flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #eef1f4 0%, #e6eaef 100%)' }}>
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#b8c0cb" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
    </div>
  );

  return (
    <div ref={ref} className={`w-full max-w-[1180px] bg-white rounded-[16px] border border-[#e0dac6] shadow-[0_40px_90px_-40px_rgba(11,31,26,0.55)] overflow-hidden transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[28px]'}`}>
      {/* browser chrome */}
      <div className="h-[38px] bg-[#f1eee5] border-b border-[#e5e1d4] flex items-center px-[16px] gap-[8px]">
        <div className="flex gap-[7px]"><span className="size-[11px] rounded-full bg-[#ff5f56]" /><span className="size-[11px] rounded-full bg-[#ffbd2e]" /><span className="size-[11px] rounded-full bg-[#27c93f]" /></div>
        <div className="mx-auto bg-white border border-[#e5e1d4] rounded-[7px] px-[16px] py-[3px] flex items-center gap-[7px]"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg><span className="font-['Courier_Prime'] text-[#9ca3af] text-[11px]">app.wenext.ai</span></div>
      </div>

      {/* app top bar */}
      <div className="h-[56px] bg-white border-b border-[#edf0f4] flex items-center justify-between px-[16px]">
        <div className="flex items-center gap-[8px] w-[200px]">
          <div className="size-[28px] rounded-[8px] bg-[#06b349] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></div>
          <span className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[20px] tracking-[-0.5px]">wenext</span>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="w-[290px] h-[38px] rounded-[10px] border border-[#e5e7eb] bg-[#f8fafc] flex items-center px-[12px] gap-[8px]">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            <span className="text-[#9ca3af] text-[14px] flex-1">Ask AI...</span>
            <span className="bg-white border border-[#e5e7eb] rounded-[5px] px-[6px] py-[1px] font-['Courier_Prime'] text-[#9ca3af] text-[11px]">⌘ K</span>
          </div>
          <div className="h-[38px] rounded-[10px] border border-[#bfe9cd] bg-[#eafaf0] flex items-center px-[14px] gap-[7px]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#06b349" stroke="#06b349" strokeWidth="1.5"><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" /></svg>
            <span className="font-['Geist:Medium'] font-medium text-[#06824f] text-[14px]">Ask AI</span>
          </div>
        </div>
        <div className="flex items-center gap-[12px]">
          <span className="bg-[#06b349] text-white font-['Geist:Medium'] font-medium text-[12px] rounded-full px-[12px] py-[5px]">Basic</span>
          <div className="bg-[#0b1f17] rounded-full px-[12px] py-[6px] flex items-center gap-[6px]"><svg width="13" height="13" viewBox="0 0 24 24" fill="#06b349"><circle cx="12" cy="12" r="9" /></svg><span className="text-white text-[12px] font-['Geist:Medium'] font-medium">AI Credits: <span className="text-[#4ade80]">486.50</span></span></div>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
          <div className="flex items-center gap-[8px]">
            <div className="size-[34px] rounded-[9px] bg-[#eceff3] flex items-center justify-center font-['Geist:SemiBold'] font-semibold text-[#64748b] text-[14px]">P</div>
            <div className="leading-none">
              <div className="flex items-center gap-[3px]"><span className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[13px]">Prathik</span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg></div>
              <span className="font-['Courier_Prime'] text-[#9ca3af] text-[11px]">+91 98765 43210</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[660px]">
        {/* sidebar */}
        <div className="w-[210px] border-r border-[#edf0f4] bg-white flex flex-col">
          <div className="flex-1 overflow-hidden py-[10px] px-[10px] flex flex-col gap-[2px]">
            {NAV.map((n) => (
              <div key={n.label}>
                <div className={`flex items-center gap-[11px] px-[12px] py-[8px] rounded-[9px] cursor-pointer ${n.active ? 'bg-[#06b349] text-white' : 'text-[#475569] hover:bg-[#f4f6f8]'}`}>
                  <span className={n.active ? 'text-white' : 'text-[#64748b]'}>{n.icon}</span>
                  <span className="font-['Geist:Medium'] font-medium text-[13.5px] flex-1">{n.label}</span>
                  {n.expanded ? <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg> : n.chevron ? <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg> : null}
                </div>
                {n.expanded && n.sub && (
                  <div className="ml-[20px] mt-[3px] mb-[3px] pl-[14px] border-l border-[#edf0f4] flex flex-col gap-[2px]">
                    {n.sub.map((s) => (
                      <div key={s.l} className={`px-[12px] py-[7px] rounded-[8px] cursor-pointer ${s.active ? 'bg-[#eef1f4] text-[#0c221f]' : 'text-[#64748b] hover:bg-[#f4f6f8]'}`}><span className={`text-[12.5px] ${s.active ? "font-['Geist:Medium'] font-medium" : "font-['Geist:Regular']"}`}>{s.l}</span></div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="m-[10px] rounded-[12px] border border-[#edf0f4] bg-[#f8fafc] p-[10px] flex items-center gap-[9px]">
            <div className="size-[34px] rounded-[10px] bg-[#e8f9ee] flex items-center justify-center"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4" /><line x1="8" y1="16" x2="8" y2="16" /><line x1="16" y1="16" x2="16" y2="16" /></svg></div>
            <div className="flex-1 min-w-0"><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[12px] leading-none">Nexus AI</Typography><Typography className="font-['Geist:Regular'] text-[#9ca3af] text-[10px] mt-[3px] truncate">Open the full-page AI wo…</Typography></div>
            <div className="w-[32px] h-[18px] rounded-full bg-[#d6dae0] p-[2px]"><div className="size-[14px] rounded-full bg-white shadow" /></div>
          </div>
        </div>

        {/* main content */}
        <div className="flex-1 min-w-0 bg-[#fbfcfd] flex flex-col">
          {/* header */}
          <div className="px-[28px] pt-[24px] pb-[16px] flex items-start justify-between">
            <div>
              <div className="flex items-center gap-[8px]"><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[26px] tracking-[-0.6px]">Social Media Posts</Typography><svg width="20" height="20" viewBox="0 0 24 24" fill="#f59e0b"><path d="M12 2l1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6z" /></svg></div>
              <Typography className="font-['Geist:Regular'] text-[#64748b] text-[14px] mt-[5px]">Create, manage and publish content that drives conversations and revenue</Typography>
            </div>
            <div className="flex items-center gap-[12px]">
              <div className="h-[42px] rounded-[10px] border border-[#e5e7eb] bg-white flex items-center px-[14px] gap-[8px]"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg><span className="text-[#475569] text-[14px] font-['Geist:Medium'] font-medium">All Platforms</span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg></div>
              <div className="h-[42px] rounded-[10px] bg-[#06b349] flex items-center px-[16px] gap-[7px]"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg><span className="text-white text-[14px] font-['Geist:Medium'] font-medium">Create Post</span></div>
            </div>
          </div>
          {/* tabs */}
          <div className="px-[28px] flex items-center gap-[10px] border-b border-[#edf0f4] pb-3">
            <span className="font-['Geist:Medium'] font-medium text-[#64748b] text-[15px] px-[14px]">Published</span>
            <span className="font-['Geist:Medium'] font-medium text-[#06824f] text-[15px] border border-[#06b349] rounded-[8px] px-[14px] py-[8px] -mb-px bg-[#f3fbf5]">Scheduled</span>
          </div>
          {/* card grid */}
          <div className="flex-1 overflow-hidden p-[24px]">
            <div className="grid grid-cols-4 gap-[18px]">
              {posts.map((p, i) => (
                <div key={i} className="rounded-[14px] border border-[#e8ebef] bg-white overflow-hidden shadow-[0_4px_16px_-10px_rgba(11,31,26,0.25)] hover:shadow-[0_14px_30px_-16px_rgba(11,31,26,0.3)] transition-shadow duration-200">
                  <div className="relative">
                    <ImgPlaceholder />
                    <div className="absolute top-[12px] left-[12px]"><FbBadge /></div>
                    <div className="absolute top-[12px] right-[12px] bg-[#fef3c7] text-[#b45309] rounded-[7px] px-[9px] py-[3px] text-[11px] font-['Geist:Medium'] font-medium">Scheduled</div>
                  </div>
                  <div className="p-[14px]">
                    <Typography className="font-['Geist:Medium'] font-medium text-[#0c221f] text-[13.5px] leading-[1.35] line-clamp-2 min-h-[36px]">{p.cap}</Typography>
                    <Typography className="font-['Geist:Regular'] text-[#9ca3af] text-[12px] mt-[6px]">{p.date}</Typography>
                    <div className="flex items-center gap-[16px] mt-[12px] pt-[12px] border-t border-[#f1f3f6]">
                      <div className="flex items-center gap-[5px] text-[#94a3b8]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg><Typography className="text-[12px] font-['Geist:Medium'] font-medium"><span className="text-[#475569]">0</span> Comments</Typography></div>
                      <div className="flex items-center gap-[5px] text-[#94a3b8]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg><Typography className="text-[12px] font-['Geist:Medium'] font-medium"><span className="text-[#475569]">0</span> Likes</Typography></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// MOCKUP 4 — Instagram Automation
// ══════════════════════════════════════════════════════════════════════════════
const IG_GRAD = 'linear-gradient(45deg,#F58529 0%,#DD2A7B 45%,#8134AF 100%)';
function InstagramAutomationDashboard() {
  const [ref, inView] = useInView<HTMLDivElement>(0.15);

  const NAV: { label: string; icon: ReactNode; active?: boolean; chevron?: boolean; expanded?: boolean; sub?: { l: string; active?: boolean }[] }[] = [
    { label: 'Overview', icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /></svg> },
    { label: 'Inbox', icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg> },
    { label: 'Campaigns', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></svg> },
    { label: 'CRM', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
    { label: 'Automations', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg> },
    { label: 'Instagram', active: true, expanded: true, sub: [{ l: 'Instagram Posts' }, { l: 'Instagram Insights' }, { l: 'Instagram Automations', active: true }, { l: 'Automation Leads' }, { l: 'Instagram Orders' }], icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg> },
    { label: 'Appointments', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg> },
    { label: 'Commerce', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg> },
    { label: 'Data Store', icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg> },
    { label: 'Reports', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></svg> },
    { label: 'AI', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4" /><line x1="8" y1="16" x2="8" y2="16" /><line x1="16" y1="16" x2="16" y2="16" /></svg> },
    { label: 'Account Settings', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg> },
    { label: 'Support', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg> },
  ];

  const igico = (p: ReactNode, c: string) => <div className="size-[36px] rounded-[10px] flex items-center justify-center shrink-0" style={{ background: c }}><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{p}</svg></div>;
  const sections = [
    {
      cat: 'INPUTS', hint: 'Collect data from the contact', nodes: [
        { t: 'Ask User', s: 'Pause for reply, save as variable', icon: igico(<><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><line x1="9" y1="10" x2="9" y2="13" /><line x1="15" y1="10" x2="15" y2="13" /></>, '#7c3aed') },
      ],
    },
    {
      cat: 'ACTIONS', hint: 'Send a message', nodes: [
        { t: 'Send DM', s: 'Plain text direct message', icon: igico(<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />, '#ec4899') },
        { t: 'AI Response', s: 'AI-generated DM with role + restrictions', icon: igico(<path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" />, '#8b5cf6') },
        { t: 'Send Template', s: 'Image card with up to 3 buttons', icon: igico(<><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></>, '#3b82f6') },
        { t: 'Send Carousel', s: 'Swipeable cards (2-10) with image + buttons', icon: igico(<><rect x="2" y="4" width="6" height="16" rx="1" /><rect x="9" y="4" width="6" height="16" rx="1" /><rect x="16" y="4" width="6" height="16" rx="1" /></>, '#6366f1') },
        { t: 'Send Rich Message', s: 'Long-form text (up to 640 chars) + 1-3 buttons', icon: igico(<><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="18" x2="14" y2="18" /></>, '#0ea5e9') },
        { t: 'Send Quick Reply', s: 'Prompt with up to 13 tappable options', icon: igico(<><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /><polyline points="9 11 12 14 16 9" /></>, '#ec4899') },
        { t: 'Send Media', s: 'Send an image or video as a DM', icon: igico(<><rect x="2" y="2" width="20" height="20" rx="2.18" /><line x1="7" y1="2" x2="7" y2="22" /><line x1="17" y1="2" x2="17" y2="22" /><line x1="2" y1="12" x2="22" y2="12" /></>, '#14b8a6') },
      ],
    },
    {
      cat: 'GATES', hint: 'Branch on a runtime check', nodes: [
        { t: 'Verify Follower', s: 'Branch on whether the contact follows you', icon: igico(<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><polyline points="17 11 19 13 23 9" /></>, '#ec4899') },
      ],
    },
  ];

  return (
    <div ref={ref} className={`w-full max-w-[1180px] bg-white rounded-[16px] border border-[#e0dac6] shadow-[0_40px_90px_-40px_rgba(11,31,26,0.55)] overflow-hidden transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[28px]'}`}>
      {/* browser chrome */}
      <div className="h-[38px] bg-[#f1eee5] border-b border-[#e5e1d4] flex items-center px-[16px] gap-[8px]">
        <div className="flex gap-[7px]"><span className="size-[11px] rounded-full bg-[#ff5f56]" /><span className="size-[11px] rounded-full bg-[#ffbd2e]" /><span className="size-[11px] rounded-full bg-[#27c93f]" /></div>
        <div className="mx-auto bg-white border border-[#e5e1d4] rounded-[7px] px-[16px] py-[3px] flex items-center gap-[7px]"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg><span className="font-['Courier_Prime'] text-[#9ca3af] text-[11px]">app.wenext.ai</span></div>
      </div>

      {/* app top bar */}
      <div className="h-[56px] bg-white border-b border-[#edf0f4] flex items-center justify-between px-[16px]">
        <div className="flex items-center gap-[8px] w-[200px]">
          <div className="size-[28px] rounded-[8px] bg-[#06b349] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></div>
          <span className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[20px] tracking-[-0.5px]">wenext</span>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="w-[290px] h-[38px] rounded-[10px] border border-[#e5e7eb] bg-[#f8fafc] flex items-center px-[12px] gap-[8px]">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            <span className="text-[#9ca3af] text-[14px] flex-1">Ask AI...</span>
            <span className="bg-white border border-[#e5e7eb] rounded-[5px] px-[6px] py-[1px] font-['Courier_Prime'] text-[#9ca3af] text-[11px]">⌘ K</span>
          </div>
          <div className="h-[38px] rounded-[10px] border border-[#bfe9cd] bg-[#eafaf0] flex items-center px-[14px] gap-[7px]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#06b349" stroke="#06b349" strokeWidth="1.5"><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" /></svg>
            <span className="font-['Geist:Medium'] font-medium text-[#06824f] text-[14px]">Ask AI</span>
          </div>
        </div>
        <div className="flex items-center gap-[12px]">
          <span className="bg-[#06b349] text-white font-['Geist:Medium'] font-medium text-[12px] rounded-full px-[12px] py-[5px]">Turbo</span>
          <div className="bg-[#0b1f17] rounded-full px-[12px] py-[6px] flex items-center gap-[6px]"><svg width="13" height="13" viewBox="0 0 24 24" fill="#06b349"><circle cx="12" cy="12" r="9" /></svg><span className="text-white text-[12px] font-['Geist:Medium'] font-medium">AI Credits: <span className="text-[#4ade80]">497.43</span></span></div>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
          <div className="flex items-center gap-[8px]">
            <div className="size-[34px] rounded-[9px] bg-[#eceff3] flex items-center justify-center font-['Geist:SemiBold'] font-semibold text-[#64748b] text-[14px]">P</div>
            <div className="leading-none">
              <div className="flex items-center gap-[3px]"><span className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[13px]">Prathik</span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg></div>
              <span className="font-['Courier_Prime'] text-[#9ca3af] text-[11px]">+91 98765 43210</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[680px]">
        {/* sidebar */}
        <div className="w-[210px] border-r border-[#edf0f4] bg-white flex flex-col">
          <div className="flex-1 overflow-hidden py-[10px] px-[10px] flex flex-col gap-[2px]">
            {NAV.map((n) => (
              <div key={n.label}>
                <div className={`flex items-center gap-[11px] px-[12px] py-[8px] rounded-[9px] cursor-pointer ${n.active ? 'bg-[#06b349] text-white' : 'text-[#475569] hover:bg-[#f4f6f8]'}`}>
                  <span className={n.active ? 'text-white' : 'text-[#64748b]'}>{n.icon}</span>
                  <span className="font-['Geist:Medium'] font-medium text-[13.5px] flex-1">{n.label}</span>
                  {n.expanded ? <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg> : n.chevron ? <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg> : null}
                </div>
                {n.expanded && n.sub && (
                  <div className="ml-[20px] mt-[3px] mb-[3px] pl-[14px] border-l border-[#edf0f4] flex flex-col gap-[2px]">
                    {n.sub.map((s) => (
                      <div key={s.l} className={`px-[12px] py-[7px] rounded-[8px] cursor-pointer ${s.active ? 'bg-[#eef1f4] text-[#0c221f]' : 'text-[#64748b] hover:bg-[#f4f6f8]'}`}><span className={`text-[12.5px] ${s.active ? "font-['Geist:Medium'] font-medium" : "font-['Geist:Regular']"}`}>{s.l}</span></div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="m-[10px] rounded-[12px] border border-[#edf0f4] bg-[#f8fafc] p-[10px] flex items-center gap-[9px]">
            <div className="size-[34px] rounded-[10px] bg-[#e8f9ee] flex items-center justify-center"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4" /><line x1="8" y1="16" x2="8" y2="16" /><line x1="16" y1="16" x2="16" y2="16" /></svg></div>
            <div className="flex-1 min-w-0"><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[12px] leading-none">Nexus AI</Typography><Typography className="font-['Geist:Regular'] text-[#9ca3af] text-[10px] mt-[3px] truncate">Open the full-page AI wo…</Typography></div>
            <div className="w-[32px] h-[18px] rounded-full bg-[#d6dae0] p-[2px]"><div className="size-[14px] rounded-full bg-white shadow" /></div>
          </div>
        </div>

        {/* flow area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* flow header bar */}
          <div className="h-[54px] border-b border-[#edf0f4] bg-white flex items-center justify-between px-[16px]">
            <div className="flex items-center gap-[12px]">
              <div className="size-[30px] rounded-[8px] border border-[#e5e7eb] flex items-center justify-center"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg></div>
              <div className="size-[30px] rounded-[8px] flex items-center justify-center" style={{ background: IG_GRAD }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></div>
              <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[15px]">Untitled Instagram flow</Typography>
              <span className="flex items-center gap-[5px] bg-[#e5f6e7] rounded-full px-[9px] py-[3px]"><span className="size-[6px] rounded-full bg-[#06b349]" /><span className="font-['Geist:Medium'] font-medium text-[#06824f] text-[11px]">Active</span></span>
              <span className="font-['Geist:Regular'] text-[#94a3b8] text-[12px]">1 · nodes</span>
              <span className="font-['Geist:Regular'] text-[#94a3b8] text-[12px]">0 · edges</span>
              <span className="bg-[#fdeef5] text-[#be185d] rounded-full px-[10px] py-[3px] text-[12px] font-['Geist:Medium'] font-medium">@vet_bees</span>
            </div>
            <div className="flex items-center gap-[12px]">
              <div className="flex items-center gap-[7px]"><div className="w-[36px] h-[20px] rounded-full bg-[#06b349] p-[2px] flex justify-end"><div className="size-[16px] rounded-full bg-white shadow" /></div><span className="font-['Geist:Medium'] font-medium text-[#06824f] text-[13px]">Active</span></div>
              <div className="flex items-center gap-[6px] rounded-[8px] bg-[#06b349] px-[16px] py-[8px]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" /></svg><span className="text-white text-[13px] font-['Geist:Medium'] font-medium">Save</span></div>
            </div>
          </div>

          <div className="flex-1 flex min-h-0">
            {/* node palette */}
            <div className="w-[290px] border-r border-[#edf0f4] bg-white flex flex-col">
              <div className="p-[14px] pb-[10px] flex items-start gap-[10px] border-b border-[#f1f3f6]">
                <div className="size-[34px] rounded-[10px] flex items-center justify-center shrink-0" style={{ background: IG_GRAD }}><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></div>
                <div className="flex-1"><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[14px] leading-none">Nodes</Typography><Typography className="font-['Geist:Regular'] text-[#94a3b8] text-[12px] mt-[3px]">Drag onto the canvas</Typography></div>
                <div className="size-[26px] rounded-[7px] border border-[#e5e7eb] flex items-center justify-center"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg></div>
              </div>
              <div className="px-[14px] py-[10px]">
                <div className="h-[36px] rounded-[10px] border border-[#e5e7eb] flex items-center px-[12px] gap-[8px]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg><span className="text-[#9ca3af] text-[13px]">Search nodes...</span></div>
              </div>
              <div className="flex-1 overflow-hidden px-[12px] flex flex-col gap-[14px]">
                {sections.map((sec) => (
                  <div key={sec.cat}>
                    <div className="flex items-center justify-between px-[4px] mb-[8px]">
                      <Typography className="font-['Geist:SemiBold'] font-semibold text-[#94a3b8] text-[11px] tracking-[0.08em]">{sec.cat}</Typography>
                      <Typography className="font-['Geist:Regular'] italic text-[#cbd5e1] text-[11px]">{sec.hint}</Typography>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                      {sec.nodes.map((nd) => (
                        <div key={nd.t} className="flex items-center gap-[11px] rounded-[12px] border border-[#edf0f4] px-[11px] py-[10px] hover:border-[#cbd5e1] hover:shadow-sm cursor-grab bg-white">
                          {nd.icon}
                          <div className="flex-1 min-w-0">
                            <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[13px] leading-none">{nd.t}</Typography>
                            <Typography className="font-['Geist:Regular'] text-[#94a3b8] text-[11.5px] mt-[4px] leading-[1.3]">{nd.s}</Typography>
                          </div>
                          <div className="grid grid-cols-2 gap-[2px] shrink-0">{[...Array(6)].map((_, k) => <span key={k} className="size-[2.5px] rounded-full bg-[#cbd5e1]" />)}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* canvas */}
            <div className="flex-1 relative overflow-hidden bg-[#fbfbf9]" style={{ backgroundImage: 'radial-gradient(#d8d3c4 1.2px, transparent 1.2px)', backgroundSize: '22px 22px' }}>
              <div className="absolute top-[16px] left-[16px] flex items-center bg-white border border-[#e5e7eb] rounded-[10px] shadow-sm overflow-hidden">
                {[
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>,
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="8" y1="11" x2="14" y2="11" /></svg>,
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" /></svg>,
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" /></svg>,
                ].map((g, i) => (<div key={i} className={`size-[34px] flex items-center justify-center ${i < 3 ? 'border-r border-[#edf0f4]' : ''}`}>{g}</div>))}
              </div>
              <div className="absolute top-[16px] left-1/2 -translate-x-1/2 flex items-center gap-[7px] bg-white border border-[#e5e7eb] rounded-full px-[12px] py-[6px] shadow-sm"><span className="size-[7px] rounded-full bg-[#06b349]" /><Typography className="font-['Geist:Medium'] font-medium text-[#06824f] text-[12px]">Active</Typography></div>

              {/* trigger node */}
              <div className="absolute" style={{ top: '180px', left: '50%', transform: 'translateX(-50%)' }}>
                <div className="w-[380px] bg-white rounded-[18px] border border-[#e8ebef] shadow-[0_24px_54px_-26px_rgba(11,31,26,0.45)] p-[26px]">
                  <Typography className="font-['Geist:SemiBold'] font-semibold text-[#94a3b8] text-[12px] tracking-[0.1em] mb-[16px]">TRIGGER</Typography>
                  <div className="flex items-center gap-[16px]">
                    <div className="size-[56px] rounded-[14px] flex items-center justify-center shrink-0" style={{ background: IG_GRAD }}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></div>
                    <div>
                      <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[24px] tracking-[-0.5px] leading-none">Instagram Trigger</Typography>
                      <div className="flex items-center gap-[8px] mt-[10px]"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg><Typography className="font-['Geist:Regular'] text-[#64748b] text-[17px]">DM received</Typography></div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-[2px]"><div className="w-[2px] h-[14px] bg-[#cbd5e1]" /></div>
                <div className="flex justify-center"><span className="size-[11px] rounded-full bg-white border-2 border-[#9333ea]" /></div>
              </div>

              {/* minimap */}
              {/* <div className="absolute bottom-[16px] right-[16px] w-[150px] h-[92px] bg-white border border-[#e5e7eb] rounded-[10px] shadow-sm flex items-center justify-center">
                <div className="w-[44px] h-[5px] rounded-full bg-[#9333ea]" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// MOCKUP 5 — Calendar Booking
// ══════════════════════════════════════════════════════════════════════════════
function BookingMock() {
  const [ref, inView] = useInView<HTMLDivElement>(0.3);
  const dates = [{ d: 'Mon', n: 12 }, { d: 'Tue', n: 13 }, { d: 'Wed', n: 14, sel: true }, { d: 'Thu', n: 15 }, { d: 'Fri', n: 16 }];
  const slots = [
    { t: '10:00', s: 'booked' }, { t: '11:30', s: 'open' }, { t: '1:00', s: 'open' },
    { t: '2:15', s: 'booked' }, { t: '3:30', s: 'sel' }, { t: '4:45', s: 'open' },
  ];
  return (
    <div ref={ref} className={`${cardBase} w-full max-w-[440px] h-[400px] flex flex-col transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[24px]'}`}>
      <div className="px-[20px] py-[14px] border-b border-[#eee7d6] flex items-center justify-between">
        <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[13px]">Book an appointment</Typography>
        <LivePill label="June" />
      </div>
      <div className="p-[18px] flex-1 flex flex-col">
        {/* date strip */}
        <div className="grid grid-cols-5 gap-[8px] mb-[18px]">
          {dates.map((d) => (
            <div key={d.n} className={`rounded-[10px] border py-[10px] flex flex-col items-center gap-[3px] ${d.sel ? 'bg-[#092511] border-[#092511]' : 'bg-[#faf8f1] border-[#eee7d6]'}`}>
              <Typography className={`font-['Courier_Prime'] text-[9px] uppercase ${d.sel ? 'text-[#7aaa88]' : 'text-[#9a9384]'}`}>{d.d}</Typography>
              <Typography className={`font-['Geist:SemiBold'] font-semibold text-[16px] ${d.sel ? 'text-white' : 'text-[#0c221f]'}`}>{d.n}</Typography>
            </div>
          ))}
        </div>
        <Typography className="font-['Courier_Prime'] text-[#9a9384] text-[10px] uppercase tracking-[0.08em] mb-[10px]">Available slots</Typography>
        <div className="grid grid-cols-3 gap-[8px]">
          {slots.map((s, i) => (
            <div key={i} className={`rounded-[9px] py-[10px] text-center border transition-all duration-300
              ${s.s === 'sel' ? 'bg-[#06b349] border-[#06b349]' : s.s === 'booked' ? 'bg-[#f0ece0] border-[#eee7d6] opacity-50' : 'bg-white border-[#cfe9d6] hover:border-[#06b349]'}`}
              style={{ opacity: inView ? (s.s === 'booked' ? 0.5 : 1) : 0, transform: inView ? 'translateY(0)' : 'translateY(8px)', transition: `all 0.4s ${i * 0.06}s` }}>
              <Typography className={`font-['Geist:Medium'] font-medium text-[13px] ${s.s === 'sel' ? 'text-white' : s.s === 'booked' ? 'text-[#9a9384] line-through' : 'text-[#0c221f]'}`}>{s.t}</Typography>
            </div>
          ))}
        </div>
        {/* confirm */}
        <div className="mt-auto rounded-[12px] bg-[#e5f6e7] border border-[rgba(6,179,73,0.25)] p-[14px] flex items-center gap-[12px]">
          <div className="size-[34px] rounded-full bg-[#06b349] flex items-center justify-center shrink-0"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></div>
          <div>
            <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[13px]">Booked · Wed 3:30 PM</Typography>
            <Typography className="font-['Geist:Regular'] text-[#3a4540] text-[11px] mt-[2px]">WhatsApp reminder set for 1 hr before</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// MOCKUP 6 — CRM & E-commerce Integrations (hub & spoke)
// ══════════════════════════════════════════════════════════════════════════════
function IntegrationsMock() {
  const [ref, inView] = useInView<HTMLDivElement>(0.3);
  // tiles positioned around a fixed 460x360 box; hub at center (230,180)
  const tiles = [
    { n: 'Shopify', l: 'S', c: '#95BF47', x: 40, y: 40 },
    { n: 'Razorpay', l: '₹', c: '#06b349', x: 40, y: 150 },
    { n: 'WooCommerce', l: 'W', c: '#7F54B3', x: 40, y: 260 },
    { n: 'Salesforce', l: 'sf', c: '#00A1E0', x: 360, y: 40 },
    { n: 'HubSpot', l: 'h', c: '#FF7A59', x: 360, y: 150 },
    { n: 'Zoho', l: 'Z', c: '#E42527', x: 360, y: 260 },
  ];
  const hub = { x: 230, y: 175 };
  return (
    <div ref={ref} className={`${cardBase} w-full max-w-[480px] h-[420px] relative overflow-hidden transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[24px]'}`}>
      <div className="px-[18px] py-[13px] border-b border-[#eee7d6] flex items-center justify-between relative z-10">
        <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[13px]">Connected apps</Typography>
        <div className="bg-[#e5f6e7] rounded-full px-[10px] py-[4px]"><Typography className="font-['Courier_Prime'] text-[#06824f] text-[10px]">100+ integrations</Typography></div>
      </div>
      <div className="relative" style={{ height: 360 }}>
        {/* spokes */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 460 360" preserveAspectRatio="none">
          {tiles.map((t, i) => (
            <g key={i}>
              <line x1={hub.x} y1={hub.y} x2={t.x} y2={t.y} stroke="#d2cbb8" strokeWidth="1.5" />
              <line x1={hub.x} y1={hub.y} x2={t.x} y2={t.y} stroke="#06b349" strokeWidth="1.5" strokeDasharray="5 9" style={{ animation: inView ? `dashFlow 1.4s linear ${i * 0.18}s infinite` : 'none' }} />
            </g>
          ))}
        </svg>
        {/* hub */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${(hub.x / 460) * 100}%`, top: `${(hub.y / 360) * 100}%` }}>
          <div className="size-[72px] rounded-[20px] bg-[#092511] flex items-center justify-center shadow-[0_0_40px_rgba(6,179,73,0.4)] border border-[rgba(6,179,73,0.4)]">
            <img alt="WeNext" src="/figma/imgWenextLarge.svg" className="h-[18px]" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
          </div>
        </div>
        {/* tiles */}
        {tiles.map((t, i) => (
          <div key={t.n} className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-[5px]"
            style={{ left: `${(t.x / 460) * 100}%`, top: `${(t.y / 360) * 100}%`, opacity: inView ? 1 : 0, transition: `opacity 0.5s ${0.2 + i * 0.1}s` }}>
            <div className="size-[46px] rounded-[13px] bg-white border border-[#e0dac6] flex items-center justify-center shadow-[0_8px_20px_-10px_rgba(11,31,26,0.4)] relative">
              <span className="font-['Geist:SemiBold'] font-semibold text-[16px] lowercase" style={{ color: t.c }}>{t.l}</span>
              <span className="absolute -bottom-[4px] -right-[4px] size-[16px] rounded-full bg-[#06b349] border-2 border-white flex items-center justify-center"><svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span>
            </div>
            <Typography className="font-['Geist:Medium'] font-medium text-[#0c221f] text-[10px]">{t.n}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// MOCKUP 7 — WhatsApp Automations
// ══════════════════════════════════════════════════════════════════════════════
function WhatsAppChatDashboard() {
  const [ref, inView] = useInView<HTMLDivElement>(0.15);

  const NAV: { label: string; icon: ReactNode; active?: boolean; chevron?: boolean }[] = [
    { label: 'Overview', icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /></svg> },
    { label: 'Inbox', active: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg> },
    { label: 'Campaigns', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></svg> },
    { label: 'CRM', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
    { label: 'Automations', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg> },
    { label: 'Instagram', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg> },
    { label: 'Appointments', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg> },
    { label: 'Commerce', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg> },
    { label: 'Data Store', icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg> },
    { label: 'Reports', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></svg> },
    { label: 'Ads', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" /></svg> },
    { label: 'AI', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4" /><line x1="8" y1="16" x2="8" y2="16" /><line x1="16" y1="16" x2="16" y2="16" /></svg> },
    { label: 'Petpooja', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l1-5h16l1 5" /><path d="M4 9v11h16V9" /><path d="M9 20v-6h6v6" /></svg> },
    { label: 'Account Settings', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg> },
    { label: 'Support', chevron: true, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg> },
  ];

  const convos = [
    { av: 'N', avBg: '#fde2e1', avC: '#d9534f', name: 'Nanne', star: '', prev: '🔔 LocalStack SQS push test', phone: '+919876543210', date: '06/08/2026', tagBtn: true, tmpl: '1', dot: { l: 'K', c: '#06b349' } },
    { av: 'P', avBg: '#cdeee8', avC: '#0a8f7a', name: 'Krishna Chaitanya', star: '🔴', prev: '💬 Message', phone: '+919876543210', date: '02/16/2026', tags: [{ l: 'VIP', bg: '#e0e7ff', c: '#4f46e5' }], dot: { l: 'P', c: '#ec4899' } },
    { av: '29', avBg: '#d8f3e3', avC: '#06b349', name: 'Hari Krishna', star: '⭐', prev: '💬 Message', phone: '+919876543210', date: '02/16/2026', tagBtn: true, dot: { l: 'T', c: '#ef4444' } },
    { av: 'G', avBg: '#d8f3e3', avC: '#06b349', name: 'Gadde Sai Uma Chow…', star: '', prev: '💬 Message', phone: '+919876543210', date: '02/15/2026', tags: [{ l: 'aaa', bg: '#eceff3', c: '#64748b' }], dot: { l: 'S', c: '#eab308' } },
    { av: 'P', avBg: '#d8f3e3', avC: '#06b349', name: 'Photonx Technologies …', star: '', prev: 'You: ✅ Form sent', phone: '+919876543210', date: '02/15/2026', tagBtn: true, dot: { l: 'S', c: '#eab308' }, active: true },
    { av: 'K', avBg: '#d8f3e3', avC: '#06b349', name: 'Aravindh', star: '', prev: 'You: 💬 Message', phone: '+919030311999', date: '02/15/2026', tagBtn: true, dot: { l: 'S', c: '#eab308' } },
    { av: 'P', avBg: '#cdeee8', avC: '#0a8f7a', name: 'PAVAN NAIDU🐦', star: '', prev: '💬 Message', phone: '+918801545914', date: '02/15/2026', tags: [{ l: 'aaa', bg: '#eceff3', c: '#64748b' }, { l: 'jiii', bg: '#eceff3', c: '#64748b' }, { l: '+1', bg: '#eceff3', c: '#64748b' }], tmpl: '1', person: true },
  ];

  const PhoneIc = () => <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>;
  const PersonIc = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" y1="8" x2="19" y2="14" /><line x1="22" y1="11" x2="16" y2="11" /></svg>;
  const Ticks = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#34b7f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 7 9.5 16 7 13.5" /><polyline points="23 7 14.5 16 14 15.5" /></svg>;
  const headerIcons = [
    <svg key="a" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
    <svg key="b" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
    <svg key="c" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>,
    <svg key="d" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>,
    <svg key="e" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>,
    <svg key="f" width="16" height="16" viewBox="0 0 24 24" fill="#94a3b8"><circle cx="12" cy="5" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="12" cy="19" r="1.6" /></svg>,
  ];

  return (
    <div ref={ref} className={`w-full max-w-[1180px] bg-white rounded-[16px] border border-[#e0dac6] shadow-[0_40px_90px_-40px_rgba(11,31,26,0.55)] overflow-hidden transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[28px]'}`}>
      {/* browser chrome */}
      <div className="h-[38px] bg-[#f1eee5] border-b border-[#e5e1d4] flex items-center px-[16px] gap-[8px]">
        <div className="flex gap-[7px]"><span className="size-[11px] rounded-full bg-[#ff5f56]" /><span className="size-[11px] rounded-full bg-[#ffbd2e]" /><span className="size-[11px] rounded-full bg-[#27c93f]" /></div>
        <div className="mx-auto bg-white border border-[#e5e1d4] rounded-[7px] px-[16px] py-[3px] flex items-center gap-[7px]"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg><span className="font-['Courier_Prime'] text-[#9ca3af] text-[11px]">app.wenext.ai</span></div>
      </div>

      {/* app top bar */}
      <div className="h-[56px] bg-white border-b border-[#edf0f4] flex items-center justify-between px-[16px]">
        <div className="flex items-center gap-[8px] w-[200px]">
          <div className="size-[28px] rounded-[8px] bg-[#06b349] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></div>
          <span className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[20px] tracking-[-0.5px]">wenext</span>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="w-[290px] h-[38px] rounded-[10px] border border-[#e5e7eb] bg-[#f8fafc] flex items-center px-[12px] gap-[8px]">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            <span className="text-[#9ca3af] text-[14px] flex-1">Ask AI...</span>
            <span className="bg-white border border-[#e5e7eb] rounded-[5px] px-[6px] py-[1px] font-['Courier_Prime'] text-[#9ca3af] text-[11px]">⌘ K</span>
          </div>
          <div className="h-[38px] rounded-[10px] border border-[#bfe9cd] bg-[#eafaf0] flex items-center px-[14px] gap-[7px]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#06b349" stroke="#06b349" strokeWidth="1.5"><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" /></svg>
            <span className="font-['Geist:Medium'] font-medium text-[#06824f] text-[14px]">Ask AI</span>
          </div>
        </div>
        <div className="flex items-center gap-[12px]">
          <span className="bg-[#06b349] text-white font-['Geist:Medium'] font-medium text-[12px] rounded-full px-[12px] py-[5px]">Basic</span>
          <div className="bg-[#0b1f17] rounded-full px-[12px] py-[6px] flex items-center gap-[6px]"><svg width="13" height="13" viewBox="0 0 24 24" fill="#06b349"><circle cx="12" cy="12" r="9" /></svg><span className="text-white text-[12px] font-['Geist:Medium'] font-medium">AI Credits: <span className="text-[#4ade80]">486.50</span></span></div>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
          <div className="flex items-center gap-[8px]">
            <div className="size-[34px] rounded-[9px] bg-[#eceff3] flex items-center justify-center font-['Geist:SemiBold'] font-semibold text-[#64748b] text-[14px]">P</div>
            <div className="leading-none">
              <div className="flex items-center gap-[3px]"><span className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[13px]">Prathik</span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg></div>
              <span className="font-['Courier_Prime'] text-[#9ca3af] text-[11px]">+91 98765 43210</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[680px]">
        {/* sidebar */}
        <div className="w-[206px] border-r border-[#edf0f4] bg-white flex flex-col shrink-0">
          <div className="flex-1 overflow-hidden py-[9px] px-[9px] flex flex-col gap-[1px]">
            {NAV.map((n) => (
              <div key={n.label} className={`flex items-center gap-[11px] px-[12px] py-[7px] rounded-[9px] cursor-pointer ${n.active ? 'bg-[#06b349] text-white' : 'text-[#475569] hover:bg-[#f4f6f8]'}`}>
                <span className={n.active ? 'text-white' : 'text-[#64748b]'}>{n.icon}</span>
                <span className="font-['Geist:Medium'] font-medium text-[13px] flex-1">{n.label}</span>
                {n.chevron && <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>}
              </div>
            ))}
          </div>
          <div className="m-[9px] rounded-[12px] border border-[#edf0f4] bg-[#f8fafc] p-[9px] flex items-center gap-[9px]">
            <div className="size-[32px] rounded-[10px] bg-[#e8f9ee] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4" /></svg></div>
            <div className="flex-1 min-w-0"><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[11px] leading-none">Nexus AI</Typography><Typography className="font-['Geist:Regular'] text-[#9ca3af] text-[10px] mt-[3px] truncate">Open the full-page AI wo…</Typography></div>
            <div className="w-[30px] h-[17px] rounded-full bg-[#d6dae0] p-[2px]"><div className="size-[13px] rounded-full bg-white shadow" /></div>
          </div>
        </div>

        {/* conversation list */}
        <div className="w-[330px] border-r border-[#edf0f4] bg-white flex flex-col shrink-0">
          <div className="px-[16px] pt-[14px] pb-[10px]">
            <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[18px] tracking-[-0.4px] mb-[12px]">Conversations</Typography>
            <div className="flex items-center gap-[8px] mb-[12px]">
              <div className="flex-1 h-[38px] rounded-[10px] border border-[#e5e7eb] flex items-center px-[11px] gap-[7px]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg><span className="text-[#9ca3af] text-[12.5px]">Search conversations...</span></div>
              <div className="size-[38px] rounded-[10px] border border-[#e5e7eb] flex items-center justify-center"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg></div>
            </div>
            <div className="flex items-center gap-[8px] mb-[12px]">
              {[{ ic: imgWhatsApp, a: true }, { ic: imgInstagram, a: false }, { ic: imgFacebook, a: false }].map((c, i) => (
                <div key={i} className={`size-[40px] rounded-[11px] flex items-center justify-center border ${c.a ? 'bg-white border-[#06b349] shadow-[0_0_0_1px_#06b349]' : 'bg-[#f8fafc] border-[#e5e7eb]'}`}><img alt="" src={c.ic} className="size-[20px]" /></div>
              ))}
              <div className="size-[40px] rounded-[11px] flex items-center justify-center border bg-[#f8fafc] border-[#e5e7eb]"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg></div>
            </div>
            <div className="flex items-center gap-[7px]">
              {['All', 'Mine', 'Unassigned'].map((f, i) => <span key={f} className={`rounded-full px-[13px] py-[5px] text-[12.5px] font-['Geist:Medium'] font-medium ${i === 0 ? 'bg-[#1f2937] text-white' : 'bg-[#eceff3] text-[#64748b]'}`}>{f}</span>)}
            </div>
          </div>
          <div className="flex-1 overflow-hidden">
            {convos.map((r, idx) => (
              <div key={idx} className={`flex gap-[10px] px-[14px] py-[11px] border-b border-[#f1f3f6] cursor-pointer ${r.active ? 'bg-[#eef6ee] border-l-[3px] border-l-[#06b349]' : 'hover:bg-[#f8fafc]'}`}>
                <div className="relative shrink-0">
                  <div className="size-[40px] rounded-full flex items-center justify-center font-['Geist:SemiBold'] font-semibold text-[13px]" style={{ background: r.avBg, color: r.avC }}>{r.av}</div>
                  {/* <div className="absolute -bottom-[1px] -right-[1px] size-[15px] rounded-full bg-white flex items-center justify-center"><img alt="" src={imgWhatsApp} className="size-[11px]" /></div> */}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-[5px]"><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[13.5px] truncate">{r.name}</Typography>{r.star && <span className="text-[10px]">{r.star}</span>}</div>
                  <Typography className="font-['Geist:Regular'] text-[#64748b] text-[12px] truncate mt-[2px]">{r.prev}</Typography>
                  <div className="flex items-center gap-[5px] mt-[3px]"><PhoneIc /><Typography className="font-['Geist:Regular'] text-[#9ca3af] text-[11.5px]">{r.phone}</Typography></div>
                </div>
                <div className="flex flex-col items-end justify-between shrink-0 gap-[5px]">
                  <div className="flex items-center gap-[3px]">
                    {r.tagBtn && <span className="flex items-center gap-[2px] rounded-[6px] border border-dashed border-[#cbd5e1] px-[6px] py-[2px] text-[#94a3b8] text-[10.5px] font-['Geist:Medium'] font-medium"><svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="3"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>Tags</span>}
                    {r.tags && r.tags.map((t) => <span key={t.l} className="rounded-[5px] px-[6px] py-[1px] text-[10.5px] font-['Geist:Medium'] font-medium" style={{ background: t.bg, color: t.c }}>{t.l}</span>)}
                  </div>
                  <div className="flex items-center gap-[4px]">
                    {r.tmpl && <span className="flex items-center gap-[2px] rounded-[5px] bg-[#fef3c7] px-[4px] py-[1px] text-[#b45309] text-[10px] font-['Geist:SemiBold'] font-semibold"><svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#b45309" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /></svg>{r.tmpl}</span>}
                    {r.person && <span className="size-[17px] rounded-full bg-[#eceff3] flex items-center justify-center"><PersonIc /></span>}
                    {r.dot && <span className="size-[17px] rounded-full flex items-center justify-center text-white font-['Geist:SemiBold'] font-semibold text-[9.5px]" style={{ background: r.dot.c }}>{r.dot.l}</span>}
                  </div>
                  <Typography className="font-['Geist:Regular'] text-[#9ca3af] text-[10.5px]">{r.date}</Typography>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* chat panel */}
        <div className="flex-1 min-w-0 flex flex-col bg-[#eef1f4]">
          {/* chat header */}
          <div className="h-[60px] bg-white border-b border-[#edf0f4] flex items-center justify-between px-[18px] shrink-0">
            <div className="flex items-center gap-[11px]">
              <div className="size-[36px] rounded-full bg-[#d8f3e3] flex items-center justify-center font-['Geist:SemiBold'] font-semibold text-[#06b349] text-[14px]">P</div>
              <div><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[14px] leading-none">Photonx Technologies Pvt Ltd</Typography><Typography className="font-['Geist:Regular'] text-[#9ca3af] text-[12px] mt-[4px]">+919876543210</Typography></div>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="flex items-center gap-[5px] border border-[#e5e7eb] rounded-[8px] px-[10px] py-[6px]"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg><span className="text-[#475569] text-[12.5px] font-['Geist:Medium'] font-medium">Priority</span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg></div>
              <div className="flex items-center gap-[5px] border border-[#f5b78a] bg-[#fff4ec] rounded-[8px] px-[10px] py-[6px]"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ea7a3b" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /></svg><span className="text-[#c2410c] text-[12.5px] font-['Geist:Medium'] font-medium">Expired</span></div>
              <div className="flex items-center gap-[4px]">{headerIcons.map((g, i) => <div key={i} className="size-[30px] rounded-[8px] hover:bg-[#f4f6f8] flex items-center justify-center">{g}</div>)}</div>
            </div>
          </div>

          {/* thread */}
          <div className="flex-1 overflow-hidden p-[22px] flex flex-col gap-[14px]">
            {/* inbound */}
            <div className="flex items-end gap-[8px] self-start max-w-[70%]">
              <div className="size-[26px] rounded-full bg-[#eceff3] flex items-center justify-center font-['Geist:SemiBold'] font-semibold text-[#64748b] text-[10px] shrink-0 border border-[#06b349]">P</div>
              <div className="bg-white rounded-[12px] rounded-bl-[3px] px-[13px] py-[8px] shadow-sm flex items-end gap-[8px]"><Typography className="text-[#0c221f] text-[13px]">hi carlo</Typography><Typography className="text-[#9ca3af] text-[10px]">10:04 AM</Typography></div>
            </div>
            {/* outbound welcome with buttons */}
            <div className="self-end max-w-[58%] bg-white rounded-[14px] rounded-tr-[4px] shadow-sm overflow-hidden">
              <div className="p-[15px]">
                <Typography className="text-[#0c221f] text-[13px] leading-[1.5]">👋 Hi  Photonx Technologies Pvt Ltd ! Welcome to Carlo Drive-In!</Typography>
                <Typography className="text-[#0c221f] text-[13px] leading-[1.5] mt-[8px]">Craving delicious food? You're in the right place 😋</Typography>
                <Typography className="text-[#0c221f] text-[13px] leading-[1.5] mt-[8px]">Order your favorites, explore our menu, or get help instantly.</Typography>
                <Typography className="text-[#0c221f] text-[13px] leading-[1.5] mt-[8px]">Please choose an option below:</Typography>
              </div>
              <div className="border-t border-[#eef1f4] flex flex-col">
                <div className="flex items-center justify-center gap-[7px] py-[10px] text-[#0a8ad6] border-b border-[#eef1f4]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0a8ad6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l1-5h16l1 5" /><path d="M4 9v11h16V9" /></svg><Typography className="text-[13px] font-['Geist:Medium'] font-medium">View stores</Typography></div>
                <div className="flex items-center justify-center gap-[7px] py-[10px] text-[#0a8ad6]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0a8ad6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg><Typography className="text-[13px] font-['Geist:Medium'] font-medium">Contact Us</Typography></div>
              </div>
              <div className="flex items-center justify-end gap-[3px] px-[12px] py-[6px]"><Typography className="text-[#9ca3af] text-[10px]">10:04 AM</Typography><Ticks /></div>
            </div>
            {/* You / user response card */}
            <div className="flex items-start gap-[8px] self-start max-w-[60%]">
              <div className="size-[26px] rounded-full bg-[#eceff3] flex items-center justify-center font-['Geist:SemiBold'] font-semibold text-[#64748b] text-[10px] shrink-0 border border-[#06b349]">P</div>
              <div className="bg-white rounded-[14px] rounded-tl-[4px] shadow-sm p-[12px] w-full">
                <div className="bg-[#f6faf7] border-l-[3px] border-[#06b349] rounded-[8px] px-[11px] py-[8px]">
                  <Typography className="font-['Geist:SemiBold'] font-semibold text-[#06824f] text-[11px]">You</Typography>
                  <Typography className="text-[#475569] text-[12px] mt-[3px] truncate">👋Hi Photonx Technologies Pvt Ltd ! Welcome to Carlo …</Typography>
                </div>
                <div className="mt-[10px] border border-[#eef1f4] rounded-[10px] px-[12px] py-[10px] flex items-center gap-[10px]">
                  <div className="size-[28px] rounded-full bg-[#eef1f4] flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><circle cx="12" cy="12" r="1" /><circle cx="6" cy="12" r="1" /><circle cx="18" cy="12" r="1" /></svg></div>
                  <div><Typography className="font-['Geist:Medium'] font-medium text-[#0c221f] text-[12.5px] leading-none">User Response</Typography><div className="flex items-center gap-[5px] mt-[5px]"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2"><path d="M3 9l1-5h16l1 5" /><path d="M4 9v11h16V9" /></svg><Typography className="text-[#475569] text-[12px]">View stores</Typography></div></div>
                </div>
                <Typography className="text-[#9ca3af] text-[10px] mt-[8px]">10:04 AM</Typography>
              </div>
            </div>
            {/* store selection outbound */}
            <div className="self-end max-w-[44%] bg-white rounded-[14px] rounded-tr-[4px] shadow-sm overflow-hidden">
              <div className="p-[15px] pb-[10px]"><Typography className="text-[#0c221f] text-[13px] leading-[1.5]">Please choose a store to continue with your order:</Typography></div>
              <div className="px-[12px] pb-[6px] flex flex-col gap-[8px]">
                <div className="rounded-[9px] bg-[#f4f6f8] text-center py-[9px]"><Typography className="text-[#06824f] text-[13px] font-['Geist:Medium'] font-medium">Carlo bakery</Typography></div>
                <div className="rounded-[9px] bg-[#f4f6f8] text-center py-[9px]"><Typography className="text-[#06824f] text-[13px] font-['Geist:Medium'] font-medium">Carlo Fried Chicken</Typography></div>
              </div>
              <div className="flex items-center justify-end gap-[3px] px-[12px] py-[6px]"><Typography className="text-[#9ca3af] text-[10px]">10:04 AM</Typography><Ticks /></div>
            </div>
          </div>

          {/* footer */}
          <div className="h-[70px] bg-white border-t border-[#edf0f4] flex items-center justify-center shrink-0 relative">
            <div className="flex items-center gap-[8px] bg-[#06b349] rounded-[10px] px-[28px] py-[12px]"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /></svg><Typography className="text-white text-[14px] font-['Geist:SemiBold'] font-semibold">Send Template</Typography></div>
            <div className="absolute right-[20px] bottom-[80px] size-[34px] rounded-full bg-white border border-[#e5e7eb] shadow-md flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const FEATURE_PILLS = ['Unified Inbox', 'Flow Builder', 'Scheduler', 'Instagram', 'Booking', 'Integrations', 'WhatsApp'];

const RESULTS = [
  { metric: '8X', metricLabel: 'faster responses', quote: 'We were drowning in messages. Our response time went from hours to minutes — customers notice, and sales have skyrocketed.', brand: 'Fibers Club', initials: 'FC', c: '#06b349' },
  { metric: '3X', metricLabel: 'more satisfaction', quote: 'Appointment booking was completely manual. Now patients book directly through WhatsApp — fewer calls, saved staff time.', brand: 'Neehar Neuro', initials: 'NN', c: '#1877F2' },
  { metric: '24/7', metricLabel: 'instant replies', quote: 'WeNext automated our repeated WhatsApp queries around availability, pricing and orders. Customers get instant replies.', brand: 'Swagruha Foods', initials: 'SF', c: '#F58529' },
  { metric: '+42%', metricLabel: 'qualified leads', quote: 'We were bleeding leads due to slow WhatsApp responses. WeNext fixed that — serious buyers stay, noise is filtered out.', brand: 'Udaya Group', initials: 'UG', c: '#DD2A7B' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Features() {
  return (
    <div className="bg-[#f8f5ec] relative size-full min-h-screen flex flex-col overflow-x-clip">
      <Header />

      {/* 1 · HERO */}
      <div className="bg-[#092511] shadow-[0_0_0_100vmax_#092511] [clip-path:inset(0_-100vmax)] shrink-0 w-full">
        <div className="container mx-auto border-x border-[rgba(255,255,255,0.08)] px-4 xl:px-[75px] py-[96px] flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]"><img alt="" className="size-full object-cover" src={imgImage27} /></div>
          <div className="flex gap-[10px] items-center justify-center mb-[20px] relative">
            <div className="bg-[#06b349] size-[8px] rounded-full" />
            <Typography className="font-['Courier_Prime'] text-[#06b349] text-[14px] uppercase tracking-[0.2em]">Features</Typography>
          </div>
          <Typography component="h1" className="font-['Geist:SemiBold'] font-semibold leading-[1.12] text-white text-[58px] tracking-[-2px] max-w-[820px] mb-[24px] relative">
            Everything your business needs to sell, support, and scale
          </Typography>
          <Typography className="font-['Geist:Regular'] text-[#a0b8a8] text-[20px] max-w-[660px] leading-[1.6] mb-[44px] relative">
            From the first message to the final purchase, WeNext brings every customer conversation, workflow, and teammate together in one intelligent workspace.
          </Typography>
          <div className="flex gap-[16px] items-center relative">
            <PrimaryButton label="Book a Demo" />
            <GhostButton label="Get Started Free" />
          </div>
          <div className="flex flex-wrap gap-x-[28px] gap-y-[14px] items-center justify-center mt-[44px] relative">
            <div className="flex items-center gap-[10px]">
              <div className="flex -space-x-[10px]">{['#06b349', '#1877F2', '#DD2A7B', '#F58529'].map((c) => <div key={c} className="size-[30px] rounded-full border-[2px] border-[#092511]" style={{ background: c }} />)}</div>
              <Typography className="font-['Geist:Regular'] text-[#a0b8a8] text-[14px]">Trusted by <span className="text-white font-medium">100+ businesses</span></Typography>
            </div>
            <div className="hidden sm:block w-px h-[20px] bg-[rgba(255,255,255,0.12)]" />
            <div className="flex items-center gap-[8px]">
              <div className="flex items-center gap-[2px]">{[...Array(5)].map((_, i) => <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="#06b349"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" /></svg>)}</div>
              <Typography className="font-['Geist:Regular'] text-[#a0b8a8] text-[14px]"><span className="text-white font-medium">4.9/5</span> rating</Typography>
            </div>
            <div className="hidden sm:block w-px h-[20px] bg-[rgba(255,255,255,0.12)]" />
            <Typography className="font-['Courier_Prime'] text-[#7aaa88] text-[13px] uppercase tracking-[0.12em]">Backed by PhotonX Tech</Typography>
          </div>
        </div>
      </div>

      {/* 2 · OVERVIEW HEADER */}
      <div className="container mx-auto border-x border-b border-[#e0dac6]">
        <div className="py-[64px] px-4 xl:px-[75px] flex flex-col items-center text-center">
          <Eyebrow label="Platform" center />
          <Typography component="h2" className="font-['Geist:SemiBold'] font-semibold text-[44px] text-[#0c221f] tracking-[-1.5px] leading-[1.15] max-w-[720px]">
            Everything you need to automate &amp; scale
          </Typography>
          <Typography className="font-['Geist:Regular'] text-[#60584c] text-[18px] max-w-[580px] leading-[1.55] mt-[14px] mb-[30px]">
            Powerful, no-code features designed to transform how you engage with customers across every channel.
          </Typography>
          {/* <div className="flex flex-wrap gap-[10px] items-center justify-center max-w-[720px]">
            {FEATURE_PILLS.map((p) => (
              <div key={p} className="px-[16px] py-[8px] rounded-full bg-[#f3efe3] border border-[#e0dac6] hover:border-[#06b349] hover:bg-[#e5f6e7] transition-colors duration-200 cursor-default">
                <Typography className="font-['Geist:Medium'] font-medium text-[#0c221f] text-[14px]">{p}</Typography>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      {/* 3 · FEATURE SECTIONS */}
      {/* 3 · UNIFIED INBOX — full-width product showcase */}
      <div className="container mx-auto border-x border-b border-[#e0dac6]">
        <div className="border-b border-[#e0dac6] px-4 xl:px-[75px] py-[56px] flex items-end justify-between gap-[50px] flex-wrap">
          <div className="max-w-[560px]">
            <Eyebrow label="Unified Inbox" />
            <Typography component="h2" className="font-['Geist:SemiBold'] font-semibold text-[38px] text-[#0c221f] tracking-[-1.2px] leading-[1.15] mb-[16px]">One inbox. Every conversation</Typography>
            <Typography className="font-['Geist:Regular'] text-[#60584c] text-[17px] leading-[1.7]">Stop jumping between WhatsApp, Instagram, Facebook, and web chat. Give your team one shared workspace to respond faster, collaborate better, and never miss an opportunity.</Typography>
          </div>
          <div className="flex flex-col gap-[14px]">
            {['WhatsApp, Instagram, FB & Web chat', 'One shared workspace for your team', 'Respond faster & collaborate better', 'Never miss an opportunity'].map((p) => (
              <div key={p} className="flex items-center gap-[12px]">
                <div className="size-[22px] rounded-full bg-[#e5f6e7] flex items-center justify-center shrink-0"><Check /></div>
                <Typography className="font-['Geist:Regular'] text-[#3a4540] text-[16px]">{p}</Typography>
              </div>
            ))}
          </div>
        </div>
        <div className="px-[40px] py-[50px] bg-[#f3efe3] relative overflow-hidden flex justify-center" style={gridCanvas}>
          <UnifiedInboxDashboard />
        </div>
      </div>

      {/* 4 · NO-CODE FLOW BUILDER — full-width product showcase */}
      <div className="container mx-auto border-x border-b border-[#e0dac6]">
        <div className="border-b border-[#e0dac6] px-4 xl:px-[75px] py-[56px] flex items-end justify-between gap-[50px] flex-wrap">
          <div className="max-w-[560px]">
            <Eyebrow label="CRM" />
            <Typography component="h2" className="font-['Geist:SemiBold'] font-semibold text-[38px] text-[#0c221f] tracking-[-1.2px] leading-[1.15] mb-[16px]">Know every customer before you reply</Typography>
            <Typography className="font-['Geist:Regular'] text-[#60584c] text-[17px] leading-[1.7]">Every conversation comes with context—from previous chats and purchases to tags, notes, and order history—so every response feels personal.</Typography>
          </div>
          <div className="flex flex-col gap-[14px]">
            {['Full context for every conversation', 'View previous chats & purchases', 'Access tags, notes & order history', 'Make every response personal'].map((p) => (
              <div key={p} className="flex items-center gap-[12px]">
                <div className="size-[22px] rounded-full bg-[#e5f6e7] flex items-center justify-center shrink-0"><Check /></div>
                <Typography className="font-['Geist:Regular'] text-[#3a4540] text-[16px]">{p}</Typography>
              </div>
            ))}
          </div>
        </div>
        <div className="px-[40px] py-[50px] bg-[#f3efe3] relative overflow-hidden flex justify-center" style={gridCanvas}>
          <InstagramAutomationDashboard />
        </div>
      </div>

      {/* 5 · SOCIAL SCHEDULER — full-width product showcase */}
      <div className="container mx-auto border-x border-b border-[#e0dac6]">
        <div className="border-b border-[#e0dac6] px-4 xl:px-[75px] py-[56px] flex items-end justify-between gap-[50px] flex-wrap">
          <div className="max-w-[560px]">
            <Eyebrow label="Social Media" />
            <Typography component="h2" className="font-['Geist:SemiBold'] font-semibold text-[38px] text-[#0c221f] tracking-[-1.2px] leading-[1.15] mb-[16px]">Create once. Publish everywhere</Typography>
            <Typography className="font-['Geist:Regular'] text-[#60584c] text-[17px] leading-[1.7]">Plan, schedule, and publish content across your social channels while keeping your customer conversations in the same workflow.</Typography>
          </div>
          <div className="flex flex-col gap-[14px]">
            {['Plan and schedule content', 'Publish across all channels', 'Unified conversation workflow', 'Create once, publish everywhere'].map((p) => (
              <div key={p} className="flex items-center gap-[12px]">
                <div className="size-[22px] rounded-full bg-[#e5f6e7] flex items-center justify-center shrink-0"><Check /></div>
                <Typography className="font-['Geist:Regular'] text-[#3a4540] text-[16px]">{p}</Typography>
              </div>
            ))}
          </div>
        </div>
        <div className="px-[40px] py-[50px] bg-[#f3efe3] relative overflow-hidden flex justify-center" style={gridCanvas}>
          <SocialSchedulerDashboard />
        </div>
      </div>

      {/* 6 · INSTAGRAM AUTOMATION — full-width product showcase */}
      <div className="container mx-auto border-x border-b border-[#e0dac6]">
        <div className="border-b border-[#e0dac6] px-4 xl:px-[75px] py-[56px] flex items-end justify-between gap-[50px] flex-wrap">
          <div className="max-w-[560px]">
            <Eyebrow label="Automation" />
            <Typography component="h2" className="font-['Geist:SemiBold'] font-semibold text-[38px] text-[#0c221f] tracking-[-1.2px] leading-[1.15] mb-[16px]">Put repetitive work on autopilot</Typography>
            <Typography className="font-['Geist:Regular'] text-[#60584c] text-[17px] leading-[1.7]">Build workflows that follow up, assign conversations, send reminders, update customers, and keep your business moving—even after your team logs off.</Typography>
          </div>
          <div className="flex flex-col gap-[14px]">
            {['Automate follow-ups & assignments', 'Send reminders & updates', 'Keep your business moving', 'Works after your team logs off'].map((p) => (
              <div key={p} className="flex items-center gap-[12px]">
                <div className="size-[22px] rounded-full bg-[#e5f6e7] flex items-center justify-center shrink-0"><Check /></div>
                <Typography className="font-['Geist:Regular'] text-[#3a4540] text-[16px]">{p}</Typography>
              </div>
            ))}
          </div>
        </div>
        <div className="px-[40px] py-[50px] bg-[#f3efe3] relative overflow-hidden flex justify-center" style={gridCanvas}>
          <FlowBuilderDashboard />
        </div>
      </div>

      {/* <FeatureRow eyebrow="Booking & Appointments" heading="Stop the back-and-forth scheduling dance"
        body="Let customers book directly from WhatsApp or your website. Automated reminders cut no-shows and free your team from manual coordination."
        points={['Direct WhatsApp & web booking', 'Automated WhatsApp reminders', 'Fewer no-shows, less admin']}>
        <BookingMock />
      </FeatureRow> */}

      {/* <FeatureRow reverse eyebrow="Integrations" heading="Your tech stack, finally talking"
        body="Connect 100+ tools — Shopify, WooCommerce, Salesforce, HubSpot and more — so customer data flows automatically between every system you already use."
        points={['100+ native integrations', 'Two-way real-time data sync', 'No middleware, no developers']}>
        <IntegrationsMock />
      </FeatureRow> */}

      {/* 8 · WHATSAPP AUTOMATIONS — full-width product showcase */}
      <div className="container mx-auto border-x border-b border-[#e0dac6]">
        <div className="border-b border-[#e0dac6] px-4 xl:px-[75px] py-[56px] flex items-end justify-between gap-[50px] flex-wrap">
          <div className="max-w-[560px]">
            <Eyebrow label="Conversational Commerce" />
            <Typography component="h2" className="font-['Geist:SemiBold'] font-semibold text-[38px] text-[#0c221f] tracking-[-1.2px] leading-[1.15] mb-[16px]">Sell where conversations happen</Typography>
            <Typography className="font-['Geist:Regular'] text-[#60584c] text-[17px] leading-[1.7]">Share products, collect payments, recover carts, and complete purchases without sending customers through complicated checkout journeys.</Typography>
          </div>
          <div className="flex flex-col gap-[14px]">
            {['Share products in chat', 'Collect payments instantly', 'Recover abandoned carts', 'Skip complicated checkouts'].map((p) => (
              <div key={p} className="flex items-center gap-[12px]">
                <div className="size-[22px] rounded-full bg-[#e5f6e7] flex items-center justify-center shrink-0"><Check /></div>
                <Typography className="font-['Geist:Regular'] text-[#3a4540] text-[16px]">{p}</Typography>
              </div>
            ))}
          </div>
        </div>
        <div className="px-[40px] py-[50px] bg-[#f3efe3] relative overflow-hidden flex justify-center" style={gridCanvas}>
          <WhatsAppChatDashboard />
        </div>
      </div>

      {/* 4 · RESULTS */}
      <div className="container mx-auto border-x border-b border-[#e0dac6]">
        <div className="border-b border-[#e0dac6] py-[64px] px-4 xl:px-[75px] flex flex-col items-center text-center">
          <Eyebrow label="Results" center />
          <Typography component="h2" className="font-['Geist:SemiBold'] font-semibold text-[42px] text-[#0c221f] tracking-[-1.2px] leading-[1.2] max-w-[680px]">
            Results that speak volumes
          </Typography>
          <Typography className="font-['Geist:Regular'] text-[#60584c] text-[18px] max-w-[560px] leading-[1.55] mt-[14px]">
            See how businesses are transforming customer communication with WeNext.
          </Typography>
        </div>
        <div className="grid grid-cols-2">
          {RESULTS.map((r, i) => {
            const isLastRow = i >= RESULTS.length - 2;
            const isRightCol = i % 2 === 1;
            return (
              <div key={r.brand} className={`p-[44px] flex flex-col gap-[24px] hover:bg-[rgba(6,179,73,0.03)] transition-colors duration-200 group ${!isRightCol ? 'border-r border-[#e0dac6]' : ''} ${!isLastRow ? 'border-b border-[#e0dac6]' : ''}`}>
                <div className="flex items-end gap-[14px]">
                  <Typography className="font-['Geist:SemiBold'] font-semibold text-[#06b349] text-[62px] leading-none tracking-[-2px]">{r.metric}</Typography>
                  <Typography className="font-['Geist:Regular'] text-[#60584c] text-[16px] mb-[6px]">{r.metricLabel}</Typography>
                </div>
                <Typography className="font-['Geist:Regular'] text-[#3a4540] text-[17px] leading-[1.6] flex-1">“{r.quote}”</Typography>
                <div className="flex items-center gap-[12px] pt-[20px] border-t border-[#e0dac6]">
                  {/* <div className="size-[40px] rounded-[10px] flex items-center justify-center text-white font-['Geist:SemiBold'] font-semibold text-[14px]" style={{ background: r.c }}>{r.initials}</div> */}
                  <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[15px]">{r.brand}</Typography>
                </div>
              </div>
            );
          })}
        </div>
      </div>


      <style>{`
        @keyframes flowPacket { 0% { top:-10px; opacity:0; } 20% { opacity:1; } 80% { opacity:1; } 100% { top:100%; opacity:0; } }
        @keyframes dashFlow { to { stroke-dashoffset: -14; } }
        @keyframes inboxTyping { 0%,60%,100% { transform: translateY(0); opacity:.4; } 30% { transform: translateY(-4px); opacity:1; } }
      `}</style>

      <Footer />
    </div>
  );
}
