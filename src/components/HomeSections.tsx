import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

const imgImage27 = '/figma/imgImage27.png';
const imgIcon1 = '/figma/imgIcon1.svg';

// ─── shared bits (Home framing) ───────────────────────────────────────────────
function Eyebrow({ label, light = false, center = false }: { label: string; light?: boolean; center?: boolean }) {
  return (
    <div className={`flex gap-[10px] items-center mb-[16px] ${center ? 'justify-center' : ''}`}>
      <div className="bg-[#06b349] relative shrink-0 size-[10px]" />
      <Typography className={`font-['Courier_Prime'] leading-[1.4] text-[18px] ${light ? 'text-[#06b349]' : 'text-[#0c221f]'}`}>{label}</Typography>
    </div>
  );
}

function PrimaryButton({ label, light = true }: { label: string; light?: boolean }) {
  return (
    <div className="bg-[#06b349] hover:bg-[#05a043] active:scale-[0.98] transition-all duration-150 rounded-[8px] cursor-pointer overflow-hidden relative inline-flex">
      <div className="flex gap-[12px] items-center pl-[20px] pr-[15px] py-[15px]">
        {light && <div className="absolute inset-0 pointer-events-none"><img alt="" className="size-full object-cover opacity-20 mix-blend-color-burn" src={imgImage27} /></div>}
        <Typography className="font-['Geist:Medium'] font-medium text-[17px] text-white whitespace-nowrap relative">{label}</Typography>
        <div className="size-[20px] relative shrink-0"><img alt="" className="absolute inset-0 size-full" src={imgIcon1} /></div>
      </div>
    </div>
  );
}

const Check = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
);

const gridCanvas: React.CSSProperties = {
  backgroundImage: 'linear-gradient(rgba(9,37,17,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(9,37,17,0.03) 1px, transparent 1px)',
  backgroundSize: '30px 30px',
};

// light section frame matching Home (left/right + bottom borders)
function Frame({ children }: { children: ReactNode }) {
  return (
    <div className="content-stretch flex flex-col items-center container mx-auto relative shrink-0 w-full">
      <div className="border-[#e0dac6] border-b border-l border-r border-solid relative shrink-0 w-full">{children}</div>
    </div>
  );
}

const BRANDS = ['StyleCo', 'FitGlow', 'PureBites', 'HomeDecor Hub', 'UrbanWear', 'NutriLife', 'Bloom & Co', 'TechBazaar', 'GreenLeaf', 'Lumina'];

// ══════════════════════════════════════════════════════════════════════════════
// TRUSTED BY — real brand marquee
// ══════════════════════════════════════════════════════════════════════════════
export function TrustedByStrip() {
  return (
    <Frame>
      <div className="px-4 xl:px-[75px] pt-[40px] pb-[8px] text-center">
        <Typography className="font-['Geist:Regular'] text-[#60584c] text-[16px]">
          Join <span className="text-[#0c221f] font-['Geist:SemiBold'] font-semibold">100+ brands and businesses</span> growing on WeNext
        </Typography>
      </div>
      <div className="px-4 xl:px-[75px] py-[26px] overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="flex items-center gap-[56px] w-max" style={{ animation: 'logos-scroll 32s linear infinite' }}>
          {[...BRANDS, ...BRANDS].map((b, i) => (
            <Typography key={i} className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[24px] tracking-[-0.5px] opacity-30 hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">{b}</Typography>
          ))}
        </div>
      </div>
    </Frame>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SECURITY & TRUST — text + compliance console mockup
// ══════════════════════════════════════════════════════════════════════════════
const COMPLIANCE = [
  { t: 'DPDP', s: 'India compliant' },
  { t: 'GDPR', s: 'Privacy ready' },
  { t: 'ISO 27001', s: 'Infosec certified' },
  { t: 'India-Hosted', s: 'Local data centres' },
];
const SECURITY_POINTS = [
  'End-to-end encrypted conversations',
  'India-hosted data — never sold or shared',
  'Role-based access controls & audit logs',
  'Official Meta Business Partner',
];

export function SecuritySection() {
  return (
    <Frame>
      <div className="grid grid-cols-2">
        {/* compliance console mockup */}

        <div className="p-[50px] flex items-center justify-center bg-[#f3efe3] relative overflow-hidden" style={gridCanvas}>
          <div className="bg-white rounded-[20px] border border-[#e0dac6] shadow-[0_30px_70px_-30px_rgba(11,31,26,0.3)] w-full max-w-[420px] overflow-hidden relative">
            {/* <div className="step-scan absolute inset-x-0 top-0 h-[40px] pointer-events-none z-[2]" style={{ background: 'linear-gradient(180deg, rgba(6,179,73,0.16) 0%, transparent 100%)' }} /> */}
            <div className="px-[24px] py-[18px] border-b border-[#eee7d6] flex items-center justify-between">
              <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[15px]">Security Center</Typography>
              <div className="flex items-center gap-[6px] bg-[#e5f6e7] rounded-full px-[10px] py-[4px]">
                <span className="relative flex size-[6px]"><span className="absolute inline-flex size-full rounded-full bg-[#06b349] opacity-60 animate-ping" /><span className="relative inline-flex size-[6px] rounded-full bg-[#06b349]" /></span>
                <Typography className="font-['Courier_Prime'] text-[#06824f] text-[10px] uppercase tracking-[0.08em]">Protected</Typography>
              </div>
            </div>
            <div className="p-[24px]">
              {/* encryption banner */}
              <div className="sec-sheen flex items-center gap-[14px] rounded-[14px] bg-gradient-to-br from-[#092511] to-[#0c2f18] p-[18px] mb-[20px] relative overflow-hidden">
                <div className="absolute -top-[30px] -right-[20px] size-[120px] bg-[#06b349] opacity-[0.18] blur-[40px] rounded-full" />
                {/* <div className="sec-stream absolute inset-x-0 bottom-0 h-[3px] opacity-80" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #06b349 0 6px, transparent 6px 16px)', backgroundSize: '16px 3px' }} /> */}
                <div className="size-[44px] rounded-[12px] bg-[rgba(6,179,73,0.18)] border border-[rgba(6,179,73,0.4)] flex items-center justify-center shrink-0 relative">
                  <span className="sec-ripple absolute inset-0 rounded-[12px] border border-[#34d36e]" />
                  <span className="sec-ripple absolute inset-0 rounded-[12px] border border-[#34d36e]" style={{ animationDelay: '1.2s' }} />
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#34d36e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative" style={{ filter: 'drop-shadow(0 0 5px rgba(52,211,110,0.7))' }}><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                </div>
                <div className="relative flex-1">
                  <Typography className="font-['Geist:SemiBold'] font-semibold text-white text-[14px] leading-none">End-to-end encrypted</Typography>
                  <Typography className="font-['Courier_Prime'] text-[#7aaa88] text-[11px] mt-[6px]">AES-256 · keys never leave India</Typography>
                </div>
                <div className="relative flex items-center gap-[5px] bg-[rgba(6,179,73,0.15)] border border-[rgba(6,179,73,0.35)] rounded-full px-[9px] py-[4px]">
                  <span className="size-[5px] rounded-full bg-[#34d36e] step-live-dot" />
                  <Typography className="font-['Courier_Prime'] text-[#34d36e] text-[9px] uppercase tracking-[0.08em]">Live</Typography>
                </div>
              </div>
              {/* compliance grid */}
              <div className="grid grid-cols-2 gap-[12px] mb-[18px]">
                {COMPLIANCE.map((c, i) => (
                  <div key={c.t} className="sec-verify rounded-[12px] border border-[#e0dac6] bg-[#faf8f1] p-[14px]" style={{ animationDelay: `${i}s` }}>
                    <div className="flex items-center gap-[7px] mb-[6px]">
                      <svg className="sec-check-pop" style={{ animationDelay: `${i}s` }} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                      <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[14px]">{c.t}</Typography>
                    </div>
                    <Typography className="font-['Geist:Regular'] text-[#60584c] text-[12px]">{c.s}</Typography>
                  </div>
                ))}
              </div>
              {/* meta partner */}
              <div className="flex items-center justify-between rounded-[12px] bg-[#e8f1fe] border border-[#cfe0fb] px-[16px] py-[12px]">
                <div className="flex items-center gap-[10px]">
                  <div className="size-[30px] rounded-[8px] bg-[#1877F2] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56V12h2.76l-.44 2.89h-2.32v6.99A10 10 0 0 0 22 12z" /></svg></div>
                  <Typography className="font-['Geist:Medium'] font-medium text-[#0c221f] text-[13px]">Official Meta Business Partner</Typography>
                </div>
                <svg className="sec-check-pop" width="18" height="18" viewBox="0 0 24 24" fill="#1877F2"><path d="M12 2l2.2 2.2 3.1-.3.3 3.1L19.8 9l-2.2 2 .3 3.1-3.1.3L12 16.6 9.8 14.4l-3.1.3-.3-3.1L4.2 9l2.2-2-.3-3.1 3.1.3z" /><polyline points="9 11.5 11 13.5 15 9" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
            </div>
          </div>
        </div>

        {/* text */}
        <div className="p-[60px] flex flex-col justify-center border-l border-[#e0dac6]">
          <Eyebrow label="Security & Trust" />
          <Typography component="h2" className="font-['Geist:SemiBold'] font-semibold text-[42px] text-[#0c221f] tracking-[-1.3px] leading-[1.12] mb-[18px]">
            Your customer data<br />stays yours
          </Typography>
          <Typography className="font-['Geist:Regular'] text-[#60584c] text-[17px] leading-[1.7] mb-[28px] max-w-[460px]">
            WeNext is built for regulated, customer-first businesses. Every conversation is encrypted, hosted in India, and fully compliant — so you can scale without compromising trust.
          </Typography>
          <div className="flex flex-col gap-[14px]">
            {SECURITY_POINTS.map((p) => (
              <div key={p} className="flex items-center gap-[12px]">
                <div className="size-[22px] rounded-full bg-[#e5f6e7] flex items-center justify-center shrink-0"><Check /></div>
                <Typography className="font-['Geist:Regular'] text-[#3a4540] text-[16px]">{p}</Typography>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Frame>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// PRICING TEASER — plan cards
// ══════════════════════════════════════════════════════════════════════════════
const PLANS = [
  { name: 'Starter', price: 'Free', period: '14-day trial', desc: 'For solo founders testing the waters', features: ['1 WhatsApp number', 'Shared team inbox', 'Basic automations', '500 conversations / mo'], cta: 'Start free', highlight: false },
  { name: 'Growth', price: '₹2,999', period: '/mo', desc: 'For growing D2C & SMB teams', features: ['Everything in Starter', 'AI replies & flow builder', 'Cart recovery & broadcasts', 'Unlimited automations', '10,000 conversations / mo'], cta: 'Start free trial', highlight: true, badge: 'Most popular' },
  { name: 'Scale', price: 'Custom', period: '', desc: 'For high-volume & enterprise', features: ['Everything in Growth', 'Dedicated success manager', '99.9% SLA & priority support', 'Custom integrations & SSO'], cta: 'Talk to sales', highlight: false },
];

export function PricingTeaser() {
  return (
    <Frame>
      <div className="border-b border-[#e0dac6] py-[60px] px-4 xl:px-[75px] flex flex-col items-center text-center">
        <Eyebrow label="Pricing" center />
        <Typography component="h2" className="font-['Geist:SemiBold'] font-semibold text-[48px] text-[#0c221f] tracking-[-1.5px] leading-[1.1]">
          Simple, transparent pricing
        </Typography>
        <Typography className="font-['Geist:Regular'] text-[#60584c] text-[18px] max-w-[560px] leading-[1.55] mt-[14px]">
          Start free, then pay as you grow. No setup fees, no lock-in — cancel any time and keep your data.
        </Typography>
      </div>
      <div className="grid grid-cols-3 divide-x divide-[#e0dac6]">
        {PLANS.map((p) => (
          <div key={p.name} className={`p-[40px] flex flex-col relative ${p.highlight ? 'bg-[#f3fbf5]' : 'bg-[#f8f5ec]'}`}>
            {p.highlight && <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#06b349] to-[#25d366]" />}
            <div className="flex items-center justify-between mb-[6px]">
              <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[20px]">{p.name}</Typography>
              {p.badge && <span className="bg-[#06b349] text-white rounded-full px-[10px] py-[4px] text-[11px] font-['Geist:Medium'] font-medium">{p.badge}</span>}
            </div>
            <Typography className="font-['Geist:Regular'] text-[#60584c] text-[14px] leading-[1.5] mb-[20px] min-h-[42px]">{p.desc}</Typography>
            <div className="flex items-end gap-[6px] mb-[24px]">
              <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[40px] leading-none tracking-[-1.5px]">{p.price}</Typography>
              {p.period && <Typography className="font-['Geist:Regular'] text-[#60584c] text-[15px] mb-[5px]">{p.period}</Typography>}
            </div>
            <Link to="/pricing" className="block mb-[28px]">
              <div className={`rounded-[8px] py-[13px] text-center cursor-pointer transition-all duration-150 active:scale-[0.98] ${p.highlight ? 'bg-[#06b349] hover:bg-[#05a043]' : 'bg-white border border-[#dedace] hover:bg-[#f3efe3]'}`}>
                <Typography className={`font-['Geist:Medium'] font-medium text-[16px] ${p.highlight ? 'text-white' : 'text-[#092511]'}`}>{p.cta}</Typography>
              </div>
            </Link>
            <div className="flex flex-col gap-[12px]">
              {p.features.map((f) => (
                <div key={f} className="flex items-center gap-[10px]">
                  <div className="size-[20px] rounded-full bg-[#e5f6e7] flex items-center justify-center shrink-0"><Check /></div>
                  <Typography className="font-['Geist:Regular'] text-[#3a4540] text-[15px]">{f}</Typography>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="py-[26px] px-4 xl:px-[75px] flex items-center justify-center border-t border-[#e0dac6]">
        <Link to="/pricing" className="group inline-flex items-center gap-[8px]">
          <Typography className="font-['Geist:Medium'] font-medium text-[#06b349] text-[16px] border-b border-transparent group-hover:border-[#06b349] transition-colors duration-200">Compare full plans &amp; features</Typography>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-[3px] transition-transform duration-200"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </Frame>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// FINAL CTA — full-bleed dark band
// ══════════════════════════════════════════════════════════════════════════════
const imgWhatsApp = '/figma/imgImage1.svg';
const imgInstagram = '/figma/imgImage2.svg';
const imgFacebook = '/figma/imgImage3.svg';

export function FinalCTA() {
  return (
    <div className="bg-[#092511] shadow-[0_0_0_100vmax_#092511] [clip-path:inset(0_-100vmax)] shrink-0 w-full">
      <div className="container mx-auto border-x border-[rgba(255,255,255,0.08)] px-4 xl:px-[75px] py-[90px] flex flex-col items-center text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"><img alt="" className="size-full object-cover" src={imgImage27} /></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#06b349] opacity-[0.08] blur-[120px] rounded-full pointer-events-none" />
        <div className="flex gap-[16px] items-center justify-center mb-[28px] relative">
          {[{ i: imgWhatsApp, c: '#25d366' }, { i: imgInstagram, c: '#DD2A7B' }, { i: imgFacebook, c: '#1877F2' }].map((ch, idx) => (
            <div key={idx} className="size-[52px] rounded-[14px] flex items-center justify-center border border-[rgba(255,255,255,0.1)]" style={{ background: `${ch.c}1f` }}>
              <img alt="" src={ch.i} className="size-[26px]" />
            </div>
          ))}
        </div>
        <Typography component="h2" className="font-['Geist:SemiBold'] font-semibold text-white text-[48px] tracking-[-1.5px] leading-[1.15] max-w-[700px] mb-[20px] relative">
          Ready to turn every chat into revenue?
        </Typography>
        <Typography className="font-['Geist:Regular'] text-[#a0b8a8] text-[19px] max-w-[560px] leading-[1.6] mb-[40px] relative">
          Join 100+ businesses growing on WeNext. Go live in 15 minutes — no developer, no credit card.
        </Typography>
        <div className="flex flex-wrap gap-[16px] items-center justify-center relative">
          <PrimaryButton label="Book a Demo" />
          <a href="https://app.wenext.ai" target="_blank" rel="noopener noreferrer"
            className="bg-transparent border border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.05)] active:scale-[0.98] transition-all duration-150 rounded-[8px] cursor-pointer flex items-center px-[21px] py-[15px]">
            <Typography className="font-['Geist:Medium'] font-medium text-[17px] text-white whitespace-nowrap">Get Started Free</Typography>
          </a>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// HOME "Everything you need" tabbed mockup
// ══════════════════════════════════════════════════════════════════════════════
function HfIco({ d }: { d: ReactNode }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{d}</svg>;
}

const wTicks = <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#34b7f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 7 9.5 16 7 13.5" /><polyline points="23 7 14.5 16 14 15.5" /></svg>;

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

function CmpStatIcon({ k }: { k: string }) {
  const s = { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: '#94a3b8', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  if (k === 'mail') return <svg {...s}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" /></svg>;
  if (k === 'check') return <svg {...s}><polyline points="20 6 9 17 4 12" /></svg>;
  if (k === 'checks') return <svg {...s}><polyline points="18 7 9.5 16 7 13.5" /><polyline points="23 7 14.5 16 14 15.5" /></svg>;
  return <svg {...s}><path d="m9 9 5 12 1.8-5.2L21 14 9 9z" /><path d="m3 3 6 6" /></svg>;
}

export function HomeFeaturesMockup({ tab }: { tab: number }) {
  const SIDE: { label: string; icon: ReactNode; caret?: boolean; subs?: { l: string; ic?: string; sparkle?: boolean; mk?: string }[] }[] = [
    { label: 'Dashboard', icon: <HfIco d={<><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /></>} /> },
    { label: 'Channels', icon: <HfIco d={<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />} />, subs: [{ l: 'Whatsapp', mk: 'whatsapp' }, { l: 'Instagram', mk: 'instagram' }, { l: 'Facebook', mk: 'facebook' }, { l: 'AI Agents', sparkle: true }] },
    { label: 'Marketing', icon: <HfIco d={<><path d="m3 11 18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></>} />, subs: [{ l: 'Campaigns', mk: 'mega' }, { l: 'Ads', mk: 'ad' }, { l: 'Social Media Posts', mk: 'globe' }, { l: 'WhatsApp Forms', mk: 'form' }] },
    { label: 'Customers', icon: <HfIco d={<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>} />, subs: [{ l: 'CRM', mk: 'user' }, { l: 'Appointments', mk: 'cal' }] },
    { label: 'AI Agents', icon: <HfIco d={<path d="M12 3l1.9 5.8 5.8 1.9-5.8 1.9L12 18.4l-1.9-5.8L4.3 10.7l5.8-1.9z" />} /> },
    { label: 'Automations', icon: <HfIco d={<><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></>} /> },
    { label: 'Commerce', icon: <HfIco d={<><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></>} />, caret: true },
    { label: 'Integrations', icon: <HfIco d={<><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>} /> },
  ];
  const expanded = ['Channels', 'Marketing', 'Marketing', 'Customers', 'Marketing'][tab];
  const activeTop = [null, 'AI Agents', null, null, null][tab];
  const activeSub = ['Whatsapp', null, 'Campaigns', 'CRM', 'Social Media Posts'][tab];
  const credits = ['400 / 500', '400 / 500', '400 / 500', '400 / 500', '400 / 500'][tab];
  const tier = ['ENTERPRISE', 'ENTERPRISE', 'ENTERPRISE', 'PRO TRIAL', 'ENTERPRISE'][tab];
  const title = ['Unified Inbox', 'AI Agents & Assistants', 'Campaigns', 'CRM', 'Social Media Posts'][tab];

  const convos: { i: string; bg: string; c: string; n: string; prev: string; t: string; badge?: string; star?: boolean; sel?: boolean }[] = [
    { i: 'G', bg: '#fce7ef', c: '#d9577e', n: 'Gireesha Vallabhaneni', badge: 'MK', prev: 'Thank you for your patience! Your ord...', t: '3/17/2026' },
    { i: 'S', bg: '#fce7ef', c: '#d9577e', n: 'Sahith', badge: 'MK', star: true, prev: 'Template message', t: '3/17/2026', sel: true },
    { i: 'T', bg: '#dbeafe', c: '#3f6cab', n: 'Thanmayee Koganti', badge: 'MK', prev: 'Message', t: '3/16/2026' },
    { i: 'C', bg: '#dbeafe', c: '#3f6cab', n: 'Chaitanya Krishna', prev: 'Interactive message', t: '3/13/2026' },
    { i: 'S', bg: '#f3f4f6', c: '#64748b', n: 'Sarika Reddy', star: true, prev: 'Interactive message', t: '3/12/2026' },
    { i: 'P', bg: '#fce7ef', c: '#d9577e', n: 'Prakash R', badge: 'MK', prev: 'Template message', t: '3/13/2026' },
    { i: 'N', bg: '#dbeafe', c: '#3f6cab', n: 'Nanne', prev: 'hiii', t: '3/12/2026' },
  ];
  const agents = [{ n: 'Gen', d: 'Jun 12, 2026' }, { n: 'asd', d: 'Jun 23, 2026' }, { n: 'asd', d: 'Jun 23, 2026' }, { n: 'asdfd', d: 'Jun 20, 2026' }, { n: 'asdfghjkl', d: 'Jun 13, 2026' }, { n: 'asffs', d: 'Jun 23, 2026' }, { n: 'demo', d: 'Mar 27, 2026' }, { n: 'erthrdg', d: 'Jun 19, 2026' }];

  // AI Agents kanban board — same visual language as the CRM board
  type AgentCard = { av: string; avbg: string; avc: string; n: string; type: string; score: number; scoreType: 'target' | 'flame' | 'pulse'; tag: string | null; tagColor: string | null; channel: 'whatsapp' | 'instagram' | 'facebook' | 'multi'; upd: string; author: string };
  const agentBoard: { name: string; count: string; cards: AgentCard[]; peek: AgentCard }[] = [
    {
      name: 'Active', count: '8',
      cards: [
        { av: '✦', avbg: '#e5f6e7', avc: '#06824f', n: 'Sales Concierge', type: 'Conversational · Product recs', score: 96, scoreType: 'flame', tag: 'Retail', tagColor: 'green', channel: 'whatsapp', upd: '2h ago', author: 'MK' },
        { av: '✦', avbg: '#dbeafe', avc: '#3f6cab', n: 'Support Assistant', type: 'FAQ · Ticket triage', score: 92, scoreType: 'flame', tag: 'Support', tagColor: 'purple', channel: 'multi', upd: '6h ago', author: 'AR' },
      ],
      peek: { av: '✦', avbg: '#fce7ef', avc: '#d9577e', n: 'Product Recommender', type: 'Catalog · Upsell', score: 88, scoreType: 'flame', tag: null, tagColor: null, channel: 'whatsapp', upd: '', author: '' },
    },
    {
      name: 'In Training', count: '3',
      cards: [
        { av: '✦', avbg: '#fef3c7', avc: '#b45309', n: 'Cart Recovery Agent', type: 'Abandoned cart · Nudges', score: 78, scoreType: 'target', tag: 'D2C', tagColor: 'green', channel: 'whatsapp', upd: 'Yesterday', author: 'MK' },
        { av: '✦', avbg: '#fed7aa', avc: '#ea580c', n: 'Booking Assistant', type: 'Appointments · Reminders', score: 82, scoreType: 'target', tag: 'Services', tagColor: 'blue', channel: 'whatsapp', upd: '3 days ago', author: 'PS' },
      ],
      peek: { av: '✦', avbg: '#e0e7ff', avc: '#4f46e5', n: 'Payment Reminder', type: 'COD · UPI nudges', score: 71, scoreType: 'target', tag: null, tagColor: null, channel: 'whatsapp', upd: '', author: '' },
    },
    {
      name: 'Draft', count: '5',
      cards: [
        { av: '✦', avbg: '#f1f5f9', avc: '#64748b', n: 'Feedback Collector', type: 'CSAT · Post-purchase', score: 55, scoreType: 'pulse', tag: 'Marketing', tagColor: 'green', channel: 'whatsapp', upd: '4 days ago', author: 'MK' },
        { av: '✦', avbg: '#f1f5f9', avc: '#64748b', n: 'FAQ Agent', type: 'Multi-channel knowledge base', score: 60, scoreType: 'pulse', tag: null, tagColor: null, channel: 'multi', upd: '1 week ago', author: 'AR' },
      ],
      peek: { av: '✦', avbg: '#f1f5f9', avc: '#64748b', n: 'Upsell Coach', type: 'Recommender · Bundle', score: 48, scoreType: 'pulse', tag: null, tagColor: null, channel: 'instagram', upd: '', author: '' },
    },
  ];
  const channelIcon = (c: AgentCard['channel']) => c === 'instagram' ? (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#d9577e" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="#d9577e" /></svg>
  ) : c === 'facebook' ? (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="#3f6cab"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
  ) : c === 'multi' ? (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2"><circle cx="6" cy="12" r="3" /><circle cx="12" cy="6" r="3" /><circle cx="18" cy="12" r="3" /><circle cx="12" cy="18" r="3" /></svg>
  ) : (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="#06b349"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 0C5.495 0 .157 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413A11.815 11.815 0 0012.05 0z" /></svg>
  );
  const channelLabel = (c: AgentCard['channel']) => c === 'instagram' ? 'Instagram' : c === 'facebook' ? 'Facebook' : c === 'multi' ? 'All channels' : 'WhatsApp';

  const campaigns = [
    { n: 'new01', st: 'Completed', d: 'Sent Jun 1, 2026' }, { n: 'Campaign for thethis tag', st: 'Completed', d: 'Sent Jun 1, 2026' }, { n: 'X', st: 'Completed', d: 'Sent May 29, 2026' },
    { n: 'you', st: 'Failed', d: 'Created May 29, 2…' }, { n: 'thehthingss', st: 'Failed', d: 'Created May 29, 2…' }, { n: 'thehthing', st: 'Failed', d: 'Created May 29, 2…' },
    { n: 'thethis', st: 'Failed', d: 'Created May 29, 2…' }, { n: 'thethethis', st: 'Completed', d: 'Sent May 28, 2026' }, { n: 'thethe', st: 'Completed', d: 'Sent May 28, 2026' },
  ];
  type ScoreType = 'target' | 'flame' | 'pulse';
  type BoardCard = { av: string; avbg: string; avc: string; n: string; ph: string; score: number; scoreType: ScoreType; tag: string | null; tagColor: string | null; upd: string };
  const board: { name: string; count: string; cards: BoardCard[]; peek: BoardCard }[] = [
    {
      name: 'In Conversation', count: '39', cards: [
        { av: 'S', avbg: '#e5e7eb', avc: '#64748b', n: 'Sahi', ph: '+91 91********', score: 75, scoreType: 'target', tag: 'Marketing Limit', tagColor: 'green', upd: '6 days ago' },
        { av: 'J', avbg: '#fce7ef', avc: '#d9577e', n: 'Jeevana_komminni', ph: '+91 98********', score: 95, scoreType: 'flame', tag: null, tagColor: null, upd: '7 days ago' },
      ], peek: { av: 'S', avbg: '#e0e7ff', avc: '#4f46e5', n: 'Sravani', ph: '+919176543214', score: 77, scoreType: 'target', tag: null, tagColor: null, upd: '' }
    },
    {
      name: 'Proposal', count: '13', cards: [
        { av: 'P', avbg: '#dbeafe', avc: '#3f6cab', n: 'Prasad', ph: '+91 91********', score: 55, scoreType: 'pulse', tag: 'Marketing Limit', tagColor: 'green', upd: 'about 1 hour ago' },
        { av: '~K', avbg: '#e5e7eb', avc: '#64748b', n: 'Jeevan Komminni', ph: '+91 94********', score: 75, scoreType: 'target', tag: 'Premium Customer', tagColor: 'purple', upd: 'about 6 hours ago' },
      ], peek: { av: 'SI', avbg: '#e0e7ff', avc: '#4f46e5', n: 'Sahith Illandula', ph: '+918341922323', score: 71, scoreType: 'target', tag: null, tagColor: null, upd: '' }
    },
    {
      name: 'Prospects & Leads', count: '4,223', cards: [
        { av: 'P', avbg: '#e0e7ff', avc: '#4f46e5', n: 'Pavan Kumar', ph: '+91 91********', score: 60, scoreType: 'pulse', tag: 'Marketing Limit', tagColor: 'green', upd: '6 days ago' },
        { av: 'GT', avbg: '#fed7aa', avc: '#ea580c', n: 'Karthik Kumar', ph: '+91 94********', score: 88, scoreType: 'flame', tag: null, tagColor: null, upd: '23 days ago' },
      ], peek: { av: 'KN', avbg: '#fce7ef', avc: '#d9577e', n: 'Ravi Goud', ph: '+917032655524', score: 89, scoreType: 'flame', tag: null, tagColor: null, upd: '' }
    },
  ];
  const tagCls = (c: string | null) => c === 'green' ? 'bg-[#e7f6ee] text-[#06824f]' : c === 'blue' ? 'bg-[#e7f0fe] text-[#3f6cab]' : c === 'purple' ? 'bg-[#f3e8ff] text-[#7c3aed]' : 'bg-[#eceff3] text-[#64748b]';
  const scoreCls = (t: ScoreType) => t === 'flame' ? 'bg-[#fed7aa] text-[#c2410c]' : t === 'target' ? 'bg-[#fef3c7] text-[#b45309]' : 'bg-[#dbeafe] text-[#1e40af]';
  const scoreIcon = (t: ScoreType) => t === 'flame' ? (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67z" /></svg>
  ) : t === 'target' ? (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" fill="currentColor" /></svg>
  ) : (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
  );

  type Platform = 'instagram' | 'facebook' | 'linkedin' | 'youtube';
  const platformIcon = (p: Platform) => p === 'instagram' ? (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#d9577e" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="#d9577e" /></svg>
  ) : p === 'facebook' ? (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="#3f6cab"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
  ) : p === 'linkedin' ? (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="#0077b5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
  ) : (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="#ef4444"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
  );
  const platformLabel = (p: Platform) => p === 'instagram' ? 'Instagram' : p === 'facebook' ? 'Facebook' : p === 'linkedin' ? 'LinkedIn' : 'YouTube';
  type PostCard = { av: string; avbg: string; avc: string; n: string; caption: string; hasScore: boolean; score: number; scoreType: ScoreType; tag: string | null; tagColor: string | null; platform: Platform; author: string; authorName: string; upd: string };
  const postBoard: { name: string; count: string; cards: PostCard[]; peek: PostCard }[] = [
    {
      name: 'Drafts', count: '12', cards: [
        { av: 'MK', avbg: '#e5e7eb', avc: '#64748b', n: 'Summer Collection 2026', caption: 'Get ready for the hottest trends...', hasScore: false, score: 0, scoreType: 'pulse', tag: 'Product Launch', tagColor: 'purple', platform: 'instagram', author: 'PG', authorName: 'Prathik Gadde', upd: '2 hours ago' },
      ], peek: { av: 'AI', avbg: '#dbeafe', avc: '#3f6cab', n: 'Diwali Sale Teaser', caption: 'Sneak peek into our big sale...', hasScore: false, score: 0, scoreType: 'pulse', tag: 'Promo', tagColor: 'blue', platform: 'facebook', author: 'AI', authorName: 'Nexa AI', upd: '' }
    },
    {
      name: 'Scheduled', count: '5', cards: [
        { av: 'AR', avbg: '#fef3c7', avc: '#b45309', n: 'Linen Shirts Restock', caption: 'They are back! Shop the pure...', hasScore: true, score: 85, scoreType: 'flame', tag: 'Restock', tagColor: 'blue', platform: 'facebook', author: 'AR', authorName: 'Anjali R', upd: 'Scheduled for tomorrow' },
      ], peek: { av: 'AI', avbg: '#dbeafe', avc: '#3f6cab', n: 'Flash Sale', caption: 'Ready, set, shop!', hasScore: false, score: 0, scoreType: 'pulse', tag: 'Promo', tagColor: 'blue', platform: 'instagram', author: 'AI', authorName: 'Nexa AI', upd: '' }
    },
    {
      name: 'Published', count: '142', cards: [
        { av: 'MK', avbg: '#e5e7eb', avc: '#64748b', n: 'Customer Testimonial', caption: '"Best quality ever" - see what...', hasScore: true, score: 92, scoreType: 'target', tag: 'Review', tagColor: 'green', platform: 'instagram', author: 'MK', authorName: 'Prathik Gadde', upd: 'Published 3 days ago' },
      ], peek: { av: 'AI', avbg: '#dbeafe', avc: '#3f6cab', n: 'Behind the Scenes', caption: 'How we make our clothes...', hasScore: true, score: 78, scoreType: 'pulse', tag: 'Culture', tagColor: 'purple', platform: 'youtube', author: 'AI', authorName: 'Nexa AI', upd: '' }
    }
  ];
  return (
    <div className="absolute inset-0 bg-[#f5f7f9] rounded-[12px] overflow-hidden flex flex-col text-left">
      {/* TOP BAR */}
      <div className="h-[60px] bg-white border-b border-[#edf0f4] flex items-center shrink-0">
        <div className="w-[238px] flex items-center justify-between px-[18px] shrink-0">
          <div className="flex items-center gap-[9px]">
            <img alt="wenext" src="/figma/imgImageWenext.svg" style={{ width: "120px", height: "25px" }} />
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="11 17 6 12 11 7" /><polyline points="18 17 13 12 18 7" /></svg>
        </div>
        <div className="flex-1 flex items-center justify-between px-[20px]">
          <div className="w-[420px] h-[40px] rounded-[12px] border border-[#e5e7eb] bg-[#f8fafc] flex items-center px-[14px] gap-[9px]"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg><span className="text-[#9ca3af] text-[14px] flex-1">Search anything...</span><span className="bg-white border border-[#e5e7eb] rounded-[6px] px-[7px] py-[2px] font-['Courier_Prime'] text-[#9ca3af] text-[11px]">⌘ K</span></div>
          <div className="flex items-center gap-[16px]">
            <div className="h-[40px] rounded-[10px] px-[16px] flex items-center gap-[8px]" style={{ background: 'linear-gradient(135deg,#0aa25a,#16c46f)' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" /></svg><span className="text-white text-[14px] font-['Geist:SemiBold'] font-semibold">NEXA AI</span></div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
            <div className="relative"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg><span className="absolute -top-[1px] -right-[1px] size-[8px] rounded-full bg-[#ef4444] border-2 border-white" /></div>
            <div className="flex items-center gap-[10px]"><div className="size-[40px] rounded-[10px] bg-[#eceff3] flex items-center justify-center font-['Geist:SemiBold'] font-semibold text-[#64748b] text-[14px]">PG</div><div className="leading-none"><div className="flex items-center gap-[4px]"><span className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[14px]">Prathik Gadde</span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg></div><span className="font-['Courier_Prime'] text-[#9ca3af] text-[12px]">+91 97********</span></div></div>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="flex-1 flex min-h-0">
        {/* SIDEBAR */}
        <div className="w-[238px] bg-white border-r border-[#edf0f4] flex flex-col shrink-0">
          <div className="flex-1 overflow-hidden p-[14px] flex flex-col gap-[3px]">
            {SIDE.map((s) => {
              const isActive = s.label === activeTop;
              const isExp = s.label === expanded;
              const showCaret = !!s.subs || s.caret;
              const hasActiveChild = isExp && !!s.subs && s.subs.some((c) => c.l === activeSub);
              const parentGreen = hasActiveChild;
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
                            {c.ic ? <img alt="" src={c.ic} className="size-[17px]" /> : c.sparkle ? <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={sa ? '#06824f' : '#7c8694'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.9 5.8 5.8 1.9-5.8 1.9L12 18.4l-1.9-5.8L4.3 10.7l5.8-1.9z" /></svg> : <span className={sa ? 'text-[#06824f]' : 'text-[#64748b]'}><MkIcon k={c.mk || ''} /></span>}
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
              <div className="flex items-center gap-[6px] mb-[8px]"><Typography className="font-['Geist:SemiBold'] font-semibold text-white text-[12px] tracking-[0.06em]">{tier}</Typography><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" opacity="0.8"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg></div>
              <div className="flex items-end gap-[6px]"><Typography className="font-['Geist:SemiBold'] font-semibold text-white text-[22px] leading-none">{credits}</Typography><Typography className="font-['Geist:Regular'] text-white/80 text-[12px] mb-[2px]">AI Credits</Typography></div>
            </div>
            <div className="flex items-center justify-between">
              <div><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[14px] leading-none">Nexus AI</Typography><Typography className="font-['Geist:Regular'] text-[#94a3b8] text-[12px] mt-[3px]">Interactive experiences</Typography></div>
              <div className="w-[40px] h-[22px] rounded-full bg-[#d6dae0] p-[2px]"><div className="size-[18px] rounded-full bg-white shadow" /></div>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex-1 flex flex-col min-w-0 bg-[#fff]">
          {/* TAB 0 — WhatsApp inbox */}
          {tab === 0 && (
            <div className="flex-1 flex gap-[14px] p-[14px] min-h-0">
              <div className="w-[330px] bg-white rounded-[14px] border border-[#eceff3] flex flex-col shrink-0 overflow-hidden">
                <div className="px-[18px] py-[16px] flex items-center gap-[12px]">
                  <div className="size-[46px] rounded-full bg-[#25d366] flex items-center justify-center"><img alt="" src={imgWhatsApp} className="size-[26px] brightness-0 invert" /></div>
                  <div><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[18px] leading-none">WhatsApp</Typography><Typography className="font-['Geist:Regular'] text-[#94a3b8] text-[12px] mt-[5px]">Manage WhatsApp conversations</Typography></div>
                </div>
                <div className="px-[18px] flex items-center gap-[20px] border-b border-[#f1f3f6]">
                  <div className="pb-[11px] border-b-2 border-[#06b349] -mb-px"><Typography className="font-['Geist:Medium'] font-medium text-[#06b349] text-[13px]">All</Typography></div>
                  <Typography className="font-['Geist:Medium'] font-medium text-[#64748b] text-[13px] pb-[11px]">Unread <span className="text-[#0c221f]">9</span></Typography>
                  <Typography className="font-['Geist:Medium'] font-medium text-[#64748b] text-[13px] pb-[11px]">Assigned to agents <span className="text-[#0c221f]">27</span></Typography>
                </div>
                <div className="px-[14px] py-[12px] flex gap-[8px]">
                  <div className="flex-1 h-[40px] rounded-[10px] border border-[#e5e7eb] flex items-center px-[12px] gap-[8px]"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg><span className="text-[#9ca3af] text-[13px]">Search conversation...</span></div>
                  <div className="size-[40px] rounded-[10px] border border-[#e5e7eb] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="6" x2="20" y2="6" /><line x1="7" y1="12" x2="17" y2="12" /><line x1="10" y1="18" x2="14" y2="18" /></svg></div>
                </div>
                <div className="flex-1 overflow-hidden">
                  {convos.map((r, idx) => (
                    <div key={idx} className={`relative px-[14px] py-[12px] flex items-start gap-[11px] border-b border-[#f6f7f9] ${r.sel ? 'bg-[#fafaf9] border-l-2 border-l-[#06b349]' : ''}`}>
                      <div className="size-[42px] rounded-full flex items-center justify-center font-['Geist:SemiBold'] font-semibold text-[13px] shrink-0" style={{ background: r.bg, color: r.c }}>{r.i}</div>
                      <div className="flex-1 min-w-0 pt-[1px]">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-[5px] min-w-0">
                            <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[14px] truncate">{r.n}</Typography>
                            {r.star && (
                              <svg width="11" height="11" viewBox="0 0 24 24" fill="#dc2626" className="shrink-0"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                            )}
                            {r.badge && (
                              <span className="bg-[#fee2e2] text-[#dc2626] rounded-[4px] px-[4px] text-[9px] font-['Geist:SemiBold'] shrink-0">{r.badge}</span>
                            )}
                          </div>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="#cbd5e1" className="shrink-0"><circle cx="5" cy="12" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="19" cy="12" r="1.6" /></svg>
                        </div>
                        <div className="flex items-center justify-between gap-[8px] mt-[3px]"><Typography className="font-['Geist:Regular'] text-[#94a3b8] text-[12px] truncate">{r.prev}</Typography>{r.t && <Typography className="font-['Geist:Regular'] text-[#9ca3af] text-[11px] shrink-0">{r.t}</Typography>}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 bg-white rounded-[14px] border border-[#eceff3] flex flex-col min-w-0 overflow-hidden">
                {/* Contact header — sahith + Manish dropdown + High priority */}
                <div className="px-[20px] py-[14px] flex items-center justify-between border-b border-[#f1f3f6]">
                  <div className="flex items-center gap-[12px]">
                    <div className="size-[44px] rounded-full bg-[#fce7ef] flex items-center justify-center font-['Geist:SemiBold'] font-semibold text-[#d9577e] text-[16px]">s</div>
                    <div>
                      <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[16px] leading-none">Sahith</Typography>
                      <Typography className="font-['Geist:Regular'] text-[#94a3b8] text-[12px] mt-[5px]">+91 97********</Typography>
                    </div>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <div className="flex items-center gap-[7px] border border-[#e5e7eb] rounded-[10px] px-[12px] py-[8px]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2"><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>
                      <Typography className="text-[#475569] text-[13px] font-['Geist:Medium'] font-medium">Manish</Typography>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg>
                    </div>
                    <div className="flex items-center gap-[7px] border border-[#fecaca] bg-[#fef2f2] rounded-[10px] px-[12px] py-[8px]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#dc2626"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                      <Typography className="text-[#dc2626] text-[13px] font-['Geist:SemiBold'] font-semibold">High</Typography>
                    </div>
                  </div>
                </div>

                {/* Outside 24h warning banner */}
                <div className="bg-[#fdecec] py-[9px] flex items-center justify-center gap-[8px]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                  <Typography className="font-['Geist:Medium'] font-medium text-[#dc2626] text-[12.5px]">Outside 24h window · template messages only</Typography>
                </div>

                {/* Chat body */}
                <div className="flex-1 overflow-hidden px-[24px] py-[18px] flex flex-col gap-[10px] justify-end" style={{ background: '#f5f7f9' }}>
                  {/* Bubble 1 — View options list */}
                  <div className="self-end flex flex-col items-end gap-[3px] max-w-[62%]">
                    <div className="bg-[#dcf8e8] rounded-[12px] rounded-tr-[4px] overflow-hidden w-full">
                      <div className="flex items-center justify-center gap-[7px] py-[11px]">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>
                        <Typography className="font-['Geist:Medium'] font-medium text-[#06b349] text-[13px]">View options</Typography>
                      </div>
                    </div>
                    <div className="flex items-center gap-[3px] pr-[2px]"><Typography className="font-['Geist:Regular'] text-[#9ca3af] text-[10px]">2:30 AM</Typography>{wTicks}</div>
                  </div>

                  {/* Bubble 2 — Click here to view products + View options */}
                  <div className="self-end flex flex-col items-end gap-[3px] max-w-[62%]">
                    <div className="bg-[#dcf8e8] rounded-[12px] rounded-tr-[4px] overflow-hidden w-full">
                      <div className="px-[14px] pt-[10px] pb-[8px]">
                        <Typography className="text-[#0c221f] text-[13px]">Click here to view products list:</Typography>
                      </div>
                      <div className="border-t border-[#bfe6cd] flex items-center justify-center gap-[7px] py-[11px]">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>
                        <Typography className="font-['Geist:Medium'] font-medium text-[#06b349] text-[13px]">View options</Typography>
                      </div>
                    </div>
                    <div className="flex items-center gap-[3px] pr-[2px]"><Typography className="font-['Geist:Regular'] text-[#9ca3af] text-[10px]">6:02 AM</Typography>{wTicks}</div>
                  </div>

                  {/* Date separator */}
                  <div className="self-center bg-white rounded-[8px] px-[12px] py-[4px] shadow-sm">
                    <Typography className="text-[#94a3b8] text-[11px] font-['Geist:Medium'] font-medium">Mar 17, 2026</Typography>
                  </div>

                  {/* Bubble 3 — Order Details card */}
                  <div className="self-end flex flex-col items-end gap-[3px] max-w-[62%]">
                    <div className="bg-[#dcf8e8] rounded-[12px] rounded-tr-[4px] overflow-hidden w-full">
                      <div className="px-[14px] pt-[12px] pb-[10px]">
                        <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[13.5px] leading-none">Your Order Details</Typography>
                        <Typography className="text-[#0c221f] text-[12.5px] mt-[8px] leading-[1.45]">Thank you for your order of 5! Your order will be delivered to 6 soon.</Typography>
                        <Typography className="text-[#64748b] text-[11.5px] mt-[10px] leading-[1.4]">You are receiving this because you opted in.</Typography>
                      </div>
                      <div className="border-t border-[#bfe6cd] flex items-center justify-center gap-[7px] py-[10px]">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                        <Typography className="font-['Geist:Medium'] font-medium text-[#06b349] text-[13px]">View Order</Typography>
                      </div>
                      <div className="border-t border-[#bfe6cd] flex items-center justify-center gap-[7px] py-[10px]">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        <Typography className="font-['Geist:Medium'] font-medium text-[#06b349] text-[13px]">Contact Us</Typography>
                      </div>
                    </div>
                    <div className="flex items-center gap-[3px] pr-[2px]"><Typography className="font-['Geist:Regular'] text-[#9ca3af] text-[10px]">11:03 AM</Typography>{wTicks}</div>
                  </div>
                </div>
                <div className="px-[20px] py-[14px] border-t border-[#f1f3f6] flex items-center justify-between bg-white">
                  <div className="flex items-start gap-[10px]"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" className="mt-[1px] shrink-0"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg><div><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[13.5px] leading-none">The 24-hour time window is completed</Typography><Typography className="font-['Geist:Regular'] text-[#94a3b8] text-[12px] mt-[5px]">Free-form replies are paused. Send an approved template to re-open the conversation.</Typography></div></div>
                  <div className="bg-[#06b349] rounded-[10px] px-[18px] py-[11px] shrink-0"><Typography className="text-white text-[13.5px] font-['Geist:SemiBold'] font-semibold">Send Template</Typography></div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 1 — AI Agents & Assistants (kanban, matches CRM theme) */}
          {tab === 1 && (
            <div className="flex-1 flex flex-col min-h-0 bg-white relative">
              {/* Sub-tabs */}
              <div className="px-[28px] pt-[18px] flex items-center gap-[30px] border-b border-[#edf0f4]">
                {['AI Agents', 'Templates', 'Analytics'].map((t, i) => (
                  <div key={t} className={`pb-[14px] ${i === 0 ? 'border-b-2 border-[#06b349] -mb-px' : ''}`}>
                    <Typography className={`font-['Geist:Medium'] font-medium text-[14px] ${i === 0 ? 'text-[#06b349]' : 'text-[#64748b]'}`}>{t}</Typography>
                  </div>
                ))}
              </div>

              {/* Title + AI Insights + Create Agent */}
              <div className="px-[28px] pt-[20px] flex items-start justify-between">
                <div>
                  <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[26px] tracking-[-0.6px] leading-none">AI Agents &amp; Assistants</Typography>
                  <Typography className="font-['Geist:Regular'] text-[#94a3b8] text-[13px] mt-[6px]">Deploy, train, and manage your AI workforce across every channel</Typography>
                </div>
                <div className="flex items-center gap-[12px]">
                  <div className="h-[40px] rounded-[10px] border border-[#a7e2c0] bg-[#f3fbf6] flex items-center px-[14px] gap-[8px]">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.9 5.8 5.8 1.9-5.8 1.9L12 18.4l-1.9-5.8L4.3 10.7l5.8-1.9z" /></svg>
                    <span className="text-[#06824f] text-[13.5px] font-['Geist:Medium'] font-medium">AI Insights</span>
                  </div>
                  <div className="h-[40px] rounded-[10px] bg-[#06b349] flex items-center px-[16px] gap-[8px]">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                    <span className="text-white text-[13.5px] font-['Geist:SemiBold'] font-semibold">Create Agent</span>
                  </div>
                </div>
              </div>

              {/* Search + view toggle */}
              <div className="px-[28px] py-[16px] flex items-center">
                <div className="flex-1 h-[42px] rounded-[10px] border border-[#e5e7eb] flex items-center px-[14px] gap-[9px]">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                  <span className="text-[#9ca3af] text-[14px]">Search agents by name, capability or channel...</span>
                </div>
                <div className="ml-[16px] flex items-center border border-[#e5e7eb] rounded-[10px] overflow-hidden h-[42px]">
                  <div className="size-[42px] flex items-center justify-center border-r border-[#e5e7eb] bg-[#f1f9f4]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /></svg>
                  </div>
                  <div className="size-[42px] flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>
                  </div>
                </div>
              </div>

              {/* Kanban columns */}
              <div className="flex-1 overflow-hidden px-[28px] pb-[8px]">
                <div className="flex gap-[16px] h-full">
                  {agentBoard.map((col) => (
                    <div key={col.name} className="flex-1 min-w-0 bg-[#fafbfc] rounded-[14px] border border-[#eceff3] flex flex-col p-[14px]">
                      {/* Column header */}
                      <div className="flex items-center justify-between mb-[12px]">
                        <div className="flex items-center gap-[8px] min-w-0">
                          <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[15px] truncate">{col.name}</Typography>
                          <div className="flex items-center gap-[4px]">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><path d="M12 3l1.9 5.8 5.8 1.9-5.8 1.9L12 18.4l-1.9-5.8L4.3 10.7l5.8-1.9z" /></svg>
                            <Typography className="text-[#64748b] text-[12px] font-['Geist:Medium']">{col.count}</Typography>
                          </div>
                        </div>
                        <div className="flex items-center gap-[8px] shrink-0">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="#94a3b8"><circle cx="5" cy="12" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="19" cy="12" r="1.6" /></svg>
                        </div>
                      </div>

                      {/* Filter input */}
                      <div className="h-[34px] rounded-[8px] border border-[#e5e7eb] bg-white flex items-center px-[10px] gap-[7px] mb-[12px]">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                        <span className="text-[#9ca3af] text-[12px]">Filter agents</span>
                      </div>

                      {/* Cards */}
                      <div className="flex flex-col gap-[10px] overflow-hidden">
                        {col.cards.map((cd, ci) => (
                          <div key={ci} className="bg-white rounded-[12px] border border-[#eceff3] p-[12px]">
                            {/* Row 1: checkbox + sparkle avatar + name/type + score pill */}
                            <div className="flex items-start justify-between gap-[6px]">
                              <div className="flex items-center gap-[8px] min-w-0">
                                <div className="size-[14px] rounded-[4px] border-2 border-[#cbd5e1] shrink-0" />
                                {/* <div className="size-[28px] rounded-full flex items-center justify-center text-[12px] font-['Geist:SemiBold'] font-semibold shrink-0" style={{ background: cd.avbg, color: cd.avc }}>{cd.av}</div> */}
                                <div className="min-w-0">
                                  <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[13px] truncate">{cd.n}</Typography>
                                  <Typography className="text-[#94a3b8] text-[10.5px] truncate">{cd.type}</Typography>
                                </div>
                              </div>
                              {/* <div className={`inline-flex items-center gap-[3px] rounded-full px-[6px] py-[2px] shrink-0 ${scoreCls(cd.scoreType)}`}>
                                {scoreIcon(cd.scoreType)}
                                <span className="text-[10.5px] font-['Geist:SemiBold'] font-semibold">{cd.score}%</span>
                              </div> */}
                            </div>

                            {/* Row 2: capability tag + channel indicator */}
                            <div className="flex items-center justify-between gap-[8px] mt-[10px]">
                              {cd.tag ? (
                                <span className={`rounded-[6px] px-[8px] py-[3px] text-[10.5px] font-['Geist:Medium'] font-medium ${tagCls(cd.tagColor)}`}>{cd.tag}</span>
                              ) : <span />}
                              <div className="flex items-center gap-[5px]">
                                {channelIcon(cd.channel)}
                                <Typography className="text-[#64748b] text-[11px]">{channelLabel(cd.channel)}</Typography>
                              </div>
                            </div>

                            {/* Row 3: creator + timestamp */}
                            <div className="flex items-center justify-between gap-[8px] mt-[10px] pt-[10px] border-t border-[#f1f3f6]">
                              <div className="flex items-center gap-[6px]">
                                <div className="size-[18px] rounded-full bg-[#0c221f] flex items-center justify-center">
                                  <span className="text-white text-[8px] font-['Geist:SemiBold'] font-semibold leading-none">{cd.author}</span>
                                </div>
                                <Typography className="text-[#64748b] text-[11px]">By {cd.author === 'MK' ? 'Manish' : cd.author === 'AR' ? 'Arjun' : 'Priya'}</Typography>
                              </div>
                              <Typography className="text-[#94a3b8] text-[11px]">{cd.upd}</Typography>
                            </div>
                          </div>
                        ))}

                        {/* Peek card */}
                        <div className="bg-white rounded-[12px] border border-[#eceff3] p-[12px]">
                          <div className="flex items-start justify-between gap-[6px]">
                            <div className="flex items-center gap-[8px] min-w-0">
                              <div className="size-[14px] rounded-[4px] border-2 border-[#cbd5e1] shrink-0" />
                              <div className="size-[28px] rounded-full flex items-center justify-center text-[12px] font-['Geist:SemiBold'] font-semibold shrink-0" style={{ background: col.peek.avbg, color: col.peek.avc }}>{col.peek.av}</div>
                              <div className="min-w-0">
                                <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[13px] truncate">{col.peek.n}</Typography>
                                <Typography className="text-[#94a3b8] text-[10.5px] truncate">{col.peek.type}</Typography>
                              </div>
                            </div>
                            <div className={`inline-flex items-center gap-[3px] rounded-full px-[6px] py-[2px] shrink-0 ${scoreCls(col.peek.scoreType)}`}>
                              {scoreIcon(col.peek.scoreType)}
                              <span className="text-[10.5px] font-['Geist:SemiBold'] font-semibold">{col.peek.score}%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating action button */}
              {/* <div className="absolute bottom-[20px] right-[24px] size-[52px] rounded-full bg-[#06b349] flex items-center justify-center shadow-[0_10px_24px_-6px_rgba(6,179,73,0.5)]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l1.9 5.8 5.8 1.9-5.8 1.9L12 18.4l-1.9-5.8L4.3 10.7l5.8-1.9z" />
                </svg>
              </div> */}
            </div>
          )}

          {/* TAB 2 — Campaigns */}
          {tab === 2 && (
            <div className="flex-1 flex flex-col min-h-0 bg-white">
              <div className="px-[28px] pt-[18px] flex items-center gap-[30px] border-b border-[#edf0f4]">
                {['Campaigns', 'Templates'].map((t, i) => (<div key={t} className={`pb-[14px] ${i === 0 ? 'border-b-2 border-[#06b349] -mb-px' : ''}`}><Typography className={`font-['Geist:Medium'] font-medium text-[14px] ${i === 0 ? 'text-[#06b349]' : 'text-[#64748b]'}`}>{t}</Typography></div>))}
              </div>
              <div className="flex-1 overflow-hidden px-[28px] py-[20px]">
                <div className="flex items-start justify-between mb-[18px]">
                  <div><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[26px] tracking-[-0.6px] leading-none">Campaigns</Typography><Typography className="font-['Geist:Regular'] text-[#94a3b8] text-[13px] mt-[6px]">Create and manage WhatsApp marketing campaigns</Typography></div>
                  <div className="h-[42px] rounded-[10px] bg-[#06b349] flex items-center px-[18px] gap-[8px]"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg><span className="text-white text-[14px] font-['Geist:SemiBold'] font-semibold">New Campaign</span></div>
                </div>
                <div className="flex items-center justify-between mb-[18px]">
                  <div className="w-[400px] h-[44px] rounded-[10px] border border-[#e5e7eb] flex items-center px-[14px] gap-[9px]"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg><span className="text-[#9ca3af] text-[14px]">Search Campaigns...</span></div>
                  <div className="flex items-center gap-[12px]">
                    <div className="h-[44px] rounded-[10px] border border-[#e5e7eb] flex items-center px-[14px] gap-[24px]"><Typography className="text-[#475569] text-[13px] font-['Geist:Medium'] font-medium">All status</Typography><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg></div>
                    <div className="flex items-center border border-[#e5e7eb] rounded-[10px] overflow-hidden h-[44px]"><div className="size-[44px] flex items-center justify-center border-r border-[#e5e7eb] bg-[#f1f9f4]"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /></svg></div><div className="size-[44px] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg></div></div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-[20px]">
                  {campaigns.map((c, i) => (
                    <div key={i} className="bg-white rounded-[14px] border border-[#e8ebef] p-[18px]">
                      <div className="flex items-start justify-between"><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[16px] truncate pr-[8px]">{c.n}</Typography><span className={`flex items-center gap-[5px] rounded-full px-[9px] py-[3px] text-[11px] font-['Geist:Medium'] font-medium shrink-0 ${c.st === 'Completed' ? 'bg-[#e5f6e7] text-[#06824f]' : 'bg-[#fde7e7] text-[#dc2626]'}`}><span className="size-[6px] rounded-full" style={{ background: c.st === 'Completed' ? '#06b349' : '#dc2626' }} />{c.st}</span></div>
                      <Typography className="font-['Geist:Regular'] text-[#94a3b8] text-[12px] mt-[6px]">0 recipients · {c.d}</Typography>
                      <div className="bg-[#f6f7f9] rounded-[12px] p-[16px] mt-[14px] grid grid-cols-2 gap-y-[14px]">
                        {[{ k: 'mail', l: 'Sent' }, { k: 'check', l: 'Delivered' }, { k: 'checks', l: 'Read' }, { k: 'click', l: 'Clicked' }].map((st) => (
                          <div key={st.l}><div className="flex items-center gap-[6px]"><CmpStatIcon k={st.k} /><Typography className="font-['Geist:Regular'] text-[#64748b] text-[12px]">{st.l}</Typography></div><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[16px] mt-[2px]">0</Typography></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3 — CRM Leads Board */}
          {tab === 3 && (
            <div className="flex-1 flex flex-col min-h-0 bg-white relative">
              {/* Tabs */}
              <div className="px-[28px] pt-[18px] flex items-center gap-[30px] border-b border-[#edf0f4]">
                {['Lead Board', 'Tickets', 'Tags'].map((t, i) => (
                  <div key={t} className={`pb-[14px] ${i === 0 ? 'border-b-2 border-[#06b349] -mb-px' : ''}`}>
                    <Typography className={`font-['Geist:Medium'] font-medium text-[14px] ${i === 0 ? 'text-[#06b349]' : 'text-[#64748b]'}`}>{t}</Typography>
                  </div>
                ))}
              </div>

              {/* Title + AI Lead Analysis + Add Leads */}
              <div className="px-[28px] pt-[20px] flex items-start justify-between">
                <div>
                  <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[26px] tracking-[-0.6px] leading-none">Leads Board</Typography>
                  <Typography className="font-['Geist:Regular'] text-[#94a3b8] text-[13px] mt-[6px]">Default Kanban board for managing leads</Typography>
                </div>
                <div className="flex items-center gap-[12px]">
                  <div className="h-[40px] rounded-[10px] border border-[#a7e2c0] bg-[#f3fbf6] flex items-center px-[14px] gap-[8px]">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.9 5.8 5.8 1.9-5.8 1.9L12 18.4l-1.9-5.8L4.3 10.7l5.8-1.9z" /></svg>
                    <span className="text-[#06824f] text-[13.5px] font-['Geist:Medium'] font-medium">AI Lead Analysis</span>
                  </div>
                  <div className="h-[40px] rounded-[10px] bg-[#06b349] flex items-center px-[16px] gap-[8px]">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" y1="8" x2="19" y2="14" /><line x1="22" y1="11" x2="16" y2="11" /></svg>
                    <span className="text-white text-[13.5px] font-['Geist:SemiBold'] font-semibold">Add Leads</span>
                  </div>
                </div>
              </div>

              {/* Search bar + view toggle */}
              <div className="px-[28px] py-[16px] flex items-center">
                <div className="flex-1 h-[42px] rounded-[10px] border border-[#e5e7eb] flex items-center px-[14px] gap-[9px]">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                  <span className="text-[#9ca3af] text-[14px]">Search by name, phone or email...</span>
                </div>
                <div className="ml-[16px] flex items-center border border-[#e5e7eb] rounded-[10px] overflow-hidden h-[42px]">
                  <div className="size-[42px] flex items-center justify-center border-r border-[#e5e7eb] bg-[#f1f9f4]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /></svg>
                  </div>
                  <div className="size-[42px] flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>
                  </div>
                </div>
              </div>

              {/* Kanban columns */}
              <div className="flex-1 overflow-hidden px-[28px] pb-[8px]">
                <div className="flex gap-[16px] h-full">
                  {board.map((col) => (
                    <div key={col.name} className="flex-1 min-w-0 bg-[#fafbfc] rounded-[14px] border border-[#eceff3] flex flex-col p-[14px]">
                      {/* Column header */}
                      <div className="flex items-center justify-between mb-[12px]">
                        <div className="flex items-center gap-[8px] min-w-0">
                          <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[15px] truncate">{col.name}</Typography>
                          <div className="flex items-center gap-[4px]">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>
                            <Typography className="text-[#64748b] text-[12px] font-['Geist:Medium']">{col.count}</Typography>
                          </div>
                        </div>
                        <div className="flex items-center gap-[8px] shrink-0">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="#94a3b8"><circle cx="5" cy="12" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="19" cy="12" r="1.6" /></svg>
                        </div>
                      </div>

                      {/* Search Contact input */}
                      <div className="h-[34px] rounded-[8px] border border-[#e5e7eb] bg-white flex items-center px-[10px] gap-[7px] mb-[12px]">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                        <span className="text-[#9ca3af] text-[12px]">Search Contact</span>
                      </div>

                      {/* Cards */}
                      <div className="flex flex-col gap-[10px] overflow-hidden">
                        {col.cards.map((cd, ci) => (
                          <div key={ci} className="bg-white rounded-[12px] border border-[#eceff3] p-[12px]">
                            {/* Row 1: checkbox + avatar + name/phone + score pill */}
                            <div className="flex items-start justify-between gap-[6px]">
                              <div className="flex items-center gap-[8px] min-w-0">
                                <div className="size-[14px] rounded-[4px] border-2 border-[#cbd5e1] shrink-0" />
                                <div className="size-[28px] rounded-full flex items-center justify-center font-['Geist:SemiBold'] font-semibold text-[11px] shrink-0" style={{ background: cd.avbg, color: cd.avc }}>{cd.av}</div>
                                <div className="min-w-0">
                                  <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[13px] truncate">{cd.n}</Typography>
                                  <Typography className="font-['Courier_Prime'] text-[#94a3b8] text-[10.5px] truncate">{cd.ph}</Typography>
                                </div>
                              </div>
                              <div className={`inline-flex items-center gap-[3px] rounded-full px-[6px] py-[2px] shrink-0 ${scoreCls(cd.scoreType)}`}>
                                {scoreIcon(cd.scoreType)}
                                <span className="text-[10.5px] font-['Geist:SemiBold'] font-semibold">{cd.score}</span>
                              </div>
                            </div>

                            {/* Row 2: tag + Lead indicator */}
                            <div className="flex items-center justify-between gap-[8px] mt-[10px]">
                              {cd.tag ? (
                                <span className={`rounded-[6px] px-[8px] py-[3px] text-[10.5px] font-['Geist:Medium'] font-medium ${tagCls(cd.tagColor)}`}>{cd.tag}</span>
                              ) : <span />}
                              <div className="flex items-center gap-[4px]">
                                <span className="size-[6px] rounded-full bg-[#94a3b8]" />
                                <Typography className="text-[#64748b] text-[11px]">Lead</Typography>
                              </div>
                            </div>

                            {/* Row 3: Unassigned + timestamp */}
                            <div className="flex items-center justify-between gap-[8px] mt-[10px] pt-[10px] border-t border-[#f1f3f6]">
                              <div className="flex items-center gap-[6px]">
                                <div className="size-[18px] rounded-full bg-[#f1f5f9] flex items-center justify-center">
                                  <span className="text-[#94a3b8] text-[10px] leading-none">—</span>
                                </div>
                                <Typography className="text-[#64748b] text-[11px]">Unassigned</Typography>
                              </div>
                              <Typography className="text-[#94a3b8] text-[11px]">{cd.upd}</Typography>
                            </div>
                          </div>
                        ))}

                        {/* Peek card (partially visible next-in-column preview) */}
                        <div className="bg-white rounded-[12px] border border-[#eceff3] p-[12px]">
                          <div className="flex items-start justify-between gap-[6px]">
                            <div className="flex items-center gap-[8px] min-w-0">
                              <div className="size-[14px] rounded-[4px] border-2 border-[#cbd5e1] shrink-0" />
                              <div className="size-[28px] rounded-full flex items-center justify-center font-['Geist:SemiBold'] font-semibold text-[11px] shrink-0" style={{ background: col.peek.avbg, color: col.peek.avc }}>{col.peek.av}</div>
                              <div className="min-w-0">
                                <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[13px] truncate">{col.peek.n}</Typography>
                                <Typography className="font-['Courier_Prime'] text-[#94a3b8] text-[10.5px] truncate">{col.peek.ph}</Typography>
                              </div>
                            </div>
                            <div className={`inline-flex items-center gap-[3px] rounded-full px-[6px] py-[2px] shrink-0 ${scoreCls(col.peek.scoreType)}`}>
                              {scoreIcon(col.peek.scoreType)}
                              <span className="text-[10.5px] font-['Geist:SemiBold'] font-semibold">{col.peek.score}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating action button — bottom right */}
              {/* <div className="absolute bottom-[20px] right-[24px] size-[52px] rounded-full bg-[#06b349] flex items-center justify-center shadow-[0_10px_24px_-6px_rgba(6,179,73,0.5)]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </div> */}
            </div>
          )}

          {/* TAB 4 — Social Media Posts (original design + CRM polish: Content Insights + view toggle) */}
          {tab === 4 && (
            <div className="flex-1 flex flex-col min-h-0 bg-white">
              <div className="px-[28px] pt-[18px] flex items-center gap-[28px] border-b border-[#edf0f4]">
                {['All Platforms', 'Instagram', 'Facebook', 'LinkedIn', 'YouTube'].map((t, i) => (<div key={t} className={`pb-[14px] ${i === 0 ? 'border-b-2 border-[#06b349] -mb-px' : ''}`}><Typography className={`font-['Geist:Medium'] font-medium text-[14px] ${i === 0 ? 'text-[#06b349]' : 'text-[#64748b]'}`}>{t}</Typography></div>))}
              </div>
              <div className="flex-1 overflow-hidden px-[28px] py-[20px]">
                {/* Title + Content Insights (NEW · CRM-theme) + Create Post */}
                <div className="flex items-start justify-between mb-[18px]">
                  <div><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[26px] tracking-[-0.6px] leading-none">Social Media Posts</Typography><Typography className="font-['Geist:Regular'] text-[#94a3b8] text-[13px] mt-[6px]">Create, manage and publish content that drives conversations and revenue</Typography></div>
                  <div className="flex items-center gap-[12px]">
                    <div className="h-[42px] rounded-[10px] border border-[#a7e2c0] bg-[#f3fbf6] flex items-center px-[14px] gap-[8px]"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.9 5.8 5.8 1.9-5.8 1.9L12 18.4l-1.9-5.8L4.3 10.7l5.8-1.9z" /></svg><span className="text-[#06824f] text-[13.5px] font-['Geist:Medium'] font-medium">Content Insights</span></div>
                    <div className="h-[42px] rounded-[10px] bg-[#06b349] flex items-center px-[18px] gap-[8px]"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg><span className="text-white text-[14px] font-['Geist:SemiBold'] font-semibold">Create Post</span></div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-[16px] mb-[18px]">
                  {[
                    { v: '228', l: 'Total Posts', d: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /></svg> },
                    { v: '29', l: 'Reach', d: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" /><circle cx="12" cy="12" r="3" /></svg> },
                    { v: '108', l: 'Followers', d: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
                    { v: '12.7%', l: 'Engagement Rate', d: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg> },
                  ].map((s) => (
                    <div key={s.l} className="bg-white border border-[#e8ebef] rounded-[14px] p-[18px]">
                      <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[28px] tracking-[-0.8px] leading-none">{s.v}</Typography>
                      <div className="flex items-center justify-between mt-[12px]"><Typography className="font-['Geist:Regular'] text-[#64748b] text-[13px]">{s.l}</Typography>{s.d}</div>
                    </div>
                  ))}
                </div>
                {/* Search + Published dropdown + view toggle (NEW · CRM-theme) */}
                <div className="flex items-center mb-[18px]">
                  <div className="flex-1 h-[44px] rounded-[10px] border border-[#e5e7eb] flex items-center px-[14px] gap-[9px]"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg><span className="text-[#9ca3af] text-[14px]">Search Posts...</span></div>
                  <div className="ml-[12px] h-[44px] rounded-[10px] border border-[#e5e7eb] flex items-center px-[16px] gap-[24px]"><Typography className="text-[#475569] text-[13px] font-['Geist:Medium'] font-medium">Published</Typography><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg></div>
                  <div className="ml-[12px] flex items-center border border-[#e5e7eb] rounded-[10px] overflow-hidden h-[44px]">
                    <div className="size-[44px] flex items-center justify-center border-r border-[#e5e7eb] bg-[#f1f9f4]"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /></svg></div>
                    <div className="size-[44px] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg></div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-[20px]">
                  {[
                    { date: 'Jun 22, 2026', kind: 'empty', cap: 'What if every story you shared could inspire' },
                    { date: 'Jun 20, 2026', kind: 'sound', cap: "Experience sound like never before with SonicLab's" },
                    { date: 'Jun 19, 2026', kind: 'graphic', cap: 'Unleash your creativity with innovative graphic' },
                  ].map((p, i) => (
                    <div key={i} className="rounded-[14px] border border-[#e8ebef] bg-white overflow-hidden">
                      <div className="px-[14px] py-[12px] flex items-center justify-between">
                        <div className="flex items-center gap-[9px]"><div className="size-[30px] rounded-full bg-[#1877F2] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.5 2.9h-2.3v7A10 10 0 0 0 22 12z" /></svg></div><div><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[13.5px] leading-none">Facebook</Typography><Typography className="font-['Geist:Regular'] text-[#94a3b8] text-[11px] mt-[3px]">{p.date}</Typography></div></div>
                        <div className="flex items-center gap-[8px]"><span className="flex items-center gap-[5px] bg-[#e5f6e7] text-[#06824f] rounded-full px-[9px] py-[3px] text-[11px] font-['Geist:Medium']"><span className="size-[5px] rounded-full bg-[#06b349]" />Published</span><svg width="15" height="15" viewBox="0 0 24 24" fill="#cbd5e1"><circle cx="12" cy="5" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="12" cy="19" r="1.6" /></svg></div>
                      </div>
                      <div className="mx-[12px] h-[240px] rounded-[10px] overflow-hidden">
                        {p.kind === 'empty' && (
                          <div className="relative w-full h-full" style={{ background: 'linear-gradient(135deg, #0c221f 0%, #1a4a2e 50%, #06b349 130%)' }}>
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-[14px]">
                              <Typography className="font-['Geist:Medium'] text-white/50 text-[8px] tracking-[0.22em] mb-[6px]">@ WENEXT</Typography>
                              <Typography className="font-['Geist:SemiBold'] font-semibold text-white text-[28px] leading-[0.95] tracking-[-1px]">EVERY STORY</Typography>
                              <Typography className="font-['Geist:SemiBold'] font-semibold text-[32px] leading-[0.95] tracking-[-1px] mt-[2px]" style={{ color: '#a3f0c2' }}>INSPIRES</Typography>
                              <Typography className="font-['Geist:Medium'] text-white/60 text-[8px] tracking-[0.16em] mt-[8px]">SHARE. CONNECT. CONVERT.</Typography>
                            </div>
                            <div className="absolute bottom-0 inset-x-0 py-[6px] text-center" style={{ background: 'rgba(6,179,73,0.85)' }}><Typography className="font-['Geist:SemiBold'] font-semibold text-white text-[10px] tracking-[0.12em]">START YOUR FREE TRIAL</Typography></div>
                          </div>
                        )}
                        {p.kind === 'sound' && (
                          <div className="relative w-full h-full" style={{ background: 'radial-gradient(circle at 50% 38%, #20420f, #0a1407 75%)' }}>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-[14px]">
                              <Typography className="font-['Geist:Medium'] text-white/55 text-[8px] tracking-[0.22em] mb-[6px]">@ SONICLAB</Typography>
                              <Typography className="font-['Geist:SemiBold'] font-semibold italic text-white text-[30px] leading-[0.95] tracking-[-1px]">SOUND</Typography>
                              <Typography className="font-['Geist:SemiBold'] font-semibold italic text-[34px] leading-[0.95] tracking-[-1px]" style={{ color: '#a3e635' }}>UNLEASHED</Typography>
                              <Typography className="font-['Geist:Medium'] text-white/70 text-[8px] tracking-[0.16em] mt-[8px]">FEEL EVERY BEAT. LIVE EVERY MOMENT.</Typography>
                            </div>
                            <div className="absolute bottom-0 inset-x-0 py-[6px] text-center" style={{ background: '#a3e635' }}><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0a1408] text-[10px] tracking-[0.12em]">UPGRADE YOUR SOUND</Typography></div>
                          </div>
                        )}
                        {p.kind === 'graphic' && (
                          <div className="relative w-full h-full" style={{ background: 'linear-gradient(135deg, #1a1247 0%, #3a1a5e 45%, #0e2a4a 100%)' }}>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-[14px]">
                              <Typography className="font-['Geist:Medium'] text-white/50 text-[8px] tracking-[0.22em]">PIXELFUSION STUDIO</Typography>
                              <Typography className="font-['Geist:SemiBold'] font-semibold italic text-white text-[26px] leading-[1] mt-[6px]">GRAPHIC</Typography>
                              <Typography className="font-['Geist:SemiBold'] font-semibold italic text-[36px] leading-[0.95]" style={{ backgroundImage: 'linear-gradient(90deg,#ff5e9a,#ffd84d,#5ee0ff,#a78bfa)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>DESIGN</Typography>
                              <Typography className="font-['Geist:Medium'] text-white/70 text-[8px] tracking-[0.16em] mt-[8px]">CREATIVE SOLUTIONS THAT INSPIRE</Typography>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="px-[14px] py-[12px]"><Typography className="font-['Geist:Regular'] text-[#475569] text-[13px] truncate">{p.cap}</Typography></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
