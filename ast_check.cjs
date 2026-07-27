const { Project, SyntaxKind } = require('ts-morph');
const project = new Project();
const sourceFile = project.addSourceFileAtPath('src/pages/Home.tsx');

const jsxElements = sourceFile.getDescendantsOfKind(SyntaxKind.JsxElement);
for (const element of jsxElements) {
  const openingElement = element.getOpeningElement();
  const attributes = openingElement.getAttributes();
  for (const attr of attributes) {
    if (attr.getKind() === SyntaxKind.JsxAttribute) {
      if (attr.getNameNode().getText() === 'data-node-id') {
        const val = attr.getInitializer();
        if (val && val.getText() === '"467:971"') {
          console.log("Found 467:971");
          const children = element.getJsxChildren();
          console.log("Number of children:", children.length);
          for (let i = 0; i < children.length; i++) {
             let c = children[i];
             if (c.getKind() === SyntaxKind.JsxElement || c.getKind() === SyntaxKind.JsxSelfClosingElement) {
                console.log(`Child ${i}:`, c.getText().split('\n')[0].substring(0, 80));
             }
          }
        }
      }
    }
  }
}
