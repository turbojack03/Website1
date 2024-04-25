// Define an array of quotes
const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Sometimes you can’t see yourself clearly until you see yourself through the eyes of others. — Ellen DeGeneres",
    "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi"
];

// Function to generate a random quote
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = quotes[randomIndex];
}

// Event listener for the button click
document.getElementById("generate-btn").addEventListener("click", generateQuote);

// Initial quote generation on page load
generateQuote(); 