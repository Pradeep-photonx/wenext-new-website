import Typography from '@mui/material/Typography';
import { useRef, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { Inbox, Sparkles, Users, BarChart3 } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const imgImage27 = '/figma/imgImage27.png';
const imgIcon1 = '/figma/imgIcon1.svg';

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
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(26px)',
        transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function Eyebrow({ label, light = false, center = false }: { label: string; light?: boolean; center?: boolean }) {
  return (
    <div className={`content-stretch flex gap-[10px] items-center mb-[16px] relative shrink-0 ${center ? 'justify-center' : ''}`}>
      <div className="bg-[#06b349] relative shrink-0 size-[10px]" />
      <Typography className={`[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Courier_Prime'] leading-[1.4] not-italic relative shrink-0 text-[18px] whitespace-nowrap ${light ? 'text-[#06b349]' : 'text-[#0c221f]'}`}>{label}</Typography>
    </div>
  );
}

const grainStyle: React.CSSProperties = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
  opacity: 0.42,
  mixBlendMode: 'soft-light',
};
const PANEL_A = 'linear-gradient(155deg,#d9e3d7 0%,#e7ebe3 58%,#eef1ea 100%)';

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

const WHY_STATS = [
  { v: '3', l: 'Channels in one inbox' },
  { v: '8×', l: 'Faster response time' },
  { v: '40%', l: 'More chats resolved / agent' },
  { v: '100%', l: 'Conversations tracked' },
];

function HowItWorks() {
  const items = [
    { icon: Inbox, title: 'Bring every channel together', desc: 'WhatsApp, Instagram and Facebook messages all land in one shared inbox — connected in a few clicks, no code required.' },
    { icon: Sparkles, title: 'Reply in seconds with AI', desc: 'WeNext drafts on-brand replies from your catalog and past chats, so your team answers in a single tap.' },
    { icon: Users, title: 'Assign and collaborate', desc: 'Auto-route chats to the right teammate, leave private notes, and keep every conversation clearly owned.' },
    { icon: BarChart3, title: 'Measure what matters', desc: 'Track first-response time, resolution rate and deal value to see exactly what’s improving.' },
  ];
  return (
    <div className="container mx-auto border-x border-b border-[#e0dac6]">
      <div className="px-4 xl:px-[50px] py-[80px]">
        <div className="max-w-[560px] mb-[52px]">
          <Eyebrow label="How it works" />
          <Typography component="h2" className="font-['Geist:SemiBold'] font-semibold text-[42px] text-[#0c221f] tracking-[-1.4px] leading-[1.12]">
            One inbox, from first message to closed deal
          </Typography>
        </div>

        <div className="grid lg:grid-cols-2 gap-[48px] lg:gap-[80px] items-center">
          <div className="flex flex-col gap-[34px]">
            {items.map((it) => {
              const Icon = it.icon;
              return (
                <div key={it.title}>
                  <div className="flex items-start gap-[20px] mb-[10px]">
                    <span className="mt-2">
                      <Icon size={19} strokeWidth={2} color="#06b349" />
                    </span>
                    <div>
                      <Typography component="h3" className="font-['Geist:SemiBold'] font-semibold text-[21px] text-[#0c221f] tracking-[-0.3px]">{it.title}</Typography>
                      <Typography className="font-['Geist:Regular'] text-[#60584c] text-[15px] leading-[1.6] max-w-[440px]">{it.desc}</Typography>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-[520px] overflow-hidden aspect-[4/5] flex items-center justify-center " style={{ background: PANEL_A }}>
              <div className="absolute inset-0 pointer-events-none" style={grainStyle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SUB_FEATURES = [
  {
    tag: 'Templates',
    title: 'Send approved templates in one click',
    body: 'Reply in seconds with WhatsApp-approved message templates — order updates, offers and reminders — personalised with each customer’s details.',
    points: ['Pre-approved template library', 'Dynamic variables like {{name}} & {{order}}', 'One-click send from any chat'],
  },
  {
    tag: 'Payment Links',
    title: 'Share secure payment links inside the chat',
    body: 'Turn conversations into checkout. Drop a secure UPI or card payment link straight into the thread and get paid without the customer ever leaving WhatsApp.',
    points: ['UPI, cards & wallets', 'Live payment status updates', 'Razorpay & Stripe ready'],
  },
  {
    tag: 'Reminders',
    title: 'Never let a conversation go cold',
    body: 'Set a reminder on any chat and WeNext nudges you to follow up, re-engage or close — so high-intent customers never slip through the cracks.',
    points: ['Follow-up reminders', 'Snooze & schedule for later', 'Team-wide alerts'],
  },
  {
    tag: 'Notes',
    title: 'Keep your whole team in context',
    body: 'Leave private internal notes on any conversation — visible only to your team — so nothing is lost when a chat is handed to another agent.',
    points: ['Private internal notes', 'Mention teammates', 'Pinned to the customer profile'],
  },
  {
    tag: 'Deal Value',
    title: 'Track the revenue behind every chat',
    body: 'Attach a deal value to conversations and see exactly how much pipeline is sitting in your inbox — from the first message to a closed sale.',
    points: ['Deal value per conversation', 'Live pipeline totals', 'Won / lost tracking'],
  },
];

function DummyImage({ tag }: { tag: string }) {
  return (
    <div className="relative  overflow-hidden  aspect-[4/4] flex items-center justify-center" style={{ background: PANEL_A }}>
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

function SubFeatures() {
  return (
    <div className="container mx-auto border-x border-b border-[#e0dac6]">
      <div className="px-4 xl:px-[56px] py-[56px]">
        <div className=" mb-[64px]">
          <Eyebrow label="Inside the inbox" />
          <Typography component="h2" className="font-['Geist:SemiBold'] font-semibold text-[42px] text-[#0c221f] tracking-[-1.4px] leading-[1.12]">
            Everything you need to close the conversation
          </Typography>
          <Typography className="font-['Geist:Regular'] text-[#60584c] text-[18px] leading-[1.6] mt-[14px]">
            From the first “hi” to a paid order — templates, payment links, reminders, notes and deal value all live inside the same chat.
          </Typography>
        </div>

        <div className="flex flex-col gap-[84px] lg:gap-[140px]">
          {SUB_FEATURES.map((f, i) => {
            const reversed = i % 2 === 1;
            return (
              <Reveal key={f.title}>
                <div className="grid lg:grid-cols-2 gap-[40px] lg:gap-[64px] items-center">
                  <div className={reversed ? 'lg:order-2' : ''}>
                    <DummyImage tag={f.tag} />
                  </div>
                  <div className={reversed ? 'lg:order-1' : ''}>
                    <div className="inline-flex items-center gap-[8px] mb-[18px]">
                      <Typography className="font-['Courier_Prime'] text-[#06b349] text-[14px] uppercase tracking-[0.16em]">{f.tag}</Typography>
                    </div>
                    <Typography component="h3" className="font-['Geist:SemiBold'] font-semibold text-[34px] text-[#0c221f] tracking-[-1px] leading-[1.15]">
                      {f.title}
                    </Typography>
                    <Typography className="font-['Geist:Regular'] text-[#60584c] text-[17px] leading-[1.62] mt-[16px] max-w-[480px]">
                      {f.body}
                    </Typography>
                    <ul className="flex flex-col gap-[14px] mt-[28px]">
                      {f.points.map((p) => (
                        <li key={p} className="flex items-start gap-[12px]">
                          <CircleCheck />
                          <span className="font-['Geist:Regular'] text-[#3a4540] text-[15.5px] leading-[1.5]">{p}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap items-center gap-[14px] mt-[34px]">
                      <PrimaryButton label="Try our free demo" />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const FAQS = [
  { q: 'Which channels does Ads Management support?', a: 'WhatsApp Business, Instagram and Facebook Messenger all flow into one shared inbox. Your team replies from a single screen, and every conversation clearly shows which channel it came from.' },
  { q: 'Can multiple team members work the same inbox?', a: 'Yes. Conversations can be auto-routed or manually assigned, so every chat has a clear owner. Internal notes and shared tags keep your team aligned without two people replying to the same customer.' },
  { q: 'How do AI suggested replies work?', a: 'WeNext drafts on-brand replies trained on your catalog and past conversations. Agents send the best suggestion in one tap or edit it first — so responses are fast and consistent without sounding robotic.' },
  { q: 'Will I lose customer context when switching channels?', a: 'No. Every conversation sits beside a customer history panel — past orders, tags, lifetime value and previous chats — so whoever picks up the conversation has the full picture.' },
  { q: 'Do I need to replace my existing tools?', a: 'No. Ads Management connects your WhatsApp, Instagram and Facebook alongside your CRM and payments — one layer on top of your stack, not a rip-and-replace.' },
];

export default function AdsManagement() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <div className="bg-[#f8f5ec] relative size-full min-h-screen flex flex-col overflow-x-clip">
      <Header />

      {/* HERO */}
      <div className="bg-[#092511] shadow-[0_0_0_100vmax_#092511] [clip-path:inset(0_-100vmax)] shrink-0 w-full">
        <div className="container mx-auto border-x border-[rgba(255,255,255,0.08)] px-4 xl:px-[75px] py-[100px] flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
            <img alt="" className="size-full object-cover" src={imgImage27} />
          </div>
          <div className="absolute -top-[120px] left-1/2 -translate-x-1/2 size-[420px] bg-[#06b349] opacity-[0.14] blur-[110px] rounded-full pointer-events-none" />
          <Typography component="h1" className="font-['Geist:SemiBold'] font-semibold leading-[1.15] text-white text-[60px] tracking-[-2px] max-w-[800px] mb-[24px] relative">
            Ads Management.<br /><span className="text-[#25d366]">Click-to-WhatsApp</span> ROI.
          </Typography>
          <Typography className="font-['Geist:Regular'] text-[#a0b8a8] text-[20px] max-w-[680px] leading-[1.6] mb-[44px] relative">
            Connect Meta Click-to-WhatsApp and Instagram ads directly to automated lead qualification and instant agent routing.
          </Typography>
          <div className="flex gap-[16px] items-center relative">
            <PrimaryButton label="Book a Demo" />
            <GhostButton label="Get Started Free" dark />
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* STATS BAND */}
      <div className="container mx-auto border-x border-b border-[#e0dac6]">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#e0dac6]">
          {WHY_STATS.map((s) => (
            <Reveal key={s.l} className="px-[24px] py-[40px] flex flex-col items-center text-center">
              <Typography className="font-['Geist:SemiBold'] font-semibold text-[#06b349] text-[48px] tracking-[-1.5px] leading-none">{s.v}</Typography>
              <Typography className="font-['Geist:Regular'] text-[#60584c] text-[14px] mt-[10px] leading-[1.4] max-w-[160px]">{s.l}</Typography>
            </Reveal>
          ))}
        </div>
      </div>

      {/* SUB FEATURES */}
      <SubFeatures />

      {/* FAQ ACCORDION */}
      <div className="border-[#e0dac6] border-b border-solid content-stretch flex flex-col items-center justify-center overflow-clip container mx-auto relative shrink-0 w-full">
        <div className="border-[#e0dac6] border-l border-r border-solid relative shrink-0 w-full">
          <div className="bg-clip-padding border-[transparent] border-l border-r border-solid content-stretch flex flex-col items-start justify-center px-4 xl:px-[50px] py-[40px] relative size-full">
            <div className="content-stretch flex flex-col lg:flex-row gap-[40px] lg:gap-[80px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full lg:w-[380px]">
                <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0">
                  <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
                    <div className="bg-[#06b349] relative top-[-2px] shrink-0 size-[10px]" />
                    <Typography className="font-['Courier_Prime:Regular'] leading-[1.4] relative shrink-0 text-[#0c221f] text-[18px] text-center whitespace-nowrap">
                      Faq’s
                    </Typography>
                  </div>
                  <div className="font-['Geist:SemiBold'] font-semibold relative shrink-0 text-[#0c221f] text-[36px] lg:text-[42px] tracking-[-1px]">
                    <Typography className="leading-[1.3] text-[#0c221f] text-[36px] lg:text-[42px] font-['Geist:SemiBold'] font-semibold">Frequently asked questions</Typography>
                  </div>
                </div>
              </div>

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
