import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock, Link2, Check } from 'lucide-react';

const XIcon = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23 22h-6.8l-5.3-7-6.1 7H2l8.2-9.4L1.5 2h6.9l4.8 6.4L18.9 2z" /></svg>;
const LinkedinIcon = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.8-2.05 3.7-2.05 3.96 0 4.69 2.6 4.69 6V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21h-4z" /></svg>;
import Header from '../components/Header';
import Footer from '../components/Footer';

const imgImage27 = '/figma/imgImage27.png';
const imgIcon1 = '/figma/imgIcon1.svg';

const grainStyle: React.CSSProperties = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
  opacity: 0.4,
  mixBlendMode: 'soft-light',
};
const PANEL = 'linear-gradient(155deg,#d9e3d7 0%,#e7ebe3 58%,#eef1ea 100%)';

// ── prose helpers ───────────────────────────────────────────────────────────────
function P({ children }: { children: ReactNode }) {
  return <Typography className="font-['Geist:Regular'] text-[#3a4540] text-[17px] leading-[1.78] mb-[22px]">{children}</Typography>;
}
function H2({ children }: { children: ReactNode }) {
  return <Typography component="h2" className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[28px] tracking-[-0.8px] leading-[1.2] mb-[16px] mt-[8px]">{children}</Typography>;
}
function UL({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-[12px] mb-[24px]">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-[12px]">
          <span className="size-[6px] rounded-full bg-[#06b349] shrink-0 mt-[10px]" />
          <span className="font-['Geist:Regular'] text-[#3a4540] text-[16.5px] leading-[1.6]">{it}</span>
        </li>
      ))}
    </ul>
  );
}
function Quote({ children }: { children: ReactNode }) {
  return (
    <div className="my-[32px] p-3 pl-[24px]" style={{ background: PANEL, borderLeft: '3px solid #06b349' }}>
      <Typography className="font-['Geist:Medium'] font-medium text-[#0c221f] text-[20px] leading-[1.5] tracking-[-0.4px] italic">{children}</Typography>
    </div>
  );
}
function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="my-[32px] p-[24px] flex gap-[14px]" style={{ background: PANEL }}>
      <Typography className="font-['Geist:Regular'] text-[#2f3a34] text-[15.5px] leading-[1.6]">{children}</Typography>
    </div>
  );
}
function InlineImage({ label }: { label?: string }) {
  return (
    <div className="my-[32px]">
      <div className="relative overflow-hidden  aspect-[16/9]" style={{ background: PANEL }}>
        <div className="absolute inset-0 pointer-events-none" style={grainStyle} />
      </div>
    </div>
  );
}

// ── ARTICLE CONTENT ───────────────────────────────────────────────────────────
const ARTICLE = {
  category: 'CRM',
  title: 'The unified inbox playbook for busy support teams',
  excerpt: 'How to bring WhatsApp, Instagram and Facebook into one shared inbox — and route every chat to the right person without the chaos.',
  author: 'Aarti Kulkarni',
  role: 'Head of Support, WeNext',
  date: 'Jul 24, 2026',
  read: '7 min read',
};

type Section = { id: string; title: string; body: ReactNode };
const SECTIONS: Section[] = [
  {
    id: 'why-it-matters', title: 'Why one inbox matters',
    body: (
      <>
        <P>Your customers don’t think in channels. They message you on WhatsApp in the morning, reply to an Instagram story at lunch, and drop a Facebook comment at night — and they expect you to remember all of it. The problem is that most teams answer those messages in three different apps, with three different tabs, and no shared memory between them.</P>
        <P>A unified inbox fixes the root cause: it brings every conversation, from every channel, into one shared screen your whole team works from. No app-switching, no “did anyone reply to this?”, no dropped handoffs.</P>
        <Quote>If a customer has to repeat themselves because your team lost the thread, you’ve already lost the sale.</Quote>
      </>
    ),
  },
  {
    id: 'connect-channels', title: 'Connect your channels',
    body: (
      <>
        <P>Start by connecting the channels your customers actually use. In WeNext that takes a couple of clicks through the official Meta and WhatsApp Business APIs — no code, no waiting on a developer.</P>
        <UL items={['WhatsApp Business — your highest-intent channel', 'Instagram DMs, story replies and comments', 'Facebook Messenger threads', 'A shared team inbox everyone logs into']} />
        <InlineImage label="Channel connection screen" />
        <P>Once connected, every incoming message lands in the same place, tagged with the channel it came from, so your team always has context before they reply.</P>
      </>
    ),
  },
  {
    id: 'route-and-assign', title: 'Route and assign',
    body: (
      <>
        <P>The fastest way to slow a team down is to let ten people stare at the same queue. Assignment removes the ambiguity: every conversation gets one clear owner.</P>
        <P>Set up automatic routing by workload (round-robin) or by rules — VIP customers to your senior reps, billing questions to finance, everything else spread evenly. Agents can still reassign a chat in one click when it needs a specialist.</P>
        <Callout>Teams that auto-assign conversations resolve them roughly 40% faster, simply because nothing sits unowned waiting for someone to “notice” it.</Callout>
      </>
    ),
  },
  {
    id: 'ai-replies', title: 'Let AI draft the replies',
    body: (
      <>
        <P>Most support volume is repetitive: timings, pricing, order status, return policy. You don’t need a bigger team to handle it — you need drafts ready the moment a message arrives.</P>
        <P>WeNext’s AI reads your catalog and past conversations and suggests on-brand replies your agents can send in one tap, or edit first. The agent stays in control; the blank page disappears.</P>
        <UL items={['On-brand drafts trained on your own content', 'One-tap send, or quick edit before sending', 'Automatic escalation to a human when it matters']} />
      </>
    ),
  },
  {
    id: 'tags-and-context', title: 'Tags and customer context',
    body: (
      <>
        <P>Tags turn a noisy queue into something you can actually navigate. Label conversations by intent — lead, order, support, VIP — and filter the whole inbox down to exactly what matters right now.</P>
        <P>Next to every thread sits the customer’s full context: past orders, lifetime value, previous conversations and internal notes from your team. Whoever picks up the chat already knows the story.</P>
      </>
    ),
  },
  {
    id: 'measure', title: 'Measure what matters',
    body: (
      <>
        <P>You can’t improve what you don’t measure. Once conversations live in one place, the metrics finally line up across channels.</P>
        <UL items={['First-response time — the single biggest driver of satisfaction', 'Resolution rate and average handle time', 'Deal value influenced by conversations', 'Agent performance and workload balance']} />
        <P>Review these weekly, and let the numbers — not gut feel — tell you where to tighten routing or add automation.</P>
      </>
    ),
  },
  {
    id: 'takeaways', title: 'Key takeaways',
    body: (
      <>
        <P>A unified inbox isn’t a nice-to-have; it’s the difference between a team that reacts and one that runs on rails. Connect your channels, assign every chat, let AI carry the repetitive load, and measure relentlessly.</P>
        <UL items={['One shared inbox for every channel', 'Every conversation has a clear owner', 'AI drafts the repetitive replies', 'Weekly metrics guide the next improvement']} />
      </>
    ),
  },
];

type RelatedPost = { title: string; excerpt: string; category: string; author: string; date: string; read: string };

const RELATED: RelatedPost[] = [
  { title: 'Cut cart abandonment with WhatsApp recovery flows', excerpt: 'A step-by-step teardown of the automated nudges that recover up to 40% of abandoned carts on WhatsApp.', category: 'WhatsApp Marketing', author: 'Rohan Shetty', date: 'Jul 21, 2026', read: '6 min' },
  { title: 'AI-suggested replies that actually sound like you', excerpt: 'Train your AI on your catalog and past chats so every reply is on-brand — and know exactly when to escalate to a human.', category: 'AI Agents', author: 'Neha Iyer', date: 'Jul 18, 2026', read: '5 min' },
  { title: 'Automations 101: routing chats without a developer', excerpt: 'Build round-robin assignment, auto-replies and follow-up sequences with a no-code workflow builder.', category: 'Automation', author: 'Aarti Kulkarni', date: 'Jul 11, 2026', read: '6 min' },
];

const catColor: Record<string, string> = {
  'WhatsApp Marketing': '#06824f',
  'Automation': '#3f6cab',
  'AI Agents': '#7c5bd6',
  'CRM': '#0a8f5a',
  'Commerce': '#c98a3a',
  'Product Updates': '#d9577e',
};

function CatPill({ c }: { c: string }) {
  const color = catColor[c] || '#06824f';
  return <span className="font-['Courier_Prime'] text-[13px] uppercase tracking-[0.1em] text-[#0c221f] font-medium px-[10px] py-[3px]" style={{ background: `${color}18`, color }}>{c}</span>;
}

function Meta({ p }: { p: RelatedPost }) {
  return (
    <div className="flex items-start gap-[10px] mt-[16px] border-t border-[#e0dac6] pt-[16px]">
      <div className="size-[30px] rounded-full bg-[#06b349] flex items-center justify-center text-white font-['Geist:SemiBold'] font-semibold text-[11px] shrink-0">{p.author.split(' ').map((w) => w[0]).join('').slice(0, 2)}</div>
      <div className="min-w-0">
        <Typography className="font-['Geist:Medium'] font-medium text-[#0c221f] text-[12.5px] leading-none truncate">{p.author}</Typography>
        <div className="flex items-center gap-[7px] mt-[3px]">
          <Typography className="font-['Geist:Regular'] text-[#8a938e] text-[11.5px]">{p.date}</Typography>
          <span className="size-[3px] rounded-full bg-[#c7cec9]" />
          <span className="flex items-center gap-[3px] text-[#8a938e] text-[11.5px]"><Clock size={11} strokeWidth={2} />{p.read}</span>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
export default function BlogPost() {
  const navigate = useNavigate();
  const [active, setActive] = useState(SECTIONS[0].id);
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  // scroll-spy for the table of contents
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive((e.target as HTMLElement).id); }),
      { rootMargin: '-96px 0px -68% 0px', threshold: 0 }
    );
    SECTIONS.forEach((s) => { const el = document.getElementById(s.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  // reading progress bar
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? Math.min(100, (h.scrollTop / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true, capture: true });
    return () => window.removeEventListener('scroll', onScroll, { capture: true } as EventListenerOptions);
  }, []);

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const copyLink = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(window.location.href);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const initials = ARTICLE.author.split(' ').map((w) => w[0]).join('').slice(0, 2);
  const catColor = '#0a8f5a';

  return (
    <div className="bg-[#f8f5ec] relative size-full min-h-screen flex flex-col overflow-x-clip">


      <Header />

      {/* ARTICLE HEADER */}
      <div className="container mx-auto border-x border-b border-[#e0dac6]">
        <div className="px-4 xl:px-[56px] pt-[48px] pb-[40px] mx-auto flex flex-col items-start">
          <button onClick={() => navigate('/blog')} className="inline-flex items-center gap-[7px] text-[#60584c] hover:text-[#06b349] transition-colors text-[14px] font-['Geist:Medium'] font-medium mb-[26px] cursor-pointer">
            <ArrowLeft size={16} strokeWidth={2} /> Back to blog
          </button>
          <Typography component="h1" className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[32px] tracking-[-1.6px] leading-[1.1] mb-[18px] uppercase border-t w-full pt-6 border-[#e0dac6]">{ARTICLE.title}</Typography>
          <Typography className="font-['Geist:Regular'] text-[#60584c] text-[19px] leading-[1.55]  mb-[18px]">{ARTICLE.excerpt}</Typography>
          <span className="font-['Courier_Prime'] text-[13px] uppercase tracking-[0.2em] text-[#0c221f] px-[10px] py-[4px] mb-[20px]" style={{ background: `${catColor}18`, color: catColor }}>{ARTICLE.category}</span>
          <div className='flex items-center justify-between w-full'>
            <div className="flex items-center gap-[12px]">
              <div className="size-[42px] rounded-full bg-[#06b349] flex items-center justify-center text-white font-['Geist:SemiBold'] font-semibold text-[15px]">{initials}</div>
              <div className="text-left">
                <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[14.5px] leading-none">{ARTICLE.author}</Typography>
                <div className="flex items-center gap-[8px] mt-[4px]">
                  <Typography className="font-['Geist:Regular'] text-[#8a938e] text-[12.5px]">{ARTICLE.date}</Typography>
                  <span className="size-[3px] rounded-full bg-[#c7cec9]" />
                  <span className="flex items-center gap-[4px] text-[#8a938e] text-[12.5px]"><Clock size={12} strokeWidth={2} />{ARTICLE.read}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[8px]">
              {[XIcon, LinkedinIcon].map((Ic, i) => (
                <span key={i} className="size-[34px] border border-[#e0dac6] bg-white flex items-center justify-center text-[#60584c] hover:text-[#06b349] hover:border-[#06b349] transition-colors cursor-pointer"><Ic /></span>
              ))}
              <button onClick={copyLink} className="size-[34px] border border-[#e0dac6] bg-white flex items-center justify-center text-[#60584c] hover:text-[#06b349] hover:border-[#06b349] transition-colors cursor-pointer">
                {copied ? <Check size={16} strokeWidth={2.4} color="#06b349" /> : <Link2 size={16} strokeWidth={2} />}
              </button>
            </div>
          </div>
        </div>
        {/* cover */}
        <div className="px-4 xl:px-[56px] pb-[56px]">
          <div className="relative overflow-hidden aspect-[16/7]" style={{ background: PANEL }}>
            <div className="absolute inset-0 pointer-events-none" style={grainStyle} />

          </div>
        </div>
      </div>

      {/* BODY — TOC + content */}
      <div className="container mx-auto border-x border-b border-[#e0dac6]">
        <div className="px-4 xl:px-[56px] py-[64px] grid lg:grid-cols-[236px_minmax(0,1fr)] gap-[40px] xl:gap-[72px]">
          {/* TABLE OF CONTENTS */}
          <aside className="hidden lg:block">
            <div className="sticky top-[104px]">
              <Typography className="font-['Courier_Prime'] text-[#000] text-[13px] uppercase tracking-[0.18em] mb-[16px]">table of content</Typography>
              <ul className="flex flex-col border-l border-[#e0dac6]">
                {SECTIONS.map((s) => {
                  const on = active === s.id;
                  return (
                    <li key={s.id}>
                      <button
                        onClick={() => goTo(s.id)}
                        className={`block text-left w-full pl-[16px] py-[7px] -ml-px border-l-2 text-[14px] leading-[1.4] transition-colors duration-200 cursor-pointer ${on ? 'border-[#06b349] text-[#06b349] font-[\'Geist:Medium\'] font-medium' : 'border-transparent text-[#60584c] hover:text-[#0c221f]'}`}
                      >
                        {s.title}
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* share */}
              <div className="mt-[28px] pt-[24px] border-t border-[#e0dac6]">
                <Typography className="font-['Courier_Prime'] text-[#000] text-[13px] uppercase tracking-[0.18em] mb-[16px]">Share</Typography>
                <div className="flex items-center gap-[8px]">
                  {[XIcon, LinkedinIcon].map((Ic, i) => (
                    <span key={i} className="size-[34px] border border-[#e0dac6] bg-white flex items-center justify-center text-[#60584c] hover:text-[#06b349] hover:border-[#06b349] transition-colors cursor-pointer"><Ic /></span>
                  ))}
                  <button onClick={copyLink} className="size-[34px] border border-[#e0dac6] bg-white flex items-center justify-center text-[#60584c] hover:text-[#06b349] hover:border-[#06b349] transition-colors cursor-pointer">
                    {copied ? <Check size={16} strokeWidth={2.4} color="#06b349" /> : <Link2 size={16} strokeWidth={2} />}
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* CONTENT */}
          <article className="max-w-[760px]">
            {SECTIONS.map((s) => (
              <section key={s.id} id={s.id} style={{ scrollMarginTop: '100px' }} className="mb-[44px]">
                <H2>{s.title}</H2>
                {s.body}
              </section>
            ))}
          </article>
        </div>
      </div>

      {/* RELATED */}
      <div className="container mx-auto border-x border-b border-[#e0dac6]">
        <div className="px-4 xl:px-[56px] py-[64px]">
          <div className="flex items-end justify-between mb-[32px]">
            <Typography component="h2" className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[30px] tracking-[-1px]">Related Blogs</Typography>
            <button onClick={() => navigate('/blog')} className="inline-flex items-center gap-[6px] text-[#06b349] font-['Geist:Medium'] font-medium text-[15px] hover:gap-[9px] transition-all cursor-pointer">View All Blogs <ArrowUpRight size={17} strokeWidth={2.2} /></button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[26px]">
            {RELATED.map((r, i) => (
              <div key={i} onClick={() => navigate('/blog/' + r.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''))} className="h-full bg-[#fafafa] overflow-hidden flex flex-col group cursor-pointer hover:shadow-[0_24px_50px_-30px_rgba(11,31,26,0.3)] transition-shadow duration-300">
                <div className="relative overflow-hidden aspect-[16/10] w-full" style={{ background: PANEL }}>
                  <div className="absolute inset-0 pointer-events-none" style={grainStyle} />
                </div>
                <div className="p-[22px] flex flex-col flex-1">
                  <div className="mb-[12px]"><CatPill c={r.category} /></div>
                  <Typography component="h3" className="font-['Geist:SemiBold'] uppercase font-semibold text-[#0c221f] text-[16px] tracking-[-0.3px] leading-[1.25] mb-[8px] group-hover: transition-colors">{r.title}</Typography>
                  <Typography className="font-['Geist:Regular'] text-[#60584c] text-[14px] leading-[1.55] flex-1">{r.excerpt}</Typography>
                  <Meta p={r} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto border-x border-b border-[#e0dac6]">
        <div className="bg-[#092511] relative overflow-hidden px-4 xl:px-[75px] py-[64px] flex flex-col items-center text-center">
          <div className="absolute inset-0 pointer-events-none opacity-[0.05]"><img alt="" className="size-full object-cover" src={imgImage27} /></div>
          <div className="absolute -bottom-[150px] left-1/2 -translate-x-1/2 size-[460px] bg-[#06b349] opacity-[0.16] blur-[120px] rounded-full pointer-events-none" />
          <Typography component="h2" className="font-['Geist:SemiBold'] font-semibold text-white text-[38px] tracking-[-1.2px] leading-[1.14] max-w-[560px] relative mb-[14px]">
            Put the playbook to work
          </Typography>
          <Typography className="font-['Geist:Regular'] text-[#a0b8a8] text-[17px] max-w-[500px] leading-[1.55] mb-[30px] relative">
            See how WeNext brings every conversation into one inbox — book a walkthrough with our team.
          </Typography>
          <a href="https://app.wenext.ai/book/wenext-platform-walkthrough" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-[#f8f5ec] active:scale-[0.98] transition-all duration-150 rounded-[8px] cursor-pointer overflow-hidden relative inline-flex">
            <div className="flex gap-[10px] items-center px-[22px] py-[15px]">
              <Typography className="font-['Geist:Medium'] font-medium text-[17px] text-[#092511] whitespace-nowrap relative">Book a Demo</Typography>
              <svg className="size-[20px] shrink-0 text-[#092511]" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3.75 10h12.5M11.25 15l5-5-5-5" /></svg>
            </div>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
