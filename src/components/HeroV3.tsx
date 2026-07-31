import Typography from '@mui/material/Typography';
import { useState, useEffect, useRef } from 'react';
import HeroV4Card from './HeroV4Card';

type Tab = {
  name: 'WhatsApp' | 'Instagram' | 'Facebook';
};

const TABS: Tab[] = [
  { name: 'WhatsApp' },
  { name: 'Instagram' },
  { name: 'Facebook' },
];

const LABELS = [
  { idx: 0, mainOff: '25%', main: 'WhatsApp' },
  { idx: 1, mainOff: '58.33%', main: 'Instagram' },
  { idx: 2, mainOff: '91.67%', main: 'Facebook' },

];

const imgImage27 = "/figma/imgImage27.png";


// Per-tab durations sync with the mockup animation lengths (WhatsApp longest, then Facebook, then Instagram).
// Ring advances slowly enough for each mockup to fully complete before the next tab.
const DURATIONS = [11000, 9000, 10000];
const TOTAL_DUR = DURATIONS.reduce((a, b) => a + b, 0);
const BOUNDS = [0];
DURATIONS.forEach((d, i) => BOUNDS.push(BOUNDS[i] + d / TOTAL_DUR));

const cardIdxFromGP = (gp: number): 0 | 1 | 2 => {
  const g = ((gp % 1) + 1) % 1;
  for (let i = 0; i < 3; i++) {
    if (g >= BOUNDS[i] && g < BOUNDS[i + 1]) return i as 0 | 1 | 2;
  }
  return 2;
};

export default function HeroV4() {
  const [activeIdx, setActiveIdx] = useState<0 | 1 | 2>(0);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);
  const draggingRef = useRef(false);
  const pausedRef = useRef(false);
  const dragStartAngleRef = useRef(0);
  const dragStartGPRef = useRef(0);
  const autoPlayRafRef = useRef<number | null>(null);
  const autoPlayStartRef = useRef(0);
  const autoPlayFromGPRef = useRef(0);
  const discRef = useRef<HTMLDivElement | null>(null);
  const ringWrapperRef = useRef<HTMLDivElement | null>(null);

  const seek = (gp: number) => {
    const wrapped = ((gp % 1) + 1) % 1;
    progressRef.current = wrapped;
    setProgress(wrapped);
    const idx = cardIdxFromGP(wrapped);
    setActiveIdx((prev) => (prev === idx ? prev : idx));
  };

  const startAutoPlay = (fromGP: number) => {
    if (autoPlayRafRef.current !== null) cancelAnimationFrame(autoPlayRafRef.current);
    autoPlayFromGPRef.current = fromGP;
    autoPlayStartRef.current = performance.now();
    const tick = (now: number) => {
      if (pausedRef.current) return;
      const elapsed = now - autoPlayStartRef.current;
      seek(autoPlayFromGPRef.current + elapsed / TOTAL_DUR);
      autoPlayRafRef.current = requestAnimationFrame(tick);
    };
    autoPlayRafRef.current = requestAnimationFrame(tick);
  };

  const stopAutoPlay = () => {
    if (autoPlayRafRef.current !== null) cancelAnimationFrame(autoPlayRafRef.current);
    autoPlayRafRef.current = null;
  };

  useEffect(() => {
    startAutoPlay(0);
    return () => stopAutoPlay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAngleFromCenter = (clientX: number, clientY: number) => {
    const el = discRef.current;
    if (!el) return 0;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    return (Math.atan2(clientY - cy, clientX - cx) * 180) / Math.PI;
  };

  const onDragStart = (clientX: number, clientY: number, target?: EventTarget | null) => {
    if (target && (target as HTMLElement).closest?.('svg text.hv4-label')) return;
    draggingRef.current = true;
    pausedRef.current = true;
    stopAutoPlay();
    dragStartAngleRef.current = getAngleFromCenter(clientX, clientY);
    dragStartGPRef.current = progressRef.current;
  };

  const onDragMove = (clientX: number, clientY: number) => {
    if (!draggingRef.current) return;
    const angle = getAngleFromCenter(clientX, clientY);
    let delta = angle - dragStartAngleRef.current;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    const gpDelta = delta / 360;
    seek(dragStartGPRef.current + gpDelta);
  };

  const onDragEnd = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    pausedRef.current = false;
    startAutoPlay(progressRef.current);
  };

  useEffect(() => {
    const wrapper = ringWrapperRef.current;
    if (!wrapper) return;
    const onMouseDown = (e: MouseEvent) => {
      onDragStart(e.clientX, e.clientY, e.target);
      e.preventDefault();
    };
    const onMouseMove = (e: MouseEvent) => onDragMove(e.clientX, e.clientY);
    const onMouseUp = () => onDragEnd();
    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      onDragStart(t.clientX, t.clientY, e.target);
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!draggingRef.current) return;
      const t = e.touches[0];
      onDragMove(t.clientX, t.clientY);
    };
    const onTouchEnd = () => onDragEnd();

    wrapper.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    wrapper.addEventListener('touchstart', onTouchStart, { passive: false });
    document.addEventListener('touchmove', onTouchMove, { passive: true });
    document.addEventListener('touchend', onTouchEnd);
    return () => {
      wrapper.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      wrapper.removeEventListener('touchstart', onTouchStart);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onTouchEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLabelClick = (idx: 0 | 1 | 2) => {
    stopAutoPlay();
    seek(BOUNDS[idx]);
    pausedRef.current = false;
    startAutoPlay(BOUNDS[idx]);
  };

  const active = TABS[activeIdx];
  const beamRotation = progress * 360;

  return (
    <section className="w-full bg-[#f8f5ec] relative overflow-hidden" data-name="HeroV4">
      <div
        className="absolute inset-0 opacity-[0.5] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(9,37,17,0.08) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.15) 75%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.15) 75%, rgba(0,0,0,0) 100%)',
        }}
      />

      <div className="container mx-auto px-4 xl:px-0 relative border-l border-r border-[rgba(9,37,17,0.08)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[60px] items-center min-h-[calc(100vh-80px)] py-[60px] lg:py-[80px]">

          {/* LEFT */}
          <div className="flex flex-col gap-[24px] lg:pl-[48px]">
            <Typography className="[word-break:break-word] font-['Geist:Medium'] font-medium leading-[1.05] text-[#092511] text-[44px] sm:text-[56px] lg:text-[68px] tracking-[-1.5px]">
              Turn every  <br />{active.name} chat into revenue.
            </Typography>
            <Typography className="text-[#4a5a52] text-[17px] lg:text-[20px] leading-[1.5] max-w-[520px]">
              WeNext unifies WhatsApp, Instagram, and Facebook — replying, recommending, and closing orders like your best agent, 24/7.
            </Typography>
            <div className="flex flex-wrap gap-[14px] mt-[4px]">
              <div className="relative shrink-0">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
                  <a
                    href="https://api.whatsapp.com/send?phone=918977232350"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#06b349] content-stretch flex gap-[10px] items-center overflow-clip pl-[20px] pr-[15px] py-[15px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#05a043] active:scale-[0.98] transition-all duration-150"
                  >
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[1410px] left-[calc(50%+0.5px)] mix-blend-color-burn top-1/2 w-[2115px]">
                      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover opacity-25 pointer-events-none size-full" src={imgImage27} />
                    </div>
                    <Typography className="[word-break:break-word] font-['Geist'] font-medium leading-none relative shrink-0 text-[18px] text-white whitespace-nowrap">
                      Let's Talk
                    </Typography>
                    <div className="relative shrink-0 size-[20px] text-white flex items-center justify-center">
                      <svg className="size-[20px]" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                    </div>
                  </a>
                </div>
              </div>
              <a href="https://app.wenext.ai/book/wenext-platform-walkthrough" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-[#f8f5ec] active:scale-[0.98] transition-all duration-150 border border-[#dedace] border-solid relative rounded-[8px] shrink-0 cursor-pointer">
                <div className="flex gap-[10px] items-center overflow-clip pl-[21px] pr-[16px] py-[16px] relative rounded-[inherit]">
                  <Typography className="font-['Geist:Medium'] font-medium leading-none text-[#092511] text-[18px] whitespace-nowrap">Book a Demo</Typography>
                  <svg className="size-[20px] shrink-0 text-[#092511]" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3.75 10h12.5M11.25 15l5-5-5-5" /></svg>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT — ring stage */}
          <div ref={ringWrapperRef} className="relative w-full flex items-center justify-center lg:pr-[60px]" style={{ touchAction: 'none' }}>
            <div className="relative w-full max-w-[600px] aspect-square">

              <div
                ref={discRef}
                className="absolute left-1/2 top-1/2"
                style={{
                  width: '100%',
                  height: '100%',
                  transform: 'translate(-50%, -50%)',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: '0 0 0 1px rgba(6,179,73,0.3)',
                  cursor: draggingRef.current ? 'grabbing' : 'grab',
                  userSelect: 'none',
                }}
              >
                <div className="absolute inset-0" style={{ background: '#f8f5ec' }} />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'conic-gradient(from 0deg,' +
                      ' rgba(6,179,73,0) 0deg,' +
                      ' rgba(6,179,73,0.10) 60deg,' +
                      ' rgba(6,179,73,0.20) 120deg,' +
                      ' rgba(6,179,73,0.30) 180deg,' +
                      ' rgba(6,179,73,0.40) 240deg,' +
                      ' rgba(6,179,73,0.50) 300deg,' +
                      ' rgba(6,179,73,0.60) 360deg)',
                    transform: `rotate(${beamRotation}deg)`,
                    transformOrigin: '50% 50%',
                    willChange: 'transform',
                  }}
                />
              </div>

              <svg viewBox="0 0 674 674" className="absolute inset-0 w-full h-full" style={{ overflow: 'visible', pointerEvents: 'none' }}>
                <defs>
                  <path id="outerCW" d="M 27,337  A 310,310 0 0,1 647,337 A 310,310 0 0,1 27,337" fill="none" />
                </defs>

                {LABELS.map((l) => {
                  const isActive = activeIdx === l.idx;
                  return (
                    <text
                      key={l.idx}
                      className="hv4-label"
                      onClick={() => handleLabelClick(l.idx as 0 | 1 | 2)}
                      style={{
                        fontFamily: 'Georgia, "Source Serif Pro", serif',
                        fontStyle: 'italic',
                        fontSize: 34,
                        fontWeight: 400,
                        letterSpacing: '-0.005em',
                        pointerEvents: 'auto',
                        fill: isActive ? '#092511' : 'rgba(9,37,17,0.35)',
                        filter: 'none',
                        transition: draggingRef.current ? 'none' : 'fill 0.5s cubic-bezier(0.22,1,0.36,1), filter 0.5s cubic-bezier(0.22,1,0.36,1)',
                        cursor: 'pointer',
                      }}
                    >
                      <textPath href="#outerCW" startOffset={l.mainOff} textAnchor="middle">
                        {l.main}
                      </textPath>
                    </text>
                  );
                })}
              </svg>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[10]">
                <HeroV4Card tab={activeIdx} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
