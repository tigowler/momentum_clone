const quotes = [
  //object가 들어있는 array
  {
    quotes: "You cannot change what you are, only what you do.",
    author: "Philip Pullman",
  },
  {
    quotes: "Lay a firm foundation with the bricks that others throw at you.",
    author: "David Brinkley",
  },
  {
    quotes:
      "Change the way you look at things and the things you look at change.",
    author: "Wayne Dyer",
  },
  {
    quotes:
      "If you run you stand a chance of losing," +
      "\n" +
      "but if you don’t run you’ve already lost.",
    author: "Barack Obama",
  },
  {
    quotes: "If you have always done it that way, it is probably wrong.",
    author: "Charles Kettering",
  },
  {
    quotes:
      "The greatest mistake you can make in life" +
      "\n" +
      "is to be continually fearing you will make one.",
    author: "Elbert Hubbard",
  },
  {
    quotes:
      "Not everything that is faced can be changed," +
      "\n" +
      " but nothing can be changed until it is faced.",
    author: "James Baldwin",
  },
  {
    quotes: "If work were so pleasant, the rich would keep it for themselves.",
    author: "Mark Twain",
  },
  {
    quotes:
      "I cannot say whether things will get better if we change; " +
      "\n" +
      "what I can say is they mush change if they are to get better.",
    author: "Georg C. Lichtenberg",
  },
  {
    quotes:
      "To create more positive results in your life," +
      "\n" +
      " replace ‘if only’ with ‘next time’.",
    author: "Unknown",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;
