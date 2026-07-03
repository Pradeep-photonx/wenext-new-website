const fs = require('fs');
const file = '/Users/nerellaajay/Desktop/wenex-website/src/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

const lines = content.split('\n');

// We need to locate the boundaries.
// Col 2 starts at:
// <div className="bg-white border-[#e0dac6] border-r border-solid content-stretch flex w-1/3 shrink-0 flex-col h-[906.953px] items-start min-h-[280px] overflow-clip pr-px relative" data-node-id="467:1505" data-name="Container">
const col2Start = lines.findIndex(l => l.includes('data-node-id="467:1505"'));

// Ads Management starts at the first child of col2
const adsStart = col2Start + 1;
// Seamless Integrations starts at:
// <div className="bg-[#f3efe3] flex-[1_0_0] min-h-[280px] relative w-full" data-name="Container">
const seamlessStart = lines.findIndex(l => l.includes('Seamless Integrations')) - 5; 
// Actually wait, let's find the exact lines
