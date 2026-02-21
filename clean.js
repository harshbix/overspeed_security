const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        if (fs.statSync(file).isDirectory()) results = results.concat(walk(file));
        else if (file.endsWith('.jsx')) results.push(file);
    });
    return results;
}

walk('d:/projects/overspeed_security/src').forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    const initial = content;
    content = content.replace(/\s*data-aos="[^"]*"/g, '');
    content = content.replace(/\s*data-aos-delay="[^"]*"/g, '');
    // Also fix up where import useScrollReveal was injected but the rest failed
    if (initial !== content) fs.writeFileSync(f, content);
});
console.log("Done scrubbing");
