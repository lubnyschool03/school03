// Script to create optimized favicon sizes from favicon.png
const sharp = require('sharp');
const path = require('path');

async function createFavicons() {
    const source = path.join(__dirname, 'src', 'favicon.png');
    
    try {
        // Create 48x48 PNG (Google's recommended minimum for search results)
        await sharp(source)
            .resize(48, 48)
            .png({ compressionLevel: 9 })
            .toFile(path.join(__dirname, 'src', 'favicon-48x48.png'));
        console.log('✅ favicon-48x48.png created');

        // Create 32x32 PNG
        await sharp(source)
            .resize(32, 32)
            .png({ compressionLevel: 9 })
            .toFile(path.join(__dirname, 'src', 'favicon-32x32.png'));
        console.log('✅ favicon-32x32.png created');

        // Create 16x16 PNG
        await sharp(source)
            .resize(16, 16)
            .png({ compressionLevel: 9 })
            .toFile(path.join(__dirname, 'src', 'favicon-16x16.png'));
        console.log('✅ favicon-16x16.png created');

        // Create 192x192 PNG (for Android/PWA)
        await sharp(source)
            .resize(192, 192)
            .png({ compressionLevel: 9 })
            .toFile(path.join(__dirname, 'src', 'favicon-192x192.png'));
        console.log('✅ favicon-192x192.png created');

        // Create 180x180 PNG (Apple Touch Icon)
        await sharp(source)
            .resize(180, 180)
            .png({ compressionLevel: 9 })
            .toFile(path.join(__dirname, 'src', 'apple-touch-icon.png'));
        console.log('✅ apple-touch-icon.png created');

        // Create 512x512 PNG (for PWA manifest)
        await sharp(source)
            .resize(512, 512)
            .png({ compressionLevel: 9 })
            .toFile(path.join(__dirname, 'src', 'favicon-512x512.png'));
        console.log('✅ favicon-512x512.png created');

        console.log('\n🎉 All favicons created successfully!');
    } catch (e) {
        console.error('❌ Error:', e.message);
        if (e.message.includes('Cannot find module')) {
            console.error('Run: npm install sharp');
        }
    }
}

createFavicons();
