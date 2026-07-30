import Typography from '@mui/material/Typography';
import { useRef, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import {
  CalendarCheck, BellRing, FileText, Sparkles, CreditCard, HeartPulse,
  MessageCircle, CalendarX, ClipboardList, Users, Stethoscope, Megaphone,
  Receipt, TrendingUp, Clock, type LucideIcon,
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

function PrimaryButton({ label }: { label: string }) {
  return (
    <div className="bg-[#06b349] hover:bg-[#05a043] active:scale-[0.98] transition-all duration-150 rounded-[8px] cursor-pointer overflow-hidden relative inline-flex">
      <div className="flex gap-[12px] items-center pl-[20px] pr-[15px] py-[15px]">
        <div className="absolute inset-0 pointer-events-none"><img alt="" className="size-full object-cover opacity-20 mix-blend-color-burn" src={imgImage27} /></div>
        <Typography className="font-['Geist:Medium'] font-medium text-[17px] text-white whitespace-nowrap relative">{label}</Typography>
        <div className="size-[20px] relative shrink-0"><img alt="" className="absolute inset-0 size-full" src={imgIcon1} /></div>
      </div>
    </div>
  );
}

function GhostButton({ label, dark = false }: { label: string; dark?: boolean }) {
  return dark ? (
    <div className="bg-transparent border border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.05)] active:scale-[0.98] transition-all duration-150 rounded-[8px] cursor-pointer inline-flex items-center px-[21px] py-[15px]">
      <Typography className="font-['Geist:Medium'] font-medium text-[17px] text-white whitespace-nowrap">{label}</Typography>
    </div>
  ) : (
    <div className="bg-white border border-[#dedace] hover:bg-[#f3efe3] active:scale-[0.98] transition-all duration-150 rounded-[8px] cursor-pointer inline-flex items-center px-[21px] py-[15px]">
      <Typography className="font-['Geist:Medium'] font-medium text-[17px] text-[#092511] whitespace-nowrap">{label}</Typography>
    </div>
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
  { v: '8×', l: 'Faster response speed' },
  { v: '92%', l: 'Appointment show rate' },
  { v: '5–6h', l: 'Staff time saved daily' },
  { v: '24/7', l: 'Always-on care AI' },
];

type Card = { icon: LucideIcon; t: string; d: string };

const CHALLENGES: Card[] = [
  { icon: CalendarX, t: 'No-shows & missed bookings', d: 'Patients can’t book directly, so slots sit empty and revenue slips away.' },
  { icon: MessageCircle, t: 'A front desk buried in questions', d: 'Timings, location, fees, doctors — the same questions, all day long.' },
  { icon: ClipboardList, t: 'Reports & reminders by hand', d: 'Lab reports, prescriptions and follow-ups chased manually, one by one.' },
];

const CAPABILITIES: Card[] = [
  { icon: CalendarCheck, t: 'Appointment booking', d: 'Patients pick a doctor and slot right inside WhatsApp — auto-confirmed.' },
  { icon: BellRing, t: 'Smart reminders', d: 'Automated visit, medication and follow-up reminders that cut no-shows.' },
  { icon: FileText, t: 'Reports on WhatsApp', d: 'Send lab results and prescriptions securely straight to the patient’s chat.' },
  { icon: Sparkles, t: 'AI patient assistant', d: 'Answers timings, services and fees 24/7 — escalates to staff when needed.' },
  { icon: CreditCard, t: 'Payments & invoices', d: 'Share consultation payment links and receipts without leaving the chat.' },
  { icon: HeartPulse, t: 'Follow-up care', d: 'Post-visit check-ins and recall campaigns that bring patients back.' },
];

const HIGHLIGHTS = [
  {
    tag: 'Before the visit',
    title: 'Turn every inquiry into a booked consultation',
    body: 'Patients ask about timings, doctors and fees at all hours — and WeNext answers instantly, then guides them straight to an open slot. Phone tag and missed callbacks become confirmed appointments, day and night.',
    points: ['Instant answers to common questions', 'Live availability, booked in the chat', 'Auto-confirmation the moment it’s booked'],
  },
  {
    tag: 'After the visit',
    title: 'Care that continues long after they leave',
    body: 'Lab results, medication reminders and recovery check-ins go out on their own — securely on WhatsApp — so patients feel looked after, stick to their treatment, and come back when it matters.',
    points: ['Secure reports and prescriptions', 'Timely medication and follow-up nudges', 'Recall and check-up reminders'],
  },
];

const TESTIMONIALS = [
  { q: 'Appointment booking on WhatsApp used to be chaos. Now it runs end-to-end automatically and our no-shows dropped sharply.', c: 'Neehar Neuro', r: 'Neurology Clinic' },
  { q: 'Our front desk used to drown in repeat questions. WeNext’s AI handles them 24/7 — the team finally has time for patients.', c: 'Sanjeevani Care', r: 'Multi-speciality' },
  { q: 'Lab reports and reminders go out on their own now. It feels like we hired a full coordination team overnight.', c: 'Lotus Dental', r: 'Dental Care' },
];

const FAQS = [
  { q: 'Can patients book appointments directly on WhatsApp?', a: 'Yes. Patients see live doctor availability and confirm a slot right inside the chat. Every booking is auto-confirmed, synced to your calendar and followed up with reminders — no front-desk effort.' },
  { q: 'How does WeNext reduce no-shows?', a: 'Automated reminders go out before every appointment, with one-tap confirm or reschedule. Combined with follow-up nudges, clinics typically see show rates climb above 90%.' },
  { q: 'Is it safe to send lab reports and prescriptions?', a: 'Reports and prescriptions are delivered to the patient’s own verified WhatsApp number through the official WhatsApp Business API, so records reach the right person securely.' },
  { q: 'Will the AI replace my front-desk staff?', a: 'No — it removes the repetitive load. The AI answers timings, fees and FAQs 24/7 and only escalates to your team when a patient genuinely needs a human.' },
  { q: 'Does it work with our existing tools?', a: 'WeNext connects alongside your calendar, payments and EHR — one layer on top of your stack, not a rip-and-replace.' },
];

const BENEFITS: { icon: LucideIcon; t: string; c: string; d: string; items: string[] }[] = [
  { icon: Users, t: 'Front desk & reception', c: '#0a8f5a', d: 'Answer, book and confirm without picking up the phone.', items: ['Answer patient questions 24/7 with AI', 'Cut no-shows with automatic reminders', 'Book, confirm and reschedule in one tap'] },
  { icon: Stethoscope, t: 'Doctors & clinical team', c: '#3f6cab', d: 'Full patient context, shared securely in seconds.', items: ['Every patient’s history and notes in one place', 'Share pre- and post-visit instructions instantly', 'Send lab reports securely on WhatsApp'] },
  { icon: Megaphone, t: 'Patient growth & retention', c: '#7c5bd6', d: 'Bring patients back and turn them into referrals.', items: ['Bring patients back with recall reminders', 'Collect reviews and referrals automatically', 'Reactivate patients who haven’t visited in a while'] },
  { icon: Receipt, t: 'Billing & coordination', c: '#c98a3a', d: 'Estimates, invoices and payments, right in the chat.', items: ['Send estimates, invoices and payment links', 'Coordinate multi-visit treatment plans', 'Share cost breakdowns and confirmations'] },
];

const OUTCOMES: { label: string; before: string; after: string; pct: number }[] = [
  { label: 'Appointment show rate', before: '68%', after: '92%', pct: 92 },
  { label: 'Average first reply', before: '4 hrs', after: 'under 30s', pct: 96 },
  { label: 'Staff hours on admin, daily', before: '6 hrs', after: '~1 hr', pct: 82 },
  { label: 'Returning patients', before: 'baseline', after: '+30%', pct: 60 },
];

// ══════════════════════════════════════════════════════════════════════════════
export default function Health() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <div className="bg-[#f8f5ec] relative size-full min-h-screen flex flex-col overflow-x-clip">
      <Header />

      {/* HERO */}
      <div className="bg-[#092511] shadow-[0_0_0_100vmax_#092511] [clip-path:inset(0_-100vmax)] shrink-0 w-full">
        <div className="container mx-auto border-x border-[rgba(255,255,255,0.08)] px-4 xl:px-[75px] py-[96px] flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]"><img alt="" className="size-full object-cover" src={imgImage27} /></div>
          <div className="absolute -top-[120px] left-1/2 -translate-x-1/2 size-[420px] bg-[#06b349] opacity-[0.14] blur-[110px] rounded-full pointer-events-none" />
          <div className="flex gap-[10px] items-center justify-center mb-[20px] relative">
            {/* <div className="bg-[#06b349] relative top-[-2px] size-[8px] rounded-full" /> */}
            {/* <Typography className="font-['Courier_Prime'] text-[#06b349] text-[14px] uppercase tracking-[0.2em]">Industries · Healthcare</Typography> */}
          </div>
          <Typography component="h1" className="font-['Geist:SemiBold'] font-semibold leading-[1.1] text-white text-[58px] tracking-[-2px] max-w-[840px] mb-[22px] relative">
            Every patient, booked and cared for — on <span className="text-[#25d366]">WhatsApp</span>
          </Typography>
          <Typography className="font-['Geist:Regular'] text-[#a0b8a8] text-[20px] max-w-[660px] leading-[1.6] mb-[40px] relative">
            WeNext turns WhatsApp into a booking, reports and reminders system for clinics — no missed appointments, no delayed replies, no front-desk overload.
          </Typography>
          <div className="flex gap-[16px] items-center relative">
            <PrimaryButton label="Book a Demo" />
            <GhostButton label="Get Started" dark />
          </div>
        </div>
      </div>


      {/* TRUST STRIP */}
      <div className="container mx-auto border-x border-b border-[#e0dac6]">
        <div className="px-4 xl:px-[56px] py-[36px] flex flex-col items-center gap-[20px]">
          <Typography className="font-['Courier_Prime'] text-[#8a938e] text-[12.5px] uppercase tracking-[0.18em]">Trusted by growing clinics across India</Typography>
          <div className="flex flex-wrap items-center justify-center gap-x-[44px] gap-y-[18px]">
            {['Neehar Neuro', 'Sanjeevani Care', 'Lotus Dental', 'Arogya Clinic', 'CityCare Hospital'].map((n) => (
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
            What’s quietly slowing your clinic down
          </Typography>
          <Typography className="font-['Geist:Regular'] text-[#60584c] text-[17px] max-w-[560px] leading-[1.55] mt-[14px]">
            Three everyday problems cost clinics time, revenue and patient trust — and WeNext fixes each one.
          </Typography>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-[#e0dac6]">
          {CHALLENGES.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.t} className="border-r border-b border-[#e0dac6] p-[28px]" delay={(i % 3) * 0.05}>
                <div className="size-[46px] rounded-[6px] bg-[#fbeee5] border border-[#f2d9c6] flex items-center justify-center mb-[16px]">
                  <Icon size={21} strokeWidth={1.9} color="#d9773f" /></div>
                <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[17px] tracking-[-0.3px] mb-[8px]">{c.t}</Typography>
                <Typography className="font-['Geist:Regular'] text-[#60584c] text-[14px] leading-[1.55]">{c.d}</Typography>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* CAPABILITIES — built for the industry */}
      <div className="container mx-auto border-x border-[#e0dac6]">
        <div className="px-4 xl:px-[56px] py-[56px] pb-[36px]">
          <Eyebrow label="Built for Healthcare" />
          <Typography component="h2" className="font-['Geist:SemiBold'] font-semibold text-[38px] text-[#0c221f] tracking-[-1.2px] leading-[1.14] max-w-[560px]">
            One platform for every patient conversation
          </Typography>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#e0dac6]">
          {CAPABILITIES.map((c, i) => {
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

      {/* HIGHLIGHTS — alternating image / text */}
      <div className="container mx-auto border-x border-b border-[#e0dac6]">
        <div className="px-4 xl:px-[56px] py-[56px] flex flex-col gap-[84px] lg:gap-[104px]">
          {HIGHLIGHTS.map((f, i) => {
            const reversed = i % 2 === 1;
            return (
              <Reveal key={f.title}>
                <div className="grid lg:grid-cols-2 gap-[40px] lg:gap-[72px] items-center">
                  <div className={reversed ? 'lg:order-2' : ''}>
                    <DummyImage tag={f.tag} />
                  </div>
                  <div className={reversed ? 'lg:order-1' : ''}>
                    <div className="inline-flex items-center gap-[8px] mb-[18px]">
                      {/* <span className="size-[6px] relative top-[-2px] rounded-full bg-[#06b349]" /> */}
                      <Typography className="font-['Courier_Prime'] text-[#06824f] text-[13px] uppercase tracking-[0.16em]">{f.tag}</Typography>
                    </div>
                    <Typography component="h3" className="font-['Geist:SemiBold'] font-semibold text-[34px] text-[#0c221f] tracking-[-1px] leading-[1.15]">{f.title}</Typography>
                    <Typography className="font-['Geist:Regular'] text-[#60584c] text-[17px] leading-[1.62] mt-[16px] max-w-[480px]">{f.body}</Typography>

                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* TEAM BENEFITS — how each team benefits */}
      <div className="container mx-auto border-x border-b border-[#e0dac6]">
        <div className="px-4 xl:px-[56px] py-[64px]">
          <div className="max-w-[600px] mb-[40px]">
            <Eyebrow label="For every team" />
            <Typography component="h2" className="font-['Geist:SemiBold'] font-semibold text-[42px] text-[#0c221f] tracking-[-1.4px] leading-[1.14]">
              How your whole clinic benefits
            </Typography>
            <Typography className="font-['Geist:Regular'] text-[#60584c] text-[17px] leading-[1.55] mt-[14px]">
              One shared WhatsApp workspace — every part of your practice works from the same place, in sync.
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
                    <Typography className="leading-[1.3] text-[#0c221f] text-[36px] lg:text-[42px] font-['Geist:SemiBold'] font-semibold">Questions clinics ask</Typography>
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
