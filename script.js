let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  // Let's start with some simple query selecting.
  // DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the #main-title ID element. Remember there are a couple of ways to query id. Change the text of the title to something shorter.
const mainTitle = document.querySelector('#main-title');
mainTitle.textContent = 'DOM TORETTO';


  // Part 2
  // Select the body and change the background-color to a new color of your choice.
  const body = document.querySelector('body');
  body.style.backgroundColor = 'lavender';
  



  // Part 3


  // Part 4


  // Part 5


  // Part 6


  // Part 7


  // Part 8


  // Part 9




});
