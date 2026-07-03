const fs = require('fs');
let content = fs.readFileSync('/Users/nerellaajay/Desktop/wenex-website/src/pages/Home.tsx', 'utf8');

// Strip out JSX comments { /* ... */ } before counting to be safe
content = content.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');

const lines = content.split('\n');
let balance = 0;
let started = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const openCount = (line.match(/<div(\s|>)/g) || []).length;
  const selfCloseCount = (line.match(/<div[^>]*\/>/g) || []).length;
  const closeCount = (line.match(/<\/div>/g) || []).length;
  
  if (line.includes('<div className="bg-[#f8f5ec] relative size-full"')) {
     started = true;
  }
  
  if (started) {
     balance += (openCount - selfCloseCount);
     balance -= closeCount;
     
     if (balance < 0 || (balance === 0 && i > 250)) {
       console.log(`Balance hit ${balance} at line ${i + 1}`);
       console.log(`Line content: ${line}`);
       for (let j = Math.max(0, i - 10); j <= i; j++) {
          console.log(`${j + 1}: ${lines[j]}`);
       }
       break;
     }
  }
}
