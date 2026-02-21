import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const imgDir = path.join(process.cwd(), 'public', 'assets', 'img');

async function optimizeImages(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            await optimizeImages(fullPath);
        } else if (entry.isFile() && /\.(png|jpe?g)$/i.test(entry.name)) {
            const ext = path.extname(entry.name);

            // Skip favicon and apple-touch-icon, skills, why-us or similar small icons if needed, 
            // but let's convert hero-img, cta-bg, clients, team, etc.
            // We will create a .webp version for everything png/jpg

            const webpPath = fullPath.replace(new RegExp(`${ext}$`, 'i'), '.webp');

            try {
                await sharp(fullPath)
                    .webp({ quality: 80 })
                    .toFile(webpPath);
                console.log(`Optimized: ${entry.name} -> ${path.basename(webpPath)}`);
            } catch (err) {
                console.error(`Error optimizing ${entry.name}:`, err);
            }
        }
    }
}

async function main() {
    console.log('Starting image optimization...');
    await optimizeImages(imgDir);
    console.log('Image optimization complete.');
}

main();
