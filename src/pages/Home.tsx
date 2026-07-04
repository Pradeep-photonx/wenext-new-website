import Typography from '@mui/material/Typography';
import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { TrustedByStrip, SecuritySection, PricingTeaser, FinalCTA, HomeFeaturesMockup } from '../components/HomeSections';
import imgInstagramPost from '../assets/instagram-post.png';
import CommentIcon from '../assets/icons/comment.png';
import SmallLogo from '../assets/icons/sm-logo.png';
import User from '../assets/icons/user.png';
import BorderX from "../assets/borders.png";



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
  { title: 'Train the AI on your brand', sub: 'Upload your catalog, FAQs and tone of voice. The AI learns to reply like your best agent in minutes.' },
  { title: 'Set Automations', sub: 'Choose templates for cart recovery, COD-to-prepaid nudges and re-engagement — or build your own flows.' },
  { title: 'Launch your first broadcast.', sub: 'Schedule, segment and send. Watch replies, payments and recoveries land in real time.' },
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
      at(0, () => setWaInputText('Hi! Is the linen kurta still available?'));
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
      <div className="content-stretch flex flex-col items-start w-full min-w-[1440px]" data-node-id="467:952">
        <Header />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="467:971">
          <div className="bg-[#092511] content-stretch flex flex-col items-start px-[75px] relative shrink-0 w-full shadow-[0_0_0_100vmax_#092511] [clip-path:inset(0_-100vmax)]" data-node-id="467:972" data-name="Section">
            <div className="relative shrink-0 w-full" data-node-id="467:973" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
                <div className="absolute h-[860px] left-0 right-0 mix-blend-luminosity opacity-[0.02] top-0" data-node-id="467:974" data-name="image 27">
                  <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage27} />
                </div>
                <div className="relative shrink-0 w-full" data-node-id="467:975">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
                    <div className="border-[rgba(255,255,255,0.1)] border-l border-solid content-stretch flex min-h-[calc(100vh-160px)] items-center min-w-px max-w-[690px] pl-px relative" data-node-id="467:976" data-name="Container">
                      <div className="flex-[1_0_0] min-w-px relative" data-node-id="467:977" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start px-[64px] relative size-full">
                          <div className="relative shrink-0 w-full" data-node-id="467:978" data-name="Container">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
                              <Typography className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[1.2] min-w-full relative shrink-0 text-[68px] text-white tracking-[-1px] w-[min-content]" data-node-id="467:979">
                                Turn every <span className="invisible inline-block w-[340px] align-middle"></span> chat into revenue.
                              </Typography>
                              <Typography className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[1.4] relative shrink-0 text-[#b7b7b7] text-[22px] w-[521px]" data-node-id="467:980">
                                WeNext unifies your WhatsApp inbox, automates replies, runs campaigns, and converts leads — all powered by AI built.
                              </Typography>
                              <div
                                className="absolute border-[1.5px] border-solid h-[84px] left-[2px] rounded-[22px] top-[85px] w-[340px]"
                                style={{ background: HERO_TABS[heroTab].bgPale, borderColor: HERO_TABS[heroTab].border, boxShadow: `0px 18px 40px -20px ${HERO_TABS[heroTab].shadow}` }}
                                data-node-id="467:981"
                              >
                                <div className="flex items-center justify-center overflow-clip px-[24px] py-[1.5px] relative rounded-[inherit] size-full gap-[16px]">
                                  <div
                                    className="shrink-0 size-[40px]"
                                    style={{
                                      background: HERO_TABS[heroTab].iconPaint,
                                      WebkitMaskImage: `url(${HERO_TABS[heroTab].icon})`,
                                      maskImage: `url(${HERO_TABS[heroTab].icon})`,
                                      WebkitMaskSize: 'contain',
                                      maskSize: 'contain',
                                      WebkitMaskRepeat: 'no-repeat',
                                      maskRepeat: 'no-repeat',
                                      WebkitMaskPosition: 'center',
                                      maskPosition: 'center',
                                    }}
                                  />
                                  <Typography
                                    className="font-['Geist:SemiBold'] font-semibold leading-[48px] text-[48px] tracking-[-1.2px] whitespace-nowrap"
                                    style={
                                      HERO_TABS[heroTab].textPaint.startsWith('linear-gradient')
                                        ? {
                                          backgroundImage: HERO_TABS[heroTab].textPaint,
                                          WebkitBackgroundClip: 'text',
                                          backgroundClip: 'text',
                                          WebkitTextFillColor: 'transparent',
                                          color: 'transparent',
                                          display: 'inline-block',
                                        }
                                        : { color: HERO_TABS[heroTab].textPaint }
                                    }
                                  >
                                    {HERO_TABS[heroTab].name}
                                  </Typography>
                                </div>
                                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.6)]" />
                              </div>
                            </div>
                          </div>
                          <div className="relative shrink-0" data-node-id="467:988" data-name="Container">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
                              <div className="bg-[#06b349] hover:bg-[#05a043] active:scale-[0.98] transition-all duration-150 relative rounded-[8px] shrink-0 cursor-pointer" data-node-id="467:989" data-name="Link">
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.992px] items-center overflow-clip pl-[20px] pr-[15px] py-[15px] relative rounded-[inherit] size-full">
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
                              <div className="bg-white hover:bg-[#f8f5ec] active:scale-[0.98] transition-all duration-150 border border-[#dedace] border-solid relative rounded-[8px] shrink-0 cursor-pointer" data-node-id="467:994" data-name="Link">
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[21px] pr-[16px] py-[16px] relative rounded-[inherit] size-full">
                                  <Typography className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-none relative shrink-0 text-[#092511] text-[18px] whitespace-nowrap" data-node-id="467:995">
                                    Get Started
                                  </Typography>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-[rgba(255,255,255,0.1)] border-r border-solid content-stretch flex flex-col min-h-[calc(100vh-160px)] items-start overflow-clip pr-px relative shrink-0 w-[600px]" data-node-id="467:996" data-name="Container">
                      <div className="h-[calc(100vh-150px)] min-h-[640px] relative shrink-0 w-full" data-node-id="467:997" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full z-10">
                          <div className="-translate-x-1/2 absolute flex h-[80px] items-center justify-center left-[calc(50%+0.5px)] bottom-[450px] w-0">
                            <div className="flex-none rotate-90">
                              <div className="h-0 relative w-[80px]" data-node-id="467:998">
                                <div className="absolute inset-[-4px_0_0_0]">
                                  <img alt="" className="block max-w-none size-full" src={imgLine1} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute bg-[#0b2e15] shadow-[0_0_0_10px_#15371f] bottom-[-30px] h-[480px] left-[132px] opacity-50 rounded-tl-[30px] rounded-tr-[30px] w-[338px]" data-node-id="467:999" />
                          <div className="absolute bg-white shadow-[0_0_0_10px_rgba(255,255,255,0.05)] bottom-[10px] h-[480px] left-[132px] rounded-tl-[30px] rounded-tr-[30px] w-[338px] overflow-hidden" data-node-id="467:1000">
                            {heroTab === 0 && (
                              <div className="flex flex-col h-full bg-[#e5ddd5]" style={{ backgroundImage: 'radial-gradient(rgba(11,31,26,0.04) 1px, transparent 1px)', backgroundSize: '14px 14px' }}>
                                <div className="bg-[#075E54] px-[12px] pt-[18px] pb-[10px] flex items-center gap-[8px]">
                                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                  <div className="size-[32px] rounded-full bg-gradient-to-br from-[#25d366] to-[#128C7E] flex items-center justify-center text-white font-['Geist:Bold'] font-bold text-[12px]">PG</div>
                                  <div className="flex-1 flex flex-col">
                                    <Typography className="text-white text-[13px] font-['Geist:SemiBold'] font-semibold leading-none">Prathik Gadde</Typography>
                                    <Typography className="text-[#a3d5b4] text-[9.5px] font-['Geist:Regular'] leading-none mt-[2px]">online</Typography>
                                  </div>
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M15.91 8.41c.39.39.39 1.02 0 1.42L12.83 12.9l3.08 3.07a.996.996 0 1 1-1.41 1.41L8.5 11.34a.996.996 0 0 1 0-1.41l5.99-5.99a.996.996 0 0 1 1.42 1.06z" transform="rotate(180 12 12)" /><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" /></svg>
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" /></svg>
                                  <svg width="4" height="14" viewBox="0 0 4 24" fill="white"><circle cx="2" cy="5" r="2" /><circle cx="2" cy="12" r="2" /><circle cx="2" cy="19" r="2" /></svg>
                                </div>
                                <div className="text-center py-[4px]"><span className="bg-[#E1F2FB] text-[#54656F] text-[8.5px] font-['Geist:Medium'] px-[8px] py-[2px] rounded-[7px]">TODAY</span></div>
                                <div className="flex-1 px-[8px] pb-[8px] flex flex-col gap-[4px] overflow-hidden justify-end">
                                  {chatStep >= 0 && (
                                    <div className="self-start relative bg-white rounded-[7px] rounded-tl-[0px] px-[8px] py-[6px] max-w-[78%] shadow-[0_1px_0.5px_rgba(11,20,26,0.13)] msg-in">
                                      <Typography className="text-[#111b21] text-[11px] font-['Geist:Regular'] leading-[1.3]">Hi! Is the linen kurta still available?</Typography>
                                      <Typography className="text-[#667781] text-[8px] text-right mt-[1px]">10:34</Typography>
                                    </div>
                                  )}
                                  {chatStep === 1 && (
                                    <div className="self-end bg-[#d9fdd3] rounded-[7px] rounded-tr-[0px] px-[10px] py-[8px] shadow-[0_1px_0.5px_rgba(11,20,26,0.13)] msg-in flex gap-[3px] items-center">
                                      <span className="size-[5px] rounded-full bg-[#7a8f86] typing-dot" />
                                      <span className="size-[5px] rounded-full bg-[#7a8f86] typing-dot" />
                                      <span className="size-[5px] rounded-full bg-[#7a8f86] typing-dot" />
                                    </div>
                                  )}
                                  {chatStep >= 2 && (
                                    <div className="self-end relative bg-[#d9fdd3] rounded-[7px] rounded-tr-[0px] px-[8px] py-[6px] max-w-[85%] shadow-[0_1px_0.5px_rgba(11,20,26,0.13)] msg-in">
                                      <Typography className="text-[#7a8f86] text-[7.5px] font-['Geist:Medium'] mb-[1px]">WeNext AI</Typography>
                                      <Typography className="text-[#111b21] text-[11px] font-['Geist:Regular'] leading-[1.3]">Yes! In stock — 3 pieces left. Want me to share a secure UPI link?</Typography>
                                      <Typography className="text-[#667781] text-[8px] text-right mt-[1px]">10:36 <span className="text-[#53bdeb]">✓✓</span></Typography>
                                    </div>
                                  )}
                                  {chatStep >= 3 && (
                                    <div className="self-start relative bg-white rounded-[7px] rounded-tl-[0px] px-[8px] py-[6px] max-w-[55%] shadow-[0_1px_0.5px_rgba(11,20,26,0.13)] msg-in">
                                      <Typography className="text-[#111b21] text-[11px] font-['Geist:Regular'] leading-[1.3]">Yes please.</Typography>
                                      <Typography className="text-[#667781] text-[8px] text-right mt-[1px]">10:37</Typography>
                                    </div>
                                  )}
                                  {chatStep === 4 && (
                                    <div className="self-end bg-[#d9fdd3] rounded-[7px] rounded-tr-[0px] px-[10px] py-[8px] shadow-[0_1px_0.5px_rgba(11,20,26,0.13)] msg-in flex gap-[3px] items-center">
                                      <span className="size-[5px] rounded-full bg-[#7a8f86] typing-dot" />
                                      <span className="size-[5px] rounded-full bg-[#7a8f86] typing-dot" />
                                      <span className="size-[5px] rounded-full bg-[#7a8f86] typing-dot" />
                                    </div>
                                  )}
                                  {chatStep >= 5 && (
                                    <div className="self-end relative bg-[#0f2a1e] rounded-[10px] px-[10px] py-[8px] shadow flex flex-col items-start max-w-[78%] msg-in">
                                      <div className="flex items-center gap-[5px]"><div className="size-[14px] rounded-[3px] bg-[#FFD400] flex items-center justify-center text-[8px] font-bold text-[#0f2a1e]">₹</div><Typography className="text-white text-[10px] font-['Geist:Medium']">UPI Payment</Typography></div>
                                      <Typography className="text-[#FFD400] text-[16px] font-['Geist:Bold'] font-bold leading-[1.1] mt-[4px]">₹2,490</Typography>
                                      <Typography className="text-[#a3d5b4] text-[8.5px] font-['Geist:Regular'] mt-[2px]">Tap to pay · 1 linen kurta · size M</Typography>
                                      <Typography className="text-[#7a8f86] text-[7.5px] mt-[3px] self-end">10:38 <span className="text-[#53bdeb]">✓✓</span></Typography>
                                    </div>
                                  )}
                                </div>
                                <div className="bg-[#f0f2f5] px-[8px] py-[6px] flex items-center gap-[6px]">
                                  {/* Rounded pill input */}
                                  <div className="flex-1 bg-white rounded-[999px] h-[30px] flex items-center pl-[6px] pr-[8px] gap-[6px] shadow-[0_1px_1px_rgba(0,0,0,0.04)]">
                                    {/* Sticker/smiley face with tongue */}
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
                                      <circle cx="12" cy="12" r="9" stroke="#54656F" strokeWidth="1.6" />
                                      <circle cx="8.6" cy="10" r="1.2" fill="#54656F" />
                                      <circle cx="15.4" cy="10" r="1.2" fill="#54656F" />
                                      <path d="M8.5 14c1 1.3 2.2 1.9 3.5 1.9s2.5-.6 3.5-1.9" stroke="#54656F" strokeWidth="1.5" strokeLinecap="round" />
                                      <path d="M13 15.5v1.7c0 .55-.45 1-1 1s-1-.45-1-1v-1.7" fill="#F5A623" />
                                    </svg>
                                    {/* Typed text — reveals letter by letter, caret rides with the text; text scrolls to keep the caret in view */}
                                    <div className="flex-1 min-w-0 overflow-hidden" ref={waInputScrollRef}>
                                      <div className="text-[#111b21] text-[11px] font-['Geist:Regular']" style={{ whiteSpace: 'pre', lineHeight: '13px' }} key={waInputText}>
                                        {waInputText.split('').map((c, i) => (
                                          <span key={i} className="wa-letter" style={{ animationDelay: `${i * 60}ms` }}>{c}</span>
                                        ))}
                                        <span className="wa-caret ml-[1px] inline-block w-[1.5px] h-[13px] bg-[#00A884] align-middle" />
                                      </div>
                                    </div>
                                    {/* Paperclip */}
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0">
                                      <path d="M21 12l-8.5 8.5a5 5 0 01-7-7L14 5a3.5 3.5 0 014.9 5L10.5 18.5a2 2 0 01-2.8-2.8L15 8.5" stroke="#54656F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    {/* Rupee in circle */}
                                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" className="shrink-0">
                                      <circle cx="12" cy="12" r="9" stroke="#54656F" strokeWidth="1.6" />
                                      <path d="M8 7.5h8M8 10.5h8M9 7.5c2.4 0 3.5 1.3 3.5 2.8s-1.1 2.8-3.5 2.8H8l6 4.4" stroke="#54656F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    {/* Camera */}
                                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" className="shrink-0">
                                      <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1z" stroke="#54656F" strokeWidth="1.5" strokeLinejoin="round" />
                                      <circle cx="12" cy="14" r="3.3" stroke="#54656F" strokeWidth="1.5" />
                                    </svg>
                                  </div>
                                  {/* Separate mic button */}
                                  <div className="size-[30px] rounded-full bg-[#00A884] flex items-center justify-center shrink-0 shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 1a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4zm6 11a6 6 0 0 1-12 0H4a8 8 0 0 0 7 7.93V23h2v-3.07A8 8 0 0 0 20 12h-2z" /></svg>
                                  </div>
                                </div>
                                <style>{`
                                  @keyframes waCaret { 0%,49% { opacity: 1; } 50%,100% { opacity: 0; } }
                                  .wa-caret { animation: waCaret 1s steps(2,start) infinite; }
                                  .wa-letter { display: inline-block; max-width: 0; overflow: hidden; animation: waLetterReveal 90ms linear forwards; }
                                  @keyframes waLetterReveal { to { max-width: 2em; } }
                                `}</style>
                              </div>
                            )}
                            {heroTab === 1 && (
                              <div className="relative h-full overflow-hidden bg-white">
                                {/* Post content — scrolls up 25px just before the comments sheet opens */}
                                <div
                                  className="h-full flex flex-col"
                                  style={{
                                    transform: igPostShifted ? 'translateY(-25px)' : 'translateY(0)',
                                    transition: 'transform 450ms cubic-bezier(0.4, 0, 0.2, 1)'
                                  }}
                                >
                                  {/* Post header — avatar + username + three-dot menu */}
                                  <div className="flex items-center gap-[5px] px-[10px] py-[12px] shrink-0">
                                    {/* <div className="size-[30px] rounded-full flex items-center justify-center text-white text-[12px] font-['Geist:Bold'] font-bold shrink-0" style={{ background: 'linear-gradient(135deg, #1FBD79 0%, #0f7d4d 100%)', boxShadow: '0 0 0 1.5px #fff, 0 0 0 2.5px #dbdbdb' }}>W</div> */}
                                    <div className='flex flex-col items-center justify-center'>
                                      <img src={SmallLogo} width={32} alt="" />
                                    </div>
                                    <div className="flex-1 flex items-center gap-[3px]">
                                      <Typography className="text-[#0c221f] text-[12px] font-['Geist:SemiBold'] font-semibold leading-none">wenext.ai</Typography>
                                      <svg width="11" height="11" viewBox="0 0 24 24" fill="#0095F6"><path d="M23 12l-2.5-2.9.4-3.8-3.7-.8-2-3.3L11.5 2.4 8 .2 6 3.5l-3.7.8.4 3.8L.2 11l2.5 2.9-.4 3.8 3.7.8 2 3.3 3.5-1.4 3.5 1.4 2-3.3 3.7-.8-.4-3.8L23 12zm-12.7 4.7L6 12.4l1.4-1.4 2.9 2.9 6.3-6.3L18 9l-7.7 7.7z" /></svg>
                                    </div>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#0c221f"><circle cx="5" cy="12" r="1.7" /><circle cx="12" cy="12" r="1.7" /><circle cx="19" cy="12" r="1.7" /></svg>
                                  </div>

                                  {/* Post image */}
                                  <div className="w-full shrink-0 bg-[#fafafa]" style={{ height: 300 }}>
                                    <img src={imgInstagramPost} alt="wenext.ai post" className="w-full h-full object-cover" />
                                  </div>

                                  {/* Actions row: heart | comment | share ......... bookmark */}
                                  <div className="flex items-center justify-between px-[10px] pt-[8px] pb-[4px] shrink-0">
                                    <div className="flex items-center gap-[14px]">
                                      {/* Like */}
                                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="#0c221f" strokeWidth="1.7" strokeLinejoin="round" />
                                      </svg>
                                      {/* Comment — carries the tap animation that motivates the sheet opening */}
                                      <div className="ig-comment-tap" style={{ transformOrigin: 'center', lineHeight: 0 }}>
                                        {/* <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" stroke="#0c221f" strokeWidth="1.7" strokeLinejoin="round" />
                                      </svg> */}
                                        <img src={CommentIcon} width={21} alt="" />
                                      </div>
                                      {/* Share */}
                                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                        <path d="M22 2L11 13" stroke="#0c221f" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M22 2l-7 20-4-9-9-4 20-7z" stroke="#0c221f" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                      </svg>
                                    </div>
                                    {/* Bookmark right */}
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                      <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" stroke="#0c221f" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  </div>

                                  {/* Meta: likes, caption, view comments, timestamp */}
                                  <div className="px-[10px] pb-[6px] shrink-0">
                                    <Typography className="text-[#0c221f] text-[11.5px] font-['Geist:SemiBold'] font-semibold leading-none">1,247 likes</Typography>
                                    <Typography className="text-[#0c221f] text-[11.5px] mt-[4px] leading-[1.3]">
                                      <span className="font-['Geist:SemiBold'] font-semibold">wenext.ai</span> Turn every conversation into a customer ✨ <span className="text-[#00376b]">#whatsapp</span>
                                    </Typography>
                                    <Typography className="text-[#8e8e8e] text-[11px] mt-[4px] leading-none">View all 892 comments</Typography>
                                    <Typography className="text-[#8e8e8e] text-[9px] mt-[4px] tracking-[0.5px] leading-none uppercase">3 hours ago</Typography>
                                  </div>
                                </div>

                                {/* Comments sheet overlay — always at 60% when open, never full */}
                                <div
                                  className="absolute left-0 right-0 bottom-0 bg-white flex flex-col overflow-hidden z-20"
                                  style={{
                                    height: '66%',
                                    transform: igOverlayOpen ? 'translateY(0)' : 'translateY(100%)',
                                    transition: 'transform 500ms cubic-bezier(0.32, 0.72, 0.35, 1)',
                                    borderTopLeftRadius: 14,
                                    borderTopRightRadius: 14,
                                    boxShadow: '0 -10px 30px rgba(0,0,0,0.25)'
                                  }}
                                >
                                  {/* Comments sheet header */}
                                  <div className="px-[12px] pt-[18px] pb-[8px] flex items-center gap-[8px] border-b border-[#efefef] relative">
                                    <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[32px] h-[3px] rounded-full bg-[#dbdbdb]" />
                                    {/* <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0c221f" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" /></svg> */}
                                    <Typography className="flex-1 text-center text-[#0c221f] text-[13px] font-['Geist:SemiBold'] font-semibold leading-none -translate-x-[6px]">Comments</Typography>
                                    {/* <svg width="16" height="16" viewBox="0 0 24 24" fill="#0c221f"><path d="M21 6.5A5.5 5.5 0 0 0 12 3a5.5 5.5 0 0 0-9 3.5C3 12 12 21 12 21s9-9 9-14.5z" fillOpacity="0" stroke="#0c221f" strokeWidth="1.8" /></svg> */}

                                  </div>

                                  {/* Reel context strip */}
                                  {/* <div className="px-[10px] py-[6px] flex items-center gap-[8px] bg-[#fafafa] border-b border-[#efefef]">
                                    <div className="size-[26px] rounded-[6px] relative overflow-hidden flex items-center justify-center" style={{ background: INSTAGRAM_GRADIENT }}>
                                      <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z" /></svg>
                                    </div>
                                    <div className="size-[22px] rounded-full flex items-center justify-center text-white font-['Geist:Bold'] font-bold text-[9px] shrink-0" style={{ background: 'linear-gradient(135deg, #1FBD79, #0f7d4d)' }}>W</div>
                                    <div className='flex flex-col items-center justify-center'>
                                      <img src={SmallLogo} width={32} alt="" />
                                    </div>

                                    <div className="flex-1 min-w-0 flex flex-col">
                                      <Typography className="text-[#0c221f] text-[10.5px] font-['Geist:SemiBold'] font-semibold leading-none flex items-center gap-[3px]">
                                        wenext.ai
                                        <svg width="9" height="9" viewBox="0 0 24 24" fill="#0095F6"><path d="M23 12l-2.5-2.9.4-3.8-3.7-.8-2-3.3L11.5 2.4 8 .2 6 3.5l-3.7.8.4 3.8L.2 11l2.5 2.9-.4 3.8 3.7.8 2 3.3 3.5-1.4 3.5 1.4 2-3.3 3.7-.8-.4-3.8L23 12zm-12.7 4.7L6 12.4l1.4-1.4 2.9 2.9 6.3-6.3L18 9l-7.7 7.7z" /></svg>
                                      </Typography>
                                      <Typography className="text-[#8e8e8e] text-[9px] font-['Geist:Regular'] leading-none mt-[3px] truncate">Turn every conversation into a customer ✨</Typography>
                                    </div>
                                    <Typography className="text-[#8e8e8e] text-[9px] font-['Geist:Medium']">892</Typography>
                                  </div>  */}

                                  {/* Comments list */}
                                  <div className="flex-1 px-[10px] pt-[10px] pb-[6px] flex flex-col gap-[10px] overflow-hidden">
                                    {/* Seed comment for context */}
                                    <div className="flex gap-[8px] msg-in">
                                      <div className="size-[26px] rounded-full flex items-center justify-center text-white font-['Geist:Bold'] font-bold text-[10px] shrink-0" style={{ background: 'linear-gradient(135deg, #F5A16D, #E0653C)' }}>A</div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-[4px]">
                                          <Typography className="text-[#0c221f] text-[10.5px] font-['Geist:SemiBold'] font-semibold leading-none">arjun_k</Typography>
                                          <Typography className="text-[#8e8e8e] text-[9px] leading-none">· 3h</Typography>
                                        </div>
                                        <Typography className="text-[#0c221f] text-[11px] font-['Geist:Regular'] leading-[1.3] mt-[2px]">This looks super clean 🔥</Typography>
                                        <Typography className="text-[#8e8e8e] text-[9px] font-['Geist:SemiBold'] font-semibold mt-[4px]">Reply</Typography>
                                      </div>
                                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="mt-[6px] shrink-0"><path d="M12 21s-7-4.5-9.5-9.2C.7 8.1 3.2 4 7 4c2 0 3.5 1.3 5 3 1.5-1.7 3-3 5-3 3.8 0 6.3 4.1 4.5 7.8C19 16.5 12 21 12 21z" stroke="#8e8e8e" strokeWidth="1.7" strokeLinejoin="round" /></svg>
                                    </div>

                                    {/* User's just-posted comment */}
                                    {chatStep >= 2 && (
                                      <div className="flex gap-[8px] msg-in">
                                        <div className="size-[26px] rounded-full flex items-center justify-center text-white font-['Geist:Bold'] font-bold text-[10px] shrink-0" style={{ background: 'linear-gradient(135deg, #F5A16D, #E0653C)' }}>K</div>

                                        {/* <div className="size-[26px] rounded-full bg-gradient-to-br from-[#d0d5db] to-[#8f97a3] shrink-0" /> */}
                                        <div className="flex-1 min-w-0">
                                          <div className="flex items-center gap-[4px]">
                                            <Typography className="text-[#0c221f] text-[10.5px] font-['Geist:SemiBold'] font-semibold leading-none">Karthik Reddy</Typography>
                                            <Typography className="text-[#8e8e8e] text-[9px] leading-none">· Just now</Typography>
                                          </div>
                                          <Typography className="text-[#0c221f] text-[12px] font-['Geist:SemiBold'] font-semibold leading-[1.3] mt-[2px] tracking-[0.5px]">WENEXT</Typography>
                                          <Typography className="text-[#8e8e8e] text-[9px] font-['Geist:SemiBold'] font-semibold mt-[4px]">Reply</Typography>
                                        </div>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="mt-[6px] shrink-0"><path d="M12 21s-7-4.5-9.5-9.2C.7 8.1 3.2 4 7 4c2 0 3.5 1.3 5 3 1.5-1.7 3-3 5-3 3.8 0 6.3 4.1 4.5 7.8C19 16.5 12 21 12 21z" stroke="#8e8e8e" strokeWidth="1.7" strokeLinejoin="round" /></svg>
                                      </div>
                                    )}

                                    {/* wenext.ai auto-reply — appears at step 3 so it lands within the 2800ms tab window */}
                                    {chatStep >= 3 && (
                                      <div className="flex gap-[8px] pl-[34px] msg-in">
                                        <div className='flex flex-col items-start justify-start'>
                                          <img src={SmallLogo} width={32} alt="" />
                                        </div>
                                        {/* <div className="size-[22px] rounded-full flex items-center justify-center text-white font-['Geist:Bold'] font-bold text-[9px] shrink-0" style={{ background: 'linear-gradient(135deg, #1FBD79, #0f7d4d)' }}>W</div> */}
                                        <div className="flex-1 min-w-0">
                                          <div className="flex items-center gap-[4px] flex-wrap">
                                            <Typography className="text-[#0c221f] text-[10.5px] font-['Geist:SemiBold'] font-semibold leading-none">wenext.ai</Typography>
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="#0095F6"><path d="M23 12l-2.5-2.9.4-3.8-3.7-.8-2-3.3L11.5 2.4 8 .2 6 3.5l-3.7.8.4 3.8L.2 11l2.5 2.9-.4 3.8 3.7.8 2 3.3 3.5-1.4 3.5 1.4 2-3.3 3.7-.8-.4-3.8L23 12zm-12.7 4.7L6 12.4l1.4-1.4 2.9 2.9 6.3-6.3L18 9l-7.7 7.7z" /></svg>
                                            <Typography className="text-[#8e8e8e] text-[9px] leading-none">· Just now</Typography>
                                          </div>
                                          <Typography className="text-[#0c221f] text-[11px] font-['Geist:Regular'] leading-[1.3] mt-[2px]">
                                            Thank you for showing interest in Wenext, please check your DM ✨
                                          </Typography>
                                          <Typography className="text-[#8e8e8e] text-[9px] font-['Geist:SemiBold'] font-semibold mt-[4px]">Reply</Typography>
                                        </div>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="mt-[6px] shrink-0"><path d="M12 21s-7-4.5-9.5-9.2C.7 8.1 3.2 4 7 4c2 0 3.5 1.3 5 3 1.5-1.7 3-3 5-3 3.8 0 6.3 4.1 4.5 7.8C19 16.5 12 21 12 21z" stroke="#8e8e8e" strokeWidth="1.7" strokeLinejoin="round" /></svg>
                                      </div>
                                    )}
                                  </div>

                                  {/* Comment input */}
                                  <div className="px-[10px] py-[7px] flex items-center gap-[8px] border-t border-[#efefef]">
                                    <div>
                                      <img src={User} alt="" width={22} />
                                    </div>
                                    {/* <div className="size-[26px] rounded-full bg-gradient-to-br from-[#d0d5db] to-[#8f97a3] shrink-0" /> */}
                                    <div className={`flex-1 border rounded-[20px] h-[28px] flex items-center px-[12px] transition-colors ${chatStep < 2 ? 'border-[#0c221f]' : 'border-[#dbdbdb]'}`}>
                                      {chatStep === 0 && (
                                        <>
                                          <Typography className="text-[#c7c7c7] text-[10px]">Add a comment for wenext.ai...</Typography>
                                          <span className="ig-caret ml-[2px] inline-block w-[1.5px] h-[12px] bg-[#0095F6]" />
                                        </>
                                      )}
                                      {chatStep === 1 && (
                                        <>
                                          <span className="text-[#0c221f] text-[11px] font-['Geist:SemiBold'] font-semibold tracking-[0.5px]">
                                            {'WENEXT'.split('').map((c, i) => (
                                              <span key={i} className="ig-letter" style={{ animationDelay: `${100 + i * 150}ms` }}>{c}</span>
                                            ))}
                                          </span>
                                          <span className="ig-caret ml-[1px] inline-block w-[1.5px] h-[12px] bg-[#0095F6]" />
                                        </>
                                      )}
                                      {chatStep >= 2 && (
                                        <Typography className="text-[#8e8e8e] text-[10px]">Add a comment for wenext.ai...</Typography>
                                      )}
                                    </div>
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ transition: 'stroke 0.2s ease' }}>
                                      <path d="M22 2L11 13" stroke={chatStep === 1 ? '#0c221f' : '#eee'} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                      <path d="M22 2l-7 20-4-9-9-4 20-7z" stroke={chatStep === 1 ? '#0c221f' : '#eee'} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    {/* <Typography className="text-[11px] font-['Geist:SemiBold'] font-semibold" style={{ color: chatStep === 1 ? '#0095F6' : '#B2DFFC', transition: 'color 0.2s ease' }}>Post</Typography> */}
                                  </div>

                                  {/* Instagram mockup animations */}
                                  <style>{`
                                  @keyframes caretBlink { 0%,49% { opacity: 1; } 50%,100% { opacity: 0; } }
                                  .ig-caret { animation: caretBlink 1s steps(2,start) infinite; }

                                  /* Letter reveal — each letter appears at staggered delays */
                                  .ig-letter { display: inline-block; opacity: 0; animation: igLetterIn 0.01s linear forwards; }
                                  @keyframes igLetterIn { to { opacity: 1; } }

                                  /* Comment icon tap right before overlay opens (~1400ms after Instagram tab activates) */
                                  @keyframes igCommentTap {
                                    0% { transform: scale(1); }
                                    35% { transform: scale(0.82); }
                                    65% { transform: scale(1.15); }
                                    100% { transform: scale(1); }
                                  }
                                  .ig-comment-tap { animation: igCommentTap 500ms cubic-bezier(0.34, 1.56, 0.64, 1) 1400ms both; }
                                `}</style>
                                </div>
                              </div>
                            )}
                            {heroTab === 2 && (
                              <div className="flex flex-col h-full bg-white">
                                <div className="px-[12px] pt-[18px] pb-[10px] flex items-center gap-[8px]">
                                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1877F2" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                  <div className="relative">
                                    <div className="size-[32px] rounded-full bg-gradient-to-br from-[#1877F2] to-[#0d65d9] flex items-center justify-center text-white font-['Geist:Bold'] font-bold text-[12px]">PG</div>
                                    <div className="absolute bottom-0 right-0 size-[10px] rounded-full bg-[#31a24c] border-2 border-white" />
                                  </div>
                                  <div className="flex-1 flex flex-col">
                                    <Typography className="text-[#0c221f] text-[13px] font-['Geist:SemiBold'] font-semibold leading-none">Prathik Gadde</Typography>
                                    <Typography className="text-[#65676b] text-[9.5px] font-['Geist:Regular'] leading-none mt-[2px]">Active now</Typography>
                                  </div>
                                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2"><path d="M22 4.27v15.46c0 .65-.74 1.02-1.26.64L17 17.5V18a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v.5l3.74-2.87c.52-.38 1.26-.01 1.26.64z" /></svg>
                                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.05 15.05 0 0 1-6.59-6.58l2.2-2.21c.27-.27.35-.67.24-1.02A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" /></svg>
                                </div>
                                <div className="flex-1 px-[10px] py-[10px] flex flex-col gap-[5px] overflow-hidden justify-end">
                                  {chatStep >= 0 && (
                                    <div className="self-start bg-[#f0f2f5] rounded-[18px] rounded-bl-[4px] px-[12px] py-[7px] max-w-[78%] msg-in">
                                      <Typography className="text-[#0c221f] text-[11px] font-['Geist:Regular'] leading-[1.3]">Saw your post — is the linen kurta still up?</Typography>
                                    </div>
                                  )}
                                  {chatStep === 1 && (
                                    <div className="self-end bg-gradient-to-br from-[#0084ff] to-[#0064d8] rounded-[18px] rounded-br-[4px] px-[14px] py-[10px] flex gap-[4px] items-center msg-in">
                                      <span className="size-[5px] rounded-full bg-white typing-dot" />
                                      <span className="size-[5px] rounded-full bg-white typing-dot" />
                                      <span className="size-[5px] rounded-full bg-white typing-dot" />
                                    </div>
                                  )}
                                  {chatStep >= 2 && (
                                    <div className="self-end bg-gradient-to-br from-[#0084ff] to-[#0064d8] rounded-[18px] rounded-br-[4px] px-[12px] py-[7px] max-w-[85%] flex flex-col msg-in">
                                      <Typography className="text-white/80 text-[7.5px] font-['Geist:Medium'] mb-[1px]">WeNext AI</Typography>
                                      <Typography className="text-white text-[11px] font-['Geist:Regular'] leading-[1.3]">Yes! Size M, 3 left. Want me to send a payment link?</Typography>
                                    </div>
                                  )}
                                  {chatStep >= 3 && (
                                    <div className="self-start bg-[#f0f2f5] rounded-[18px] rounded-bl-[4px] px-[12px] py-[7px] max-w-[55%] msg-in">
                                      <Typography className="text-[#0c221f] text-[11px] font-['Geist:Regular'] leading-[1.3]">Yes please.</Typography>
                                    </div>
                                  )}
                                  {chatStep === 4 && (
                                    <div className="self-end bg-gradient-to-br from-[#0084ff] to-[#0064d8] rounded-[18px] rounded-br-[4px] px-[14px] py-[10px] flex gap-[4px] items-center msg-in">
                                      <span className="size-[5px] rounded-full bg-white typing-dot" />
                                      <span className="size-[5px] rounded-full bg-white typing-dot" />
                                      <span className="size-[5px] rounded-full bg-white typing-dot" />
                                    </div>
                                  )}
                                  {chatStep >= 5 && (
                                    <div className="self-end bg-white border border-[#e4e6eb] rounded-[16px] overflow-hidden max-w-[78%] msg-in">
                                      <div className="bg-[#1877F2] px-[12px] py-[6px] flex items-center gap-[4px]">
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" /></svg>
                                        <Typography className="text-white text-[9px] font-['Geist:Medium']">Secure checkout</Typography>
                                      </div>
                                      <div className="px-[12px] py-[10px]">
                                        <Typography className="text-[#0c221f] text-[15px] font-['Geist:Bold'] font-bold leading-none">Pay ₹2,490</Typography>
                                        <Typography className="text-[#65676b] text-[9px] font-['Geist:Regular'] mt-[2px]">linen kurta · size M</Typography>
                                        <div className="mt-[6px] rounded-[8px] py-[5px] text-center text-[10px] text-white bg-[#1877F2] font-['Geist:SemiBold'] font-semibold">Open payment</div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                                <div className="px-[10px] py-[7px] flex items-center gap-[6px] border-t border-[#e4e6eb]">
                                  <div className="size-[26px] rounded-full bg-[#e7f3ff] flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="#1877F2"><path d="M12 5v14m-7-7h14" strokeWidth="3" stroke="#1877F2" /></svg></div>
                                  <div className="size-[26px] rounded-full bg-[#e7f3ff] flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="#1877F2"><circle cx="12" cy="13" r="3" /><path d="M9 2L7.17 4H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3.17L15 2H9z" fill="none" stroke="#1877F2" strokeWidth="2" /></svg></div>
                                  <div className="flex-1 bg-[#f0f2f5] rounded-[18px] h-[24px] flex items-center px-[10px] justify-between"><Typography className="text-[#65676b] text-[10px]">Aa</Typography><svg width="14" height="14" viewBox="0 0 24 24" fill="#65676b"><circle cx="12" cy="12" r="10" fill="none" stroke="#65676b" strokeWidth="2" /><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" strokeLinecap="round" stroke="#65676b" strokeWidth="2" /></svg></div>
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z" /></svg>
                                </div>
                              </div>
                            )}
                          </div>
                          <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.1)] flex items-center justify-center left-[calc(50%+0.5px)] p-[5px] rounded-[50px] bottom-[530px]" data-node-id="467:1001">
                            {HERO_TABS.map((tab, i) => {
                              const isActive = i === heroTab;
                              return (
                                <button
                                  key={i}
                                  onClick={() => { setHeroTab(i); setHeroProgress(0); }}
                                  className={`relative shrink-0 rounded-[30px] overflow-hidden cursor-pointer outline-none ${isActive ? '' : 'hover:bg-white/5'}`}
                                  style={isActive ? { background: tab.fillBg } : undefined}
                                >
                                  {isActive && (
                                    <div
                                      className="absolute inset-y-0 left-0 pointer-events-none transition-[width] duration-[60ms] ease-linear"
                                      style={{ width: `${heroProgress}%`, background: 'linear-gradient(90deg, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.16) 100%)', backdropFilter: 'blur(1.5px)', WebkitBackdropFilter: 'blur(1.5px)' }}
                                    />
                                  )}
                                  <div className="relative z-[1] flex gap-[5px] items-center justify-center px-[15px] py-[10px]">
                                    <div className="relative shrink-0 size-[20px]">
                                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={tab.icon} />
                                    </div>
                                    <Typography className={`font-['Geist:Medium'] font-medium leading-none text-[18px] text-center tracking-[-0.5px] whitespace-nowrap transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#d8f1df]'}`}>
                                      {tab.name}
                                    </Typography>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[832px] left-[-20px] right-[-20px] top-[-20px] pointer-events-none overflow-hidden" data-node-id="467:1014">
                  <div className="absolute inset-[-42.07%_-25.18%_-52.88%_-25.18%]">
                    <img alt="" className="block w-full h-full object-cover" src={imgGroup7} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="bg-[#092511] border-[rgba(255,255,255,0.1)] border-b border-solid border-t content-stretch flex flex-col items-start overflow-clip py-[26px] relative shrink-0 w-full shadow-[0_0_0_100vmax_#092511] [clip-path:inset(0_-100vmax)]" data-node-id="467:1019" data-name="Container">
            <div className="relative shrink-0 w-full overflow-hidden" data-node-id="467:1020">
              <div className="flex gap-[60px] items-center w-max animate-[logos-scroll_30s_linear_infinite]">
                {Array.from({ length: 2 }).flatMap((_, dup) => [
                  <div key={`g14-${dup}-1`} className="h-[30px] shrink-0 w-[89px] relative"><img alt="" className="absolute inset-0 max-w-none object-cover opacity-50 pointer-events-none size-full" src={imgImage14} /></div>,
                  <div key={`m21-${dup}-1`} className="h-[25px] shrink-0 w-[117px] relative"><img alt="" className="absolute inset-0 max-w-none object-cover opacity-50 pointer-events-none size-full" src={imgImage21} /></div>,
                  <div key={`g14-${dup}-2`} className="h-[30px] shrink-0 w-[89px] relative"><img alt="" className="absolute inset-0 max-w-none object-cover opacity-50 pointer-events-none size-full" src={imgImage14} /></div>,
                  <div key={`m21-${dup}-2`} className="h-[25px] shrink-0 w-[117px] relative"><img alt="" className="absolute inset-0 max-w-none object-cover opacity-50 pointer-events-none size-full" src={imgImage21} /></div>,
                  <div key={`g14-${dup}-3`} className="h-[30px] shrink-0 w-[89px] relative"><img alt="" className="absolute inset-0 max-w-none object-cover opacity-50 pointer-events-none size-full" src={imgImage14} /></div>,
                  <div key={`m21-${dup}-3`} className="h-[25px] shrink-0 w-[117px] relative"><img alt="" className="absolute inset-0 max-w-none object-cover opacity-50 pointer-events-none size-full" src={imgImage21} /></div>,
                  <div key={`g14-${dup}-4`} className="h-[30px] shrink-0 w-[89px] relative"><img alt="" className="absolute inset-0 max-w-none object-cover opacity-50 pointer-events-none size-full" src={imgImage14} /></div>,
                  <div key={`m21-${dup}-4`} className="h-[25px] shrink-0 w-[117px] relative"><img alt="" className="absolute inset-0 max-w-none object-cover opacity-50 pointer-events-none size-full" src={imgImage21} /></div>,
                ])}
              </div>
            </div>
          </div> */}
          <TrustedByStrip />

          <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[75px] relative shrink-0 w-full" data-node-id="467:1029" data-name="Container">
            <div className="border-[#e0dac6] border-b border-l border-r border-solid relative shrink-0 w-full" data-node-id="467:1030">
              <div className="bg-clip-padding border-[transparent] border-b border-l border-r border-solid content-stretch flex flex-col gap-[15px] items-center py-[40px] relative size-full">
                <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-node-id="467:1031">
                  <div className="bg-[#06b349] relative shrink-0 size-[10px]" data-node-id="467:1032" />
                  <Typography className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Courier_Prime:Regular'] leading-[1.4] not-italic relative shrink-0 text-[#0c221f] text-[18px] text-center whitespace-nowrap" data-node-id="467:1033">
                    Pain Points
                  </Typography>
                </div>
                <Typography className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[1.4] min-w-full relative shrink-0 text-[#0c221f] text-[54px] text-center tracking-[-1px] w-[min-content]" data-node-id="467:1034">
                  Sound familiar?
                </Typography>
              </div>
            </div>
          </div>
          <div className="border-[#e0dac6] border-b border-solid content-stretch flex flex-col items-start px-[75px] relative shrink-0 w-full" data-node-id="467:1062">
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
                      Messages slip the cracks.
                    </Typography>
                    <Typography className="font-['Geist:Regular'] font-normal leading-[1.4] relative shrink-0 text-[#60584c] text-[16px] w-full" data-node-id="467:1115">
                      Three inboxes. Three teams. One missed customer.
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="bg-white border-[#e0dac6] border-l border-r border-solid content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip p-[10px] relative spotlight-card" data-node-id="467:1116">
                <div className="bg-[#f8f5ec] content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[420px] items-start min-w-px overflow-clip p-[30px] relative" data-node-id="467:1117">
                  <div className="absolute inset-0 pointer-events-none" data-node-id="467:1118" data-name="image 3134" style={{ backgroundImage: 'linear-gradient(rgba(9,37,17,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(9,37,17,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px relative w-full">
                    <div className="w-full bg-white rounded-[14px] border border-[#eceae3] shadow-[0_16px_38px_-22px_rgba(11,31,26,0.28)] overflow-hidden">
                      <div className="flex items-center justify-between px-[16px] py-[13px] border-b border-[#f1f1f1]">
                        <div className="flex items-center gap-[11px]">
                          <div className="size-[36px] rounded-[10px] bg-[rgba(245,158,11,0.14)] flex items-center justify-center shrink-0"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#d97a00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg></div>
                          <div>
                            <Typography className="font-['Geist:SemiBold'] font-semibold text-[#092511] text-[14px] leading-none">Priya's cart</Typography>
                            <Typography className="font-['Geist:Regular'] text-[#939393] text-[11px] mt-[4px]">Abandoned · 6h ago</Typography>
                          </div>
                        </div>
                        <span className="bg-[#fff1e6] text-[#c2410c] rounded-full px-[10px] py-[4px] text-[11px] font-['Geist:Medium'] font-medium whitespace-nowrap">Cold</span>
                      </div>
                      <div className="px-[16px] py-[14px] flex flex-col gap-[13px]">
                        {[{ n: 'Linen Kurta — Sage', q: 'Size M · Qty 1', p: '₹1,499', g: 'linear-gradient(135deg,#cdeed8,#a9dcc0)' }, { n: 'Silk Dupatta', q: 'Qty 1', p: '₹899', g: 'linear-gradient(135deg,#f6ddc4,#eec59c)' }].map((it) => (
                          <div key={it.n} className="flex items-center gap-[12px]">
                            <div className="size-[42px] rounded-[9px] shrink-0" style={{ background: it.g }} />
                            <div className="flex-1 min-w-0">
                              <Typography className="font-['Geist:Medium'] font-medium text-[#092511] text-[13px] truncate">{it.n}</Typography>
                              <Typography className="font-['Geist:Regular'] text-[#939393] text-[11px] mt-[2px]">{it.q}</Typography>
                            </div>
                            <Typography className="font-['Geist:SemiBold'] font-semibold text-[#092511] text-[13px] shrink-0">{it.p}</Typography>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between px-[16px] py-[13px] border-t border-[#f1f1f1] bg-[#faf8f1]">
                        <Typography className="font-['Geist:Medium'] font-medium text-[#60584c] text-[12px]">Cart total</Typography>
                        <Typography className="font-['Geist:SemiBold'] font-semibold text-[#092511] text-[18px]">₹2,398</Typography>
                      </div>
                      <div className="flex items-center gap-[8px] px-[16px] py-[11px] border-t border-[#f1f1f1]">
                        {/* <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c98a3a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg> */}
                        {/* <Typography className="font-['Geist:Medium'] font-medium text-[#a06a2a] text-[12px]">No follow-up sent</Typography> */}
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start relative shrink-0 text-center w-full" data-node-id="467:1165">
                    <Typography className="font-['Geist:SemiBold'] font-semibold leading-[1.1] relative shrink-0 text-[#08090a] text-[24px] w-full" data-node-id="467:1166">
                      Carts go cold.
                    </Typography>
                    <div className="font-['Geist:Regular'] font-normal leading-[0] relative shrink-0 text-[#60584c] text-[16px] w-full" data-node-id="467:1167">
                      <Typography className="leading-[1.4] mb-0">No nudge, no follow-up. Revenue walks away.</Typography>
                      {/* <Typography className="leading-[1.4]">​</Typography> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border-[#e0dac6] border-l border-solid content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip p-[10px] relative spotlight-card" data-node-id="467:1168">
                <div className="bg-[#f8f5ec] content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[420px] items-start min-w-px overflow-clip p-[30px] relative" data-node-id="467:1169">
                  <div className="absolute inset-0 pointer-events-none" data-node-id="467:1170" data-name="image 3134" style={{ backgroundImage: 'linear-gradient(rgba(9,37,17,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(9,37,17,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px relative w-full">
                    <div className="w-full bg-white rounded-[14px] border border-[#eceae3] shadow-[0_16px_38px_-22px_rgba(11,31,26,0.28)] overflow-hidden">
                      <div className="flex items-center gap-[10px] px-[15px] py-[11px] border-b border-[#f1f1f1]">
                        <div className="size-[34px] rounded-full bg-[#eceff3] flex items-center justify-center shrink-0"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c8694" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4" /><line x1="8" y1="16" x2="8" y2="16" /><line x1="16" y1="16" x2="16" y2="16" /></svg></div>
                        <div className="flex-1 min-w-0">
                          <Typography className="font-['Geist:SemiBold'] font-semibold text-[#092511] text-[13px] leading-none">Auto-reply Bot</Typography>
                          <Typography className="font-['Geist:Regular'] text-[#939393] text-[11px] mt-[3px]">Keyword-only flow</Typography>
                        </div>
                        <span className="bg-[#eceff3] text-[#7c8694] rounded-full px-[9px] py-[3px] text-[10px] font-['Geist:Medium'] font-medium">Bot</span>
                      </div>
                      <div className="px-[13px] py-[11px] flex flex-col gap-[7px]" style={{ background: '#f4f6f8' }}>
                        <div className="self-start max-w-[88%] bg-white rounded-[11px] rounded-tl-[3px] px-[12px] py-[8px] shadow-sm"><Typography className="text-[#0c221f] text-[12px] leading-[1.4]">Do you have this in cotton, not linen? 🤔</Typography></div>
                        <div className="self-end max-w-[92%] bg-[#fbe9e3] rounded-[11px] rounded-tr-[3px] px-[12px] py-[9px]">
                          <div className="flex items-center gap-[6px] mb-[7px]"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#c2410c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg><Typography className="text-[#9a5a3f] text-[12px]">Sorry, I didn't understand.</Typography></div>
                          <div className="flex flex-wrap gap-[5px]">{['Catalog', 'Orders', 'Support'].map((m) => (<span key={m} className="bg-white border border-[#ecd9cf] rounded-[6px] px-[7px] py-[3px] font-['Courier_Prime'] text-[#9a5a3f] text-[10px]">{m}</span>))}</div>
                        </div>
                        <div className="self-start max-w-[62%] bg-white rounded-[11px] rounded-tl-[3px] px-[12px] py-[8px] shadow-sm opacity-65"><Typography className="text-[#939393] text-[12px]">never mind 😕</Typography></div>
                      </div>
                      <div className="flex items-center gap-[8px] px-[15px] py-[10px] border-t border-[#f1f1f1] bg-[#fff]">
                        {/* <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e7480c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg> */}
                        {/* <Typography className="font-['Geist:SemiBold'] font-semibold text-[#c2410c] text-[12px]">Customer left · sale lost</Typography> */}
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start relative shrink-0 text-center w-full" data-node-id="467:1217">
                    <Typography className="font-['Geist:SemiBold'] font-semibold leading-[1.1] relative shrink-0 text-[#08090a] text-[24px] w-full" data-node-id="467:1218">
                      Bots break real chats.
                    </Typography>
                    <div className="font-['Geist:Regular'] font-normal leading-[0] relative shrink-0 text-[#60584c] text-[16px] w-full" data-node-id="467:1219">
                      <Typography className="leading-[1.4] mb-0">Off-script questions kill the sale.</Typography>
                      {/* <Typography className="leading-[1.4]">​</Typography> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[75px] relative shrink-0 w-full" data-node-id="467:1220" data-name="Container">
            <div className="border-[#e0dac6] border-l border-r border-solid relative shrink-0 w-full" data-node-id="467:1221">
              <div className="bg-clip-padding border-[transparent] border-l border-r border-solid content-stretch flex flex-col gap-[15px] items-start justify-center px-[50px] py-[40px] relative size-full">
                <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-node-id="467:1222">
                  <div className="bg-[#06b349] relative shrink-0 size-[10px]" data-node-id="467:1223" />
                  <Typography className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Courier_Prime:Regular'] leading-[1.4] not-italic relative shrink-0 text-[#0c221f] text-[18px] text-center whitespace-nowrap" data-node-id="467:1224">
                    Pain Points
                  </Typography>
                </div>
                <Typography className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[1.2] min-w-full relative shrink-0 text-[#0c221f] text-[54px] tracking-[-1px] w-[min-content]" data-node-id="467:1225">
                  Everything you need.
                  <br aria-hidden />
                  Nothing you don’t
                </Typography>
              </div>
            </div>
          </div>
          <div className="border-[#e0dac6] border-b border-l border-r border-solid content-stretch flex items-start px-[75px] relative shrink-0 w-full" data-node-id="467:1226">
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
          <div className="border-[#e0dac6] border-b border-solid content-stretch flex flex-col items-start px-[75px] relative shrink-0 w-full" data-node-id="467:1259">
            <div className="border-[#e0dac6] border-l border-r border-solid content-stretch flex items-center relative shrink-0 w-full" data-node-id="467:1260">
              <div className="bg-[rgba(9,37,17,0.8)] border-[rgba(206,201,184,0.5)] border-r border-solid content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip pt-[10px] px-[10px] relative" data-node-id="467:1261">
                <div className="bg-[#092511] content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[780px] items-start min-w-px overflow-clip p-[40px] relative" data-node-id="467:1262">
                  <div className="absolute inset-0 mix-blend-luminosity opacity-[0.06] pointer-events-none" data-node-id="467:1263" data-name="image 27">
                    <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgImage27} />
                  </div>
                  <div className="absolute top-[108px] h-[692px] left-1/2 -translate-x-1/2 w-[1280px]" data-node-id="467:1264" data-name="image 3145">
                    <HomeFeaturesMockup tab={dashTab} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="content-stretch flex flex-col items-start px-[75px] relative shrink-0 w-full" data-node-id="467:1265">
            <div className="border-[#cec9b8] border-b border-l border-r border-solid content-stretch flex items-center relative shrink-0 w-full" data-node-id="467:1266">
              <div className="content-stretch flex flex-[320_0_0] flex-col gap-[12px] h-[178px] items-start min-w-px p-[40px] relative" data-node-id="467:1267" data-name="Container">
                <div className="h-[60px] relative shrink-0 w-[108.258px]" data-node-id="467:1268" data-name="Heading 3">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <Typography className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro_Variable_Regular:Regular'] leading-[60px] left-[54.5px] not-italic text-[#222] text-[56px] text-center top-[0.5px] tracking-[-1.568px] whitespace-nowrap" data-node-id="467:1269"><Counter target={83} suffix="%" />
                    </Typography>
                  </div>
                </div>
                <div className="relative shrink-0 w-[240px]" data-node-id="467:1270" data-name="Paragraph">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <Typography className="[word-break:break-word] font-['SF_Pro_Variable_Regular:Regular'] leading-[26px] not-italic relative shrink-0 text-[#646464] text-[18px] tracking-[-0.288px] whitespace-nowrap" data-node-id="467:1271">
                      Reduction in time to decision
                    </Typography>
                  </div>
                </div>
                <div className="absolute border-[#e4e4e4] border-r-[0.5px] border-solid h-[178px] left-0 top-0 w-[320px]" data-node-id="467:1272" data-name="Text" />
              </div>
              <div className="content-stretch flex flex-[320_0_0] flex-col gap-[12px] h-[178px] items-start min-w-px p-[40px] relative" data-node-id="467:1273" data-name="Container">
                <div className="h-[60px] relative shrink-0 w-[109.016px]" data-node-id="467:1274" data-name="Heading 3">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <Typography className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro_Variable_Regular:Regular'] leading-[60px] left-[55px] not-italic text-[#222] text-[56px] text-center top-[0.5px] tracking-[-1.568px] whitespace-nowrap" data-node-id="467:1275"><Counter target={2.9} decimals={1} suffix="X" />
                    </Typography>
                  </div>
                </div>
                <div className="relative shrink-0 w-[240px]" data-node-id="467:1276" data-name="Paragraph">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <Typography className="[word-break:break-word] font-['SF_Pro_Variable_Regular:Regular'] leading-[26px] not-italic relative shrink-0 text-[#646464] text-[18px] tracking-[-0.288px] whitespace-nowrap" data-node-id="467:1277">
                      Cases per team member
                    </Typography>
                  </div>
                </div>
                <div className="absolute border-[#e4e4e4] border-r-[0.5px] border-solid h-[178px] left-0 top-0 w-[320px]" data-node-id="467:1278" data-name="Text" />
              </div>
              <div className="content-stretch flex flex-[320_0_0] flex-col gap-[12px] h-[178px] items-start min-w-px p-[40px] relative" data-node-id="467:1279" data-name="Container">
                <div className="h-[60px] relative shrink-0 w-[109.016px]" data-node-id="467:1280" data-name="Heading 3">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <Typography className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro_Variable_Regular:Regular'] leading-[60px] left-[55px] not-italic text-[#222] text-[56px] text-center top-[0.5px] tracking-[-1.568px] whitespace-nowrap" data-node-id="467:1281"><Counter target={2.9} decimals={1} suffix="X" />
                    </Typography>
                  </div>
                </div>
                <div className="relative shrink-0 w-[240px]" data-node-id="467:1282" data-name="Paragraph">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <Typography className="[word-break:break-word] font-['SF_Pro_Variable_Regular:Regular'] leading-[26px] not-italic relative shrink-0 text-[#646464] text-[18px] tracking-[-0.288px] whitespace-nowrap" data-node-id="467:1283">
                      Cases per team member
                    </Typography>
                  </div>
                </div>
                <div className="absolute border-[#e4e4e4] border-r-[0.5px] border-solid h-[178px] left-0 top-0 w-[320px]" data-node-id="467:1284" data-name="Text" />
              </div>
              <div className="content-stretch flex flex-[320_0_0] flex-col gap-[12px] h-[178px] items-start min-w-px p-[40px] relative" data-node-id="467:1285" data-name="Container">
                <div className="h-[60px] relative shrink-0 w-[108.258px]" data-node-id="467:1286" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <Typography className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro_Variable_Regular:Regular'] leading-[60px] left-[54px] not-italic text-[#222] text-[56px] text-center top-[0.5px] tracking-[-1.568px] whitespace-nowrap" data-node-id="467:1287"><Counter target={74} suffix="%" />
                    </Typography>
                  </div>
                </div>
                <div className="relative shrink-0 w-[240px]" data-node-id="467:1288" data-name="Paragraph">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <Typography className="[word-break:break-word] font-['SF_Pro_Variable_Regular:Regular'] leading-[26px] not-italic relative shrink-0 text-[#646464] text-[18px] tracking-[-0.288px] whitespace-nowrap" data-node-id="467:1289">
                      Reduction in manual work
                    </Typography>
                  </div>
                </div>
                <div className="absolute border-[#e4e4e4] border-r-[0.5px] border-solid h-[178px] left-0 top-0 w-[320px]" data-node-id="467:1290" data-name="Text" />
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
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[75px] relative shrink-0 w-full" data-node-id="467:1461" data-name="Container">
            <div className="border-[#e0dac6] border-l border-r border-solid relative shrink-0 w-full" data-node-id="467:1462">
              <div className="bg-clip-padding border-[transparent] border-l border-r border-solid content-stretch flex flex-col gap-[15px] items-center justify-center px-[50px] py-[40px] relative size-full">
                <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-node-id="467:1463">
                  <div className="bg-[#06b349] relative shrink-0 size-[10px]" data-node-id="467:1464" />
                  <Typography className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Courier_Prime:Regular'] leading-[1.4] not-italic relative shrink-0 text-[#0c221f] text-[18px] text-center whitespace-nowrap" data-node-id="467:1465">
                    Pain Points
                  </Typography>
                </div>
                <Typography className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[1.2] min-w-full relative shrink-0 text-[#0c221f] text-[54px] text-center tracking-[-1px] w-[min-content]" data-node-id="467:1466">
                  Everything you need.
                  <br aria-hidden />
                  Nothing you don’t
                </Typography>
              </div>
            </div>
          </div>
          <div className="border-[#e0dac6] border-b border-solid content-stretch flex flex-col items-start overflow-clip px-[75px] relative shrink-0 w-full" data-node-id="467:1467" data-name="Section">
            <div className="border-[#cec9b8] border-l border-r border-solid border-t relative shrink-0 w-full" data-node-id="467:1468" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-px px-px relative size-full">
                <div className="flex-[1_0_0] min-w-px relative" data-node-id="467:1469">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                    <div className="bg-[#f3efe3] border-[#e0dac6] border-r border-solid content-stretch flex w-1/3 shrink-0 flex-col gap-[18px] h-[906.953px] items-start min-h-[280px] overflow-clip pl-[32px] pr-[33px] py-[32px] relative" data-node-id="467:1470" data-name="Container">
                      <div className="bg-[rgba(6,179,73,0.15)] flex items-center justify-center relative rounded-[12px] shrink-0 size-[44px]" data-node-id="467:1471"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></div>
                      <div className="relative shrink-0 w-full" data-node-id="467:1473" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                          <Typography className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[26.4px] relative shrink-0 text-[#0b1f1a] text-[22px] tracking-[-0.44px] whitespace-nowrap" data-node-id="467:1474">
                            Conversational Commerce
                          </Typography>
                        </div>
                      </div>
                      <div className="shrink-0 relative w-full" data-node-id="467:1475" data-name="Paragraph (auto margin alignment)">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="467:1476" data-name="Paragraph">
                            <Typography className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[21.7px] relative shrink-0 text-[#6b6354] text-[14px] w-[367px]" data-node-id="467:1477">
                              WhatsApp, Instagram DMs, Facebook comments and web chat — all in one screen. Assign to teammates, tag, snooze, never lose a lead again.
                            </Typography>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-[-64px] left-[32px] right-[33px] flex flex-col gap-[40px] items-stretch" data-node-id="467:1478" data-name="MetricsAndMockup">
                        <div className="flex gap-[20px] items-start w-[338px] self-center">
                          <div className="flex flex-col gap-[6px] items-start flex-1">
                            <div className="flex items-start gap-[3px]">
                              <Typography className="font-['Geist:SemiBold'] font-semibold text-[#06b349] text-[20px] leading-[1]">28%</Typography>
                              <svg width="10" height="12" viewBox="0 0 10 12" fill="none" className="mt-[2px] shrink-0"><path d="M5 11V1M5 1L1 5M5 1L9 5" stroke="#06b349" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </div>
                            <Typography className="font-['Geist:Regular'] font-normal text-[#0b1f1a] text-[12px] leading-[1.4]">Conversion Rate</Typography>
                          </div>
                          <div className="flex flex-col gap-[6px] items-start flex-1">
                            <div className="flex items-start gap-[3px]">
                              <Typography className="font-['Geist:SemiBold'] font-semibold text-[#06b349] text-[20px] leading-[1]">19%</Typography>
                              <svg width="10" height="12" viewBox="0 0 10 12" fill="none" className="mt-[2px] shrink-0"><path d="M5 11V1M5 1L1 5M5 1L9 5" stroke="#06b349" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </div>
                            <Typography className="font-['Geist:Regular'] font-normal text-[#0b1f1a] text-[12px] leading-[1.4]">Avg. Order Value</Typography>
                          </div>
                          <div className="flex flex-col gap-[6px] items-start flex-1">
                            <div className="flex items-start gap-[3px]">
                              <Typography className="font-['Geist:SemiBold'] font-semibold text-[#06b349] text-[20px] leading-[1]">42%</Typography>
                              <svg width="10" height="12" viewBox="0 0 10 12" fill="none" className="mt-[2px] shrink-0"><path d="M5 11V1M5 1L1 5M5 1L9 5" stroke="#06b349" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </div>
                            <Typography className="font-['Geist:Regular'] font-normal text-[#0b1f1a] text-[12px] leading-[1.4]">Cart Recovery</Typography>
                          </div>
                        </div>
                        <div className="self-center bg-white rounded-[20px] w-[338px] h-[573px] shadow-[0_0_0_10px_rgba(87,73,30,0.05)] overflow-hidden flex flex-col">
                          <div className="px-[16px] pt-[18px] pb-[10px] border-b border-[#f3efe3] flex items-center justify-between">
                            <div className="flex items-center gap-[8px]">
                              <div className="size-[28px] rounded-[7px] bg-[#06b349] flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg></div>
                              <div>
                                <Typography className="text-[#0c221f] text-[12px] font-['Geist:SemiBold'] font-semibold leading-none">Unified Inbox</Typography>
                                <Typography className="text-[#60584c] text-[9px] leading-none mt-[2px]">All channels · 27 unread</Typography>
                              </div>
                            </div>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#60584c" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" /></svg>
                          </div>
                          <div className="flex gap-[6px] px-[14px] py-[8px] border-b border-[#f3efe3]">
                            <div className="bg-[#e5f6e7] px-[8px] py-[3px] rounded-full flex items-center gap-[3px]">
                              <svg width="8" height="8" viewBox="0 0 24 24" fill="#06b349"><circle cx="12" cy="12" r="12" /></svg>
                              <Typography className="text-[#06b349] text-[9px] font-['Geist:Medium']">All 27</Typography>
                            </div>
                            <div className="px-[8px] py-[3px] text-[#60584c] text-[9px]">Unread 12</div>
                            <div className="px-[8px] py-[3px] text-[#60584c] text-[9px]">Mine 6</div>
                          </div>
                          <div className="flex-1 overflow-hidden">
                            {[
                              { name: 'Prathik Gadde', preview: 'Yes, please share the UPI link', time: '10:38', ch: 'wa', count: 2, active: true },
                              { name: 'Aanya Verma', preview: 'Loved your kurta drop! Available...', time: '09:12', ch: 'ig', count: 1, active: false },
                              { name: 'Karthik Iyer', preview: 'Is COD available on this?', time: '08:47', ch: 'fb', count: 4, active: false },
                              { name: 'Rahul Mehta', preview: 'Cotton shirt order status please', time: 'Yest', ch: 'wa', count: 0, active: false },
                              { name: 'Diya Patel', preview: 'Cotton dress size XL?', time: 'Yest', ch: 'ig', count: 1, active: false },
                              { name: 'Vikram Singh', preview: 'Linen kurta tracking link?', time: '2d', ch: 'wa', count: 0, active: false },
                            ].map((m, i) => {
                              const chBg = m.ch === 'wa' ? '#25d366' : m.ch === 'ig' ? INSTAGRAM_GRADIENT : '#1877F2';
                              return (
                                <div key={i} className={`px-[14px] py-[8px] flex items-center gap-[8px] border-l-[3px] ${m.active ? 'bg-[#05b4481a] border-l-[#06b349]' : 'border-l-transparent hover:bg-[#fafaf6]'}`}>
                                  <div className="relative shrink-0">
                                    <div className="size-[32px] rounded-full bg-[#f3efe3] flex items-center justify-center text-[#0c221f] text-[11px] font-['Geist:Bold'] font-bold">{m.name.split(' ').map(n => n[0]).join('')}</div>
                                    <div className="absolute -bottom-[1px] -right-[1px] size-[13px] rounded-full border-[1.5px] border-white flex items-center justify-center" style={{ background: chBg }}>
                                      {m.ch === 'wa' && <svg width="7" height="7" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" /></svg>}
                                      {m.ch === 'ig' && <svg width="7" height="7" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 5.838a3.999 3.999 0 100 7.998 3.999 3.999 0 000-7.998z" /></svg>}
                                      {m.ch === 'fb' && <svg width="7" height="7" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>}
                                    </div>
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                      <Typography className="text-[#0c221f] text-[11px] font-['Geist:SemiBold'] font-semibold truncate">{m.name}</Typography>
                                      <Typography className="text-[#60584c] text-[9px] shrink-0 ml-[4px]">{m.time}</Typography>
                                    </div>
                                    <Typography className="text-[#60584c] text-[10px] truncate mt-[1px]">{m.preview}</Typography>
                                  </div>
                                  {m.count > 0 && <div className="size-[16px] rounded-full bg-[#06b349] flex items-center justify-center text-white text-[8px] font-['Geist:Bold'] font-bold shrink-0">{m.count}</div>}
                                </div>
                              );
                            })}
                          </div>
                          <div className="px-[14px] py-[8px] border-t border-[#f3efe3] bg-[#fafaf6] flex items-center gap-[6px]">
                            <div className="size-[6px] rounded-full bg-[#06b349] step-live-dot" />
                            <Typography className="text-[#60584c] text-[9px]">WeNext AI replying · 4 active</Typography>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-2/3 shrink-0 flex-col items-start self-stretch">
                      <div className="flex w-full relative">
                        <div className="bg-white border-[#e0dac6] border-r border-solid content-stretch flex w-1/2 shrink-0 flex-col items-start relative">
                          <div className="bg-[#f3efe3] border-[#e0dac6] border-b border-solid min-h-[280px] relative w-full" data-node-id="467:1506" data-name="Container">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[18px] items-start min-h-[inherit] overflow-clip pb-[33px] pt-[32px] px-[32px] relative rounded-[inherit] size-full">
                              <div className="bg-[rgba(6,179,73,0.15)] flex items-center justify-center relative rounded-[12px] shrink-0 size-[44px]" data-node-id="467:1507"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></svg></div>
                              <div className="relative shrink-0 w-full" data-node-id="467:1509" data-name="Container">
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                                  <Typography className="[word-break:break-word] font-['Geist:Bold'] font-bold leading-[26.4px] relative shrink-0 text-[#0b1f1a] text-[22px] tracking-[-0.44px] whitespace-nowrap" data-node-id="467:1510">
                                    Ads Management
                                  </Typography>
                                </div>
                              </div>
                              <div className="relative shrink-0 w-full" data-node-id="467:1511" data-name="Paragraph">
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                                  <Typography className="[word-break:break-word] font-['Geist:Regular'] font-normal leading-[21.7px] relative shrink-0 text-[#6b6354] text-[14px] w-[327px]" data-node-id="467:1512">
                                    See which broadcasts convert, which DMs become orders. Revenue attributed per channel, per template, per agent.
                                  </Typography>
                                </div>
                              </div>
                              <div className="bg-white border border-[rgba(11,31,26,0.1)] border-solid relative rounded-[14px] shrink-0 w-full overflow-hidden" data-node-id="467:1513">
                                <div className="px-[14px] pt-[12px] pb-[10px] flex items-center gap-[6px] border-b border-[#f3efe3]">
                                  <div className="flex items-center gap-[5px] bg-[#e5f6e7] border border-[rgba(6,179,73,0.35)] rounded-full px-[8px] py-[3px]"><svg width="10" height="10" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.49 0-1.96.93-1.96 1.89v2.25h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z" /></svg><Typography className="text-[#06824f] text-[9px] font-['Geist:SemiBold'] font-semibold">Meta Ads</Typography></div>
                                  <div className="flex items-center gap-[5px] bg-[#f8f5ec] rounded-full px-[8px] py-[3px]"><svg width="10" height="10" viewBox="0 0 24 24" fill="#0A66C2"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" /></svg><Typography className="text-[#60584c] text-[9px] font-['Geist:Medium']">LinkedIn</Typography></div>
                                  <div className="flex items-center gap-[5px] bg-[#f8f5ec] rounded-full px-[8px] py-[3px]"><svg width="10" height="10" viewBox="0 0 24 24"><path fill="#EA4335" d="M12 10.2v3.9h5.45c-.24 1.4-.96 2.6-2.04 3.4l3.3 2.56C20.6 18.3 21.5 15.4 21.5 12c0-.66-.06-1.3-.17-1.9H12z" /><path fill="#34A853" d="M6.6 14.3l-.74.57-2.62 2.04C4.9 20 8.2 22 12 22c2.7 0 4.96-.9 6.6-2.44l-3.3-2.56c-.9.6-2.06.97-3.3.97-2.54 0-4.7-1.72-5.47-4.03z" /><path fill="#FBBC05" d="M3.24 7.1A9.9 9.9 0 002.5 12c0 1.6.4 3.1 1.07 4.4l3.35-2.6a5.94 5.94 0 010-3.8L3.24 7.1z" /><path fill="#4285F4" d="M12 6.5c1.47 0 2.78.5 3.82 1.5l2.85-2.85C16.95 3.5 14.7 2.5 12 2.5 8.2 2.5 4.9 4.5 3.24 7.1l3.35 2.6C7.3 8.2 9.46 6.5 12 6.5z" /></svg><Typography className="text-[#60584c] text-[9px] font-['Geist:Medium']">Google</Typography></div>
                                </div>
                                <div className="px-[14px] pt-[10px] pb-[8px] flex items-center justify-between">
                                  <div>
                                    <Typography className="text-[#0b1f1a] text-[14px] font-['Geist:SemiBold'] font-semibold leading-none">Meta Ads</Typography>
                                    <div className="flex items-center gap-[4px] mt-[4px]"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#60584c" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></svg><Typography className="text-[#60584c] text-[9px] font-['Courier_Prime:Regular']">₹11,271.24 balance</Typography></div>
                                  </div>
                                  <div className="flex items-center gap-[4px] bg-[#06b349] rounded-[7px] px-[9px] py-[5px]"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg><Typography className="text-white text-[9px] font-['Geist:SemiBold'] font-semibold">Create</Typography></div>
                                </div>
                                <div className="px-[14px] flex gap-[14px] border-b border-[#f3efe3]">
                                  <div className="pb-[7px] border-b-2 border-[#06b349]"><Typography className="text-[#06b349] text-[10px] font-['Geist:Medium'] font-medium">Campaigns</Typography></div>
                                  <Typography className="text-[#60584c] text-[10px] pb-[7px] font-['Geist:Medium']">Leads</Typography>
                                  <Typography className="text-[#60584c] text-[10px] pb-[7px] font-['Geist:Medium']">Settings</Typography>
                                </div>
                                <div className="grid grid-cols-2 gap-[8px] px-[12px] py-[12px]">
                                  {[
                                    { v: '₹3.17L', l: 'Total Spend', d: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12M6 8h12M9 13c4 0 6-2 6-5M6 13h4l6 8" /></svg> },
                                    { v: '2,182', l: 'Total Messages', d: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-9 8.4 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 17 0z" /></svg> },
                                    { v: '5', l: 'Active Campaigns', d: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg> },
                                    { v: '₹145.67', l: 'Cost / Result', d: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="0.5" fill="#06b349" /></svg> },
                                  ].map((s) => (
                                    <div key={s.l} className="bg-[#fff] border  rounded-[10px] px-[10px] py-[8px]">
                                      <Typography className="text-[#0b1f1a] text-[15px] font-['Geist:SemiBold'] font-semibold leading-none">{s.v}</Typography>
                                      <div className="flex items-center justify-between mt-[5px]"><Typography className="text-[#60584c] text-[9px]">{s.l}</Typography>{s.d}</div>
                                    </div>
                                  ))}
                                </div>
                                {/* <div className="px-[12px] pt-[12px] pb-[12px] flex flex-col gap-[8px]">
                                  {[
                                    { n: 'Leads - 7th April — Copy', sp: '₹36,416', ld: '205', cpl: '₹177.64', hi: true },
                                    { n: 'Leads-influ-repost-7th May', sp: '₹26,939', ld: '171', cpl: '₹157.54', hi: true },
                                    { n: 'Leads-Claude-multiadset-12 May', sp: '₹23,690', ld: '109', cpl: '₹217.34', hi: true },
                                    { n: 'Tailored messages campaign 22', sp: '₹20,324', ld: '573', cpl: '₹35.47', hi: false },
                                  ].map((r, i) => (
                                    <div key={i} className="flex items-center justify-between gap-[8px] border-b border-[#f6f3e8] pb-[7px] last:border-0 last:pb-0">
                                      <div className="min-w-0">
                                        <Typography className="text-[#06824f] text-[10px] font-['Geist:SemiBold'] font-semibold truncate">{r.n}</Typography>
                                        <div className="flex items-center gap-[5px] mt-[2px]">
                                          <Typography className="text-[#60584c] text-[8.5px] font-['Courier_Prime:Regular']">{r.sp}</Typography>
                                          <span className="text-[#c9c2ad] text-[8.5px]">·</span>
                                          <Typography className="text-[#60584c] text-[8.5px]">{r.ld} leads</Typography>
                                          <span className="text-[#c9c2ad] text-[8.5px]">·</span>
                                          <Typography className="text-[8.5px] font-['Geist:Medium']" style={{ color: r.hi ? '#dc2626' : '#06824f' }}>{r.cpl}</Typography>
                                        </div>
                                      </div>
                                      <span className="flex items-center gap-[3px] bg-[#fdf3d6] text-[#a06a00] text-[8px] font-['Geist:Medium'] px-[6px] py-[2px] rounded-full shrink-0"><span className="size-[4px] rounded-full bg-[#d99a1c]" />Paused</span>
                                    </div>
                                  ))}
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white content-stretch flex w-1/2 shrink-0 flex-col items-start relative h-full">
                          <div className="bg-[#f3efe3] border-[#e0dac6] border-b border-solid content-stretch flex flex-col gap-[18px] items-start min-h-[280px] overflow-clip pb-[33px] pt-[32px] px-[32px] relative w-full h-full">
                            <div className="bg-[rgba(6,179,73,0.15)] flex items-center justify-center relative rounded-[12px] shrink-0 size-[44px]"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg></div>
                            <div className="shrink-0 w-full">
                              <Typography className="font-['Geist:Bold'] font-bold leading-[26.4px] text-[#0b1f1a] text-[22px] tracking-[-0.44px] whitespace-nowrap">Smart Scheduling</Typography>
                            </div>
                            <div className="shrink-0 w-full">
                              <Typography className="font-['Geist:Regular'] font-normal leading-[21.7px] text-[#6b6354] text-[14px] w-full">UPI, cards, COD-to-prepaid — every payment option drops into the conversation. No checkout drop-off.</Typography>
                            </div>
                            <div className="bg-white border border-[rgba(11,31,26,0.1)] border-solid relative rounded-[14px] shrink-0 w-full overflow-hidden mt-4">
                              <div className="px-[14px] py-[10px] border-b border-[#f3efe3] flex items-center justify-between">
                                <Typography className="text-[#0b1f1a] text-[12px] font-['Geist:SemiBold'] font-semibold">Payment for · Riya</Typography>
                                <Typography className="text-[#0b1f1a] text-[14px] font-['Geist:SemiBold'] font-semibold">₹2,490</Typography>
                              </div>
                              <div className="p-[12px] flex flex-col gap-[6px]">
                                <div className="flex items-center justify-between bg-[#fff] border rounded-[9px] px-[10px] py-[10px]">
                                  <div className="flex items-center gap-[8px]"><div className="size-[22px] rounded-[6px] bg-[rgba(6,179,73,0.15)] flex items-center justify-center"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2.5"><path d="M6 3h12l-1 7H7z" /><path d="M8 10l-1 8M16 10l1 8" /></svg></div><Typography className="text-[#0b1f1a] text-[11px] font-['Geist:Medium']">UPI · GPay / PhonePe</Typography></div>
                                  <div className="size-[16px] rounded-full bg-[#06b349] flex items-center justify-center"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg></div>
                                </div>
                                <div className="flex items-center justify-between bg-[#fff] border rounded-[9px] px-[10px] py-[10px]">
                                  <div className="flex items-center gap-[8px]"><div className="size-[22px] rounded-[6px] bg-[rgba(6,179,73,0.15)] flex items-center justify-center"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></svg></div><Typography className="text-[#0b1f1a] text-[11px] font-['Geist:Medium']">Card · Visa / Master / Rupay</Typography></div>
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9c2ad" strokeWidth="2"><circle cx="12" cy="12" r="9" /></svg>
                                </div>
                                <div className="flex items-center justify-between bg-[#fff] border rounded-[9px] px-[10px] py-[10px]">
                                  <div className="flex items-center gap-[8px]"><div className="size-[22px] rounded-[6px] bg-[rgba(6,179,73,0.15)] flex items-center justify-center"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2"><rect x="1" y="3" width="15" height="13" rx="1" /><path d="M16 8h4l3 3v5h-7z" /><circle cx="5.5" cy="18.5" r="2" /><circle cx="18.5" cy="18.5" r="2" /></svg></div><Typography className="text-[#0b1f1a] text-[11px] font-['Geist:Medium']">Cash on Delivery <span className="text-[#a06a00]">→ Prepaid save ₹40</span></Typography></div>
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9c2ad" strokeWidth="2"><circle cx="12" cy="12" r="9" /></svg>
                                </div>
                                <div className="bg-[#06b349] rounded-[9px] py-[12px] flex items-center justify-center gap-[6px] mt-[2px]"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg><Typography className="text-white text-[11px] font-['Geist:SemiBold'] font-semibold">Pay ₹2,490 securely</Typography></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex w-full relative h-full">
                        <div className="bg-[#f3efe3] min-h-[280px] relative w-full" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-row items-stretch gap-[32px] min-h-[inherit] overflow-clip p-[32px] relative rounded-[inherit] size-full">
                            <div className="flex flex-col justify-start gap-[18px] items-start w-[40%] shrink-0">
                              <div className="bg-[rgba(6,179,73,0.15)] flex items-center justify-center relative rounded-[12px] shrink-0 size-[44px]"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="2.5" /><circle cx="5" cy="19" r="2.5" /><circle cx="19" cy="19" r="2.5" /><path d="M12 7.5v3M10.5 17.5 11.5 11M13.5 17.5 12.5 11" /></svg></div>
                              <div className="relative shrink-0 w-full">
                                <div className="flex flex-col gap-[10px] items-start w-full">
                                  <Typography className="font-['Geist:Bold'] font-bold leading-[26.4px] text-[#0b1f1a] text-[22px] tracking-[-0.44px] w-full">Seamless Integrations</Typography>
                                  <Typography className="font-['Geist:Regular'] font-normal leading-[21.7px] text-[#6b6354] text-[14px] w-full">Trained on your catalog, FAQs and tone. Speaks Hindi, English and Hinglish. Hands off to humans when it matters.</Typography>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white border border-[rgba(11,31,26,0.1)] border-solid flex-1 min-h-[320px] relative rounded-[14px] overflow-hidden">
                              {/* <div className="absolute inset-0" style={{ background: 'radial-gradient(115% 80% at 50% 46%, #ffffff 0%, #f4faf1 70%, #eef7ea 100%)' }} /> */}
                              <svg viewBox="0 0 300 440" preserveAspectRatio="xMidYMid meet" className="absolute inset-0 w-full h-full">
                                <defs>
                                  <filter id="siTileShadow" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#0b1f1a" floodOpacity="0.16" /></filter>
                                  <filter id="siGlow" x="-120%" y="-120%" width="340%" height="340%"><feGaussianBlur stdDeviation="2.2" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                                  <radialGradient id="siHubGlow" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#06b349" stopOpacity="0.35" /><stop offset="100%" stopColor="#06b349" stopOpacity="0" /></radialGradient>
                                  <linearGradient id="siIg" x1="0" y1="1" x2="1" y2="0"><stop offset="0%" stopColor="#F9CE34" /><stop offset="50%" stopColor="#EE2A7B" /><stop offset="100%" stopColor="#6228D7" /></linearGradient>
                                </defs>
                                <circle cx="150" cy="218" r="142" fill="none" stroke="#06b349" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="2 9"><animateTransform attributeName="transform" type="rotate" from="0 150 218" to="360 150 218" dur="46s" repeatCount="indefinite" /></circle>
                                <circle cx="150" cy="218" r="96" fill="none" stroke="#06b349" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="1 10"><animateTransform attributeName="transform" type="rotate" from="360 150 218" to="0 150 218" dur="60s" repeatCount="indefinite" /></circle>
                                <circle cx="150" cy="218" fill="none" stroke="#06b349" strokeWidth="1.4"><animate attributeName="r" values="34;150" dur="3.4s" repeatCount="indefinite" /><animate attributeName="stroke-opacity" values="0.32;0" dur="3.4s" repeatCount="indefinite" /></circle>
                                <circle cx="150" cy="218" fill="none" stroke="#06b349" strokeWidth="1.4"><animate attributeName="r" values="34;150" dur="3.4s" begin="1.7s" repeatCount="indefinite" /><animate attributeName="stroke-opacity" values="0.32;0" dur="3.4s" begin="1.7s" repeatCount="indefinite" /></circle>
                                {[
                                  { id: 'siA', d: 'M150 76 Q136 147 150 218' }, { id: 'siB', d: 'M273 147 Q204.5 170.4 150 218' }, { id: 'siC', d: 'M273 289 Q218.5 241.4 150 218' },
                                  { id: 'siD', d: 'M150 360 Q164 289 150 218' }, { id: 'siE', d: 'M27 289 Q95.5 265.6 150 218' }, { id: 'siF', d: 'M27 147 Q81.5 194.6 150 218' },
                                ].map((p) => (
                                  <path key={p.id} id={p.id} d={p.d} fill="none" stroke="#06b349" strokeOpacity="0.22" strokeWidth="1.4" />
                                ))}
                                {[
                                  { p: 'siA', b: '0s' }, { p: 'siB', b: '0.35s' }, { p: 'siC', b: '0.7s' },
                                  { p: 'siD', b: '1.05s' }, { p: 'siE', b: '1.4s' }, { p: 'siF', b: '1.75s' },
                                ].map((m) => (
                                  <circle key={m.p} r="3" fill="#0bd45a" filter="url(#siGlow)">
                                    <animateMotion dur="2.1s" begin={m.b} repeatCount="indefinite" calcMode="linear"><mpath href={`#${m.p}`} /></animateMotion>
                                    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.82;1" dur="2.1s" begin={m.b} repeatCount="indefinite" />
                                    <animate attributeName="r" values="2;3.4;2" dur="2.1s" begin={m.b} repeatCount="indefinite" />
                                  </circle>
                                ))}
                                <circle cx="150" cy="218" r="46" fill="url(#siHubGlow)"><animate attributeName="r" values="40;52;40" dur="2.6s" repeatCount="indefinite" /></circle>
                                <g filter="url(#siTileShadow)">
                                  <rect x="122" y="190" width="56" height="56" rx="16" fill="#06b349"><animate attributeName="opacity" values="1;0.92;1" dur="2.6s" repeatCount="indefinite" /></rect>
                                  <path d="M138 218 H166 M158 209 L167 218 L158 227" stroke="white" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                </g>
                                {[
                                  { x: 150, y: 76, ic: 'sh', b: '0s' }, { x: 273, y: 147, ic: 'rz', b: '0.35s' }, { x: 273, y: 289, ic: 'wc', b: '0.7s' },
                                  { x: 150, y: 360, ic: 'fb', b: '1.05s' }, { x: 27, y: 289, ic: 'ig', b: '1.4s' }, { x: 27, y: 147, ic: 'wa', b: '1.75s' },
                                ].map((s) => (
                                  <g key={s.ic}>
                                    <circle cx={s.x} cy={s.y} r="24" fill="none" stroke="#06b349" strokeWidth="1.4"><animate attributeName="r" values="22;30;22" dur="2.1s" begin={s.b} repeatCount="indefinite" /><animate attributeName="stroke-opacity" values="0.5;0;0.5" dur="2.1s" begin={s.b} repeatCount="indefinite" /></circle>
                                    <g transform={`translate(${s.x - 21},${s.y - 21})`} filter="url(#siTileShadow)">
                                      <rect width="42" height="42" rx="50" fill="white" />
                                      {s.ic === 'wa' && <><circle cx="21" cy="21" r="11" fill="#25D366" /><path d="M16 15c1.8 4.2 4.8 7.2 9 9l-1.6 1.4c-.3.3-.8.3-1.1.1-2.9-1.4-5.3-3.8-6.7-6.7-.2-.3-.1-.8.1-1.1z" fill="white" /></>}
                                      {s.ic === 'ig' && <><rect x="10" y="10" width="22" height="22" rx="7" fill="url(#siIg)" /><rect x="15" y="15" width="12" height="12" rx="6" fill="none" stroke="white" strokeWidth="2" /><circle cx="27.5" cy="14.5" r="1.4" fill="white" /></>}
                                      {s.ic === 'fb' && <><circle cx="21" cy="21" r="11" fill="#1877F2" /><path d="M23.5 21H21.8v7h-2.9v-7h-1.5v-2.4h1.5v-1.6c0-1.6.7-2.9 2.9-2.9h1.8v2.4h-1.1c-.6 0-.9.3-.9.8v1.3h2z" fill="white" /></>}
                                      {s.ic === 'sh' && <><rect x="10" y="10" width="22" height="22" rx="7" fill="#5E8E3E" /><path d="M18 15l-2 2v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8l-2-2z M16 17h10 M24 20a3 3 0 0 1-6 0" fill="none" stroke="white" strokeWidth="1.6" strokeLinejoin="round" /></>}
                                      {s.ic === 'rz' && <><rect x="10" y="10" width="22" height="22" rx="7" fill="#0C4D9E" /><path d="M24 14l-6 14h2.6l6-14z" fill="#4a9bff" /><path d="M20 17l-4 11h2.6l3.2-9z" fill="white" /></>}
                                      {s.ic === 'wc' && <><rect x="10" y="10" width="22" height="22" rx="7" fill="#7F54B3" /><text x="21" y="25.5" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="Geist, sans-serif">W</text></>}
                                    </g>
                                  </g>
                                ))}
                              </svg>
                              {/* <div className="absolute top-[13px] left-[14px] flex items-center gap-[6px]"><span className="size-[6px] rounded-full bg-[#06b349] step-live-dot" /><Typography className="text-[#0b1f1a] text-[11px] font-['Geist:SemiBold'] font-semibold">Live sync</Typography></div> */}
                              {/* <div className="absolute top-[12px] right-[14px] flex items-center gap-[4px] bg-white/70 rounded-full px-[8px] py-[3px] border border-[#e8f4ec]"><span className="size-[5px] rounded-full bg-[#06b349]" /><Typography className="text-[#06824f] text-[9px] font-['Geist:SemiBold'] font-semibold">6 connected</Typography></div> */}
                              {/* <div className="absolute bottom-[11px] left-0 right-0 text-center"><Typography className="text-[#60584c] text-12px] font-['Geist:Medium']">200+ apps · one unified hub</Typography></div> */}
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



          {/* Magic AI Search — sits above the "Sound familiar?" band, matches the site's outer/inner border pattern */}
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[75px] relative shrink-0 w-full" style={{ overflow: "hidden" }}>
            <div className="border-[#e0dac6] border-b border-l border-r border-solid relative shrink-0 w-full">
              <div className="bg-clip-padding border-[transparent] border-b border-l border-r border-solid content-stretch flex flex-col items-center py-[100px] relative size-full">
                {/* Eyebrow */}
                <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
                  <div className="bg-[#06b349] relative shrink-0 size-[10px]" />
                  <Typography className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Courier_Prime:Regular'] leading-[1.4] not-italic relative shrink-0 text-[#0c221f] text-[18px] text-center whitespace-nowrap">
                    Ask WeNext AI
                  </Typography>
                </div>
                {/* Heading */}
                <Typography className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[1.05] relative shrink-0 text-[#0c221f] text-[54px] tracking-[-1.6px] text-center mt-[16px]">
                  NEW: Ask WeNext AI
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
                <div className="mt-[56px] relative w-full max-w-[720px] h-[320px] overflow-hidden">
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
                        <Typography className="text-[18px] text-[#60584c] font-['Geist:Medium'] font-medium tracking-[-0.2px] whitespace-nowrap">
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
                    <div className="w-full max-w-[600px] bg-white rounded-full pl-[6px] pr-[6px] py-[6px] flex items-center gap-[10px] border border-[#e0dac6] shadow-[0_12px_36px_-8px_rgba(6,179,73,0.25),0_2px_8px_rgba(11,34,17,0.06)] pointer-events-auto">
                      <div className="w-[36px] h-[36px] rounded-full bg-[#f8f5ec] flex items-center justify-center shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0c221f" strokeWidth="2" strokeLinecap="round">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </div>
                      <div className="flex-1 relative overflow-hidden h-[22px]">
                        <div
                          key={magicIdx}
                          className="absolute inset-0 flex items-center text-[#0c221f] font-['Geist:Medium'] font-medium text-[17px] leading-none whitespace-nowrap magic-text-slide"
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

          <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[75px] relative shrink-0 w-full" data-node-id="467:1839" data-name="Container">
            <div className="border-[#e0dac6] border-b border-l border-r border-solid relative shrink-0 w-full" data-node-id="467:1840">
              <div className="bg-clip-padding border-[transparent] border-b border-l border-r border-solid content-stretch flex flex-col gap-[15px] items-start justify-center px-[50px] py-[40px] relative size-full">
                <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-node-id="467:1841">
                  <div className="bg-[#06b349] relative shrink-0 size-[10px]" data-node-id="467:1842" />
                  <Typography className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Courier_Prime:Regular'] leading-[1.4] not-italic relative shrink-0 text-[#0c221f] text-[18px] text-center whitespace-nowrap" data-node-id="467:1843">
                    Resources
                  </Typography>
                </div>
                <Typography className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[1.4] min-w-full relative shrink-0 text-[#0c221f] text-[54px] tracking-[-1px] w-[min-content]" data-node-id="467:1844">
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
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[75px] relative shrink-0 w-full">
            <div className="border-[#e0dac6] border-b border-l border-r border-solid relative shrink-0 w-full" data-node-id="467:1793" data-name="Container">
              <div className="grid grid-cols-2 relative size-full">
                <div className="p-[60px] flex flex-col justify-center border-r border-[#e0dac6]">
                  <div className="flex gap-[10px] items-center mb-[16px]">
                    <div className="bg-[#06b349] relative shrink-0 size-[10px]" />
                    <Typography className="font-['Courier_Prime'] leading-[1.4] text-[18px] text-[#0c221f]">Speed & Scale</Typography>
                  </div>
                  <Typography component="h2" className="font-['Geist:SemiBold'] font-semibold text-[42px] text-[#0c221f] tracking-[-1.3px] leading-[1.12] mb-[18px]">
                    Live on WhatsApp<br />in 15 minutes.
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
                <div className="bg-gradient-to-br from-[#f8f5ec] to-[#f3efe3] relative self-stretch overflow-hidden flex items-center justify-center p-[50px]">
                  <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(9,37,17,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(9,37,17,0.03) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                  <div key={activeStep} className="relative w-full max-w-[460px] step-panel">
                    {activeStep === 0 && (
                      <div className="flex flex-col items-center gap-[18px]">
                        <div className="relative w-full bg-white rounded-[24px] shadow-[0_40px_100px_-30px_rgba(11,31,26,0.22),0_0_0_1px_rgba(11,31,26,0.04)] overflow-hidden">
                          <div className="absolute inset-x-0 top-0 h-[120px] bg-gradient-to-b from-[#e5f6e7] via-[#f8f5ec] to-transparent pointer-events-none" />
                          <div className="relative px-[28px] pt-[26px] pb-[22px]">
                            <div className="flex items-center justify-between mb-[22px]">
                              <div className="size-[36px] rounded-[10px] bg-[#06b349] flex items-center justify-center shadow-[0_8px_24px_-8px_rgba(6,179,73,0.6)]">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                              </div>
                              <div className="flex items-center gap-[6px]">
                                {[0, 1, 2, 3].map(s => (
                                  <div key={s} className={`h-[3px] rounded-full transition-all ${s === 0 ? 'w-[24px] bg-[#06b349]' : 'w-[10px] bg-[#e0dac6]'}`} />
                                ))}
                              </div>
                            </div>
                            <Typography className="text-[#0c221f] text-[20px] font-['Geist:SemiBold'] font-semibold tracking-[-0.3px] leading-[1.2]">Start your free trial</Typography>
                            <Typography className="text-[#60584c] text-[12px] mt-[4px]">No credit card · 14 days · Cancel anytime</Typography>
                            <div className="mt-[22px] space-y-[12px]">
                              <div>
                                <Typography className="text-[#60584c] text-[10px] font-['Geist:Medium'] uppercase tracking-[1.2px] mb-[6px]">Work email</Typography>
                                <div className="relative">
                                  <div className="border-[1.5px] border-[#06b349] bg-[#fbfaf2] rounded-[10px] px-[14px] py-[11px] text-[#0c221f] text-[14px] font-['Geist:Medium'] pr-[36px]">sneha@linen.co</div>
                                  <div className="step-pop absolute right-[12px] top-1/2 -translate-y-1/2 size-[18px] rounded-full bg-[#06b349] flex items-center justify-center"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5"><polyline points="20 6 9 17 4 12" /></svg></div>
                                </div>
                              </div>
                              <div>
                                <Typography className="text-[#60584c] text-[10px] font-['Geist:Medium'] uppercase tracking-[1.2px] mb-[6px]">Brand name</Typography>
                                <div className="border border-[#e0dac6] rounded-[10px] px-[14px] py-[11px] text-[#0c221f] text-[14px]">Linen.co</div>
                              </div>
                            </div>
                          </div>
                          <div className="border-t border-[#f3efe3] px-[28px] py-[16px] flex items-center justify-between">
                            <div className="flex items-center gap-[8px]">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="2.5" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                              <Typography className="text-[#60584c] text-[11px]">Bank-grade · DPDP compliant</Typography>
                            </div>
                            <div className="step-glow bg-[#06b349] text-white text-[13px] px-[18px] py-[9px] rounded-[10px] font-['Geist:Medium'] flex items-center gap-[6px]">
                              Continue
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                            </div>
                          </div>
                        </div>
                        <div className="step-float flex items-center gap-[10px] bg-white border border-[#e0dac6] rounded-full px-[16px] py-[7px] shadow-[0_8px_20px_-10px_rgba(11,31,26,0.15)]">
                          <div className="flex -space-x-[6px]">
                            {['#06b349', '#1877F2', '#E1306C', '#FF8A1F'].map((c, i) => (
                              <div key={i} className="size-[18px] rounded-full border-[2px] border-white" style={{ background: c }} />
                            ))}
                          </div>
                          <Typography className="text-[#0c221f] text-[11px] font-['Geist:Medium']">12,400 brands joined this week</Typography>
                        </div>
                      </div>
                    )}
                    {activeStep === 1 && (
                      <div className="relative">
                        <div className="bg-white rounded-[24px] shadow-[0_40px_100px_-30px_rgba(11,31,26,0.22),0_0_0_1px_rgba(11,31,26,0.04)] overflow-hidden">
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
                              { name: 'WhatsApp Business', detail: 'API · +91 80196 72323', color: '#25d366', svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487m-3.421-12.18A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>, latency: '1.2s', volume: '8,412 chats/day' },
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
                        </div>
                      </div>
                    )}
                    {activeStep === 2 && (
                      <div className="bg-white rounded-[24px] shadow-[0_40px_100px_-30px_rgba(11,31,26,0.22),0_0_0_1px_rgba(11,31,26,0.04)] overflow-hidden">
                        <div className="relative px-[24px] pt-[22px] pb-[20px] overflow-hidden">
                          <div className="absolute inset-x-0 top-0 h-[140px] pointer-events-none" style={{ background: 'radial-gradient(120% 80% at 100% 0%, rgba(6,179,73,0.12) 0%, transparent 70%)' }} />
                          <div className="step-scan absolute inset-x-0 top-0 h-[26px] pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(6,179,73,0.22) 0%, transparent 100%)' }} />
                          <div className="relative flex items-center justify-between mb-[18px]">
                            <div className="flex items-center gap-[10px]">
                              <div className="size-[36px] rounded-[10px] bg-[#06b349] flex items-center justify-center shadow-[0_8px_24px_-8px_rgba(6,179,73,0.6)]">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.91 5.81 5.82 1.9-5.82 1.9L12 18.42l-1.91-5.81-5.82-1.9 5.82-1.9z" /></svg>
                              </div>
                              <div>
                                <Typography className="text-[#0c221f] text-[14px] font-['Geist:SemiBold'] font-semibold">Catalog Pro</Typography>
                                <Typography className="text-[#60584c] text-[10.5px]">Trained on Linen.co · 142 SKUs</Typography>
                              </div>
                            </div>
                            <div className="relative size-[64px]">
                              <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                                <circle cx="18" cy="18" r="15" fill="none" stroke="#e0dac6" strokeWidth="2.5" />
                                <circle className="step-ring-anim" cx="18" cy="18" r="15" fill="none" stroke="#06b349" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="94.25" strokeDashoffset="5.65" />
                              </svg>
                              <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <Typography className="text-[#0c221f] text-[14px] font-['Geist:SemiBold'] font-semibold leading-none">94%</Typography>
                                <Typography className="text-[#60584c] text-[8px] leading-none mt-[2px]">accuracy</Typography>
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-[8px]">
                            {[{ l: 'SKUs', v: '142', i: '📦' }, { l: 'FAQs', v: '48', i: '📄' }, { l: 'Languages', v: '3', i: '🌐' }].map((c, i) => (
                              <div key={i} className="step-count bg-[#fbfaf2] border border-[#f0e9d7] rounded-[10px] p-[10px]">
                                <Typography className="text-[#0c221f] text-[18px] font-['Geist:SemiBold'] leading-none">{c.v}</Typography>
                                <Typography className="text-[#60584c] text-[10px] mt-[3px]">{c.l}</Typography>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="border-t border-[#f3efe3] px-[24px] py-[16px]">
                          <Typography className="text-[#60584c] text-[10px] font-['Geist:Medium'] uppercase tracking-[1px] mb-[10px]">Training stream</Typography>
                          {[{ a: 'Ingested', d: 'Linen kurta · 12 variants', t: '2m ago' }, { a: 'Trained', d: 'Returns policy · COD 7-day', t: '5m ago' }, { a: 'Updated', d: 'Hindi voice samples · 240', t: '8m ago' }].map((t, i) => (
                            <div key={i} className="flex items-center gap-[10px] py-[7px] border-b border-[#f3efe3] last:border-0">
                              <div className="step-pop size-[18px] rounded-full bg-[#e5f6e7] flex items-center justify-center shrink-0"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="4"><polyline points="20 6 9 17 4 12" /></svg></div>
                              <div className="flex-1 min-w-0">
                                <Typography className="text-[#0c221f] text-[11.5px] font-['Geist:Medium']"><span className="text-[#06b349]">{t.a}</span> · {t.d}</Typography>
                              </div>
                              <Typography className="text-[#60584c] text-[10px] shrink-0">{t.t}</Typography>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {activeStep === 3 && (
                      <div className="bg-white rounded-[24px] shadow-[0_40px_100px_-30px_rgba(11,31,26,0.22),0_0_0_1px_rgba(11,31,26,0.04)] overflow-hidden">
                        <div className="px-[20px] pt-[18px] pb-[14px] border-b border-[#f3efe3] flex items-center justify-between">
                          <div className="flex items-center gap-[10px]">
                            <div className="size-[32px] rounded-[9px] bg-[#06b349] flex items-center justify-center shadow-[0_8px_24px_-8px_rgba(6,179,73,0.6)]"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg></div>
                            <div>
                              <Typography className="text-[#0c221f] text-[14px] font-['Geist:SemiBold'] font-semibold">Automation Flows</Typography>
                              <Typography className="text-[#60584c] text-[10.5px]">4 active · auto-pilot ON</Typography>
                            </div>
                          </div>
                          <div className="flex items-center gap-[5px] bg-[#e5f6e7] px-[10px] py-[3px] rounded-full"><div className="size-[6px] rounded-full bg-[#06b349] step-live-dot" /><Typography className="text-[#06b349] text-[10px] font-['Geist:Medium']">Live</Typography></div>
                        </div>
                        <div className="p-[16px] flex flex-col gap-[10px] step-stagger">
                          {[
                            { n: 'Abandoned cart', d: 'Trigger · cart inactive 4h', m: '31% recovered', c: '#06b349', pct: 31 },
                            { n: 'COD → Prepaid', d: 'Trigger · order placed', m: '+8% prepaid share', c: '#1877F2', pct: 88 },
                            { n: 'Re-engage silent', d: 'Trigger · 30d no reply', m: '42% open · 11% reply', c: '#E1306C', pct: 42 },
                            { n: 'Order tracking', d: 'Trigger · shipping update', m: '2.4K replies / day', c: '#FF8A1F', pct: 96 },
                          ].map((a, i) => (
                            <div key={i} className="step-shimmer bg-[#fbfaf2] border border-[#f0e9d7] rounded-[12px] p-[12px]">
                              <div className="flex items-center gap-[10px] mb-[8px]">
                                <div className="size-[28px] rounded-[8px] flex items-center justify-center shrink-0" style={{ background: `${a.c}1f` }}>
                                  <div className="step-live-dot size-[8px] rounded-full" style={{ background: a.c }} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <Typography className="text-[#0c221f] text-[12.5px] font-['Geist:SemiBold']">{a.n}</Typography>
                                  <Typography className="text-[#60584c] text-[9.5px]">{a.d}</Typography>
                                </div>
                                <div className="relative w-[28px] h-[16px] rounded-full bg-[#06b349] shrink-0 flex items-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.15)]"><div className="absolute right-[2px] size-[12px] rounded-full bg-white shadow-sm" /></div>
                              </div>
                              <div className="flex items-center justify-between gap-[10px]">
                                <div className="flex-1 h-[4px] bg-[#f3efe3] rounded-full overflow-hidden"><div className="h-full rounded-full step-bar" style={{ width: `${a.pct}%`, background: a.c }} /></div>
                                <Typography className="text-[#0c221f] text-[10px] font-['Geist:Medium'] shrink-0" style={{ color: a.c }}>{a.m}</Typography>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {activeStep === 4 && (
                      <div className="bg-white rounded-[24px] shadow-[0_40px_100px_-30px_rgba(11,31,26,0.22),0_0_0_1px_rgba(11,31,26,0.04)] overflow-hidden">
                        <div className="relative px-[22px] pt-[20px] pb-[16px] border-b border-[#f3efe3]">
                          <div className="absolute inset-x-0 top-0 h-[80px] pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(6,179,73,0.06) 0%, transparent 100%)' }} />
                          <div className="relative flex items-center justify-between">
                            <div className="flex items-center gap-[10px]">
                              <div className="size-[36px] rounded-[10px] bg-[#06b349] flex items-center justify-center shadow-[0_8px_24px_-8px_rgba(6,179,73,0.6)]"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l18-5v12L3 14v-3zM11 18v3" /></svg></div>
                              <div>
                                <Typography className="text-[#0c221f] text-[14px] font-['Geist:SemiBold'] font-semibold">Diwali pre-order · M.kurta</Typography>
                                <Typography className="text-[#60584c] text-[10.5px]">Broadcast · WhatsApp</Typography>
                              </div>
                            </div>
                            <div className="flex items-center gap-[6px] bg-[#fff1d6] text-[#a06a00] px-[8px] py-[3px] rounded-full"><svg width="9" height="9" viewBox="0 0 24 24" fill="#a06a00"><circle cx="12" cy="12" r="3" /></svg><Typography className="text-[10px] font-['Geist:Medium']">Scheduled</Typography></div>
                          </div>
                        </div>
                        <div className="p-[18px]">
                          <div className="flex items-center gap-[8px] mb-[10px]">
                            <Typography className="text-[#60584c] text-[10px] font-['Geist:Medium'] uppercase tracking-[1px]">Audience</Typography>
                            <div className="flex-1 h-px bg-[#f3efe3]" />
                          </div>
                          <div className="flex flex-wrap gap-[5px] mb-[14px]">
                            {['D2C buyers · Mum', 'Cart value ≥ ₹2K', 'Active 30d', '+ COD users'].map((t, i) => (
                              <div key={i} className="bg-[#fbfaf2] border border-[#f0e9d7] rounded-full px-[10px] py-[3px] text-[#0c221f] text-[10px] font-['Geist:Medium']">{t}</div>
                            ))}
                          </div>
                          <div className="bg-[#fbfaf2] border border-[#f0e9d7] rounded-[12px] p-[12px] mb-[14px]">
                            <div className="flex items-center gap-[6px] mb-[6px]"><div className="size-[14px] rounded-full bg-[#25d366] flex items-center justify-center"><svg width="8" height="8" viewBox="0 0 24 24" fill="white"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></div><Typography className="text-[#60584c] text-[10px] font-['Geist:Medium'] uppercase tracking-[1px]">Preview</Typography></div>
                            <Typography className="text-[#0c221f] text-[11.5px] leading-[1.5]">"Hey 👋 Linen drop is here. <span className="font-['Geist:SemiBold'] font-semibold">Pre-order today · ₹400 off</span> + free shipping. Reply <span className="text-[#06b349] font-['Geist:SemiBold'] font-semibold">YES</span> for the link."</Typography>
                          </div>
                          <div className="grid grid-cols-3 gap-[8px] mb-[14px]">
                            {[{ l: 'Sent', v: '8,412', c: '#06b349' }, { l: 'Open', v: '82%', c: '#1877F2' }, { l: 'Reply', v: '31%', c: '#E1306C' }].map((s, i) => (
                              <div key={i} className="step-count bg-white border border-[#f0e9d7] rounded-[10px] p-[10px]">
                                <Typography className="text-[18px] font-['Geist:SemiBold'] leading-none" style={{ color: s.c }}>{s.v}</Typography>
                                <Typography className="text-[#60584c] text-[10px] mt-[3px]">{s.l}</Typography>
                              </div>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-[6px]"><div className="size-[8px] rounded-full bg-[#06b349] step-live-dot" /><Typography className="text-[#60584c] text-[11px]">Live · 142 replies / 5 min</Typography></div>
                            <div className="step-glow bg-[#06b349] text-white text-[12px] px-[16px] py-[8px] rounded-[10px] font-['Geist:Medium'] flex items-center gap-[6px]">Launch <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SecuritySection />

          <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[75px] relative shrink-0 w-full" data-node-id="467:1589" data-name="Container">
            <div className="border-[#e0dac6] border-b border-l border-r border-solid relative shrink-0 w-full" data-node-id="467:1590">
              <div className="bg-clip-padding border-[transparent] border-b border-l border-r border-solid content-stretch flex flex-col gap-[15px] items-start justify-center px-[50px] py-[40px] relative size-full">
                <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-node-id="467:1591">
                  <div className="bg-[#06b349] relative shrink-0 size-[10px]" data-node-id="467:1592" />
                  <Typography className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Courier_Prime:Regular'] leading-[1.4] not-italic relative shrink-0 text-[#0c221f] text-[18px] text-center whitespace-nowrap" data-node-id="467:1593">
                    Pain Points
                  </Typography>
                </div>
                <Typography className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[1.4] min-w-full relative shrink-0 text-[#0c221f] text-[54px] tracking-[-1px] w-[min-content]" data-node-id="467:1594">
                  Sound familiar?
                </Typography>
              </div>
            </div>
          </div>
          <div className="border-[#e0dac6]  border-solid content-stretch flex flex-col items-start px-[75px] relative shrink-0 w-full" data-node-id="467:1595">
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

          <div className="border-[#e0dac6] border-b border-solid content-stretch flex flex-col items-center justify-center overflow-clip px-[75px] relative shrink-0 w-full" data-node-id="467:1886" data-name="Container">
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
                      <div className="[word-break:break-word] font-['Geist:SemiBold'] font-semibold leading-[0] relative shrink-0 text-[#0c221f] text-[54px] tracking-[-1px] whitespace-nowrap" data-node-id="467:1894">
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
