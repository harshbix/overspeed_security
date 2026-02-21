const fs = require('fs');

const cssPath = 'd:/projects/overspeed_security/public/assets/css/style.css';
let css = fs.readFileSync(cssPath, 'utf8');

// Color mapping based on index.css tokens
const mappings = [
    { p: /#37517e/gi, r: 'var(--color-text-primary)' },
    { p: /#47b2e4/gi, r: 'var(--color-accent)' },
    { p: /#209dd8/gi, r: 'var(--color-accent-hover)' },
    { p: /#f3f5fa/gi, r: 'var(--color-bg)' },
    { p: /#848484/gi, r: 'var(--color-text-secondary)' },
    { p: /color:\s*#444444;/gi, r: 'color: var(--color-text-primary);' },
    { p: /background:\s*rgba\(40,\s*58,\s*90,\s*0\.9\);/gi, r: 'background: rgba(var(--color-text-primary-rgb), 0.9); backdrop-filter: blur(10px);' },
];

mappings.forEach(m => {
    css = css.replace(m.p, m.r);
});

// Update fonts to use tokens/system
css = css.replace(/font-family:\s*"Jost",\s*sans-serif;/gi, 'font-family: var(--font-heading, "Jost"), system-ui, sans-serif;');
css = css.replace(/font-family:\s*"Open Sans",\s*sans-serif;/gi, 'font-family: var(--font-body, "Open Sans"), system-ui, sans-serif;');

// Modernize transitions
css = css.replace(/transition:\s*all\s*0\.3s/gi, 'transition: all var(--motion-normal) var(--easing-standard)');
css = css.replace(/transition:\s*0\.3s/gi, 'transition: all var(--motion-normal) var(--easing-standard)');

fs.writeFileSync(cssPath, css);
console.log('CSS transformed with design tokens!');
