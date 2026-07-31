import Typography from '@mui/material/Typography';
import { useRef, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { Inbox, Sparkles, Users, Tag, Contact, BarChart3, type LucideIcon } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
// import headrunLogo from '../assets/customers/headrun_logo.png';
// import rozanaLogo from '../assets/customers/rozana-logo.png';
// import stepConnectImg from '../assets/speed-scale/ConnectMeta.png';
// import stepRouteImg from '../assets/speed-scale/SetAutomations.png';
// import stepAiImg from '../assets/speed-scale/Train the AI on your brand.png';
// import stepTrackImg from '../assets/speed-scale/Launch your first broadcast.png';

const imgImage27 = '/figma/imgImage27.png';
const imgIcon1 = '/figma/imgIcon1.svg';
const imgWhatsApp = '/figma/imgImage1.svg';
const imgInstagram = '/figma/imgImage2.svg';
const imgFacebook = '/figma/imgImage3.svg';

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
    <div className={`content-stretch flex gap-[10px] items-center mb-[16px] relative shrink-0 ${center ? 'justify-center' : ''}`}>
      <div className="bg-[#06b349] relative shrink-0 size-[10px]" />
      <Typography className={`[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Courier_Prime'] leading-[1.4] not-italic relative shrink-0 text-[18px] whitespace-nowrap ${light ? 'text-[#06b349]' : 'text-[#0c221f]'}`}>{label}</Typography>
    </div>
  );
}

function PillBadge({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-[8px] bg-white border border-[#e2ddd0] rounded-[9px] pl-[11px] pr-[13px] py-[7px] shadow-[0_1px_2px_rgba(11,31,26,0.05)]">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2.5" /><path d="M6.5 12h7" /></svg>
      <Typography className="font-['Geist:Medium'] font-medium text-[#0c221f] text-[13.5px]">{label}</Typography>
    </div>
  );
}

// grain texture + muted panel gradients for the Klea-style feature panels
const grainStyle: React.CSSProperties = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
  opacity: 0.42,
  mixBlendMode: 'soft-light',
};
const PANEL_A = 'linear-gradient(155deg,#d9e3d7 0%,#e7ebe3 58%,#eef1ea 100%)';
const PANEL_B = 'linear-gradient(155deg,#e6e2d8 0%,#eeeae0 58%,#f3f0e8 100%)';

function PrimaryButton({ label }: { label?: string }) {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=918977232350"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#06b349] hover:bg-[#05a043] active:scale-[0.98] transition-all duration-150 rounded-[8px] cursor-pointer overflow-hidden relative inline-flex"
    >
      <div className="flex gap-[10px] items-center pl-[20px] pr-[15px] py-[15px]">
        <div className="absolute inset-0 pointer-events-none"><img alt="" className="size-full object-cover opacity-20 mix-blend-color-burn" src={imgImage27} /></div>
        <Typography className="font-['Geist:Medium'] font-medium text-[17px] text-white whitespace-nowrap relative">Let's Talk</Typography>
        <div className="size-[20px] relative shrink-0 text-white flex items-center justify-center">
          <svg className="size-[20px]" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
        </div>
      </div>
    </a>
  );
}

function GhostButton({ label, dark = false }: { label?: string; dark?: boolean }) {
  return dark ? (
    <a href="https://app.wenext.ai/book/wenext-platform-walkthrough" target="_blank" rel="noopener noreferrer" className="bg-transparent border border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.05)] active:scale-[0.98] transition-all duration-150 rounded-[8px] cursor-pointer inline-flex items-center gap-[10px] px-[21px] py-[15px]">
      <Typography className="font-['Geist:Medium'] font-medium text-[17px] text-white whitespace-nowrap">Book a Demo</Typography>
      <svg className="size-[20px] shrink-0 text-white" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3.75 10h12.5M11.25 15l5-5-5-5" /></svg>
    </a>
  ) : (
    <a href="https://app.wenext.ai/book/wenext-platform-walkthrough" target="_blank" rel="noopener noreferrer" className="bg-white border border-[#dedace] hover:bg-[#f3efe3] active:scale-[0.98] transition-all duration-150 rounded-[8px] cursor-pointer inline-flex items-center gap-[10px] px-[21px] py-[15px]">
      <Typography className="font-['Geist:Medium'] font-medium text-[17px] text-[#092511] whitespace-nowrap">Book a Demo</Typography>
      <svg className="size-[20px] shrink-0 text-[#092511]" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3.75 10h12.5M11.25 15l5-5-5-5" /></svg>
    </a>
  );
}

// ─── channel helpers ────────────────────────────────────────────────────────────
const CH = {
  wa: { ic: imgWhatsApp, c: '#25d366', n: 'WhatsApp' },
  ig: { ic: imgInstagram, c: '#E1306C', n: 'Instagram' },
  fb: { ic: imgFacebook, c: '#1877F2', n: 'Facebook' },
} as const;
type ChKey = keyof typeof CH;

function ChBadge({ k, size = 14 }: { k: ChKey; size?: number }) {
  const c = CH[k];
  return <img alt={c.n} src={c.ic} style={{ width: size, height: size }} />;
}

function Avatar({ i, bg, c, ch, size = 38, badge = 16 }: { i: string; bg: string; c: string; ch?: ChKey; size?: number; badge?: number }) {
  return (
    <div className="relative shrink-0">
      <div className="rounded-full flex items-center justify-center font-['Geist:SemiBold'] font-semibold" style={{ width: size, height: size, background: bg, color: c, fontSize: size * 0.36 }}>{i}</div>
      {ch && <span className="absolute -bottom-[2px] -right-[2px] rounded-full bg-white flex items-center justify-center border border-[#eef1f4]" style={{ width: badge, height: badge }}><ChBadge k={ch} size={badge * 0.62} /></span>}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// FEATURE MOCKUPS — contained product UI that sits inside each card's tray
// ══════════════════════════════════════════════════════════════════════════════
function CardShell({ children }: { children: ReactNode }) {
  return (
    <div className="w-full max-w-[392px] bg-white rounded-[16px] border border-[#ececec] shadow-[0_30px_60px_-26px_rgba(20,28,24,0.5),0_2px_6px_-2px_rgba(20,28,24,0.12)] overflow-hidden">
      {children}
    </div>
  );
}



// ══════════════════════════════════════════════════════════════════════════════
// DATA
// ══════════════════════════════════════════════════════════════════════════════
const HERO_STATS = [
  { v: '3-in-1', l: 'WhatsApp · Instagram · Facebook' },
  { v: '0.4s', l: 'Average first reply' },
  { v: '0', l: 'Conversations missed' },
  { v: '24/7', l: 'Always-on coverage' },
];

const WHY_STATS = [
  { v: '3', l: 'Channels in one inbox' },
  { v: '8×', l: 'Faster response time' },
  { v: '40%', l: 'More chats resolved / agent' },
  { v: '100%', l: 'Conversations tracked' },
];

type Feature = { eyebrow: string; title: string; highlight: string; body: string; tray: string };
const FEATURES: Feature[] = [
  { eyebrow: 'One inbox', title: 'Every channel in one shared inbox', highlight: 'one shared inbox', body: 'WhatsApp, Instagram and Facebook conversations land in a single view. Your team replies from one screen — with channel, tag and status always clear.', tray: '#eef6f0' },
  { eyebrow: 'AI Suggested Replies', title: 'On-brand replies, drafted in one tap', highlight: 'in one tap', body: 'WeNext drafts ready-to-send answers trained on your catalog and past chats. Agents pick the best reply instantly — no blank page, no inconsistent messaging.', tray: '#eef3fb' },
  { eyebrow: 'Team Assignments', title: 'Auto-route chats to the right agent', highlight: 'the right agent', body: 'Assign conversations by workload or rules so every chat has a clear owner. No two agents ever reply to the same customer.', tray: '#f4efe3' },
];

const ATOMIC = [
  { t: 'WhatsApp Conversations', d: 'Reply to every WhatsApp Business chat without switching apps.', ic: <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" />, bg: 'bg-[#e7f6ee] text-[#06b349]' },
  { t: 'Instagram Messages', d: 'DMs, story replies and comments in the same place.', ic: <><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></>, bg: 'bg-[#fde2e8] text-[#d9577e]' },
  { t: 'Facebook Messenger', d: 'Messenger threads flow into the shared team inbox.', ic: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />, bg: 'bg-[#dbeafe] text-[#3f6cab]' },
  { t: 'Unified Search', d: 'Search across every conversation and channel at once.', ic: <><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>, bg: 'bg-[#f3ecfb] text-[#7c5bd6]' },
  { t: 'Read & Delivery Status', d: 'See sent, delivered and read on every reply.', ic: <><polyline points="20 6 9 17 4 12" /><polyline points="23 6 12 17 7 12" /></>, bg: 'bg-[#e0f2fe] text-[#0284c7]' },
  { t: 'Quick Filters', d: 'Jump to unread, assigned-to-me or by channel instantly.', ic: <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />, bg: 'bg-[#fff7e6] text-[#d97706]' },
];

type HiwCard = { num: string; title: string; desc: string; icon: LucideIcon; items: string[]; highlight?: boolean };
const HIW_CARDS: HiwCard[] = [
  {
    num: '01',
    title: 'Unified Conversations',
    desc: 'WhatsApp, Instagram and Facebook messages land in one shared inbox — no app-switching, nothing missed.',
    icon: Inbox,
    items: ['WhatsApp inbox', 'Instagram DMs', 'Facebook Messenger', 'Unified search'],
  },
  {
    num: '02',
    title: 'AI Suggested Replies',
    desc: 'On-brand answers drafted from your catalog and past chats, ready to send in a single tap.',
    icon: Sparkles,
    items: ['On-brand drafts', '1-tap send', 'Trained on catalog', 'Auto-translate'],
    // highlight: true,
  },
  {
    num: '03',
    title: 'Team & Assignments',
    desc: 'Auto-route chats by workload or rules so every conversation has one clear owner.',
    icon: Users,
    items: ['Auto-routing', 'Round-robin', 'Internal notes', 'Roles & permissions'],
    highlight: true,
  },
  {
    num: '04',
    title: 'Tags & Segments',
    desc: 'Label chats by intent and filter the whole inbox down to exactly what matters right now.',
    icon: Tag,
    items: ['Conversation tags', 'Smart filters', 'Saved views', 'Bulk actions'],
  },
  {
    num: '05',
    title: 'Customer Context',
    desc: 'Past orders, lifetime value and previous chats sit right beside every conversation.',
    icon: Contact,
    items: ['Order history', 'Lifetime value', 'Past conversations', 'Custom fields'],
  },
  {
    num: '06',
    title: 'Analytics & SLAs',
    desc: 'Track first-response time, resolution rate and agent performance in real time.',
    icon: BarChart3,
    items: ['First-response time', 'Resolution rate', 'Agent performance', 'CSAT tracking'],
  },
];

// ── HOW-IT-WORKS step visuals (swap with the active step) ──────────────────────
function ConnectVisual() {
  const chans = [
    { k: 'wa' as ChKey, n: 'WhatsApp Business', done: true },
    { k: 'ig' as ChKey, n: 'Instagram', done: true },
    { k: 'fb' as ChKey, n: 'Facebook Messenger', done: false },
  ];
  return (
    <CardShell>
      <div className="px-[16px] py-[13px] border-b border-[#f1f3f6] flex items-center justify-between">
        <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[14px]">Connect channels</Typography>
        <span className="text-[10.5px] font-['Courier_Prime'] text-[#9ca3af]">2 of 3 live</span>
      </div>
      <div className="p-[13px] flex flex-col gap-[9px]">
        {chans.map((c) => (
          <div key={c.n} className="flex items-center gap-[12px] rounded-[12px] border border-[#eef1f4] bg-[#fbfcfd] px-[13px] py-[11px]">
            <span className="size-[34px] rounded-[10px] bg-white border border-[#eef1f4] flex items-center justify-center shrink-0"><ChBadge k={c.k} size={18} /></span>
            <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[13px] flex-1">{c.n}</Typography>
            {c.done
              ? <span className="flex items-center gap-[5px] bg-[#e5f6e7] text-[#06824f] text-[11px] font-['Geist:Medium'] rounded-full px-[9px] py-[3.5px]"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#06824f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>Connected</span>
              : <span className="bg-[#06b349] text-white text-[11px] font-['Geist:SemiBold'] rounded-[8px] px-[12px] py-[5px]">Connect</span>}
          </div>
        ))}
      </div>
    </CardShell>
  );
}

function RouteVisual() {
  const team = [
    { n: 'Aarti Kulkarni', in: 'AK', open: 3, c: '#06824f', role: 'Sales' },
    { n: 'Rohan Shetty', in: 'RS', open: 2, c: '#3f6cab', role: 'Support' },
    { n: 'Neha Iyer', in: 'NI', open: 1, c: '#7c5bd6', role: 'Support' },
  ];
  return (
    <CardShell>
      <div className="px-[16px] py-[13px] border-b border-[#edf0f4] flex items-center justify-between">
        <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[14px]">Team workload</Typography>
        <span className="bg-[#e5f6e7] text-[#06824f] text-[10.5px] font-['Geist:Medium'] rounded-full px-[9px] py-[3px]">Auto-routing ON</span>
      </div>
      <div className="p-[13px] flex flex-col gap-[8px]">
        {team.map((m) => (
          <div key={m.n} className="flex items-center gap-[11px] rounded-[12px] border border-[#eef1f4] bg-[#fbfcfd] px-[12px] py-[10px]">
            <div className="size-[32px] rounded-full flex items-center justify-center font-['Geist:SemiBold'] text-[11.5px]" style={{ background: `${m.c}1a`, color: m.c }}>{m.in}</div>
            <div className="flex-1 min-w-0"><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[12.5px] leading-none">{m.n}</Typography><Typography className="font-['Geist:Regular'] text-[#94a3b8] text-[10.5px] mt-[3px]">{m.role}</Typography></div>
            <div className="text-right"><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[14px] leading-none">{m.open}</Typography><Typography className="font-['Courier_Prime'] text-[#9ca3af] text-[9px] mt-[2px]">open</Typography></div>
          </div>
        ))}
        <div className="rounded-[12px] bg-[#0b1f17] p-[12px] flex items-center gap-[10px] mt-[1px]">
          <div className="size-[30px] rounded-[9px] bg-[#06b349] flex items-center justify-center shrink-0"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg></div>
          <div className="flex-1"><Typography className="text-white text-[12px] font-['Geist:SemiBold']">New chat auto-assigned to Aarti</Typography><Typography className="text-[#8fdcae] text-[10px] mt-[2px]">Round-robin · lowest open count</Typography></div>
        </div>
      </div>
    </CardShell>
  );
}

function AiVisual() {
  return (
    <CardShell>
      <div className="px-[16px] py-[12px] border-b border-[#edf0f4] flex items-center gap-[10px]">
        <Avatar i="A" bg="#fde2e8" c="#d9577e" ch="ig" size={34} />
        <div className="flex-1"><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[13.5px] leading-none">Aanya Verma</Typography><Typography className="font-['Geist:Regular'] text-[#94a3b8] text-[11px] mt-[3px]">Instagram · replying now</Typography></div>
        <span className="flex items-center gap-[5px] bg-[#e5f6e7] rounded-full px-[9px] py-[3px]"><span className="size-[5px] rounded-full bg-[#06b349] step-live-dot" /><Typography className="text-[#06824f] text-[10px] font-['Geist:Medium']">Online</Typography></span>
      </div>
      <div className="px-[16px] py-[14px]" style={{ background: '#f6f8fa' }}>
        <div className="bg-white rounded-[12px] rounded-tl-[3px] px-[13px] py-[8px] shadow-sm max-w-[82%] inline-block"><Typography className="text-[#0c221f] text-[12.5px]">Loved this dress! Is COD available for Hyderabad? 😍</Typography></div>
      </div>
      <div className="px-[16px] pt-[13px] pb-[16px] border-t border-[#edf0f4]">
        <div className="flex items-center gap-[6px] mb-[10px]"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.9 5.8 5.8 1.9-5.8 1.9L12 18.4l-1.9-5.8L4.3 10.7l5.8-1.9z" /></svg><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[12.5px]">AI suggested replies</Typography><Typography className="font-['Courier_Prime'] text-[#9ca3af] text-[10px] ml-auto">on-brand</Typography></div>
        <div className="flex flex-col gap-[8px]">
          {[
            { t: 'Yes! COD is available across Hyderabad. Shall I place the order?', best: true },
            { t: 'We offer COD + free returns. Want the size guide first?' },
          ].map((s, i) => (
            <div key={i} className={`flex items-center gap-[10px] rounded-[11px] border px-[12px] py-[9px] ${s.best ? 'border-[#cdeeda] bg-[#f3fbf5]' : 'border-[#eef1f4] bg-white'}`}>
              <Typography className="font-['Geist:Regular'] text-[#2f3a34] text-[12px] flex-1 leading-[1.4]">{s.t}</Typography>
              {s.best ? <span className="bg-[#06b349] text-white text-[10px] font-['Geist:SemiBold'] rounded-full px-[8px] py-[2px] shrink-0">Use</span> : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" className="shrink-0"><path d="M9 18l6-6-6-6" /></svg>}
            </div>
          ))}
        </div>
      </div>
    </CardShell>
  );
}

function AnalyticsVisual() {
  const bars = [42, 68, 54, 82, 73, 96];
  return (
    <CardShell>
      <div className="px-[16px] py-[13px] border-b border-[#f1f3f6] flex items-center justify-between">
        <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[14px]">Performance · 30d</Typography>
        <span className="flex items-center gap-[5px] bg-[#e5f6e7] rounded-full px-[9px] py-[2.5px]"><span className="size-[5px] rounded-full bg-[#06b349] step-live-dot" /><Typography className="font-['Geist:Medium'] text-[#06824f] text-[10px]">Live</Typography></span>
      </div>
      <div className="p-[14px] flex flex-col gap-[12px]">
        <div className="grid grid-cols-2 gap-[10px]">
          <div className="rounded-[12px] border border-[#eef1f4] bg-[#fbfcfd] p-[12px]"><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[20px] leading-none">0.4s</Typography><Typography className="font-['Geist:Regular'] text-[#94a3b8] text-[10.5px] mt-[4px]">First reply</Typography></div>
          <div className="rounded-[12px] border border-[#eef1f4] bg-[#fbfcfd] p-[12px]"><Typography className="font-['Geist:SemiBold'] font-semibold text-[#06b349] text-[20px] leading-none">94%</Typography><Typography className="font-['Geist:Regular'] text-[#94a3b8] text-[10.5px] mt-[4px]">Resolved</Typography></div>
        </div>
        <div className="rounded-[12px] border border-[#eef1f4] bg-white p-[12px]">
          <div className="flex items-center justify-between mb-[10px]"><Typography className="font-['Geist:Medium'] text-[#64748b] text-[11px]">Conversations / day</Typography><Typography className="font-['Courier_Prime'] text-[#06824f] text-[10.5px]">▲ 38%</Typography></div>
          <div className="flex items-end justify-between gap-[6px] h-[46px]">
            {bars.map((h, i) => <div key={i} className="flex-1 rounded-t-[3px]" style={{ height: `${h}%`, background: i === bars.length - 1 ? 'linear-gradient(180deg,#06b349,#25d366)' : '#dfeee5' }} />)}
          </div>
        </div>
        <div className="rounded-[12px] bg-[#0b1f17] px-[13px] py-[11px] flex items-center justify-between"><Typography className="text-white text-[12px] font-['Geist:SemiBold']">Revenue from chats</Typography><Typography className="text-[#8fdcae] text-[13px] font-['Geist:SemiBold']">₹8.4L</Typography></div>
      </div>
    </CardShell>
  );
}

const SERIF: React.CSSProperties = { fontFamily: "'Fraunces', Georgia, 'Times New Roman', serif" };

function Check() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><polyline points="20 6 9 17 4 12" /></svg>;
}

function HowItWorks() {
  const items = [
    { icon: Inbox, title: 'Connect Your Channels', desc: 'Bring all customer messages into one shared workspace in minutes.' },
    { icon: Sparkles, title: 'Respond with AI', desc: 'Provide instant, accurate replies while reducing manual effort.' },
    { icon: Users, title: 'Collaborate as a Team', desc: 'Assign chats, share notes, and keep every conversation organized.' },
    { icon: BarChart3, title: 'Optimize with Insights', desc: ' Track key performance metrics and continuously improve customer engagement.' },
  ];
  return (
    <div className="container mx-auto border-x border-b border-[#e0dac6]">
      <div className="px-4 xl:px-[50px] py-[80px]">
        {/* header */}
        <div className="max-w-[620px] mb-[52px]">
          <Eyebrow label="How it Works" />
          <Typography component="h2" className="font-['Geist:SemiBold'] font-semibold text-[42px] text-[#0c221f] tracking-[-1.4px] leading-[1.12]">
            Simplify customer conversations from start to finish
          </Typography>
        </div>

        <div className="grid lg:grid-cols-2 gap-[48px] lg:gap-[80px] items-center">
          {/* LEFT — 4 items */}
          <div className="flex flex-col gap-[34px]">
            {items.map((it, i) => {
              const Icon = it.icon;
              return (
                <div key={it.title}>
                  <div className="flex items-start gap-[20px] mb-[10px]">
                    <span className="mt-2">
                      <Icon size={19} strokeWidth={2} color="#06b349" />
                    </span>
                    <div>
                      <Typography component="h3" className="font-['Geist:SemiBold'] font-semibold text-[21px] text-[#0c221f] tracking-[-0.3px]">{it.title}</Typography>
                      <Typography className="font-['Geist:Regular'] text-[#60584c] text-[15px] leading-[1.6] max-w-[440px]">{it.desc}</Typography>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT — image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[520px] overflow-hidden aspect-[4/5] flex items-center justify-center " style={{ background: PANEL_A }}>
              <div className="absolute inset-0 pointer-events-none" style={grainStyle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// ── SUB-FEATURES (alternating image / text rows) ───────────────────────────────
const SUB_FEATURES = [
  {
    tag: 'Templates',
    title: 'Send approved templates in one click',
    body: 'Reply in seconds with WhatsApp-approved message templates — order updates, offers and reminders — personalised with each customer’s details.',
    points: ['Pre-approved template library', 'Dynamic variables like {{name}} & {{order}}', 'One-click send from any chat'],
  },
  {
    tag: 'Payment Links',
    title: 'Share secure payment links inside the chat',
    body: 'Turn conversations into checkout. Drop a secure UPI or card payment link straight into the thread and get paid without the customer ever leaving WhatsApp.',
    points: ['UPI, cards & wallets', 'Live payment status updates', 'Razorpay & Stripe ready'],
  },
  {
    tag: 'Reminders',
    title: 'Never let a conversation go cold',
    body: 'Set a reminder on any chat and WeNext nudges you to follow up, re-engage or close — so high-intent customers never slip through the cracks.',
    points: ['Follow-up reminders', 'Snooze & schedule for later', 'Team-wide alerts'],
  },
  {
    tag: 'Notes',
    title: 'Keep your whole team in context',
    body: 'Leave private internal notes on any conversation — visible only to your team — so nothing is lost when a chat is handed to another agent.',
    points: ['Private internal notes', 'Mention teammates', 'Pinned to the customer profile'],
  },
  {
    tag: 'Deal Value',
    title: 'Track the revenue behind every chat',
    body: 'Attach a deal value to conversations and see exactly how much pipeline is sitting in your inbox — from the first message to a closed sale.',
    points: ['Deal value per conversation', 'Live pipeline totals', 'Won / lost tracking'],
  },
];

function DummyImage({ tag }: { tag: string }) {
  return (
    <div className="relative  overflow-hidden  aspect-[4/4] flex items-center justify-center" style={{ background: PANEL_A }}>
      <div className="absolute inset-0 pointer-events-none" style={grainStyle} />

    </div>
  );
}

function CircleCheck() {
  return (
    <span className="size-[22px] rounded-full bg-[#06b349] flex items-center justify-center shrink-0 mt-[1px]">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
    </span>
  );
}

function SubFeatures() {
  return (
    <div className="container mx-auto border-x border-b border-[#e0dac6]">
      <div className="px-4 xl:px-[56px] py-[56px]">
        {/* header */}
        <div className="max-w-[670px] mb-[64px]">
          <Eyebrow label="Inside the Inbox" />
          <Typography component="h2" className="font-['Geist:SemiBold'] font-semibold text-[42px] text-[#0c221f] tracking-[-1.4px] leading-[1.12]">
            Everything you need to move conversations forward
          </Typography>
          <Typography className="font-['Geist:Regular'] text-[#60584c] text-[18px] leading-[1.6] mt-[14px]">
            From answering questions to confirming orders and sending follow-ups, manage every customer interaction from one unified workspace—without switching between tools.
          </Typography>
        </div>

        <div className="flex flex-col gap-[84px] lg:gap-[140px]">
          {SUB_FEATURES.map((f, i) => {
            const reversed = i % 2 === 1;
            return (
              <Reveal key={f.title}>
                <div className="grid lg:grid-cols-2 gap-[40px] lg:gap-[64px] items-center">
                  {/* image */}
                  <div className={reversed ? 'lg:order-2' : ''}>
                    <DummyImage tag={f.tag} />
                  </div>
                  {/* text */}
                  <div className={reversed ? 'lg:order-1' : ''}>
                    <div className="inline-flex items-center gap-[8px] mb-[18px]">
                      <Typography className="font-['Courier_Prime'] text-[#06b349] text-[14px] uppercase tracking-[0.16em]">{f.tag}</Typography>
                    </div>
                    <Typography component="h3" className="font-['Geist:SemiBold'] font-semibold text-[34px] text-[#0c221f] tracking-[-1px] leading-[1.15]">
                      {f.title}
                    </Typography>
                    <Typography className="font-['Geist:Regular'] text-[#60584c] text-[17px] leading-[1.62] mt-[16px] max-w-[480px]">
                      {f.body}
                    </Typography>
                    <ul className="flex flex-col gap-[14px] mt-[28px]">
                      {f.points.map((p) => (
                        <li key={p} className="flex items-start gap-[12px]">
                          <CircleCheck />
                          <span className="font-['Geist:Regular'] text-[#3a4540] text-[15.5px] leading-[1.5]">{p}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap items-center gap-[14px] mt-[34px]">
                      <PrimaryButton label="Try our free demo" />
                      {/* <GhostButton label="Contact our sales" /> */}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}



const FAQS = [
  { q: 'Which channels does the Unified Inbox support?', a: 'WhatsApp Business, Instagram and Facebook Messenger all flow into one shared inbox. Your team replies from a single screen, and every conversation clearly shows which channel it came from.' },
  { q: 'Can multiple team members work the same inbox?', a: 'Yes. Conversations can be auto-routed or manually assigned, so every chat has a clear owner. Internal notes and shared tags keep your team aligned without two people replying to the same customer.' },
  { q: 'How do AI suggested replies work?', a: 'WeNext drafts on-brand replies trained on your catalog and past conversations. Agents send the best suggestion in one tap or edit it first — so responses are fast and consistent without sounding robotic.' },
  { q: 'Will I lose customer context when switching channels?', a: 'No. Every conversation sits beside a customer history panel — past orders, tags, lifetime value and previous chats — so whoever picks up the conversation has the full picture.' },
  { q: 'Do I need to replace my existing tools?', a: 'No. The Unified Inbox connects your WhatsApp, Instagram and Facebook alongside your CRM and payments — one layer on top of your stack, not a rip-and-replace.' },
];

// ══════════════════════════════════════════════════════════════════════════════
export default function UnifiedInbox() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <div className="bg-[#f8f5ec] relative size-full min-h-screen flex flex-col overflow-x-clip">
      <Header />

      {/* HERO — About page style design */}
      <div className="bg-[#092511] shadow-[0_0_0_100vmax_#092511] [clip-path:inset(0_-100vmax)] shrink-0 w-full">
        <div className="container mx-auto border-x border-[rgba(255,255,255,0.08)] px-4 xl:px-[75px] py-[100px] flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
            <img alt="" className="size-full object-cover" src={imgImage27} />
          </div>
          <div className="absolute -top-[120px] left-1/2 -translate-x-1/2 size-[420px] bg-[#06b349] opacity-[0.14] blur-[110px] rounded-full pointer-events-none" />
          <div className="flex gap-[10px] items-center justify-center mb-[20px] relative">
            {/* <div className="bg-[#06b349] size-[8px] rounded-full" /> */}
            {/* <Typography className="font-['Courier_Prime'] text-[#06b349] text-[14px] uppercase tracking-[0.2em]">Feature · Unified Inbox</Typography> */}
          </div>
          <Typography component="h1" className="font-['Geist:SemiBold'] font-semibold leading-[1.15] text-white text-[60px] tracking-[-2px] max-w-[800px] mb-[24px] relative">
            Every Conversation.<br /><span className="text-[#25d366]">One</span> Intelligent Inbox.
          </Typography>
          <Typography className="font-['Geist:Regular'] text-[#a0b8a8] text-[20px] max-w-[680px] leading-[1.6] mb-[44px] relative">
            Keep every customer conversation organized in one place. Assign chats, collaborate with teammates, and respond instantly across all your communication channels.
          </Typography>
          <div className="flex gap-[16px] items-center relative">
            <PrimaryButton label="Book a Demo" />
            <GhostButton label="Get Started Free" dark />
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <HowItWorks />


      {/* WHY / STATS BAND */}
      <div className="container mx-auto border-x border-b border-[#e0dac6]">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#e0dac6]">
          {WHY_STATS.map((s) => (
            <Reveal key={s.l} className="px-[24px] py-[40px] flex flex-col items-center text-center">
              <Typography className="font-['Geist:SemiBold'] font-semibold text-[#06b349] text-[48px] tracking-[-1.5px] leading-none">{s.v}</Typography>
              <Typography className="font-['Geist:Regular'] text-[#60584c] text-[14px] mt-[10px] leading-[1.4] max-w-[160px]">{s.l}</Typography>
            </Reveal>
          ))}
        </div>
      </div>


      {/* SUB FEATURES */}
      <SubFeatures />


      {/* FAQ ACCORDION — Homepage Style */}
      <div className="border-[#e0dac6] border-b border-solid content-stretch flex flex-col items-center justify-center overflow-clip container mx-auto relative shrink-0 w-full">
        <div className="border-[#e0dac6] border-l border-r border-solid relative shrink-0 w-full">
          <div className="bg-clip-padding border-[transparent] border-l border-r border-solid content-stretch flex flex-col items-start justify-center px-4 xl:px-[50px] py-[40px] relative size-full">
            <div className="content-stretch flex flex-col lg:flex-row gap-[40px] lg:gap-[80px] items-start relative shrink-0 w-full">
              {/* Left Heading */}
              <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full lg:w-[380px]">
                <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0">
                  <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
                    <div className="bg-[#06b349] relative top-[-2px] shrink-0 size-[10px]" />
                    <Typography className="font-['Courier_Prime:Regular'] leading-[1.4] relative shrink-0 text-[#0c221f] text-[18px] text-center whitespace-nowrap">
                      Faq’s
                    </Typography>
                  </div>
                  <div className="font-['Geist:SemiBold'] font-semibold relative shrink-0 text-[#0c221f] text-[36px] lg:text-[42px] tracking-[-1px]">
                    <Typography className="leading-[1.3] text-[#0c221f] text-[36px] lg:text-[42px] font-['Geist:SemiBold'] font-semibold">Frequently asked questions</Typography>
                  </div>
                </div>
              </div>

              {/* Right Accordion List */}
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative w-full">
                {FAQS.map((faq, i) => {
                  const isOpen = openFaq === i;
                  const isLast = i === FAQS.length - 1;
                  return (
                    <div key={i} className={`${isLast ? '' : 'border-b border-[#e5e5e5]'} relative shrink-0 w-full`}>
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="group w-full flex items-center justify-between gap-[16px] pb-[17px] pt-[16px] px-[8px] cursor-pointer text-left outline-none"
                      >
                        <Typography className={`font-['Geist:Medium'] font-medium leading-[1.4] text-[18px] flex-1 transition-all duration-200 ${isOpen ? 'text-[#06b349] translate-x-0' : 'text-[#262626] group-hover:translate-x-[4px] group-hover:text-[#06b349]'}`}>{faq.q}</Typography>
                        <div className={`size-[28px] shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'rotate-180 bg-[#e5f6e7]' : 'group-hover:bg-[#f3efe3]'}`}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={isOpen ? '#06b349' : '#262626'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                        </div>
                      </button>
                      <div
                        className="grid transition-[grid-template-rows] duration-300 ease-out"
                        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                      >
                        <div className="overflow-hidden">
                          <Typography className={`font-['Geist:Regular'] font-normal leading-[1.6] text-[15px] text-[#60584c] px-[8px] pb-[18px] pr-[40px] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>{faq.a}</Typography>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
