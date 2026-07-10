import Typography from '@mui/material/Typography';
import { useState, useEffect, useRef } from 'react';

const imgImage27 = "/figma/imgImage27.png";
const imgIcon1 = "/figma/imgIcon1.svg";
const imgGroup7 = "/figma/imgGroup7.svg";

const INSTAGRAM_GRADIENT = 'linear-gradient(45deg, #F58529 0%, #DD2A7B 35%, #8134AF 65%, #515BD4 100%)';

const HERO_TABS = [
  { name: 'WhatsApp', textPaint: '#25d366', fillBg: '#25d366', bgPale: '#ffffff', border: '#e6e6e6', shadow: 'rgba(37,211,102,0.25)', icon: '/figma/imgImage1.svg', iconPaint: '#25d366', brandSoft: '#e6f9ee' },
  { name: 'Instagram', textPaint: INSTAGRAM_GRADIENT, fillBg: INSTAGRAM_GRADIENT, bgPale: '#ffffff', border: '#e6e6e6', shadow: 'rgba(225,48,108,0.25)', icon: '/figma/imgImage2.svg', iconPaint: INSTAGRAM_GRADIENT, brandSoft: '#fdeaf2' },
  { name: 'Facebook', textPaint: '#1877F2', fillBg: '#1877F2', bgPale: '#ffffff', border: '#e6e6e6', shadow: 'rgba(24,119,242,0.25)', icon: '/figma/imgImage3.svg', iconPaint: '#1877F2', brandSoft: '#e7f0fe' },
];

type ChannelContent = {
  contact: { name: string; handle: string; initials: string; avatarBg: string };
  conversations: {
    initials: string; name: string; avatarBg: string; preview: string; time: string; unread?: boolean; tag?: string;
  }[];
  chat: { userMsg: string; aiMsg: string; product: string; price: string };
};

const CHANNEL_CONTENT: ChannelContent[] = [
  {
    contact: { name: 'Priya Sharma', handle: '+91 98104 22319', initials: 'PS', avatarBg: '#f6c453' },
    conversations: [
      { initials: 'PS', name: 'Priya Sharma', avatarBg: '#f6c453', preview: 'Is the linen kurta still available in M?', time: '2m', unread: true, tag: 'Customer' },
      { initials: 'RM', name: 'Rohit Menon', avatarBg: '#c8a882', preview: 'Do you ship to Kochi?', time: '18m' },
      { initials: 'SK', name: 'Sneha K.', avatarBg: '#a7c8b8', preview: 'Payment done ✓', time: '1h' },
    ],
    chat: {
      userMsg: 'Hi! Is the linen kurta still available in size M?',
      aiMsg: 'Yes 3 pieces left in M. Sending your payment link now →',
      product: 'Ivory Linen Kurta · M',
      price: '2,490',
    },
  },
  {
    contact: { name: 'Anaya Verma', handle: '@anayaverma', initials: 'AV', avatarBg: '#e08fb8' },
    conversations: [
      { initials: 'AV', name: 'Anaya Verma', avatarBg: '#e08fb8', preview: 'Loved your kurta drop 😍 blue in S?', time: '4m', unread: true, tag: 'Customer' },
      { initials: 'JD', name: 'Jaya D.', avatarBg: '#d9a3c9', preview: 'Story reply — swipe up link?', time: '22m' },
      { initials: 'MB', name: 'Meera B.', avatarBg: '#c69bcf', preview: 'Order confirmed 🛍️', time: '2h' },
    ],
    chat: {
      userMsg: 'Loved your latest kurta drop 😍 blue available in size S?',
      aiMsg: 'Yes 🛍️ 2 left in blue S. 1‑tap checkout link coming up →',
      product: 'Indigo Cotton Kurta · S',
      price: '2,790',
    },
  },
  {
    contact: { name: 'Karthik Iyer', handle: 'via Facebook Page', initials: 'KI', avatarBg: '#9db8e6' },
    conversations: [
      { initials: 'KI', name: 'Karthik Iyer', avatarBg: '#9db8e6', preview: 'Is the cotton shirt still in stock?', time: '6m', unread: true, tag: 'Customer' },
      { initials: 'NR', name: 'Nithya R.', avatarBg: '#a5b7d9', preview: 'Ad question — sizes?', time: '30m' },
      { initials: 'AJ', name: 'Arun J.', avatarBg: '#b1c3e0', preview: 'Thanks, ordered!', time: '3h' },
    ],
    chat: {
      userMsg: 'Saw your ad — is the sky cotton shirt still in stock?',
      aiMsg: 'Yes! Size M has 3 pieces left. Secure checkout link below →',
      product: 'Sky Cotton Shirt · M',
      price: '1,890',
    },
  },
];

const STEP_DURATION_MS = 5000;

export default function HeroV3() {
  const [heroTab, setHeroTab] = useState(0);
  const [heroProgress, setHeroProgress] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number>(0);

  useEffect(() => {
    startRef.current = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startRef.current;
      const p = Math.min(100, (elapsed / STEP_DURATION_MS) * 100);
      setHeroProgress(p);
      if (elapsed >= STEP_DURATION_MS) {
        setHeroTab(t => (t + 1) % HERO_TABS.length);
        startRef.current = performance.now();
        setHeroProgress(0);
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  const active = HERO_TABS[heroTab];
  const activeContent = CHANNEL_CONTENT[heroTab];

  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="HeroV3">
      <div className="bg-[#092511] content-stretch flex flex-col items-start container mx-auto px-4 xl:px-0 relative shrink-0 w-full shadow-[0_0_0_100vmax_#092511] [clip-path:inset(0_-100vmax)]">
        <div className="relative shrink-0 w-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
            {/* Texture overlay */}
            <div className="absolute h-[860px] left-0 right-0 mix-blend-luminosity opacity-[0.02] top-0">
              <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage27} />
            </div>

            <div className="relative shrink-0 w-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">

                {/* ══ LEFT COLUMN — same as HeroV1 ══ */}
                <div className="border-[rgba(255,255,255,0.1)] border-l border-solid content-stretch flex min-h-[calc(100vh-80px)] items-center min-w-px max-w-[690px] pl-px relative">
                  <div className="flex-[1_0_0] min-w-px relative">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start px-[64px] relative size-full">
                      <div className="relative shrink-0 w-full">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
                          <Typography className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[1.2] min-w-full relative shrink-0 text-[68px] text-white tracking-[-1px] w-[min-content]">
                            Turn every <span className="invisible inline-block w-[340px] align-middle"></span> chat into revenue.
                          </Typography>
                          <Typography className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[1.4] relative shrink-0 text-[#b7b7b7] text-[22px] w-[521px]">
                            WeNext unifies your WhatsApp inbox, automates replies, runs campaigns, and converts leads — all powered by AI built.
                          </Typography>
                          {/* Animated channel pill */}
                          <div
                            className="absolute border-[1.5px] border-solid h-[84px] left-[2px] rounded-[22px] top-[85px] w-[340px]"
                            style={{ background: active.bgPale, borderColor: active.border, boxShadow: `0px 18px 40px -20px ${active.shadow}` }}
                          >
                            <div className="flex items-center justify-center overflow-clip px-[24px] py-[1.5px] relative rounded-[inherit] size-full gap-[16px]">
                              <div
                                className="shrink-0 size-[40px]"
                                style={{
                                  background: active.iconPaint,
                                  WebkitMaskImage: `url(${active.icon})`,
                                  maskImage: `url(${active.icon})`,
                                  WebkitMaskSize: 'contain',
                                  maskSize: 'contain',
                                  WebkitMaskRepeat: 'no-repeat',
                                  maskRepeat: 'no-repeat',
                                  WebkitMaskPosition: 'center',
                                  maskPosition: 'center',
                                }}
                              />
                              <Typography
                                className="font-['Geist:SemiBold'] font-semibold leading-[48px] text-[48px] tracking-[-1.2px] whitespace-nowrap"
                                style={
                                  active.textPaint.startsWith('linear-gradient')
                                    ? {
                                      backgroundImage: active.textPaint,
                                      WebkitBackgroundClip: 'text',
                                      backgroundClip: 'text',
                                      WebkitTextFillColor: 'transparent',
                                      color: 'transparent',
                                      display: 'inline-block',
                                    }
                                    : { color: active.textPaint }
                                }
                              >
                                {active.name}
                              </Typography>
                            </div>
                            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.6)]" />
                          </div>
                        </div>
                      </div>

                      {/* CTAs */}
                      <div className="relative shrink-0">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
                          <div className="bg-[#06b349] hover:bg-[#05a043] active:scale-[0.98] transition-all duration-150 relative rounded-[8px] shrink-0 cursor-pointer">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.992px] items-center overflow-clip pl-[20px] pr-[15px] py-[15px] relative rounded-[inherit] size-full">
                              <Typography className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-none relative shrink-0 text-[18px] text-white whitespace-nowrap">
                                Book a demo
                              </Typography>
                              <div className="relative shrink-0 size-[20px]">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
                              </div>
                            </div>
                          </div>
                          <div className="bg-white hover:bg-[#f8f5ec] active:scale-[0.98] transition-all duration-150 border border-[#dedace] border-solid relative rounded-[8px] shrink-0 cursor-pointer">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[21px] pr-[16px] py-[16px] relative rounded-[inherit] size-full">
                              <Typography className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-none relative shrink-0 text-[#092511] text-[18px] whitespace-nowrap">
                                Get Started
                              </Typography>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ══ RIGHT COLUMN — desktop inbox mockup (replaces phones) ══ */}
                <div className="border-[rgba(255,255,255,0.1)] border-r border-solid content-stretch flex flex-col min-h-[calc(100vh-160px)] items-start overflow-clip pr-px relative shrink-0 w-[600px]">
                  <div className="h-[calc(100vh-80px)] min-h-[640px] relative shrink-0 w-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full z-10">

                      {/* Ambient channel-tinted glow */}
                      <div
                        className="absolute rounded-full blur-[60px] opacity-[0.35] transition-all duration-[600ms] pointer-events-none"
                        style={{
                          top: '80px',
                          left: '30px',
                          right: '30px',
                          height: '440px',
                          background: `radial-gradient(ellipse at 50% 50%, ${heroTab === 1 ? 'rgba(221,42,123,0.5)' : heroTab === 2 ? 'rgba(24,119,242,0.5)' : 'rgba(6,179,73,0.5)'} 0%, transparent 65%)`,
                        }}
                      />

                      {/* Backing card shadow (echo of HeroV1's dark backing) */}
                      <div className="absolute bg-[#0b2e15] shadow-[0_0_0_10px_#15371f] bottom-[130px] h-[440px] left-[30px] opacity-40 rounded-[16px] w-[540px]" />

                      {/* Desktop inbox mockup card */}
                      <div
                        className="absolute bottom-[150px] left-[30px] w-[540px] rounded-[16px] overflow-hidden bg-white"
                        style={{ boxShadow: '0 30px 70px -22px rgba(0,0,0,0.55), 0 6px 16px -6px rgba(0,0,0,0.30), inset 0 0 0 1px rgba(255,255,255,0.06)' }}
                      >
                        {/* Top header bar */}
                        <div className="flex items-center gap-[10px] px-[10px] py-[8px] border-b border-[rgba(12,34,31,0.08)] bg-white">
                          <div className="flex items-center gap-[6px] shrink-0">
                            <div className="size-[22px] rounded-[6px] bg-[#092511] flex items-center justify-center">
                              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#06b349" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M8 8h8v8M16 8l-8 8" />
                              </svg>
                            </div>
                            <Typography className="text-[#0c221f] text-[12px] font-semibold tracking-[-0.2px]">wenext</Typography>
                          </div>

                          <div className="flex-1 flex items-center gap-[6px] bg-[#f3efe3] rounded-full px-[10px] py-[5px] max-w-[200px]">
                            <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="#60584c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                            </svg>
                            <Typography className="text-[#60584c] text-[10px] flex-1">Ask AI or Search pages</Typography>
                            <span className="inline-flex items-center justify-center h-[16px] px-[4px] rounded-[4px] bg-white border border-[rgba(12,34,31,0.10)]">
                              <Typography className="text-[#60584c] text-[9px] font-medium">⌘ K</Typography>
                            </span>
                          </div>

                          <div className="flex items-center gap-[5px] shrink-0">
                            <div className="inline-flex items-center gap-[4px] bg-[#e5f6e7] rounded-full px-[7px] py-[3px]">
                              <span className="size-[6px] rounded-full bg-[#06b349]" />
                              <Typography className="text-[#0f6b34] text-[9px] font-semibold">Turbo</Typography>
                            </div>
                            <div className="inline-flex items-center gap-[3px] bg-[#06b349] rounded-full pl-[8px] pr-[3px] py-[2px]">
                              <Typography className="text-white text-[9px] font-semibold tracking-[0.2px]">NEXA AI</Typography>
                              <span className="inline-flex items-center justify-center size-[14px] rounded-full bg-white/25">
                                <svg viewBox="0 0 24 24" width="8" height="8" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M5 12h14M13 5l7 7-7 7" />
                                </svg>
                              </span>
                            </div>
                            <div className="size-[22px] rounded-full bg-[#092511] flex items-center justify-center text-white text-[10px] font-semibold">M</div>
                          </div>
                        </div>

                        {/* Body: conversation list + chat detail */}
                        <div className="grid grid-cols-[190px_1fr] h-[360px]">
                          {/* Conversation list */}
                          <div className="border-r border-[rgba(12,34,31,0.06)] bg-[#fbfaf3] flex flex-col">
                            <div className="px-[12px] pt-[10px] pb-[8px]">
                              <Typography className="text-[#0c221f] text-[12px] font-semibold leading-[1.1] mb-[6px]">
                                Conversations
                              </Typography>

                              {/* channel filter circles */}
                              <div className="flex items-center gap-[7px] mb-[8px]">
                                {HERO_TABS.map((t, i) => {
                                  const isActiveCircle = i === heroTab;
                                  return (
                                    <div
                                      key={i}
                                      className="relative inline-flex items-center justify-center size-[24px] rounded-full transition-all duration-[400ms]"
                                      style={{
                                        background: t.fillBg,
                                        boxShadow: isActiveCircle ? `0 0 0 2px white, 0 0 0 3.5px ${t.name === 'Instagram' ? '#DD2A7B' : t.name === 'Facebook' ? '#1877F2' : '#25D366'}` : 'none',
                                        transform: isActiveCircle ? 'scale(1.05)' : 'scale(1)',
                                      }}
                                    >
                                      <img alt="" className="size-[13px]" src={t.icon} style={{ filter: 'brightness(0) invert(1)' }} />
                                    </div>
                                  );
                                })}
                              </div>

                              {/* tab pills */}
                              <div className="flex items-center gap-[3px]">
                                <div className="inline-flex items-center rounded-full bg-[#0c221f] px-[8px] py-[2px]">
                                  <Typography className="text-white text-[9px] font-semibold">All</Typography>
                                </div>
                                <Typography className="text-[#60584c] text-[9px] px-[6px]">Mine</Typography>
                                <Typography className="text-[#60584c] text-[9px] px-[6px]">Unassigned</Typography>
                              </div>
                            </div>

                            {/* rows */}
                            <div key={`list-${heroTab}`} className="flex flex-col border-t border-[rgba(12,34,31,0.06)] hv3-morph-in">
                              {activeContent.conversations.map((conv, idx) => {
                                const isActiveConv = idx === 0;
                                const brandColor = heroTab === 1 ? '#DD2A7B' : heroTab === 2 ? '#1877F2' : '#25D366';
                                return (
                                  <div
                                    key={`${heroTab}-${idx}`}
                                    className="relative flex items-start gap-[7px] px-[10px] py-[8px] border-b border-[rgba(12,34,31,0.04)]"
                                    style={{
                                      background: isActiveConv ? 'white' : 'transparent',
                                      borderLeft: isActiveConv ? `2px solid ${brandColor}` : '2px solid transparent',
                                    }}
                                  >
                                    <div className="relative shrink-0">
                                      <div
                                        className="size-[26px] rounded-full flex items-center justify-center text-[9px] font-semibold text-[#0c221f]"
                                        style={{ background: conv.avatarBg }}
                                      >
                                        {conv.initials}
                                      </div>
                                      <div
                                        className="absolute -bottom-[1px] -right-[1px] size-[11px] rounded-full flex items-center justify-center border-[1.5px] border-white overflow-hidden"
                                        style={{ background: active.fillBg }}
                                      >
                                        <img alt="" className="size-[6px]" src={active.icon} style={{ filter: 'brightness(0) invert(1)' }} />
                                      </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center justify-between gap-[4px]">
                                        <Typography className="text-[#0c221f] text-[10px] font-semibold truncate leading-[1.15]">
                                          {conv.name}
                                        </Typography>
                                        {conv.tag && (
                                          <span className="inline-flex items-center bg-[#efe6f7] rounded-[4px] px-[3px] py-[1px]">
                                            <Typography className="text-[#7a5aa8] text-[7px] font-medium">{conv.tag}</Typography>
                                          </span>
                                        )}
                                      </div>
                                      <Typography className="text-[#60584c] text-[9px] truncate leading-[1.3] mt-[1px]">
                                        {conv.preview}
                                      </Typography>
                                      <Typography className="text-[#a89f8f] text-[8px] mt-[2px]">
                                        {conv.time}
                                      </Typography>
                                    </div>
                                    {conv.unread && (
                                      <span className="absolute top-[8px] right-[8px] size-[5px] rounded-full bg-[#06b349]" />
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          {/* Chat detail */}
                          <div className="flex flex-col bg-white">
                            {/* Contact header */}
                            <div key={`contact-${heroTab}`} className="flex items-center justify-between px-[12px] py-[8px] border-b border-[rgba(12,34,31,0.06)] hv3-morph-in">
                              <div className="flex items-center gap-[8px]">
                                <div
                                  className="size-[28px] rounded-full flex items-center justify-center text-[10px] font-semibold text-[#0c221f]"
                                  style={{ background: activeContent.contact.avatarBg }}
                                >
                                  {activeContent.contact.initials}
                                </div>
                                <div>
                                  <Typography className="text-[#0c221f] text-[11px] font-semibold leading-[1.1]">
                                    {activeContent.contact.name}
                                  </Typography>
                                  <div className="flex items-center gap-[4px] mt-[1px]">
                                    <span
                                      className="inline-flex items-center justify-center size-[10px] rounded-full overflow-hidden"
                                      style={{ background: active.fillBg }}
                                    >
                                      <img alt="" className="size-[5px]" src={active.icon} style={{ filter: 'brightness(0) invert(1)' }} />
                                    </span>
                                    <Typography className="text-[#60584c] text-[9px]">
                                      {activeContent.contact.handle}
                                    </Typography>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-[4px]">
                                <div className="inline-flex items-center gap-[3px] bg-[#e5f6e7] rounded-full px-[6px] py-[2px]">
                                  <span className="size-[5px] rounded-full bg-[#06b349]" />
                                  <Typography className="text-[#0f6b34] text-[8px] font-semibold">AI ON</Typography>
                                </div>
                              </div>
                            </div>

                            {/* Messages */}
                            <div key={`msgs-${heroTab}`} className="flex-1 flex flex-col gap-[6px] px-[12px] py-[10px] hv3-morph-in">
                              <div className="self-start max-w-[85%]">
                                <div className="bg-[#f3efe3] rounded-[10px] rounded-tl-[3px] px-[9px] py-[6px]">
                                  <Typography className="text-[#0c221f] text-[10px] leading-[1.4]">
                                    {activeContent.chat.userMsg}
                                  </Typography>
                                </div>
                                <Typography className="text-[#a89f8f] text-[8px] mt-[2px] ml-[2px]">10:24 AM</Typography>
                              </div>

                              <div className="self-end max-w-[85%] hv3-stagger-1">
                                <div className="bg-[#0c221f] rounded-[10px] rounded-tr-[3px] px-[9px] py-[6px]">
                                  <Typography className="text-white text-[10px] leading-[1.4]">
                                    {activeContent.chat.aiMsg}
                                  </Typography>
                                </div>
                                <div className="flex items-center justify-end gap-[3px] mt-[2px] mr-[2px]">
                                  <span className="inline-flex items-center gap-[2px] bg-[#e5f6e7] rounded-full px-[4px] py-[1px]">
                                    <span className="size-[4px] rounded-full bg-[#06b349]" />
                                    <Typography className="text-[#0f6b34] text-[7px] font-medium">AI</Typography>
                                  </span>
                                  <Typography className="text-[#a89f8f] text-[8px]">⚡ 0.4s</Typography>
                                </div>
                              </div>

                              <div className="self-end max-w-[95%] hv3-stagger-2">
                                <div className="bg-white border border-[rgba(12,34,31,0.10)] rounded-[10px] p-[7px] flex items-center gap-[7px]">
                                  <div className="size-[30px] rounded-[6px] bg-[#f3efe3] flex items-center justify-center shrink-0">
                                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#60584c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                      <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z" />
                                    </svg>
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <Typography className="text-[#0c221f] text-[9px] font-semibold leading-[1.1] truncate">
                                      {activeContent.chat.product}
                                    </Typography>
                                    <Typography className="text-[#60584c] text-[8px] mt-[1px]">
                                      Instant checkout · COD
                                    </Typography>
                                  </div>
                                  <div className="text-right shrink-0">
                                    <Typography className="text-[#0c221f] text-[11px] font-semibold leading-[1]">
                                      ₹{activeContent.chat.price}
                                    </Typography>
                                    <div className="inline-flex items-center gap-[2px] bg-[#06b349] rounded-full px-[5px] py-[1px] mt-[2px]">
                                      <svg viewBox="0 0 24 24" width="6" height="6" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20 6L9 17l-5-5" />
                                      </svg>
                                      <Typography className="text-white text-[7px] font-semibold tracking-[0.3px]">PAID</Typography>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Composer */}
                            <div className="px-[12px] py-[7px] border-t border-[rgba(12,34,31,0.06)] bg-[#fbfaf3]">
                              <div className="flex items-center gap-[5px] bg-white border border-[rgba(12,34,31,0.08)] rounded-[7px] px-[7px] py-[5px]">
                                <span className="inline-flex items-center gap-[3px] bg-[#e5f6e7] rounded-[5px] px-[4px] py-[1px]">
                                  <svg viewBox="0 0 24 24" width="7" height="7" fill="#06b349">
                                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                                  </svg>
                                  <Typography className="text-[#0f6b34] text-[7px] font-semibold tracking-[0.3px]">AI</Typography>
                                </span>
                                <Typography className="text-[#60584c] text-[9px] flex-1 truncate">
                                  Drafting a reply based on inventory<span className="hv3-caret">|</span>
                                </Typography>
                                <button className="size-[20px] rounded-[5px] bg-[#0c221f] flex items-center justify-center">
                                  <svg viewBox="0 0 24 24" width="10" height="10" fill="white">
                                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* ══ Tab strip at bottom — same as HeroV1 ══ */}
                      <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.1)] flex items-center justify-center left-[calc(50%+0.5px)] p-[5px] rounded-[50px] bottom-[80px]">
                        {HERO_TABS.map((tab, i) => {
                          const isActive = i === heroTab;
                          return (
                            <button
                              key={i}
                              onClick={() => { setHeroTab(i); setHeroProgress(0); startRef.current = performance.now(); }}
                              className={`relative shrink-0 rounded-[30px] overflow-hidden cursor-pointer outline-none ${isActive ? '' : 'hover:bg-white/5'}`}
                              style={isActive ? { background: tab.fillBg } : undefined}
                            >
                              {isActive && (
                                <div
                                  className="absolute inset-y-0 left-0 pointer-events-none transition-[width] duration-[60ms] ease-linear"
                                  style={{ width: `${heroProgress}%`, background: 'linear-gradient(90deg, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.16) 100%)', backdropFilter: 'blur(1.5px)', WebkitBackdropFilter: 'blur(1.5px)' }}
                                />
                              )}
                              <div className="relative z-[1] flex gap-[5px] items-center justify-center px-[15px] py-[10px]">
                                <div className="relative shrink-0 size-[20px]">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={tab.icon} />
                                </div>
                                <Typography className={`font-['Geist:Medium'] font-medium leading-none text-[18px] text-center tracking-[-0.5px] whitespace-nowrap transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#d8f1df]'}`}>
                                  {tab.name}
                                </Typography>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background texture overlay */}
            <div className="absolute h-[930px] left-[-20px] right-[-20px] top-[-20px] pointer-events-none overflow-hidden">
              <div className="absolute inset-[-42.07%_-25.18%_-52.88%_-25.18%]">
                <img alt="" className="block w-full h-full object-cover" src={imgGroup7} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes hv3MorphIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hv3-morph-in { animation: hv3MorphIn 0.5s cubic-bezier(0.32, 0.72, 0.35, 1) both; }
        .hv3-stagger-1 { animation: hv3MorphIn 0.5s cubic-bezier(0.32, 0.72, 0.35, 1) 0.15s both; }
        .hv3-stagger-2 { animation: hv3MorphIn 0.5s cubic-bezier(0.32, 0.72, 0.35, 1) 0.30s both; }

        @keyframes hv3Caret { 0%,50% { opacity: 1; } 50.1%,100% { opacity: 0; } }
        .hv3-caret { display: inline-block; margin-left: 1px; color: #06b349; animation: hv3Caret 1s steps(1,end) infinite; }
      `}</style>
    </div>
  );
}
