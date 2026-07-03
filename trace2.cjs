const fs = require('fs');
let content = fs.readFileSync('/Users/nerellaajay/Desktop/wenex-website/src/pages/Home.tsx', 'utf8');

// Strip JSX comments
content = content.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');

const lines = content.split('\n');
let balance = 0;
let started = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // We need to count <div ...> and </div> accurately.
  // Note: `<div/>` is self-closing. `<div ... />` is self-closing.
  let openCount = 0;
  let closeCount = 0;
  
  // match all <div or </div
  const tags = line.match(/<\/?div[^>]*>/g) || [];
  for (const tag of tags) {
     if (tag.startsWith('</div')) {
         closeCount++;
     } else if (tag.startsWith('<div')) {
         if (!tag.endsWith('/>')) {
             openCount++;
         }
     }
  }
  
  if (line.includes('<div className="bg-[#f8f5ec] relative size-full"')) {
     started = true;
  }
  
  if (started) {
     balance += openCount;
     balance -= closeCount;
     
     if (balance === 0 && i > 250) {
        console.log("Root element closed at line: " + (i + 1));
        console.log(line);
        // print next 5 lines
        for(let j=1; j<=5; j++) console.log(lines[i+j]);
        break;
     }
  }
}
