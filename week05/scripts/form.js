const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModifiedDate = new Date(document.lastModified).toLocaleDateString();
document.getElementById('lastModified').textContent = `Last edited: ${lastModifiedDate}`;


const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];


function populateSelect() {
    const select = document.getElementById("productName");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });
}

populateSelect();


const visitDisplay = document.getElementById("visits");
const viewCount = document.getElementById("viewCount");
let numVisits = Number(window.localStorage.getItem("visits-ls")) || 0;

if (numVisits === 0) {
    visitDisplay.textContent = "This is your first visit!";
} else if (numVisits === 1) {
    visitDisplay.textContent = "You've visited us 1 time!";
} else {
    viewCount.textContent = numVisits;
}

numVisits++;
localStorage.setItem("visits-ls", numVisits);
