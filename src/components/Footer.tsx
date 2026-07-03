import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
const imgVector4 = "/figma/imgVector4.svg";
const imgImageWenext = "/figma/imgImageWenext.svg";
const imgImage27 = "/figma/imgImage27.png";
const imgIcon1 = "/figma/imgIcon1.svg";
const imgWenextLarge = "/figma/imgWenextLarge.svg";

export default function Footer() {
  return (
    <div className="border-[#e0dac6] border-b border-l border-r border-solid content-stretch flex flex-col items-start px-[75px] relative shrink-0 w-full" data-node-id="467:1964">
      <div className="border-[#cec9b8] border-b border-l border-r border-solid h-[64px] overflow-clip relative shrink-0 w-full" data-node-id="467:1965">
        {Array.from({ length: 169 }).map((_, idx) => (
          <div key={idx} className="absolute size-[93px] top-[-28.5px]" style={{ left: `${-60.5 + idx * 10}px` }}>
            {/* <div className="absolute inset-[-0.38%]">
              <img alt="" className="block max-w-none size-full" src={imgVector4} />
            </div> */}
          </div>
        ))}
      </div>
      <div className="border-[#e0dac6] border-l border-r border-solid content-stretch flex flex-col items-stretch relative shrink-0 w-full" data-node-id="467:2135">
        <div className="flex items-start justify-between gap-[60px] px-[100px] pt-[60px] pb-[50px] border-b border-[#e0dac6]">
          <div className="flex flex-col gap-[28px] items-start">
            <div className="h-[48px] w-[259px]">
              <img alt="wenext" className="block w-full h-full object-contain object-left" src={imgImageWenext} />
            </div>
            <div className="flex gap-[12px] items-center">
              <a href="#" aria-label="LinkedIn" className="size-[48px] border border-[#e0dac6] flex items-center justify-center bg-white hover:bg-[#f8f5ec] transition-colors duration-150 cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#06b349"><path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" /></svg>
              </a>
              <a href="#" aria-label="Facebook" className="size-[48px] border border-[#e0dac6] flex items-center justify-center bg-white hover:bg-[#f8f5ec] transition-colors duration-150 cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#06b349"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href="#" aria-label="YouTube" className="size-[48px] border border-[#e0dac6] flex items-center justify-center bg-white hover:bg-[#f8f5ec] transition-colors duration-150 cursor-pointer">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#06b349"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
              <a href="#" aria-label="X" className="size-[48px] border border-[#e0dac6] flex items-center justify-center bg-white hover:bg-[#f8f5ec] transition-colors duration-150 cursor-pointer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#06b349"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-[26px] items-end max-w-[640px]">
            <Typography className="font-['Geist:Regular'] font-normal leading-[1.4] text-[#6b6354] text-[19px] text-right">
              WhatsApp, Instagram DMs, Facebook comments and web chat — all in one screen. Assign to teammates, tag, snooze, never lose a lead again.
            </Typography>
            <div className="flex gap-[16px] items-start">
              <a href="#" className="bg-[#06b349] hover:bg-[#05a043] active:scale-[0.98] transition-all duration-150 relative rounded-[8px] shrink-0 cursor-pointer">
                <div className="flex gap-[11.992px] items-center overflow-clip pl-[20px] pr-[15px] py-[15px] relative rounded-[inherit]">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[1410px] left-[calc(50%+0.5px)] mix-blend-color-burn top-1/2 w-[2115px]">
                    <img alt="" className="absolute inset-0 max-w-none object-cover opacity-25 pointer-events-none size-full" src={imgImage27} />
                  </div>
                  <Typography className="font-['Geist:Medium'] font-medium leading-none relative shrink-0 text-[18px] text-white whitespace-nowrap">Book a demo</Typography>
                  <div className="relative shrink-0 size-[20px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} /></div>
                </div>
              </a>
              <a href="#" className="bg-white hover:bg-[#f8f5ec] active:scale-[0.98] transition-all duration-150 border border-[#dedace] border-solid relative rounded-[8px] shrink-0 cursor-pointer">
                <div className="flex items-center overflow-clip pl-[21px] pr-[16px] py-[16px] relative rounded-[inherit]">
                  <Typography className="font-['Geist:Medium'] font-medium leading-none text-[#092511] text-[18px] whitespace-nowrap">Get Started</Typography>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="relative flex items-start gap-[60px] px-[100px] py-[60px] overflow-hidden">
          <div className="flex-1 relative flex items-start">
            <img src={imgWenextLarge} alt="" className="block h-auto w-full max-w-[600px] pointer-events-none select-none" />
          </div>
          <div className="flex gap-[80px] items-start shrink-0">
            <div className="flex flex-col gap-[16px]">
              <Typography className="font-['Geist:Medium'] font-medium text-[#6b6354] text-[16px]">Industries</Typography>
              <div className="flex flex-col gap-[8px]">
                <a href="#" className="font-['Geist:Regular'] text-[#08090a] text-[16px] underline hover:opacity-60 transition-opacity">D2C</a>
                <a href="#" className="font-['Geist:Regular'] text-[#08090a] text-[16px] underline hover:opacity-60 transition-opacity">Hospitality</a>
                <a href="#" className="font-['Geist:Regular'] text-[#08090a] text-[16px] underline hover:opacity-60 transition-opacity">Health Care</a>
                <a href="#" className="font-['Geist:Regular'] text-[#08090a] text-[16px] underline hover:opacity-60 transition-opacity">Real Estate</a>
              </div>
            </div>
            <div className="flex flex-col gap-[16px]">
              <Typography className="font-['Geist:Medium'] font-medium text-[#6b6354] text-[16px]">Industries</Typography>
              <div className="flex flex-col gap-[8px]">
                <a href="#" className="font-['Geist:Regular'] text-[#08090a] text-[16px] underline hover:opacity-60 transition-opacity">D2C</a>
                <a href="#" className="font-['Geist:Regular'] text-[#08090a] text-[16px] underline hover:opacity-60 transition-opacity">Hospitality</a>
                <a href="#" className="font-['Geist:Regular'] text-[#08090a] text-[16px] underline hover:opacity-60 transition-opacity">Health Care</a>
                <a href="#" className="font-['Geist:Regular'] text-[#08090a] text-[16px] underline hover:opacity-60 transition-opacity">Real Estate</a>
              </div>
            </div>
            <div className="flex flex-col gap-[16px]">
              <Typography className="font-['Geist:Medium'] font-medium text-[#6b6354] text-[16px]">Company</Typography>
              <div className="flex flex-col gap-[8px]">
                <Link to="/about" className="font-['Geist:Regular'] text-[#08090a] text-[16px] underline hover:opacity-60 transition-opacity">About</Link>
                <Link to="/features" className="font-['Geist:Regular'] text-[#08090a] text-[16px] underline hover:opacity-60 transition-opacity">Features</Link>
                <a href="#" className="font-['Geist:Regular'] text-[#08090a] text-[16px] underline hover:opacity-60 transition-opacity">Blogs</a>
                <Link to="/pricing" className="font-['Geist:Regular'] text-[#08090a] text-[16px] underline hover:opacity-60 transition-opacity">Pricing</Link>
              </div>
            </div>
            <div className="flex flex-col gap-[16px]">
              <Typography className="font-['Geist:Medium'] font-medium text-[#6b6354] text-[16px]">Legal</Typography>
              <div className="flex flex-col gap-[8px]">
                <a href="#" className="font-['Geist:Regular'] text-[#08090a] text-[16px] underline hover:opacity-60 transition-opacity">Terms and Conditions</a>
                <a href="#" className="font-['Geist:Regular'] text-[#08090a] text-[16px] underline hover:opacity-60 transition-opacity">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
