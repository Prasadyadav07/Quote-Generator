const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const loader = document.getElementById("loader");

async function getQuote() {
  showLoading();
  try {
    const res = await fetch("https://type.fit/api/quotes");
    const data = await res.json();
    const random = data[Math.floor(Math.random() * data.length)];
    quoteText.innerText = `"${random.text}"`;
    authorText.innerText = `– ${random.author || "Unknown"}`;
  } catch (err) {
    quoteText.innerText = "Failed to fetch quote 😕";
    authorText.innerText = "";
  }
  hideLoading();
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

getQuote();