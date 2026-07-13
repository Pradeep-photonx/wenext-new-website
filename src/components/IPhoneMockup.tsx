import Typography from '@mui/material/Typography';
import { useState, useEffect, useRef } from 'react';
import imgInstagramPost from '../assets/instagram-post.png';
import CommentIcon from '../assets/icons/comment.png';
import SmallLogo from '../assets/icons/sm-logo.png';
import User from '../assets/icons/user.png';

type Props = {
  tab?: 0 | 1 | 2;
  width?: number;
  minHeight?: number;
};

export default function IPhoneMockup({ tab = 0, width = 220, minHeight = 460 }: Props) {
  const [chatStep, setChatStep] = useState(-1);
  const [iphInputText, setIphInputText] = useState('');
  const [igOverlayOpen, setIgOverlayOpen] = useState(false);
  const [igPostShifted, setIgPostShifted] = useState(false);
  const iphInputScrollRef = useRef<HTMLDivElement>(null);

  // WhatsApp timeline
  useEffect(() => {
    if (tab !== 0) return;
    const seq: Array<{ type: 'typing' | 'send' | 'step'; text?: string; step?: number; wait: number }> = [
      { type: 'typing', text: 'Hi! Is the linen kurta still available?', wait: 2200 },
      { type: 'send', step: 0, wait: 500 },
      { type: 'step', step: 1, wait: 800 },
      { type: 'step', step: 2, wait: 1200 },
      { type: 'typing', text: 'yes please', wait: 700 },
      { type: 'send', step: 3, wait: 500 },
      { type: 'step', step: 4, wait: 900 },
      { type: 'step', step: 5, wait: 2500 },
    ];
    let i = 0;
    let cancelled = false;
    let t: ReturnType<typeof setTimeout>;
    const run = () => {
      if (cancelled) return;
      const s = seq[i];
      if (s.type === 'typing') { if (i === 0) setChatStep(-1); setIphInputText(s.text || ''); }
      else if (s.type === 'send') { setChatStep(s.step ?? 0); setIphInputText(''); }
      else { setChatStep(s.step ?? 0); }
      i = (i + 1) % seq.length;
      t = setTimeout(run, s.wait);
    };
    setChatStep(-1);
    setIphInputText('');
    t = setTimeout(run, 200);
    return () => { cancelled = true; clearTimeout(t); };
  }, [tab]);

  // Instagram timeline
  useEffect(() => {
    if (tab !== 1) { setIgOverlayOpen(false); setIgPostShifted(false); return; }
    setIgOverlayOpen(false);
    setIgPostShifted(false);
    setChatStep(0);
    const t1 = setTimeout(() => setIgPostShifted(true), 900);
    const t2 = setTimeout(() => setIgOverlayOpen(true), 1200);
    const t3 = setTimeout(() => setChatStep(1), 2000);
    const t4 = setTimeout(() => setChatStep(2), 3300);
    const t5 = setTimeout(() => setChatStep(3), 4400);
    return () => { [t1, t2, t3, t4, t5].forEach(clearTimeout); };
  }, [tab]);

  // Facebook (Messenger-style) timeline
  useEffect(() => {
    if (tab !== 2) return;
    setChatStep(-1);
    const t0 = setTimeout(() => setChatStep(0), 400);
    const t1 = setTimeout(() => setChatStep(1), 1400);
    const t2 = setTimeout(() => setChatStep(2), 2400);
    const t3 = setTimeout(() => setChatStep(3), 3400);
    const t4 = setTimeout(() => setChatStep(4), 4200);
    const t5 = setTimeout(() => setChatStep(5), 5000);
    return () => { [t0, t1, t2, t3, t4, t5].forEach(clearTimeout); };
  }, [tab]);

  useEffect(() => {
    if (!iphInputText || !iphInputScrollRef.current) return;
    const scroll = () => { if (iphInputScrollRef.current) iphInputScrollRef.current.scrollLeft = iphInputScrollRef.current.scrollWidth; };
    scroll();
    const id = setInterval(scroll, 40);
    const stop = setTimeout(() => clearInterval(id), iphInputText.length * 60 + 200);
    return () => { clearInterval(id); clearTimeout(stop); };
  }, [iphInputText]);

  const headerBg = tab === 0 ? '#075E54' : tab === 1 ? '#000' : '#ffffff';

  return (
    <div className="flex items-end justify-center">
      <style>{`
        @keyframes iphMsgIn { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:translateY(0); } }
        @keyframes iphTyping { 0%,60%,100% { transform:translateY(0); opacity:0.5; } 30% { transform:translateY(-3px); opacity:1; } }
        @keyframes iphCaret { 0%,49% { opacity:1; } 50%,100% { opacity:0; } }
        @keyframes iphLetterReveal { to { max-width: 2em; } }
        .iph-msg-in    { animation: iphMsgIn 0.35s cubic-bezier(0.32,0.72,0.35,1) both; }
        .iph-typing    { animation: iphTyping 1.2s ease-in-out infinite; }
        .iph-caret     { animation: iphCaret 1s steps(2,start) infinite; }
        .iph-letter    { display: inline-block; max-width: 0; overflow: hidden; animation: iphLetterReveal 90ms linear forwards; }
      `}</style>

      <div className="relative" style={{ width }}>
        <div
          className="relative rounded-[26px]"
          style={{
            background: 'linear-gradient(145deg, #1a1b1c 0%, #1f2023 42%, #18191a 60%, #201430 100%)',
            padding: '3px',
            boxShadow: '0 32px 80px -18px rgba(45,25,75,0.45), 0 8px 22px -6px rgba(30,15,55,0.32), inset 0 1px 0 rgba(255,255,255,0.14), inset 0 -1px 0 rgba(0,0,0,0.35)',
          }}
        >
          <div className="rounded-[24px] overflow-hidden bg-black" style={{ minHeight }}>

            {/* Status bar */}
            <div className="px-[12px] pt-[8px] pb-[4px] flex items-center justify-between shrink-0 relative" style={{ background: headerBg }}>
              <span className={`${tab === 2 ? 'text-black' : 'text-white'} text-[8px] font-semibold`}>9:41</span>
              <div className="absolute left-1/2 -translate-x-1/2 top-[5px] bg-black rounded-full flex items-center justify-between px-[5px]" style={{ width: 66, height: 18 }}>
                <div className="size-[5px] rounded-full" style={{ background: 'radial-gradient(circle at 30% 30%, #1c1c22 0%, #050505 90%)' }} />
                <div className="size-[8px] rounded-full flex items-center justify-center" style={{ background: 'radial-gradient(circle at 30% 30%, #2f2f3c 0%, #0a0a12 80%)' }}>
                  <div className="size-[3px] rounded-full" style={{ background: 'radial-gradient(circle at 30% 30%, #4a4a5c 0%, #050505 90%)' }} />
                </div>
              </div>
              <div className="flex items-center gap-[2px]">
                <div className="flex items-end gap-[1px] h-[6px]">
                  <div className={`w-[1.5px] h-[2px] rounded-[0.5px] ${tab === 2 ? 'bg-black' : 'bg-white'}`} />
                  <div className={`w-[1.5px] h-[3px] rounded-[0.5px] ${tab === 2 ? 'bg-black' : 'bg-white'}`} />
                  <div className={`w-[1.5px] h-[4px] rounded-[0.5px] ${tab === 2 ? 'bg-black' : 'bg-white'}`} />
                  <div className={`w-[1.5px] h-[6px] rounded-[0.5px] ${tab === 2 ? 'bg-black' : 'bg-white'}`} />
                </div>
                <div className={`relative w-[13px] h-[6px] border rounded-[1.5px] flex items-center p-[0.5px] ${tab === 2 ? 'border-black' : 'border-white'}`}>
                  <div className={`h-full w-[70%] rounded-[1px] ${tab === 2 ? 'bg-black' : 'bg-white'}`} />
                </div>
              </div>
            </div>

            {/* ── WHATSAPP ── */}
            {tab === 0 && (
              <div className="flex flex-col" style={{ background: '#e5ddd5', backgroundImage: 'radial-gradient(rgba(11,31,26,0.04) 1px, transparent 1px)', backgroundSize: '12px 12px', minHeight: minHeight - 30 }}>
                <div className="bg-[#075E54] px-[8px] pt-[6px] pb-[6px] flex items-center gap-[6px] shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="shrink-0"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <div className="size-[22px] rounded-full bg-gradient-to-br from-[#25d366] to-[#128C7E] flex items-center justify-center text-white font-['Geist:Bold'] font-bold text-[9px] shrink-0">PG</div>
                  <div className="flex-1 flex flex-col min-w-0">
                    <span className="text-white text-[10px] font-['Geist:SemiBold'] font-semibold leading-none truncate">Prathik Gadde</span>
                    <span className="text-[#a3d5b4] text-[7.5px] font-['Geist:Regular'] leading-none mt-[2px]">online</span>
                  </div>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="white" className="shrink-0"><path d="M15 8v8l6 4V4l-6 4zM4 5h9v14H4z" /></svg>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="white" className="shrink-0"><path d="M20 15.5c-1.2 0-2.4-.2-3.5-.6a1 1 0 00-1 .3l-2 2c-2.8-1.4-5-3.5-6.5-6.5l2-2c.3-.3.3-.7.2-1-.4-1.1-.6-2.3-.6-3.5A1 1 0 007.6 3H4a1 1 0 00-1 1c0 9.4 7.6 17 17 17a1 1 0 001-1v-3.5a1 1 0 00-1-1z" /></svg>
                </div>
                <div className="text-center py-[3px] shrink-0"><span className="bg-[#E1F2FB] text-[#54656F] text-[6.5px] font-['Geist:Medium'] font-medium px-[7px] py-[2px] rounded-[6px]">TODAY</span></div>
                <div className="flex-1 px-[6px] pb-[4px] flex flex-col gap-[3px] overflow-hidden justify-end">
                  {chatStep >= 0 && (
                    <div className="self-start bg-white rounded-[6px] rounded-tl-[0px] px-[6px] py-[5px] max-w-[80%] iph-msg-in" style={{ boxShadow: '0 1px 0.5px rgba(11,20,26,0.13)' }}>
                      <div className="text-[#111b21] text-[8.5px] font-['Geist:Regular'] leading-[1.3]">Hi! Is the linen kurta still available?</div>
                      <div className="text-[#667781] text-[6.5px] text-right mt-[1px]">10:34</div>
                    </div>
                  )}
                  {chatStep === 1 && (
                    <div className="self-end bg-[#d9fdd3] rounded-[6px] rounded-tr-[0px] px-[8px] py-[6px] iph-msg-in flex gap-[3px] items-center" style={{ boxShadow: '0 1px 0.5px rgba(11,20,26,0.13)' }}>
                      <span className="size-[3.5px] rounded-full bg-[#7a8f86] iph-typing" style={{ animationDelay: '0ms' }} />
                      <span className="size-[3.5px] rounded-full bg-[#7a8f86] iph-typing" style={{ animationDelay: '180ms' }} />
                      <span className="size-[3.5px] rounded-full bg-[#7a8f86] iph-typing" style={{ animationDelay: '360ms' }} />
                    </div>
                  )}
                  {chatStep >= 2 && chatStep !== 1 && (
                    <div className="self-end bg-[#d9fdd3] rounded-[6px] rounded-tr-[0px] px-[6px] py-[5px] max-w-[86%] iph-msg-in" style={{ boxShadow: '0 1px 0.5px rgba(11,20,26,0.13)' }}>
                      <div className="text-[#7a8f86] text-[6.5px] font-['Geist:Medium'] font-medium mb-[1px]">WeNext AI</div>
                      <div className="text-[#111b21] text-[8.5px] font-['Geist:Regular'] leading-[1.3]">Yes! In stock — 3 pieces left. Share UPI link?</div>
                      <div className="text-[#667781] text-[6.5px] text-right mt-[1px]">10:36 <span className="text-[#53bdeb]">✓✓</span></div>
                    </div>
                  )}
                  {chatStep >= 3 && (
                    <div className="self-start bg-white rounded-[6px] rounded-tl-[0px] px-[6px] py-[5px] max-w-[55%] iph-msg-in" style={{ boxShadow: '0 1px 0.5px rgba(11,20,26,0.13)' }}>
                      <div className="text-[#111b21] text-[8.5px] font-['Geist:Regular'] leading-[1.3]">Yes please.</div>
                      <div className="text-[#667781] text-[6.5px] text-right mt-[1px]">10:37</div>
                    </div>
                  )}
                  {chatStep === 4 && (
                    <div className="self-end bg-[#d9fdd3] rounded-[6px] rounded-tr-[0px] px-[8px] py-[6px] iph-msg-in flex gap-[3px] items-center" style={{ boxShadow: '0 1px 0.5px rgba(11,20,26,0.13)' }}>
                      <span className="size-[3.5px] rounded-full bg-[#7a8f86] iph-typing" style={{ animationDelay: '0ms' }} />
                      <span className="size-[3.5px] rounded-full bg-[#7a8f86] iph-typing" style={{ animationDelay: '180ms' }} />
                      <span className="size-[3.5px] rounded-full bg-[#7a8f86] iph-typing" style={{ animationDelay: '360ms' }} />
                    </div>
                  )}
                  {chatStep >= 5 && (
                    <div className="self-end bg-[#0f2a1e] rounded-[9px] px-[8px] py-[6px] flex flex-col items-start max-w-[80%] iph-msg-in" style={{ boxShadow: '0 2px 6px -1px rgba(11,20,26,0.24)' }}>
                      <div className="flex items-center gap-[4px]">
                        <div className="size-[11px] rounded-[3px] bg-[#FFD400] flex items-center justify-center text-[7px] font-['Geist:Bold'] font-bold text-[#0f2a1e]">₹</div>
                        <span className="text-white text-[8px] font-['Geist:Medium'] font-medium">UPI Payment</span>
                      </div>
                      <span className="text-[#FFD400] text-[13px] font-['Geist:Bold'] font-bold leading-[1.1] mt-[3px]">₹2,490</span>
                      <span className="text-[#a3d5b4] text-[6.5px] font-['Geist:Regular'] mt-[2px]">Tap to pay · linen kurta · size M</span>
                    </div>
                  )}
                </div>
                <div className="bg-[#f0f2f5] px-[5px] py-[5px] flex items-center gap-[4px] shrink-0">
                  <div className="flex-1 bg-white rounded-full h-[22px] flex items-center pl-[4px] pr-[5px] gap-[3px]">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" className="shrink-0">
                      <circle cx="12" cy="12" r="9" stroke="#54656F" strokeWidth="1.6" />
                      <circle cx="8.6" cy="10" r="1.1" fill="#54656F" />
                      <circle cx="15.4" cy="10" r="1.1" fill="#54656F" />
                      <path d="M8.5 14c1 1.3 2.2 1.9 3.5 1.9s2.5-.6 3.5-1.9" stroke="#54656F" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                    <div className="flex-1 min-w-0 overflow-hidden" ref={iphInputScrollRef}>
                      <div className="text-[#111b21] text-[7.5px] font-['Geist:Regular']" style={{ whiteSpace: 'pre', lineHeight: '10px' }} key={iphInputText}>
                        {iphInputText.length === 0 && <span className="text-[#54656F]">Message</span>}
                        {iphInputText.split('').map((c, idx) => (
                          <span key={idx} className="iph-letter" style={{ animationDelay: `${idx * 60}ms` }}>{c}</span>
                        ))}
                        <span className="iph-caret ml-[1px] inline-block w-[1px] h-[8px] bg-[#00A884] align-middle" />
                      </div>
                    </div>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" className="shrink-0"><path d="M21 12l-8.5 8.5a5 5 0 01-7-7L14 5a3.5 3.5 0 014.9 5L10.5 18.5a2 2 0 01-2.8-2.8L15 8.5" stroke="#54656F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <div className="size-[22px] rounded-full bg-[#00A884] flex items-center justify-center shrink-0" style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M12 1a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4zm6 11a6 6 0 0 1-12 0H4a8 8 0 0 0 7 7.93V23h2v-3.07A8 8 0 0 0 20 12h-2z" /></svg>
                  </div>
                </div>
              </div>
            )}

            {/* ── INSTAGRAM ── */}
            {tab === 1 && (
              <div className="relative overflow-hidden bg-white" style={{ minHeight: minHeight - 30 }}>
                <div className="h-full flex flex-col" style={{ transform: igPostShifted ? 'translateY(-20px)' : 'translateY(0)', transition: 'transform 450ms cubic-bezier(0.4,0,0.2,1)' }}>
                  <div className="flex items-center gap-[4px] px-[8px] py-[8px] shrink-0">
                    <img src={SmallLogo} width={22} alt="" />
                    <div className="flex-1 flex items-center gap-[2px]">
                      <Typography className="text-[#0c221f] text-[9.5px] font-['Geist:SemiBold'] font-semibold leading-none">wenext.ai</Typography>
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="#0095F6"><path d="M23 12l-2.5-2.9.4-3.8-3.7-.8-2-3.3L11.5 2.4 8 .2 6 3.5l-3.7.8.4 3.8L.2 11l2.5 2.9-.4 3.8 3.7.8 2 3.3 3.5-1.4 3.5 1.4 2-3.3 3.7-.8-.4-3.8L23 12zm-12.7 4.7L6 12.4l1.4-1.4 2.9 2.9 6.3-6.3L18 9l-7.7 7.7z" /></svg>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#0c221f"><circle cx="5" cy="12" r="1.7" /><circle cx="12" cy="12" r="1.7" /><circle cx="19" cy="12" r="1.7" /></svg>
                  </div>
                  <div className="w-full shrink-0 bg-[#fafafa]" style={{ height: 200 }}>
                    <img src={imgInstagramPost} alt="post" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex items-center justify-between px-[8px] pt-[6px] pb-[3px] shrink-0">
                    <div className="flex items-center gap-[10px]">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="#0c221f" strokeWidth="1.7" strokeLinejoin="round" /></svg>
                      <div style={{ transformOrigin: 'center', lineHeight: 0, animation: 'igCommentTap 500ms cubic-bezier(0.34,1.56,0.64,1) 1100ms both' }}>
                        <img src={CommentIcon} width={17} alt="" />
                      </div>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M22 2L11 13" stroke="#0c221f" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M22 2l-7 20-4-9-9-4 20-7z" stroke="#0c221f" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" stroke="#0c221f" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <div className="px-[8px] pb-[4px] shrink-0">
                    <Typography className="text-[#0c221f] text-[9px] font-['Geist:SemiBold'] font-semibold leading-none">1,247 likes</Typography>
                    <Typography className="text-[#0c221f] text-[9px] mt-[3px] leading-[1.3]">
                      <span className="font-['Geist:SemiBold'] font-semibold">wenext.ai</span> Turn every conversation into a customer ✨
                    </Typography>
                  </div>
                </div>
                {/* Comments sheet */}
                <div className="absolute left-0 right-0 bottom-0 bg-white flex flex-col overflow-hidden z-20"
                  style={{
                    height: '62%',
                    transform: igOverlayOpen ? 'translateY(0)' : 'translateY(100%)',
                    transition: 'transform 500ms cubic-bezier(0.32,0.72,0.35,1)',
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    boxShadow: '0 -10px 30px rgba(0,0,0,0.25)'
                  }}
                >
                  <div className="px-[10px] pt-[14px] pb-[6px] flex items-center gap-[6px] border-b border-[#efefef] relative">
                    <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-[24px] h-[2.5px] rounded-full bg-[#dbdbdb]" />
                    <Typography className="flex-1 text-center text-[#0c221f] text-[10px] font-['Geist:SemiBold'] font-semibold leading-none">Comments</Typography>
                  </div>
                  <div className="flex-1 px-[8px] pt-[8px] pb-[4px] flex flex-col gap-[8px] overflow-hidden">
                    <div className="flex gap-[6px]">
                      <div className="size-[20px] rounded-full flex items-center justify-center text-white font-['Geist:Bold'] font-bold text-[8px] shrink-0" style={{ background: 'linear-gradient(135deg,#F5A16D,#E0653C)' }}>A</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-[3px]">
                          <Typography className="text-[#0c221f] text-[8.5px] font-['Geist:SemiBold'] font-semibold leading-none">arjun_k</Typography>
                          <Typography className="text-[#8e8e8e] text-[7px] leading-none">· 3h</Typography>
                        </div>
                        <Typography className="text-[#0c221f] text-[9px] font-['Geist:Regular'] leading-[1.3] mt-[1px]">This looks super clean 🔥</Typography>
                      </div>
                    </div>
                    {chatStep >= 2 && (
                      <div className="flex gap-[6px] iph-msg-in">
                        <div className="size-[20px] rounded-full flex items-center justify-center text-white font-['Geist:Bold'] font-bold text-[8px] shrink-0" style={{ background: 'linear-gradient(135deg,#F5A16D,#E0653C)' }}>K</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-[3px]">
                            <Typography className="text-[#0c221f] text-[8.5px] font-['Geist:SemiBold'] font-semibold leading-none">Karthik Reddy</Typography>
                            <Typography className="text-[#8e8e8e] text-[7px] leading-none">· Just now</Typography>
                          </div>
                          <Typography className="text-[#0c221f] text-[9.5px] font-['Geist:SemiBold'] font-semibold leading-[1.3] mt-[1px] tracking-[0.5px]">WENEXT</Typography>
                        </div>
                      </div>
                    )}
                    {chatStep >= 3 && (
                      <div className="flex gap-[6px] pl-[26px] iph-msg-in">
                        <img src={SmallLogo} width={22} alt="" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-[3px] flex-wrap">
                            <Typography className="text-[#0c221f] text-[8.5px] font-['Geist:SemiBold'] font-semibold leading-none">wenext.ai</Typography>
                            <svg width="8" height="8" viewBox="0 0 24 24" fill="#0095F6"><path d="M23 12l-2.5-2.9.4-3.8-3.7-.8-2-3.3L11.5 2.4 8 .2 6 3.5l-3.7.8.4 3.8L.2 11l2.5 2.9-.4 3.8 3.7.8 2 3.3 3.5-1.4 3.5 1.4 2-3.3 3.7-.8-.4-3.8L23 12zm-12.7 4.7L6 12.4l1.4-1.4 2.9 2.9 6.3-6.3L18 9l-7.7 7.7z" /></svg>
                            <Typography className="text-[#8e8e8e] text-[7px] leading-none">· Just now</Typography>
                          </div>
                          <Typography className="text-[#0c221f] text-[9px] font-['Geist:Regular'] leading-[1.3] mt-[1px]">Thanks for showing interest, please check your DM ✨</Typography>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="px-[8px] py-[5px] flex items-center gap-[6px] border-t border-[#efefef]">
                    <img src={User} alt="" width={18} />
                    <div className={`flex-1 border rounded-[16px] h-[22px] flex items-center px-[9px] transition-colors ${chatStep < 2 ? 'border-[#0c221f]' : 'border-[#dbdbdb]'}`}>
                      {chatStep <= 0 && (<><Typography className="text-[#c7c7c7] text-[8px]">Add a comment for wenext.ai...</Typography><span className="iph-caret ml-[1.5px] inline-block w-[1.2px] h-[9px] bg-[#0095F6]" /></>)}
                      {chatStep === 1 && (<><span className="text-[#0c221f] text-[9px] font-['Geist:SemiBold'] font-semibold tracking-[0.5px]">{'WENEXT'.split('').map((c, i) => (<span key={i} className="iph-letter" style={{ animationDelay: `${100 + i * 100}ms` }}>{c}</span>))}</span><span className="iph-caret ml-[1px] inline-block w-[1.2px] h-[9px] bg-[#0095F6]" /></>)}
                      {chatStep >= 2 && (<Typography className="text-[#8e8e8e] text-[8px]">Add a comment for wenext.ai...</Typography>)}
                    </div>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M22 2L11 13" stroke={chatStep === 1 ? '#0c221f' : '#eee'} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 2l-7 20-4-9-9-4 20-7z" stroke={chatStep === 1 ? '#0c221f' : '#eee'} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <style>{`@keyframes igCommentTap {0%{transform:scale(1);}35%{transform:scale(0.82);}65%{transform:scale(1.15);}100%{transform:scale(1);}}`}</style>
                </div>
              </div>
            )}

            {/* ── FACEBOOK (Messenger) ── */}
            {tab === 2 && (
              <div className="flex flex-col bg-white" style={{ minHeight: minHeight - 30 }}>
                <div className="px-[8px] pt-[10px] pb-[6px] flex items-center gap-[6px]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1877F2" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <div className="relative">
                    <div className="size-[24px] rounded-full bg-gradient-to-br from-[#1877F2] to-[#0d65d9] flex items-center justify-center text-white font-['Geist:Bold'] font-bold text-[10px]">PG</div>
                    <div className="absolute bottom-0 right-0 size-[7px] rounded-full bg-[#31a24c] border border-white" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <Typography className="text-[#0c221f] text-[10px] font-['Geist:SemiBold'] font-semibold leading-none">Prathik Gadde</Typography>
                    <Typography className="text-[#65676b] text-[7.5px] font-['Geist:Regular'] leading-none mt-[2px]">Active now</Typography>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#1877F2"><path d="M22 4.27v15.46c0 .65-.74 1.02-1.26.64L17 17.5V18a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v.5l3.74-2.87c.52-.38 1.26-.01 1.26.64z" /></svg>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#1877F2"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.05 15.05 0 0 1-6.59-6.58l2.2-2.21c.27-.27.35-.67.24-1.02A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" /></svg>
                </div>
                <div className="flex-1 px-[8px] py-[6px] flex flex-col gap-[4px] overflow-hidden justify-end">
                  {chatStep >= 0 && (
                    <div className="self-start bg-[#f0f2f5] rounded-[14px] rounded-bl-[4px] px-[9px] py-[5px] max-w-[78%] iph-msg-in">
                      <Typography className="text-[#0c221f] text-[9px] font-['Geist:Regular'] leading-[1.3]">Saw your post — is the linen kurta still up?</Typography>
                    </div>
                  )}
                  {chatStep === 1 && (
                    <div className="self-end bg-gradient-to-br from-[#0084ff] to-[#0064d8] rounded-[14px] rounded-br-[4px] px-[10px] py-[7px] flex gap-[3px] items-center iph-msg-in">
                      <span className="size-[4px] rounded-full bg-white iph-typing" style={{ animationDelay: '0ms' }} />
                      <span className="size-[4px] rounded-full bg-white iph-typing" style={{ animationDelay: '180ms' }} />
                      <span className="size-[4px] rounded-full bg-white iph-typing" style={{ animationDelay: '360ms' }} />
                    </div>
                  )}
                  {chatStep >= 2 && chatStep !== 1 && (
                    <div className="self-end bg-gradient-to-br from-[#0084ff] to-[#0064d8] rounded-[14px] rounded-br-[4px] px-[9px] py-[5px] max-w-[85%] flex flex-col iph-msg-in">
                      <Typography className="text-white/80 text-[6.5px] font-['Geist:Medium'] mb-[1px]">WeNext AI</Typography>
                      <Typography className="text-white text-[9px] font-['Geist:Regular'] leading-[1.3]">Yes! Size M, 3 left. Payment link?</Typography>
                    </div>
                  )}
                  {chatStep >= 3 && (
                    <div className="self-start bg-[#f0f2f5] rounded-[14px] rounded-bl-[4px] px-[9px] py-[5px] max-w-[55%] iph-msg-in">
                      <Typography className="text-[#0c221f] text-[9px] font-['Geist:Regular'] leading-[1.3]">Yes please.</Typography>
                    </div>
                  )}
                  {chatStep === 4 && (
                    <div className="self-end bg-gradient-to-br from-[#0084ff] to-[#0064d8] rounded-[14px] rounded-br-[4px] px-[10px] py-[7px] flex gap-[3px] items-center iph-msg-in">
                      <span className="size-[4px] rounded-full bg-white iph-typing" style={{ animationDelay: '0ms' }} />
                      <span className="size-[4px] rounded-full bg-white iph-typing" style={{ animationDelay: '180ms' }} />
                      <span className="size-[4px] rounded-full bg-white iph-typing" style={{ animationDelay: '360ms' }} />
                    </div>
                  )}
                  {chatStep >= 5 && (
                    <div className="self-end bg-white border border-[#e4e6eb] rounded-[12px] overflow-hidden max-w-[78%] iph-msg-in">
                      <div className="bg-[#1877F2] px-[9px] py-[4px] flex items-center gap-[3px]">
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="white"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" /></svg>
                        <Typography className="text-white text-[7px] font-['Geist:Medium']">Secure checkout</Typography>
                      </div>
                      <div className="px-[9px] py-[7px]">
                        <Typography className="text-[#0c221f] text-[12px] font-['Geist:Bold'] font-bold leading-none">Pay ₹2,490</Typography>
                        <Typography className="text-[#65676b] text-[7px] font-['Geist:Regular'] mt-[2px]">linen kurta · size M</Typography>
                        <div className="mt-[5px] rounded-[6px] py-[4px] text-center text-[8px] text-white bg-[#1877F2] font-['Geist:SemiBold'] font-semibold">Open payment</div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="px-[8px] py-[5px] flex items-center gap-[5px] border-t border-[#e4e6eb]">
                  <div className="size-[20px] rounded-full bg-[#e7f3ff] flex items-center justify-center"><svg width="10" height="10" viewBox="0 0 24 24" fill="#1877F2"><path d="M12 5v14m-7-7h14" strokeWidth="3" stroke="#1877F2" /></svg></div>
                  <div className="flex-1 bg-[#f0f2f5] rounded-[16px] h-[20px] flex items-center px-[8px] justify-between"><Typography className="text-[#65676b] text-[8px]">Aa</Typography></div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z" /></svg>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="absolute left-[-3px] top-[80px] w-[2px] h-[22px] rounded-l-[1.5px] bg-[#2a1c40]" />
        <div className="absolute left-[-3px] top-[112px] w-[2px] h-[36px] rounded-l-[1.5px] bg-[#2a1c40]" />
        <div className="absolute left-[-3px] top-[156px] w-[2px] h-[36px] rounded-l-[1.5px] bg-[#2a1c40]" />
        <div className="absolute right-[-3px] top-[120px] w-[2px] h-[50px] rounded-r-[1.5px] bg-[#2a1c40]" />
      </div>
    </div>
  );
}
