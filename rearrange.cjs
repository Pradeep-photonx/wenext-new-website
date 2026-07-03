const fs = require('fs');
const file = '/Users/nerellaajay/Desktop/wenex-website/src/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');
const lines = content.split('\n');

// I will extract the blocks manually by line indices since I know them.
// Note: Line numbers from view_file are 1-indexed, array is 0-indexed.
// Col 2 starts at 1869 (index 1868)
// Col 2 ends at 1991 (index 1990)
// Col 3 starts at 1992 (index 1991)
// Col 3 ends at 2062 (index 2061)

// Ads Management block: 1870 to 1942 (indices 1869 to 1941)
const adsBlock = lines.slice(1869, 1942).join('\n');

// Seamless Integrations block: 1943 to 1990 (indices 1942 to 1989)
const seamlessBlock = lines.slice(1942, 1990).join('\n');

// Smart Scheduling block: 1994 to 2060 (Wait, 1993 to 2061 actually is the h-full flex block)
// Let's get the exact Smart Scheduling: 1994 to 2023 (indices 1993 to 2022)
const smartSchedBlock = lines.slice(1993, 2023).join('\n');

// Create the new structure for Col 2 and Col 3 combined.
// We want w-2/3 container instead of two w-1/3 columns.
const newStructure = `                    <div className="flex w-2/3 shrink-0 flex-col items-start self-stretch">
                      <div className="flex w-full flex-[1_0_0] relative">
                        <div className="bg-white border-[#e0dac6] border-r border-solid content-stretch flex w-1/2 shrink-0 flex-col items-start relative">
${adsBlock}
                        </div>
                        <div className="bg-white content-stretch flex w-1/2 shrink-0 flex-col items-start relative">
${smartSchedBlock}
                        </div>
                      </div>
                      <div className="flex w-full flex-[1_0_0] relative">
${seamlessBlock}
                      </div>
                    </div>`;

// Replace lines 1869 to 2062 (indices 1868 to 2061) with newStructure
lines.splice(1868, 2061 - 1868 + 1, newStructure);

fs.writeFileSync(file, lines.join('\n'));
console.log("Success");
