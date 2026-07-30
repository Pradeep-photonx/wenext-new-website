import Typography from '@mui/material/Typography';
import { useRef, useState, useEffect, useMemo } from 'react';
import type { ReactNode } from 'react';
import { Search, ArrowRight, Clock, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BorderY from '../assets/borders-y.png';

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
  const [ref, inView] = useInView(0.1);
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.55s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
    }}>
      {children}
    </div>
  );
}

function Eyebrow({ label, center = false }: { label: string; center?: boolean }) {
  return (
    <div className={`flex gap-[10px] items-center mb-[16px] ${center ? 'justify-center' : ''}`}>
      <div className="bg-[#06b349] relative top-[-2px] size-[8px] rounded-full" />
      <Typography sx={{ lineHeight: '100%' }} className="font-['Courier_Prime'] text-[13px] uppercase tracking-[0.2em] text-[#0c221f]">{label}</Typography>
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

function Thumb({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: PANEL }}>
      <div className="absolute inset-0 pointer-events-none" style={grainStyle} />
      <div className="absolute inset-0 flex items-center justify-center">

      </div>
    </div>
  );
}

// ── DATA ────────────────────────────────────────────────────────────────────────
const CATEGORIES = ['All', 'WhatsApp Marketing', 'Automation', 'AI Agents', 'CRM', 'Commerce', 'Product Updates'];

type Post = { title: string; excerpt: string; category: string; author: string; date: string; read: string };

const POSTS: Post[] = [
  { title: 'The unified inbox playbook for busy support teams', excerpt: 'How to bring WhatsApp, Instagram and Facebook into one shared inbox — and route every chat to the right person without the chaos.', category: 'CRM', author: 'Aarti Kulkarni', date: 'Jul 24, 2026', read: '7 min' },
  { title: 'Cut cart abandonment with WhatsApp recovery flows', excerpt: 'A step-by-step teardown of the automated nudges that recover up to 40% of abandoned carts on WhatsApp.', category: 'WhatsApp Marketing', author: 'Rohan Shetty', date: 'Jul 21, 2026', read: '6 min' },
  { title: 'AI-suggested replies that actually sound like you', excerpt: 'Train your AI on your catalog and past chats so every reply is on-brand — and know exactly when to escalate to a human.', category: 'AI Agents', author: 'Neha Iyer', date: 'Jul 18, 2026', read: '5 min' },
  { title: '7 WhatsApp broadcast campaigns that drove real revenue', excerpt: 'Real campaign breakdowns — offers, re-engagement and launches — with the segmentation that made them convert.', category: 'WhatsApp Marketing', author: 'Kabir Mehta', date: 'Jul 15, 2026', read: '8 min' },
  { title: 'Automations 101: routing chats without a developer', excerpt: 'Build round-robin assignment, auto-replies and follow-up sequences with a no-code workflow builder.', category: 'Automation', author: 'Aarti Kulkarni', date: 'Jul 11, 2026', read: '6 min' },
  { title: 'From DM to sale: conversational commerce on Instagram', excerpt: 'Turn story replies and comments into checkout with product cards and secure payment links inside the chat.', category: 'Commerce', author: 'Diya Patel', date: 'Jul 8, 2026', read: '5 min' },
  { title: 'Reduce no-shows: appointment reminders that work', excerpt: 'The reminder cadence and one-tap confirm flow that pushes appointment show rates above 90%.', category: 'Automation', author: 'Rohan Shetty', date: 'Jul 3, 2026', read: '4 min' },
  { title: 'What’s new in WeNext — Q3 product roundup', excerpt: 'Deal values in the inbox, faster AI drafts, new integrations and everything else we shipped this quarter.', category: 'Product Updates', author: 'WeNext Team', date: 'Jun 28, 2026', read: '3 min' },
  { title: 'Building a customer data store you can trust', excerpt: 'Centralise contacts, custom fields and conversation history so every team works from one source of truth.', category: 'CRM', author: 'Neha Iyer', date: 'Jun 24, 2026', read: '6 min' },
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

function Meta({ p }: { p: Post }) {
  return (
    <div className="flex items-start gap-[10px] mt-[16px] border-t pt-[16px]">
      <div className="size-[30px] rounded-full bg-[#000] flex items-center justify-center text-white font-['Geist:SemiBold'] font-semibold text-[11px] shrink-0">{p.author.split(' ').map((w) => w[0]).join('').slice(0, 2)}</div>
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
export default function Blog() {
  const navigate = useNavigate();
  const openPost = (title: string) => navigate('/blog/' + title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''));
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('All');
  const [visible, setVisible] = useState(6);

  const isDefault = query.trim() === '' && cat === 'All';

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return POSTS.filter((p) =>
      (cat === 'All' || p.category === cat) &&
      (q === '' || (p.title + ' ' + p.excerpt + ' ' + p.category).toLowerCase().includes(q))
    );
  }, [query, cat]);

  useEffect(() => { setVisible(6); }, [query, cat]);

  const featured = isDefault ? POSTS[0] : null;
  const gridPosts = isDefault ? POSTS.slice(1) : filtered;
  const shown = gridPosts.slice(0, visible);

  return (
    <div className="bg-[#f8f5ec] relative size-full min-h-screen flex flex-col overflow-x-clip">
      <Header />

      {/* HEADER */}
      <div className="container mx-auto border-x border-b border-[#e0dac6]">
        <div className="px-4 xl:px-[75px] py-[80px] text-center flex flex-col items-center">
          <Eyebrow label="WeNext Blog" center />
          <Typography component="h1" className="font-['Geist:SemiBold'] font-semibold text-[52px] text-[#0c221f] tracking-[-1.8px] leading-[1.08] max-w-[720px]">
            Ideas to grow your business on WhatsApp
          </Typography>
          <Typography className="font-['Geist:Regular'] text-[#60584c] text-[19px] max-w-[600px] leading-[1.55] mt-[16px]">
            Playbooks, product updates and practical guides on conversations, automation and AI — straight from the WeNext team.
          </Typography>
        </div>
      </div>

      {/* FEATURED */}
      {featured && (
        <div className="container mx-auto border-x  border-[#e0dac6]">
          <Reveal className="">
            <div onClick={() => openPost(featured.title)} className="grid lg:grid-cols-2 gap-[40px] lg:gap-[56px] items-center group cursor-pointer">
              <Thumb label="Featured" className=" aspect-[6/4.8] w-full" />
              <div className='pr-12'>
                <div className="flex items-center gap-[10px] mb-[16px]">
                  <CatPill c={featured.category} />
                </div>
                <Typography component="h2" className="font-['Geist:SemiBold'] font-semibold text-[32px] text-[#0c221f] tracking-[-1px] leading-[1.15] uppercase group-hover: transition-colors">
                  {featured.title}
                </Typography>
                <Typography className="font-['Geist:Regular'] text-[#60584c] text-[17px] leading-[1.6] mt-[14px] max-w-[520px]">{featured.excerpt}</Typography>
                <Meta p={featured} />
              </div>
            </div>
          </Reveal>
        </div>
      )}

      {/* FILTER TOOLBAR */}
      <div className="container mx-auto border-x border-[#e0dac6] relative">
        <div className="px-4 xl:px-[56px] py-[35px] border-t border-[#e0dac6] flex flex-col  gap-[35px]">
          <div className='flex flex-col lg:flex-row lg:items-center gap-[16px] lg:justify-end'>
            <div className="relative w-full lg:w-[340px] shrink-0">
              <Search size={18} strokeWidth={2} className="absolute left-[15px] top-1/2 -translate-y-1/2 text-[#8a938e]" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles…"
                className="w-full h-[48px]  border border-[#e0dac6] bg-white pl-[44px] pr-[16px] text-[15px] text-[#0c221f] placeholder:text-[#9aa39c] outline-none focus:border-[#06b349] focus:ring-2 focus:ring-[#06b34926] transition-all font-['Geist:Regular']"
              />
            </div>
            <div className="relative w-full lg:w-[220px] shrink-0">
              <select
                value={cat}
                onChange={(e) => setCat(e.target.value)}
                className="w-full h-[48px] border border-[#e0dac6] bg-white px-[16px] pr-[40px] text-[15px] text-[#0c221f] outline-none focus:border-[#06b349] focus:ring-2 focus:ring-[#06b34926] transition-all font-['Geist:Medium'] cursor-pointer appearance-none"
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c === 'All' ? 'All Categories' : c}
                  </option>
                ))}
              </select>
              <ChevronDown size={18} strokeWidth={2} className="absolute right-[15px] top-1/2 -translate-y-1/2 text-[#8a938e] pointer-events-none" />
            </div>
          </div>
        </div>
        <div className="px-4 xl:px-[56px] border-y border-[#e0dac6] flex flex-col  gap-[35px] relative">
          <img
            style={{
              position: 'absolute',
              top: '0px',
              left: '0',
              width: '56px',
              height: "100%"
            }}
            src={BorderY}
            alt=""
          />
          <img
            style={{
              position: 'absolute',
              top: '0px',
              right: '0',
              width: '56px',
              height: "100%",
            }}
            src={BorderY}
            alt=""
          />
          <div className='border-x pb-[35px]'>
            {!isDefault && (
              <Typography className="font-['Geist:Regular'] text-[#60584c] text-[15px] mb-[28px]">
                {filtered.length} article{filtered.length === 1 ? '' : 's'}{cat !== 'All' ? ` in ${cat}` : ''}{query.trim() ? ` for “${query.trim()}”` : ''}
              </Typography>
            )}

            {shown.length === 0 ? (
              <div className="py-[60px] flex flex-col items-center text-center">
                <div className="size-[54px] rounded-[14px] bg-[#e7f6ee] flex items-center justify-center mb-[18px]"><Search size={24} strokeWidth={1.9} color="#06b349" /></div>
                <Typography className="font-['Geist:SemiBold'] font-semibold text-[#0c221f] text-[20px] mb-[6px]">No articles found</Typography>
                <Typography className="font-['Geist:Regular'] text-[#60584c] text-[15px] mb-[22px] max-w-[380px]">Try a different keyword or clear the filters to see everything.</Typography>
                <button onClick={() => { setQuery(''); setCat('All'); }} className="bg-[#06b349] hover:bg-[#05a043] text-white font-['Geist:Medium'] font-medium text-[14px] rounded-[10px] px-[18px] py-[11px] transition-colors cursor-pointer">Clear filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[26px] mb-10">
                {shown.map((p, i) => (
                  <Reveal key={p.title} delay={(i % 3) * 0.05}>
                    <div onClick={() => openPost(p.title)} className="h-full bg-[#fafafa] overflow-hidden flex flex-col group cursor-pointer hover:shadow-[0_24px_50px_-30px_rgba(11,31,26,0.3)] transition-shadow duration-300">
                      <Thumb label={p.category} className="aspect-[16/10] w-full" />
                      <div className="p-[22px] flex flex-col flex-1">
                        <div className="mb-[12px]"><CatPill c={p.category} /></div>
                        <Typography component="h3" className="font-['Geist:SemiBold'] uppercase font-semibold text-[#0c221f] text-[16px] tracking-[-0.3px] leading-[1.25] mb-[8px] group-hover: transition-colors">{p.title}</Typography>
                        <Typography className="font-['Geist:Regular'] text-[#60584c] text-[14px] leading-[1.55] flex-1">{p.excerpt}</Typography>
                        <Meta p={p} />
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}

            {shown.length < gridPosts.length && (
              <div className="flex justify-center">
                <div
                  onClick={() => setVisible((v) => v + 6)}
                  className="bg-[#06b349] hover:bg-[#05a043] active:scale-[0.98] transition-all duration-150 rounded-[8px] cursor-pointer overflow-hidden relative inline-flex shrink-0"
                >
                  <div className="flex gap-[11.992px] items-center px-[24px] py-[14px]">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[1410px] left-[calc(50%+0.5px)] mix-blend-color-burn top-1/2 w-[2115px]">
                      <img alt="" className="absolute inset-0 max-w-none object-cover opacity-25 pointer-events-none size-full" src={imgImage27} />
                    </div>
                    <Typography className="font-['Geist:Medium'] font-medium text-[16px] text-white whitespace-nowrap relative">
                      Load more articles
                    </Typography>
                    <div className="relative shrink-0 size-[20px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
