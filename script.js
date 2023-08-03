let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector("#quote-of-the-day").textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  // Let's start with some simple query selecting.
  // DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the #main-title ID element. Remember there are a couple of ways to query id. Change the text of the title to something shorter.
  const mainTitle = document.querySelector("#main-title");
  mainTitle.textContent = "DOM TORETTO";

  // Part 2
  // Select the body and change the background-color to a new color of your choice.
  const body = document.querySelector("body");
  body.style.backgroundColor = "lavender";

  // Part 3
  // Select DOM's Favorite Things list and remove the last list item.
  const favorites = document.querySelector("#favorite-things");
  const lastListItem = favorites.lastElementChild;
  favorites.removeChild(lastListItem);

  // Part 4
  // Select all .special-title class elements and change their font-size to 2rem. Remember you might have to iterate through the list of elements
  let specialTitle = document.querySelector(".special-title");
  // for(let i = 1; i < specialTitle.length; i++){
  specialTitle.style.fontSize = "2rem";
  // }
  // Part 5
  // Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
  let pastRaces = document.querySelector("#past-races");
  for (let race of pastRaces.children) {
    //defines a variable race that will take on the value of each child element of the pastRaces element
    if (race.textContent.includes("Chicago")) {
      // checks if the textContent property of the race element includes the text 'Chicago'.
      race.parentNode.removeChild(race); //race.parentNode: This accesses the parent element of the current race element.
      // .removeChild(race): This method removes the race element from its parent.
    }
  }

  // Creating New DOM Elements

  // Part 6
  // Let's add to DOM's Past Races list. Create a new <li> element, change the new <li> text to the name of a city, and append it to the Past Races list.
  const newLi = document.createElement("li");
  newLi.textContent = "York";
  pastRaces.appendChild(newLi); // adds the new element to the DOM

  // Part 7
  // Create a new .blog-post corresponding to the new city added in Part 6. You will have to create a new <div> with class of .blog-post, a new <h2> with text, and a new <p> with some text. Think about what order you want to create the elements, and what order you want to append them in.

  const newBlog = document.createElement("div");
  newBlog.classList.add("blog-post");
  const heading2 = document.createElement("h2");
  heading2.textContent = "Classic Car Racing in York";
  const paragraph = document.createElement("p");
  paragraph.textContent =
    "This is a new blog post about classic car racing in York, PA. Let Dom race your classic car. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  body.appendChild(newBlog);

  newBlog.appendChild(heading2); //adds element as children
  newBlog.appendChild(paragraph);
  paragraph.style.fontFamily = "sans-serif";

  // Part 8
  // Query select the #quote-title ID element and add a click event handler. That event handler should use the function randomQuote whenever #quote-title is clicked.
  // How to create an event-handler:
  // Select the element
  const quoteClick = document.querySelector("#quote-title");
  //  Define the Click Event Handler Function:
  function quoteIsClicked() {
    randomQuote();
  }
  // add a listener for click events on that element, and call your function when clicked

  // Attach the Event Listener:
  quoteClick.addEventListener("click", quoteIsClicked);

  // Part 9
  // Select all .blog-post class elements. Iterate through the list of .blog-post class elements and apply two event handlers to each node. The first event handler should be listening for mouseout events while the second handler should be listening for mouseenter events.

  // The mouseout handler should toggle the class .purple
  // The mouseenter handler should toggle the class .red
  // Test it out!
  const allBlogPosts = document.querySelectorAll(".blog-post");
  function mouseoutHandler() {
    this.classList.toggle('purple'); // Use 'this' to refer to the current element (the .blog-post element)
  }
  function mouseenterHandler(){
    this.classList.toggle('red'); // Use 'this' again to refer to the current element
  }
  for (let blogPost of allBlogPosts) { // for all of the blog posts, the following will happen, whether it's a mouseout or mouseenter
    blogPost.addEventListener('mouseout', mouseoutHandler);
    blogPost.addEventListener('mouseenter', mouseenterHandler);
  }

  //     for (let blogPost of allBlogPosts) {
//       blogPost.addEventListener('mouseout', mouseoutHandler())
//       if (blogPost.classList.contains('purple')){
//         blogPost.classList.remove('purple');
//     }else{
//       blogPost.classList.add('purple');
//     }
//   };

//   blogPost.addEventListener('mouseenter', mouseenterHandler())
//   if (blogPost.classList.contains('red')){
//     blogPost.classList.remove('red');
// }else{
//   blogPost.classList.add('red');
// }

  // Hint:

  // Remember the document node property .classList and the document node method .toggle().