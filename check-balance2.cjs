const fs = require('fs');
let content = fs.readFileSync('/Users/nerellaajay/Desktop/wenex-website/src/pages/Home.tsx', 'utf8');

// Strip out JSX comments { /* ... */ } before counting to be safe
content = content.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');

const lines = content.split('\n');

let runningBalance = 0;
for (let i = 211; i < lines.length; i++) {
  const openCount = (lines[i].match(/<div(\s|>)/g) || []).length;
  const selfCloseCount = (lines[i].match(/<div[^>]*\/>/g) || []).length;
  const closeCount = (lines[i].match(/<\/div>/g) || []).length;
  
  runningBalance += (openCount - selfCloseCount);
  runningBalance -= closeCount;
  
  if (runningBalance <= 0) {
     console.log("Root div closes early at line: " + (i + 1));
     console.log("Line content: " + lines[i]);
     break;
  }
}
