// downloadRandomHoundImages.js

const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Dog API endpoint for three random hound breed images
const apiUrl = 'https://dog.ceo/api/breed/hound/images/random/3';

async function downloadRandomHoundImages() {
  try {
    // Make a GET request to the Dog API
    const response = await axios.get(apiUrl);

    // Extract the array of image URLs from the response
    const imageUrls = response.data.message;

    // Create a 'downloads' folder in the root directory if it doesn't exist
    const downloadsFolder = path.join(__dirname, 'downloads/hound/multiple');
    if (!fs.existsSync(downloadsFolder)) {
      fs.mkdirSync(downloadsFolder);
    }

    // Download each image and save it to the 'downloads' folder
    for (let i = 0; i < imageUrls.length; i++) {
      const imageUrl = imageUrls[i];
      const timestamp = new Date().getTime();
      const filename = `random_hound_image_${timestamp}_${i}.jpg`;

      const imageResponse = await axios.get(imageUrl, { responseType: 'stream' });
      const imagePath = path.join(downloadsFolder, filename);
      const imageStream = fs.createWriteStream(imagePath);
      imageResponse.data.pipe(imageStream);

      // Wait for the image to be fully downloaded
      await new Promise((resolve, reject) => {
        imageStream.on('finish', resolve);
        imageStream.on('error', reject);
      });

      console.log(`Random hound image ${i + 1} downloaded successfully: ${filename}`);
    }

    console.log('All three random hound images downloaded successfully.');
  } catch (error) {
    console.error('Error downloading random hound images:', error.message);
  }
}

// Run the downloadRandomHoundImages function
downloadRandomHoundImages();
