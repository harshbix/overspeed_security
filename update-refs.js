import fs from 'fs/promises';
import path from 'path';

const srcDir = path.join(process.cwd(), 'src');

async function updateImageRefs(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            await updateImageRefs(fullPath);
        } else if (entry.isFile() && /\.(jsx|js|css)$/i.test(entry.name)) {
            try {
                let content = await fs.readFile(fullPath, 'utf8');

                // Replace .png and .jpg with .webp, except for favicon/apple-touch-icon if they are in index.html (handled outside)
                let newContent = content.replace(/\.png/gi, '.webp').replace(/\.jpg/gi, '.webp').replace(/\.jpeg/gi, '.webp');

                if (content !== newContent) {
                    await fs.writeFile(fullPath, newContent, 'utf8');
                    console.log(`Updated paths in: ${fullPath}`);
                }
            } catch (err) {
                console.error(`Error updating ${entry.name}:`, err);
            }
        }
    }
}

async function updateHtml() {
    const htmlPath = path.join(process.cwd(), 'index.html');
    let content = await fs.readFile(htmlPath, 'utf8');

    // Dont replace favicon
    // let newContent = content.replace(/\.png/gi, '.webp').replace(/\.jpg/gi, '.webp').replace(/\.jpeg/gi, '.webp');
    // We only update regular files, leave index.html alone for now
}


async function main() {
    console.log('Starting image reference updates...');
    await updateImageRefs(srcDir);
    console.log('Image reference update complete.');
}

main();
