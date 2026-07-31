import Typography from '@mui/material/Typography';
import { useRef, useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const imgImage27 = "/figma/imgImage27.png";

// ─── Animated Counter ─────────────────────────────────────────────────────────

function AnimatedCounter({
  target,
  decimals = 0,
  prefix = '',
  suffix = '',
  duration = 1800,
}: {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState('0');
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const animate = (now: number) => {
              const elapsed = now - start;
              const t = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - t, 4);
              const current = target * eased;
              setDisplay(current.toFixed(decimals));
              if (t < 1) requestAnimationFrame(animate);
              else setDisplay(target.toFixed(decimals));
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration, decimals]);

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}

// ─── In-view hook (triggers animations on scroll) ─────────────────────────────

function useInView<T extends HTMLElement = HTMLDivElement>(threshold = 0.25) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setInView(true); });
      },
      { threshold }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

// ─── Icon SVGs ────────────────────────────────────────────────────────────────

// const CheckIcon = () => (
//   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
//     <polyline points="20 6 9 17 4 12" />
//   </svg>
// );

// const ArrowRight = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M5 12h14M12 5l7 7-7 7" />
//   </svg>
// );

// Reusable section eyebrow (green square + Courier Prime label)
function Eyebrow({ label, light = false, center = false }: { label: string; light?: boolean; center?: boolean }) {
  return (
    <div className={`content-stretch flex gap-[10px] items-center mb-[16px] relative shrink-0 ${center ? 'justify-center' : ''}`}>
      <div className="bg-[#06b349] relative top-[-2px] shrink-0 size-[10px]" />
      <Typography className={`[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Courier_Prime'] leading-[1.4] not-italic relative shrink-0 text-[18px] whitespace-nowrap ${light ? 'text-[#06b349]' : 'text-[#0c221f]'}`}>
        {label}
      </Typography>
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const BRANDS = [
  'StyleCo', 'FitGlow', 'PureBites', 'HomeDecor Hub', 'UrbanWear',
  'NutriLife', 'Bloom & Co', 'TechBazaar', 'GreenLeaf', 'Lumina',
];

// Section 3 — channel benchmark leaderboard
const CHANNELS = [
  { name: 'WhatsApp', value: 98, metric: '98% open rate', trend: '+12%', up: true, color: '#25d366', rank: 1 },
  { name: 'Instagram DM', value: 64, metric: '64% open rate', trend: '+8%', up: true, color: '#DD2A7B', rank: 2 },
  { name: 'Facebook', value: 47, metric: '47% open rate', trend: '+5%', up: true, color: '#1877F2', rank: 3 },
  { name: 'Email', value: 21, metric: '21% open rate', trend: '-3%', up: false, color: '#b8b1a0', rank: 4 },
  { name: 'SMS', value: 19, metric: '19% open rate', trend: '-1%', up: false, color: '#b8b1a0', rank: 5 },
];

const COMPARISON_POINTS = [
  'See open, reply and conversion rates per channel',
  'Benchmark WhatsApp against email, SMS and social',
  'Spot your best-performing channel at a glance',
];

// Section 4 — live conversations dashboard
// const ANALYTICS_CHANNELS = [
//   { name: 'WhatsApp', count: '8,240', pct: 66, icon: imgWhatsApp, color: '#25d366' },
//   { name: 'Instagram', count: '2,910', pct: 23, icon: imgInstagram, color: '#DD2A7B' },
//   { name: 'Facebook', count: '1,252', pct: 11, icon: imgFacebook, color: '#1877F2' },
// ];

// const ANALYTICS_POINTS = [
//   'Every conversation, unified in one live inbox',
//   'Real-time volume across WhatsApp, Instagram & Facebook',
//   'Track response time, resolution and revenue',
// ];

// Section 5 — automation funnel
const WORKFLOW = [
  {
    step: '01', title: 'New Lead', desc: 'Customer messages you on any channel.', icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
    )
  },
  {
    step: '02', title: 'AI Qualifies', desc: 'The bot replies and tags intent in seconds.', icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v1a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="22" /></svg>
    )
  },
  {
    step: '03', title: 'Auto Follow-up', desc: 'Timed nudges and cart-recovery flows fire.', icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" /></svg>
    )
  },
  {
    step: '04', title: 'In-chat Payment', desc: 'A one-tap UPI link closes the sale.', icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
    )
  },
];

// const WORKFLOW_POINTS = [
//   'Pre-built templates for every funnel stage',
//   'No-code visual builder — live in minutes',
//   'Hands off to a human the moment it matters',
// ];

// Section 6 — testimonials
const ABOUT_TESTIMONIALS = [
  { quote: 'WeNext turned WhatsApp from a support headache into our #1 revenue channel. Qualified leads jumped 42% in 60 days.', name: 'Rahul Sharma', role: 'Founder', company: 'Growing D2C Brand', initials: 'RS', accent: '#06b349' },
  { quote: 'The AI replies in Hindi, English and Hinglish like our best agent. DM response times dropped to under 2 minutes.', name: 'Priya Nair', role: 'Operations Director', company: 'StyleCo', initials: 'PN', accent: '#1877F2' },
  { quote: 'Automated cart recovery flows recovered ₹38L in the first month — with literally zero manual effort from our team.', name: 'Vikram Malhotra', role: 'Co-Founder', company: 'FitGlow Nutrition', initials: 'VM', accent: '#DD2A7B' },
  { quote: 'One unified inbox for every channel. Our average resolution time dropped 50% and nothing slips through the cracks.', name: 'Ananya Sen', role: 'Head of CX', company: 'HomeDecor Hub', initials: 'AS', accent: '#8134AF' },
  { quote: 'Pre-purchase queries get answered 24/7. Conversion went up 3.5x and our acquisition cost fell by 28%.', name: 'Karthik Mehta', role: 'Marketing Director', company: 'PureBites', initials: 'KM', accent: '#F58529' },
  { quote: 'Setup took 15 minutes with no developer. Within a week we were running broadcasts and watching payments land live.', name: 'Sneha Reddy', role: 'Growth Lead', company: 'UrbanWear', initials: 'SR', accent: '#06b349' },
];

// Section 8 — capabilities bento
const INTEGRATIONS = [
  { name: 'Shopify', desc: 'Sync your catalog, orders and customers in real time.', },
  { name: 'Razorpay', desc: 'Collect payments with a tap, right inside the chat.', },
  { name: 'Zoho CRM', desc: 'Two-way contact and deal sync with your CRM.', },
];

// Section 10 — FAQ
const ABOUT_FAQS = [
  { q: 'Who builds and operates WeNext?', a: 'WeNext is built and operated by PhotonX Tech, a product-driven technology company specialising in SaaS communication automation and cloud-based CRM. The same team ships, supports, and secures the platform end to end.' },
  { q: 'Is WeNext an official WhatsApp partner?', a: 'Yes. WeNext is an official Meta Business Partner with direct WhatsApp Business API connectivity — no third-party proxies. That means higher throughput, lower latency, and full template management from one dashboard.' },
  { q: 'Where is my customer data stored?', a: 'Customer data is hosted on India-based servers with end-to-end encryption in transit and at rest. We are fully DPDP and GDPR compliant, enforce role-based access controls, and never sell or share your data with third parties.' },
  { q: 'How reliable is the platform at scale?', a: 'WeNext runs on distributed cloud infrastructure with horizontal auto-scaling and redundant data centres, backed by a 99.9% SLA. It handles millions of concurrent conversations — even during peak sale-day traffic — without dropped messages.' },
  { q: 'What kind of businesses use WeNext?', a: 'From early-stage D2C brands to enterprise teams across retail, fintech and services. The platform scales from 100 to 100,000+ conversations, so you grow on the same stack instead of migrating later.' },
  { q: 'How quickly can my team get started?', a: 'Most teams are live in under 15 minutes. Sign up, connect your Meta accounts via guided OAuth, train the AI on your catalog, and launch — no developer required and no credit card to start.' },
];

const PRESS = ['YourStory', 'Inc42', 'Economic Times', 'Entrackr'];

// Our Values
const VALUES = [
  {
    title: 'Customer-obsessed', desc: 'We build for the business on the other side of every chat — their growth is our scorecard.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>,
  },
  {
    title: 'Ship fast, iterate faster', desc: 'Weekly releases, a public changelog, and customer feedback wired straight into the roadmap.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
  },
  {
    title: 'Secure by default', desc: 'End-to-end encryption, India-hosted data, and DPDP + GDPR compliance — never an afterthought.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  },
  {
    title: 'Built to scale', desc: 'From your first 100 conversations to your ten-millionth, on the same reliable stack.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
  },
];

// Backed by PhotonX — credibility points
const PHOTONX_POINTS = [
  { k: '99.9%', v: 'SLA uptime', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg> },
  { k: 'Meta', v: 'Business Partner', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg> },
  { k: 'India', v: 'Hosted & compliant', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> },
  { k: '24/7', v: 'NOC monitoring', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg> },
];

// PhotonX company meta strip
const PHOTONX_META = [
  { k: 'Est.', v: '2021' },
  { k: 'HQ', v: 'India' },
  { k: 'Focus', v: 'SaaS · CRM' },
];

// Section 7 — premium stat cards
const NUMBER_STATS = [
  {
    target: 100, suffix: '+', label: 'Businesses served', trend: '+24 this quarter',
    spark: [4, 6, 5, 8, 7, 10, 9, 12],
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" /></svg>,
  },
  {
    target: 50, suffix: 'M+', label: 'Messages delivered', trend: '+3.2M / month',
    spark: [3, 4, 6, 5, 8, 9, 11, 13],
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
  },
  {
    target: 98, suffix: '%', label: 'Customer satisfaction', trend: 'Steady 12 mo',
    spark: [8, 9, 9, 10, 9, 11, 12, 12],
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01z" /></svg>,
  },
  {
    target: 15, prefix: '<', suffix: ' min', label: 'Avg. go-live time', trend: 'No developer',
    spark: [13, 11, 12, 9, 10, 7, 8, 6],
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>,
  },
];

// Mini sparkline renderer
function Sparkline({ points, color = '#06b349' }: { points: number[]; color?: string }) {
  const w = 96, h = 30, max = Math.max(...points), min = Math.min(...points);
  const range = max - min || 1;
  const step = w / (points.length - 1);
  const coords = points.map((p, i) => [i * step, h - ((p - min) / range) * (h - 4) - 2]);
  const d = coords.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');
  const area = `${d} L${w} ${h} L0 ${h} Z`;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none" className="overflow-visible">
      <path d={area} fill={color} fillOpacity="0.12" />
      <path d={d} stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={coords[coords.length - 1][0]} cy={coords[coords.length - 1][1]} r="2.6" fill={color} />
    </svg>
  );
}

// ─── Reusable CTA buttons ───────────────────────────────────────────────────

function PrimaryButton({ label = "Let's Talk", light = false }: { label?: string; light?: boolean }) {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=918977232350"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#06b349] hover:bg-[#05a043] active:scale-[0.98] transition-all duration-150 rounded-[8px] cursor-pointer overflow-hidden relative inline-flex"
    >
      <div className="flex gap-[10px] items-center pl-[20px] pr-[15px] py-[15px]">
        {light && (
          <div className="absolute inset-0 pointer-events-none">
            <img alt="" className="size-full object-cover opacity-20 mix-blend-color-burn" src={imgImage27} />
          </div>
        )}
        <Typography className="font-['Geist:Medium'] font-medium text-[17px] text-white whitespace-nowrap relative">{label}</Typography>
        <div className="size-[20px] relative shrink-0 text-white flex items-center justify-center">
          <svg className="size-[20px]" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        </div>
      </div>
    </a>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function About() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeNode, setActiveNode] = useState(0);

  // in-view triggers for the three product visuals
  const [benchRef, benchIn] = useInView<HTMLDivElement>(0.3);
  const [inboxRef, inboxIn] = useInView<HTMLDivElement>(0.3);
  const [flowRef, flowIn] = useInView<HTMLDivElement>(0.3);

  // cycle the active automation node for a "live pipeline" feel
  useEffect(() => {
    const id = setInterval(() => setActiveNode((n) => (n + 1) % WORKFLOW.length), 1600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-[#f8f5ec] relative size-full min-h-screen flex flex-col overflow-x-clip">
      <Header />

      {/* ══════════════════════════════════════════════════
          1 · HERO
      ══════════════════════════════════════════════════ */}
      <div className="bg-[#092511] shadow-[0_0_0_100vmax_#092511] [clip-path:inset(0_-100vmax)] shrink-0 w-full">
        <div className="container mx-auto border-x border-[rgba(255,255,255,0.08)] px-4 xl:px-[75px] py-[100px] flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
            <img alt="" className="size-full object-cover" src={imgImage27} />
          </div>
          <div className="flex gap-[10px] items-center justify-center mb-[20px] relative">
            <div className="bg-[#06b349] size-[8px] rounded-full" />
            <Typography className="font-['Courier_Prime'] text-[#06b349] text-[14px] uppercase tracking-[0.2em]">About WeNext</Typography>
          </div>
          <Typography component="h1" className="font-['Geist:SemiBold'] font-semibold leading-[1.15] text-white text-[60px] tracking-[-2px] max-w-[800px] mb-[24px] relative">
            Turn WhatsApp Chats<br />Into Revenue
          </Typography>
          <Typography className="font-['Geist:Regular'] text-[#a0b8a8] text-[20px] max-w-[680px] leading-[1.6] mb-[44px] relative">
            WeNext.ai is a next-generation WhatsApp CRM and automation platform designed for businesses that want to
            scale communication, enhance customer relationships, and boost sales through WhatsApp Business API.
          </Typography>
          <div className="flex gap-[16px] items-center relative">
            <PrimaryButton label="Let's Talk" light />
            <a href="https://app.wenext.ai/book/wenext-platform-walkthrough" target="_blank" rel="noopener noreferrer"
              className="bg-transparent border border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.05)] active:scale-[0.98] transition-all duration-150 rounded-[8px] cursor-pointer flex items-center gap-[10px] px-[21px] py-[15px]">
              <Typography className="font-['Geist:Medium'] font-medium text-[17px] text-white whitespace-nowrap">Book a Demo</Typography>
              <svg className="size-[20px] shrink-0 text-white" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3.75 10h12.5M11.25 15l5-5-5-5" /></svg>
            </a>
          </div>
          {/* trust row */}
          <div className="flex flex-wrap gap-x-[28px] gap-y-[14px] items-center justify-center mt-[44px] relative">
            <div className="flex items-center gap-[10px]">
              <div className="flex -space-x-[10px]">
                {['#06b349', '#1877F2', '#DD2A7B', '#F58529'].map((c) => (
                  <div key={c} className="size-[30px] rounded-full border-[2px] border-[#092511]" style={{ background: c }} />
                ))}
              </div>
              <Typography className="font-['Geist:Regular'] text-[#a0b8a8] text-[14px]">Trusted by <span className="text-white font-medium">100+ businesses</span></Typography>
            </div>
            <div className="hidden sm:block w-px h-[20px] bg-[rgba(255,255,255,0.12)]" />
            <div className="flex items-center gap-[8px]">
              <div className="flex items-center gap-[2px]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="#06b349"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" /></svg>
                ))}
              </div>
              <Typography className="font-['Geist:Regular'] text-[#a0b8a8] text-[14px]"><span className="text-white font-medium">4.9/5</span> average rating</Typography>
            </div>
            <div className="hidden sm:block w-px h-[20px] bg-[rgba(255,255,255,0.12)]" />
            <Typography className="font-['Courier_Prime'] text-[#7aaa88] text-[13px] uppercase tracking-[0.12em]">Backed by PhotonX Tech</Typography>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          2 · SOCIAL PROOF
      ══════════════════════════════════════════════════ */}
      <div className="container mx-auto border-x border-b border-[#e0dac6]">
        <div className="px-4 xl:px-[56px] pt-[44px] pb-[10px] text-center flex items-center justify-center">
          <Eyebrow label="Join 100+ brands and businesses growing on WeNext" />
        </div>
        <div className="px-4 xl:px-[56px] py-[28px] overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex items-center gap-[56px] w-max" style={{ animation: 'aboutMarquee 32s linear infinite' }}>
            {[...BRANDS, ...BRANDS].map((b, i) => (
              <Typography key={i} className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[24px] tracking-[-0.5px] opacity-30 hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">{b}</Typography>
            ))}
          </div>
        </div>
      </div>



      {/* ══════════════════════════════════════════════════
          6.5 · OUR VALUES
      ══════════════════════════════════════════════════ */}
      {/* ══════════════════════════════════════════════════
          OUR STORY
      ══════════════════════════════════════════════════ */}
      <div className="container mx-auto border-x border-b border-[#e0dac6]">
        <div className="px-4 xl:px-[75px] py-[88px]">
          <Eyebrow label="Our story" />
          <Typography component="h2" className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[40px] lg:text-[52px] tracking-[-1.8px] leading-[1.08] max-w-[900px] mb-[44px]">
            We built WeNext so a five-person business could run like a <span className="text-[#06b349]">five-hundred</span>-person one.
          </Typography>
          <div className="grid md:grid-cols-2 gap-[32px] lg:gap-[64px] max-w-[920px]">
            <Typography className="font-['Geist:Regular'] text-[#3a4540] text-[17px] leading-[1.8]">
              Most small businesses in India run on WhatsApp — but they run it by hand. Orders in one chat, payments in another, follow-ups lost in the rush. The tools that could fix it were built for enterprises, priced for enterprises, and needed a developer just to switch on.
            </Typography>
            <Typography className="font-['Geist:Regular'] text-[#3a4540] text-[17px] leading-[1.8]">
              So the team at <span className="text-[#0c221f] font-medium">PhotonX Tech</span> built WeNext — one AI-powered platform that unifies WhatsApp, Instagram and Facebook, automates the busywork, and turns every conversation into a chance to grow. Today it powers 100+ businesses across retail, fintech and services — and we’re only getting started.
            </Typography>
          </div>
          <div className="flex flex-wrap items-center gap-x-[48px] gap-y-[20px] mt-[52px] pt-[36px] border-t border-[#e0dac6]">
            {[['Est.', '2021'], ['Built by', 'PhotonX Tech'], ['HQ', 'India'], ['Focus', 'WhatsApp AI · CRM']].map(([k, v]) => (
              <div key={k} className="flex flex-col gap-[5px]">
                <span className="font-['Courier_Prime'] text-[#8a938e] text-[11px] uppercase tracking-[0.14em]">{k}</span>
                <span className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[18px] tracking-[-0.3px]">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          MISSION & VISION
      ══════════════════════════════════════════════════ */}
      <div className="container mx-auto border-x border-b border-[#e0dac6]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative overflow-hidden p-[44px] xl:p-[64px] bg-[#f3fbf5] md:border-r border-[#e0dac6]">
            <span className="absolute top-[30px] right-[42px] font-['Geist:SemiBold'] font-semibold text-[#06b349] opacity-[0.13] text-[84px] leading-none select-none pointer-events-none">01</span>
            <div className="flex items-center gap-[11px] mb-[26px] relative">
              <span className="size-[44px] rounded-[12px] bg-[#06b349] flex items-center justify-center shadow-[0_10px_24px_-8px_rgba(6,179,73,0.55)]">
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
              </span>
              <Typography className="font-['Courier_Prime'] text-[#06824f] text-[13px] uppercase tracking-[0.2em]">Our Mission</Typography>
            </div>
            <Typography className="font-['Geist:SemiBold'] font-semibold text-[30px] xl:text-[33px] text-[#0c221f] tracking-[-1px] leading-[1.22] max-w-[460px] relative">
              Help every business automate, engage and grow — from one AI-powered platform.
            </Typography>
          </div>
          <div className="relative overflow-hidden p-[44px] xl:p-[64px] bg-white">
            <span className="absolute top-[30px] right-[42px] font-['Geist:SemiBold'] font-semibold text-[#0c221f] opacity-[0.05] text-[84px] leading-none select-none pointer-events-none">02</span>
            <div className="flex items-center gap-[11px] mb-[26px] relative">
              <span className="size-[44px] rounded-[12px] bg-[#0c221f] flex items-center justify-center">
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#25d366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
              </span>
              <Typography className="font-['Courier_Prime'] text-[#0c221f] text-[13px] uppercase tracking-[0.2em]">Our Vision</Typography>
            </div>
            <Typography className="font-['Geist:SemiBold'] font-semibold text-[30px] xl:text-[33px] text-[#0c221f] tracking-[-1px] leading-[1.22] max-w-[460px] relative">
              A world where a small team can deliver the responsiveness, speed and care of a much larger one.
            </Typography>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          6.5 · OUR VALUES
      ══════════════════════════════════════════════════ */}
      <div className="container mx-auto border-x border-b border-[#e0dac6]">
        <div className="border-b border-[#e0dac6] py-[64px] px-4 xl:px-[56px] flex flex-col items-center text-center">
          <Eyebrow label="What We Stand For" center />
          <Typography component="h2" className="font-['Geist:SemiBold'] font-semibold text-[42px] text-[#0c221f] tracking-[-1.2px] leading-[1.2] max-w-[680px]">
            The principles behind every release
          </Typography>
          <Typography className="font-['Geist:Regular'] text-[#60584c] text-[18px] max-w-[560px] leading-[1.55] mt-[14px]">
            We're a product-first team. These four values shape every decision — from the roadmap to the smallest UI detail.
          </Typography>
        </div>
        <div className="grid grid-cols-4 divide-x divide-[#e0dac6]">
          {VALUES.map((v) => (
            <div key={v.title} className="p-[40px] flex flex-col gap-[20px] group hover:bg-[rgba(6,179,73,0.03)] transition-colors duration-200">
              <div className="size-[54px] rounded-[8px] border flex items-center justify-center">{v.icon}</div>
              <div>
                <Typography component="h3" className="font-['Geist:SemiBold'] font-semibold text-[19px] text-[#0c221f] tracking-[-0.3px] leading-[1.3] mb-[10px]">{v.title}</Typography>
                <Typography className="font-['Geist:Regular'] text-[#60584c] text-[15px] leading-[1.6]">{v.desc}</Typography>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          7 · DATA AUTHORITY — big number + press
      ══════════════════════════════════════════════════ */}
      <div className="container mx-auto border-x border-b border-[#e0dac6] relative overflow-hidden">
        {/* giant faded background number */}
        <Typography className="absolute -top-[20px] right-[20px] font-['Geist:SemiBold'] font-semibold text-[240px] leading-none text-[#0c221f] opacity-[0.03] select-none pointer-events-none tracking-[-10px] z-0">50M</Typography>

        {/* header row */}
        <div className="border-b border-[#e0dac6] py-[56px] px-4 xl:px-[56px] flex items-end justify-between gap-[40px] relative z-10">
          <div className="max-w-[620px]">
            <Eyebrow label="By The Numbers" />
            <Typography component="h2" className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[44px] tracking-[-1.5px] leading-[1.12]">
              Our numbers tell the story
            </Typography>
          </div>
          <Typography className="font-['Geist:Regular'] text-[#60584c] text-[17px] leading-[1.65] max-w-[380px] text-right">
            Powering conversations for 100+ businesses across retail, fintech and services — and growing every single day.
          </Typography>
        </div>

        {/* premium stat cards */}
        <div className="grid grid-cols-4 relative z-10">
          {NUMBER_STATS.map((s, i) => (
            <div
              key={s.label}
              className={`group relative bg-[#f8f5ec]  p-[36px] overflow-hidden transition-colors duration-300 ${i < NUMBER_STATS.length - 1 ? 'border-r border-[#e0dac6]' : ''}`}
            >
              {/* top accent line */}
              {/* <div className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#06b349] to-[#25d366] group-hover:w-full transition-all duration-500" /> */}
              <div className="flex items-center justify-between mb-[24px] relative">
                <div className="size-[46px] rounded-[12px] bg-[#e5f6e7] border border-[rgba(6,179,73,0.2)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                {/* <Sparkline points={s.spark} /> */}
              </div>
              <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[46px] leading-none tracking-[-1.8px] tabular-nums mb-[10px] relative">
                <AnimatedCounter target={s.target} prefix={s.prefix ?? ''} suffix={s.suffix} duration={1800} />
              </Typography>
              <Typography className="font-['Geist:Medium'] font-medium text-[#0c221f] text-[15px] leading-[1.3] mb-[12px] relative">{s.label}</Typography>

            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          8 · EVERYTHING YOU NEED — capabilities bento
      ══════════════════════════════════════════════════ */}
      <div className="container mx-auto border-x border-b border-[#e0dac6]">
        <div className="border-b border-[#e0dac6] py-[64px] px-4 xl:px-[56px] flex flex-col items-center text-center">
          <Eyebrow label="Platform" center />
          <Typography component="h2" className="font-['Geist:SemiBold'] font-semibold text-[42px] text-[#0c221f] tracking-[-1.2px] leading-[1.2] max-w-[680px]">
            Everything you need to win on WhatsApp
          </Typography>
          <Typography className="font-['Geist:Regular'] text-[#60584c] text-[18px] max-w-[580px] leading-[1.55] mt-[14px]">
            Engage, automate and analyze every customer conversation across WhatsApp, Instagram and Facebook — from one platform.
          </Typography>
        </div>

        {/* Row A: unified inbox (real product image) + languages mockup */}
        <div className="grid grid-cols-2 border-b border-[#e0dac6]">
          {/* Unified inbox — coded UI mockup */}
          <div className="group border-r border-[#e0dac6] relative overflow-hidden">
            <div className="h-[300px] relative overflow-hidden flex items-center justify-center p-[36px]" style={{ background: 'linear-gradient(135deg, #eef6ee 0%, #e7eef4 100%)' }}>
              <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(9,37,17,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(9,37,17,0.03) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
            </div>
            <div className="p-[40px]">
              <Typography component="h3" className="font-['Geist:SemiBold'] font-semibold text-[22px] text-[#0c221f] tracking-[-0.4px] mb-[8px]">Every channel, one inbox</Typography>
              <Typography className="font-['Geist:Regular'] text-[#60584c] text-[15px] leading-[1.6]">WhatsApp, Instagram and Facebook conversations unified in a single intelligent inbox — with shared context, agent assignment and in-chat payments.</Typography>
            </div>
          </div>

          <div className="group relative overflow-hidden">
            <div className="h-[300px] relative overflow-hidden flex items-center justify-center p-[36px]" style={{ background: 'linear-gradient(135deg, #eef6ee 0%, #e3f1e6 100%)' }}>
              <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(6,179,73,0.08) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            </div>
            <div className="p-[40px]">
              <Typography component="h3" className="font-['Geist:SemiBold'] font-semibold text-[22px] text-[#0c221f] tracking-[-0.4px] mb-[8px]">Speaks every language your customers do</Typography>
              <Typography className="font-['Geist:Regular'] text-[#60584c] text-[15px] leading-[1.6]">The AI auto-detects the incoming language — Hindi, English, Hinglish and 8 more — and replies in the same tone, instantly.</Typography>
            </div>
          </div>
        </div>

        {/* Row B: knowledge base + analytics — mockup visuals */}
        <div className="grid grid-cols-2 border-b border-[#e0dac6]">
          {/* Knowledge base — training mockup */}
          <div className="group border-r border-[#e0dac6] relative overflow-hidden">
            <div className="h-[300px] relative overflow-hidden flex items-center justify-center p-[36px]" style={{ background: 'linear-gradient(135deg, #f4f1e7 0%, #eef6ee 100%)' }}>
              <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(9,37,17,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(9,37,17,0.03) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
            </div>
            <div className="p-[40px]">
              <Typography component="h3" className="font-['Geist:SemiBold'] font-semibold text-[22px] text-[#0c221f] tracking-[-0.4px] mb-[8px]">Branded knowledge base</Typography>
              <Typography className="font-['Geist:Regular'] text-[#60584c] text-[15px] leading-[1.6]">Train the AI on your catalog, FAQs and policies in minutes — it answers like your best agent, on brand, every time.</Typography>
            </div>
          </div>

          {/* Analytics — dashboard mockup */}
          <div className="group relative overflow-hidden">
            <div className="h-[300px] relative overflow-hidden flex items-center justify-center p-[36px]" style={{ background: 'linear-gradient(135deg, #eef2f6 0%, #eef6ee 100%)' }}>
              <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(9,37,17,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(9,37,17,0.03) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
            </div>
            <div className="p-[40px]">
              <Typography component="h3" className="font-['Geist:SemiBold'] font-semibold text-[22px] text-[#0c221f] tracking-[-0.4px] mb-[8px]">Real-time analytics</Typography>
              <Typography className="font-['Geist:Regular'] text-[#60584c] text-[15px] leading-[1.6]">Track message performance, conversion and revenue with precision dashboards — and know exactly what's working.</Typography>
            </div>
          </div>
        </div>

        {/* Row C: integrations 3-col */}
        <div className="grid grid-cols-3 divide-x divide-[#e0dac6]">
          {INTEGRATIONS.map((it) => (
            <div key={it.name} className="group p-[40px] relative overflow-hidden">
              <Typography component="h3" className="font-['Geist:SemiBold'] font-semibold text-[19px] text-[#0c221f] tracking-[-0.3px] mb-[8px]">{it.name}</Typography>
              <Typography className="font-['Geist:Regular'] text-[#60584c] text-[15px] leading-[1.6]">{it.desc}</Typography>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          10 · FAQ
      ══════════════════════════════════════════════════ */}
      <div className="container mx-auto border-x border-b border-[#e0dac6]">
        <div className="px-[50px] py-[60px] flex gap-[80px] items-start">
          {/* Left: heading + CTAs (Home FAQ layout) */}
          <div className="flex flex-col gap-[30px] shrink-0 w-[380px]">
            <div className="flex flex-col gap-[15px]">
              <div className="flex gap-[10px] items-center">
                <div className="bg-[#06b349] size-[10px]" />
                <Typography className="font-['Courier_Prime'] text-[#0c221f] text-[18px] leading-[1.4]">Faq's</Typography>
              </div>
              <Typography component="h2" className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[54px] tracking-[-1px] leading-[1.1]">
                Frequently asked questions
              </Typography>
              <Typography className="font-['Geist:Regular'] text-[#60584c] text-[17px] leading-[1.65] mt-[4px]">
                Everything you might want to know about the company behind WeNext.
              </Typography>
            </div>
          </div>

          {/* Right: accordion */}
          <div className="flex-1 min-w-px flex flex-col">
            {ABOUT_FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              const isLast = i === ABOUT_FAQS.length - 1;
              return (
                <div key={i} className={`${isLast ? '' : 'border-b border-[#e5e5e5]'} w-full`}>
                  <button onClick={() => setOpenFaq(isOpen ? null : i)} aria-expanded={isOpen}
                    className="group w-full flex items-center justify-between gap-[16px] pb-[17px] pt-[16px] px-[8px] cursor-pointer text-left outline-none">
                    <Typography className={`font-['Geist:Medium'] font-medium leading-[1.4] text-[18px] flex-1 transition-all duration-200 ${isOpen ? 'text-[#06b349]' : 'text-[#262626] group-hover:translate-x-[4px] group-hover:text-[#06b349]'}`}>{faq.q}</Typography>
                    <div className={`size-[28px] shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'rotate-180 bg-[#e5f6e7]' : 'group-hover:bg-[#f3efe3]'}`}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={isOpen ? '#06b349' : '#262626'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                    </div>
                  </button>
                  <div className="grid transition-[grid-template-rows] duration-300 ease-out" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
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


      {/* inline keyframes */}
      {/* <style>{`
        @keyframes aboutMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes benchSheen {
          0%   { transform: translateX(-120%); }
          60%, 100% { transform: translateX(220%); }
        }
        @keyframes inboxWave {
          0%, 100% { transform: scaleY(0.78); }
          50%      { transform: scaleY(1); }
        }
        @keyframes flowPacket {
          0%   { top: -14px; opacity: 0; }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes floatCard {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-6px); }
        }
        @keyframes photonxFlow {
          0%   { left: 0; opacity: 0; }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        @keyframes photonxPulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50%      { transform: scale(1.12); opacity: 0.1; }
        }
        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style> */}

      <Footer />
    </div>
  );
}
