
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const loader = document.getElementById("loader");

const quotes = [
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
  { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
  { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { text: "Great minds discuss ideas; average minds discuss events; small minds discuss people.", author: "Eleanor Roosevelt" }
];

function getQuote() {
  showLoading();
  setTimeout(() => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    quoteText.innerText = random.text;
    authorText.innerText = `– ${random.author || "Unknown"}`;
    hideLoading();
    animateQuote();
  }, 500);
}

function copyQuote() {
  const quote = quoteText.innerText + "\n" + authorText.innerText;
  navigator.clipboard.writeText(quote).then(() => {
    alert("Quote copied to clipboard!");
  });
}

function tweetQuote() {
  const tweet = `${quoteText.innerText} ${authorText.innerText}`;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`;
  window.open(tweetUrl, "_blank");
}

function showLoading() {
  loader.style.display = "block";
  quoteText.style.display = "none";
  authorText.style.display = "none";
}

function hideLoading() {
  loader.style.display = "none";
  quoteText.style.display = "block";
  authorText.style.display = "block";
}

function animateQuote() {
  quoteText.style.opacity = 0;
  authorText.style.opacity = 0;
  setTimeout(() => {
    quoteText.style.animation = "fadeIn 0.5s forwards";
    authorText.style.animation = "fadeIn 0.5s forwards";
  }, 100);
}

// 🌙 Dark mode toggle logic
const themeSwitch = document.getElementById("themeSwitch");

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeSwitch.checked = true;
  }
});

themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

getQuote();
