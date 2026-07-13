import { useState, useEffect } from 'react';
import imgInstagramPost from '../assets/instagram-post.png';

type Tab = 0 | 1 | 2;

const CARD_WIDTH = 220;
const CARD_HEIGHT = 420;

const TABS = [
  {
    key: 'WhatsApp',
    contact: 'Priya Sharma',
    status: 'online',
    userMsg: 'Hi! Is the linen kurta still available?',
    aiMsg: 'Yes! 3 left in M. Sending UPI link →',
    followUp: 'Yes please.',
    payment: { amount: '₹2,490', detail: '1 linen kurta · size M' },
  },
  {
    key: 'Instagram',
    contact: 'wenext.ai',
    status: 'Sponsored',
    userComment: 'Loved this drop 😍 share the link please 🙏',
    userHandle: 'anaya.verma',
    aiComment: 'Hey @anaya.verma — link sent to your DM ✨',
  },
  {
    key: 'Facebook',
    contact: 'Karthik Iyer',
    status: 'Active now',
    userMsg: 'Saw your ad — cotton shirt in stock?',
    aiMsg: 'Size M has 3 left. Checkout below →',
    followUp: 'Send checkout.',
    payment: { amount: '₹1,890', detail: '1 cotton shirt · size M' },
  },
];

export default function HeroChatCard({ tab = 0 }: { tab?: Tab }) {
  const active = TABS[tab];
  const [step, setStep] = useState(-1);
  const [prevTab, setPrevTab] = useState(tab);

  // Reset step DURING render when tab changes — prevents a one-frame flash of the previous cycle's final state.
  if (prevTab !== tab) {
    setPrevTab(tab);
    setStep(-1);
  }

  useEffect(() => {
    const t0 = setTimeout(() => setStep(0), 400);
    const t1 = setTimeout(() => setStep(1), 1600);
    const t2 = setTimeout(() => setStep(2), 2700);
    const t3 = setTimeout(() => setStep(3), 4200);
    const t4 = setTimeout(() => setStep(4), 5000);
    const t5 = setTimeout(() => setStep(5), 6100);
    return () => { [t0, t1, t2, t3, t4, t5].forEach(clearTimeout); };
  }, [tab]);

  return (
    <div
      style={{
        width: CARD_WIDTH + 8,
        height: CARD_HEIGHT + 8,
        borderRadius: 24,
        padding: 4,
        background: 'linear-gradient(145deg, #1a1b1c 0%, #1f2023 55%, #18191a 100%)',
        boxShadow:
          '0 30px 60px -20px rgba(0,0,0,0.6), 0 8px 24px -6px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.10), inset 0 -1px 0 rgba(0,0,0,0.3)',
        position: 'relative',
      }}
    >
      {/* Left-side buttons — silent switch + volume up + volume down */}
      <div style={{ position: 'absolute', left: -2, top: 78, width: 2.5, height: 20, borderRadius: 2, background: '#0e0e10', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)' }} />
      <div style={{ position: 'absolute', left: -2, top: 108, width: 2.5, height: 36, borderRadius: 2, background: '#0e0e10', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)' }} />
      <div style={{ position: 'absolute', left: -2, top: 152, width: 2.5, height: 36, borderRadius: 2, background: '#0e0e10', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)' }} />
      {/* Right-side button — side (power) */}
      <div style={{ position: 'absolute', right: -2, top: 120, width: 2.5, height: 54, borderRadius: 2, background: '#0e0e10', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)' }} />
      <div
        style={{
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
          borderRadius: 20,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          background: '#fff',
          position: 'relative',
        }}
      >
        <style>{`
          @keyframes hccMsgIn { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:translateY(0); } }
          @keyframes hccTyping { 0%,60%,100% { transform:translateY(0); opacity:0.5; } 30% { transform:translateY(-2px); opacity:1; } }
          .hcc-msg-in { animation: hccMsgIn 0.4s cubic-bezier(0.32,0.72,0.35,1) both; }
          .hcc-typing { animation: hccTyping 1.2s ease-in-out infinite; }
        `}</style>

        {tab === 0 && <WhatsAppCard active={active} step={step} />}
        {tab === 1 && <InstagramCard active={active} step={step} />}
        {tab === 2 && <FacebookCard active={active} step={step} />}
      </div>
    </div>
  );
}

/* ─────────────── WhatsApp theme ─────────────── */
function WhatsAppCard({ active, step }: any) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#e5ddd5', backgroundImage: 'radial-gradient(rgba(11,31,26,0.045) 1px, transparent 1px)', backgroundSize: '14px 14px' }}>
      {/* Header with subtle depth */}
      <div style={{ background: 'linear-gradient(180deg,#0a6b60 0%,#075E54 100%)', padding: '12px 12px 10px', display: 'flex', alignItems: 'center', gap: 9, boxShadow: '0 1px 0 rgba(0,0,0,0.15)' }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <div style={{ position: 'relative' }}>
          <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'linear-gradient(135deg,#25d366 0%,#128C7E 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 11, fontWeight: 700, boxShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>PS</div>
          <div style={{ position: 'absolute', bottom: -1, right: -1, width: 9, height: 9, borderRadius: '50%', background: '#25d366', border: '1.5px solid #075E54' }} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <span style={{ color: 'white', fontSize: 12, fontWeight: 600, lineHeight: 1, letterSpacing: 0.1 }}>{active.contact}</span>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="#25d366"><path d="M23 12l-2.5-2.9.4-3.8-3.7-.8-2-3.3L11.5 2.4 8 .2 6 3.5l-3.7.8.4 3.8L.2 11l2.5 2.9-.4 3.8 3.7.8 2 3.3 3.5-1.4 3.5 1.4 2-3.3 3.7-.8-.4-3.8L23 12zm-12.7 4.7L6 12.4l1.4-1.4 2.9 2.9 6.3-6.3L18 9l-7.7 7.7z" /></svg>
          </div>
          <div style={{ color: '#a3d5b4', fontSize: 8.5, lineHeight: 1, marginTop: 3, letterSpacing: 0.15 }}>{active.status}</div>
        </div>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="white" opacity="0.9"><path d="M15 8v8l6 4V4l-6 4zM4 5h9v14H4z" /></svg>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="white" opacity="0.9"><path d="M20 15.5c-1.2 0-2.4-.2-3.5-.6a1 1 0 00-1 .3l-2 2c-2.8-1.4-5-3.5-6.5-6.5l2-2c.3-.3.3-.7.2-1-.4-1.1-.6-2.3-.6-3.5A1 1 0 007.6 3H4a1 1 0 00-1 1c0 9.4 7.6 17 17 17a1 1 0 001-1v-3.5a1 1 0 00-1-1z" /></svg>
      </div>

      {/* TODAY chip */}
      <div style={{ textAlign: 'center', padding: '6px 0' }}>
        <span style={{ background: '#E1F2FB', color: '#54656F', fontSize: 8, fontWeight: 500, padding: '2px 9px', borderRadius: 6, letterSpacing: 0.4 }}>TODAY</span>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, padding: '4px 8px', display: 'flex', flexDirection: 'column', gap: 5, justifyContent: 'flex-end', overflow: 'hidden' }}>
        {step >= 0 && (
          <div className="hcc-msg-in" style={{ alignSelf: 'flex-start', maxWidth: '82%', position: 'relative' }}>
            <div style={{ background: 'white', borderRadius: '8px 8px 8px 2px', padding: '6px 8px 4px', boxShadow: '0 1px 1px rgba(11,20,26,0.15)' }}>
              <div style={{ color: '#111b21', fontSize: 11, lineHeight: 1.35 }}>{active.userMsg}</div>
              <div style={{ color: '#667781', fontSize: 8, textAlign: 'right', marginTop: 2 }}>10:34</div>
            </div>
          </div>
        )}
        {step === 1 && (
          <div className="hcc-msg-in" style={{ alignSelf: 'flex-end', background: '#d9fdd3', borderRadius: '8px 8px 2px 8px', padding: '8px 11px', display: 'flex', gap: 3, alignItems: 'center', boxShadow: '0 1px 1px rgba(11,20,26,0.13)' }}>
            <span className="hcc-typing" style={{ width: 4, height: 4, borderRadius: '50%', background: '#7a8f86', animationDelay: '0ms' }} />
            <span className="hcc-typing" style={{ width: 4, height: 4, borderRadius: '50%', background: '#7a8f86', animationDelay: '180ms' }} />
            <span className="hcc-typing" style={{ width: 4, height: 4, borderRadius: '50%', background: '#7a8f86', animationDelay: '360ms' }} />
          </div>
        )}
        {step >= 2 && step !== 1 && (
          <div className="hcc-msg-in" style={{ alignSelf: 'flex-end', maxWidth: '82%' }}>
            <div style={{ background: '#d9fdd3', borderRadius: '8px 8px 2px 8px', padding: '6px 8px 4px', boxShadow: '0 1px 1px rgba(11,20,26,0.15)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 3, marginBottom: 2 }}>
                <div style={{ width: 3, height: 3, borderRadius: '50%', background: '#06b349' }} />
                <span style={{ color: '#06b349', fontSize: 8, fontWeight: 600, letterSpacing: 0.15 }}>WeNext AI</span>
              </div>
              <div style={{ color: '#111b21', fontSize: 11, lineHeight: 1.35 }}>{active.aiMsg}</div>
              <div style={{ color: '#667781', fontSize: 8, textAlign: 'right', marginTop: 2 }}>10:36 <span style={{ color: '#53bdeb', fontSize: 9 }}>✓✓</span></div>
            </div>
          </div>
        )}
        {step >= 3 && (
          <div className="hcc-msg-in" style={{ alignSelf: 'flex-start', maxWidth: '55%' }}>
            <div style={{ background: 'white', borderRadius: '8px 8px 8px 2px', padding: '6px 8px 4px', boxShadow: '0 1px 1px rgba(11,20,26,0.15)' }}>
              <div style={{ color: '#111b21', fontSize: 11, lineHeight: 1.35 }}>{active.followUp}</div>
              <div style={{ color: '#667781', fontSize: 8, textAlign: 'right', marginTop: 2 }}>10:37</div>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="hcc-msg-in" style={{ alignSelf: 'flex-end', background: '#d9fdd3', borderRadius: '8px 8px 2px 8px', padding: '8px 11px', display: 'flex', gap: 3, alignItems: 'center', boxShadow: '0 1px 1px rgba(11,20,26,0.13)' }}>
            <span className="hcc-typing" style={{ width: 4, height: 4, borderRadius: '50%', background: '#7a8f86', animationDelay: '0ms' }} />
            <span className="hcc-typing" style={{ width: 4, height: 4, borderRadius: '50%', background: '#7a8f86', animationDelay: '180ms' }} />
            <span className="hcc-typing" style={{ width: 4, height: 4, borderRadius: '50%', background: '#7a8f86', animationDelay: '360ms' }} />
          </div>
        )}
        {step >= 5 && (
          <div className="hcc-msg-in" style={{ alignSelf: 'flex-end', width: '82%' }}>
            <div style={{ background: 'white', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 14px rgba(0,0,0,0.10), 0 0 0 1px rgba(6,179,73,0.15)' }}>
              {/* Top strip */}
              <div style={{ padding: '7px 10px', background: 'linear-gradient(135deg,#06b349 0%,#059940 100%)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="white"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 15l-4-4 1.4-1.4L11 13.2l5.6-5.6L18 9l-7 7z" /></svg>
                  <span style={{ color: 'white', fontSize: 9, fontWeight: 600, letterSpacing: 0.15 }}>UPI Payment</span>
                </div>
                <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: 7, fontWeight: 500, textTransform: 'uppercase', letterSpacing: 0.5 }}>Verified</span>
              </div>
              {/* Body */}
              <div style={{ padding: '9px 10px 8px' }}>
                <div style={{ color: '#667781', fontSize: 8, fontWeight: 500, letterSpacing: 0.3, textTransform: 'uppercase', marginBottom: 2 }}>Amount payable</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
                  <span style={{ color: '#0c221f', fontSize: 18, fontWeight: 800, lineHeight: 1, letterSpacing: -0.5 }}>{active.payment.amount}</span>
                </div>
                <div style={{ marginTop: 6, borderTop: '1px dashed #e0e0e0', paddingTop: 6, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 22, height: 22, borderRadius: 5, background: '#f0f9f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#06b349"><path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 15H4V8h16v11z" /></svg>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ color: '#0c221f', fontSize: 9.5, fontWeight: 600, lineHeight: 1.1 }}>{active.payment.detail}</div>
                    <div style={{ color: '#8696a0', fontSize: 8, marginTop: 1.5 }}>Order · WN-2490</div>
                  </div>
                </div>
                <div style={{ marginTop: 8, background: 'linear-gradient(135deg,#06b349,#059940)', borderRadius: 8, padding: '7px 0', textAlign: 'center', boxShadow: '0 2px 8px rgba(6,179,73,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
                  <span style={{ color: 'white', fontSize: 10, fontWeight: 700, letterSpacing: 0.2 }}>Pay with UPI</span>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Composer */}
      <div style={{ background: '#f0f2f5', padding: '6px', display: 'flex', alignItems: 'center', gap: 5, borderTop: '1px solid rgba(0,0,0,0.04)' }}>
        <div style={{ flex: 1, background: 'white', borderRadius: 999, height: 26, display: 'flex', alignItems: 'center', padding: '0 10px', gap: 5, boxShadow: '0 1px 1px rgba(0,0,0,0.03)' }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#54656F" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><circle cx="8.6" cy="10" r="1.1" fill="#54656F" /><circle cx="15.4" cy="10" r="1.1" fill="#54656F" /><path d="M8.5 14c1 1.3 2.2 1.9 3.5 1.9s2.5-.6 3.5-1.9" strokeLinecap="round" /></svg>
          <span style={{ color: '#54656F', fontSize: 10 }}>Message</span>
        </div>
        <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'linear-gradient(135deg,#00A884,#008068)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 1px 3px rgba(0,168,132,0.35)' }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="white"><path d="M12 1a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4zm6 11a6 6 0 0 1-12 0H4a8 8 0 0 0 7 7.93V23h2v-3.07A8 8 0 0 0 20 12h-2z" /></svg>
        </div>
      </div>
    </div>
  );
}

/* ─────────────── Instagram theme — post + comment automation ─────────────── */
function InstagramCard({ active, step }: any) {
  const IG_GRAD = 'linear-gradient(135deg, #F58529 0%, #DD2A7B 45%, #8134AF 75%, #515BD4 100%)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'white' }}>
      {/* Post header */}
      <div style={{ padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 28, height: 28, borderRadius: '50%', background: IG_GRAD, padding: 1.5, boxShadow: '0 2px 4px rgba(221,42,123,0.25)' }}>
          <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 1 }}>
            <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#0c221f', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'white', fontSize: 9, fontWeight: 800, letterSpacing: -0.3 }}>W</span>
            </div>
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <span style={{ color: '#0c221f', fontSize: 11.5, fontWeight: 600, lineHeight: 1 }}>{active.contact}</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="#0095F6"><path d="M23 12l-2.5-2.9.4-3.8-3.7-.8-2-3.3L11.5 2.4 8 .2 6 3.5l-3.7.8.4 3.8L.2 11l2.5 2.9-.4 3.8 3.7.8 2 3.3 3.5-1.4 3.5 1.4 2-3.3 3.7-.8-.4-3.8L23 12zm-12.7 4.7L6 12.4l1.4-1.4 2.9 2.9 6.3-6.3L18 9l-7.7 7.7z" /></svg>
          </div>
          <div style={{ color: '#8e8e8e', fontSize: 9, marginTop: 3 }}>{active.status}</div>
        </div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#0c221f"><circle cx="5" cy="12" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="19" cy="12" r="1.5" /></svg>
      </div>

      {/* Post image — smaller to give comments room */}
      <div style={{ width: '100%', height: 135, background: '#fafafa', overflow: 'hidden', position: 'relative' }}>
        <img src={imgInstagramPost} alt="post" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* Action row — proper Instagram spacing (heart fills at step >= 0) */}
      <div style={{ padding: '9px 12px 5px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {step >= 0 ? (
            <svg key="heart-filled" className="hcc-heart-pop" width="18" height="18" viewBox="0 0 24 24" fill="#ed4956"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="#0c221f" strokeWidth="1.7" strokeLinejoin="round" /></svg>
          )}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" stroke="#0c221f" strokeWidth="1.7" strokeLinejoin="round" /></svg>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13" stroke="#0c221f" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 2l-7 20-4-9-9-4 20-7z" stroke="#0c221f" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" stroke="#0c221f" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </div>

      {/* Likes row — count ticks up after heart tap */}
      <div style={{ padding: '0 12px 3px' }}>
        <div style={{ color: '#0c221f', fontSize: 10.5, fontWeight: 600, lineHeight: 1 }}>
          <span key={step >= 1 ? '1247' : '1246'} className="hcc-count-pop">{step >= 1 ? '1,247' : '1,246'}</span> likes
        </div>
      </div>
      <style>{`
        @keyframes hccHeartPop { 0% { transform: scale(0.6); opacity: 0.5; } 45% { transform: scale(1.35); opacity: 1; } 100% { transform: scale(1); opacity: 1; } }
        .hcc-heart-pop { transform-origin: center; animation: hccHeartPop 0.55s cubic-bezier(0.34,1.56,0.64,1); }
        @keyframes hccCountPop { 0% { transform: translateY(-4px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
        .hcc-count-pop { display: inline-block; animation: hccCountPop 0.35s cubic-bezier(0.32,0.72,0.35,1); }
      `}</style>

      {/* Comments section title */}
      <div style={{ padding: '4px 12px 6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ color: '#8e8e8e', fontSize: 9, fontWeight: 500 }}>View all 892 comments</span>
      </div>

      {/* Comments — automated flow with breathing room */}
      <div style={{ flex: 1, padding: '4px 12px 8px', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'flex-end', overflow: 'hidden' }}>
        {step >= 2 && (
          <div className="hcc-msg-in" style={{ display: 'flex', gap: 8 }}>
            <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'linear-gradient(135deg,#F5A16D,#E0653C)', color: 'white', fontSize: 10, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>A</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 10.5, lineHeight: 1.4, color: '#0c221f' }}>
                <span style={{ fontWeight: 600 }}>{active.userHandle}</span>{' '}
                <span>{active.userComment}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 3 }}>
                <span style={{ color: '#8e8e8e', fontSize: 9 }}>Just now</span>
                <span style={{ color: '#8e8e8e', fontSize: 9, fontWeight: 600 }}>Reply</span>
              </div>
            </div>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" style={{ marginTop: 4 }}><path d="M12 21s-7-4.5-9.5-9.2C.7 8.1 3.2 4 7 4c2 0 3.5 1.3 5 3 1.5-1.7 3-3 5-3 3.8 0 6.3 4.1 4.5 7.8C19 16.5 12 21 12 21z" stroke="#8e8e8e" strokeWidth="1.7" strokeLinejoin="round" /></svg>
          </div>
        )}
        {step === 3 && (
          <div className="hcc-msg-in" style={{ paddingLeft: 30, display: 'flex', alignItems: 'center', gap: 4 }}>
            <span className="hcc-typing" style={{ width: 4, height: 4, borderRadius: '50%', background: '#8e8e8e', animationDelay: '0ms' }} />
            <span className="hcc-typing" style={{ width: 4, height: 4, borderRadius: '50%', background: '#8e8e8e', animationDelay: '180ms' }} />
            <span className="hcc-typing" style={{ width: 4, height: 4, borderRadius: '50%', background: '#8e8e8e', animationDelay: '360ms' }} />
            <span style={{ color: '#8e8e8e', fontSize: 9, marginLeft: 4, fontStyle: 'italic' }}>{active.contact} is typing…</span>
          </div>
        )}
        {step >= 4 && (
          <div className="hcc-msg-in" style={{ display: 'flex', gap: 8, paddingLeft: 24 }}>
            <div style={{ width: 22, height: 22, borderRadius: '50%', background: IG_GRAD, padding: 1.5, flexShrink: 0, boxShadow: '0 1px 3px rgba(221,42,123,0.25)' }}>
              <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 1 }}>
                <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#0c221f', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'white', fontSize: 7, fontWeight: 800 }}>W</span>
                </div>
              </div>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 10.5, lineHeight: 1.4, color: '#0c221f' }}>
                <span style={{ fontWeight: 600 }}>{active.contact}</span>{' '}
                <svg width="8" height="8" viewBox="0 0 24 24" fill="#0095F6" style={{ display: 'inline-block', verticalAlign: -1, marginRight: 2 }}><path d="M23 12l-2.5-2.9.4-3.8-3.7-.8-2-3.3L11.5 2.4 8 .2 6 3.5l-3.7.8.4 3.8L.2 11l2.5 2.9-.4 3.8 3.7.8 2 3.3 3.5-1.4 3.5 1.4 2-3.3 3.7-.8-.4-3.8L23 12zm-12.7 4.7L6 12.4l1.4-1.4 2.9 2.9 6.3-6.3L18 9l-7.7 7.7z" /></svg>
                <span>{active.aiComment}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
                <span style={{ color: '#8e8e8e', fontSize: 9 }}>Just now</span>
                <span style={{ color: '#8e8e8e', fontSize: 9, fontWeight: 600 }}>Reply</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Composer — comment box */}
      <div style={{ padding: '8px 12px 10px', display: 'flex', alignItems: 'center', gap: 8, borderTop: '1px solid #efefef' }}>
        <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'linear-gradient(135deg,#F5A16D,#E0653C)', flexShrink: 0 }} />
        <div style={{ flex: 1, color: '#8e8e8e', fontSize: 10 }}>Add a comment…</div>
        <span style={{ color: '#0095F6', fontSize: 10, fontWeight: 600 }}>Post</span>
      </div>
    </div>
  );
}

/* ─────────────── Facebook Messenger theme ─────────────── */
function FacebookCard({ active, step }: any) {
  const FB_GRAD = 'linear-gradient(135deg, #0084ff 0%, #0064d8 100%)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'white' }}>
      {/* Header */}
      <div style={{ padding: '11px 12px 9px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid #f0f2f5' }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1877F2" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <div style={{ position: 'relative' }}>
          <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'linear-gradient(135deg,#1877F2,#0d65d9)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 11, fontWeight: 700, boxShadow: '0 1px 3px rgba(24,119,242,0.35)' }}>KI</div>
          <div style={{ position: 'absolute', bottom: -1, right: -1, width: 9, height: 9, borderRadius: '50%', background: '#31a24c', border: '1.5px solid white' }} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ color: '#0c221f', fontSize: 12, fontWeight: 600, lineHeight: 1, letterSpacing: 0.1 }}>{active.contact}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 3, marginTop: 3 }}>
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#31a24c' }} />
            <span style={{ color: '#65676b', fontSize: 9, lineHeight: 1 }}>{active.status}</span>
          </div>
        </div>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="#1877F2"><path d="M22 4.27v15.46c0 .65-.74 1.02-1.26.64L17 17.5V18a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v.5l3.74-2.87c.52-.38 1.26-.01 1.26.64z" /></svg>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="#1877F2"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.05 15.05 0 0 1-6.59-6.58l2.2-2.21c.27-.27.35-.67.24-1.02A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" /></svg>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, padding: '10px 10px 8px', display: 'flex', flexDirection: 'column', gap: 5, justifyContent: 'flex-end', overflow: 'hidden' }}>
        {step >= 0 && (
          <div className="hcc-msg-in" style={{ alignSelf: 'flex-start', maxWidth: '80%' }}>
            <div style={{ background: '#f0f2f5', borderRadius: '18px 18px 18px 4px', padding: '7px 11px' }}>
              <div style={{ color: '#0c221f', fontSize: 11, lineHeight: 1.35 }}>{active.userMsg}</div>
            </div>
          </div>
        )}
        {step === 1 && (
          <div className="hcc-msg-in" style={{ alignSelf: 'flex-end', background: FB_GRAD, borderRadius: '18px 18px 4px 18px', padding: '8px 12px', display: 'flex', gap: 3, alignItems: 'center', boxShadow: '0 2px 6px rgba(24,119,242,0.25)' }}>
            <span className="hcc-typing" style={{ width: 4, height: 4, borderRadius: '50%', background: 'white', animationDelay: '0ms' }} />
            <span className="hcc-typing" style={{ width: 4, height: 4, borderRadius: '50%', background: 'white', animationDelay: '180ms' }} />
            <span className="hcc-typing" style={{ width: 4, height: 4, borderRadius: '50%', background: 'white', animationDelay: '360ms' }} />
          </div>
        )}
        {step >= 2 && step !== 1 && (
          <div className="hcc-msg-in" style={{ alignSelf: 'flex-end', maxWidth: '80%' }}>
            <div style={{ background: FB_GRAD, borderRadius: '18px 18px 4px 18px', padding: '7px 11px', boxShadow: '0 2px 6px rgba(24,119,242,0.25)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 3, marginBottom: 2 }}>
                <div style={{ width: 3, height: 3, borderRadius: '50%', background: 'white', opacity: 0.9 }} />
                <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 8, fontWeight: 600, letterSpacing: 0.15 }}>WeNext AI</span>
              </div>
              <div style={{ color: 'white', fontSize: 11, lineHeight: 1.35 }}>{active.aiMsg}</div>
            </div>
          </div>
        )}
        {step >= 3 && (
          <div className="hcc-msg-in" style={{ alignSelf: 'flex-start', maxWidth: '55%' }}>
            <div style={{ background: '#f0f2f5', borderRadius: '18px 18px 18px 4px', padding: '7px 11px' }}>
              <div style={{ color: '#0c221f', fontSize: 11, lineHeight: 1.35 }}>{active.followUp}</div>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="hcc-msg-in" style={{ alignSelf: 'flex-end', background: FB_GRAD, borderRadius: '18px 18px 4px 18px', padding: '8px 12px', display: 'flex', gap: 3, alignItems: 'center', boxShadow: '0 2px 6px rgba(24,119,242,0.25)' }}>
            <span className="hcc-typing" style={{ width: 4, height: 4, borderRadius: '50%', background: 'white', animationDelay: '0ms' }} />
            <span className="hcc-typing" style={{ width: 4, height: 4, borderRadius: '50%', background: 'white', animationDelay: '180ms' }} />
            <span className="hcc-typing" style={{ width: 4, height: 4, borderRadius: '50%', background: 'white', animationDelay: '360ms' }} />
          </div>
        )}
        {step >= 5 && (
          <div className="hcc-msg-in" style={{ alignSelf: 'flex-end', width: '82%' }}>
            <div style={{ background: 'white', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.10), 0 0 0 1px rgba(24,119,242,0.15)' }}>
              <div style={{ background: FB_GRAD, padding: '6px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="white"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" /></svg>
                  <span style={{ color: 'white', fontSize: 9, fontWeight: 600, letterSpacing: 0.15 }}>Secure Checkout</span>
                </div>
                <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: 7, fontWeight: 500, textTransform: 'uppercase', letterSpacing: 0.5 }}>256-bit</span>
              </div>
              <div style={{ padding: '9px 10px 8px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                  <span style={{ color: '#65676b', fontSize: 9 }}>Pay</span>
                  <span style={{ color: '#0c221f', fontSize: 16, fontWeight: 800, lineHeight: 1, letterSpacing: -0.3 }}>{active.payment.amount}</span>
                </div>
                <div style={{ color: '#65676b', fontSize: 8.5, marginTop: 3 }}>{active.payment.detail}</div>
                <div style={{ marginTop: 6, background: FB_GRAD, borderRadius: 6, padding: '5px 0', textAlign: 'center', fontSize: 9, color: 'white', fontWeight: 700, letterSpacing: 0.2, boxShadow: '0 2px 6px rgba(24,119,242,0.30)' }}>Open payment →</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Composer */}
      <div style={{ padding: '6px 10px', display: 'flex', alignItems: 'center', gap: 6, borderTop: '1px solid #e4e6eb' }}>
        <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#e7f3ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="11" height="11" viewBox="0 0 24 24" stroke="#1877F2" strokeWidth="3" fill="none"><path d="M12 5v14m-7-7h14" /></svg>
        </div>
        <div style={{ flex: 1, background: '#f0f2f5', borderRadius: 999, height: 22, display: 'flex', alignItems: 'center', padding: '0 10px', color: '#65676b', fontSize: 10 }}>Aa</div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z" /></svg>
      </div>
    </div>
  );
}
