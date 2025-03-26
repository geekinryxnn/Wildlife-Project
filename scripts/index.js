// const API_BASE_URL = 'http://localhost:3000'; // json-server URL

// const animalSearchInput = document.getElementById('animal-search');
// const searchButton = document.getElementById('search-button');
// const animalImage = document.getElementById('animal-image');
// const animalNameDisplay = document.getElementById('animal-name');
// const animalHabitatDisplay = document.getElementById('animal-habitat');
// const animalDescriptionDisplay = document.getElementById('animal-description');

// function fetchAnimalData(searchTerm) {
//     fetch('http://localhost:3000/animals?name='+searchTerm)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then(data => {
//             if (data.length > 0) {
//                 displayAnimalInfo(data[0]);
//             } else {
//                 clearAnimalInfo();
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching animal data:', error);
//             //   Display a user-friendly error message
//             animalNameDisplay.textContent = "Error";
//             animalHabitatDisplay.textContent = "";
//             animalDescriptionDisplay.textContent = "";
//             animalImage.src = "";
//         });
// }

// function displayAnimalInfo(animal) {
//     animalNameDisplay.textContent = `Name: ${animal.name}`;
//     animalImage.src = animal.image;
//     animalImage.alt = animal.name;
//     animalHabitatDisplay.textContent = `Habitat: ${animal.habitat}`;
//     animalDescriptionDisplay.textContent = `Description: ${animal.description}`;
   
// }

// function clearAnimalInfo() {
//     animalNameDisplay.textContent = '';
//     animalImage.src = '';
//     animalHabitatDisplay.textContent = '';
//     animalDescriptionDisplay.textContent = '';
// }

// searchButton.addEventListener('click', () => {
//     const searchTerm = animalSearchInput.value.trim();
//     if (searchTerm) {
//         fetchAnimalData(searchTerm);
//     }
// });

// window.onload = () => {
//     //  fetchAnimalData(''); //  You might want to display a default animal on load
// };

const animalSearchInput = document.getElementById('animal-search');
const searchButton = document.getElementById('search-button');
const animalImage = document.getElementById('animal-image');
const animalNameDisplay = document.getElementById('animal-name');
const animalHabitatDisplay = document.getElementById('animal-habitat');
const animalDescriptionDisplay = document.getElementById('animal-description');
const animalInfoDiv = document.getElementById('animal-info'); // Add this line

function fetchAnimalData(searchTerm) {
    fetch('./db.json') // Fetch from local db.json
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const animal = data.animals.find(animal => animal.name.toLowerCase() === searchTerm.toLowerCase()); // Corrected to data.animals.find
            if (animal) {
                displayAnimalInfo(animal);
                animalInfoDiv.style.display = 'block'; // Show the div
            } else {
                clearAnimalInfo();
                animalInfoDiv.style.display = 'none'; // Hide the div
            }
        })
        .catch(error => {
            console.error('Error fetching animal data:', error);
            animalNameDisplay.textContent = "Error";
            animalHabitatDisplay.textContent = "";
            animalDescriptionDisplay.textContent = "";
            animalImage.src = "";
            animalInfoDiv.style.display = 'none'; // Hide the div
        });
}

function displayAnimalInfo(animal) {
    animalNameDisplay.textContent = `Name: ${animal.name}`;
    animalImage.src = animal.image;
    animalImage.alt = animal.name;
    animalHabitatDisplay.textContent = `Habitat: ${animal.habitat}`;
    animalDescriptionDisplay.textContent = `Description: ${animal.description}`;
}

function clearAnimalInfo() {
    animalNameDisplay.textContent = '';
    animalImage.src = '';
    animalHabitatDisplay.textContent = '';
    animalDescriptionDisplay.textContent = '';
}

searchButton.addEventListener('click', () => {
    const searchTerm = animalSearchInput.value.trim();
    if (searchTerm) {
        fetchAnimalData(searchTerm);
    }
});

window.onload = () => {
    animalInfoDiv.style.display = 'none'; // Hide the div on load
};