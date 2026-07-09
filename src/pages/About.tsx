import Typography from '@mui/material/Typography';
import { useRef, useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const imgImage27 = "/figma/imgImage27.png";
const imgIcon1 = "/figma/imgIcon1.svg";
const imgWhatsApp = "/figma/imgImage1.svg";
const imgInstagram = "/figma/imgImage2.svg";
const imgFacebook = "/figma/imgImage3.svg";
const imgImage3145 = "/figma/imgImage3145.png";

// import imgShopify from '../assets/icons/shopify.png';
// import imgZoho from '../assets/icons/zoho.png';
// import imgRazorpay from '../assets/icons/razorpay.svg';
// import imgUpi from '../assets/icons/upi.png';

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
    <div className={`flex gap-[10px] items-center mb-[16px] ${center ? 'justify-center' : ''}`}>
      <div className="bg-[#06b349] size-[8px]" />
      <Typography sx={{
        lineHeight: "100%"
      }} className={`font-['Courier_Prime'] text-[14px] uppercase tracking-[0.2em] ${light ? 'text-[#06b349]' : 'text-[#0c221f]'}`}>
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

function PrimaryButton({ label, light = false }: { label: string; light?: boolean }) {
  return (
    <div className="bg-[#06b349] hover:bg-[#05a043] active:scale-[0.98] transition-all duration-150 rounded-[8px] cursor-pointer overflow-hidden relative inline-flex">
      <div className="flex gap-[12px] items-center pl-[20px] pr-[15px] py-[15px]">
        {light && (
          <div className="absolute inset-0 pointer-events-none">
            <img alt="" className="size-full object-cover opacity-20 mix-blend-color-burn" src={imgImage27} />
          </div>
        )}
        <Typography className="font-['Geist:Medium'] font-medium text-[17px] text-white whitespace-nowrap relative">{label}</Typography>
        <div className="size-[20px] relative shrink-0"><img alt="" className="absolute inset-0 size-full" src={imgIcon1} /></div>
      </div>
    </div>
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
            <PrimaryButton label="Book a Demo" light />
            <a href="https://app.wenext.ai" target="_blank" rel="noopener noreferrer"
              className="bg-transparent border border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.05)] active:scale-[0.98] transition-all duration-150 rounded-[8px] cursor-pointer flex items-center px-[21px] py-[15px]">
              <Typography className="font-['Geist:Medium'] font-medium text-[17px] text-white whitespace-nowrap">Get Started Free</Typography>
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
        <div className="px-4 xl:px-[75px] pt-[44px] pb-[10px] text-center flex items-center justify-center">
          <Eyebrow label="Join 100+ brands and businesses growing on WeNext" />
        </div>
        <div className="px-4 xl:px-[75px] py-[28px] overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
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
      <div className="container mx-auto border-x border-b border-[#e0dac6]">
        <div className="border-b border-[#e0dac6] py-[64px] px-4 xl:px-[75px] flex flex-col items-center text-center">
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
        <div className="border-b border-[#e0dac6] py-[56px] px-4 xl:px-[75px] flex items-end justify-between gap-[40px] relative z-10">
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
        <div className="border-b border-[#e0dac6] py-[64px] px-4 xl:px-[75px] flex flex-col items-center text-center">
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
              {/* <div className="relative w-full max-w-[380px] bg-white rounded-[16px] border border-[#e0dac6] shadow-[0_22px_55px_-28px_rgba(11,31,26,0.45)] overflow-hidden">
                <div className="px-[18px] py-[13px] border-b border-[#eee7d6] flex items-center justify-between">
                  <div className="flex items-center gap-[9px]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0c221f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-6l-2 3h-4l-2-3H2" /><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" /></svg>
                    <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[13px]">Unified Inbox</Typography>
                  </div>
                  <div className="flex items-center gap-[5px] bg-[#e5f6e7] rounded-full px-[9px] py-[3px]">
                    <span className="relative flex size-[6px]"><span className="absolute inline-flex size-full rounded-full bg-[#06b349] opacity-60 animate-ping" /><span className="relative inline-flex size-[6px] rounded-full bg-[#06b349]" /></span>
                    <Typography className="font-['Courier_Prime'] text-[#06824f] text-[10px] uppercase tracking-[0.08em]">3 channels</Typography>
                  </div>
                </div>
                <div className="p-[10px] flex flex-col gap-[4px]">
                  {[
                    { n: 'Aarav Shah', m: 'Is size M in stock?', t: '4s', ch: imgWhatsApp, c: '#25d366', initials: 'AS', active: true, unread: true },
                    { n: 'Meera Iyer', m: 'Loved the kurta! 😍', t: '2m', ch: imgInstagram, c: '#DD2A7B', initials: 'MI', active: false, unread: true },
                    { n: 'Dev Kapoor', m: 'Order #4821 shipped', t: '8m', ch: imgFacebook, c: '#1877F2', initials: 'DK', active: false, unread: false },
                  ].map((r) => (
                    <div key={r.n} className={`flex items-center gap-[11px] rounded-[10px] px-[10px] py-[9px] transition-colors duration-200 ${r.active ? 'bg-[#e5f6e7]' : 'hover:bg-[#f8f5ec]'}`}>
                      <div className="relative shrink-0">
                        <div className="size-[34px] rounded-full flex items-center justify-center text-white font-['Geist:SemiBold'] font-semibold text-[12px]" style={{ background: r.c }}>{r.initials}</div>
                        <div className="absolute -bottom-[2px] -right-[2px] size-[16px] rounded-full bg-white flex items-center justify-center shadow-sm">
                          <img alt="" src={r.ch} className="size-[11px]" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <Typography className="font-['Geist:Medium'] font-medium text-[#0c221f] text-[13px] truncate">{r.n}</Typography>
                        <Typography className="font-['Geist:Regular'] text-[#60584c] text-[12px] truncate">{r.m}</Typography>
                      </div>
                      <div className="flex flex-col items-end gap-[5px] shrink-0">
                        <Typography className="font-['Courier_Prime'] text-[#9a9384] text-[10px]">{r.t}</Typography>
                        {r.unread && <span className="size-[7px] rounded-full bg-[#06b349]" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
            <div className="p-[40px]">
              <Typography component="h3" className="font-['Geist:SemiBold'] font-semibold text-[22px] text-[#0c221f] tracking-[-0.4px] mb-[8px]">Every channel, one inbox</Typography>
              <Typography className="font-['Geist:Regular'] text-[#60584c] text-[15px] leading-[1.6]">WhatsApp, Instagram and Facebook conversations unified in a single intelligent inbox — with shared context, agent assignment and in-chat payments.</Typography>
            </div>
          </div>

          <div className="group relative overflow-hidden">
            <div className="h-[300px] relative overflow-hidden flex items-center justify-center p-[36px]" style={{ background: 'linear-gradient(135deg, #eef6ee 0%, #e3f1e6 100%)' }}>
              <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(6,179,73,0.08) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              {/* <div className="relative w-full max-w-[330px] flex flex-col gap-[12px]">
                <div className="self-start max-w-[80%] bg-white rounded-[16px] rounded-tl-[4px] px-[16px] py-[11px] shadow-[0_8px_20px_-12px_rgba(11,31,26,0.3)]">
                  <Typography className="font-['Geist:Regular'] text-[#0c221f] text-[15px]">नमस्ते! क्या यह स्टॉक में है? 🙏</Typography>
                </div>
                <div className="self-end max-w-[82%] bg-[#06b349] rounded-[16px] rounded-tr-[4px] px-[16px] py-[11px] shadow-[0_8px_20px_-12px_rgba(6,179,73,0.5)]">
                  <Typography className="font-['Geist:Regular'] text-white text-[15px]">जी हाँ! Size M available hai 😊</Typography>
                </div>
                <div className="self-center mt-[6px] flex items-center gap-[8px] bg-white/85 backdrop-blur border border-[rgba(6,179,73,0.25)] rounded-full px-[14px] py-[7px] shadow-sm">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                  <Typography className="font-['Courier_Prime'] text-[#06824f] text-[12px]">Auto-detected: Hinglish</Typography>
                </div>
              </div> */}
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
              {/* <div className="relative w-full max-w-[360px] flex items-center gap-[16px]">
                <div className="flex flex-col gap-[10px] flex-1">
                  {[{ n: 'catalog.csv', c: '#06b349' }, { n: 'faqs.pdf', c: '#1877F2' }, { n: 'policy.pdf', c: '#F58529' }].map((f) => (
                    <div key={f.n} className="flex items-center gap-[10px] bg-white rounded-[10px] px-[12px] py-[10px] shadow-[0_6px_16px_-12px_rgba(11,31,26,0.35)]">
                      <div className="size-[26px] rounded-[7px] flex items-center justify-center shrink-0" style={{ background: `${f.c}1a` }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={f.c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                      </div>
                      <Typography className="font-['Courier_Prime'] text-[#0c221f] text-[13px]">{f.n}</Typography>
                    </div>
                  ))}
                </div>
                <div className="relative h-[2px] w-[34px] bg-[rgba(6,179,73,0.3)] shrink-0 overflow-hidden rounded-full">
                  <div className="absolute top-0 h-full w-[12px] bg-[#06b349]" style={{ animation: 'photonxFlow 1.8s linear infinite' }} />
                </div>
                <div className="relative size-[96px] shrink-0 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-2 border-[rgba(6,179,73,0.2)]" />
                  <div className="absolute inset-[-8px] rounded-full border border-[rgba(6,179,73,0.3)]" style={{ animation: 'photonxPulse 2.6s ease-in-out infinite' }} />
                  <div className="size-[68px] rounded-full bg-gradient-to-br from-[#06b349] to-[#048234] flex flex-col items-center justify-center shadow-[0_0_36px_rgba(6,179,73,0.45)]">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v1a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="22" /></svg>
                    <Typography className="font-['Courier_Prime'] text-white text-[9px] mt-[3px] uppercase tracking-[0.1em]">AI</Typography>
                  </div>
                </div>
              </div> */}
              {/* <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 flex items-center gap-[6px] bg-white/85 backdrop-blur border border-[rgba(6,179,73,0.25)] rounded-full px-[12px] py-[6px] shadow-sm">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                <Typography className="font-['Courier_Prime'] text-[#06824f] text-[11px] uppercase tracking-[0.08em]">Trained · 190 sources</Typography>
              </div> */}
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
              {/* <div className="relative w-full max-w-[340px] bg-white rounded-[16px] border border-[#e0dac6] shadow-[0_20px_50px_-26px_rgba(11,31,26,0.4)] overflow-hidden">
                <div className="px-[18px] py-[14px] border-b border-[#eee7d6] flex items-center justify-between">
                  <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[13px]">Revenue this month</Typography>
                  </div>
                </div>
              </div> */}
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
              {/* <div className="flex items-start justify-between mb-[18px]">
                <img src={it.img} alt={it.name} className="h-[36px] w-auto object-contain" />
              </div> */}
              <Typography component="h3" className="font-['Geist:SemiBold'] font-semibold text-[19px] text-[#0c221f] tracking-[-0.3px] mb-[8px]">{it.name}</Typography>
              <Typography className="font-['Geist:Regular'] text-[#60584c] text-[15px] leading-[1.6]">{it.desc}</Typography>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto border-x border-b border-[#e0dac6] bg-[#fbf8f1] py-[80px] relative overflow-hidden">
        <style>{`
          @keyframes scrollMarqueeLeft {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          @keyframes scrollMarqueeRight {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-left {
            animation: scrollMarqueeLeft 50s linear infinite;
            display: flex;
            width: max-content;
          }
          .animate-marquee-right {
            animation: scrollMarqueeRight 50s linear infinite;
            display: flex;
            width: max-content;
          }
          .animate-marquee-left:hover, .animate-marquee-right:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="flex flex-col items-center text-center relative z-10 mb-[60px] px-4 xl:px-[75px]">
          <Eyebrow label="Loved by Teams" center />
          <Typography component="h2" className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[52px] tracking-[-1.5px] leading-[1.1] max-w-[720px] mb-[16px]">
            The brands building on WeNext
          </Typography>
          <Typography className="font-['Geist:Regular'] text-[#60584c] text-[19px] max-w-[600px] leading-[1.6]">
            Founders, marketers and support leaders share what changed after switching to WeNext.
          </Typography>
        </div>

        {/* 2 Scrolling Rows */}
        <div className="relative w-full overflow-hidden flex flex-col gap-[30px] z-10 py-[10px]">
          {/* Fades */}
          <div className="absolute top-0 left-0 h-full w-[150px] bg-gradient-to-r from-[#fbf8f1] to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-[150px] bg-gradient-to-l from-[#fbf8f1] to-transparent z-20 pointer-events-none" />

          {/* Row 1: Left to Right */}
          <div className="animate-marquee-left gap-[30px] px-[15px]">
            {[...ABOUT_TESTIMONIALS, ...ABOUT_TESTIMONIALS].reverse().map((t, i) => (
              <div key={`r1-${i}`} className="w-[550px] shrink-0  rounded-[10px] p-[20px] border border-[#e0dac6] flex flex-col justify-between gap-[28px] hover:-translate-y-[4px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 group shadow-[0_8px_30px_rgba(0,0,0,0.03)] cursor-pointer relative overflow-hidden">
                {/* <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-[#06b349] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" /> */}
                <div>
                  <div className="flex items-center gap-[4px] mb-[24px]">
                    {[...Array(5)].map((_, idx) => (
                      <svg key={idx} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    ))}
                  </div>
                  <Typography className="font-['Geist:Regular'] text-[#3a4540] text-[17px] leading-[1.65]">
                    "{t.quote}"
                  </Typography>
                </div>

                <div className="flex items-center gap-[16px] pt-[24px] border-t border-[#e0dac6]">
                  <div className="relative size-[50px] rounded-full flex items-center justify-center shrink-0 text-white font-['Geist:SemiBold'] font-semibold text-[16px]" style={{ background: t.accent }}>
                    {t.initials}
                    <div className="absolute -bottom-[2px] -right-[2px] size-[18px] bg-white rounded-full flex items-center justify-center shadow-sm">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="#06b349"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" /></svg>
                    </div>
                  </div>
                  <div>
                    <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[16px] leading-[1.2]">{t.name}</Typography>
                    <Typography className="font-['Geist:Medium'] text-[#7aaa88] text-[13px] mt-[4px]">{t.role}, <span className="text-[#60584c]">{t.company}</span></Typography>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Right to Left */}
          <div className="animate-marquee-right gap-[30px] px-[15px]">
            {[...ABOUT_TESTIMONIALS, ...ABOUT_TESTIMONIALS].map((t, i) => (
              <div key={`r2-${i}`} className="w-[550px] shrink-0  rounded-[10px] p-[20px] border border-[#e0dac6] flex flex-col justify-between gap-[28px] hover:-translate-y-[4px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 group shadow-[0_8px_30px_rgba(0,0,0,0.03)] cursor-pointer relative overflow-hidden">
                {/* <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-[#06b349] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" /> */}
                <div>
                  <div className="flex items-center gap-[4px] mb-[24px]">
                    {[...Array(5)].map((_, idx) => (
                      <svg key={idx} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    ))}
                  </div>
                  <Typography className="font-['Geist:Regular'] text-[#3a4540] text-[17px] leading-[1.65]">
                    "{t.quote}"
                  </Typography>
                </div>

                <div className="flex items-center gap-[16px] pt-[24px] border-t border-[#e0dac6]">
                  <div className="relative size-[50px] rounded-full flex items-center justify-center shrink-0 text-white font-['Geist:SemiBold'] font-semibold text-[16px]" style={{ background: t.accent }}>
                    {t.initials}
                    <div className="absolute -bottom-[2px] -right-[2px] size-[18px] bg-white rounded-full flex items-center justify-center shadow-sm">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="#06b349"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" /></svg>
                    </div>
                  </div>
                  <div>
                    <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[16px] leading-[1.2]">{t.name}</Typography>
                    <Typography className="font-['Geist:Medium'] text-[#7aaa88] text-[13px] mt-[4px]">{t.role}, <span className="text-[#60584c]">{t.company}</span></Typography>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          8.5 · BACKED BY PHOTONX TECH — full-bleed highlight
      ══════════════════════════════════════════════════ */}
      <div className="bg-[#092511] shadow-[0_0_0_100vmax_#092511] [clip-path:inset(0_-100vmax)] shrink-0 w-full">
        <div className="container mx-auto border-x border-[rgba(255,255,255,0.08)] p-[75px] relative overflow-hidden flex flex-col items-center">
          {/* backdrop */}
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '46px 46px', maskImage: 'radial-gradient(circle at 50% 50%, #000 30%, transparent 80%)', WebkitMaskImage: 'radial-gradient(circle at 50% 50%, #000 30%, transparent 80%)' }} />
          {/* <div className="absolute -top-[150px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#06b349] opacity-[0.08] blur-[120px] rounded-full pointer-events-none" /> */}

          {/* Heading Area */}
          <div className="w-full max-w-[800px] flex flex-col items-center text-center relative z-10 mb-[60px]">
            <Eyebrow label="Our Parent Company" light center />
            <Typography component="h2" className="font-['Geist:SemiBold'] font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-[rgba(255,255,255,0.7)] text-[80px] tracking-[-2.5px] leading-[1.02] mb-[20px]">
              PhotonX Tech
            </Typography>
            <Typography className="font-['Geist:Regular'] text-[#a0b8a8] text-[18px] leading-[1.65] max-w-[620px]">
              A product-driven technology company specialising in SaaS communication automation and cloud-based CRM. The same engineers build, ship, support, and secure WeNext — end to end.
            </Typography>
          </div>

          {/* Premium Bento Grid */}
          <div className="grid grid-cols-12 gap-[24px] w-full max-w-[1100px] relative z-10">

            {/* Top Left: Enterprise Architecture */}
            <div className="col-span-8 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] rounded-[24px] p-[40px] flex items-center justify-between overflow-hidden relative group hover:bg-[rgba(255,255,255,0.03)] transition-colors duration-500">
              <div className="absolute top-0 right-0 w-[400px] h-full bg-gradient-to-l from-[rgba(6,179,73,0.05)] to-transparent pointer-events-none" />

              <div className="relative z-10 max-w-[340px] flex flex-col justify-center">
                <div className="size-[44px] rounded-[12px] bg-[rgba(6,179,73,0.15)] border border-[rgba(6,179,73,0.3)] flex items-center justify-center mb-[24px]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </div>
                <Typography className="font-['Geist:SemiBold'] font-semibold text-white text-[28px] leading-[1.1] tracking-[-0.5px] mb-[12px]">Audited Enterprise Architecture</Typography>
                <Typography className="font-['Geist:Regular'] text-[#7aaa88] text-[15px] leading-[1.6]">
                  India-hosted servers with full DPDP & GDPR compliance. Your customer data never leaves the country and is protected by military-grade encryption.
                </Typography>
              </div>

              <div className="relative z-10 flex-1 flex justify-end">
                {/* Simulated Server Rack / Security visual */}
                <div className="w-[280px] h-[180px] bg-[#0c1f15] border border-[rgba(6,179,73,0.2)] rounded-[16px] p-[16px] flex flex-col gap-[12px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex items-center justify-between p-[10px] bg-[rgba(255,255,255,0.03)] rounded-[8px] border border-[rgba(255,255,255,0.05)] relative overflow-hidden">
                      <div className="absolute left-0 top-0 h-full w-[2px] bg-[#06b349] opacity-50" />
                      <div className="flex items-center gap-[10px]">
                        <div className="size-[6px] rounded-full bg-[#06b349] animate-pulse shadow-[0_0_8px_rgba(6,179,73,0.8)]" />
                        <Typography className="text-white text-[11px] font-['Geist:Medium'] tracking-widest uppercase">Node {i + 1} · Active</Typography>
                      </div>
                      <div className="flex gap-[4px]">
                        {[...Array(6)].map((_, j) => (
                          <div key={j} className="w-[4px] h-[12px] bg-[#06b349] rounded-sm opacity-40" style={{ animation: `pulse 1.5s ease-in-out infinite alternate`, animationDelay: `${(i * 6 + j) * 0.1}s` }} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Top Right: Meta Partner */}
            <div className="col-span-4 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] rounded-[24px] p-[40px] flex flex-col items-center justify-center text-center relative hover:bg-[rgba(255,255,255,0.03)] transition-colors duration-500">
              <div className="size-[64px] rounded-[16px] bg-[rgba(24,119,242,0.1)] border border-[rgba(24,119,242,0.2)] flex items-center justify-center mb-[20px] shadow-[0_0_30px_rgba(24,119,242,0.15)]">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#1877F2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
              </div>
              <Typography className="font-['Geist:SemiBold'] font-semibold text-white text-[24px] leading-[1.2] tracking-[-0.5px] mb-[8px]">Official Meta<br />Partner</Typography>
              <Typography className="font-['Geist:Regular'] text-[#7aaa88] text-[14px] leading-[1.5]">Direct API connectivity. No third-party proxies.</Typography>
            </div>

            {/* Bottom Left: Uptime */}
            <div className="col-span-6 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] rounded-[24px] p-[40px] flex items-center gap-[30px] hover:bg-[rgba(255,255,255,0.03)] transition-colors duration-500">
              <div className="relative size-[100px] flex items-center justify-center shrink-0">
                <div className="absolute inset-0 rounded-full border border-[rgba(6,179,73,0.2)]" />
                <div className="absolute inset-[-10px] rounded-full border border-[rgba(6,179,73,0.4)] animate-[spin_8s_linear_infinite]" style={{ borderTopColor: 'transparent', borderBottomColor: 'transparent' }} />
                <Typography className="font-['Geist:SemiBold'] font-semibold text-white text-[28px] tabular-nums">99.9<span className="text-[#06b349]">%</span></Typography>
              </div>
              <div>
                <Typography className="font-['Geist:SemiBold'] font-semibold text-white text-[24px] leading-[1.2] tracking-[-0.5px] mb-[8px]">SLA Uptime</Typography>
                <Typography className="font-['Geist:Regular'] text-[#7aaa88] text-[14px] leading-[1.6]">Redundant infrastructure built to handle millions of messages without dropping a single packet.</Typography>
              </div>
            </div>

            {/* Bottom Right: NOC Monitoring */}
            <div className="col-span-6 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] rounded-[24px] p-[40px] flex flex-col justify-between hover:bg-[rgba(255,255,255,0.03)] transition-colors duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,179,73,0.03)] to-transparent pointer-events-none" />
              <div className="flex flex-col mb-[24px] relative z-10">
                <div className="flex items-center justify-between mb-[8px]">
                  <Typography className="font-['Geist:SemiBold'] font-semibold text-white text-[24px] leading-[1.2] tracking-[-0.5px]">24/7 NOC Monitoring</Typography>
                  <div className="flex items-center gap-[6px] bg-[rgba(6,179,73,0.1)] px-[10px] py-[4px] rounded-full border border-[rgba(6,179,73,0.2)]">
                    <div className="size-[6px] rounded-full bg-[#06b349] animate-pulse" />
                    <Typography className="font-['Geist:Medium'] font-medium text-[#06b349] text-[11px] uppercase tracking-wider">All Systems Operational</Typography>
                  </div>
                </div>
                <Typography className="font-['Geist:Regular'] text-[#7aaa88] text-[14px]">Proactive issue detection before your customers even notice.</Typography>
              </div>

              <div className="space-y-[8px] relative z-10 flex-1">
                {[
                  { label: 'API Gateway (ap-south-1)', ping: '12ms' },
                  { label: 'Database Cluster (Primary)', ping: '8ms' },
                  { label: 'Webhook Processors', ping: '18ms' }
                ].map((s, i) => (
                  <div key={i} className="flex items-center justify-between px-[16px] py-[12px] bg-[rgba(0,0,0,0.2)] border border-[rgba(255,255,255,0.05)] rounded-[12px] backdrop-blur-sm relative overflow-hidden hover:bg-[rgba(255,255,255,0.03)] transition-colors">
                    <div className="absolute left-0 top-0 h-full w-[2px] bg-[#06b349]" />
                    <div className="flex items-center gap-[12px]">
                      <div className="relative flex items-center justify-center size-[12px]">
                        <div className="absolute inset-0 rounded-full bg-[#06b349] animate-[ping_2s_ease-out_infinite] opacity-50" style={{ animationDelay: `${i * 0.3}s` }} />
                        <div className="size-[6px] rounded-full bg-[#06b349]" />
                      </div>
                      <Typography className="text-white text-[13px] font-['Geist:Medium']">{s.label}</Typography>
                    </div>
                    <div className="flex items-center gap-[12px]">
                      <svg width="40" height="16" viewBox="0 0 40 16" fill="none" stroke="rgba(6,179,73,0.5)" strokeWidth="1.5"><path d="M0 8h5l3-6 4 12 3-6h25" strokeLinejoin="round" /></svg>
                      <Typography className="text-[#06b349] text-[12px] font-['Courier_Prime'] tabular-nums">{s.ping}</Typography>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="mt-[50px] relative z-10">
            <a href="https://photonxtech.com" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center gap-[12px] bg-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.15)] hover:border-[rgba(6,179,73,0.5)] rounded-[12px] pl-[26px] pr-[20px] py-[16px] transition-all duration-300 shadow-[0_8px_20px_-8px_rgba(0,0,0,0.5)]">
              <Typography className="font-['Geist:Medium'] font-medium text-white text-[16px]">Visit PhotonX Tech</Typography>
              <div className="size-[24px] rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center group-hover:bg-[#06b349] transition-colors duration-300">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-[2px] transition-transform duration-300"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
            </a>
          </div>
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
            {/* <div className="flex gap-[16px] items-start">
              <PrimaryButton label="Book a demo" light />
              <a href="https://app.wenext.ai" target="_blank" rel="noopener noreferrer"
                className="bg-white hover:bg-[#f8f5ec] active:scale-[0.98] transition-all duration-150 border border-[#dedace] rounded-[8px] cursor-pointer flex items-center pl-[21px] pr-[16px] py-[16px]">
                <Typography className="font-['Geist:Medium'] font-medium text-[#092511] text-[18px] leading-none whitespace-nowrap">Get Started</Typography>
              </a>
            </div> */}
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
