import Typography from '@mui/material/Typography';
import { useRef, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import {
  CalendarCheck, BellRing, FileText, Sparkles, CreditCard, HeartPulse,
  MessageCircle, CalendarX, ClipboardList, Users, Stethoscope, Megaphone,
  Receipt, TrendingUp, Clock, type LucideIcon,
  ShoppingBag, ShoppingCart, Truck, Tag, RefreshCw, Star
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const imgImage27 = '/figma/imgImage27.png';
const imgIcon1 = '/figma/imgIcon1.svg';

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
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(26px)',
      transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
    }}>
      {children}
    </div>
  );
}

// ─── shared bits ──────────────────────────────────────────────────────────────
function Eyebrow({ label, light = false, center = false }: { label: string; light?: boolean; center?: boolean }) {
  return (
    <div className={`content-stretch flex gap-[10px] items-center mb-[16px] relative shrink-0 ${center ? 'justify-center' : ''}`}>
      <div className="bg-[#06b349] relative top-[0px] shrink-0 size-[10px]" />
      <Typography className={`[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Courier_Prime'] leading-[1.4] not-italic relative shrink-0 text-[18px] whitespace-nowrap ${light ? 'text-[#06b349]' : 'text-[#0c221f]'}`}>{label}</Typography>
    </div>
  );
}

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
          <svg className="size-[20px]" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
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

const grainStyle: React.CSSProperties = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
  opacity: 0.4,
  mixBlendMode: 'soft-light',
};
const PANEL = 'linear-gradient(155deg,#d9e3d7 0%,#e7ebe3 58%,#eef1ea 100%)';

function DummyImage({ tag, ratio = 'aspect-[3/3]' }: { tag: string; ratio?: string }) {
  return (
    <div className={`relative overflow-hidden ${ratio} flex items-center justify-center`} style={{ background: PANEL }}>
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

// ── DATA ────────────────────────────────────────────────────────────────────────
const STATS = [
  { v: '25%', l: 'Abandoned cart recovery rate' },
  { v: '8×', l: 'Higher ROI on WhatsApp broadcasts' },
  { v: '5–6h', l: 'Support team hours saved' },
  { v: '24/7', l: 'Always-on D2C sales AI' },
];

type Card = { icon: LucideIcon; t: string; d: string };

const CHALLENGES: Card[] = [
  { icon: ShoppingCart, t: 'High abandoned cart rates', d: 'Shoppers add items to cart but drop off before completing online checkout.' },
  { icon: MessageCircle, t: 'WISMO ("Where is my order?") support', d: 'Support agents spend 70% of their day answering tracking and shipping questions.' },
  { icon: RefreshCw, t: 'COD conversion & RTO losses', d: 'Cash-on-delivery orders have high return-to-origin (RTO) rates without pre-dispatch confirmation.' },
];

const CAPABILITIES: Card[] = [
  { icon: ShoppingBag, t: 'Abandoned cart recovery', d: 'Send automated WhatsApp reminders with discount codes to recover lost checkout carts.' },
  { icon: Truck, t: 'Automated order tracking', d: 'Send real-time order dispatch, tracking link, and out-for-delivery alerts on WhatsApp.' },
  { icon: RefreshCw, t: 'COD order confirmation', d: 'Verify cash-on-delivery orders via instant 1-click WhatsApp buttons before shipping.' },
  { icon: Sparkles, t: 'AI shopping assistant', d: 'Recommends products, answers sizing/stock questions, and handles cross-sells 24/7.' },
  { icon: CreditCard, t: 'In-chat checkout & payment links', d: 'Allow customers to complete payment via UPI, cards or wallets directly inside WhatsApp.' },
  { icon: Star, t: 'Review & re-order automation', d: 'Collect photo reviews post-delivery and trigger automated repeat order reminders.' },
];

const HIGHLIGHTS = [
  {
    tag: 'Cart Recovery & In-Chat Sales',
    title: 'Turn abandoned carts into completed orders on WhatsApp',
    body: 'Reach shoppers on their preferred channel. Send automated WhatsApp cart recovery messages with 1-click payment links and limited-time coupons.',
    points: ['Automated cart recovery nudges within 15 mins', 'Embedded UPI payment links for 1-tap checkout', 'Dynamic product image and price personalization'],
  },
  {
    tag: 'Post-Purchase & RTO Reduction',
    title: 'Cut support tickets and lower Cash-on-Delivery RTO',
    body: 'Automate order tracking updates, COD confirmations, and post-purchase review requests to build brand trust and reduce returns.',
    points: ['Automated COD order verification buttons', 'Live shipping & delivery tracking notifications', 'Automated photo review & UGC collection'],
  },
];

const TESTIMONIALS = [
  { q: 'We recovered 28% of abandoned carts in our first month with WeNext. Our revenue grew significantly.', c: 'UrbanFit Attire', r: 'D2C Apparel Brand' },
  { q: 'COD confirmation via WhatsApp reduced our Return to Origin (RTO) rate from 22% down to 8%.', c: 'GlowSkin Organics', r: 'Beauty & Skincare' },
  { q: 'Order status queries disappeared from our support inbox — WhatsApp handles 90% of tracking questions automatically.', c: 'NutraBoost', r: 'Health & Supplements' },
];

const FAQS = [
  { q: 'How does WeNext connect with Shopify or WooCommerce?', a: 'WeNext offers 1-click integration with Shopify, WooCommerce, Magento and custom web stores to sync products, carts, and order status automatically.' },
  { q: 'How does WhatsApp Abandoned Cart recovery work?', a: 'When a customer leaves checkout, WeNext triggers automated WhatsApp messages with product images, discount codes, and direct checkout buttons.' },
  { q: 'Can we reduce Cash-on-Delivery (COD) RTO losses?', a: 'Yes. WeNext sends interactive COD verification buttons asking buyers to confirm or convert to prepaid before dispatching orders.' },
  { q: 'Is it possible to send bulk promotional broadcasts?', a: 'Yes. You can send targeted promotional WhatsApp campaign broadcasts for new product launches, flash sales, and holiday offers.' },
  { q: 'Can customer support agents reply from the same dashboard?', a: 'Yes. Multiple customer support agents can collaborate from a unified team inbox with order history and tracking details side-by-side.' },
];

const BENEFITS: { icon: LucideIcon; t: string; c: string; d: string; items: string[] }[] = [
  { icon: Users, t: 'E-Commerce Growth & Sales', c: '#0a8f5a', d: 'Drive higher conversion rates and AOV.', items: ['Automated abandoned cart recovery nudges', 'Interactive WhatsApp product catalog browsing', 'In-chat instant UPI checkout'] },
  { icon: Stethoscope, t: 'Customer Support & Logistics', c: '#3f6cab', d: 'Deflect WISMO tickets and automate tracking.', items: ['Automated order status & tracking alerts', 'Instant exchange and return request intake', '24/7 AI shopping assistant support'] },
  { icon: Megaphone, t: 'Performance Marketing', c: '#7c5bd6', d: 'Broadcast high-converting WhatsApp campaigns.', items: ['Retarget past buyers with new launches', 'Segment buyers by order history & lifetime value', 'Run Click-to-WhatsApp ad campaigns'] },
  { icon: Receipt, t: 'Finance & Fulfillment', c: '#c98a3a', d: 'Lower COD returns and verify orders fast.', items: ['COD order confirmation via 1-click buttons', 'Prepaid conversion discount nudges', 'Digital tax invoice & receipt delivery'] },
];

export default function ECommerce() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-[#f8f5ec] relative size-full min-h-screen flex flex-col overflow-x-clip">
      <Header />

      {/* HERO */}
      <div className="bg-[#092511] shadow-[0_0_0_100vmax_#092511] [clip-path:inset(0_-100vmax)] shrink-0 w-full">
        <div className="container mx-auto border-x border-[rgba(255,255,255,0.08)] px-4 xl:px-[75px] py-[90px] lg:py-[100px] flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
            <img alt="" className="size-full object-cover" src={imgImage27} />
          </div>
          <div className="absolute -top-[120px] left-1/2 -translate-x-1/2 size-[420px] bg-[#06b349] opacity-[0.14] blur-[110px] rounded-full pointer-events-none" />

          <Eyebrow label="E-Commerce & D2C Solution" light center />

          <Typography component="h1" className="font-['Geist:SemiBold'] font-semibold leading-[1.14] text-white text-[44px] md:text-[60px] tracking-[-2px] max-w-[840px] mb-[20px] relative">
            WhatsApp Cart Recovery,<br />Order Tracking & <span className="text-[#25d366]">D2C Growth</span>
          </Typography>

          <Typography className="font-['Geist:Regular'] text-[#a0b8a8] text-[18px] md:text-[20px] max-w-[660px] leading-[1.6] mb-[40px] relative">
            Scale your online store with WhatsApp — recover abandoned carts, cut COD returns, send automated order updates and drive repeat sales with AI.
          </Typography>

          <div className="flex flex-wrap gap-[16px] items-center justify-center relative">
            <PrimaryButton label="Book an E-Commerce Demo" />
            <GhostButton label="Get Started Free" dark />
          </div>
        </div>
      </div>

      {/* STATS BAND */}
      <div className="container mx-auto border-x border-b border-[#e0dac6]">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#e0dac6]">
          {STATS.map((s) => (
            <Reveal key={s.l} className="px-[24px] py-[36px] flex flex-col items-center text-center">
              <Typography className="font-['Geist:SemiBold'] font-semibold text-[#06b349] text-[44px] tracking-[-1.5px] leading-none">{s.v}</Typography>
              <Typography className="font-['Geist:Regular'] text-[#60584c] text-[14px] mt-[10px] leading-[1.4] max-w-[170px]">{s.l}</Typography>
            </Reveal>
          ))}
        </div>
      </div>

      {/* TRUST STRIP */}
      <div className="container mx-auto border-x border-b border-[#e0dac6]">
        <div className="px-4 xl:px-[56px] py-[36px] flex flex-col items-center gap-[20px]">
          <Typography className="font-['Courier_Prime'] text-[#8a938e] text-[12.5px] uppercase tracking-[0.18em]">Trusted by fast-growing D2C brands</Typography>
          <div className="flex flex-wrap items-center justify-center gap-x-[44px] gap-y-[18px]">
            {['UrbanFit Attire', 'GlowSkin Organics', 'NutraBoost', 'Luxe Living', 'Aura Threads'].map((n) => (
              <Typography key={n} className="font-['Geist:SemiBold'] font-semibold text-[#9aa39c] text-[19px] tracking-[-0.4px] hover:text-[#0c221f] transition-colors">{n}</Typography>
            ))}
          </div>
        </div>
      </div>

      {/* THE PROBLEM */}
      <div className="container mx-auto border-x border-[#e0dac6]">
        <div className="px-4 xl:px-[56px] py-[56px] pb-[36px]">
          <Eyebrow label="The Problem" />
          <Typography component="h2" className="font-['Geist:SemiBold'] font-semibold text-[38px] text-[#0c221f] tracking-[-1.2px] leading-[1.14] max-w-[600px]">
            What’s quietly eating into your online store margins
          </Typography>
          <Typography className="font-['Geist:Regular'] text-[#60584c] text-[17px] max-w-[560px] leading-[1.55] mt-[14px]">
            Three major e-commerce profit drains eat your ad spend — WeNext eliminates all three.
          </Typography>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-[#e0dac6]">
          {CHALLENGES.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.t} className="border-r border-b border-[#e0dac6] p-[28px] group hover: transition-colors duration-200" delay={(i % 3) * 0.05}>
                <div className="size-[46px] group-hover:scale-105 transition-transform">
                  <Icon size={21} strokeWidth={1.9} color="#06b349" />
                </div>
                <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[17px] tracking-[-0.3px] mb-[8px]">{c.t}</Typography>
                <Typography className="font-['Geist:Regular'] text-[#60584c] text-[14px] leading-[1.55]">{c.d}</Typography>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* CAPABILITIES */}
      <div className="container mx-auto border-x border-[#e0dac6]">
        <div className="px-4 xl:px-[56px] py-[56px] pb-[36px]">
          <Eyebrow label="Solutions" />
          <Typography component="h2" className="font-['Geist:SemiBold'] font-semibold text-[38px] text-[#0c221f] tracking-[-1.2px] leading-[1.14] max-w-[600px]">
            Built specifically for D2C & e-commerce brands
          </Typography>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-[#e0dac6]">
          {CAPABILITIES.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.t} className="border-r border-b border-[#e0dac6] p-[28px]" delay={(i % 3) * 0.05}>
                <div className="size-[42px] rounded-[8px] bg-[#eef6f0] flex items-center justify-center mb-[18px]">
                  <Icon size={20} strokeWidth={2} color="#06b349" />
                </div>
                <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[18px] tracking-[-0.3px] mb-[8px]">{c.t}</Typography>
                <Typography className="font-['Geist:Regular'] text-[#60584c] text-[14.5px] leading-[1.55]">{c.d}</Typography>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* HIGHLIGHT FEATURES */}
      <div className="container mx-auto border-x border-b border-[#e0dac6]">
        <div className="px-4 xl:px-[56px] py-[70px] flex flex-col gap-[90px]">
          {HIGHLIGHTS.map((f, i) => {
            const rev = i % 2 === 1;
            return (
              <Reveal key={f.title}>
                <div className="grid lg:grid-cols-2 gap-[44px] lg:gap-[70px] items-center">
                  <div className={rev ? 'lg:order-2' : ''}>
                    <DummyImage tag={f.tag} ratio="aspect-[4/3]" />
                  </div>
                  <div className={rev ? 'lg:order-1' : ''}>
                    <Typography className="font-['Courier_Prime'] text-[#06b349] text-[13.5px] uppercase tracking-[0.16em] mb-[12px]">{f.tag}</Typography>
                    <Typography component="h3" className="font-['Geist:SemiBold'] font-semibold text-[32px] text-[#0c221f] tracking-[-1px] leading-[1.18]">{f.title}</Typography>
                    <Typography className="font-['Geist:Regular'] text-[#60584c] text-[16px] leading-[1.6] mt-[16px] max-w-[500px]">{f.body}</Typography>
                    <ul className="flex flex-col gap-[12px] mt-[26px]">
                      {f.points.map((p) => (
                        <li key={p} className="flex items-start gap-[11px]">
                          <CircleCheck />
                          <span className="font-['Geist:Regular'] text-[#3a4540] text-[15px] leading-[1.5]">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* TEAM BENEFITS */}
      <div className="container mx-auto border-x border-b border-[#e0dac6]">
        <div className="px-4 xl:px-[56px] py-[64px]">
          <div className="max-w-[600px] mb-[40px]">
            <Eyebrow label="For every team" />
            <Typography component="h2" className="font-['Geist:SemiBold'] font-semibold text-[42px] text-[#0c221f] tracking-[-1.4px] leading-[1.14]">
              How your whole e-commerce team benefits
            </Typography>
            <Typography className="font-['Geist:Regular'] text-[#60584c] text-[17px] leading-[1.55] mt-[14px]">
              One shared WhatsApp workspace — marketing, support, logistics and finance working together in sync.
            </Typography>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {BENEFITS.map((b, i) => {
              const Icon = b.icon;
              return (
                <Reveal key={b.t} delay={(i % 2) * 0.06}>
                  <div className={`h-full border border-[#e0dac6] ${i < 2 ? 'md:border-b-0' : ''} ${i === 0 || i === 2 ? 'md:border-r-0' : ''} p-[28px] hover:shadow-[0_22px_48px_-30px_rgba(11,31,26,0.3)] hover:border-[#d3ccb8] transition-all duration-300`}>
                    <div className="flex items-start gap-[14px] mb-[20px]">
                      <span className="size-[48px] flex items-center justify-center shrink-0" style={{ background: `${b.c}14` }}><Icon size={23} strokeWidth={1.9} color={b.c} /></span>
                      <div className="pt-[3px]">
                        <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[19px] tracking-[-0.4px] leading-[1.2]">{b.t}</Typography>
                        <Typography className="font-['Geist:Regular'] text-[#8a938e] text-[13.5px] mt-[4px] leading-[1.4]">{b.d}</Typography>
                      </div>
                    </div>
                    <div className="h-px bg-[#eee9dc] mb-[18px]" />
                    <ul className="flex flex-col gap-[12px]">
                      {b.items.map((it) => (
                        <li key={it} className="flex items-start gap-[11px]">
                          <CircleCheck />
                          <span className="font-['Geist:Regular'] text-[#3a4540] text-[15px] leading-[1.5]">{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>

      {/* FAQ ACCORDION — Homepage Style */}
      <div className="border-[#e0dac6] border-b border-solid content-stretch flex flex-col items-center justify-center overflow-clip container mx-auto relative shrink-0 w-full">
        <div className="border-[#e0dac6] border-l border-r border-solid relative shrink-0 w-full">
          <div className="bg-clip-padding border-[transparent] border-l border-r border-solid content-stretch flex flex-col items-start justify-center px-4 xl:px-[50px] py-[40px] relative size-full">
            <div className="content-stretch flex flex-col lg:flex-row gap-[40px] lg:gap-[80px] items-start relative shrink-0 w-full">
              {/* Left Heading */}
              <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full lg:w-[380px]">
                <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0">
                  <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
                    <div className="bg-[#06b349] relative shrink-0 size-[10px]" />
                    <Typography className="font-['Courier_Prime:Regular'] leading-[1.4] relative shrink-0 text-[#0c221f] text-[18px] text-center whitespace-nowrap">
                      Faq’s
                    </Typography>
                  </div>
                  <div className="font-['Geist:SemiBold'] font-semibold relative shrink-0 text-[#0c221f] text-[36px] lg:text-[42px] tracking-[-1px]">
                    <Typography className="leading-[1.3] text-[#0c221f] text-[36px] lg:text-[42px] font-['Geist:SemiBold'] font-semibold">Questions D2C brands ask</Typography>
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
