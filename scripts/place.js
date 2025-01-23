const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModifiedDate = new Date(document.lastModified).toLocaleDateString();
document.getElementById('lastModified').textContent = `Last edited: ${lastModifiedDate}`;



// Define static variables for temperature and wind speed
const temperature = 9;
const windSpeed = 8;

// Function to calculate wind chill
function calculateWindChill(temp, speed) {
    return (13.12 + 0.6215 * temp - 11.37 * (speed ** 0.16) + 0.3965 * temp * (speed ** 0.16)).toFixed(2);
}


//Function to determine if wind chill should be calculated
function displayWindChill() {
    if (temperature <= 10 && windSpeed > 4.8) {
        // Calculate the wind chill factor
        const windChill = calculateWindChill(temperature, windSpeed);
        // Display wind chill factor in the "Weather" section
        document.getElementById("windChill").textContent = `${windChill}°C`;
    } else {
        document.getElementById("windChill").textContent = "N/A";
    }
}

displayWindChill();
