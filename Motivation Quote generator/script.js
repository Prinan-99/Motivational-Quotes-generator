const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Act as if what you do makes a difference. It does. - William James",
    "Success is not in what you have, but who you are. - Bo Bennett",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
    "Your limitation—it's only your imagination. - Unknown",
    "Push yourself, because no one else is going to do it for you. - Unknown",
    "Great things never come from comfort zones. - Unknown",
    "Dream it. Wish it. Do it. - Unknown",
    "Success doesn’t just find you. You have to go out and get it. - Unknown",
    "The harder you work for something, the greater you’ll feel when you achieve it. - Unknown",
    "Dream bigger. Do bigger. - Unknown",
    "Don't stop when you're tired. Stop when you're done. - Unknown"
];

const facts = [
    "People who are more grateful tend to be happier.",
    "Writing down your thoughts can help clear your mind.",
    "You can't pour from an empty cup; take care of yourself first.",
    "Your mind will believe comforting lies while also seeking powerful truths.",
    "The best way to predict the future is to create it."
];

function fetchQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}

function fetchFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById("fact").innerText = facts[randomIndex];
}

document.getElementById("newQuoteBtn").addEventListener("click", fetchQuote);
document.getElementById("newFactBtn").addEventListener("click", fetchFact);

// Initial fetch on page load
fetchQuote();
fetchFact();
