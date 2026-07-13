import { useEffect, useRef, useState, type CSSProperties } from 'react';
import imgInstagramPost from '../assets/instagram-post.png';
import SmallLogo from '../assets/icons/sm-logo.png';
import CommentIcon from '../assets/icons/comment.png';
import UserIcon from '../assets/icons/user.png';

type Tab = 0 | 1 | 2;

// Reusable step timeline hook — advances step at scheduled ms marks; supports typing text between steps
function useStepTimeline(steps: Array<{ at: number; step?: number; type?: string; typing?: string }>, dep: unknown) {
  const [step, setStep] = useState(-1);
  const [typing, setTyping] = useState('');
  useEffect(() => {
    setStep(-1);
    setTyping('');
    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    steps.forEach((s) => {
      timeouts.push(setTimeout(() => {
        if (cancelled) return;
        if (s.typing !== undefined) setTyping(s.typing);
        if (s.step !== undefined) { setStep(s.step); if (s.type === 'send') setTyping(''); }
      }, s.at));
    });
    return () => { cancelled = true; timeouts.forEach(clearTimeout); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dep]);
  return { step, typing };
}

// Auto-scroll input while typing
function useInputScroll(text: string, ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    if (!text || !ref.current) return;
    const scroll = () => { if (ref.current) ref.current.scrollLeft = ref.current.scrollWidth; };
    scroll();
    const id = setInterval(scroll, 40);
    const stop = setTimeout(() => clearInterval(id), text.length * 60 + 200);
    return () => { clearInterval(id); clearTimeout(stop); };
  }, [text, ref]);
}

const PHONE_W = 268;
const PHONE_H = 480;

const frameStyle: CSSProperties = {
  width: PHONE_W,
  height: PHONE_H,
  borderRadius: 34,
  overflow: 'hidden',
  background: '#000',
  padding: 6,
  boxShadow:
    '0 40px 80px -20px rgba(9,37,17,0.35), 0 20px 50px -20px rgba(9,37,17,0.20), 0 0 0 1.5px rgba(9,37,17,0.15)',
  fontFamily: 'Geist, Inter, system-ui, sans-serif',
};

const screenStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  borderRadius: 28,
  overflow: 'hidden',
  position: 'relative',
  background: '#fff',
};

// iOS-style status bar (shared)
function StatusBar({ dark = false }: { dark?: boolean }) {
  const color = dark ? '#fff' : '#092511';
  return (
    <div
      style={{
        height: 26,
        padding: '4px 16px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color,
        fontSize: 11,
        fontWeight: 600,
        position: 'relative',
        flexShrink: 0,
        // zIndex: "999"
      }}
    >
      <span>9:41</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        {/* signal */}
        <svg width="12" height="9" viewBox="0 0 16 12" fill={color}>
          <rect x="0" y="8" width="3" height="4" rx="0.5" />
          <rect x="4" y="6" width="3" height="6" rx="0.5" />
          <rect x="8" y="3" width="3" height="9" rx="0.5" />
          <rect x="12" y="0" width="3" height="12" rx="0.5" />
        </svg>
        {/* wifi */}
        {/* <svg width="12" height="9" viewBox="0 0 16 12" fill={color}>
          <path d="M8 12l2.5-3a3.5 3.5 0 0 0-5 0L8 12z" />
          <path d="M8 8l4.5-5.5a7 7 0 0 0-9 0L8 8z" fillOpacity="0.7" />
        </svg> */}
        {/* battery */}
        <svg width="20" height="10" viewBox="0 0 26 12" fill="none">
          <rect x="0.5" y="0.5" width="22" height="11" rx="2.5" stroke={color} />
          <rect x="2.5" y="2.5" width="18" height="7" rx="1.2" fill={color} />
          <rect x="23" y="4" width="1.5" height="4" rx="0.5" fill={color} />
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 1) WHATSAPP MOCKUP
// ═══════════════════════════════════════════════════════════════════════════════
function WhatsAppMock() {
  const inputRef = useRef<HTMLDivElement>(null);
  const { step, typing } = useStepTimeline(
    [
      { at: 300, typing: 'Saw your ad — cotton shirt still in stock?' },
      { at: 3300, step: 0, type: 'send' },
      { at: 4000, step: 1 },
      { at: 5400, step: 2 },
      { at: 7800, step: 3 },
      { at: 8700, step: 4 },
    ],
    0,
  );
  useInputScroll(typing, inputRef);
  return (
    <div style={screenStyle}>
      {/* Header — dark green */}
      <div style={{ background: '#0d5f4f', paddingBottom: 10 }}>
        <StatusBar dark />
        <div style={{ padding: '4px 10px', display: 'flex', alignItems: 'center', gap: 8 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#052e26', color: 'white', fontSize: 12, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>W</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ color: 'white', fontSize: 13, fontWeight: 700, letterSpacing: -0.2 }}>Wenext.ai</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="#25d366"><path d="M12 0l2.9 2.7 3.9-.4.9 3.8 3.8.9-.4 3.9L26 12l-2.9 2.9.4 3.9-3.8.9-.9 3.8-3.9-.4L12 26l-2.9-2.7-3.9.4-.9-3.8-3.8-.9.4-3.9L-2 12l2.9-2.9-.4-3.9 3.8-.9.9-3.8 3.9.4L12 0z" /><path d="M10 15l-3-3 1.4-1.4 1.6 1.6 4-4L15.4 9.6 10 15z" fill="white" /></svg>
            </div>
            <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: 9.5, marginTop: 1 }}>Business Account</div>
          </div>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="white"><path d="M15 8v8H1V8h14zm2 2.5V16l6 3V5l-6 3v2.5z" /></svg>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.02l-2.2 2.19z" /></svg>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="white"><circle cx="12" cy="5" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="12" cy="19" r="2" /></svg>
        </div>
      </div>

      {/* Chat area — beige w/ pattern */}
      <div style={{ background: '#ece5dd', flex: 1, padding: '10px 8px 0', overflow: 'hidden', height: 'calc(100% - 74px - 50px)', display: 'flex', flexDirection: 'column', gap: 6 }}>
        {/* Today divider */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
          <span style={{ background: 'rgba(255,255,255,0.85)', color: '#4a5a52', fontSize: 9, fontWeight: 500, padding: '2px 10px', borderRadius: 8 }}>Today</span>
        </div>

        {/* User message */}
        {step >= 0 && (
          <div className="hv4c-in" style={{ alignSelf: 'flex-start', maxWidth: '78%', background: 'white', borderRadius: '8px 8px 8px 2px', padding: '6px 8px 4px', boxShadow: '0 1px 1px rgba(0,0,0,0.05)' }}>
            <div style={{ color: '#0c221f', fontSize: 10.5, lineHeight: 1.35 }}>Saw your ad — cotton shirt still in stock?</div>
            <div style={{ color: '#8b8b8b', fontSize: 8, textAlign: 'right', marginTop: 2 }}>10:24 AM</div>
          </div>
        )}

        {/* Business typing dots */}
        {step === 1 && (
          <div className="hv4c-in" style={{ alignSelf: 'flex-end', background: '#dcf8c6', borderRadius: 10, padding: '5px 8px', display: 'flex', gap: 3 }}>
            <span className="hv4c-typing" style={{ width: 5, height: 5, borderRadius: '50%', background: '#7a8f86', animationDelay: '0ms' }} />
            <span className="hv4c-typing" style={{ width: 5, height: 5, borderRadius: '50%', background: '#7a8f86', animationDelay: '180ms' }} />
            <span className="hv4c-typing" style={{ width: 5, height: 5, borderRadius: '50%', background: '#7a8f86', animationDelay: '360ms' }} />
          </div>
        )}

        {/* Business bubble — product */}
        {step >= 2 && (
          <div className="hv4c-in" style={{ alignSelf: 'flex-end', maxWidth: '82%', background: '#dcf8c6', borderRadius: '8px 8px 2px 8px', padding: 6, boxShadow: '0 1px 1px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', gap: 6, alignItems: 'stretch' }}>
              <div style={{ width: 66, height: 66, background: 'white', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden' }}>
                {/* stylized shirt */}
                <svg width="46" height="46" viewBox="0 0 64 64">
                  <defs>
                    <linearGradient id="wa-shirt" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#c8dbf0" />
                      <stop offset="100%" stopColor="#8bb3e0" />
                    </linearGradient>
                  </defs>
                  <path d="M14 20 L24 12 L28 14 L32 18 L36 14 L40 12 L50 20 L46 24 L44 22 L44 54 L20 54 L20 22 L18 24 Z" fill="url(#wa-shirt)" stroke="#4a6d92" strokeWidth="0.8" />
                  <line x1="32" y1="20" x2="32" y2="52" stroke="#5f83a8" strokeWidth="0.5" />
                </svg>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ color: '#0c221f', fontSize: 10.5, fontWeight: 700, lineHeight: 1.15 }}>Sky Cotton Shirt Size M</div>
                <div style={{ color: '#0c221f', fontSize: 12, fontWeight: 700, marginTop: 3 }}>₹1,890</div>
                <div style={{ color: '#3a4a42', fontSize: 9, lineHeight: 1.3, marginTop: 3 }}>Buy securely with safe checkout.</div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 3, marginTop: 3 }}>
              <span style={{ color: '#4a5a52', fontSize: 8 }}>10:24 AM</span>
              <svg width="11" height="7" viewBox="0 0 18 12" fill="none">
                <path d="M1 6l3 3 6-6M6 9l3 3 8-8" stroke="#4fc3f7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        )}

        {/* Second typing dots before secure checkout */}
        {step === 3 && (
          <div className="hv4c-in" style={{ alignSelf: 'flex-end', background: '#dcf8c6', borderRadius: 10, padding: '5px 8px', display: 'flex', gap: 3 }}>
            <span className="hv4c-typing" style={{ width: 5, height: 5, borderRadius: '50%', background: '#7a8f86', animationDelay: '0ms' }} />
            <span className="hv4c-typing" style={{ width: 5, height: 5, borderRadius: '50%', background: '#7a8f86', animationDelay: '180ms' }} />
            <span className="hv4c-typing" style={{ width: 5, height: 5, borderRadius: '50%', background: '#7a8f86', animationDelay: '360ms' }} />
          </div>
        )}

        {/* Business bubble — secure checkout */}
        {step >= 4 && (
          <div className="hv4c-in" style={{ alignSelf: 'flex-end', maxWidth: '82%', background: '#dcf8c6', borderRadius: '8px 8px 2px 8px', padding: 8, boxShadow: '0 1px 1px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#0d5f4f"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" /><path d="M10 13.5l-2-2 1.4-1.4L10 10.7l3.6-3.6L15 8.5l-5 5z" fill="white" /></svg>
              <span style={{ color: '#0c221f', fontSize: 11, fontWeight: 700 }}>Secure checkout sent</span>
            </div>
            <div style={{ color: '#3a4a42', fontSize: 9.5, lineHeight: 1.3, marginTop: 4 }}>Your checkout link has been sent securely.</div>
            <div style={{ marginTop: 6, padding: '6px 10px', border: '1px solid rgba(13,95,79,0.45)', borderRadius: 6, textAlign: 'center', background: 'rgba(255,255,255,0.4)' }}>
              <span style={{ color: '#0d5f4f', fontSize: 11, fontWeight: 700 }}>View order</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 3, marginTop: 4 }}>
              <span style={{ color: '#4a5a52', fontSize: 8 }}>10:25 AM</span>
              <svg width="11" height="7" viewBox="0 0 18 12" fill="none">
                <path d="M1 6l3 3 6-6M6 9l3 3 8-8" stroke="#4fc3f7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Input bar */}
      <div style={{ height: 44, background: '#f0f0f0', display: 'flex', alignItems: 'center', gap: 6, padding: '0 6px' }}>
        <div style={{ flex: 1, background: 'white', borderRadius: 999, height: 32, display: 'flex', alignItems: 'center', padding: '0 8px', gap: 6, minWidth: 0 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8b8b8b" strokeWidth="1.8" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" /></svg>
          <div ref={inputRef} style={{ flex: 1, minWidth: 0, overflow: 'hidden', display: 'flex', alignItems: 'center', height: '100%', lineHeight: 1 }}>
            {typing ? (
              <span style={{ color: '#0c221f', fontSize: 11, lineHeight: 1, whiteSpace: 'pre', display: 'inline-flex', alignItems: 'center' }} key={typing}>
                {typing.split('').map((c, i) => (
                  <span key={i} className="hv4c-letter" style={{ animationDelay: `${i * 55}ms`, lineHeight: 1 }}>{c}</span>
                ))}
                <span className="hv4c-caret" style={{ display: 'inline-block', width: 1.5, height: 11, background: '#0c221f', marginLeft: 1, alignSelf: 'center' }} />
              </span>
            ) : (
              <span style={{ color: '#8b8b8b', fontSize: 11, lineHeight: 1 }}>Message</span>
            )}
          </div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8b8b8b" strokeWidth="1.8" strokeLinecap="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" /></svg>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8b8b8b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" /><circle cx="12" cy="13" r="4" /></svg>
        </div>
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#0d5f4f', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3zM5 10v2a7 7 0 0014 0v-2M12 19v4M8 23h8" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 2) FACEBOOK MESSENGER MOCKUP
// ═══════════════════════════════════════════════════════════════════════════════
function FacebookMock() {
  const inputRef = useRef<HTMLDivElement>(null);
  const { step, typing } = useStepTimeline(
    [
      { at: 200, typing: 'Saw your ad — cotton shirt still in stock?' },
      { at: 2200, step: 0, type: 'send' },
      { at: 3200, step: 1 },
      { at: 4400, step: 2 },
      { at: 5800, typing: 'Great! How do I order?' },
      { at: 7000, step: 3, type: 'send' },
      { at: 8200, step: 4 },
    ],
    2,
  );
  useInputScroll(typing, inputRef);
  return (
    <div style={screenStyle}>
      <StatusBar />
      {/* Header */}
      <div style={{ padding: '6px 10px 8px', borderBottom: '1px solid #ebedf0', display: 'flex', alignItems: 'center', gap: 8 }}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1877F2" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
        <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'linear-gradient(135deg,#c7dcf0,#a2c5e8)', color: '#092511', fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>W</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <span style={{ color: '#092511', fontSize: 12, fontWeight: 700, letterSpacing: -0.2 }}>WeNext.ai</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="#1877F2"><circle cx="12" cy="12" r="12" /><path d="M10 15l-3-3 1.4-1.4 1.6 1.6 4-4L15.4 9.6 10 15z" fill="white" /></svg>
          </div>
          <div style={{ color: '#6b7a72', fontSize: 9, marginTop: 1 }}>Business Account</div>
        </div>
        {/* <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#1877F2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
        </div> */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#1877F2"><circle cx="12" cy="12" r="10" fill="none" stroke="#1877F2" strokeWidth="1.8" /><path d="M12 6v.01M12 10v6" stroke="#1877F2" strokeWidth="1.8" strokeLinecap="round" /></svg>
      </div>

      {/* Chat body */}
      <div style={{ flex: 1, overflow: 'hidden', height: 'calc(100% - 26px - 42px - 50px)', padding: '10px 10px 4px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {/* Profile card block */}


        {/* <div style={{ textAlign: 'center', color: '#6b7a72', fontSize: 8.5, fontWeight: 500 }}>10:24 AM</div> */}

        {/* Left message with avatar */}
        {step >= 0 && (
          <div className="hv4c-in" style={{ display: 'flex', gap: 5, alignItems: 'flex-end' }}>
            <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'linear-gradient(135deg,#c7dcf0,#a2c5e8)', color: '#092511', fontSize: 9, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>W</div>
            <div style={{ background: '#f0f2f5', color: '#0c221f', fontSize: 10.5, padding: '5px 9px', borderRadius: 14, maxWidth: '72%' }}>
              Saw your ad — cotton shirt still in stock?
            </div>
          </div>
        )}

        {/* Right blue bubble */}
        {step >= 1 && (
          <div className="hv4c-in" style={{ alignSelf: 'flex-end', maxWidth: '76%', background: '#1877F2', color: 'white', fontSize: 10.5, padding: '5px 10px', borderRadius: 14 }}>
            Yes! Available in Size M. Here are the details.
          </div>
        )}

        {/* Product card */}
        {step >= 2 && (
          <div className="hv4c-in" style={{ alignSelf: 'flex-end', maxWidth: '84%', background: 'white', border: '1px solid #ebedf0', borderRadius: 12, overflow: 'hidden' }}>
            <div style={{ display: 'flex', gap: 8, padding: 8 }}>
              <div style={{ width: 60, height: 66, background: '#f0f2f5', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="40" height="44" viewBox="0 0 64 64">
                  <defs>
                    <linearGradient id="fb-shirt" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#c8dbf0" />
                      <stop offset="100%" stopColor="#8bb3e0" />
                    </linearGradient>
                  </defs>
                  <path d="M14 20 L24 12 L28 14 L32 18 L36 14 L40 12 L50 20 L46 24 L44 22 L44 54 L20 54 L20 22 L18 24 Z" fill="url(#fb-shirt)" stroke="#4a6d92" strokeWidth="0.8" />
                  <line x1="32" y1="20" x2="32" y2="52" stroke="#5f83a8" strokeWidth="0.5" />
                </svg>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ color: '#0c221f', fontSize: 10.5, fontWeight: 700, lineHeight: 1.15 }}>Sky Cotton Shirt Size M</div>
                <div style={{ color: '#0c221f', fontSize: 12, fontWeight: 700, marginTop: 3 }}>₹1,890</div>
                <div style={{ color: '#6b7a72', fontSize: 8.5, marginTop: 3, lineHeight: 1.3 }}>High quality cotton</div>
                <div style={{ color: '#6b7a72', fontSize: 8.5, lineHeight: 1.3 }}>Comfort fit</div>
              </div>
            </div>
            <div style={{ borderTop: '1px solid #ebedf0', padding: '6px 0', textAlign: 'center' }}>
              <span style={{ color: '#1877F2', fontSize: 10, fontWeight: 700 }}>View product</span>
            </div>
          </div>
        )}

        {/* Left message */}
        {step >= 3 && (
          <div className="hv4c-in" style={{ display: 'flex', gap: 5, alignItems: 'flex-end' }}>
            <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'linear-gradient(135deg,#c7dcf0,#a2c5e8)', color: '#092511', fontSize: 9, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>W</div>
            <div style={{ background: '#f0f2f5', color: '#0c221f', fontSize: 10.5, padding: '5px 9px', borderRadius: 14 }}>Great! How do I order?</div>
          </div>
        )}

        {/* Right blue with inner pill */}
        {step >= 4 && (
          <div className="hv4c-in" style={{ alignSelf: 'flex-end', maxWidth: '82%', background: '#1877F2', borderRadius: 14, padding: 8 }}>
            <div style={{ color: 'white', fontSize: 10.5, lineHeight: 1.35 }}>You can place the order securely using the link below 👇</div>
            <div style={{ marginTop: 6, background: 'white', borderRadius: 10, padding: '6px 8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
              <svg width="10" height="12" viewBox="0 0 24 24" fill="#1877F2"><path d="M18 8h-1V6a5 5 0 00-10 0v2H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V10a2 2 0 00-2-2zM9 6a3 3 0 016 0v2H9V6z" /></svg>
              <span style={{ color: '#1877F2', fontSize: 10, fontWeight: 700 }}>Complete Secure Checkout</span>
            </div>
          </div>
        )}

        {step >= 4 && (
          <div className="hv4c-in" style={{ alignSelf: 'flex-end', color: '#6b7a72', fontSize: 8.5, marginTop: -2 }}>Seen 10:25 AM</div>
        )}
      </div>

      {/* Bottom nav */}
      <div style={{ height: 40, borderTop: '1px solid #ebedf0', display: 'flex', alignItems: 'center', gap: 6, padding: '0 8px' }}>
        {['plus'].map((k) => (
          <div key={k} style={{ width: 22, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {k === 'plus' && <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2"><circle cx="12" cy="12" r="10" /><path d="M12 8v8M8 12h8" stroke="white" strokeWidth="2.4" strokeLinecap="round" /></svg>}
            {/* {k === 'cam' && <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" /><circle cx="12" cy="13" r="4" fill="white" /></svg>}
            {k === 'img' && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1877F2" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" fill="#1877F2" /><path d="M21 15l-5-5L5 21" /></svg>}
            {k === 'mic' && <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3zM19 10v2a7 7 0 01-14 0v-2h2v2a5 5 0 0010 0v-2h2z" /></svg>} */}
          </div>
        ))}
        <div style={{ flex: 1, background: '#f0f2f5', borderRadius: 999, height: 28, display: 'flex', alignItems: 'center', padding: '0 10px', gap: 6, minWidth: 0 }}>
          <div ref={inputRef} style={{ flex: 1, minWidth: 0, overflow: 'hidden', display: 'flex', alignItems: 'center', height: '100%', lineHeight: 1 }}>
            {typing ? (
              <span style={{ color: '#0c221f', fontSize: 11, fontWeight: 500, lineHeight: 1, whiteSpace: 'pre', display: 'inline-flex', alignItems: 'center' }} key={typing}>
                {typing.split('').map((c, i) => (
                  <span key={i} className="hv4c-letter" style={{ animationDelay: `${i * 55}ms`, lineHeight: 1 }}>{c}</span>
                ))}
                <span className="hv4c-caret" style={{ display: 'inline-block', width: 1.5, height: 11, background: '#0c221f', marginLeft: 1, alignSelf: 'center' }} />
              </span>
            ) : (
              <span style={{ color: '#8b8b8b', fontSize: 11, fontWeight: 700, lineHeight: 1 }}>Aa</span>
            )}
          </div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8b8b8b" strokeWidth="2" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" /></svg>
        </div>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2"><path d="M2 21h4V9H2v12zM23 10a2 2 0 00-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59A2 2 0 007 9v10a2 2 0 002 2h9a2 2 0 001.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73V10z" /></svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// 3) INSTAGRAM MOCKUP
// ═══════════════════════════════════════════════════════════════════════════════
function InstagramMock() {
  // Mirror HeroV1's Instagram animation: post → shift up → comment tap → sheet slides up → chatStep 0→1→2→3
  const [igPostShifted, setIgPostShifted] = useState(false);
  const [igOverlayOpen, setIgOverlayOpen] = useState(false);
  const [chatStep, setChatStep] = useState(0);

  useEffect(() => {
    setIgPostShifted(false);
    setIgOverlayOpen(false);
    setChatStep(0);
    const t1 = setTimeout(() => setIgPostShifted(true), 1200);
    const t2 = setTimeout(() => setIgOverlayOpen(true), 1500);
    const t3 = setTimeout(() => setChatStep(1), 3200);
    const t4 = setTimeout(() => setChatStep(2), 5000);
    const t5 = setTimeout(() => setChatStep(3), 6500);
    return () => { [t1, t2, t3, t4, t5].forEach(clearTimeout); };
  }, []);

  return (
    <div style={{ ...screenStyle, background: '#fff' }}>
      <StatusBar />

      {/* Post — shifts up 25px at 1200ms */}
      <div
        style={{
          height: 'calc(100% - 26px)',
          display: 'flex',
          flexDirection: 'column',
          transform: igPostShifted ? 'translateY(-25px)' : 'translateY(0)',
          transition: 'transform 450ms cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
        }}
      >
        {/* Post header */}
        <div style={{ padding: '8px 10px', display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
          <img src={SmallLogo} alt="" width={26} height={26} />
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 3 }}>
            <span style={{ color: '#0c221f', fontSize: 11, fontWeight: 600, lineHeight: 1 }}>wenext.ai</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="#0095F6"><path d="M23 12l-2.5-2.9.4-3.8-3.7-.8-2-3.3L11.5 2.4 8 .2 6 3.5l-3.7.8.4 3.8L.2 11l2.5 2.9-.4 3.8 3.7.8 2 3.3 3.5-1.4 3.5 1.4 2-3.3 3.7-.8-.4-3.8L23 12zm-12.7 4.7L6 12.4l1.4-1.4 2.9 2.9 6.3-6.3L18 9l-7.7 7.7z" /></svg>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#0c221f"><circle cx="5" cy="12" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="19" cy="12" r="1.6" /></svg>
        </div>

        {/* Post image */}
        <div style={{ width: '100%', flexShrink: 0, background: '#fafafa', height: 195 }}>
          <img src={imgInstagramPost} alt="wenext.ai post" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        {/* Actions */}
        <div style={{ padding: '8px 10px 3px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="#0c221f" strokeWidth="1.7" strokeLinejoin="round" /></svg>
            {/* Comment icon — scale-tap animation at 1400ms */}
            <div className="ig-comment-tap" style={{ transformOrigin: 'center', lineHeight: 0 }}>
              <img src={CommentIcon} width={19} alt="" />
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M22 2L11 13" stroke="#0c221f" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22 2l-7 20-4-9-9-4 20-7z" stroke="#0c221f" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" stroke="#0c221f" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>

        {/* Meta */}
        <div style={{ padding: '0 10px 6px', flexShrink: 0 }}>
          <div style={{ color: '#0c221f', fontSize: 11, fontWeight: 600, lineHeight: 1 }}>1,247 likes</div>
          <div style={{ color: '#0c221f', fontSize: 11, marginTop: 4, lineHeight: 1.3 }}>
            <span style={{ fontWeight: 600 }}>wenext.ai</span> Turn every conversation into a customer ✨ <span style={{ color: '#00376b' }}>#whatsapp</span>
          </div>
          <div style={{ color: '#8e8e8e', fontSize: 10, marginTop: 4, lineHeight: 1 }}>View all 892 comments</div>
          <div style={{ color: '#8e8e8e', fontSize: 8.5, marginTop: 4, letterSpacing: 0.5, textTransform: 'uppercase', lineHeight: 1 }}>3 hours ago</div>
        </div>

        {/* Comments sheet — slides up at 1500ms, 66% height */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: "-25px",
            background: 'white',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            zIndex: 20,
            height: '68%',
            transform: igOverlayOpen ? 'translateY(0)' : 'translateY(100%)',
            transition: 'transform 500ms cubic-bezier(0.32, 0.72, 0.35, 1)',
            borderTopLeftRadius: 14,
            borderTopRightRadius: 14,
            boxShadow: '0 -10px 30px rgba(0,0,0,0.25)',
          }}
        >
          {/* Sheet header */}
          <div style={{ padding: '16px 12px 8px', display: 'flex', alignItems: 'center', borderBottom: '1px solid #efefef', position: 'relative', flexShrink: 0 }}>
            <div style={{ position: 'absolute', top: 6, left: '50%', transform: 'translateX(-50%)', width: 32, height: 3, borderRadius: 999, background: '#dbdbdb' }} />
            <div style={{ flex: 1, textAlign: 'center', color: '#0c221f', fontSize: 12, fontWeight: 600, lineHeight: 1 }}>Comments</div>
          </div>

          {/* Comments list */}
          <div style={{ flex: 1, padding: '10px 10px 4px', display: 'flex', flexDirection: 'column', gap: 10, overflow: 'hidden' }}>
            {/* Seed comment */}
            <div className="hv4c-in" style={{ display: 'flex', gap: 6 }}>
              <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'linear-gradient(135deg, #F5A16D, #E0653C)', color: 'white', fontSize: 10, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>A</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ color: '#0c221f', fontSize: 10, fontWeight: 600, lineHeight: 1 }}>arjun_k</span>
                  <span style={{ color: '#8e8e8e', fontSize: 8.5, lineHeight: 1 }}>· 3h</span>
                </div>
                <div style={{ color: '#0c221f', fontSize: 10.5, marginTop: 2, lineHeight: 1.3 }}>This looks super clean 🔥</div>
                <div style={{ color: '#8e8e8e', fontSize: 8.5, fontWeight: 600, marginTop: 3 }}>Reply</div>
              </div>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" style={{ marginTop: 5, flexShrink: 0 }}><path d="M12 21s-7-4.5-9.5-9.2C.7 8.1 3.2 4 7 4c2 0 3.5 1.3 5 3 1.5-1.7 3-3 5-3 3.8 0 6.3 4.1 4.5 7.8C19 16.5 12 21 12 21z" stroke="#8e8e8e" strokeWidth="1.7" strokeLinejoin="round" /></svg>
            </div>

            {/* User's just-posted comment (chatStep >= 2) */}
            {chatStep >= 2 && (
              <div className="hv4c-in" style={{ display: 'flex', gap: 6 }}>
                <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'linear-gradient(135deg, #F5A16D, #E0653C)', color: 'white', fontSize: 10, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>K</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span style={{ color: '#0c221f', fontSize: 10, fontWeight: 600, lineHeight: 1 }}>Karthik Reddy</span>
                    <span style={{ color: '#8e8e8e', fontSize: 8.5, lineHeight: 1 }}>· Just now</span>
                  </div>
                  <div style={{ color: '#0c221f', fontSize: 11, fontWeight: 600, letterSpacing: 0.5, marginTop: 2, lineHeight: 1.3 }}>WENEXT</div>
                  <div style={{ color: '#8e8e8e', fontSize: 8.5, fontWeight: 600, marginTop: 3 }}>Reply</div>
                </div>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" style={{ marginTop: 5, flexShrink: 0 }}><path d="M12 21s-7-4.5-9.5-9.2C.7 8.1 3.2 4 7 4c2 0 3.5 1.3 5 3 1.5-1.7 3-3 5-3 3.8 0 6.3 4.1 4.5 7.8C19 16.5 12 21 12 21z" stroke="#8e8e8e" strokeWidth="1.7" strokeLinejoin="round" /></svg>
              </div>
            )}

            {/* wenext.ai auto-reply (chatStep >= 3) */}
            {chatStep >= 3 && (
              <div className="hv4c-in" style={{ display: 'flex', gap: 6, paddingLeft: 30, alignItems: "flex-start" }}>
                <img src={SmallLogo} alt="" width={25} height={20} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap' }}>
                    <span style={{ color: '#0c221f', fontSize: 10, fontWeight: 600, lineHeight: 1 }}>wenext.ai</span>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="#0095F6"><path d="M23 12l-2.5-2.9.4-3.8-3.7-.8-2-3.3L11.5 2.4 8 .2 6 3.5l-3.7.8.4 3.8L.2 11l2.5 2.9-.4 3.8 3.7.8 2 3.3 3.5-1.4 3.5 1.4 2-3.3 3.7-.8-.4-3.8L23 12zm-12.7 4.7L6 12.4l1.4-1.4 2.9 2.9 6.3-6.3L18 9l-7.7 7.7z" /></svg>
                    <span style={{ color: '#8e8e8e', fontSize: 8.5, lineHeight: 1 }}>· Just now</span>
                  </div>
                  <div style={{ color: '#0c221f', fontSize: 10.5, marginTop: 2, lineHeight: 1.3 }}>Thank you for showing interest in Wenext, please check your DM ✨</div>
                  <div style={{ color: '#8e8e8e', fontSize: 8.5, fontWeight: 600, marginTop: 3 }}>Reply</div>
                </div>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" style={{ marginTop: 5, flexShrink: 0 }}><path d="M12 21s-7-4.5-9.5-9.2C.7 8.1 3.2 4 7 4c2 0 3.5 1.3 5 3 1.5-1.7 3-3 5-3 3.8 0 6.3 4.1 4.5 7.8C19 16.5 12 21 12 21z" stroke="#8e8e8e" strokeWidth="1.7" strokeLinejoin="round" /></svg>
              </div>
            )}
          </div>

          {/* Comment input */}
          <div style={{ padding: '7px 10px', display: 'flex', alignItems: 'center', gap: 6, borderTop: '1px solid #efefef', flexShrink: 0 }}>
            <img src={UserIcon} alt="" width={20} height={20} style={{ flexShrink: 0 }} />
            <div style={{
              flex: 1,
              border: '1px solid',
              borderColor: chatStep < 2 ? '#0c221f' : '#dbdbdb',
              borderRadius: 999,
              height: 26,
              display: 'flex',
              alignItems: 'center',
              padding: '0 10px',
              transition: 'border-color 200ms ease',
              lineHeight: 1,
            }}>
              {chatStep === 0 && (
                <>
                  <span style={{ color: '#c7c7c7', fontSize: 9.5, lineHeight: 1 }}>Add a comment for wenext.ai...</span>
                  <span className="ig-caret" style={{ marginLeft: 2, display: 'inline-block', width: 1.5, height: 11, background: '#0095F6' }} />
                </>
              )}
              {chatStep === 1 && (
                <>
                  <span style={{ color: '#0c221f', fontSize: 10.5, fontWeight: 600, letterSpacing: 0.5, lineHeight: 1 }}>
                    {'WENEXT'.split('').map((c, i) => (
                      <span key={i} className="ig-letter" style={{ animationDelay: `${100 + i * 150}ms` }}>{c}</span>
                    ))}
                  </span>
                  <span className="ig-caret" style={{ marginLeft: 1, display: 'inline-block', width: 1.5, height: 11, background: '#0095F6' }} />
                </>
              )}
              {chatStep >= 2 && (
                <span style={{ color: '#8e8e8e', fontSize: 9.5, lineHeight: 1 }}>Add a comment for wenext.ai...</span>
              )}
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ transition: 'stroke 0.2s ease', flexShrink: 0 }}>
              <path d="M22 2L11 13" stroke={chatStep === 1 ? '#0c221f' : '#eee'} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22 2l-7 20-4-9-9-4 20-7z" stroke={chatStep === 1 ? '#0c221f' : '#eee'} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes igCaretBlink { 0%,49% { opacity: 1; } 50%,100% { opacity: 0; } }
        .ig-caret { animation: igCaretBlink 1s steps(2,start) infinite; }
        @keyframes igLetterIn { to { opacity: 1; } }
        .ig-letter { display: inline-block; opacity: 0; animation: igLetterIn 0.01s linear forwards; }
        @keyframes igCommentTap {
          0% { transform: scale(1); }
          35% { transform: scale(0.82); }
          65% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }
        .ig-comment-tap { animation: igCommentTap 500ms cubic-bezier(0.34, 1.56, 0.64, 1) 1400ms both; }
      `}</style>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
export default function HeroV4Card({ tab = 0 }: { tab?: Tab }) {
  return (
    <div style={frameStyle}>
      <style>{`
        @keyframes hv4cIn { from { opacity: 0; transform: translateY(4px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .hv4c-in { animation: hv4cIn 0.32s cubic-bezier(0.32,0.72,0.35,1) both; }
        @keyframes hv4cTyping { 0%,60%,100% { transform: translateY(0); opacity: 0.45; } 30% { transform: translateY(-3px); opacity: 1; } }
        .hv4c-typing { animation: hv4cTyping 1.2s ease-in-out infinite; display: inline-block; }
        @keyframes hv4cCaret { 0%,49% { opacity: 1; } 50%,100% { opacity: 0; } }
        .hv4c-caret { animation: hv4cCaret 1s steps(2,start) infinite; }
        @keyframes hv4cLetter { to { max-width: 2em; } }
        .hv4c-letter { display: inline-block; max-width: 0; overflow: hidden; animation: hv4cLetter 90ms linear forwards; }
      `}</style>
      {tab === 0 && <WhatsAppMock />}
      {tab === 1 && <InstagramMock />}
      {tab === 2 && <FacebookMock />}
    </div>
  );
}
