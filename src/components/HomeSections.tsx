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
  const title = ['Unified Inbox', 'AI Agents & Assistants', 'Campaigns', 'CRM', 'Social Media Posts'][tab];

  const convos = [
    { i: 'P', bg: '#d8f3e3', c: '#0a8f5a', n: 'Prathik', prev: 'Hello', t: '4d ago', sel: true },
    { i: 'A', bg: '#fde2e8', c: '#d9577e', n: 'Arjun Kumar', prev: 'Template message', t: '05/06/2026' },
    { i: 'S', bg: '#fde2e8', c: '#d9577e', n: 'Sarika Reddy', prev: 'I would like to know more about your products', t: '2m ago' },
    { i: 'Y', bg: '#dbeafe', c: '#3f6cab', n: 'Yashwanth Mallam', prev: 'Hey AI', t: '1d ago' },
    { i: 'K', bg: '#fde2e8', c: '#d9577e', n: 'Jeevana Komminni', badge: 'KV', prev: 'Hello Wenext', t: '01/06/2026' },
    { i: 'F', bg: '#fde2e8', c: '#d9577e', n: 'Shiva', prev: 'I want to know more about your products', t: '1h ago' },
    { i: 'F', bg: '#d8f3e3', c: '#0a8f5a', n: 'Ravi Kumar', prev: 'No messages yet', t: '2d ago' },
    { i: 'Y', bg: '#dbeafe', c: '#3f6cab', n: 'Yashwanth Mallam', prev: 'No messages yet', t: '3d ago' },
  ];
  const agents = [{ n: 'Gen', d: 'Jun 12, 2026' }, { n: 'asd', d: 'Jun 23, 2026' }, { n: 'asd', d: 'Jun 23, 2026' }, { n: 'asdfd', d: 'Jun 20, 2026' }, { n: 'asdfghjkl', d: 'Jun 13, 2026' }, { n: 'asffs', d: 'Jun 23, 2026' }, { n: 'demo', d: 'Mar 27, 2026' }, { n: 'erthrdg', d: 'Jun 19, 2026' }];
  const campaigns = [
    { n: 'new01', st: 'Completed', d: 'Sent Jun 1, 2026' }, { n: 'Campaign for thethis tag', st: 'Completed', d: 'Sent Jun 1, 2026' }, { n: 'X', st: 'Completed', d: 'Sent May 29, 2026' },
    { n: 'you', st: 'Failed', d: 'Created May 29, 2…' }, { n: 'thehthingss', st: 'Failed', d: 'Created May 29, 2…' }, { n: 'thehthing', st: 'Failed', d: 'Created May 29, 2…' },
    { n: 'thethis', st: 'Failed', d: 'Created May 29, 2…' }, { n: 'thethethis', st: 'Completed', d: 'Sent May 28, 2026' }, { n: 'thethe', st: 'Completed', d: 'Sent May 28, 2026' },
  ];
  const board = [
    {
      name: 'In Conversation', count: '42', cards: [
        { n: 'uma', ph: '+919876543210', av: 'U', avbg: '#fde2e8', avc: '#d9577e', upd: '29 Jun 2026', src: '-', agent: 'Not Assigned', tags: [{ t: 'Marketing Limit', c: 'green' }] },
        { n: 'wsd', ph: '+919876543210', av: 'W', avbg: '#fde2e8', avc: '#d9577e', upd: '24 Jun 2026', src: 'Lead', agent: 'Not Assigned', tags: [{ t: 'Valid', c: 'blue' }, { t: '+2', c: 'grey' }] },
      ], peek: { n: 'hussain', av: 'H', avbg: '#fde2e8', avc: '#d9577e' }
    },
    {
      name: 'Proposal', count: '11', cards: [
        { n: 'manish@photonxtech.com', ph: '+41012154466601', av: 'M', avbg: '#d8f3e3', avc: '#0a8f5a', upd: '23 Jun 2026', src: '-', agent: 'Not Assigned', tags: [{ t: 'Shopify', c: 'green' }] },
        { n: 'Raghavendra', ph: '+919176543214', av: 'R', avbg: '#fde2e8', avc: '#d9577e', upd: '23 Jun 2026', src: '-', agent: 'Not Assigned', tags: [] },
      ], peek: { n: 'google test1', av: 'G', avbg: '#d8f3e3', avc: '#0a8f5a' }
    },
    {
      name: 'Prospects & Leads', count: '4,305', cards: [
        { n: 'sruthi', ph: '+919876543210', av: 'S', avbg: '#d8f3e3', avc: '#0a8f5a', upd: '30 Jun 2026', src: 'Lead', agent: 'Not Assigned', tags: [{ t: 'Marketing Limit', c: 'green' }] },
        { n: 'John Smith', ph: '+555555', av: 'J', avbg: '#fde2e8', avc: '#d9577e', upd: '30 Jun 2026', src: '-', agent: 'Not Assigned', tags: [{ t: 'Shopify', c: 'green' }] },
      ], peek: { n: 'google test1', av: 'G', avbg: '#d8f3e3', avc: '#0a8f5a' }
    },
    {
      name: 'Qualified', count: '8', cards: [
        { n: 'meera', ph: '+919176543214', av: 'M', avbg: '#dbeafe', avc: '#3f6cab', upd: '28 Jun 2026', src: 'Lead', agent: 'Not Assigned', tags: [{ t: 'Valid', c: 'blue' }] },
        { n: 'arjun', ph: '+919176543214', av: 'A', avbg: '#fde2e8', avc: '#d9577e', upd: '27 Jun 2026', src: '-', agent: 'Not Assigned', tags: [{ t: 'Shopify', c: 'green' }] },
      ], peek: { n: 'test user', av: 'T', avbg: '#d8f3e3', avc: '#0a8f5a' }
    },
  ];
  const tagCls = (c: string) => c === 'green' ? 'bg-[#e7f6ee] text-[#06824f]' : c === 'blue' ? 'bg-[#e7f0fe] text-[#3f6cab]' : 'bg-[#eceff3] text-[#64748b]';

  return (
    <div className="absolute inset-0 bg-[#f5f7f9] rounded-[12px] overflow-hidden flex flex-col text-left">
      {/* TOP BAR */}
      <div className="h-[60px] bg-white border-b border-[#edf0f4] flex items-center shrink-0">
        <div className="w-[238px] flex items-center justify-between px-[18px] shrink-0">
          <div className="flex items-center gap-[9px]"><div className="size-[28px] rounded-[8px] bg-[#06b349] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></div><span className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[19px] tracking-[-0.5px]">wenext</span></div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="11 17 6 12 11 7" /><polyline points="18 17 13 12 18 7" /></svg>
        </div>
        <div className="flex-1 flex items-center justify-between px-[20px]">
          <div className="w-[420px] h-[40px] rounded-[12px] border border-[#e5e7eb] bg-[#f8fafc] flex items-center px-[14px] gap-[9px]"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg><span className="text-[#9ca3af] text-[14px] flex-1">Search anything...</span><span className="bg-white border border-[#e5e7eb] rounded-[6px] px-[7px] py-[2px] font-['Courier_Prime'] text-[#9ca3af] text-[11px]">⌘ K</span></div>
          <div className="flex items-center gap-[16px]">
            <div className="h-[40px] rounded-[10px] px-[16px] flex items-center gap-[8px]" style={{ background: 'linear-gradient(135deg,#0aa25a,#16c46f)' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" /></svg><span className="text-white text-[14px] font-['Geist:SemiBold'] font-semibold">NEXA AI</span></div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
            <div className="relative"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg><span className="absolute -top-[1px] -right-[1px] size-[8px] rounded-full bg-[#ef4444] border-2 border-white" /></div>
            <div className="flex items-center gap-[10px]"><div className="size-[40px] rounded-[10px] bg-[#eceff3] flex items-center justify-center font-['Geist:SemiBold'] font-semibold text-[#64748b] text-[14px]">MK</div><div className="leading-none"><div className="flex items-center gap-[4px]"><span className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[14px]">Manish Kumar</span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg></div><span className="font-['Courier_Prime'] text-[#9ca3af] text-[12px]">+91 80196 72323</span></div></div>
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
              <div className="flex items-center gap-[6px] mb-[8px]"><Typography className="font-['Geist:SemiBold'] font-semibold text-white text-[12px] tracking-[0.06em]">ENTERPRISE</Typography><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" opacity="0.8"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg></div>
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
                  <Typography className="font-['Geist:Medium'] font-medium text-[#64748b] text-[13px] pb-[11px]">Unread <span className="text-[#06b349]">12</span></Typography>
                  <Typography className="font-['Geist:Medium'] font-medium text-[#64748b] text-[13px] pb-[11px]">Assigned to agents <span className="text-[#0c221f]">27</span></Typography>
                </div>
                <div className="px-[14px] py-[12px] flex gap-[8px]">
                  <div className="flex-1 h-[40px] rounded-[10px] border border-[#e5e7eb] flex items-center px-[12px] gap-[8px]"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg><span className="text-[#9ca3af] text-[13px]">Search conversation...</span></div>
                  <div className="size-[40px] rounded-[10px] border border-[#e5e7eb] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="6" x2="20" y2="6" /><line x1="7" y1="12" x2="17" y2="12" /><line x1="10" y1="18" x2="14" y2="18" /></svg></div>
                </div>
                <div className="flex-1 overflow-hidden">
                  {convos.map((r, idx) => (
                    <div key={idx} className={`px-[14px] py-[12px] flex items-start gap-[11px] border-b border-[#f6f7f9] ${r.sel ? 'bg-[#f5f7f9]' : ''}`}>
                      <div className="size-[42px] rounded-full flex items-center justify-center font-['Geist:SemiBold'] font-semibold text-[13px] shrink-0" style={{ background: r.bg, color: r.c }}>{r.i}</div>
                      <div className="flex-1 min-w-0 pt-[1px]">
                        <div className="flex items-center justify-between"><div className="flex items-center gap-[5px] min-w-0"><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[14px] truncate">{r.n}</Typography>{r.badge && <span className="bg-[#dbeafe] text-[#3f6cab] rounded-[4px] px-[4px] text-[9px] font-['Geist:SemiBold'] shrink-0">{r.badge}</span>}</div><svg width="15" height="15" viewBox="0 0 24 24" fill="#cbd5e1" className="shrink-0"><circle cx="5" cy="12" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="19" cy="12" r="1.6" /></svg></div>
                        <div className="flex items-center justify-between gap-[8px] mt-[3px]"><Typography className="font-['Geist:Regular'] text-[#94a3b8] text-[12px] truncate">{r.prev}</Typography>{r.t && <Typography className="font-['Geist:Regular'] text-[#9ca3af] text-[11px] shrink-0">{r.t}</Typography>}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 bg-white rounded-[14px] border border-[#eceff3] flex flex-col min-w-0 overflow-hidden">
                <div className="px-[20px] py-[14px] flex items-center justify-between border-b border-[#f1f3f6]">
                  <div className="flex items-center gap-[12px]"><div className="size-[44px] rounded-full bg-[#d8f3e3] flex items-center justify-center font-['Geist:SemiBold'] font-semibold text-[#0a8f5a] text-[15px]">P</div><div><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[16px] leading-none">Prathik</Typography><Typography className="font-['Geist:Regular'] text-[#94a3b8] text-[12px] mt-[5px]">+919876567801</Typography></div></div>
                  <div className="flex items-center gap-[10px]">
                    <div className="flex items-center gap-[7px] border border-[#e5e7eb] rounded-[10px] px-[12px] py-[8px]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2"><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg><Typography className="text-[#475569] text-[13px] font-['Geist:Medium'] font-medium">Unassigned</Typography><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg></div>
                    <div className="flex items-center gap-[7px] border border-[#e5e7eb] rounded-[10px] px-[12px] py-[8px]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg><Typography className="text-[#475569] text-[13px] font-['Geist:Medium'] font-medium">Priority</Typography><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg></div>
                  </div>
                </div>
                {/* <div className="bg-[#fdecec] py-[9px] flex items-center justify-center gap-[8px]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg><Typography className="font-['Geist:Medium'] font-medium text-[#dc2626] text-[12.5px]">Outside 24h window · template messages only</Typography></div> */}
                <div className="flex-1 overflow-hidden px-[24px] py-[18px] flex flex-col gap-[14px] justify-end" style={{ background: '#f5f7f9' }}>
                  {[{ side: 'out', t: '15:05' }, { side: 'in', t: '15:08' }, { side: 'out', t: '15:08' }, { side: 'in', t: '15:11' }, { side: 'out', t: '15:11' }, { side: 'in', t: '15:13' }].map((m, i) => m.side === 'in' ? (
                    <div key={i} className="self-start flex flex-col items-start gap-[3px]"><div className="bg-white rounded-[10px] rounded-tl-[3px] px-[16px] py-[10px] shadow-sm"><Typography className="text-[#0c221f] text-[13px]">Komminni</Typography></div><Typography className="font-['Geist:Regular'] text-[#9ca3af] text-[10px] pl-[2px]">{m.t}</Typography></div>
                  ) : (
                    <div key={i} className="self-end flex flex-col items-end gap-[3px] max-w-[55%]">
                      <div className="bg-[#dcf8e8] rounded-[12px] rounded-tr-[4px] overflow-hidden w-full">
                        {i > 0 && <div className="px-[14px] pt-[10px] pb-[8px]"><Typography className="text-[#0c221f] text-[13px]">Tap below to continue.</Typography></div>}
                        <div className={`flex items-center justify-center gap-[7px] py-[11px] ${i > 0 ? 'border-t border-[#bfe6cd]' : ''}`}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg><Typography className="font-['Geist:Medium'] font-medium text-[#06b349] text-[13px]">Open form</Typography></div>
                      </div>
                      <div className="flex items-center gap-[3px] pr-[2px]"><Typography className="font-['Geist:Regular'] text-[#9ca3af] text-[10px]">{m.t}</Typography>{wTicks}</div>
                    </div>
                  ))}
                </div>
                <div className="px-[20px] py-[14px] border-t border-[#f1f3f6] flex items-center justify-between bg-white">
                  <div className="flex items-start gap-[10px]"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" className="mt-[1px] shrink-0"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg><div><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[13.5px] leading-none">The 24-hour time window is completed</Typography><Typography className="font-['Geist:Regular'] text-[#94a3b8] text-[12px] mt-[5px]">Free-form replies are paused. Send an approved template to re-open the conversation.</Typography></div></div>
                  <div className="bg-[#06b349] rounded-[10px] px-[18px] py-[11px] shrink-0"><Typography className="text-white text-[13.5px] font-['Geist:SemiBold'] font-semibold">Send Template</Typography></div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 1 — AI Agents */}
          {tab === 1 && (
            <div className="flex-1 flex flex-col min-h-0 bg-[#fff]">
              <div className="px-[26px] pt-[18px] flex items-center gap-[30px] border-b border-[#edf0f4]">
                {['AI Agents', 'WhatsApp AI Agent', 'Voice Agents', 'Live Chat'].map((t, i) => (<div key={t} className={`pb-[14px] ${i === 0 ? 'border-b-2 border-[#06b349] -mb-px' : ''}`}><Typography className={`font-['Geist:Medium'] font-medium text-[14px] ${i === 0 ? 'text-[#06b349]' : 'text-[#64748b]'}`}>{t}</Typography></div>))}
              </div>
              <div className="px-[26px] py-[18px] flex items-center justify-between">
                <div className="w-[360px] h-[42px] rounded-[10px] border border-[#e5e7eb] bg-white flex items-center px-[14px] gap-[9px]"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg><span className="text-[#9ca3af] text-[14px]">Search agents...</span></div>
                <div className="h-[42px] rounded-[10px] bg-[#06b349] flex items-center px-[18px] gap-[8px]"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg><span className="text-white text-[14px] font-['Geist:SemiBold'] font-semibold">Create Agent</span></div>
              </div>
              <div className="flex-1 px-[26px] overflow-hidden">
                <div className="grid grid-cols-3 gap-[18px]">
                  {agents.map((a, i) => (
                    <div key={i} className="bg-white rounded-[14px] border border-[#e8ebef] p-[18px]">
                      <div className="flex items-start justify-between"><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[17px]">{a.n}</Typography><svg width="16" height="16" viewBox="0 0 24 24" fill="#cbd5e1"><circle cx="12" cy="5" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="12" cy="19" r="1.6" /></svg></div>
                      <span className="inline-block bg-[#eef1f4] text-[#64748b] rounded-[6px] px-[9px] py-[3px] text-[11px] font-['Geist:Medium'] font-medium mt-[10px]">General Agent</span>
                      <div className="flex items-center gap-[6px] mt-[12px]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg><Typography className="font-['Geist:Regular'] text-[#94a3b8] text-[12px]">{a.d}</Typography></div>
                      <div className="inline-flex items-center gap-[8px] bg-[#06b349] rounded-[8px] px-[16px] py-[9px] mt-[16px]"><Typography className="text-white text-[13px] font-['Geist:Medium'] font-medium">Configure</Typography><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-[26px] py-[14px] border-t border-[#edf0f4] flex items-center justify-between bg-white">
                <div className="flex items-center gap-[14px]"><Typography className="font-['Geist:Regular'] text-[#64748b] text-[12px]">Rows per page</Typography><div className="flex items-center gap-[6px] border border-[#e5e7eb] rounded-[7px] px-[10px] py-[5px]"><Typography className="text-[#0c221f] text-[12px]">8</Typography><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg></div><Typography className="font-['Geist:Regular'] text-[#64748b] text-[12px]">1 - 8 of 40</Typography></div>
                <div className="flex items-center gap-[6px]"><div className="size-[28px] rounded-[7px] border border-[#e5e7eb] flex items-center justify-center"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg></div>{['1', '2', '3', '…', '5'].map((p) => (<div key={p} className={`size-[28px] rounded-[7px] flex items-center justify-center text-[12px] font-['Geist:Medium'] ${p === '1' ? 'bg-[#06b349] text-white' : 'text-[#64748b]'}`}>{p}</div>))}<div className="size-[28px] rounded-[7px] border border-[#e5e7eb] flex items-center justify-center"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg></div></div>
              </div>
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
                  <div className="h-[42px] rounded-[10px] flex items-center px-[18px] gap-[8px]" style={{ background: 'linear-gradient(135deg,#0aa25a,#16c46f)' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg><span className="text-white text-[14px] font-['Geist:SemiBold'] font-semibold">New Campaign</span></div>
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

          {/* TAB 3 — CRM Lead Boards */}
          {tab === 3 && (
            <div className="flex-1 flex flex-col min-h-0 bg-white">
              <div className="px-[28px] pt-[18px] flex items-center gap-[30px] border-b border-[#edf0f4]">
                {['Lead Boards', 'Tickets', 'Tags'].map((t, i) => (<div key={t} className={`pb-[14px] ${i === 0 ? 'border-b-2 border-[#06b349] -mb-px' : ''}`}><Typography className={`font-['Geist:Medium'] font-medium text-[14px] ${i === 0 ? 'text-[#06b349]' : 'text-[#64748b]'}`}>{t}</Typography></div>))}
              </div>
              <div className="px-[28px] pt-[18px] flex items-start justify-between">
                <div><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[26px] tracking-[-0.6px] leading-none">Lead Boards</Typography><Typography className="font-['Geist:Regular'] text-[#94a3b8] text-[13px] mt-[6px]">Default Kanban board for managing leads</Typography></div>
                <div className="flex items-center gap-[12px]">
                  <div className="h-[40px] rounded-[10px] border border-[#a7e2c0] bg-[#f3fbf6] flex items-center px-[14px] gap-[8px]"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.9 5.8 5.8 1.9-5.8 1.9L12 18.4l-1.9-5.8L4.3 10.7l5.8-1.9z" /></svg><span className="text-[#06824f] text-[13.5px] font-['Geist:Medium'] font-medium">AI Lead Analysis</span></div>
                  <div className="h-[40px] rounded-[10px] bg-[#06b349] flex items-center px-[16px] gap-[8px]"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" y1="8" x2="19" y2="14" /><line x1="22" y1="11" x2="16" y2="11" /></svg><span className="text-white text-[13.5px] font-['Geist:SemiBold'] font-semibold">Add Leads</span></div>
                </div>
              </div>
              <div className="px-[28px] py-[16px] flex items-center justify-between">
                <div className="w-[420px] h-[42px] rounded-[10px] border border-[#e5e7eb] flex items-center px-[14px] gap-[9px]"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg><span className="text-[#9ca3af] text-[14px]">Search by name, phone or email...</span></div>
                <div className="flex items-center gap-[12px]">
                  <div className="h-[42px] rounded-[10px] border border-[#e5e7eb] flex items-center px-[14px] gap-[8px]"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg><Typography className="text-[#475569] text-[13.5px] font-['Geist:Medium'] font-medium">Filters</Typography></div>
                  <div className="flex items-center border border-[#e5e7eb] rounded-[10px] overflow-hidden h-[42px]"><div className="size-[42px] flex items-center justify-center border-r border-[#e5e7eb] bg-[#f1f9f4]"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /></svg></div><div className="size-[42px] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg></div></div>
                </div>
              </div>
              <div className="flex-1 overflow-hidden px-[28px] pb-[8px]">
                <div className="flex gap-[16px] h-full">
                  {board.map((col) => (
                    <div key={col.name} className="w-[300px] bg-[#fafbfc] rounded-[14px] border border-[#eceff3] flex flex-col shrink-0 p-[14px]">
                      <div className="flex items-center justify-between mb-[10px]">
                        <div className="flex items-center gap-[9px] min-w-0"><div className="size-[16px] rounded-[4px] border-2 border-[#cbd5e1]" /><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[15px] truncate">{col.name}</Typography></div>
                        <div className="flex items-center gap-[8px] shrink-0"><div className="flex items-center gap-[4px] bg-[#eef1f4] rounded-full px-[8px] py-[2px]"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2"><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg><Typography className="text-[#64748b] text-[11px] font-['Geist:Medium']">{col.count}</Typography></div><svg width="15" height="15" viewBox="0 0 24 24" fill="#cbd5e1"><circle cx="5" cy="12" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="19" cy="12" r="1.6" /></svg></div>
                      </div>
                      <div className="h-[34px] rounded-[8px] border border-[#e5e7eb] bg-white flex items-center px-[10px] gap-[7px] mb-[10px]"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg><span className="text-[#9ca3af] text-[12px]">Search Contact</span></div>
                      <div className="flex flex-col gap-[10px] overflow-hidden">
                        {col.cards.map((cd, ci) => (
                          <div key={ci} className="bg-white rounded-[12px] border border-[#eceff3] p-[12px]">
                            <div className="flex items-start justify-between">
                              <div className="flex items-center gap-[8px] min-w-0"><div className="size-[14px] rounded-[4px] border-2 border-[#cbd5e1] shrink-0" /><div className="size-[28px] rounded-full flex items-center justify-center font-['Geist:SemiBold'] font-semibold text-[11px] shrink-0" style={{ background: cd.avbg, color: cd.avc }}>{cd.av}</div><div className="min-w-0"><Typography className="font-['Geist:SemiBold'] font-semibold italic text-[#0c221f] text-[13px] truncate">{cd.n}</Typography><Typography className="font-['Courier_Prime'] text-[#94a3b8] text-[11px]">{cd.ph}</Typography></div></div>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="#cbd5e1" className="shrink-0"><circle cx="5" cy="12" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="19" cy="12" r="1.6" /></svg>
                            </div>
                            <div className="grid grid-cols-2 gap-[8px] mt-[10px]">
                              <div><Typography className="font-['Geist:Regular'] text-[#94a3b8] text-[10px]">Updated on</Typography><div className="flex items-center gap-[4px] mt-[2px]"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="3" y1="10" x2="21" y2="10" /></svg><Typography className="text-[#0c221f] text-[11px]">{cd.upd}</Typography></div></div>
                              <div><Typography className="font-['Geist:Regular'] text-[#94a3b8] text-[10px]">Source</Typography><div className="flex items-center gap-[4px] mt-[2px]"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg><Typography className="text-[#0c221f] text-[11px]">{cd.src}</Typography></div></div>
                            </div>
                            <div className="grid grid-cols-2 gap-[8px] mt-[10px]">
                              <div><Typography className="font-['Geist:Regular'] text-[#94a3b8] text-[10px]">Agent</Typography><div className="inline-flex items-center gap-[5px] border border-[#e5e7eb] rounded-[7px] px-[8px] py-[4px] mt-[3px]"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2"><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg><Typography className="text-[#475569] text-[10.5px]">{cd.agent}</Typography><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="3"><polyline points="6 9 12 15 18 9" /></svg></div></div>
                              <div><Typography className="font-['Geist:Regular'] text-[#94a3b8] text-[10px]">Tags</Typography><div className="flex items-center gap-[4px] mt-[3px]">{cd.tags.length ? cd.tags.map((tg) => (<span key={tg.t} className={`rounded-[5px] px-[6px] py-[2px] text-[10px] font-['Geist:Medium'] ${tagCls(tg.c)}`}>{tg.t}</span>)) : <Typography className="text-[#cbd5e1] text-[12px]">—</Typography>}</div></div>
                            </div>
                          </div>
                        ))}
                        <div className="bg-white rounded-[12px] border border-[#eceff3] p-[12px] flex items-center gap-[8px]"><div className="size-[14px] rounded-[4px] border-2 border-[#cbd5e1] shrink-0" /><div className="size-[28px] rounded-full flex items-center justify-center font-['Geist:SemiBold'] font-semibold text-[11px]" style={{ background: col.peek.avbg, color: col.peek.avc }}>{col.peek.av}</div><Typography className="font-['Geist:SemiBold'] font-semibold italic text-[#0c221f] text-[13px] truncate">{col.peek.n}</Typography></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4 — Social Media Posts */}
          {tab === 4 && (
            <div className="flex-1 flex flex-col min-h-0 bg-white">
              <div className="px-[28px] pt-[18px] flex items-center gap-[28px] border-b border-[#edf0f4]">
                {['All Platforms', 'Instagram', 'Facebook', 'LinkedIn', 'YouTube'].map((t, i) => (<div key={t} className={`pb-[14px] ${i === 0 ? 'border-b-2 border-[#06b349] -mb-px' : ''}`}><Typography className={`font-['Geist:Medium'] font-medium text-[14px] ${i === 0 ? 'text-[#06b349]' : 'text-[#64748b]'}`}>{t}</Typography></div>))}
              </div>
              <div className="flex-1 overflow-hidden px-[28px] py-[20px]">
                <div className="flex items-start justify-between mb-[18px]">
                  <div><Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[26px] tracking-[-0.6px] leading-none">Social Media Posts</Typography><Typography className="font-['Geist:Regular'] text-[#94a3b8] text-[13px] mt-[6px]">Create, manage and publish content that drives conversations and revenue</Typography></div>
                  <div className="h-[42px] rounded-[10px] bg-[#06b349] flex items-center px-[18px] gap-[8px]"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg><span className="text-white text-[14px] font-['Geist:SemiBold'] font-semibold">Create Post</span></div>
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
                <div className="flex items-center justify-between mb-[18px]">
                  <div className="w-[400px] h-[44px] rounded-[10px] border border-[#e5e7eb] flex items-center px-[14px] gap-[9px]"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg><span className="text-[#9ca3af] text-[14px]">Search Posts...</span></div>
                  <div className="h-[44px] rounded-[10px] border border-[#e5e7eb] flex items-center px-[16px] gap-[40px]"><Typography className="text-[#475569] text-[13px] font-['Geist:Medium'] font-medium">Published</Typography><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg></div>
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
                        {p.kind === 'empty' && <div className="w-full h-full bg-[#eef1f4] flex items-center justify-center"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#c2c9d2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="m21 15-5-5L5 21" /></svg></div>}
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
