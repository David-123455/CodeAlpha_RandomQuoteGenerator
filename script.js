const apiUrl = "https://api.quotable.io/random"; // API URL to get random quotes

// Function to fetch and display a new random quote
function newQuote() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      document.getElementById("quote").textContent = `"${data.content}"`;
      document.getElementById("author").textContent = `- ${data.author}`;
    })
    .catch(error => {
      console.error('Error fetching the quote:', error);
    });
}

// Function to share the current quote on Twitter
function shareQuote() {
  const quote = document.getElementById("quote").textContent;
  const author = document.getElementById("author").textContent;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote + " " + author)}`;
  window.open(twitterUrl, "_blank");
}

// Initially fetch and display a quote when the page loads
newQuote();
