function getJoke() {
  const setupEl = document.getElementById("setup");
  const punchlineEl = document.getElementById("punchline");

  setupEl.textContent = "Loading joke...";
  punchlineEl.textContent = "";

  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      setupEl.textContent = data.setup;
      punchlineEl.textContent = data.punchline;
    })
    .catch(error => {
      setupEl.textContent = "Oops! Couldn't load a joke.";
      punchlineEl.textContent = "";
      console.error("Joke fetch failed:", error);
    });
}

// Load a joke on page load
window.onload = getJoke;
