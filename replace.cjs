const fs = require('fs');
const file = '/Users/nerellaajay/Desktop/wenex-website/src/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

const newContent = `<div className="bg-white border border-[#e2e8f0] border-solid flex-[1_0_0] relative rounded-[14px] w-full overflow-hidden flex flex-col font-['Geist:Regular']">
                              <div className="p-[20px] pb-[16px]">
                                <Typography className="text-[#08090a] text-[18px] font-['Geist:SemiBold'] font-semibold leading-none">Integrations</Typography>
                                <Typography className="text-[#60584c] text-[13px] mt-[6px]">Connect and manage your integrations with external services to streamline your workflow</Typography>
                                
                                <div className="flex items-center gap-[24px] mt-[24px] border-b border-[#f3efe3]">
                                  <div className="pb-[10px] border-b-2 border-[#06b349] -mb-px flex items-center gap-[6px]">
                                    <Typography className="text-[#06b349] text-[13px] font-['Geist:Medium'] font-medium">All</Typography>
                                    <span className="bg-[#e5f6e7] text-[#06824f] px-[6px] py-[2px] rounded-[4px] text-[10px] font-['Geist:SemiBold']">9</span>
                                  </div>
                                  <div className="pb-[10px] flex items-center gap-[6px] cursor-pointer">
                                    <Typography className="text-[#60584c] text-[13px] font-['Geist:Medium'] font-medium">Active</Typography>
                                    <span className="bg-[#f8f5ec] text-[#60584c] px-[6px] py-[2px] rounded-[4px] text-[10px] font-['Geist:Medium']">3</span>
                                  </div>
                                  <div className="pb-[10px] flex items-center gap-[6px] cursor-pointer">
                                    <Typography className="text-[#60584c] text-[13px] font-['Geist:Medium'] font-medium">Business Accounts</Typography>
                                    <span className="bg-[#f8f5ec] text-[#60584c] px-[6px] py-[2px] rounded-[4px] text-[10px] font-['Geist:Medium']">1</span>
                                  </div>
                                  <div className="pb-[10px] flex items-center gap-[6px] cursor-pointer">
                                    <Typography className="text-[#60584c] text-[13px] font-['Geist:Medium'] font-medium">Social Accounts</Typography>
                                    <span className="bg-[#f8f5ec] text-[#60584c] px-[6px] py-[2px] rounded-[4px] text-[10px] font-['Geist:Medium']">4</span>
                                  </div>
                                </div>
                                
                                <div className="flex items-center justify-between mt-[20px]">
                                  <div className="flex items-center gap-[8px] bg-[#f8f5ec] border border-[transparent] rounded-[8px] px-[12px] py-[9px] w-[280px]">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a0aec0" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                                    <Typography className="text-[#a0aec0] text-[13px]">Search Integrations...</Typography>
                                  </div>
                                  <div className="flex items-center gap-[6px] border border-[#e2e8f0] rounded-[8px] px-[12px] py-[9px] cursor-pointer">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4a5568" strokeWidth="2.5"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>
                                    <Typography className="text-[#4a5568] text-[13px] font-['Geist:Medium'] font-medium">Filter</Typography>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-2 gap-[16px] p-[20px] pt-[4px] content-start flex-1 bg-white">
                                {[
                                  { n: 'Shopify', desc: 'Connect your Shopify store to sync products and orders seamlessly', bg: '#008060', badge: 'E-commerce', bColor: '#e5f6e7', tColor: '#06824f', on: false, ic: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg> },
                                  { n: 'WooCommerce', desc: 'Connect your WooCommerce store to sync products and orders seamlessly', bg: '#7F54B3', badge: 'E-commerce', bColor: '#e5f6e7', tColor: '#06824f', on: true, ic: <Typography className="text-white text-[20px] font-['Geist:Bold'] font-bold leading-none">W</Typography> },
                                  { n: 'Custom API', desc: 'Connect your custom API to sync products and orders seamlessly', bg: '#F26722', badge: 'Custom', bColor: '#fff1e6', tColor: '#c2410c', on: false, ic: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg> },
                                  { n: 'Razorpay', desc: 'Connect Razorpay payment gateway to process payments and subscriptions', bg: '#0C4D9E', badge: 'Payments', bColor: '#e6f0fd', tColor: '#1a73e8', on: true, ic: <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M15 3 7 21h3l8-18z" opacity="0.9" /><path d="M11 8 5 21h3l4-9z" /></svg> },
                                  { n: 'PetPooja', desc: 'Connect your PetPooja POS to sync restaurant menus, manage orders and track delivery status', bg: '#F26722', badge: 'Industry', bColor: '#fff1e6', tColor: '#c2410c', on: true, ic: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7a2 2 0 0 0 2 2v11M5 2v9M9 2v9M7 2v9M17 2c-1.5 0-3 1.5-3 5 0 2.5 1 4 2 4v11" /></svg> },
                                  { n: 'Instagram', desc: 'Connect Instagram Business to publish posts, reels, and triage DMs and comments.', grad: true, badge: 'Social Accounts', bColor: '#fce8f3', tColor: '#d53f8c', on: false, ic: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5.5" /><circle cx="12" cy="12" r="4" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg> },
                                ].map((t) => (
                                  <div key={t.n} className="border border-[#e2e8f0] rounded-[12px] p-[16px] flex flex-col">
                                    <div className="flex items-start gap-[12px]">
                                      <div className="size-[42px] rounded-[10px] flex items-center justify-center shrink-0" style={{ background: t.grad ? INSTAGRAM_GRADIENT : t.bg }}>{t.ic}</div>
                                      <div>
                                        <Typography className="text-[#0b1f1a] text-[15px] font-['Geist:SemiBold'] font-semibold leading-none mb-[6px]">{t.n}</Typography>
                                        <Typography className="text-[#60584c] text-[12px] leading-[1.4] pr-[10px]">{t.desc}</Typography>
                                      </div>
                                    </div>
                                    <div className="mt-[16px] mb-[20px]">
                                      <span className="px-[8px] py-[3px] rounded-full text-[10px] font-['Geist:SemiBold']" style={{ backgroundColor: t.bColor, color: t.tColor }}>{t.badge}</span>
                                    </div>
                                    <div className="flex items-center justify-between mt-auto">
                                      {t.on
                                        ? <span className="flex items-center gap-[5px]"><span className="size-[6px] rounded-full bg-[#06b349]" /><Typography className="text-[#06824f] text-[11px] font-['Geist:Medium'] font-medium">Connected</Typography></span>
                                        : <Typography className="text-[#a0aec0] text-[11px] font-['Geist:Medium'] font-medium">Not connected</Typography>}
                                      <span className="flex items-center gap-[4px] cursor-pointer"><Typography className="text-[#06b349] text-[12px] font-['Geist:SemiBold'] font-semibold">{t.on ? 'Manage' : 'Set up'}</Typography><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#06b349" strokeWidth="3"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>`;

const startIdx = content.indexOf('<div className="bg-white border border-[rgba(11,31,26,0.1)] border-solid flex-[1_0_0] min-h-px relative rounded-[14px] w-full overflow-hidden flex flex-col">');
// Since the structure ends exactly before the closing tags of the container (</div></div></div></div>)
// Let's locate the ending line manually by splitting by lines
const lines = content.split('\n');
const startLineIndex = lines.findIndex(l => l.includes('<div className="bg-white border border-[rgba(11,31,26,0.1)] border-solid flex-[1_0_0] min-h-px relative rounded-[14px] w-full overflow-hidden flex flex-col">'));
let endLineIndex = -1;
for (let i = startLineIndex; i < lines.length; i++) {
    // we want to match line 2025: `                            </div>` right before `                          </div>`
    // Actually from view_file, line 2025 is `                            </div>`
    if (lines[i].includes('                            </div>') && lines[i+1].includes('                          </div>')) {
        endLineIndex = i;
        break;
    }
}

if (startLineIndex !== -1 && endLineIndex !== -1) {
    lines.splice(startLineIndex, endLineIndex - startLineIndex + 1, newContent);
    fs.writeFileSync(file, lines.join('\n'));
    console.log('Success');
} else {
    console.log('Could not find start or end', startLineIndex, endLineIndex);
}
