import Typography from '@mui/material/Typography';
import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { TrustedByStrip, SecuritySection, PricingTeaser, FinalCTA, HomeFeaturesMockup } from '../components/HomeSections';
import HeroV2 from '../components/HeroV2';
import HeroV3 from '../components/HeroV3';
import imgInstagramPost from '../assets/instagram-post.png';
import CommentIcon from '../assets/icons/comment.png';
import SmallLogo from '../assets/icons/sm-logo.png';
import User from '../assets/icons/user.png';
import BorderX from "../assets/borders.png";
import SignUp from "../assets/speed-scale/sign-up.png"
import ConnectMeta from "../assets/speed-scale/ConnectMeta.png"
import TrainAI from "../assets/speed-scale/Train the AI on your brand.png"
import SetAutomation from "../assets/speed-scale/Set Automations.jpg"
import LaunchBroadcast from "../assets/speed-scale/Launch your first broadcast.png"
import ConversationalCommerce from "../assets/built-growth/ConversationalCommerce.png"
import EnterpriseGradeSecurity from "../assets/built-growth/Enterprise-grade security.png"
import HeroV1 from "../components/HeroV1";
import mobileMock from "../assets/mobile-mock.png";
import SeamlessInegrations from "../assets/pain-points/seamless-integrations.png"

/* ─────────────────────────────────────────────
   iPhone 15+ Mockup with animated WhatsApp chat
───────────────────────────────────────────────── */
const WA_CHATS = [
  {
    contact: 'Priya Sharma', initials: 'PS', avatarBg: '#f6c453',
    userMsg: 'Is the linen kurta still available in M?',
    aiMsg: 'Yes! 3 left in M. Sending checkout link →',
    product: 'Ivory Linen Kurta · M', price: '2,490',
  },
  {
    contact: 'Rohit Menon', initials: 'RM', avatarBg: '#c8a882',
    userMsg: 'Do you ship to Kochi? Need it by Sunday.',
    aiMsg: "Yes, express delivery in 2 days. Here's the link →",
    product: 'Block Print Shirt · L', price: '1,890',
  },
  {
    contact: 'Sneha K.', initials: 'SK', avatarBg: '#a7c8b8',
    userMsg: "Can I return the blue kurta if it doesn't fit?",
    aiMsg: 'Absolutely! Free returns within 7 days. Link sent →',
    product: 'Indigo Cotton Kurta · S', price: '2,790',
  },
];

function IPhoneMockup() {
  // Full sync: customer types the question in the composer → bubble sent →
  // bot typing → bot reply → customer types "yes please" → bubble sent → bot typing → UPI card
  const [chatStep, setChatStep] = useState(-1);
  const [iphInputText, setIphInputText] = useState('');
  const iphInputScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const seq: Array<{ type: 'typing' | 'send' | 'step'; text?: string; step?: number; wait: number }> = [
      { type: 'typing', text: 'Hi! linen kurta still available?', wait: 2600 },
      { type: 'send', step: 0, wait: 700 },
      { type: 'step', step: 1, wait: 1200 },
      { type: 'step', step: 2, wait: 1600 },
      { type: 'typing', text: 'yes please', wait: 900 },
      { type: 'send', step: 3, wait: 700 },
      { type: 'step', step: 4, wait: 1200 },
      { type: 'step', step: 5, wait: 3400 },
    ];
    let i = 0;
    let cancelled = false;
    let t: ReturnType<typeof setTimeout>;
    const run = () => {
      if (cancelled) return;
      const s = seq[i];
      if (s.type === 'typing') {
        // First typing in the loop starts a fresh cycle — clear previously-shown bubbles now so the UPI card stays visible for its full wait duration
        if (i === 0) setChatStep(-1);
        setIphInputText(s.text || '');
      } else if (s.type === 'send') {
        setChatStep(s.step ?? 0);
        setIphInputText('');
      } else {
        setChatStep(s.step ?? 0);
      }
      i = (i + 1) % seq.length;
      t = setTimeout(run, s.wait);
    };
    setChatStep(-1);
    setIphInputText('');
    t = setTimeout(run, 300);
    return () => { cancelled = true; clearTimeout(t); };
  }, []);

  useEffect(() => {
    if (!iphInputText || !iphInputScrollRef.current) return;
    const scroll = () => { if (iphInputScrollRef.current) iphInputScrollRef.current.scrollLeft = iphInputScrollRef.current.scrollWidth; };
    scroll();
    const id = setInterval(scroll, 40);
    const stop = setTimeout(() => clearInterval(id), iphInputText.length * 60 + 200);
    return () => { clearInterval(id); clearTimeout(stop); };
  }, [iphInputText]);

  // iPhone 15 Pro — Natural Titanium. Real 19.5:9 screen ratio (300 × 650 → 274 × 594 screen).
  return (
    <div className="flex-1 mt-[28px] flex items-center justify-center min-h-[540px]">
      <style>{`
        @keyframes iphMsgIn { from { opacity:0; transform:translateY(4px) scale(0.98); } to { opacity:1; transform:translateY(0) scale(1); } }
        @keyframes iphTyping { 0%,60%,100% { transform:translateY(0); opacity:0.45; } 30% { transform:translateY(-3px); opacity:1; } }
        @keyframes iphCaret { 0%,49% { opacity:1; } 50%,100% { opacity:0; } }
        @keyframes iphLetterReveal { to { max-width: 2em; } }
        .iph-msg-in    { animation: iphMsgIn 0.32s cubic-bezier(0.32,0.72,0.35,1) both; }
        .iph-typing    { animation: iphTyping 1.2s ease-in-out infinite; }
        .iph-caret     { animation: iphCaret 1s steps(2,start) infinite; }
        .iph-letter    { display: inline-block; max-width: 0; overflow: hidden; animation: iphLetterReveal 90ms linear forwards; }
      `}</style>

      {/* Mobile Mockup Image with overlay */}
      <div className="relative w-full max-w-[360px] mx-auto">
        {/* Background Mobile Image */}
        <img src={mobileMock} alt="Phone Mockup" className="w-full h-auto object-contain block pointer-events-none" />

        {/* Screen Area Overlaid */}
        <div
          className="absolute overflow-hidden flex flex-col z-[10]"
          style={{
            top: '4%', bottom: '4.5%', left: '8%', right: '8%',
            borderRadius: '46px',
            background: '#e4ddd4',
            backgroundImage: "radial-gradient(rgba(11,31,26,0.045) 1px, transparent 1.4px)",
            backgroundSize: '18px 18px',
          }}
        >
          {/* Screen top status area — behind Dynamic Island */}
          <div className="relative shrink-0" style={{ background: '#075E54' }}>
            {/* iOS status bar — time / signal / battery, sized like real iOS */}
            <div className="flex items-center justify-between pt-[10px] pb-[8px] px-[22px] relative" style={{ height: 48 }}>
              <span className="text-white text-[13px] font-['Geist:SemiBold'] font-semibold tracking-[-0.2px] leading-none">9:41</span>
              <div className="flex items-center gap-[5px]">
                {/* signal */}
                <div className="flex items-end gap-[1.5px] h-[10px]">
                  <div className="w-[3px] h-[4px] bg-white rounded-[0.5px]" />
                  <div className="w-[3px] h-[6px] bg-white rounded-[0.5px]" />
                  <div className="w-[3px] h-[8px] bg-white rounded-[0.5px]" />
                  <div className="w-[3px] h-[10px] bg-white rounded-[0.5px]" />
                </div>
                {/* wifi */}
                <svg width="14" height="10" viewBox="0 0 16 11" fill="white">
                  <path d="M8 11l2-2.5a2.5 2.5 0 00-4 0L8 11zM3 5.2l1.6 1.6a4.8 4.8 0 016.8 0L13 5.2a7 7 0 00-10 0zM0 2.2l1.5 1.5a9.1 9.1 0 0113 0L16 2.2a11.2 11.2 0 00-16 0z" />
                </svg>
                {/* battery */}
                <div className="relative flex items-center">
                  <div className="w-[25px] h-[11px] rounded-[3px] border border-white/85 p-[1.5px] flex">
                    <div className="h-full w-[78%] bg-white rounded-[1.5px]" />
                  </div>
                  <div className="w-[1.5px] h-[4px] bg-white/85 rounded-r-[1px] ml-[0.5px]" />
                </div>
              </div>
            </div>

            {/* Dynamic Island — sits inside status bar area */}
            <div
              className="absolute left-1/2 -translate-x-1/2 rounded-full flex items-center justify-between"
              style={{ top: 11, left: 130, width: 108, height: 30, background: '#000', paddingLeft: 12, paddingRight: 12 }}
            >
              {/* front camera lens (right) rendered inside island */}
              <div className="flex-1" />
              <div className="size-[14px] rounded-full relative" style={{ background: 'radial-gradient(circle at 32% 30%, #333947 0%, #0a0a12 70%)', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05)' }}>
                <div className="absolute inset-[3px] rounded-full" style={{ background: 'radial-gradient(circle at 30% 30%, #4a5164 0%, #0a0a12 80%)' }} />
                <div className="absolute top-[3px] left-[3px] size-[3px] rounded-full bg-white/25" />
              </div>
            </div>
          </div>

          {/* WhatsApp header — Prathik Gadde */}
          <div className="shrink-0 flex items-center gap-[8px] px-[10px] pt-[8px] pb-[10px]" style={{ background: '#075E54', boxShadow: '0 1px 0 rgba(0,0,0,0.05)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4" className="shrink-0"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <div className="size-[30px] rounded-full flex items-center justify-center text-white font-['Geist:Bold'] font-bold text-[11px] shrink-0" style={{ background: 'linear-gradient(135deg, #f4b860 0%, #d97a3f 100%)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25)' }}>PG</div>
            <div className="flex-1 flex flex-col min-w-0">
              <span className="text-white text-[13px] font-['Geist:SemiBold'] font-semibold leading-none tracking-[-0.1px] truncate">Prathik Gadde</span>
              <span className="text-[#b8dcc9] text-[10px] font-['Geist:Regular'] leading-none mt-[3px]">online</span>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white" className="shrink-0"><path d="M15 8v8l6 4V4l-6 4zM4 5h9v14H4z" /></svg>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white" className="shrink-0"><path d="M20 15.5c-1.2 0-2.4-.2-3.5-.6a1 1 0 00-1 .3l-2 2c-2.8-1.4-5-3.5-6.5-6.5l2-2c.3-.3.3-.7.2-1-.4-1.1-.6-2.3-.6-3.5A1 1 0 007.6 3H4a1 1 0 00-1 1c0 9.4 7.6 17 17 17a1 1 0 001-1v-3.5a1 1 0 00-1-1z" /></svg>
            <svg width="4" height="14" viewBox="0 0 4 24" fill="white" className="shrink-0"><circle cx="2" cy="5" r="2" /><circle cx="2" cy="12" r="2" /><circle cx="2" cy="19" r="2" /></svg>
          </div>

          {/* TODAY chip */}
          <div className="text-center pt-[8px] pb-[4px] shrink-0">
            <span className="text-[#54656F] text-[9px] font-['Geist:Medium'] font-medium px-[9px] py-[3px] rounded-[6px]" style={{ background: '#f7f2e8', boxShadow: '0 1px 0.5px rgba(11,20,26,0.08)' }}>TODAY</span>
          </div>

          {/* Chat body */}
          <div className="flex-1 px-[10px] pb-[8px] flex flex-col gap-[6px] overflow-hidden justify-end">
            {chatStep >= 0 && (
              <div className="self-start relative iph-msg-in max-w-[78%]">
                <div className="bg-white px-[10px] py-[7px] relative" style={{ borderRadius: '10px 10px 10px 0px', boxShadow: '0 1px 0.5px rgba(11,20,26,0.13)' }}>
                  <div className="text-[#111b21] text-[12px] font-['Geist:Regular'] leading-[1.3]">Hi! linen kurta still available?</div>
                  <div className="text-[#667781] text-[9px] text-right mt-[2px] font-['Geist:Regular']">10:34</div>
                </div>
                {/* left tail */}
                {/* <svg width="8" height="13" viewBox="0 0 8 13" className="absolute left-[-6px] top-0" style={{ filter: 'drop-shadow(0 1px 0.5px rgba(11,20,26,0.13))' }}>
                      <path d="M8 0 L8 13 L0 0 Z" fill="white" />
                    </svg> */}
              </div>
            )}

            {chatStep === 1 && (
              <div className="self-end relative iph-msg-in">
                <div className="px-[12px] py-[9px] flex gap-[3.5px] items-center" style={{ background: '#d9fdd3', borderRadius: '10px 10px 0px 10px', boxShadow: '0 1px 0.5px rgba(11,20,26,0.13)' }}>
                  <span className="size-[5px] rounded-full bg-[#7a8f86] iph-typing" style={{ animationDelay: '0ms' }} />
                  <span className="size-[5px] rounded-full bg-[#7a8f86] iph-typing" style={{ animationDelay: '180ms' }} />
                  <span className="size-[5px] rounded-full bg-[#7a8f86] iph-typing" style={{ animationDelay: '360ms' }} />
                </div>
                {/* <svg width="8" height="13" viewBox="0 0 8 13" className="absolute right-[-6px] top-0" style={{ filter: 'drop-shadow(0 1px 0.5px rgba(11,20,26,0.13))' }}>
                      <path d="M0 0 L0 13 L8 0 Z" fill="#d9fdd3" />
                    </svg> */}
              </div>
            )}

            {chatStep >= 2 && chatStep !== 1 && (
              <div className="self-end relative iph-msg-in max-w-[84%]">
                <div className="px-[10px] py-[7px] relative" style={{ background: '#d9fdd3', borderRadius: '10px 10px 0px 10px', boxShadow: '0 1px 0.5px rgba(11,20,26,0.13)' }}>
                  <div className="text-[#06846f] text-[9.5px] font-['Geist:SemiBold'] font-semibold mb-[2px] leading-none">WeNext AI</div>
                  <div className="text-[#111b21] text-[12px] font-['Geist:Regular'] leading-[1.35]">Yes! In stock — 3 pieces left. Want me to share a secure UPI link?</div>
                  <div className="flex items-center justify-end gap-[3px] mt-[2px]">
                    <span className="text-[#667781] text-[9px] font-['Geist:Regular']">10:36</span>
                    <svg width="14" height="9" viewBox="0 0 16 11" fill="#53bdeb"><path d="M11.1.4L4.9 6.6 2.4 4.1 1 5.5l3.9 3.9L12.5 1.8zm4 0L8.9 6.6 6.6 4.3 5.2 5.7 8.9 9.4 16.5 1.8z" /></svg>
                  </div>
                </div>
                {/* <svg width="8" height="13" viewBox="0 0 8 13" className="absolute right-[-6px] top-0" style={{ filter: 'drop-shadow(0 1px 0.5px rgba(11,20,26,0.13))' }}>
                      <path d="M0 0 L0 13 L8 0 Z" fill="#d9fdd3" />
                    </svg> */}
              </div>
            )}

            {chatStep >= 3 && (
              <div className="self-start relative iph-msg-in max-w-[52%]">
                <div className="bg-white px-[10px] py-[7px]" style={{ borderRadius: '10px 10px 10px 0px', boxShadow: '0 1px 0.5px rgba(11,20,26,0.13)' }}>
                  <div className="text-[#111b21] text-[12px] font-['Geist:Regular'] leading-[1.3]">Yes please.</div>
                  <div className="text-[#667781] text-[9px] text-right mt-[2px] font-['Geist:Regular']">10:37</div>
                </div>
                {/* <svg width="8" height="13" viewBox="0 0 8 13" className="absolute left-[-6px] top-0" style={{ filter: 'drop-shadow(0 1px 0.5px rgba(11,20,26,0.13))' }}>
                      <path d="M8 0 L8 13 L0 0 Z" fill="white" />
                    </svg> */}
              </div>
            )}

            {chatStep === 4 && (
              <div className="self-end relative iph-msg-in">
                <div className="px-[12px] py-[9px] flex gap-[3.5px] items-center" style={{ background: '#d9fdd3', borderRadius: '10px 10px 0px 10px', boxShadow: '0 1px 0.5px rgba(11,20,26,0.13)' }}>
                  <span className="size-[5px] rounded-full bg-[#7a8f86] iph-typing" style={{ animationDelay: '0ms' }} />
                  <span className="size-[5px] rounded-full bg-[#7a8f86] iph-typing" style={{ animationDelay: '180ms' }} />
                  <span className="size-[5px] rounded-full bg-[#7a8f86] iph-typing" style={{ animationDelay: '360ms' }} />
                </div>
                {/* <svg width="8" height="13" viewBox="0 0 8 13" className="absolute right-[-6px] top-0" style={{ filter: 'drop-shadow(0 1px 0.5px rgba(11,20,26,0.13))' }}>
                      <path d="M0 0 L0 13 L8 0 Z" fill="#d9fdd3" />
                    </svg> */}
              </div>
            )}

            {chatStep >= 5 && (
              <div className="self-end relative iph-msg-in max-w-[82%]">
                <div
                  className="px-[12px] py-[10px] flex flex-col items-start relative overflow-hidden"
                  style={{
                    background: '#FFF',
                    borderRadius: '12px 12px 0px 12px',
                    boxShadow: '0 1px 0.5px rgba(11,20,26,0.13)',
                  }}
                >
                  {/* subtle radial highlight */}
                  <div className="absolute -top-4 -right-4 size-[70px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%)' }} />
                  <div className="flex items-center gap-[6px] relative">
                    <div className="size-[16px] rounded-[4px] flex items-center justify-center text-[10.5px] font-['Geist:Bold'] font-bold text-white" style={{ background: '#111b21', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>₹</div>
                    <span className="text-[#111b21] text-[10.5px] font-['Geist:SemiBold'] font-semibold tracking-[-0.1px]">UPI Payment Link</span>
                  </div>
                  <span className="text-[#111b21] text-[20px] font-['Geist:Bold'] font-bold leading-[1] mt-[8px] tracking-[-0.5px] relative">₹2,490</span>
                  <span className="text-[#667781] text-[9px] font-['Geist:Regular'] mt-[3px] relative">Ivory Linen Kurta · Size M · Qty 1</span>
                  <div className="h-[1px] w-full mt-[8px] mb-[6px] relative" style={{ background: 'rgba(17,27,33,0.08)' }} />
                  <div className="flex items-center justify-between w-full relative">
                    <span className="text-[#00A884] text-[10px] font-['Geist:Medium'] font-medium">Tap to pay →</span>
                    <div className="flex items-center gap-[3px]">
                      <span className="text-[#667781] text-[9px]">10:38</span>
                      <svg width="14" height="9" viewBox="0 0 16 11" fill="#53bdeb"><path d="M11.1.4L4.9 6.6 2.4 4.1 1 5.5l3.9 3.9L12.5 1.8zm4 0L8.9 6.6 6.6 4.3 5.2 5.7 8.9 9.4 16.5 1.8z" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Composer */}
          <div className="shrink-0 px-[7px] pt-[6px] pb-[4px] flex items-end gap-[6px]" style={{ background: '#f0f2f5' }}>
            <div className="flex-1 bg-white rounded-[20px] min-h-[34px] flex items-center pl-[8px] pr-[8px] gap-[6px]" style={{ boxShadow: '0 1px 1px rgba(11,20,26,0.06)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0">
                <circle cx="12" cy="12" r="9" stroke="#54656F" strokeWidth="1.6" />
                <circle cx="8.6" cy="10.5" r="1.1" fill="#54656F" />
                <circle cx="15.4" cy="10.5" r="1.1" fill="#54656F" />
                <path d="M8.5 14c1 1.3 2.2 1.9 3.5 1.9s2.5-.6 3.5-1.9" stroke="#54656F" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              <div className="flex-1 min-w-0 overflow-hidden" ref={iphInputScrollRef}>
                <div className="text-[#111b21] text-[12px] font-['Geist:Regular'] flex items-center w-max" style={{ lineHeight: '15px' }} key={iphInputText}>
                  {iphInputText.length === 0 && <span className="text-[#8696a0]">Message</span>}
                  {iphInputText.split('').map((c, idx) => (
                    <span key={idx} className="iph-letter" style={{ animationDelay: `${idx * 60}ms`, whiteSpace: 'pre' }}>{c}</span>
                  ))}
                  <span className="iph-caret ml-[1px] block w-[1.5px] h-[14px] bg-[#00A884]" />
                </div>
              </div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0"><path d="M21 12l-8.5 8.5a5 5 0 01-7-7L14 5a3.5 3.5 0 014.9 5L10.5 18.5a2 2 0 01-2.8-2.8L15 8.5" stroke="#54656F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="shrink-0"><path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1z" stroke="#54656F" strokeWidth="1.5" strokeLinejoin="round" /><circle cx="12" cy="14" r="3.3" stroke="#54656F" strokeWidth="1.5" /></svg>
            </div>
            <div className="size-[34px] rounded-full flex items-center justify-center shrink-0" style={{ background: '#00A884', boxShadow: '0 2px 4px rgba(0,168,132,0.35)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M12 1a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4zm6 11a6 6 0 0 1-12 0H4a8 8 0 0 0 7 7.93V23h2v-3.07A8 8 0 0 0 20 12h-2z" /></svg>
            </div>
          </div>

          {/* Home indicator */}
          <div className="shrink-0 flex items-center justify-center pb-[7px] pt-[4px]" style={{ background: '#f0f2f5' }}>
            <div className="w-[110px] h-[4px] rounded-full bg-[#0a0a0a]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Counter({ target, decimals = 0, suffix = '', duration = 1800 }: { target: number; decimals?: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const start = performance.now();
            const animate = (now: number) => {
              const elapsed = now - start;
              const t = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - t, 4);
              setValue(target * eased);
              if (t < 1) requestAnimationFrame(animate);
              else setValue(target);
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{value.toFixed(decimals)}{suffix}</span>;
}

const imgVector = "/figma/imgVector.png";
const imgImage27 = "/figma/imgImage27.png";
const imgImage14 = "/figma/imgImage14.png";
const imgImage21 = "/figma/imgImage21.png";
const imgImage3134 = "/figma/imgImage3134.png";
const imgImage3145 = "/figma/imgImage3145.png";
const imgImage3147 = "/figma/imgImage3147.png";
const imgImage3148 = "/figma/imgImage3148.png";
const imgImage3150 = "/figma/imgImage3150.png";
const imgImage3151 = "/figma/imgImage3151.png";
const imgIcon = "/figma/imgIcon.svg";
const imgIcon1 = "/figma/imgIcon1.svg";
const imgImage = "/figma/imgImage.svg";
const imgLine1 = "/figma/imgLine1.svg";
const imgImage1 = "/figma/imgImage1.svg";
const imgImage2 = "/figma/imgImage2.svg";
const imgImage3 = "/figma/imgImage3.svg";
const imgGroup7 = "/figma/imgGroup7.svg";
const imgGroup = "/figma/imgGroup.svg";
const imgGroup1 = "/figma/imgGroup1.svg";
const imgMaskGroup = "/figma/imgMaskGroup.svg";
const imgFi5968764 = "/figma/imgFi5968764.svg";
const imgFi15707749 = "/figma/imgFi15707749.svg";
const imgFi733585 = "/figma/imgFi733585.svg";
const imgVector4 = "/figma/imgVector4.svg";
const imgVector3 = "/figma/imgVector3.svg";
const imgFrame2147238250 = "/figma/imgFrame2147238250.svg";
const imgIcon2 = "/figma/imgIcon2.svg";
const imgIcon3 = "/figma/imgIcon3.svg";
const imgIcon4 = "/figma/imgIcon4.svg";
const imgIcon5 = "/figma/imgIcon5.svg";
const imgIcon6 = "/figma/imgIcon6.svg";
const imgIcon7 = "/figma/imgIcon7.svg";
const imgIcon8 = "/figma/imgIcon8.svg";
const imgImageWenext = "/figma/imgImageWenext.svg";
const imgVector173 = "/figma/imgVector173.svg";

const STEP_DURATION_MS = 5000;
const STEPS = [
  { title: 'Sign up free', sub: 'No card needed. 14 days free on every channel. Cancel any time, keep your data.' },
  { title: 'Connect Meta accounts', sub: 'Link WhatsApp Business, Instagram and Facebook in one click — guided OAuth, no developer required.' },
  // { title: 'Train the AI on your brand', sub: 'Upload your catalog, FAQs and tone of voice. The AI learns to reply like your best agent in minutes.' },
  { title: 'Set Automations', sub: 'Choose templates for cart recovery, COD-to-prepaid nudges and re-engagement — or build your own flows.' },
  { title: 'Launch your first broadcast', sub: 'Schedule, segment and send. Watch replies, payments and recoveries land in real time.' },
];

const INSTAGRAM_GRADIENT = 'linear-gradient(45deg, #F58529 0%, #DD2A7B 35%, #8134AF 65%, #515BD4 100%)';
const HERO_TABS = [
  { name: 'WhatsApp', textPaint: '#25d366', fillBg: '#25d366', bgPale: '#ffffff', border: '#e6e6e6', shadow: 'rgba(37,211,102,0.25)', icon: '/figma/imgImage1.svg', iconPaint: '#25d366' },
  { name: 'Instagram', textPaint: INSTAGRAM_GRADIENT, fillBg: INSTAGRAM_GRADIENT, bgPale: '#ffffff', border: '#e6e6e6', shadow: 'rgba(225,48,108,0.25)', icon: '/figma/imgImage2.svg', iconPaint: INSTAGRAM_GRADIENT },
  { name: 'Facebook', textPaint: '#1877F2', fillBg: '#1877F2', bgPale: '#ffffff', border: '#e6e6e6', shadow: 'rgba(24,119,242,0.25)', icon: '/figma/imgImage3.svg', iconPaint: '#1877F2' },
];

const AI_QUERIES = [
  'What are my top selling products this week?',
  'Draft a Diwali campaign for regular customers',
  'Show me abandoned carts from the last 24 hours',
  "Which customers haven't ordered in 30 days?",
  'Send follow-up messages to yesterday’s inquiries',
  'Create a broadcast for new arrivals this season',
];

const FAQS = [
  { q: 'How long does it take to go live on WhatsApp?', a: "Most brands are live in 15 minutes. Sign up, connect your Meta accounts via guided OAuth, and our AI is trained on your catalog within a few clicks — no developer needed." },
  { q: 'Do I need a developer to set up WeNext?', a: 'Not at all. Every step — connecting channels, training the AI on your catalog, building automations — is no-code. Our setup wizard walks you through the full stack.' },
  { q: 'Which channels does WeNext support?', a: 'WhatsApp Business API, Instagram DMs, Facebook Messenger, and website live chat — all in one unified inbox with shared customer context and a single conversation history.' },
  { q: 'Can the AI speak Hindi and Hinglish?', a: 'Yes. WeNext AI replies fluently in Hindi, English, and Hinglish. It automatically detects the customer\'s language from the incoming message and responds in the same tone.' },
  { q: 'How does cart recovery work?', a: 'Set up the cart abandonment template once. WeNext sends timed WhatsApp nudges with a one-tap UPI link 4 hours after the cart is abandoned. Average D2C brands recover 31% of carts within the first 24 hours.' },
  { q: 'What payment options are supported?', a: 'UPI, all major cards, COD-to-prepaid conversion, net banking, and wallets. Payments happen inside the conversation as a tap-to-pay link — no checkout page redirects, no drop-off.' },
  { q: 'How is WeNext priced?', a: 'Pay-as-you-grow based on monthly active conversations. The 14-day trial includes every channel and automation. No credit card required to start — cancel any time and keep your data.' },
  { q: 'Is my customer data secure?', a: 'Yes. All conversations are end-to-end encrypted via WhatsApp. Customer data is stored in India and is fully DPDP compliant. We never share or sell data to third parties.' },
  { q: 'Can I keep my existing WhatsApp number?', a: 'Absolutely. We migrate your existing WhatsApp Business number to the WhatsApp Business API without disrupting your customers or losing your chat history.' },
  { q: 'What happens after the 14-day trial?', a: "Pick the plan that fits your monthly conversation volume. Cancel any time and export all your data and contacts. Your conversations and customer history are always yours to keep." },
];

const TESTIMONIALS = [
  {
    quote: "Before WeNext, our leads were scattered across WhatsApp, Instagram, and Facebook, and our team struggled to follow up consistently. After switching to WeNext, we automated our conversations, centralized our lead management, and significantly improved our response time. ",
    highlight: "Within just 60 days, our qualified leads increased by 42%, and no inquiry goes unanswered anymore.",
    author: "Rahul Sharma",
    role: "Founder, Growing D2C Brand",
    image: imgImage3147,
    logo: imgImage3148
  },
  {
    quote: "As a fast-growing fashion house, handling thousands of DM inquiries on Instagram daily was exhausting. WeNext changed the game by automating our replies and routing complex sizing requests to support agents instantly. ",
    highlight: "Our customer satisfaction rating skyrocketed to 98% and DM response times dropped to under 2 minutes.",
    author: "Priya Nair",
    role: "Operations Director, StyleCo",
    image: imgImage3147,
    logo: imgImage3148
  },
  {
    quote: "We were losing 30% of our cart abandonments simply because we couldn't nudge customers back in time. WeNext allowed us to set up automated WhatsApp recovery flows that felt human and conversational. ",
    highlight: "We recovered over $45k in abandoned carts in the first month alone, with zero manual effort.",
    author: "Vikram Malhotra",
    role: "Co-Founder, FitGlow Nutrition",
    image: imgImage3147,
    logo: imgImage3148
  },
  {
    quote: "Managing customer support across WhatsApp and Email was a fragmented nightmare. With WeNext's Unified Inbox, our support staff has a single source of truth for every customer query, historical context, and order status. ",
    highlight: "Our team's average resolution time dropped by 50%, freeing up hours for product development.",
    author: "Ananya Sen",
    role: "Head of Customer Experience, HomeDecor Hub",
    image: imgImage3147,
    logo: imgImage3148
  },
  {
    quote: "Our ad campaigns were driving traffic but converting poorly because people had quick questions before buying. WeNext's AI Agent started answering pre-purchase queries 24/7 on our landing pages and WhatsApp. ",
    highlight: "Conversion rates increased by 3.5x and our customer acquisition cost dropped by 28%.",
    author: "Karthik Mehta",
    role: "Marketing Director, PureBites",
    image: imgImage3147,
    logo: imgImage3148
  }
];

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [heroTab, setHeroTab] = useState(0);
  const [heroProgress, setHeroProgress] = useState(0);
  const [magicIdx, setMagicIdx] = useState(0);
  const prevMagicIdxRef = useRef(0);
  useEffect(() => { prevMagicIdxRef.current = magicIdx; }, [magicIdx]);
  const [chatStep, setChatStep] = useState(0);
  const [waInputText, setWaInputText] = useState('');
  const waInputScrollRef = useRef<HTMLDivElement>(null);
  const [igOverlayOpen, setIgOverlayOpen] = useState(false);
  const [igPostShifted, setIgPostShifted] = useState(false);
  const [dashTab, setDashTab] = useState(0);
  const [dashProgress, setDashProgress] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const tickMs = 50;
    const duration = 9000;
    const id = setInterval(() => {
      setHeroProgress(p => {
        const next = p + (tickMs / duration) * 100;
        if (next >= 100) {
          setHeroTab(t => (t + 1) % HERO_TABS.length);
          return 0;
        }
        return next;
      });
    }, tickMs);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setMagicIdx(i => (i + 1) % AI_QUERIES.length), 2800);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    setWaInputText('');
    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const at = (ms: number, fn: () => void) => timeouts.push(setTimeout(() => { if (!cancelled) fn(); }, ms));

    if (heroTab === 0) {
      // WhatsApp: customer types the question in the input, sends as bubble, bot replies, customer types "yes please", sends, then UPI card
      setChatStep(-1);
      at(0, () => setWaInputText('Hi! linen kurta still available?'));
      at(2800, () => { setChatStep(0); setWaInputText(''); });
      at(3300, () => setChatStep(1));
      at(4400, () => setChatStep(2));
      at(5100, () => setWaInputText('yes please'));
      at(5900, () => { setChatStep(3); setWaInputText(''); });
      at(7000, () => setChatStep(4));
      at(7800, () => setChatStep(5));
    } else {
      setChatStep(0);
      const timings = [500, 1100, 700, 1100, 800, 1200];
      // Instagram tab shows a Reel first, then the comments overlay slides up — delay chatStep so typing starts after the sheet is up
      const leadIn = heroTab === 1 ? 1500 : 0;
      let total = leadIn;
      timings.forEach((ms, i) => {
        total += ms;
        at(total, () => setChatStep(i + 1));
      });
    }
    return () => { cancelled = true; timeouts.forEach(clearTimeout); };
  }, [heroTab]);

  useEffect(() => {
    if (!waInputText || !waInputScrollRef.current) return;
    const scroll = () => { if (waInputScrollRef.current) waInputScrollRef.current.scrollLeft = waInputScrollRef.current.scrollWidth; };
    scroll();
    const id = setInterval(scroll, 40);
    const stop = setTimeout(() => clearInterval(id), waInputText.length * 60 + 200);
    return () => { clearInterval(id); clearTimeout(stop); };
  }, [waInputText]);

  useEffect(() => {
    if (heroTab !== 1) { setIgOverlayOpen(false); setIgPostShifted(false); return; }
    setIgOverlayOpen(false);
    setIgPostShifted(false);
    const t1 = setTimeout(() => setIgPostShifted(true), 1200);
    const t2 = setTimeout(() => setIgOverlayOpen(true), 1500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [heroTab]);

  useEffect(() => {
    const tickMs = 50;
    const duration = 5000;
    const id = setInterval(() => {
      setDashProgress(p => {
        const next = p + (tickMs / duration) * 100;
        if (next >= 100) {
          setDashTab(t => (t + 1) % 5);
          return 0;
        }
        return next;
      });
    }, tickMs);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const tickMs = 50;
    const id = setInterval(() => {
      setProgress(p => {
        const next = p + (tickMs / STEP_DURATION_MS) * 100;
        if (next >= 100) {
          setActiveStep(s => (s + 1) % STEPS.length);
          return 0;
        }
        return next;
      });
    }, tickMs);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-[#f8f5ec] relative size-full" data-node-id="467:951" data-name="Home">
      <div className="content-stretch flex flex-col items-start w-full w-full" data-node-id="467:952">
        <Header />
        {/* <HeroV2 /> */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="467:971">
          <HeroV3 />
          {/* <HeroV1 /> */}

          <TrustedByStrip />
          <div className="content-stretch flex flex-col items-start overflow-clip container mx-auto px-4 xl:px-0 relative shrink-0 w-full" data-node-id="467:1029" data-name="Container">
            <div className="border-[#e0dac6] border-b border-l border-r border-solid relative shrink-0 w-full" data-node-id="467:1030">
              <div className="bg-clip-padding content-stretch flex flex-col items-start px-[50px] pt-[60px] pb-[40px] relative size-full">
                <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 mb-4" data-node-id="467:1031">
                  <div className="bg-[#06b349] relative shrink-0 size-[10px]" data-node-id="467:1032" />
                  <Typography className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Courier_Prime:Regular'] leading-[1.4] not-italic relative shrink-0 text-[#0c221f] text-[18px] text-center whitespace-nowrap" data-node-id="467:1033">
                    Pain Points
                  </Typography>
                </div>
                <Typography className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[1.4] min-w-full relative shrink-0 text-[#0c221f] text-[42px] tracking-[-1px] w-[min-content]" data-node-id="467:1034">
                  Every growing business <br /> hits this stage
                </Typography>
              </div>
            </div>
          </div>
          <div className="border-[#e0dac6] border-b border-solid content-stretch flex flex-col items-start container mx-auto px-4 xl:px-0 relative shrink-0 w-full" data-node-id="467:1062">
            <div className="border-[#e0dac6] border-l border-r border-solid content-stretch flex gap-[30px] items-center relative shrink-0 w-full" data-node-id="467:1063">
              <div className="bg-white border-[#e0dac6] border-r border-solid content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip p-[10px] relative spotlight-card" data-node-id="467:1064">
                <div className="bg-[#f8f5ec] content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[420px] items-start min-w-px overflow-clip p-[30px] relative" data-node-id="467:1065">
                  <div className="absolute inset-0 pointer-events-none" data-node-id="467:1066" data-name="image 3134" style={{ backgroundImage: 'linear-gradient(rgba(9,37,17,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(9,37,17,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center justify-center min-h-px relative w-full" data-node-id="467:1119">
                    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0 w-full spot-row" data-node-id="467:1120">
                      <div className="bg-white content-stretch drop-shadow-[0px_0px_5px_rgba(0,0,0,0.1)] flex gap-[12px] items-center opacity-80 px-[15px] py-[10px] relative rounded-[6px] shrink-0 w-full" data-node-id="467:1121">
                        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="467:1122">
                          <div className="bg-[rgba(69,145,244,0.18)] col-start-1 ml-0 mt-0 relative rounded-[8px] row-start-1 size-[50px]" data-node-id="467:1123" />
                          <div className="col-start-1 ml-[11px] mt-[11px] overflow-clip relative row-start-1 size-[28px]" data-node-id="467:1124" data-name="fi_5968764">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFi5968764} />
                          </div>
                        </div>
                        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Geist:Medium'] font-medium gap-[3px] items-start leading-[1.4] min-w-px relative whitespace-nowrap" data-node-id="467:1128">
                          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="467:1129">
                            <Typography className="relative shrink-0 text-[#092511] text-[16px]" data-node-id="467:1130">
                              Riya Sherma
                            </Typography>
                            <Typography className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] relative shrink-0 text-[#939393] text-[10px]" data-node-id="467:1131">
                              6 days ago
                            </Typography>
                          </div>
                          <Typography className="overflow-hidden relative shrink-0 text-[#4a5c4f] text-[12px] text-ellipsis w-full" data-node-id="467:1132">
                            Replied to your story. Still waiting for sfdds
                          </Typography>
                        </div>
                        <div className="absolute bg-[#e7480c] content-stretch flex flex-col items-center justify-center left-[41px] px-[8px] py-[6px] rounded-[20px] top-[5.5px]" data-node-id="467:1133">
                          <Typography className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Geist:Medium'] font-medium leading-[1.4] relative shrink-0 text-[14px] text-white w-full" data-node-id="467:1134">
                            38
                          </Typography>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-[#dfdfdf] border-solid content-stretch drop-shadow-[0px_0px_20px_rgba(0,0,0,0.14)] flex gap-[12px] items-center p-[15px] relative rounded-[6px] shrink-0 w-full spot-row" data-node-id="467:1135">
                      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="467:1136">
                        <div className="bg-[rgba(246,79,58,0.13)] col-start-1 ml-0 mt-0 relative rounded-[8px] row-start-1 size-[50px]" data-node-id="467:1137" />
                        <div className="col-start-1 ml-[11px] mt-[11px] relative row-start-1 size-[28px]" data-node-id="467:1138" data-name="fi_15707749">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFi15707749} />
                        </div>
                      </div>
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Geist:Medium'] font-medium gap-[3px] items-start leading-[1.4] min-w-px relative" data-node-id="467:1144">
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full whitespace-nowrap" data-node-id="467:1145">
                          <Typography className="relative shrink-0 text-[#092511] text-[16px]" data-node-id="467:1146">
                            Annanya Verma
                          </Typography>
                          <Typography className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] relative shrink-0 text-[#939393] text-[12px]" data-node-id="467:1147">
                            4 days ago
                          </Typography>
                        </div>
                        <Typography className="relative shrink-0 text-[#4a5c4f] text-[12px] w-full" data-node-id="467:1148">
                          Loved kurta drop! Available in all sizes?
                        </Typography>
                      </div>
                      <div className="absolute bg-[#e7480c] content-stretch flex flex-col items-center justify-center left-[42px] px-[8px] py-[6px] rounded-[20px] top-[4.5px]" data-node-id="467:1149">
                        <Typography className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Geist:Medium'] font-medium leading-[1.4] relative shrink-0 text-[14px] text-white w-full" data-node-id="467:1150">
                          12
                        </Typography>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start px-[15px] relative shrink-0 w-full spot-row" data-node-id="467:1151">
                      <div className="bg-white content-stretch drop-shadow-[0px_0px_5px_rgba(0,0,0,0.1)] flex gap-[12px] items-center opacity-80 px-[15px] py-[10px] relative rounded-[6px] shrink-0 w-full" data-node-id="467:1152">
                        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="467:1153">
                          <div className="bg-[#e5f7e6] col-start-1 ml-0 mt-0 relative rounded-[8px] row-start-1 size-[50px]" data-node-id="467:1154" />
                          <div className="col-start-1 ml-[11px] mt-[11px] relative row-start-1 size-[28px]" data-node-id="467:1155" data-name="fi_733585">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFi733585} />
                          </div>
                        </div>
                        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Geist:Medium'] font-medium gap-[3px] items-start leading-[1.4] min-w-px relative" data-node-id="467:1158">
                          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full whitespace-nowrap" data-node-id="467:1159">
                            <Typography className="relative shrink-0 text-[#092511] text-[16px]" data-node-id="467:1160">
                              Karthik Iyer
                            </Typography>
                            <Typography className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] relative shrink-0 text-[#939393] text-[10px]" data-node-id="467:1161">
                              4 days ago
                            </Typography>
                          </div>
                          <Typography className="relative shrink-0 text-[#4a5c4f] text-[12px] w-full" data-node-id="467:1162">
                            Is XL size Available?
                          </Typography>
                        </div>
                        <div className="absolute bg-[#e7480c] content-stretch flex flex-col items-center justify-center left-[41px] px-[8px] py-[6px] rounded-[20px] top-[5.5px]" data-node-id="467:1163">
                          <Typography className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Geist:Medium'] font-medium leading-[1.4] relative shrink-0 text-[14px] text-white w-full" data-node-id="467:1164">
                            40
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start relative shrink-0 text-center w-full" data-node-id="467:1113">
                    <Typography className="font-['Geist:SemiBold'] font-semibold leading-[1.1] relative shrink-0 text-[#08090a] text-[24px] w-full" data-node-id="467:1114">
                      Customers don't wait.
                    </Typography>
                    <Typography className="font-['Geist:Regular'] font-normal leading-[1.4] relative shrink-0 text-[#60584c] text-[16px] w-full" data-node-id="467:1115">
                      Your team shouldn't have to search across apps to find them.
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="bg-white border-[#e0dac6] border-l border-r border-solid content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip p-[10px] relative spotlight-card" data-node-id="467:1116">
                <div className="bg-[#f8f5ec] content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[420px] items-start min-w-px overflow-clip p-[30px] relative" data-node-id="467:1117">
                  <div className="absolute inset-0 pointer-events-none" data-node-id="467:1118" data-name="image 3134" style={{ backgroundImage: 'linear-gradient(rgba(9,37,17,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(9,37,17,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-stretch justify-center min-h-px relative w-full gap-[10px]">
                    {[
                      { name: 'Linen Kurta', size: 'M', price: '₹1,499', qty: 'x2', total: '₹2,998', status: 'Order Received', filled: true, g: 'linear-gradient(135deg,#cfe4d4 0%,#9ec7ac 60%,#7fae94 100%)' },
                    ].map((it) => (
                      <div key={it.name} className="w-full h-full flex flex-col bg-white rounded-[14px] shadow-[0_10px_28px_-18px_rgba(11,31,26,0.28)] border border-[#eef0ec] p-[10px]">
                        {/* Large Image Area to fill space */}
                        <div className="w-full flex-1 rounded-[10px] bg-[#f4f4f0] flex items-center justify-center overflow-hidden mb-[14px]">
                          <img src="/images/linen_kurta.png" alt="Linen Kurta" className="w-full h-full object-cover mix-blend-multiply" />
                        </div>

                        {/* Product Info */}
                        <div className="px-[6px]">
                          <div className="flex items-start justify-between gap-[10px]">
                            <div>
                              <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[16px] leading-[1.1] tracking-[-0.2px] whitespace-nowrap">{it.name}</Typography>
                              <Typography className="font-['Geist:Regular'] text-[#8a8f8b] text-[11px] mt-[6px] leading-none">Size&nbsp;: {it.size} &nbsp;•&nbsp; Qty : {it.qty}</Typography>
                            </div>
                            <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[15px] leading-none tracking-[-0.2px]">{it.price}</Typography>
                          </div>
                        </div>

                        {/* Footer / Total */}
                        <div className="mt-[16px] pt-[12px] border-t border-[#eef0ec] flex items-center justify-between gap-[5px] px-[6px] pb-[4px]">
                          <div className="shrink-0">
                            <Typography className="font-['Geist:Regular'] text-[#8a8f8b] text-[10px] leading-none whitespace-nowrap">Estimate Total</Typography>
                            <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[16px] mt-[4px] leading-none tracking-[-0.2px] whitespace-nowrap">{it.total}</Typography>
                          </div>
                          <div className="flex items-center gap-[4px] shrink-0">
                            <div className={`rounded-full px-[12px] py-[6px] text-[12px] font-['Geist:Medium'] font-medium leading-none whitespace-nowrap ${it.filled ? 'bg-[#06b349] text-white' : 'bg-white text-[#0c221f] border border-[#dcdfdb]'}`}>
                              {it.status}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start relative shrink-0 text-center w-full" data-node-id="467:1165">
                    <Typography className="font-['Geist:SemiBold'] font-semibold leading-[1.1] relative shrink-0 text-[#08090a] text-[24px] w-full" data-node-id="467:1166">
                      Intent doesn't last forever.
                    </Typography>
                    <div className="font-['Geist:Regular'] font-normal leading-[0] relative shrink-0 text-[#60584c] text-[16px] w-full" data-node-id="467:1167">
                      <Typography className="leading-[1.4] mb-0">Every delayed follow-up is a sale someone else wins.</Typography>
                      {/* <Typography className="leading-[1.4]">​</Typography> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border-[#e0dac6] border-l border-solid content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip p-[10px] relative spotlight-card" data-node-id="467:1168">
                <div className="bg-[#f8f5ec] content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[420px] items-start min-w-px overflow-clip p-[30px] relative" data-node-id="467:1169">
                  <div className="absolute inset-0 pointer-events-none" data-node-id="467:1170" data-name="image 3134" style={{ backgroundImage: 'linear-gradient(rgba(9,37,17,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(9,37,17,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px relative w-full">
                    <div className="w-full bg-white rounded-[16px] border border-[#eceae3] shadow-[0_16px_38px_-22px_rgba(11,31,26,0.28)] overflow-hidden">
                      <style>{`
                        @keyframes wenextTyping { 0%,60%,100% { transform:translateY(0); opacity:0.35; } 30% { transform:translateY(-3px); opacity:1; } }
                        .wenext-typing { animation: wenextTyping 1.2s ease-in-out infinite; }
                        @keyframes wenextMsgIn { from { opacity:0; transform:translateY(4px); } to { opacity:1; transform:translateY(0); } }
                        .wenext-msg-in { animation: wenextMsgIn 0.4s cubic-bezier(0.32,0.72,0.35,1) both; }
                      `}</style>

                      {/* Chat body */}
                      <div className="px-[18px] pt-[22px] pb-[16px] flex flex-col gap-[16px]">

                        {/* Bot intro */}
                        <div className="flex flex-col gap-[8px] wenext-msg-in">
                          <div className="flex items-center gap-[8px]">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                              <rect x="4" y="9" width="16" height="11" rx="4" />
                              <circle cx="9" cy="14" r="0.9" fill="#a1a1aa" stroke="none" />
                              <circle cx="15" cy="14" r="0.9" fill="#a1a1aa" stroke="none" />
                              <path d="M10 18h4" />
                              <line x1="12" y1="6" x2="12" y2="9" />
                              <circle cx="12" cy="5" r="1.2" fill="#a1a1aa" stroke="none" />
                            </svg>
                            <Typography className="text-[#a1a1aa] text-[13px] font-['Geist:Medium'] font-medium">NEXA.AI</Typography>
                          </div>
                          <Typography className="text-[#0c221f] text-[13.5px] leading-[1.55] pl-[26px]">
                            Hey, I'm NEXA AI. What do you want me to help you with?
                          </Typography>
                        </div>

                        {/* User message */}
                        <div className="self-end max-w-[82%] relative wenext-msg-in" style={{ animationDelay: '0.4s' }}>
                          <div className=" bg-white border border-[#eef0ec] rounded-[16px] rounded-br-[4px] px-[14px] py-[10px] ">
                            <Typography className="text-[13px] leading-[1.5]">
                              Draft a Diwali campaign for repeat customers with 15% off, launching next Friday.
                            </Typography>
                          </div>
                          {/* <div className="absolute -bottom-[3px] -right-[6px] size-[7px] rounded-full bg-[#092511]" /> */}
                          {/* <div className="absolute -bottom-[6px] -right-[10px] size-[3px] rounded-full bg-[#092511]" /> */}
                        </div>

                        {/* Bot typing */}
                        <div className="flex flex-col gap-[8px] wenext-msg-in" style={{ animationDelay: '0.9s' }}>
                          <div className="flex items-center gap-[8px]">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                              <rect x="4" y="9" width="16" height="11" rx="4" />
                              <circle cx="9" cy="14" r="0.9" fill="#a1a1aa" stroke="none" />
                              <circle cx="15" cy="14" r="0.9" fill="#a1a1aa" stroke="none" />
                              <path d="M10 18h4" />
                              <line x1="12" y1="6" x2="12" y2="9" />
                              <circle cx="12" cy="5" r="1.2" fill="#a1a1aa" stroke="none" />
                            </svg>
                            <Typography className="text-[#a1a1aa] text-[13px] font-['Geist:Medium'] font-medium">NEXA.AI</Typography>
                          </div>
                          <div className="flex items-center gap-[5px] pl-[26px]">
                            <span className="size-[6px] rounded-full bg-[#cbd5e1] wenext-typing" style={{ animationDelay: '0ms' }} />
                            <span className="size-[6px] rounded-full bg-[#cbd5e1] wenext-typing" style={{ animationDelay: '180ms' }} />
                            <span className="size-[7px] rounded-full bg-[#64748b] wenext-typing" style={{ animationDelay: '360ms' }} />
                          </div>
                        </div>
                      </div>

                      {/* Input pill */}
                      {/* <div className="px-[16px] pb-[12px]">
                        <div className="bg-[#f4f6f8] rounded-[14px] px-[14px] pt-[12px] pb-[10px]">
                          <Typography className="text-[#a1a1aa] text-[13px] mb-[10px]">Reply....</Typography>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-[14px]">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 5v14M5 12h14" />
                              </svg>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="9" y="3" width="6" height="11" rx="3" />
                                <path d="M5 11a7 7 0 0 0 14 0" />
                                <line x1="12" y1="18" x2="12" y2="22" />
                              </svg>
                            </div>
                            <button className="size-[30px] rounded-[9px] bg-[#092511] flex items-center justify-center">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 19V5M5 12l7-7 7 7" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div> */}

                      {/* Footer */}
                      {/* <div className="pb-[14px]">
                        <Typography className="text-[#a1a1aa] text-[11px] text-center">
                          WeNext AI may make mistakes. Verify info.
                        </Typography>
                      </div> */}
                    </div>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start relative shrink-0 text-center w-full" data-node-id="467:1217">
                    <Typography className="font-['Geist:SemiBold'] font-semibold leading-[1.1] relative shrink-0 text-[#08090a] text-[24px] w-full" data-node-id="467:1218">
                      Conversations aren't scripts.
                    </Typography>
                    <div className="font-['Geist:Regular'] font-normal leading-[0] relative shrink-0 text-[#60584c] text-[16px] w-full" data-node-id="467:1219">
                      <Typography className="leading-[1.4] mb-0">Your AI should know when to answer—and when to bring in your team.</Typography>
                      {/* <Typography className="leading-[1.4]">​</Typography> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip container mx-auto px-4 xl:px-0 relative shrink-0 w-full" data-node-id="467:1220" data-name="Container">
            <div className="border-[#e0dac6] border-l border-r border-solid relative shrink-0 w-full" data-node-id="467:1221">
              <div className="bg-clip-padding border-[transparent] border-l border-r border-solid content-stretch flex flex-col gap-[15px] items-start justify-center px-[50px] py-[40px] relative size-full">
                <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-node-id="467:1222">
                  <div className="bg-[#06b349] relative shrink-0 size-[10px]" data-node-id="467:1223" />
                  <Typography className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Courier_Prime:Regular'] leading-[1.4] not-italic relative shrink-0 text-[#0c221f] text-[18px] text-center whitespace-nowrap" data-node-id="467:1593">
                    Features
                  </Typography>
                </div>
                <Typography className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[1.2] min-w-full relative shrink-0 text-[#0c221f] text-[42px] tracking-[-1px] w-[min-content]" data-node-id="467:1225">
                  Everything your business needs
                  <br aria-hidden />
                  to keep conversations moving.
                </Typography>
              </div>
            </div>
          </div>
          <div className="border-[#e0dac6] border-b border-l border-r border-solid content-stretch flex items-start container mx-auto px-4 xl:px-0 relative shrink-0 w-full" data-node-id="467:1226">
            <div className="border-[#e0dac6] border-l border-r border-solid border-t content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="467:1227">
              {[
                { label: 'Unified Inbox', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12" /><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" /></svg> },
                { label: 'AI Agents & Assistants', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.91 5.81 5.82 1.9-5.82 1.9L12 18.42l-1.91-5.81-5.82-1.9 5.82-1.9z" /><path d="M19 3v4M21 5h-4M5 17v3M6.5 18.5h-3" /></svg> },
                { label: 'Campaigns', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l18-5v12L3 14v-3zM11.6 16.8a3 3 0 1 1-5.8-1.6" /></svg> },
                { label: 'CRM', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
                { label: 'Social Media Posts', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg> },
              ].map((tab, i) => {
                const isActive = i === dashTab;
                const isLast = i === 4;
                return (
                  <div
                    key={i}
                    role="button"
                    tabIndex={0}
                    onClick={() => { setDashTab(i); setDashProgress(0); }}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setDashTab(i); setDashProgress(0); } }}
                    className={`${isLast ? '' : 'border-[rgba(0,0,0,0.15)] border-r border-solid'} flex flex-[1_0_0] gap-[10px] items-center justify-center min-w-px p-[20px] relative cursor-pointer outline-none transition-opacity ${isActive ? '' : 'opacity-50 hover:opacity-75'}`}
                    style={{ color: isActive ? '#06b349' : '#60584c' }}
                  >
                    <div className="flex h-[28px] items-center justify-center w-[28px] shrink-0">{tab.icon}</div>
                    <Typography className="font-['Geist:Medium'] font-medium leading-[1.2] text-[16px] tracking-[-0.4px] whitespace-nowrap">{tab.label}</Typography>
                    {isActive && (
                      <div className="absolute bottom-0 h-[5px] left-0 right-0 bg-[#e0dac6] overflow-hidden">
                        <div className="bg-[#06b349] h-full transition-[width] duration-[50ms] ease-linear" style={{ width: `${dashProgress}%` }} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="border-[#e0dac6] border-b border-solid content-stretch flex flex-col items-start container mx-auto px-4 xl:px-0 relative shrink-0 w-full" data-node-id="467:1259">
            <div className="border-[#e0dac6] border-l border-r border-solid content-stretch flex items-center relative shrink-0 w-full" data-node-id="467:1260">
              <div className="bg-[rgba(9,37,17,0.8)] border-[rgba(206,201,184,0.5)] border-r border-solid content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip pt-[10px] px-[10px] relative" data-node-id="467:1261">
                <div className="bg-[#092511] content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[780px] items-start min-w-px overflow-clip p-[40px] relative" data-node-id="467:1262">
                  <div className="absolute inset-0 mix-blend-luminosity opacity-[0.06] pointer-events-none" data-node-id="467:1263" data-name="image 27">
                    <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgImage27} />
                  </div>
                  <div className="absolute top-[108px] h-[692px] left-1/2 -translate-x-1/2 w-[85%]" data-node-id="467:1264" data-name="image 3145">
                    <HomeFeaturesMockup tab={dashTab} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="content-stretch flex flex-col items-start container mx-auto px-4 xl:px-0 relative shrink-0 w-full" data-node-id="467:1265">
            <div className="border-[#cec9b8] border-b border-l border-r border-solid content-stretch flex items-center relative shrink-0 w-full" data-node-id="467:1266">
              <div className="content-stretch flex flex-[320_0_0] flex-col gap-[12px] h-[178px] border-r-[1px] border-solid border-[#e0dac6] items-start min-w-px p-[40px] relative" data-node-id="467:1267" data-name="Container">
                <div className="h-[60px] relative shrink-0 w-[108.258px]" data-node-id="467:1268" data-name="Heading 3">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <Typography className="-translate-x-1/2 [word-break:break-word] absolute  leading-[60px] left-[54.5px] not-italic text-[#222] text-[56px] text-center top-[0.5px] tracking-[-1.568px] whitespace-nowrap" data-node-id="467:1269"><Counter target={83} suffix="%" />
                    </Typography>
                  </div>
                </div>
                <div className="relative shrink-0 w-[240px]" data-node-id="467:1270" data-name="Paragraph">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <Typography className="[word-break:break-word]  leading-[26px] not-italic relative shrink-0 text-[#646464] text-[18px] tracking-[-0.288px] whitespace-nowrap" data-node-id="467:1271">
                      Reduction in time to decision
                    </Typography>
                  </div>
                </div>
                <div className="absolute  border-solid h-[178px] left-0 top-0 w-[320px]" data-node-id="467:1272" data-name="Text" />
              </div>
              <div className="content-stretch flex flex-[320_0_0] flex-col gap-[12px] h-[178px] border-r-[1px] border-solid border-[#e0dac6] items-start min-w-px p-[40px] relative" data-node-id="467:1273" data-name="Container">
                <div className="h-[60px] relative shrink-0 w-[109.016px]" data-node-id="467:1274" data-name="Heading 3">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <Typography className="-translate-x-1/2 [word-break:break-word] absolute  leading-[60px] left-[55px] not-italic text-[#222] text-[56px] text-center top-[0.5px] tracking-[-1.568px] whitespace-nowrap" data-node-id="467:1275"><Counter target={2.9} decimals={1} suffix="X" />
                    </Typography>
                  </div>
                </div>
                <div className="relative shrink-0 w-[240px]" data-node-id="467:1276" data-name="Paragraph">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <Typography className="[word-break:break-word]  leading-[26px] not-italic relative shrink-0 text-[#646464] text-[18px] tracking-[-0.288px] whitespace-nowrap" data-node-id="467:1277">
                      Cases per team member
                    </Typography>
                  </div>
                </div>
                <div className="absolute  border-solid h-[178px] left-0 top-0 w-[320px]" data-node-id="467:1278" data-name="Text" />
              </div>
              <div className="content-stretch flex flex-[320_0_0] flex-col gap-[12px] h-[178px] border-r-[1px] border-solid border-[#e0dac6] items-start min-w-px p-[40px] relative" data-node-id="467:1279" data-name="Container">
                <div className="h-[60px] relative shrink-0 w-[109.016px]" data-node-id="467:1280" data-name="Heading 3">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <Typography className="-translate-x-1/2 [word-break:break-word] absolute  leading-[60px] left-[55px] not-italic text-[#222] text-[56px] text-center top-[0.5px] tracking-[-1.568px] whitespace-nowrap" data-node-id="467:1281"><Counter target={2.9} decimals={1} suffix="X" />
                    </Typography>
                  </div>
                </div>
                <div className="relative shrink-0 w-[240px]" data-node-id="467:1282" data-name="Paragraph">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <Typography className="[word-break:break-word]  leading-[26px] not-italic relative shrink-0 text-[#646464] text-[18px] tracking-[-0.288px] whitespace-nowrap" data-node-id="467:1283">
                      Cases per team member
                    </Typography>
                  </div>
                </div>
                <div className="absolute  border-solid h-[178px] left-0 top-0 w-[320px]" data-node-id="467:1284" data-name="Text" />
              </div>
              <div className="content-stretch flex flex-[320_0_0] flex-col gap-[12px] h-[178px] items-start min-w-px p-[40px] relative" data-node-id="467:1285" data-name="Container">
                <div className="h-[60px] relative shrink-0 w-[108.258px]" data-node-id="467:1286" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <Typography className="-translate-x-1/2 [word-break:break-word] absolute  leading-[60px] left-[54px] not-italic text-[#222] text-[56px] text-center top-[0.5px] tracking-[-1.568px] whitespace-nowrap" data-node-id="467:1287"><Counter target={74} suffix="%" />
                    </Typography>
                  </div>
                </div>
                <div className="relative shrink-0 w-[240px]" data-node-id="467:1288" data-name="Paragraph">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <Typography className="[word-break:break-word]  leading-[26px] not-italic relative shrink-0 text-[#646464] text-[18px] tracking-[-0.288px] whitespace-nowrap" data-node-id="467:1289">
                      Reduction in manual work
                    </Typography>
                  </div>
                </div>
                <div className="absolute  border-solid h-[178px] left-0 top-0 w-[320px]" data-node-id="467:1290" data-name="Text" />
              </div>
            </div>
            <div className="border-[#cec9b8] border-b border-l border-r border-solid h-[64px] overflow-clip relative shrink-0 w-full" data-node-id="467:1291">
              <div className="absolute left-[-60.5px] size-[93px] top-[-28.5px]" data-node-id="467:1292">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[-50.5px] size-[93px] top-[-28.5px]" data-node-id="467:1293">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[-40.5px] size-[93px] top-[-28.5px]" data-node-id="467:1294">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[-30.5px] size-[93px] top-[-28.5px]" data-node-id="467:1295">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[-20.5px] size-[93px] top-[-28.5px]" data-node-id="467:1296">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[-10.5px] size-[93px] top-[-28.5px]" data-node-id="467:1297">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[-0.5px] size-[93px] top-[-28.5px]" data-node-id="467:1298">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[9.5px] size-[93px] top-[-28.5px]" data-node-id="467:1299">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[19.5px] size-[93px] top-[-28.5px]" data-node-id="467:1300">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[29.5px] size-[93px] top-[-28.5px]" data-node-id="467:1301">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[39.5px] size-[93px] top-[-28.5px]" data-node-id="467:1302">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[49.5px] size-[93px] top-[-28.5px]" data-node-id="467:1303">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[59.5px] size-[93px] top-[-28.5px]" data-node-id="467:1304">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[69.5px] size-[93px] top-[-28.5px]" data-node-id="467:1305">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[79.5px] size-[93px] top-[-28.5px]" data-node-id="467:1306">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[89.5px] size-[93px] top-[-28.5px]" data-node-id="467:1307">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[99.5px] size-[93px] top-[-28.5px]" data-node-id="467:1308">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[109.5px] size-[93px] top-[-28.5px]" data-node-id="467:1309">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[119.5px] size-[93px] top-[-28.5px]" data-node-id="467:1310">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[129.5px] size-[93px] top-[-28.5px]" data-node-id="467:1311">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[139.5px] size-[93px] top-[-28.5px]" data-node-id="467:1312">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[149.5px] size-[93px] top-[-28.5px]" data-node-id="467:1313">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[159.5px] size-[93px] top-[-28.5px]" data-node-id="467:1314">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[169.5px] size-[93px] top-[-28.5px]" data-node-id="467:1315">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[179.5px] size-[93px] top-[-28.5px]" data-node-id="467:1316">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[189.5px] size-[93px] top-[-28.5px]" data-node-id="467:1317">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[199.5px] size-[93px] top-[-28.5px]" data-node-id="467:1318">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[209.5px] size-[93px] top-[-28.5px]" data-node-id="467:1319">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[219.5px] size-[93px] top-[-28.5px]" data-node-id="467:1320">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[229.5px] size-[93px] top-[-28.5px]" data-node-id="467:1321">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[239.5px] size-[93px] top-[-28.5px]" data-node-id="467:1322">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[249.5px] size-[93px] top-[-28.5px]" data-node-id="467:1323">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[259.5px] size-[93px] top-[-28.5px]" data-node-id="467:1324">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[269.5px] size-[93px] top-[-28.5px]" data-node-id="467:1325">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[279.5px] size-[93px] top-[-28.5px]" data-node-id="467:1326">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[289.5px] size-[93px] top-[-28.5px]" data-node-id="467:1327">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[299.5px] size-[93px] top-[-28.5px]" data-node-id="467:1328">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[309.5px] size-[93px] top-[-28.5px]" data-node-id="467:1329">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[319.5px] size-[93px] top-[-28.5px]" data-node-id="467:1330">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[329.5px] size-[93px] top-[-28.5px]" data-node-id="467:1331">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[339.5px] size-[93px] top-[-28.5px]" data-node-id="467:1332">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[349.5px] size-[93px] top-[-28.5px]" data-node-id="467:1333">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[359.5px] size-[93px] top-[-28.5px]" data-node-id="467:1334">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[369.5px] size-[93px] top-[-28.5px]" data-node-id="467:1335">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[379.5px] size-[93px] top-[-28.5px]" data-node-id="467:1336">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[389.5px] size-[93px] top-[-28.5px]" data-node-id="467:1337">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[399.5px] size-[93px] top-[-28.5px]" data-node-id="467:1338">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[409.5px] size-[93px] top-[-28.5px]" data-node-id="467:1339">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[419.5px] size-[93px] top-[-28.5px]" data-node-id="467:1340">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[429.5px] size-[93px] top-[-28.5px]" data-node-id="467:1341">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[439.5px] size-[93px] top-[-28.5px]" data-node-id="467:1342">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[449.5px] size-[93px] top-[-28.5px]" data-node-id="467:1343">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[459.5px] size-[93px] top-[-28.5px]" data-node-id="467:1344">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[469.5px] size-[93px] top-[-28.5px]" data-node-id="467:1345">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[479.5px] size-[93px] top-[-28.5px]" data-node-id="467:1346">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[489.5px] size-[93px] top-[-28.5px]" data-node-id="467:1347">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[499.5px] size-[93px] top-[-28.5px]" data-node-id="467:1348">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[509.5px] size-[93px] top-[-28.5px]" data-node-id="467:1349">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[519.5px] size-[93px] top-[-28.5px]" data-node-id="467:1350">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[529.5px] size-[93px] top-[-28.5px]" data-node-id="467:1351">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[539.5px] size-[93px] top-[-28.5px]" data-node-id="467:1352">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[549.5px] size-[93px] top-[-28.5px]" data-node-id="467:1353">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[559.5px] size-[93px] top-[-28.5px]" data-node-id="467:1354">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[569.5px] size-[93px] top-[-28.5px]" data-node-id="467:1355">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[579.5px] size-[93px] top-[-28.5px]" data-node-id="467:1356">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[589.5px] size-[93px] top-[-28.5px]" data-node-id="467:1357">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[599.5px] size-[93px] top-[-28.5px]" data-node-id="467:1358">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[609.5px] size-[93px] top-[-28.5px]" data-node-id="467:1359">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[619.5px] size-[93px] top-[-28.5px]" data-node-id="467:1360">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[629.5px] size-[93px] top-[-28.5px]" data-node-id="467:1361">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[639.5px] size-[93px] top-[-28.5px]" data-node-id="467:1362">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[649.5px] size-[93px] top-[-28.5px]" data-node-id="467:1363">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[659.5px] size-[93px] top-[-28.5px]" data-node-id="467:1364">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[669.5px] size-[93px] top-[-28.5px]" data-node-id="467:1365">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[679.5px] size-[93px] top-[-28.5px]" data-node-id="467:1366">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[689.5px] size-[93px] top-[-28.5px]" data-node-id="467:1367">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[699.5px] size-[93px] top-[-28.5px]" data-node-id="467:1368">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[709.5px] size-[93px] top-[-28.5px]" data-node-id="467:1369">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[719.5px] size-[93px] top-[-28.5px]" data-node-id="467:1370">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[729.5px] size-[93px] top-[-28.5px]" data-node-id="467:1371">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[739.5px] size-[93px] top-[-28.5px]" data-node-id="467:1372">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[749.5px] size-[93px] top-[-28.5px]" data-node-id="467:1373">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[759.5px] size-[93px] top-[-28.5px]" data-node-id="467:1374">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[769.5px] size-[93px] top-[-28.5px]" data-node-id="467:1375">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[779.5px] size-[93px] top-[-28.5px]" data-node-id="467:1376">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[789.5px] size-[93px] top-[-28.5px]" data-node-id="467:1377">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[799.5px] size-[93px] top-[-28.5px]" data-node-id="467:1378">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[809.5px] size-[93px] top-[-28.5px]" data-node-id="467:1379">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[819.5px] size-[93px] top-[-28.5px]" data-node-id="467:1380">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[829.5px] size-[93px] top-[-28.5px]" data-node-id="467:1381">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[839.5px] size-[93px] top-[-28.5px]" data-node-id="467:1382">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[849.5px] size-[93px] top-[-28.5px]" data-node-id="467:1383">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[859.5px] size-[93px] top-[-28.5px]" data-node-id="467:1384">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[869.5px] size-[93px] top-[-28.5px]" data-node-id="467:1385">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[879.5px] size-[93px] top-[-28.5px]" data-node-id="467:1386">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[889.5px] size-[93px] top-[-28.5px]" data-node-id="467:1387">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[899.5px] size-[93px] top-[-28.5px]" data-node-id="467:1388">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[909.5px] size-[93px] top-[-28.5px]" data-node-id="467:1389">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[919.5px] size-[93px] top-[-28.5px]" data-node-id="467:1390">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[929.5px] size-[93px] top-[-28.5px]" data-node-id="467:1391">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[939.5px] size-[93px] top-[-28.5px]" data-node-id="467:1392">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[949.5px] size-[93px] top-[-28.5px]" data-node-id="467:1393">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[959.5px] size-[93px] top-[-28.5px]" data-node-id="467:1394">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[969.5px] size-[93px] top-[-28.5px]" data-node-id="467:1395">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[979.5px] size-[93px] top-[-28.5px]" data-node-id="467:1396">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[989.5px] size-[93px] top-[-28.5px]" data-node-id="467:1397">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[999.5px] size-[93px] top-[-28.5px]" data-node-id="467:1398">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1009.5px] size-[93px] top-[-28.5px]" data-node-id="467:1399">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1019.5px] size-[93px] top-[-28.5px]" data-node-id="467:1400">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1029.5px] size-[93px] top-[-28.5px]" data-node-id="467:1401">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1039.5px] size-[93px] top-[-28.5px]" data-node-id="467:1402">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1049.5px] size-[93px] top-[-28.5px]" data-node-id="467:1403">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1059.5px] size-[93px] top-[-28.5px]" data-node-id="467:1404">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1069.5px] size-[93px] top-[-28.5px]" data-node-id="467:1405">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1079.5px] size-[93px] top-[-28.5px]" data-node-id="467:1406">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1089.5px] size-[93px] top-[-28.5px]" data-node-id="467:1407">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1099.5px] size-[93px] top-[-28.5px]" data-node-id="467:1408">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1109.5px] size-[93px] top-[-28.5px]" data-node-id="467:1409">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1119.5px] size-[93px] top-[-28.5px]" data-node-id="467:1410">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1129.5px] size-[93px] top-[-28.5px]" data-node-id="467:1411">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1139.5px] size-[93px] top-[-28.5px]" data-node-id="467:1412">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1149.5px] size-[93px] top-[-28.5px]" data-node-id="467:1413">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1159.5px] size-[93px] top-[-28.5px]" data-node-id="467:1414">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1169.5px] size-[93px] top-[-28.5px]" data-node-id="467:1415">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1179.5px] size-[93px] top-[-28.5px]" data-node-id="467:1416">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1189.5px] size-[93px] top-[-28.5px]" data-node-id="467:1417">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1199.5px] size-[93px] top-[-28.5px]" data-node-id="467:1418">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1209.5px] size-[93px] top-[-28.5px]" data-node-id="467:1419">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1219.5px] size-[93px] top-[-28.5px]" data-node-id="467:1420">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1229.5px] size-[93px] top-[-28.5px]" data-node-id="467:1421">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1239.5px] size-[93px] top-[-28.5px]" data-node-id="467:1422">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1249.5px] size-[93px] top-[-28.5px]" data-node-id="467:1423">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1259.5px] size-[93px] top-[-28.5px]" data-node-id="467:1424">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1269.5px] size-[93px] top-[-28.5px]" data-node-id="467:1425">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1279.5px] size-[93px] top-[-28.5px]" data-node-id="467:1426">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1289.5px] size-[93px] top-[-28.5px]" data-node-id="467:1427">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1299.5px] size-[93px] top-[-28.5px]" data-node-id="467:1428">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1309.5px] size-[93px] top-[-28.5px]" data-node-id="467:1429">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1319.5px] size-[93px] top-[-28.5px]" data-node-id="467:1430">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1329.5px] size-[93px] top-[-28.5px]" data-node-id="467:1431">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1339.5px] size-[93px] top-[-28.5px]" data-node-id="467:1432">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1349.5px] size-[93px] top-[-28.5px]" data-node-id="467:1433">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1359.5px] size-[93px] top-[-28.5px]" data-node-id="467:1434">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1369.5px] size-[93px] top-[-28.5px]" data-node-id="467:1435">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1379.5px] size-[93px] top-[-28.5px]" data-node-id="467:1436">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1389.5px] size-[93px] top-[-28.5px]" data-node-id="467:1437">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1399.5px] size-[93px] top-[-28.5px]" data-node-id="467:1438">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1409.5px] size-[93px] top-[-28.5px]" data-node-id="467:1439">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1419.5px] size-[93px] top-[-28.5px]" data-node-id="467:1440">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1429.5px] size-[93px] top-[-28.5px]" data-node-id="467:1441">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1439.5px] size-[93px] top-[-28.5px]" data-node-id="467:1442">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1449.5px] size-[93px] top-[-28.5px]" data-node-id="467:1443">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1459.5px] size-[93px] top-[-28.5px]" data-node-id="467:1444">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1469.5px] size-[93px] top-[-28.5px]" data-node-id="467:1445">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1479.5px] size-[93px] top-[-28.5px]" data-node-id="467:1446">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1489.5px] size-[93px] top-[-28.5px]" data-node-id="467:1447">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1499.5px] size-[93px] top-[-28.5px]" data-node-id="467:1448">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1509.5px] size-[93px] top-[-28.5px]" data-node-id="467:1449">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1519.5px] size-[93px] top-[-28.5px]" data-node-id="467:1450">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1529.5px] size-[93px] top-[-28.5px]" data-node-id="467:1451">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1539.5px] size-[93px] top-[-28.5px]" data-node-id="467:1452">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1549.5px] size-[93px] top-[-28.5px]" data-node-id="467:1453">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1559.5px] size-[93px] top-[-28.5px]" data-node-id="467:1454">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1569.5px] size-[93px] top-[-28.5px]" data-node-id="467:1455">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1579.5px] size-[93px] top-[-28.5px]" data-node-id="467:1456">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1589.5px] size-[93px] top-[-28.5px]" data-node-id="467:1457">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1599.5px] size-[93px] top-[-28.5px]" data-node-id="467:1458">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1609.5px] size-[93px] top-[-28.5px]" data-node-id="467:1459">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1619.5px] size-[93px] top-[-28.5px]" data-node-id="467:1460">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1629.5px] size-[93px] top-[-28.5px]" data-node-id="467:1461">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1639.5px] size-[93px] top-[-28.5px]" data-node-id="467:1461">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1649.5px] size-[93px] top-[-28.5px]" data-node-id="467:1461">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1649.5px] size-[93px] top-[-28.5px]" data-node-id="467:1461">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1659.5px] size-[93px] top-[-28.5px]" data-node-id="467:1461">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1669.5px] size-[93px] top-[-28.5px]" data-node-id="467:1461">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1679.5px] size-[93px] top-[-28.5px]" data-node-id="467:1461">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1689.5px] size-[93px] top-[-28.5px]" data-node-id="467:1461">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1699.5px] size-[93px] top-[-28.5px]" data-node-id="467:1461">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1709.5px] size-[93px] top-[-28.5px]" data-node-id="467:1461">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1719.5px] size-[93px] top-[-28.5px]" data-node-id="467:1461">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1729.5px] size-[93px] top-[-28.5px]" data-node-id="467:1461">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1739.5px] size-[93px] top-[-28.5px]" data-node-id="467:1461">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1749.5px] size-[93px] top-[-28.5px]" data-node-id="467:1461">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1759.5px] size-[93px] top-[-28.5px]" data-node-id="467:1461">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
              <div className="absolute left-[1769.5px] size-[93px] top-[-28.5px]" data-node-id="467:1461">
                <div className="absolute inset-[-0.38%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
            </div>
          </div>
          {/* ── HEADER — centered Pain Points eyebrow + large heading ── */}
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip container mx-auto px-4 xl:px-0 relative shrink-0 w-full">
            <div className="border-[#e0dac6] border-l border-r border-solid relative shrink-0 w-full">
              <div className="flex flex-col items-center text-center px-[50px] py-[72px]">
                <div className="flex gap-[10px] items-center mb-[20px]">
                  <div className="bg-[#06b349] shrink-0 size-[10px]" />
                  <Typography className="font-['Courier_Prime:Regular'] text-[#0c221f] text-[16px] tracking-[0.5px]">Pain Points</Typography>
                </div>
                <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[52px] tracking-[-2px] leading-[1.05] max-w-[700px]">
                  Everything you need.<br />Nothing you don't
                </Typography>
              </div>
            </div>
          </div>

          {/* ── BENTO GRID ── */}
          <div className="border-[#e0dac6] border-b border-solid content-stretch flex flex-col items-start overflow-clip container mx-auto px-4 xl:px-0 relative shrink-0 w-full">
            <div className="border-[#cec9b8] border-l border-r border-solid border-t relative shrink-0 w-full">
              {/* 3-column grid: left tall | centre stacked | right stacked */}
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr]">

                {/* ── COL 1 — Conversational Commerce (tall, spans 2 rows) ── */}
                <div className="border-r border-[#e0dac6] p-[36px] flex flex-col  lg:row-span-2">
                  {/* Icon */}
                  {/* <div className="size-[44px] rounded-[12px] bg-[#0c221f] flex items-center justify-center mb-[20px]">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  </div> */}
                  <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[22px] tracking-[-0.4px] leading-[1.2] mb-[10px]">
                    Conversational Commerce
                  </Typography>
                  <Typography className="font-['Geist:Regular'] text-[#60584c] text-[14px] leading-[1.55]">
                    WhatsApp, Instagram DMs, Facebook comments and web chat — all in one screen. Assign to teammates, tag, snooze, never lose a lead again.
                  </Typography>


                  {/* iPhone 15+ mockup with animated WhatsApp chat */}
                  <IPhoneMockup />
                </div>

                {/* ── COL 2 ROW 1 — Ads Management ── */}
                <div className="border-r border-b border-[#e0dac6] flex flex-col ">
                  <div className="p-[25px]">
                    <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[22px] tracking-[-0.4px] leading-[1.2] mb-[10px]">
                      Ads Management
                    </Typography>
                    <Typography className="font-['Geist:Regular'] text-[#60584c] text-[14px] leading-[1.55]">
                      See which broadcasts convert, which DMs become orders. Revenue attributed per channel, per template, per agent.
                    </Typography>
                  </div>

                  <img src={SeamlessInegrations} alt="" />

                </div>

                {/* ── COL 3 ROW 1 — Smart Scheduling ── */}
                <div className="border-b border-[#e0dac6] flex flex-col ">
                  <div className="p-[25px]">
                    <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[22px] tracking-[-0.4px] leading-[1.2] mb-[10px]">
                      Smart Scheduling
                    </Typography>
                    <Typography className="font-['Geist:Regular'] text-[#60584c] text-[14px] leading-[1.55]">
                      UPI, cards, COD-to-prepaid — every payment option drops into the conversation. No checkout drop-off.
                    </Typography>
                  </div>

                  <img src={SeamlessInegrations} alt="" />
                </div>

                {/* ── COL 2 ROW 2 — Seamless Integrations ── */}
                <div className="border-r border-[#e0dac6] flex flex-col ">
                  <div className="p-[25px]">
                    <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[22px] tracking-[-0.4px] leading-[1.2] mb-[10px]">
                      Seamless Integrations
                    </Typography>
                    <Typography className="font-['Geist:Regular'] text-[#60584c] text-[14px] leading-[1.55]">
                      Trained on your catalog, FAQs and tone. Speaks Hindi, English and Hinglish. Hands off to humans when it matters.
                    </Typography>
                  </div>
                  <img src={SeamlessInegrations} alt="" />

                </div>

                {/* ── COL 3 ROW 2 — Dark CTA card ── */}
                <div className="p-[36px] flex flex-col bg-[#0c221f] relative overflow-hidden">
                  {/* subtle dot pattern */}
                  <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                  <div className="relative z-10 flex flex-col flex-1">
                    {/* <div className="size-[44px] rounded-[12px] bg-white/10 flex items-center justify-center mb-[20px]">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#06b349" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </div> */}
                    <Typography className="font-['Geist:SemiBold'] font-semibold text-white text-[22px] tracking-[-0.4px] leading-[1.2] mb-[12px]">
                      Explore the recovery engine.
                    </Typography>
                    <Typography className="font-['Geist:Regular'] text-white/65 text-[14px] leading-[1.55] flex-1">
                      Abandoned carts, COD-to-prepaid nudges, post-purchase re-engagement — the loops that quietly grow revenue.
                    </Typography>
                    <div className="bg-[#06b349] hover:bg-[#05a043] active:scale-[0.98] transition-all duration-150 relative rounded-[8px] shrink-0 cursor-pointer" data-node-id="467:989" data-name="Link">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.992px] justify-center items-center overflow-clip pl-[20px] pr-[15px] py-[15px] relative rounded-[inherit] size-full">
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[1410px] left-[calc(50%+0.5px)] mix-blend-color-burn top-1/2 w-[2115px]" data-node-id="467:990" data-name="image 27">
                          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover opacity-25 pointer-events-none size-full" src={imgImage27} />
                        </div>
                        <Typography className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-none relative shrink-0 text-[18px] text-white whitespace-nowrap" data-node-id="467:991">
                          Book a demo
                        </Typography>
                        <div className="relative shrink-0 size-[20px]" data-node-id="467:992" data-name="Icon">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>


          <div className="content-stretch flex flex-col items-start container mx-auto px-4 xl:px-0 relative shrink-0 w-full" data-node-id="467:1265">
            <div className="border-[#cec9b8] border-b border-l border-r border-solid h-[64px] overflow-clip relative shrink-0 w-full" data-node-id="467:1291">
              {Array.from({ length: 184 }).map((_, i) => (
                <div key={i} className="absolute size-[93px] top-[-28.5px]" style={{ left: `${-60.5 + i * 10}px` }}>
                  <div className="absolute inset-[-0.38%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector4} />
                  </div>
                </div>
              ))}
            </div>
          </div>



          {/* Magic AI Search — sits above the "Sound familiar?" band, matches the site's outer/inner border pattern */}
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip container mx-auto px-4 xl:px-0 relative shrink-0 w-full" style={{ overflow: "hidden" }}>
            <div className="border-[#e0dac6] border-b border-l border-r border-solid relative shrink-0 w-full">
              <div className="bg-clip-padding border-[transparent] border-b border-l border-r border-solid content-stretch flex flex-col items-center py-[100px] relative size-full">
                {/* Small green dot grid background */}
                <div
                  className="absolute inset-0 pointer-events-none z-0"
                  aria-hidden
                  style={{
                    backgroundImage: 'radial-gradient(circle, rgb(81 93 86 / 17%) 1px, transparent 1.2px)',
                    backgroundSize: '24px 24px',
                  }}
                />

                {/* Eyebrow */}
                <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 z-10">
                  <div className="bg-[#06b349] relative shrink-0 size-[10px]" />
                  <Typography className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Courier_Prime:Regular'] leading-[1.4] not-italic relative shrink-0 text-[#0c221f] text-[18px] text-center whitespace-nowrap">
                    Ask WeNext AI
                  </Typography>
                </div>
                {/* Heading */}
                <Typography className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[1.05] relative shrink-0 text-[#0c221f] text-[42px] tracking-[-1.6px] text-center mt-[16px]">
                  NEXA AI
                </Typography>
                <Typography className="font-['Geist:Regular'] leading-[1.5] text-[#60584c] text-[18px] text-center mt-[14px] max-w-[560px] relative">
                  Ask questions about your customers, orders, and campaigns — get answers, insights, and actions in seconds.
                </Typography>
                {/* <a
                  href="#"
                  className="mt-[24px] inline-flex items-center bg-[#06b349] hover:bg-[#059940] text-white rounded-full px-[26px] py-[11px] font-['Geist:Medium'] font-medium text-[15px] tracking-[-0.2px] transition-colors relative shadow-[0_6px_18px_-6px_rgba(6,179,73,0.5)]"
                >
                  Learn More
                </a> */}

                {/* Rotating queries — wheel: rows slide up smoothly; wrapping rows snap silently */}
                <div className="mt-[56px] relative w-full max-w-[760px] h-[320px] overflow-hidden">
                  {AI_QUERIES.map((q, i) => {
                    const half = AI_QUERIES.length / 2;
                    const wrap = (raw: number) => {
                      let o = raw;
                      while (o > half) o -= AI_QUERIES.length;
                      while (o < -half) o += AI_QUERIES.length;
                      return o;
                    };
                    const offset = wrap(i - magicIdx);
                    const prevOffset = wrap(i - prevMagicIdxRef.current);
                    // If a row's offset changed by more than one slot, it's wrapping — snap its transform (skip transition on transform) so it doesn't roll through the visible area.
                    const isWrapping = Math.abs(offset - prevOffset) > 1;
                    const isCenter = offset === 0;
                    const visible = Math.abs(offset) <= 2;
                    const rowH = 62;
                    // Center row hidden (pill overlays it); others fade by distance.
                    const opacity = isCenter ? 0 : visible ? Math.max(0, 1 - Math.abs(offset) * 0.42) : 0;
                    return (
                      <div
                        key={i}
                        className="absolute left-0 right-0 flex justify-left pointer-events-none"
                        style={{
                          top: '50%',
                          transform: `translate3d(0, calc(-50% + ${offset * rowH}px), 0)`,
                          opacity,
                          marginLeft: '50px',
                          transition: isWrapping
                            ? 'opacity 700ms cubic-bezier(0.32,0.72,0.35,1)'
                            : 'transform 700ms cubic-bezier(0.32,0.72,0.35,1), opacity 700ms cubic-bezier(0.32,0.72,0.35,1)',
                        }}
                      >
                        <Typography className="text-[26px] text-[#60584c] font-['Geist:Medium'] font-medium tracking-[-0.2px] whitespace-nowrap">
                          {q}
                        </Typography>
                      </div>
                    );
                  })}

                  {/* Fixed input pill at the center — its inner text slides up as the wheel scrolls under it */}
                  <div
                    className="absolute left-0 right-0 flex justify-left pointer-events-none"
                    style={{ top: '50%', transform: 'translateY(-50%)' }}
                  >
                    <div className="w-full max-w-[760px] bg-white rounded-full pl-[16px] pr-[16px] py-[16px] flex items-center gap-[10px] border border-[#e0dac6] shadow-[0_12px_36px_-8px_rgba(6,179,73,0.25),0_2px_8px_rgba(11,34,17,0.06)] pointer-events-auto">
                      <div className="w-[36px] h-[36px] rounded-full bg-[#f8f5ec] flex items-center justify-center shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0c221f" strokeWidth="2" strokeLinecap="round">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </div>
                      <div className="flex-1 relative overflow-hidden h-[28px]">
                        <div
                          key={magicIdx}
                          className="absolute inset-0 flex items-center text-[#06b349] font-['Geist:Medium'] font-medium text-[26px] leading-none whitespace-nowrap magic-text-slide"
                        >
                          {AI_QUERIES[magicIdx]}
                        </div>
                      </div>
                      <div className="w-[36px] h-[36px] rounded-full bg-[#06b349] flex items-center justify-center shrink-0">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="19" x2="12" y2="5" />
                          <polyline points="5 12 12 5 19 12" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <style>{`
                  @keyframes magicTextSlide { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
                  .magic-text-slide { animation: magicTextSlide 650ms cubic-bezier(0.32, 0.72, 0.35, 1) both; }
                `}</style>
              </div>
            </div>
            {/* <img style={{
              position: 'absolute',
              top: "0px",
              left: "74px",
              width: "92.3%",
              height: "60px",
              borderBottom: "1px soild #ddd"
            }} src={BorderX} /> */}
          </div>

          <div className="content-stretch flex flex-col items-center justify-center overflow-clip container mx-auto px-4 xl:px-0 relative shrink-0 w-full">
            <div className="border-[#e0dac6] border-b border-l border-r border-solid relative shrink-0 w-full" data-node-id="467:1793" data-name="Container">
              <div
                className='flex flex-col items-center justify-center w-full'
                style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #e0dac6 0, #e0dac6 1px, transparent 1px, transparent 8px)' }}
              >
                <div className="grid grid-cols-2 relative w-[90%] bg-[#f8f5ec] border-l border-r border-[#e0dac6]">
                  <div className="p-[60px] flex flex-col justify-center border-r border-[#e0dac6]">
                    <div className="flex gap-[10px] items-center mb-[16px]">
                      <div className="bg-[#06b349] relative shrink-0 size-[10px]" />
                      <Typography className="font-['Courier_Prime'] leading-[1.4] text-[18px] text-[#0c221f]">Speed & Scale</Typography>
                    </div>
                    <Typography component="h2" className="font-['Geist:SemiBold'] font-semibold text-[42px] text-[#0c221f] tracking-[-1.3px] leading-[1.12] mb-[18px]">
                      From setup to selling <br />in 15 minutes.
                    </Typography>
                    <Typography className="font-['Geist:Regular'] text-[#60584c] text-[17px] leading-[1.7] mb-[28px] max-w-[460px]">
                      Everything your front office handles today, done automatically and at any hour.
                    </Typography>
                    <div className="flex flex-col gap-[8px]">
                      {STEPS.map((step, i) => {
                        const isActive = i === activeStep;
                        const ICONS = [imgIcon4, imgIcon5, imgIcon6, imgIcon7, imgIcon8];
                        const activeIconFilter = 'brightness(0) saturate(100%) invert(48%) sepia(85%) saturate(1985%) hue-rotate(118deg) brightness(94%) contrast(92%)';
                        const inactiveIconFilter = 'brightness(0) saturate(100%) opacity(0.7)';
                        const handleSelect = () => { setActiveStep(i); setProgress(0); };
                        return (
                          <div
                            key={i}
                            role="button"
                            tabIndex={0}
                            onClick={handleSelect}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleSelect(); } }}
                            className={`relative shrink-0 w-full cursor-pointer transition-opacity outline-none ${isActive ? '' : 'opacity-50 hover:opacity-75'}`}
                          >
                            <div className={`flex flex-col items-start ${isActive ? 'pb-[15px]' : 'pb-[8px]'} relative`}>
                              <div className="flex gap-[14px] items-center relative w-full">
                                <div className={`relative shrink-0 size-[36px] rounded-full flex items-center justify-center ${isActive ? 'bg-[rgba(6,179,73,0.15)]' : 'bg-[#eeece3]'}`}>
                                  <div className="relative size-[16px]">
                                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICONS[i]} style={{ filter: isActive ? activeIconFilter : inactiveIconFilter }} />
                                  </div>
                                </div>
                                <Typography className={`font-['Geist:Medium'] font-medium leading-none text-[17px] whitespace-nowrap ${isActive ? 'text-[#06b349]' : 'text-[#0c221f]'}`}>
                                  {step.title}
                                </Typography>
                              </div>
                              {isActive && (
                                <div className="relative w-full pl-[50px] mt-[8px] overflow-hidden">
                                  <Typography className="font-['Geist:Regular'] font-normal leading-[1.4] text-[#60584c] text-[15px]">
                                    {step.sub}
                                  </Typography>
                                </div>
                              )}
                              {isActive && (
                                <div className="absolute bg-[#e0dac6] bottom-0 h-[2px] left-0 w-full overflow-hidden">
                                  <div className="bg-[#06b349] h-full transition-[width] duration-[50ms] ease-linear" style={{ width: `${progress}%` }} />
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-[#f8f5ec] to-[#f3efe3] relative self-stretch overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 pointer-events-none" />
                    <div key={activeStep} className="relative w-full max-w-[80%] step-panel">
                      {activeStep === 0 && (
                        <div className="relative">
                          {/* <img style={{ width: "100" }} src={ConnectMeta} alt="Sign Up" /> */}
                          <img style={{ width: "100" }} src={SignUp} alt="Sign Up" />
                        </div>
                      )}
                      {activeStep === 1 && (
                        <div className="relative">
                          {/* <div className="bg-white rounded-[24px] shadow-[0_40px_100px_-30px_rgba(11,31,26,0.22),0_0_0_1px_rgba(11,31,26,0.04)] overflow-hidden">
                          <div className="px-[24px] pt-[22px] pb-[18px] border-b border-[#f3efe3] flex items-center justify-between">
                            <div className="flex items-center gap-[10px]">
                              <div className="relative">
                                <div className="size-[36px] rounded-[10px] bg-[#0b1f1a] flex items-center justify-center">
                                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#06b349"><path d="M3 12h4l3-9 4 18 3-9h4" /></svg>
                                </div>
                                <div className="absolute -bottom-[2px] -right-[2px] size-[12px] rounded-full bg-[#06b349] border-[2px] border-white" />
                              </div>
                              <div>
                                <Typography className="text-[#0c221f] text-[14px] font-['Geist:SemiBold'] font-semibold">Channel Hub</Typography>
                                <Typography className="text-[#60584c] text-[10.5px]">3 of 3 connected · syncing live</Typography>
                              </div>
                            </div>
                            <div className="bg-[#e5f6e7] text-[#06b349] text-[10px] px-[8px] py-[3px] rounded-full font-['Geist:Medium']">All live</div>
                          </div>
                          <div className="px-[18px] py-[16px] flex flex-col gap-[10px] step-stagger">
                            {[
                              { name: 'WhatsApp Business', detail: 'API · +91 98765 43210', color: '#25d366', svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487m-3.421-12.18A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>, latency: '1.2s', volume: '8,412 chats/day' },
                              { name: 'Instagram DMs', detail: '@linen.co · Posts + DMs', color: INSTAGRAM_GRADIENT, svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919zM12 8a4 4 0 100 8 4 4 0 000-8zm5.122-.838a.96.96 0 100-1.92.96.96 0 000 1.92z" /></svg>, latency: '0.9s', volume: '3,210 DMs/day' },
                              { name: 'Facebook Pages', detail: 'Linen.co · Messages', color: '#1877F2', svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>, latency: '1.1s', volume: '1,840 msgs/day' },
                            ].map((c, i) => (
                              <div key={i} className="step-shimmer bg-[#fbfaf2] border border-[#f0e9d7] rounded-[14px] p-[12px] flex items-center gap-[12px]">
                                <div className="size-[40px] rounded-[12px] flex items-center justify-center shrink-0 shadow-[0_6px_16px_-6px_rgba(11,31,26,0.25)]" style={{ background: c.color }}>{c.svg}</div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-[6px]">
                                    <Typography className="text-[#0c221f] text-[13px] font-['Geist:SemiBold'] font-semibold truncate">{c.name}</Typography>
                                    <div className="size-[6px] rounded-full bg-[#06b349] step-live-dot" />
                                  </div>
                                  <Typography className="text-[#60584c] text-[10.5px] mt-[1px] truncate">{c.detail}</Typography>
                                  <div className="flex items-center gap-[10px] mt-[6px]">
                                    <Typography className="text-[#60584c] text-[9.5px]">↗ {c.volume}</Typography>
                                    <Typography className="text-[#60584c] text-[9.5px]">⚡ {c.latency} reply</Typography>
                                    <div className="step-signal flex items-end gap-[2px] h-[11px] ml-auto">
                                      {[6, 9, 5, 11, 7].map((h, k) => (<span key={k} className="w-[2.5px] rounded-full bg-[#06b349]" style={{ height: `${h}px` }} />))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="border-t border-[#f3efe3] px-[18px] py-[12px] flex items-center justify-between bg-[#fafaf6]">
                            <Typography className="text-[#60584c] text-[10.5px]">Inbox synced 6 sec ago</Typography>
                            <div className="flex items-center gap-[6px]">
                              <div className="size-[6px] rounded-full bg-[#06b349] step-live-dot" />
                              <Typography className="text-[#06b349] text-[10.5px] font-['Geist:Medium']">Auto-pilot ON</Typography>
                            </div>
                          </div>
                        </div> */}
                          <img style={{ width: "100" }} src={ConnectMeta} alt="Connect Meta" />
                        </div>
                      )}
                      {/* {activeStep === 2 && (
                        <div className="relative">
                          <img style={{ width: "100" }} src={TrainAI} alt="Train the AI on your brand" />

                        </div>
                      )} */}
                      {activeStep === 2 && (
                        <div className="relative">
                          <img style={{ width: "100" }} src={SetAutomation} alt="Set Automation" />

                        </div>
                      )}
                      {activeStep === 3 && (
                        <div className="relative">
                          <img style={{ width: "100" }} src={LaunchBroadcast} alt="Launch your first broadcast" />

                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <SecuritySection /> */}

          <div className="content-stretch flex flex-col items-center justify-center overflow-clip container mx-auto px-4 xl:px-0 relative shrink-0 w-full" data-node-id="467:1589" data-name="Container">
            <div className="border-[#e0dac6] border-b border-l border-r border-solid relative shrink-0 w-full" data-node-id="467:1590">
              <div className="bg-clip-padding border-[transparent] border-b border-l border-r border-solid content-stretch flex flex-col gap-[15px] items-start justify-center px-[50px] py-[40px] relative size-full">
                <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-node-id="467:1591">
                  <div className="bg-[#06b349] relative shrink-0 size-[10px]" data-node-id="467:1592" />
                  <Typography className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Courier_Prime:Regular'] leading-[1.4] not-italic relative shrink-0 text-[#0c221f] text-[18px] text-center whitespace-nowrap" data-node-id="467:1593">
                    Pain Points
                  </Typography>
                </div>
                <Typography className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[1.4] min-w-full relative shrink-0 text-[#0c221f] text-[42px] tracking-[-1px] w-[min-content]" data-node-id="467:1594">
                  Your customer data <br /> stays yours
                </Typography>
              </div>
            </div>
          </div>
          <div className="border-[#e0dac6]  border-solid content-stretch flex flex-col items-start container mx-auto px-4 xl:px-0 relative shrink-0 w-full" data-node-id="467:1595">
            <div className="border-[#e0dac6] border-b border-l border-r border-solid content-stretch flex items-center relative shrink-0 w-full overflow-hidden" data-node-id="467:1596">
              <div
                className="flex items-stretch w-full transition-transform duration-500 ease-in-out"
                style={{ transform: `translate3d(-${activeTestimonial * 100}%, 0px, 0px)` }}
              >
                {TESTIMONIALS.map((testimonial, idx) => (
                  <div key={idx} className="flex w-full shrink-0 items-stretch">
                    <div className="bg-white border-[#e0dac6] border-r border-solid content-stretch flex items-center overflow-clip p-[10px] relative shrink-0 size-[400px]" data-node-id="467:1597">
                      <div className="bg-[#e9e9e9] content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px overflow-clip p-[30px] relative" data-node-id="467:1598">
                        <div className="-translate-x-1/2 absolute h-[354px] left-1/2 top-[41.05px] w-[530px]" data-node-id="467:1599" data-name="image 3147">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={testimonial.image} />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px overflow-clip relative" data-node-id="467:1600">
                        <div className="bg-[#f8f5ec] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-w-px overflow-clip p-[50px] relative" data-node-id="467:1601" style={{ backgroundImage: 'linear-gradient(rgba(9,37,17,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(9,37,17,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                          <Typography className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#6b6354] text-[22px] w-[min-content] min-h-[140px]" data-node-id="467:1603">
                            <span>{testimonial.quote}</span>
                            <span className="font-['Geist:Medium'] font-medium text-[#0b1f1a] bg-[#d4ecc7] [box-decoration-break:clone] [-webkit-box-decoration-break:clone] px-[6px] py-[2px]">{testimonial.highlight}</span>
                          </Typography>
                          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="467:1604">
                            <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start leading-[1.4] relative shrink-0 whitespace-nowrap" data-node-id="467:1605">
                              <Typography className="font-['Geist:SemiBold'] font-semibold relative shrink-0 text-[#06b349] text-[20px]" data-node-id="467:1606">
                                — {testimonial.author}
                              </Typography>
                              <Typography className="font-['Geist:Regular'] font-normal relative shrink-0 text-[#60584c] text-[16px]" data-node-id="467:1607">
                                {testimonial.role}
                              </Typography>
                            </div>
                            <div className="h-[60px] relative shrink-0 w-[107px]" data-node-id="467:1608" data-name="image 3148">
                              <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={testimonial.logo} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-[#e0dac6] border-b border-l border-r border-solid content-stretch flex items-center justify-between px-[50px] py-[30px] relative shrink-0 w-full" data-node-id="467:1609">
              <div className="flex gap-[8px] items-center" data-node-id="467:1610">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`size-[10px] rounded-full border border-[#e0dac6] transition-all duration-300 ${idx === activeTestimonial ? 'bg-[#06b349] w-[24px]' : 'bg-[rgba(12,34,31,0.15)] hover:bg-[rgba(12,34,31,0.3)]'
                      }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <div className="content-stretch flex gap-[15px] items-start relative shrink-0" data-node-id="467:1615">
                <button
                  onClick={() => setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                  className="bg-white border border-[#e0dac6] border-solid content-stretch flex items-center justify-center opacity-85 hover:opacity-100 hover:bg-[#f8f5ec] transition-all duration-150 p-px relative shrink-0 size-[40px] cursor-pointer"
                  aria-label="Previous slide"
                >
                  <div className="relative shrink-0 size-[20px]" data-node-id="467:1617" data-name="Icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
                  </div>
                </button>
                <button
                  onClick={() => setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)}
                  className="bg-white border border-[#e0dac6] border-solid content-stretch flex items-center justify-center opacity-85 hover:opacity-100 hover:bg-[#f8f5ec] transition-all duration-150 p-px relative shrink-0 size-[40px] cursor-pointer"
                  aria-label="Next slide"
                >
                  <div className="relative shrink-0 size-[20px]" data-node-id="467:1620" data-name="Icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon3} />
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="content-stretch flex flex-col items-center justify-center overflow-clip container mx-auto px-4 xl:px-0 relative shrink-0 w-full" data-node-id="467:1839" data-name="Container">
            <div className="border-[#e0dac6] border-b border-l border-r border-solid relative shrink-0 w-full" data-node-id="467:1840">
              <div className="bg-clip-padding border-[transparent] border-b border-l border-r border-solid content-stretch flex flex-col gap-[15px] items-start justify-center px-[50px] py-[40px] relative size-full">
                <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-node-id="467:1841">
                  <div className="bg-[#06b349] relative shrink-0 size-[10px]" data-node-id="467:1842" />
                  <Typography className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Courier_Prime:Regular'] leading-[1.4] not-italic relative shrink-0 text-[#0c221f] text-[18px] text-center whitespace-nowrap" data-node-id="467:1843">
                    Resources
                  </Typography>
                </div>
                <Typography className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[1.4] min-w-full relative shrink-0 text-[#0c221f] text-[42px] tracking-[-1px] w-[min-content]" data-node-id="467:1844">
                  Sound familiar?
                </Typography>
              </div>
            </div>
            <div className="border-[#e0dac6] border-b border-l border-r border-solid relative shrink-0 w-full" data-node-id="467:1845">
              <div className="bg-clip-padding border-[transparent] border-b border-l border-r border-solid content-stretch flex items-center relative size-full">
                <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="467:1846" data-name="Container (Rhetorich | Make speaking your firm's most powerful advantage)">
                  <div className="border-[#e0dac6] border-r border-solid flex-[1_0_0] min-w-px relative group cursor-pointer" data-node-id="467:1847" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15px] items-start overflow-clip pr-px relative rounded-[inherit] size-full">
                      <div className="bg-white border-[#e0dac6] border-b border-solid relative shrink-0 w-full" data-node-id="467:1848" data-name="Link">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[10px] relative rounded-[inherit] size-full">
                          <div className="h-[300px] overflow-clip relative shrink-0 w-full" data-node-id="467:1849">
                            <div className="absolute inset-0" data-node-id="467:1850" data-name="image 3150">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-700 ease-out group-hover:scale-110" src={imgImage3150} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 w-[416px]" data-node-id="467:1851" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pb-[20px] px-[15px] relative size-full">
                          <div className="relative shrink-0 w-full" data-node-id="467:1852" data-name="Container">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative size-full">
                              <div className="relative shrink-0" data-node-id="467:1853" data-name="Paragraph">
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                                  <Typography className="[word-break:break-word] font-['Courier_Prime:Regular'] leading-[19.2px] relative shrink-0 text-[#06b349] text-[12px] tracking-[-0.12px] uppercase whitespace-nowrap" data-node-id="467:1854">
                                    AI Agent
                                  </Typography>
                                </div>
                              </div>
                              <div className="relative shrink-0 w-full" data-node-id="467:1855" data-name="Container">
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
                                  <div className="relative shrink-0 w-full" data-node-id="467:1856" data-name="Paragraph">
                                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                                      <Typography className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Geist:Regular'] font-normal leading-[1.4] relative shrink-0 text-[#0c221f] group-hover:text-[#06b349] transition-colors duration-200 text-[24px] underline w-[416px]" data-node-id="467:1857">
                                        Live on WhatsApp in 15 minutes — the no-developer setup.
                                      </Typography>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="relative shrink-0" data-node-id="467:1858" data-name="Paragraph">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                              <Typography className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Geist:Medium'] font-medium leading-[1.4] relative shrink-0 text-[#0c221f] text-[16px] underline whitespace-nowrap" data-node-id="467:1859">
                                Read more
                              </Typography>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[#e0dac6] border-r border-solid flex-[1_0_0] min-w-px relative group cursor-pointer" data-node-id="467:1860" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15px] items-start overflow-clip pr-px relative rounded-[inherit] size-full">
                      <div className="bg-white border-[#e0dac6] border-b border-solid relative shrink-0 w-full" data-node-id="467:1861" data-name="Link">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[10px] relative rounded-[inherit] size-full">
                          <div className="h-[300px] overflow-clip relative shrink-0 w-full" data-node-id="467:1862">
                            <div className="absolute inset-0" data-node-id="467:1863" data-name="image 3151">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-700 ease-out group-hover:scale-110" src={imgImage3151} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 w-[416px]" data-node-id="467:1864" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pb-[20px] px-[15px] relative size-full">
                          <div className="relative shrink-0 w-full" data-node-id="467:1865" data-name="Container">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative size-full">
                              <div className="relative shrink-0" data-node-id="467:1866" data-name="Paragraph">
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                                  <Typography className="[word-break:break-word] font-['Courier_Prime:Regular'] leading-[19.2px] relative shrink-0 text-[#06b349] text-[12px] tracking-[-0.12px] uppercase whitespace-nowrap" data-node-id="467:1867">
                                    CRM
                                  </Typography>
                                </div>
                              </div>
                              <div className="relative shrink-0 w-full" data-node-id="467:1868" data-name="Container">
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
                                  <div className="relative shrink-0 w-full" data-node-id="467:1869" data-name="Paragraph">
                                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                                      <Typography className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Geist:Regular'] font-normal leading-[1.4] relative shrink-0 text-[#0c221f] group-hover:text-[#06b349] transition-colors duration-200 text-[24px] underline w-[416px]" data-node-id="467:1870">
                                        Why 38% cart recovery is the new floor for D2C.
                                      </Typography>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="relative shrink-0" data-node-id="467:1871" data-name="Paragraph">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                              <Typography className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Geist:Medium'] font-medium leading-[1.4] relative shrink-0 text-[#0c221f] text-[16px] underline whitespace-nowrap" data-node-id="467:1872">
                                Read more
                              </Typography>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] min-w-px relative group cursor-pointer" data-node-id="467:1873" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15px] items-start overflow-clip relative rounded-[inherit] size-full">
                      <div className="bg-white border-[#e0dac6] border-b border-solid relative shrink-0 w-full" data-node-id="467:1874" data-name="Link">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[10px] relative rounded-[inherit] size-full">
                          <div className="h-[300px] overflow-clip relative shrink-0 w-full" data-node-id="467:1875">
                            <div className="absolute inset-0" data-node-id="467:1876" data-name="image 3150">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-700 ease-out group-hover:scale-110" src={imgImage3150} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 w-[416px]" data-node-id="467:1877" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pb-[20px] px-[15px] relative size-full">
                          <div className="relative shrink-0 w-full" data-node-id="467:1878" data-name="Container">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative size-full">
                              <div className="relative shrink-0" data-node-id="467:1879" data-name="Paragraph">
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                                  <Typography className="[word-break:break-word] font-['Courier_Prime:Regular'] leading-[19.2px] relative shrink-0 text-[#06b349] text-[12px] tracking-[-0.12px] uppercase whitespace-nowrap" data-node-id="467:1880">
                                    Resources
                                  </Typography>
                                </div>
                              </div>
                              <div className="relative shrink-0 w-full" data-node-id="467:1881" data-name="Container">
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
                                  <div className="relative shrink-0 w-full" data-node-id="467:1882" data-name="Paragraph">
                                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                                      <Typography className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Geist:Regular'] font-normal leading-[1.4] relative shrink-0 text-[#0c221f] group-hover:text-[#06b349] transition-colors duration-200 text-[24px] underline w-[416px]" data-node-id="467:1883">
                                        Hindi, English or Hinglish? Training the AI for India.
                                      </Typography>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="relative shrink-0" data-node-id="467:1884" data-name="Paragraph">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                              <Typography className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Geist:Medium'] font-medium leading-[1.4] relative shrink-0 text-[#0c221f] text-[16px] underline whitespace-nowrap" data-node-id="467:1885">
                                Read more
                              </Typography>
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

          <div className="border-[#e0dac6] border-b border-solid content-stretch flex flex-col items-center justify-center overflow-clip container mx-auto px-4 xl:px-0 relative shrink-0 w-full" data-node-id="467:1886" data-name="Container">
            <div className="border-[#e0dac6] border-l border-r border-solid relative shrink-0 w-full" data-node-id="467:1887">
              <div className="bg-clip-padding border-[transparent] border-l border-r border-solid content-stretch flex flex-col items-start justify-center px-[50px] py-[40px] relative size-full">
                <div className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full" data-node-id="467:1888">
                  <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[380px]" data-node-id="467:1889">
                    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-node-id="467:1890">
                      <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-node-id="467:1891">
                        <div className="bg-[#06b349] relative shrink-0 size-[10px]" data-node-id="467:1892" />
                        <Typography className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Courier_Prime:Regular'] leading-[1.4] not-italic relative shrink-0 text-[#0c221f] text-[18px] text-center whitespace-nowrap" data-node-id="467:1893">
                          Faq’s
                        </Typography>
                      </div>
                      <div className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[0] relative shrink-0 text-[#0c221f] text-[42px] tracking-[-1px] whitespace-nowrap" data-node-id="467:1894">
                        <Typography className="leading-[1.4] mb-0 whitespace-pre">{`Frequently `}</Typography>
                        <Typography className="leading-[1.4] mb-0 whitespace-pre">{`asked `}</Typography>
                        <Typography className="leading-[1.4] whitespace-pre">questions</Typography>
                      </div>
                    </div>
                    {/* <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-node-id="467:1895" data-name="Container">
                      <div className="bg-[#06b349] hover:bg-[#05a043] active:scale-[0.98] transition-all duration-150 relative rounded-[8px] shrink-0 cursor-pointer" data-node-id="467:1896" data-name="Link">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.992px] items-center overflow-clip pl-[20px] pr-[15px] py-[15px] relative rounded-[inherit] size-full">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[1410px] left-[calc(50%+0.5px)] mix-blend-color-burn top-1/2 w-[2115px]" data-node-id="467:1897" data-name="image 27">
                            <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover opacity-25 pointer-events-none size-full" src={imgImage27} />
                          </div>
                          <Typography className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-none relative shrink-0 text-[18px] text-white whitespace-nowrap" data-node-id="467:1898">
                            Book a demo
                          </Typography>
                          <div className="relative shrink-0 size-[20px]" data-node-id="467:1899" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
                          </div>
                        </div>
                      </div>
                      <div className="bg-white hover:bg-[#f8f5ec] active:scale-[0.98] transition-all duration-150 border border-[#dedace] border-solid relative rounded-[8px] shrink-0 cursor-pointer" data-node-id="467:1901" data-name="Link">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[21px] pr-[16px] py-[16px] relative rounded-[inherit] size-full">
                          <Typography className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-none relative shrink-0 text-[#092511] text-[18px] whitespace-nowrap" data-node-id="467:1902">
                            Get Started
                          </Typography>
                        </div>
                      </div>
                    </div> */}
                  </div>



                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="467:1903" data-name="Container">
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
        </div>
        <Footer />
      </div>
    </div>
  );
}
