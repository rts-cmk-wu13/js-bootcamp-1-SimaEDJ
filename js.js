let quote = document.querySelector("blockquote");

let quoteElms = ["Alt, hvad jeg ved, er, at jeg intet ved - Sokrates.", "Det har jeg aldrig gjort før, så det klarer jeg helt sikkert - Pippi Langstrømpe.", "Find ikke fejl, find en løsning - Henry Ford", "Vær dig selv, alle andre er alligevel optaget - Oscar Wilde.", "Når du står i lort til halsen, er alt, hvad du kan gøre, at synge - Samuel Beckett."];

let i = Math.floor(Math.random() * quoteElms.length);

function updateQuote() {
    quote.innerHTML = quoteElms[i]
}

updateQuote();