const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModifiedDate = new Date(document.lastModified).toLocaleDateString();
document.getElementById('lastModified').textContent = `Last edited: ${lastModifiedDate}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", function() {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "images/aba-temple-done.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "images/yigo-guam-done.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "images/washington-dc-temple.jpg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "images/lima-peru-temple.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "images/mexico-city-temple.jpg"
    },
    {
        templeName: "Fort Collins Colorado",
        location: "Fort Collins, Colorado, United States",
        dedicated: "2016, October, 16",
        area: 42000,
        imageUrl: "images/fort-collins-temple.jpg"
    },
    {
        templeName: "Madrid Spain",
        location: "Madrid, Spain",
        dedicated: "1999, March, 19-21",
        area: 45800,
        imageUrl: "images/madrid-spain-temple.jpg"
    },
    {
        templeName: "Santiago Chile",
        location: "Santiago, Region Metropolitana, Chile",
        dedicated: "2006, March, 12",
        area: 20831,
        imageUrl: "images/santiago-chile-temple.jpg"
    },
    {
        templeName: "St. George Utah",
        location: "St. George, Utah, United States",
        dedicated: "1877, April, 6-8",
        area: 143969,
        imageUrl: "images/st-george-temple.jpg"
    },
    {
        templeName: "Salt Lake City Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 5",
        area: 382207,
        imageUrl: "images/salt-lake-temple.jpg"
    },
    {
        templeName: "Logan Utah",
        location: "Logan, Utah, United States",
        dedicated: "1884, May, 17-19",
        area: 119619,
        imageUrl: "images/logan-temple.jpg"
    },
    {
        templeName: "Colonia Juárez Chihuahua Mexico",
        location: "Colonia Juárez, Chihuahua",
        dedicated: "1999, March, 6-7",
        area: 6800,
        imageUrl: "images/colonia-juarez-temple.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "images/manti-temple.jpg"
    },
    {
        templeName: "San Juan Puerto Rico",
        location: "San Juan, Puerto Rico",
        dedicated: "2023, January, 15",
        area: 6988,
        imageUrl: "images/san_juan_puerto_rico_temple.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "images/payson-utah-temple-done.jpg"
    },
];

function displayTemples(templeList) {
    const templeContainer = document.getElementById("temple-container");
    templeContainer.innerHTML = "";

    templeList.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("temple-card");

        card.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
            <div class="info">
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area} sq. ft</p>
            </div>
            `;

            templeContainer.appendChild(card);
    });
}

// Create/select the h2 element so it can dynamically change throughout
const pageNameButton = document.querySelector("#pageName");

// Old temples
const oldTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900);
const oldButton = document.querySelector("#oldButt");
oldButton.addEventListener("click", () => {
    pageNameButton.textContent = "Old";
    oldButton.classList.add("active");
    [newButton, largeButton, smallButton, homeButton].forEach(button => button.classList.remove("active"));
    displayTemples(oldTemples);
});

// New temples
const newTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000);
const newButton = document.querySelector("#newButt");
newButton.addEventListener("click", () => {
    pageNameButton.textContent = "New";
    newButton.classList.add("active");
    [oldButton, largeButton, smallButton, homeButton].forEach(button => button.classList.remove("active"));
    displayTemples(newTemples);
});

// Large temples
const largeTemples = temples.filter(temple => temple.area > 90000);
const largeButton = document.querySelector("#largeButt");
largeButton.addEventListener("click", () => {
    pageNameButton.textContent = "Large";
    largeButton.classList.add("active");
    [newButton, oldButton, smallButton, homeButton].forEach(button => button.classList.remove("active"));
    displayTemples(largeTemples);
});

// Small temples
const smallTemples = temples.filter(temple => temple.area < 10000);
const smallButton = document.querySelector("#smallButt");
smallButton.addEventListener("click", () => {
    pageNameButton.textContent = "Small";
    smallButton.classList.add("active");
    [newButton, largeButton, oldButton, homeButton].forEach(button => button.classList.remove("active"));
    displayTemples(smallTemples);
});

// Home button
const homeButton = document.querySelector("#homeButt");
homeButton.addEventListener("click", () => {
    pageNameButton.textContent = "Home";
    homeButton.classList.add("active");
    [newButton, largeButton, smallButton, oldButton].forEach(button => button.classList.remove("active"));
    displayTemples(temples);
});

// Display all temples by default upon loading page
displayTemples(temples);