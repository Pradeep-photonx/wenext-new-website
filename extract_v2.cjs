const { Project, SyntaxKind } = require('ts-morph');
const fs = require('fs');

const project = new Project();
// Create HeroV1.tsx by copying Home.tsx
fs.copyFileSync('src/pages/Home.tsx', 'src/components/HeroV1.tsx');

const sourceFileHero = project.addSourceFileAtPath('src/components/HeroV1.tsx');

// Rename function to HeroV1
const func = sourceFileHero.getFunction('Home');
func.rename('HeroV1');

// Find the hero child
let heroChildHero = null;
const jsxElementsHero = sourceFileHero.getDescendantsOfKind(SyntaxKind.JsxElement);
for (const element of jsxElementsHero) {
  const openingElement = element.getOpeningElement();
  const attributes = openingElement.getAttributes();
  for (const attr of attributes) {
    if (attr.getKind() === SyntaxKind.JsxAttribute) {
      if (attr.getNameNode().getText() === 'data-node-id') {
        const val = attr.getInitializer();
        if (val && val.getText() === '"467:971"') {
          const children = element.getJsxChildren();
          heroChildHero = children.find(c => c.getKind() === SyntaxKind.JsxElement);
          break;
        }
      }
    }
  }
  if (heroChildHero) break;
}

if (heroChildHero) {
  // Replace the entire return statement body with heroChildHero
  const returnStatements = func.getDescendantsOfKind(SyntaxKind.ReturnStatement);
  if (returnStatements.length > 0) {
      const retStmt = returnStatements[returnStatements.length - 1]; // The main one
      retStmt.replaceWithText("return (<>\n" + heroChildHero.getText() + "\n</>);");
  }
  sourceFileHero.saveSync();
}

// Now do the same for Home.tsx to replace heroChild with <HeroV1 />
const sourceFileHome = project.addSourceFileAtPath('src/pages/Home.tsx');
let heroChildHome = null;
const jsxElementsHome = sourceFileHome.getDescendantsOfKind(SyntaxKind.JsxElement);
for (const element of jsxElementsHome) {
  const openingElement = element.getOpeningElement();
  const attributes = openingElement.getAttributes();
  for (const attr of attributes) {
    if (attr.getKind() === SyntaxKind.JsxAttribute) {
      if (attr.getNameNode().getText() === 'data-node-id') {
        const val = attr.getInitializer();
        if (val && val.getText() === '"467:971"') {
          const children = element.getJsxChildren();
          heroChildHome = children.find(c => c.getKind() === SyntaxKind.JsxElement);
          break;
        }
      }
    }
  }
  if (heroChildHome) break;
}

if (heroChildHome) {
  heroChildHome.replaceWithText('<HeroV1 />');
  sourceFileHome.addImportDeclaration({
    defaultImport: 'HeroV1',
    moduleSpecifier: '../components/HeroV1'
  });
  sourceFileHome.saveSync();
  console.log("Success!");
}
