// downloadDogImage.js

const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Dog API endpoint
const apiUrl = 'https://dog.ceo/api/breeds/image/random';

async function downloadDogImage() {
  try {
    // Make a GET request to the Dog API
    const response = await axios.get(apiUrl);

    // Extract the image URL from the response
    const imageUrl = response.data.message;

    // Create a unique filename based on the current timestamp
    const timestamp = new Date().getTime();
    const filename = `dog_image_${timestamp}.jpg`;

    // Create a 'downloads' folder in the root directory if it doesn't exist
    const downloadsFolder = path.join(__dirname, 'downloads');
    if (!fs.existsSync(downloadsFolder)) {
      fs.mkdirSync(downloadsFolder);
    }

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

    console.log(`Image downloaded successfully: ${filename}`);
  } catch (error) {
    console.error('Error downloading image:', error.message);
  }
}

// Run the downloadDogImage function
downloadDogImage();
