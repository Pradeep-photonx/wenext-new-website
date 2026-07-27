const { Project, SyntaxKind } = require('ts-morph');
const fs = require('fs');

const originalHomeContent = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const project = new Project();
const sourceFile = project.addSourceFileAtPath('src/pages/Home.tsx');

let heroChild = null;
const jsxElements = sourceFile.getDescendantsOfKind(SyntaxKind.JsxElement);
for (const element of jsxElements) {
  const openingElement = element.getOpeningElement();
  const attributes = openingElement.getAttributes();
  for (const attr of attributes) {
    if (attr.getKind() === SyntaxKind.JsxAttribute) {
      if (attr.getNameNode().getText() === 'data-node-id') {
        const val = attr.getInitializer();
        if (val && val.getText() === '"467:971"') {
          const children = element.getJsxChildren();
          heroChild = children.find(c => c.getKind() === SyntaxKind.JsxElement);
          break;
        }
      }
    }
  }
  if (heroChild) break;
}

if (heroChild) {
  const heroText = heroChild.getText();
  
  // Create HeroV1.tsx
  let heroV1Content = originalHomeContent.replace("export default function Home", "export default function HeroV1");
  const returnPattern = /return \(\s*<div className="bg-\[\#f8f5ec\].*?\);\s*}/s;
  // USE A FUNCTION TO AVOID $ REPLACEMENT GOTCHAS
  heroV1Content = heroV1Content.replace(returnPattern, () => "return (\n    <>\n      " + heroText + "\n    </>\n  );\n}");
  fs.writeFileSync('src/components/HeroV1.tsx', heroV1Content);

  // Update Home.tsx
  heroChild.replaceWithText('<HeroV1 />');
  
  // Remove unused imports in Home.tsx if needed, but not strictly required
  // Let's add HeroV1 import
  sourceFile.addImportDeclaration({
    defaultImport: 'HeroV1',
    moduleSpecifier: '../components/HeroV1'
  });
  sourceFile.saveSync();
  console.log("Successfully extracted HeroV1");
} else {
  console.log("Could not find hero child");
}
