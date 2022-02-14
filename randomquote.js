/* Selects elements on html - button changes the quote
quote - the quote changes
autho - the author of quote changes according to their quote */
let button = document.querySelector("button");
let quote = document.querySelector("#quote");
let author = document.querySelector("#author");

/* List of quotes and authors - arrays nested within quote array */
let quoteArray = [["When you have a dream, you've got to grab it and never let go.", "Carol Burnett"],
["Nothing is impossible. The word itself says I'm possible!", "Audrey Hepburn"], ["There is nothing impossible to they who will try.", "Alexander the Great"],
["The bad news is time flies. The good news is you're the pilot.", "Michael Altshuler"]]

/* Random function that can change depending on how many quotes there are */
function random(x){
    return Math.floor(Math.random()* x)
}

/* Button event that triggers a random quote when clicked */
button.addEventListener("click", function(){
    let randomQuote = quoteArray[random(4)]
    quote.textContent = randomQuote[0];
    author.textContent = randomQuote[1];
})