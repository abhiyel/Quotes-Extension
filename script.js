fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
        const quote = data[Math.floor(Math.random()*data.length)];
        const quoteElement = document.getElementById("quoteElement");
        const quoteAuthor = document.getElementById("author");
        quoteElement.innerHTML =quote.text;
        quoteAuthor.innerHTML ="~ "+quote.author;
  });