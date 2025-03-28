// const animalSearchInput = document.getElementById("animal-search");
// const searchButton = document.getElementById("search-button");
// const animalImage = document.getElementById("animal-image");
// const animalNameDisplay = document.getElementById("animal-name");
// const animalHabitatDisplay = document.getElementById("animal-habitat");
// const animalDescriptionDisplay = document.getElementById("animal-description");
// const animalInfoDiv = document.getElementById("animal-info");

// function fetchAnimalData(searchTerm) {
//   fetch("./db.json")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       const animal = data.animals.find(
//         (animal) => animal.name.toLowerCase() === searchTerm.toLowerCase()
//       );
//       if (animal) {
//         displayAnimalInfo(animal);
//         animalInfoDiv.style.display = "block";
//       } else {
//         clearAnimalInfo();
//         animalInfoDiv.style.display = "none";
//       }
//     })
//     .catch((error) => {
//       console.error("Error fetching animal data:", error);
//       animalNameDisplay.textContent = "Error";
//       animalHabitatDisplay.textContent = "";
//       animalDescriptionDisplay.textContent = "";
//       animalImage.src = "";
//       animalInfoDiv.style.display = "none";
//     });
// }

// function displayAnimalInfo(animal) {
//   animalNameDisplay.textContent = `Name: ${animal.name}`;
//   animalImage.src = animal.image;
//   animalImage.alt = animal.name;
//   animalHabitatDisplay.textContent = `Habitat: ${animal.habitat}`;
//   animalDescriptionDisplay.textContent = `Description: ${animal.description}`;
// }

// function clearAnimalInfo() {
//   animalNameDisplay.textContent = "";
//   animalImage.src = "";
//   animalHabitatDisplay.textContent = "";
//   animalDescriptionDisplay.textContent = "";
// }

// searchButton.addEventListener("click", () => {
//   const searchTerm = animalSearchInput.value.trim();
//   if (searchTerm) {
//     fetchAnimalData(searchTerm);
//   }
// });

// window.onload = () => {
//   animalInfoDiv.style.display = "none";
// };


const animalSearchInput = document.getElementById("animal-search");
const searchButton = document.getElementById("search-button");
const animalImage = document.getElementById("animal-image");
const animalNameDisplay = document.getElementById("animal-name");
const animalHabitatDisplay = document.getElementById("animal-habitat");
const animalDescriptionDisplay = document.getElementById("animal-description");
const animalInfoDiv = document.getElementById("animal-info");
const videoContainer = document.getElementById("video-container");

function fetchAnimalData(searchTerm) {
  fetch("./db.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const animal = data.animals.find(
        (animal) => animal.name.toLowerCase() === searchTerm.toLowerCase()
      );
      if (animal) {
        displayAnimalInfo(animal);
        animalInfoDiv.style.display = "block";
      } else {
        clearAnimalInfo();
        videoContainer.innerHTML = "";
        animalInfoDiv.style.display = "none";
      }
    })
    .catch((error) => {
      console.error("Error fetching animal data:", error);
      animalNameDisplay.textContent = "Error";
      animalHabitatDisplay.textContent = "";
      animalDescriptionDisplay.textContent = "";
      animalImage.src = "";
      videoContainer.innerHTML = "";
      animalInfoDiv.style.display = "none";
    });
}

function displayAnimalInfo(animal) {
  animalNameDisplay.textContent = `Name: ${animal.name}`;
  animalImage.src = animal.image;
  animalImage.alt = animal.name;
  animalHabitatDisplay.textContent = `Habitat: ${animal.habitat}`;
  animalDescriptionDisplay.textContent = `Description: ${animal.description}`;

  if (animal.youtubeVideoId) {
    addVideo(animal.youtubeVideoId);
  } else {
    videoContainer.innerHTML = "";
  }
}

function clearAnimalInfo() {
  animalNameDisplay.textContent = "";
  animalImage.src = "";
  animalHabitatDisplay.textContent = "";
  animalDescriptionDisplay.textContent = "";
}

function addVideo(youtubeVideoId) {
  videoContainer.innerHTML = `<iframe width="100%" height="315" src="https://www.youtube.com/embed/${youtubeVideoId}" frameborder="0" allowfullscreen></iframe>`;
}

searchButton.addEventListener("click", () => {
  const searchTerm = animalSearchInput.value.trim();
  if (searchTerm) {
    fetchAnimalData(searchTerm);
  }
});

window.onload = () => {
  animalInfoDiv.style.display = "none";
};