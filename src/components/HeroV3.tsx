import Typography from '@mui/material/Typography';
import { useState, useEffect, useRef } from 'react';

type Tab = {
  name: 'WhatsApp' | 'Instagram' | 'Facebook';
  duration: number;
  brand: string;
  contactName: string;
  role: string;
  tag1: string;
  tag2: string;
  tag3: string;
  product: string;
  price: string;
  userMsg: string;
  aiMsg: string;
  followUp: string;
};

const TABS: Tab[] = [
  {
    name: 'WhatsApp',
    duration: 8000,
    brand: '#25d366',
    contactName: 'Priya Sharma',
    role: 'Interested via WhatsApp',
    tag1: 'Discovery',
    tag2: 'English',
    tag3: 'Ready',
    product: 'Linen Kurta · M',
    price: '2,490',
    userMsg: 'Hi! Is the linen kurta still available?',
    aiMsg: 'Yes — 3 pieces left in M. Want a secure UPI link?',
    followUp: 'Yes please.',
  },
  {
    name: 'Instagram',
    duration: 8000,
    brand: '#DD2A7B',
    contactName: 'Anaya Verma',
    role: 'Reel comment · @anayaverma',
    tag1: 'DM',
    tag2: 'Hindi',
    tag3: 'Hot lead',
    product: 'Indigo Cotton Kurta · S',
    price: '2,790',
    userMsg: 'Loved your kurta drop 😍 blue in S?',
    aiMsg: '2 left in blue S. 1‑tap checkout link →',
    followUp: 'Yes ship it.',
  },
  {
    name: 'Facebook',
    duration: 8000,
    brand: '#1877F2',
    contactName: 'Karthik Iyer',
    role: 'Facebook Page inquiry',
    tag1: 'Ad reply',
    tag2: 'English',
    tag3: 'Warm',
    product: 'Sky Cotton Shirt · M',
    price: '1,890',
    userMsg: 'Saw your ad — cotton shirt still in stock?',
    aiMsg: 'Size M has 3 left. Secure checkout link below →',
    followUp: 'Send checkout.',
  },
];

// Pixel-perfect Hyperbound label geometry — copied verbatim from reference.
// practicePath is the outer arc (r=264), innerPath is the inner arc (r=293).
const LABELS = [
  { idx: 0, path: 'practicePath', prefixOff: '69.5%', mainOff: '79%',   prefix: 'WeNext', main: 'WhatsApp'  },
  { idx: 1, path: 'innerPath',    prefixOff: '86%',   mainOff: '95%',   prefix: 'WeNext', main: 'Instagram' },
  { idx: 2, path: 'innerPath',    prefixOff: '55%',   mainOff: '61.5%', prefix: 'WeNext', main: 'Facebook'  },
];

export default function HeroV3() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [chatStep, setChatStep] = useState(-1);
  const [inputText, setInputText] = useState('');
  const inputScrollRef = useRef<HTMLDivElement>(null);

  const active = TABS[activeIdx];
  const RING_CIRC = 2 * Math.PI * 293;

  // Auto-advance tabs
  useEffect(() => {
    const dur = TABS[activeIdx].duration;
    const tickMs = 50;
    setProgress(0);
    const id = setInterval(() => {
      setProgress((p) => {
        const next = p + (tickMs / dur) * 100;
        if (next >= 100) {
          setActiveIdx((i) => (i + 1) % TABS.length);
          return 0;
        }
        return next;
      });
    }, tickMs);
    return () => clearInterval(id);
  }, [activeIdx]);

  // Chat timeline (used only when Facebook tab is active — Content 3)
  useEffect(() => {
    setInputText('');
    setChatStep(-1);
    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const at = (ms: number, fn: () => void) =>
      timeouts.push(setTimeout(() => { if (!cancelled) fn(); }, ms));

    at(0,    () => setInputText(TABS[activeIdx].userMsg));
    at(2200, () => { setChatStep(0); setInputText(''); });
    at(2900, () => setChatStep(1));
    at(4000, () => setChatStep(2));
    at(5200, () => setInputText('yes please'));
    at(6100, () => { setChatStep(3); setInputText(''); });
    at(6700, () => setChatStep(4));

    return () => { cancelled = true; timeouts.forEach(clearTimeout); };
  }, [activeIdx]);

  useEffect(() => {
    if (!inputText || !inputScrollRef.current) return;
    const scroll = () => {
      if (inputScrollRef.current) inputScrollRef.current.scrollLeft = inputScrollRef.current.scrollWidth;
    };
    scroll();
    const id = setInterval(scroll, 40);
    const stop = setTimeout(() => clearInterval(id), inputText.length * 60 + 200);
    return () => { clearInterval(id); clearTimeout(stop); };
  }, [inputText]);

  return (
    <section className="w-full bg-[#f8f5ec] relative overflow-hidden" data-name="HeroV3">
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(12,34,31,0.10) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.15) 75%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.15) 75%, rgba(0,0,0,0) 100%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(6,179,73,0.10) 0%, transparent 60%)' }}
      />

      <div className="container mx-auto px-4 xl:px-0 relative border-l border-r border-[rgba(12,34,31,0.08)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[60px] items-center min-h-[calc(100vh-80px)] py-[60px] lg:py-[80px]">

          {/* LEFT */}
          <div className="flex flex-col gap-[24px] lg:pl-[48px]">
            <Typography className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[1.05] text-[#0c221f] text-[44px] sm:text-[56px] lg:text-[68px] tracking-[-1.5px]">
              Turn every {active.name.toLowerCase()}<br />chat into revenue.
            </Typography>
            <Typography className="text-[#60584c] text-[17px] lg:text-[20px] leading-[1.5] max-w-[520px]">
              WeNext unifies WhatsApp, Instagram, and Facebook — replying, recommending, and closing orders like your best agent, 24/7.
            </Typography>
            <div className="flex flex-wrap gap-[14px] mt-[4px]">
              <a href="#" className="group inline-flex items-center gap-[10px] bg-[#06b349] hover:bg-[#059940] text-white rounded-[8px] pl-[22px] pr-[18px] py-[16px] font-['Geist:Medium'] font-medium transition-colors">
                <span className="text-[16px]">Book a demo</span>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-[2px] transition-transform">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#" className="inline-flex items-center gap-[8px] bg-white hover:bg-[#f2ede0] border border-[#dedace] text-[#0c221f] rounded-[8px] px-[22px] py-[16px] font-['Geist:Medium'] font-medium text-[16px] transition-colors">
                Get Started
              </a>
            </div>
          </div>

          {/* RIGHT — pixel-perfect Hyperbound ring stage */}
          <div className="relative w-full flex items-center justify-center">
            <div className="relative w-full max-w-[674px] aspect-square">

              {/* Rotating green blob */}
              <div className="absolute inset-0 pointer-events-none hv3-blob-wrap">
                <div
                  className="w-full h-full"
                  style={{
                    background:
                      'radial-gradient(ellipse 55% 60% at 35% 40%, #86efac 0%, #4ade80 32%, rgba(74,222,128,0.55) 55%, rgba(134,239,172,0.18) 75%, transparent 92%)',
                    borderRadius: '50%',
                    filter: 'blur(2px)',
                  }}
                />
              </div>

              {/* Soft ambient behind card */}
              <div
                className="absolute inset-[120px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 70%)' }}
              />

              {/* SVG ring — 674 viewBox, practicePath (r=264) + innerPath (r=293) */}
              <svg viewBox="0 0 674 674" className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
                <defs>
                  <path id="practicePath" d="M 601,337 A 264,264 0 0,1 73,337 A 264,264 0 0,1 601,337" fill="none" />
                  <path id="innerPath"    d="M 630,337 A 293,293 0 0,0 44,337  A 293,293 0 0,0 630,337" fill="none" />
                </defs>

                {/* Faint guide rings */}
                <circle cx="337" cy="337" r="264" fill="none" stroke="rgba(12,34,31,0.09)" strokeWidth="1" />
                <circle cx="337" cy="337" r="293" fill="none" stroke="rgba(12,34,31,0.09)" strokeWidth="1" />

                {/* Progress arc */}
                <circle
                  cx="337" cy="337" r="293"
                  fill="none"
                  stroke="#06b349"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={`${(progress / 100) * RING_CIRC} ${RING_CIRC}`}
                  transform="rotate(-90 337 337)"
                  style={{ transition: 'stroke-dasharray 90ms linear', filter: 'drop-shadow(0 0 10px rgba(6,179,73,0.6))' }}
                />

                {/* Labels — WeNext prefix + channel main, on curved paths */}
                {LABELS.map((l) => {
                  const isActive = activeIdx === l.idx;
                  return (
                    <g key={l.idx}>
                      <text
                        style={{
                          fontFamily: 'Georgia, "Source Serif Pro", serif',
                          fontStyle: 'italic',
                          fontSize: 20,
                          fontWeight: 400,
                          letterSpacing: '0.02em',
                          fill: isActive ? 'rgba(12,34,31,0.75)' : 'rgba(12,34,31,0.28)',
                          transition: 'fill 0.5s cubic-bezier(0.22,1,0.36,1)',
                          cursor: 'pointer',
                        }}
                        onClick={() => setActiveIdx(l.idx)}
                      >
                        <textPath href={`#${l.path}`} startOffset={l.prefixOff} textAnchor="middle">
                          {l.prefix}
                        </textPath>
                      </text>
                      <text
                        style={{
                          fontFamily: 'Georgia, "Source Serif Pro", serif',
                          fontStyle: 'italic',
                          fontSize: 44,
                          fontWeight: 400,
                          letterSpacing: '-0.005em',
                          fill: isActive ? '#0c221f' : 'rgba(12,34,31,0.28)',
                          filter: isActive ? 'drop-shadow(0 3px 18px rgba(6,179,73,0.35))' : 'none',
                          transition: 'fill 0.5s cubic-bezier(0.22,1,0.36,1), filter 0.5s cubic-bezier(0.22,1,0.36,1)',
                          cursor: 'pointer',
                        }}
                        onClick={() => setActiveIdx(l.idx)}
                      >
                        <textPath href={`#${l.path}`} startOffset={l.mainOff} textAnchor="middle">
                          {l.main}
                        </textPath>
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Morph card — 432×526 @ scale(0.685) */}
              <div
                className="absolute left-1/2 top-1/2 z-[10]"
                style={{ width: 432, height: 526, transform: 'translate(-50%, -50%) scale(0.685)' }}
              >
                <div
                  className="w-full h-full relative overflow-hidden"
                  style={{
                    background: '#0c221f',
                    borderRadius: 28,
                    boxShadow:
                      '0 40px 90px -20px rgba(0,0,0,0.55), 0 12px 28px -8px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.06)',
                  }}
                >
                  {/* ── Content 1: WhatsApp — Practice-style contact card ── */}
                  <div
                    className="absolute inset-0 flex flex-col p-[28px]"
                    style={{
                      opacity: activeIdx === 0 ? 1 : 0,
                      pointerEvents: activeIdx === 0 ? 'auto' : 'none',
                      transition: 'opacity 0.55s cubic-bezier(0.22,1,0.36,1)',
                    }}
                  >
                    <div className="self-start inline-flex items-center gap-[7px] bg-white rounded-full px-[12px] py-[6px]">
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <path d="M6.5 0L8.1 4.9L13 6.5L8.1 8.1L6.5 13L4.9 8.1L0 6.5L4.9 4.9L6.5 0Z" fill="#0c221f" />
                      </svg>
                      <span className="text-[#0c221f] text-[13px] font-['Geist:SemiBold'] font-semibold">AI Sales Agent</span>
                    </div>

                    <div
                      className="mt-[16px] rounded-[16px] w-full h-[220px] relative overflow-hidden"
                      style={{ background: 'linear-gradient(160deg, #0a3f24 0%, #06b349 55%, #25d366 100%)' }}
                    >
                      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 30% 25%, rgba(255,255,255,0.28) 0%, transparent 55%)' }} />
                      {/* Concentric ring motif */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="size-[100px] rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                          <div className="size-[74px] rounded-full bg-white/15 flex items-center justify-center">
                            <div className="size-[52px] rounded-full flex items-center justify-center" style={{ background: '#25d366' }}>
                              <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-[18px]">
                      <div className="text-white text-[18px] font-['Geist:SemiBold'] font-semibold leading-[1.15]">{TABS[0].contactName}</div>
                      <div className="text-[rgba(255,255,255,0.55)] text-[12px] mt-[3px]">{TABS[0].role} · ₹{TABS[0].price}</div>
                    </div>

                    <div className="mt-[12px] flex flex-wrap gap-[6px]">
                      <span className="inline-flex items-center gap-[5px] px-[10px] py-[5px] rounded-full text-[11px] font-['Geist:Medium'] font-medium" style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.85)', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
                        {TABS[0].tag1}
                      </span>
                      <span className="inline-flex items-center gap-[5px] px-[10px] py-[5px] rounded-full text-[11px] font-['Geist:Medium'] font-medium" style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.85)', border: '1px solid rgba(255,255,255,0.1)' }}>
                        {TABS[0].tag2}
                      </span>
                      <span className="inline-flex items-center gap-[5px] px-[10px] py-[5px] rounded-full text-[11px] font-['Geist:Medium'] font-medium" style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.85)', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 15h8" /><path d="M8 9h2" /><path d="M14 9h2" /></svg>
                        {TABS[0].tag3}
                      </span>
                    </div>

                    <button className="mt-auto w-full py-[14px] rounded-[12px] font-['Geist:SemiBold'] font-semibold text-[15px] text-[#0c221f] hover:brightness-110 transition-all" style={{ background: '#c9f47a' }}>
                      Start conversation
                    </button>
                  </div>

                  {/* ── Content 2: Instagram — Perform-style DM/reel view ── */}
                  <div
                    className="absolute inset-0 flex flex-col p-[24px]"
                    style={{
                      opacity: activeIdx === 1 ? 1 : 0,
                      pointerEvents: activeIdx === 1 ? 'auto' : 'none',
                      transition: 'opacity 0.55s cubic-bezier(0.22,1,0.36,1)',
                    }}
                  >
                    <div className="text-white text-[15px] font-['Geist:SemiBold'] font-semibold">WeNext AI &lt;&gt; {TABS[1].contactName}</div>

                    <div className="mt-[14px] relative rounded-[16px] w-full h-[320px] overflow-hidden" style={{ background: 'linear-gradient(135deg, #4c1d95 0%, #DD2A7B 60%, #F58529 100%)' }}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="size-[70px] rounded-full flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(8px)' }}>
                          <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><polygon points="6 4 20 12 6 20 6 4" /></svg>
                        </div>
                      </div>
                      <div className="absolute top-[12px] left-[12px] flex items-center gap-[6px] bg-black/40 rounded-full px-[10px] py-[5px]" style={{ backdropFilter: 'blur(8px)' }}>
                        <div className="size-[18px] rounded-full bg-white flex items-center justify-center">
                          <span className="text-[10px] font-['Geist:SemiBold'] font-semibold text-[#0c221f]">W</span>
                        </div>
                        <span className="text-white text-[11px] font-['Geist:Medium'] font-medium">WeNext AI is in the DM</span>
                      </div>
                      <div className="absolute bottom-[12px] left-[12px] flex items-center gap-[6px] bg-black/40 rounded-full px-[10px] py-[5px]" style={{ backdropFilter: 'blur(8px)' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9f47a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 10v3" />
                          <path d="M6 6v11"><animate attributeName="d" values="M6 6v11;M6 10v3;M6 6v11" dur="1.5s" repeatCount="indefinite" /></path>
                          <path d="M10 3v18"><animate attributeName="d" values="M10 3v18;M10 9v5;M10 3v18" dur="1s" repeatCount="indefinite" /></path>
                          <path d="M14 8v7"><animate attributeName="d" values="M14 8v7;M14 6v11;M14 8v7" dur="0.8s" repeatCount="indefinite" /></path>
                          <path d="M18 5v13"><animate attributeName="d" values="M18 5v13;M18 7v9;M18 5v13" dur="1.5s" repeatCount="indefinite" /></path>
                          <path d="M22 10v3" />
                        </svg>
                        <span className="text-white text-[11px] font-['Geist:Medium'] font-medium">Anaya</span>
                      </div>
                      <div className="absolute bottom-[12px] right-[12px] w-[70px] h-[90px] rounded-[10px] overflow-hidden border border-white/30" style={{ background: 'linear-gradient(135deg,#f9a8d4,#c026d3)' }}>
                        <div className="w-full h-full flex items-center justify-center text-white text-[22px] font-['Geist:SemiBold'] font-semibold">AV</div>
                      </div>
                    </div>

                    <div className="mt-[16px] flex items-center gap-[8px]">
                      <div className="flex items-center gap-[3px] px-[12px] py-[10px] rounded-full font-['Geist:SemiBold'] font-semibold text-white text-[13px] tabular-nums" style={{ background: 'rgba(255,255,255,0.06)' }}>
                        <span>48</span><span className="hv3-colon">:</span><span>38</span>
                      </div>
                      {[
                        <path key="mic" d="M12 19v3M19 10v2a7 7 0 0 1-14 0v-2M9 2h6v13H9z" />,
                        <path key="cam" d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5M2 6h14v12H2z" />,
                        <path key="vol" d="M11 5 6 9H2v6h4l5 4V5zM16 9a5 5 0 0 1 0 6M19 6a9 9 0 0 1 0 12" />,
                        <g key="ell"><circle cx="5" cy="12" r="1.5" fill="white" /><circle cx="12" cy="12" r="1.5" fill="white" /><circle cx="19" cy="12" r="1.5" fill="white" /></g>,
                      ].map((p, i) => (
                        <button key={i} className="size-[36px] rounded-full flex items-center justify-center hover:bg-white/10 transition-colors" style={{ background: 'rgba(255,255,255,0.06)' }}>
                          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{p}</svg>
                        </button>
                      ))}
                      <button className="ml-auto size-[36px] rounded-full flex items-center justify-center hover:brightness-110 transition-all" style={{ background: '#ef4444' }}>
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
                      </button>
                    </div>
                  </div>

                  {/* ── Content 3: Facebook — Activate-style chat ── */}
                  <div
                    className="absolute inset-0 flex flex-col"
                    style={{
                      opacity: activeIdx === 2 ? 1 : 0,
                      pointerEvents: activeIdx === 2 ? 'auto' : 'none',
                      transition: 'opacity 0.55s cubic-bezier(0.22,1,0.36,1)',
                    }}
                  >
                    <div className="flex items-center justify-between px-[22px] py-[18px] border-b border-white/10">
                      <div className="flex items-center gap-[10px]">
                        <div className="size-[32px] rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#1877F2,#0a58ca)' }}>
                          <span className="text-white text-[13px] font-['Geist:SemiBold'] font-semibold">KI</span>
                        </div>
                        <span className="text-white text-[14px] font-['Geist:SemiBold'] font-semibold">WeNext AI &lt;&gt; Karthik</span>
                      </div>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)">
                        <circle cx="12" cy="5" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="12" cy="19" r="1.6" />
                      </svg>
                    </div>

                    <div className="flex-1 flex flex-col gap-[12px] px-[22px] py-[18px] overflow-hidden">
                      {chatStep >= 0 && (
                        <div className="self-end max-w-[80%] hv3-msg-in">
                          <div className="bg-[#1877F2] rounded-[14px] rounded-br-[4px] px-[14px] py-[10px]">
                            <span className="text-white text-[13px] leading-[1.45]">{TABS[2].userMsg}</span>
                          </div>
                        </div>
                      )}
                      {chatStep === 1 && (
                        <div className="self-start flex items-center gap-[4px] pl-[2px] hv3-msg-in">
                          <span className="size-[6px] rounded-full bg-white/40 hv3-typing" style={{ animationDelay: '0ms' }} />
                          <span className="size-[6px] rounded-full bg-white/40 hv3-typing" style={{ animationDelay: '180ms' }} />
                          <span className="size-[7px] rounded-full bg-white/70 hv3-typing" style={{ animationDelay: '360ms' }} />
                        </div>
                      )}
                      {chatStep >= 2 && chatStep !== 1 && (
                        <div className="self-start max-w-[92%] hv3-msg-in">
                          <div className="text-[rgba(255,255,255,0.55)] text-[11px] mb-[6px]">WeNext AI</div>
                          <div className="flex flex-col gap-[6px]">
                            <span className="text-white text-[13px] leading-[1.45]">Yes! Here's what I found for you:</span>
                            <span className="text-[rgba(255,255,255,0.85)] text-[13px] leading-[1.45]">🟢 3 pieces of {TABS[2].product} in stock</span>
                            <span className="text-[rgba(255,255,255,0.85)] text-[13px] leading-[1.45]">🟢 Free shipping via prepaid checkout</span>
                            <span className="text-white text-[13px] leading-[1.45] mt-[4px]">{TABS[2].aiMsg}</span>
                          </div>
                        </div>
                      )}
                      {chatStep >= 3 && (
                        <div className="self-end max-w-[70%] hv3-msg-in">
                          <div className="bg-[#1877F2] rounded-[14px] rounded-br-[4px] px-[14px] py-[10px]">
                            <span className="text-white text-[13px] leading-[1.45]">{TABS[2].followUp}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mx-[22px] mb-[22px] bg-white/[0.06] rounded-[14px] px-[14px] py-[12px] flex items-center gap-[10px] border border-white/10">
                      <div className="flex-1 min-w-0 overflow-hidden" ref={inputScrollRef}>
                        <div className="text-white text-[12px] font-['Geist:Regular'] flex items-center w-max" key={inputText}>
                          {inputText.split('').map((c, i) => (
                            <span key={i} className="hv3-letter" style={{ animationDelay: `${i * 60}ms`, whiteSpace: 'pre' }}>{c}</span>
                          ))}
                          <span className="hv3-caret ml-[1px] block w-[1.5px] h-[14px] bg-white" />
                        </div>
                      </div>
                      <button className="size-[28px] rounded-[8px] flex items-center justify-center shrink-0" style={{ background: '#c9f47a' }}>
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#0c221f" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes hv3BlobRotate {
          from { transform: scaleX(-1) rotate(0deg); }
          to   { transform: scaleX(-1) rotate(360deg); }
        }
        .hv3-blob-wrap { animation: hv3BlobRotate 24s linear infinite; transform-origin: 50% 50%; }

        @keyframes hv3MsgIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        .hv3-msg-in { animation: hv3MsgIn 0.4s cubic-bezier(0.32, 0.72, 0.35, 1) both; }

        @keyframes hv3Typing { 0%,60%,100% { transform: translateY(0); opacity: 0.5; } 30% { transform: translateY(-2px); opacity: 1; } }
        .hv3-typing { animation: hv3Typing 1.2s ease-in-out infinite; }

        @keyframes hv3Caret { 0%,49% { opacity: 1; } 50%,100% { opacity: 0; } }
        .hv3-caret { animation: hv3Caret 1s steps(2,start) infinite; }

        .hv3-letter { display: inline-block; max-width: 0; overflow: hidden; animation: hv3Letter 90ms linear forwards; }
        @keyframes hv3Letter { to { max-width: 2em; } }

        @keyframes hv3Pulse { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.4); } }
        .hv3-pulse { animation: hv3Pulse 1.2s ease-in-out infinite; }

        @keyframes hv3Colon { 0%,49% { opacity: 1; } 50%,100% { opacity: 0.2; } }
        .hv3-colon { animation: hv3Colon 1s steps(2,start) infinite; }
      `}</style>
    </section>
  );
}
