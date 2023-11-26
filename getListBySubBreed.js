const apiURL = 'https://dog.ceo/api/breed/hound/list';

// Make a GET request to the API
fetch(apiURL)
  .then(response => {
    // Check if the request was successful (status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse the JSON response
    return response.json();
  })
  .then(data => {
    // Extract the list of sub-breeds
    const subBreeds = data.message;

    // Print the list of sub-breeds
    subBreeds.forEach(subBreed => {
      console.log(subBreed);
    });
  })
  .catch(error => {
    // Print an error message if the request was not successful
    console.error(`Error: Unable to fetch data. ${error.message}`);
  });
