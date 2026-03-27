// Script to create optimized favicon sizes from favicon.png
const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');

async function createFavicons() {
    try {
        // Try with sharp first
        const sharp = require('sharp');
        
        // Create 48x48 PNG (Google's recommended minimum)
        await sharp('src/favicon.png')
            .resize(48, 48)
            .png({ compressionLevel: 9 })
            .toFile('src/favicon-48.png');
        
        // Create 32x32 PNG  
        await sharp('src/favicon.png')
            .resize(32, 32)
            .png({ compressionLevel: 9 })
            .toFile('src/favicon-32.png');
        
        // Replace the original with optimized version
        await sharp('src/favicon.png')
            .resize(192, 192)
            .png({ compressionLevel: 9 })
            .toFile('src/favicon-optimized.png');
        
        console.log('Favicons created successfully!');
    } catch (e) {
        console.error('sharp not available, try: npm install sharp');
        console.error(e.message);
    }
}

createFavicons();
