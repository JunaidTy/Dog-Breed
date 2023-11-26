// downloadRandomAfghanHoundImage.js

const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Dog API endpoint for a random Afghan Hound image
const apiUrl = 'https://dog.ceo/api/breed/hound/afghan/images/random';

async function downloadRandomAfghanHoundImage() {
  try {
    // Make a GET request to the Dog API
    const response = await axios.get(apiUrl);

    // Extract the image URL from the response
    const imageUrl = response.data.message;

    // Create a 'downloads' folder in the root directory if it doesn't exist
    const downloadsFolder = path.join(__dirname, 'downloads/SingleRandomImageFromSubBreed');
    if (!fs.existsSync(downloadsFolder)) {
      fs.mkdirSync(downloadsFolder);
    }

    // Create a unique filename based on the current timestamp
    const timestamp = new Date().getTime();
    const filename = `random_afghan_hound_image_${timestamp}.jpg`;

    // Download the image and save it to the 'downloads' folder
    const imageResponse = await axios.get(imageUrl, { responseType: 'stream' });
    const imagePath = path.join(downloadsFolder, filename);
    const imageStream = fs.createWriteStream(imagePath);
    imageResponse.data.pipe(imageStream);

    // Wait for the image to be fully downloaded
    await new Promise((resolve, reject) => {
      imageStream.on('finish', resolve);
      imageStream.on('error', reject);
    });

    console.log(`Random Afghan Hound image downloaded successfully: ${filename}`);
  } catch (error) {
    console.error('Error downloading random Afghan Hound image:', error.message);
  }
}

// Run the downloadRandomAfghanHoundImage function
downloadRandomAfghanHoundImage();
