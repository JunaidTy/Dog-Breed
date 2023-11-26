# Dog-Breed
**Task 1**   
**Initialize a Node.js project:**    
Open a terminal, navigate to your project folder, and run:    
npm init -y  

In this project from .csv file extract the Breeds provided. Normalize the breed names by removing all white spacing and making them all lowercase.  

To achieve this task in JavaScript, you can use the Node.js runtime along with the **fs** (File System) and **csv-parser** modules. Here's an example script that reads a CSV file, extracts and normalizes the Breed column, and eliminates duplicates:  

**Firstly, install the required modules:**  
npm install fs csv-parser  

**To run the script, use the following command:**  
node processCSV.js  

This script uses the csv-parser module to parse the CSV file, extracts and normalizes the Breed column, and then eliminates duplicates using a Set. The final unique, normalized breed names are printed to the console.  

**Task 2**    

**Install required packages:**  
Install the axios package for making HTTP requests and the fs package for working with the file system.  
npm install axios  


**To run the script, use the following command in root of the project:** 

**LIST ALL BREEDS**    
node getListAllBreeds.js    

**DISPLAY SINGLE RANDOM IMAGE FROM ALL DOGS COLLECTION**  
node downloadRandomImage.js  

**RANDOM IMAGE FROM A BREED COLLECTION**  
node downloadRandomImageByBreed.js  

**MULTIPLE IMAGES FROM A BREED COLLECTION**    
node downloadMultipleImageFromBreed.js  

**LIST ALL SUB-BREEDS**    
node getListBySubBreed.js  

**SINGLE RANDOM IMAGE FROM A SUB BREED COLLECTION**  
node getSingleRandomImageFromASubBreedCollection.js  

**MULTIPLE IMAGES FROM A SUB-BREED COLLECTION**  
node getMultipleRandomImageFromASubBreedCollection.js  





