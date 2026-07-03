const fs = require('fs');
const content = fs.readFileSync('/Users/nerellaajay/Desktop/wenex-website/src/pages/Home.tsx', 'utf8');
const lines = content.split('\n');

let balance = 0;
let earlyCloseLine = -1;

for (let i = 0; i < lines.length; i++) {
  const openCount = (lines[i].match(/<div(\s|>)/g) || []).length;
  // wait, what about self-closing divs? <div />
  const selfCloseCount = (lines[i].match(/<div[^>]*\/>/g) || []).length;
  const actualOpen = openCount - selfCloseCount;
  
  const closeCount = (lines[i].match(/<\/div>/g) || []).length;
  
  balance += actualOpen;
  balance -= closeCount;
  
  // Actually, we need to trace the top-level return wrapper.
  // The root div is around line 212.
  if (i >= 211 && balance <= 0 && earlyCloseLine === -1) {
     // Because return ( <div ...> ) starts at 212.
     // Before 212, balance is 0. At 212, it becomes 1.
     // If it ever drops to 0 after 212 (before the very end), that's our early close.
  }
}

let runningBalance = 0;
for (let i = 211; i < lines.length; i++) {
  const openCount = (lines[i].match(/<div(\s|>)/g) || []).length;
  const selfCloseCount = (lines[i].match(/<div[^>]*\/>/g) || []).length;
  const closeCount = (lines[i].match(/<\/div>/g) || []).length;
  
  runningBalance += (openCount - selfCloseCount);
  runningBalance -= closeCount;
  
  if (runningBalance <= 0) {
     console.log("Root div closes early at line: " + (i + 1));
     break;
  }
}

