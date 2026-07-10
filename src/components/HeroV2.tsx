import Typography from '@mui/material/Typography';
import { useState, useEffect, useRef } from 'react';

type Channel = {
  key: string;
  name: string;
  brand: string;
  brandSoft: string;
  brandGradient?: string;
  count: number;
  icon: JSX.Element;
  contact: {
    name: string;
    handle: string;
    initials: string;
    avatarBg: string;
  };
  conversations: {
    initials: string;
    name: string;
    avatarBg: string;
    preview: string;
    time: string;
    unread?: boolean;
    tag?: string;
  }[];
  chat: {
    userMsg: string;
    aiMsg: string;
    product: string;
    price: string;
  };
};

const CHANNELS: Channel[] = [
  {
    key: 'whatsapp',
    name: 'WhatsApp',
    brand: '#25D366',
    brandSoft: '#e6f9ee',
    count: 12,
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
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
    key: 'instagram',
    name: 'Instagram',
    brand: '#DD2A7B',
    brandSoft: '#fdeaf2',
    brandGradient: 'linear-gradient(135deg,#F58529 0%,#DD2A7B 45%,#8134AF 75%,#515BD4 100%)',
    count: 8,
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
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
    key: 'facebook',
    name: 'Facebook',
    brand: '#1877F2',
    brandSoft: '#e7f0fe',
    count: 4,
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
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

export default function HeroV2() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [morphKey, setMorphKey] = useState(0);
  const [mounted, setMounted] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Trigger entrance animations on mount
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIdx((i) => (i + 1) % CHANNELS.length);
      setMorphKey((k) => k + 1);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const active = CHANNELS[activeIdx];

  // Subtle mouse-parallax tilt on the right card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -3, y: dx * 3 });
  };
  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <section className="relative w-full bg-[#f8f5ec] overflow-hidden" data-name="HeroV2">

      {/* ── BACKGROUNDS ── */}
      {/* Warm radial centre glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 90% 70% at 60% 40%, #faf7ee 0%, #f8f5ec 50%, #f2ede0 100%)',
        }}
      />
      {/* Fine dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.38]"
        style={{
          backgroundImage: 'radial-gradient(rgba(12,34,31,0.10) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
          maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 80%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 80%, rgba(0,0,0,0) 100%)',
        }}
      />

      {/* Ambient glow orbs — purely decorative */}
      <div className="hv2-orb hv2-orb-green pointer-events-none absolute rounded-full"
        style={{ width: 520, height: 520, top: -120, right: '5%', background: 'radial-gradient(circle, rgba(6,179,73,0.13) 0%, transparent 70%)' }} />
      <div className="hv2-orb hv2-orb-amber pointer-events-none absolute rounded-full"
        style={{ width: 380, height: 380, bottom: -80, left: '8%', background: 'radial-gradient(circle, rgba(246,196,83,0.14) 0%, transparent 70%)' }} />

      <div className="container mx-auto px-0 xl:px-0 relative">
        <div className="relative border-l border-r border-[rgba(12,34,31,0.10)]">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px] lg:gap-[44px] items-center px-[24px] lg:px-[48px] py-[64px] lg:py-[88px] relative">

            {/* ── LEFT COLUMN — TEXT ── */}
            <div className="lg:col-span-5 relative z-[2]">

              {/* Eyebrow pill */}
              <div
                className="inline-flex items-center gap-[8px] bg-white border border-[rgba(12,34,31,0.10)] rounded-full pl-[6px] pr-[14px] py-[5px] mb-[26px] hv2-enter hv2-enter-d0"
                style={{ opacity: mounted ? 1 : 0 }}
              >
                <span className="inline-flex items-center justify-center h-[20px] px-[8px] rounded-full bg-[#06b349] text-white text-[10px] font-semibold tracking-[0.4px]">
                  NEW
                </span>
                <Typography className="font-['Courier_Prime:Regular'] text-[#0c221f] text-[12px] tracking-[0.3px]">
                  WeNext 2.0 · Agentic AI for commerce
                </Typography>
              </div>

              {/* Headline */}
              <h1
                className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[44px] sm:text-[52px] lg:text-[62px] leading-[1] tracking-[-2px] mb-[22px] hv2-enter hv2-enter-d1"
                style={{ opacity: mounted ? 1 : 0 }}
              >
                Turn every chat<br />
                into{' '}
                <span className="relative inline-block">
                  <span className="relative z-[2]">revenue.</span>
                  <span
                    className="absolute left-[-4px] right-[-4px] bottom-[6px] h-[16px] lg:h-[18px] rounded-[3px] -z-[0] hv2-highlight"
                    style={{ background: 'linear-gradient(90deg, rgba(6,179,73,0.35) 0%, rgba(6,179,73,0.22) 100%)' }}
                  />
                </span>
              </h1>

              {/* Description */}
              <Typography
                className="text-[#60584c] text-[16px] leading-[1.55] max-w-[470px] mb-[26px] hv2-enter hv2-enter-d2"
                style={{ opacity: mounted ? 1 : 0 }}
              >
                WeNext is the AI‑powered commerce workspace for <span className="text-[#0c221f] font-medium">WhatsApp, Instagram &amp; Facebook</span> — replying, recommending, and closing orders while you sleep.
              </Typography>

              {/* Live ticker */}
              <div
                className="inline-flex items-center gap-[10px] bg-white border border-[rgba(12,34,31,0.10)] rounded-full pl-[8px] pr-[16px] py-[6px] mb-[28px] max-w-full overflow-hidden hv2-enter hv2-enter-d3"
                style={{ opacity: mounted ? 1 : 0 }}
              >
                <span className="relative flex size-[8px] shrink-0">
                  <span className="absolute inset-0 rounded-full bg-[#06b349] opacity-70 animate-ping" />
                  <span className="relative rounded-full bg-[#06b349] size-[8px]" />
                </span>
                <Typography className="text-[#60584c] text-[11px] tracking-[0.3px] uppercase font-medium shrink-0">
                  Live
                </Typography>
                <div className="w-[1px] h-[12px] bg-[rgba(12,34,31,0.15)] shrink-0" />
                <div key={`ticker-${activeIdx}`} className="relative overflow-hidden min-w-0">
                  <Typography className="text-[#0c221f] text-[12px] whitespace-nowrap hv2-ticker">
                    <span
                      className="inline-flex items-center justify-center size-[14px] rounded-full mr-[6px] align-[-2px] text-white"
                      style={{ background: active.brandGradient || active.brand }}
                    >
                      <span style={{ transform: 'scale(0.6)', display: 'inline-flex' }}>{active.icon}</span>
                    </span>
                    <span className="font-semibold">{active.contact.name}</span> paid <span className="font-semibold text-[#06b349]">₹{active.chat.price}</span> · just now
                  </Typography>
                </div>
              </div>

              {/* CTAs */}
              <div
                className="flex flex-wrap items-center gap-[10px] mb-[32px] hv2-enter hv2-enter-d4"
                style={{ opacity: mounted ? 1 : 0 }}
              >
                <a
                  href="#"
                  className="group inline-flex items-center gap-[10px] bg-[#0c221f] hover:bg-[#092511] text-white rounded-full pl-[22px] pr-[6px] py-[6px] font-medium transition-colors hv2-cta-primary"
                >
                  <span className="text-[14px]">Book a demo</span>
                  <span className="inline-flex items-center justify-center size-[30px] rounded-full bg-[#06b349] text-white group-hover:translate-x-[2px] transition-transform">
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-[8px] bg-transparent border border-[rgba(12,34,31,0.20)] hover:border-[#0c221f] text-[#0c221f] rounded-full px-[18px] py-[10px] font-medium text-[13px] transition-colors"
                >
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch product tour
                </a>
              </div>

              {/* Trust row */}
              <div
                className="flex flex-wrap items-center gap-x-[18px] gap-y-[10px] pt-[22px] border-t border-[rgba(12,34,31,0.08)] hv2-enter hv2-enter-d5"
                style={{ opacity: mounted ? 1 : 0 }}
              >
                <div className="flex items-center gap-[8px]">
                  <div className="flex -space-x-[7px]">
                    <div className="size-[22px] rounded-full bg-[#f6c453] border-[2px] border-[#f8f5ec] flex items-center justify-center text-[9px] font-semibold text-[#0c221f]">PS</div>
                    <div className="size-[22px] rounded-full bg-[#e08fb8] border-[2px] border-[#f8f5ec] flex items-center justify-center text-[9px] font-semibold text-[#0c221f]">AV</div>
                    <div className="size-[22px] rounded-full bg-[#9db8e6] border-[2px] border-[#f8f5ec] flex items-center justify-center text-[9px] font-semibold text-[#0c221f]">KI</div>
                    <div className="size-[22px] rounded-full bg-[#06b349] border-[2px] border-[#f8f5ec] flex items-center justify-center text-[9px] font-semibold text-white">+</div>
                  </div>
                  <Typography className="text-[#60584c] text-[12px]">
                    <span className="font-semibold text-[#0c221f]">2,400+</span> brands
                  </Typography>
                </div>
                <div className="w-[1px] h-[14px] bg-[rgba(12,34,31,0.15)]" />
                <div className="flex items-center gap-[4px]">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <svg key={i} viewBox="0 0 24 24" width="11" height="11" fill="#f6c453">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <Typography className="text-[#60584c] text-[12px] ml-[4px]">
                    <span className="font-semibold text-[#0c221f]">4.9</span> · G2 Leader
                  </Typography>
                </div>
                <div className="w-[1px] h-[14px] bg-[rgba(12,34,31,0.15)]" />
                <Typography className="text-[#60584c] text-[12px]">
                  <span className="font-semibold text-[#0c221f]">Meta</span> Business Partner
                </Typography>
              </div>
            </div>

            {/* ── RIGHT COLUMN — FLOATING INBOX CARD ── */}
            <div
              className="lg:col-span-7 relative hv2-enter hv2-enter-d2"
              style={{ opacity: mounted ? 1 : 0 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative mx-auto w-full max-w-[640px]" ref={cardRef}>

                {/* Dynamic channel-tinted ambient glow */}
                <div
                  className="absolute -inset-[40px] rounded-[40px] blur-[70px] pointer-events-none hv2-glow-transition"
                  style={{
                    background: `radial-gradient(ellipse at 50% 50%, ${
                      active.key === 'instagram'
                        ? 'rgba(221,42,123,0.22)'
                        : active.key === 'facebook'
                          ? 'rgba(24,119,242,0.22)'
                          : 'rgba(6,179,73,0.22)'
                    } 0%, transparent 70%)`,
                  }}
                />
                {/* Static green bottom ambient */}
                <div
                  className="absolute inset-[10px] rounded-[24px] blur-[50px] opacity-[0.35] pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 30% 100%, rgba(6,179,73,0.28) 0%, transparent 65%)' }}
                />

                {/* Outer bezel ring */}
                <div
                  className="absolute -inset-[6px] rounded-[22px] pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(12,34,31,0.03) 100%)',
                    boxShadow: 'inset 0 0 0 1px rgba(12,34,31,0.06)',
                  }}
                />

                {/* ── APP WINDOW — with tilt transform ── */}
                <div
                  className="relative bg-white rounded-[16px] border border-[rgba(12,34,31,0.10)] overflow-hidden hv2-card-float hv2-glow-transition"
                  style={{
                    boxShadow: '0 32px 80px -24px rgba(12,34,31,0.20), 0 6px 18px -6px rgba(12,34,31,0.08)',
                    transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                    transition: 'transform 0.35s cubic-bezier(0.23, 1, 0.32, 1)',
                  }}
                >
                  {/* Top scanline shimmer */}
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none hv2-scanline z-10"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(6,179,73,0.6), transparent)' }} />

                  {/* ── TOP HEADER BAR ── */}
                  <div className="flex items-center gap-[10px] px-[10px] py-[7px] border-b border-[rgba(12,34,31,0.08)] bg-white relative z-[1]">
                    <div className="flex items-center gap-[6px] shrink-0">
                      <div className="size-[22px] rounded-[6px] bg-[#092511] flex items-center justify-center">
                        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#06b349" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M8 8h8v8M16 8l-8 8" />
                        </svg>
                      </div>
                      <Typography className="text-[#0c221f] text-[12px] font-semibold tracking-[-0.2px]">wenext</Typography>
                      <div className="text-[#a89f8f] px-[2px]">
                        <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M11 17l-5-5 5-5M18 17l-5-5 5-5" />
                        </svg>
                      </div>
                    </div>

                    {/* Search chip */}
                    <div className="flex-1 flex items-center gap-[6px] bg-[#fff] border border-[#e5e7eb] rounded-full px-[10px] py-[5px] max-w-[220px]">
                      <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="#60584c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                      </svg>
                      <Typography className="text-[#60584c] text-[10px] flex-1">Ask AI or Search pages</Typography>
                      <span className="inline-flex items-center justify-center h-[16px] min-w-[16px] px-[4px] rounded-[4px] bg-white border border-[rgba(12,34,31,0.10)]">
                        <Typography className="text-[#60584c] text-[9px] font-medium">⌘ K</Typography>
                      </span>
                    </div>

                    {/* Right controls */}
                    <div className="flex items-center gap-[6px] shrink-0 ml-auto">
                      <div className="inline-flex items-center gap-[4px] bg-[#e5f6e7] rounded-full px-[8px] py-[3px]">
                        <span className="size-[6px] rounded-full bg-[#06b349] hv2-pulse-dot" />
                        <Typography className="text-[#0f6b34] text-[9px] font-semibold">Turbo</Typography>
                      </div>
                      <div className="inline-flex items-center gap-[3px] rounded-full px-[8px] py-[3px] bg-[#f8f5ec]">
                        <svg viewBox="0 0 24 24" width="9" height="9" fill="#c88a1e"><circle cx="12" cy="12" r="10" /></svg>
                        <Typography className="text-[#0c221f] text-[9px] font-semibold">497.05</Typography>
                      </div>
                      <div className="inline-flex items-center gap-[3px] bg-[#06b349] rounded-full pl-[8px] pr-[3px] py-[2px]">
                        <Typography className="text-white text-[9px] font-semibold tracking-[0.2px]">NEXA AI</Typography>
                        <span className="inline-flex items-center justify-center size-[14px] rounded-full bg-white/25">
                          <svg viewBox="0 0 24 24" width="8" height="8" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M13 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                      <div className="size-[22px] rounded-full bg-[#0c221f] flex items-center justify-center text-white text-[10px] font-semibold">M</div>
                    </div>
                  </div>

                  {/* ── BODY: conversation list + chat detail ── */}
                  <div className="grid grid-cols-[220px_1fr] min-h-[420px]">

                    {/* ── CONVERSATION LIST ── */}
                    <div className="border-r border-[rgba(12,34,31,0.06)] bg-[#fff] flex flex-col">
                      <div className="px-[12px] pt-[12px] pb-[8px]">
                        <Typography className="text-[#0c221f] text-[13px] font-semibold leading-[1.1] mb-[8px]">Conversations</Typography>

                        {/* mini search */}
                        <div className="flex items-center gap-[5px] bg-white border border-[rgba(12,34,31,0.08)] rounded-[8px] px-[8px] py-[4px] mb-[8px]">
                          <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="#a89f8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                          </svg>
                          <Typography className="text-[#a89f8f] text-[9px] flex-1">Search conversations…</Typography>
                        </div>

                        {/* channel filter circles — animated on channel switch */}
                        <div className="flex items-center gap-[8px] mb-[10px]">
                          {CHANNELS.map((c, i) => {
                            const isActive = i === activeIdx;
                            return (
                              <div
                                key={c.key}
                                className="relative inline-flex items-center justify-center size-[28px] rounded-full hv2-ch-pill"
                                style={{
                                  background: c.brandGradient || c.brand,
                                  color: 'white',
                                  boxShadow: isActive ? `0 0 0 2px white, 0 0 0 4px ${c.brand}` : 'none',
                                  transform: isActive ? 'scale(1.12)' : 'scale(1)',
                                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                }}
                              >
                                {isActive && (
                                  <span
                                    className="absolute inset-[-5px] rounded-full hv2-ring-pulse"
                                    style={{ borderColor: c.brand }}
                                  />
                                )}
                                {c.icon}
                              </div>
                            );
                          })}
                          <div className="inline-flex items-center justify-center size-[28px] rounded-full bg-[#b7a4d4] text-white">
                            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="4" y="8" width="16" height="12" rx="2" /><path d="M12 8V4M8 4h8M9 14h.01M15 14h.01" />
                            </svg>
                          </div>
                        </div>

                        {/* tab pills */}
                        <div className="flex items-center gap-[4px]">
                          <div className="inline-flex items-center rounded-full bg-[#0c221f] px-[10px] py-[3px]">
                            <Typography className="text-white text-[10px] font-semibold">All</Typography>
                          </div>
                          <div className="inline-flex items-center rounded-full px-[8px] py-[3px]">
                            <Typography className="text-[#60584c] text-[10px]">Mine</Typography>
                          </div>
                          <div className="inline-flex items-center rounded-full px-[8px] py-[3px]">
                            <Typography className="text-[#60584c] text-[10px]">Unassigned</Typography>
                          </div>
                        </div>
                      </div>

                      {/* conversation rows */}
                      <div key={`list-${morphKey}`} className="flex flex-col hv2-morph-in border-t border-[rgba(12,34,31,0.06)]">
                        {active.conversations.map((conv, idx) => {
                          const isActiveConv = idx === 0;
                          return (
                            <div
                              key={`${active.key}-${idx}`}
                              className="relative flex items-start gap-[8px] px-[12px] py-[10px] border-b border-[rgba(12,34,31,0.04)]"
                              style={{
                                background: isActiveConv ? '#fafaf9' : 'transparent',
                                borderLeft: isActiveConv ? `2.5px solid ${active.brand}` : '2.5px solid transparent',
                              }}
                            >
                              <div className="relative shrink-0">
                                <div
                                  className="size-[30px] rounded-full flex items-center justify-center text-[10px] font-semibold text-[#0c221f]"
                                  style={{ background: conv.avatarBg }}
                                >
                                  {conv.initials}
                                </div>
                                <div
                                  className="absolute -bottom-[1px] -right-[1px] size-[12px] rounded-full flex items-center justify-center text-white border-[1.5px] border-white"
                                  style={{ background: active.brandGradient || active.brand }}
                                >
                                  <span style={{ transform: 'scale(0.55)', display: 'inline-flex' }}>{active.icon}</span>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-[4px]">
                                  <Typography className="text-[#0c221f] text-[11px] font-semibold truncate leading-[1.15]">
                                    {conv.name}
                                  </Typography>
                                  {conv.tag ? (
                                    <span className="inline-flex items-center bg-[#efe6f7] rounded-[4px] px-[4px] py-[1px]">
                                      <Typography className="text-[#7a5aa8] text-[8px] font-medium">{conv.tag}</Typography>
                                    </span>
                                  ) : (
                                    <span className="inline-flex items-center gap-[2px] text-[#06b349]">
                                      <Typography className="text-[#06b349] text-[8px] font-medium">Tags</Typography>
                                    </span>
                                  )}
                                </div>
                                <Typography className="text-[#60584c] text-[10px] truncate leading-[1.3] mt-[2px]">
                                  {conv.preview}
                                </Typography>
                                <div className="flex items-center justify-between gap-[4px] mt-[3px]">
                                  <Typography className="text-[#a89f8f] text-[9px] truncate">
                                    {active.contact.handle}
                                  </Typography>
                                  <Typography className="text-[#a89f8f] text-[9px] shrink-0">{conv.time}</Typography>
                                </div>
                              </div>
                              {conv.unread && (
                                <span className="absolute top-[10px] right-[8px] size-[6px] rounded-full bg-[#06b349]" />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* ── CHAT DETAIL ── */}
                    <div className="flex flex-col bg-white">

                      {/* Contact header */}
                      <div key={`contact-${morphKey}`} className="flex items-center justify-between px-[14px] py-[10px] border-b border-[rgba(12,34,31,0.06)] hv2-morph-in">
                        <div className="flex items-center gap-[10px]">
                          <div
                            className="size-[32px] rounded-full flex items-center justify-center text-[11px] font-semibold text-[#0c221f]"
                            style={{ background: active.contact.avatarBg }}
                          >
                            {active.contact.initials}
                          </div>
                          <div>
                            <Typography className="text-[#0c221f] text-[12px] font-semibold leading-[1.1]">
                              {active.contact.name}
                            </Typography>
                            <div className="flex items-center gap-[5px] mt-[2px]">
                              <span
                                className="inline-flex items-center justify-center size-[10px] rounded-full text-white"
                                style={{ background: active.brandGradient || active.brand }}
                              >
                                <span style={{ transform: 'scale(0.5)', display: 'inline-flex' }}>{active.icon}</span>
                              </span>
                              <Typography className="text-[#60584c] text-[9px]">
                                {active.contact.handle}
                              </Typography>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-[4px]">
                          <button className="size-[24px] rounded-full flex items-center justify-center hover:bg-[#f3efe3]">
                            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#60584c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                            </svg>
                          </button>
                          <button className="size-[24px] rounded-full flex items-center justify-center hover:bg-[#f3efe3]">
                            <svg viewBox="0 0 24 24" width="12" height="12" fill="#60584c">
                              <circle cx="12" cy="5" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="12" cy="19" r="1.6" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {/* Messages */}
                      <div key={`msgs-${morphKey}`} className="flex-1 flex flex-col gap-[8px] px-[14px] py-[12px] hv2-morph-in">
                        {/* User bubble */}
                        <div className="self-start max-w-[85%] hv2-bubble-in">
                          <div className="bg-[#f3efe3] rounded-[12px] rounded-tl-[4px] px-[10px] py-[7px]">
                            <Typography className="text-[#0c221f] text-[11px] leading-[1.4]">
                              {active.chat.userMsg}
                            </Typography>
                          </div>
                          <Typography className="text-[#a89f8f] text-[9px] mt-[2px] ml-[2px]">10:24 AM</Typography>
                        </div>

                        {/* AI bubble */}
                        <div className="self-end max-w-[85%] hv2-bubble-in-right">
                          <div className="bg-[#0c221f] rounded-[12px] rounded-tr-[4px] px-[10px] py-[7px]">
                            <Typography className="text-white text-[11px] leading-[1.4]">
                              {active.chat.aiMsg}
                            </Typography>
                          </div>
                          <div className="flex items-center justify-end gap-[4px] mt-[2px] mr-[2px]">
                            <span className="inline-flex items-center gap-[3px] bg-[#e5f6e7] rounded-full px-[5px] py-[1px]">
                              <span className="size-[4px] rounded-full bg-[#06b349]" />
                              <Typography className="text-[#0f6b34] text-[8px] font-medium">AI</Typography>
                            </span>
                            <Typography className="text-[#a89f8f] text-[9px]">10:24 · ⚡ 0.4s</Typography>
                          </div>
                        </div>

                        {/* Product card */}
                        <div className="self-end max-w-[95%] hv2-bubble-in-right hv2-stagger-2">
                          <div className="bg-white border border-[rgba(12,34,31,0.10)] rounded-[12px] p-[8px] flex items-center gap-[8px]">
                            <div className="size-[34px] rounded-[6px] bg-[#f3efe3] flex items-center justify-center shrink-0">
                              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#60584c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z" />
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <Typography className="text-[#0c221f] text-[10px] font-semibold leading-[1.1] truncate">
                                {active.chat.product}
                              </Typography>
                              <Typography className="text-[#60584c] text-[9px] mt-[1px]">
                                Instant checkout · COD
                              </Typography>
                            </div>
                            <div className="text-right shrink-0">
                              <Typography className="text-[#0c221f] text-[12px] font-semibold leading-[1]">
                                ₹{active.chat.price}
                              </Typography>
                              <div className="inline-flex items-center gap-[2px] bg-[#06b349] rounded-full px-[5px] py-[1px] mt-[2px]">
                                <svg viewBox="0 0 24 24" width="7" height="7" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M20 6L9 17l-5-5" />
                                </svg>
                                <Typography className="text-white text-[8px] font-semibold tracking-[0.3px]">PAID</Typography>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Composer — AI typing */}
                      <div className="px-[14px] py-[8px] border-t border-[rgba(12,34,31,0.06)] bg-[#fff]">
                        <div className="flex items-center gap-[6px] bg-white border border-[rgba(12,34,31,0.08)] rounded-[8px] px-[8px] py-[6px]">
                          <span className="inline-flex items-center gap-[3px] bg-[#e5f6e7] rounded-[5px] px-[5px] py-[1px]">
                            <svg viewBox="0 0 24 24" width="8" height="8" fill="#06b349">
                              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <Typography className="text-[#0f6b34] text-[8px] font-semibold tracking-[0.3px]">AI</Typography>
                          </span>
                          <Typography className="text-[#60584c] text-[10px] flex-1 truncate">
                            Drafting a reply based on inventory<span className="hv2-caret">|</span>
                          </Typography>
                          <button className="size-[22px] rounded-[6px] bg-[#0c221f] flex items-center justify-center">
                            <svg viewBox="0 0 24 24" width="11" height="11" fill="white">
                              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating notification toast — payment received */}
                <div
                  className="absolute -top-[14px] -right-[10px] bg-white border border-[rgba(12,34,31,0.10)] rounded-[12px] px-[12px] py-[8px] flex items-center gap-[8px] hv2-toast shadow-[0_8px_28px_-8px_rgba(12,34,31,0.16)]"
                  style={{ minWidth: 180 }}
                >
                  <div className="size-[28px] rounded-full bg-[#e5f6e7] flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#06b349" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <Typography className="text-[#0c221f] text-[10px] font-semibold leading-[1.1]">Payment received!</Typography>
                    <Typography className="text-[#60584c] text-[9px]">₹{active.chat.price} · {active.contact.name}</Typography>
                  </div>
                </div>

                {/* Floating stat badge — bottom left */}
                <div
                  className="absolute -bottom-[12px] -left-[10px] bg-white border border-[rgba(12,34,31,0.10)] rounded-[12px] px-[12px] py-[8px] flex items-center gap-[8px] hv2-toast shadow-[0_8px_28px_-8px_rgba(12,34,31,0.14)]"
                  style={{ animationDelay: '1.2s', minWidth: 160 }}
                >
                  <div className="size-[28px] rounded-full bg-[#f0edff] flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#7c5cbf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <div>
                    <Typography className="text-[#0c221f] text-[10px] font-semibold leading-[1.1]">31% cart recovery</Typography>
                    <Typography className="text-[#06b349] text-[9px] font-medium">↑ automated today</Typography>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        /* ── ENTRANCE ANIMATIONS ── */
        @keyframes hv2EnterUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hv2-enter { animation: hv2EnterUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .hv2-enter-d0 { animation-delay: 0.05s; }
        .hv2-enter-d1 { animation-delay: 0.18s; }
        .hv2-enter-d2 { animation-delay: 0.30s; }
        .hv2-enter-d3 { animation-delay: 0.42s; }
        .hv2-enter-d4 { animation-delay: 0.54s; }
        .hv2-enter-d5 { animation-delay: 0.66s; }

        /* ── CHANNEL MORPH ── */
        @keyframes hv2MorphIn {
          from { opacity: 0; transform: translateY(7px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hv2-morph-in  { animation: hv2MorphIn 0.45s cubic-bezier(0.32, 0.72, 0.35, 1) both; }

        /* ── CHAT BUBBLE ENTRANCES ── */
        @keyframes hv2BubbleIn {
          from { opacity: 0; transform: translateX(-10px) scale(0.97); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes hv2BubbleInRight {
          from { opacity: 0; transform: translateX(10px) scale(0.97); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
        .hv2-bubble-in       { animation: hv2BubbleIn      0.45s cubic-bezier(0.32, 0.72, 0.35, 1) 0.10s both; }
        .hv2-bubble-in-right { animation: hv2BubbleInRight 0.45s cubic-bezier(0.32, 0.72, 0.35, 1) 0.25s both; }
        .hv2-stagger-2       { animation-delay: 0.40s !important; }

        /* ── HEADLINE HIGHLIGHT ── */
        @keyframes hv2Highlight {
          from { transform: scaleX(0); transform-origin: left center; }
          to   { transform: scaleX(1); transform-origin: left center; }
        }
        .hv2-highlight { animation: hv2Highlight 0.9s cubic-bezier(0.32, 0.72, 0.35, 1) 0.55s both; }

        /* ── TICKER SLIDE-IN ── */
        @keyframes hv2TickerIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hv2-ticker { animation: hv2TickerIn 0.5s cubic-bezier(0.32, 0.72, 0.35, 1) both; }

        /* ── SCANLINE ── */
        @keyframes hv2Scanline {
          0%   { transform: translateX(-100%); opacity: 0; }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        .hv2-scanline { animation: hv2Scanline 2.8s ease-in-out infinite; }

        /* ── CARET BLINK ── */
        @keyframes hv2Caret { 0%,50% { opacity: 1; } 50.1%,100% { opacity: 0; } }
        .hv2-caret { display: inline-block; margin-left: 1px; color: #06b349; animation: hv2Caret 1s steps(1,end) infinite; }

        /* ── FLOATING TOASTS ── */
        @keyframes hv2Toast {
          0%   { transform: translateY(0px); }
          50%  { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
        .hv2-toast { animation: hv2Toast 4s ease-in-out infinite; }

        /* ── CARD FLOAT ── */
        @keyframes hv2CardFloat {
          0%   { transform: perspective(1000px) translateY(0px); }
          50%  { transform: perspective(1000px) translateY(-6px); }
          100% { transform: perspective(1000px) translateY(0px); }
        }
        .hv2-card-float { animation: hv2CardFloat 6s ease-in-out infinite; }

        /* ── AMBIENT GLOW ORBS ── */
        @keyframes hv2OrbFloat {
          0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.6; }
          33%       { transform: scale(1.06) translate(12px, -10px); opacity: 0.8; }
          66%       { transform: scale(0.96) translate(-8px, 8px); opacity: 0.5; }
        }
        .hv2-orb-green { animation: hv2OrbFloat 9s ease-in-out infinite; }
        .hv2-orb-amber { animation: hv2OrbFloat 11s ease-in-out infinite reverse; }

        /* ── CHANNEL RING PULSE ── */
        @keyframes hv2RingPulse {
          0%   { box-shadow: 0 0 0 0 currentColor; opacity: 0.8; }
          100% { box-shadow: 0 0 0 6px currentColor; opacity: 0; }
        }
        .hv2-ring-pulse {
          border: 1.5px solid;
          animation: hv2RingPulse 1.6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        /* ── PULSE DOT ── */
        @keyframes hv2PulseDot {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
        .hv2-pulse-dot { animation: hv2PulseDot 1.4s ease-in-out infinite; }

        /* ── SMOOTH GLOW TRANSITION ── */
        .hv2-glow-transition { transition: background 0.8s ease, box-shadow 0.8s ease; }

        /* ── PRIMARY CTA GLOW ── */
        .hv2-cta-primary { box-shadow: 0 0 0 0 rgba(6,179,73,0); transition: box-shadow 0.3s ease, background 0.2s ease; }
        .hv2-cta-primary:hover { box-shadow: 0 6px 22px -6px rgba(6,179,73,0.55); }
      `}</style>
    </section>
  );
}
