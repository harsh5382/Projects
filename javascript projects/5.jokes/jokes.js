let jokes = [
  {
    category: "Programming",
    type: "single",
    joke: "Why do programmers prefer dark mode? Because light attracts bugs!",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    id: 101,
    safe: true,
    lang: "en",
  },
  {
    category: "Pun",
    type: "single",
    joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    id: 102,
    safe: true,
    lang: "en",
  },
  {
    category: "Misc",
    type: "single",
    joke: "Parallel lines have so much in common… it’s a shame they’ll never meet.",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    id: 103,
    safe: true,
    lang: "en",
  },
  {
    category: "Programming",
    type: "single",
    joke: "Why do Java developers wear glasses? Because they can't C#!",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    id: 104,
    safe: true,
    lang: "en",
  },
  {
    category: "Pun",
    type: "single",
    joke: "I’m reading a book about anti-gravity. It’s impossible to put down!",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    id: 105,
    safe: true,
    lang: "en",
  },
  {
    category: "Programming",
    type: "single",
    joke: "Why do programmers hate nature? It has too many bugs.",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    id: 106,
    safe: true,
    lang: "en",
  },
  {
    category: "Misc",
    type: "single",
    joke: "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    id: 107,
    safe: true,
    lang: "en",
  },
  {
    category: "Programming",
    type: "single",
    joke: "What’s a programmer’s favorite type of movie? Scripts.",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    id: 108,
    safe: true,
    lang: "en",
  },
  {
    category: "Pun",
    type: "single",
    joke: "I’m on a seafood diet. I see food and I eat it.",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    id: 109,
    safe: true,
    lang: "en",
  },
  {
    category: "Misc",
    type: "single",
    joke: "What do you call fake spaghetti? An impasta!",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    id: 110,
    safe: true,
    lang: "en",
  },
  {
    category: "Programming",
    joke: "Why do programmers prefer dark mode? Because light attracts bugs!",
  },
  {
    category: "Pun",
    joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
  },
  {
    category: "Misc",
    joke: "Parallel lines have so much in common… it’s a shame they’ll never meet.",
  },
  {
    category: "Programming",
    joke: "Why do Java developers wear glasses? Because they can't C#!",
  },
  {
    category: "Pun",
    joke: "I’m reading a book about anti-gravity. It’s impossible to put down!",
  },
  {
    category: "Programming",
    joke: "Why do programmers hate nature? It has too many bugs.",
  },
  {
    category: "Misc",
    joke: "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  },
  {
    category: "Programming",
    joke: "What’s a programmer’s favorite type of movie? Scripts.",
  },
  {
    category: "Pun",
    joke: "I’m on a seafood diet. I see food and I eat it.",
  },
  {
    category: "Misc",
    joke: "What do you call fake spaghetti? An impasta!",
  },
];

const jokeElement = document.getElementById("joke");
const reloadButton = document.getElementById("reloadJoke");

function loadNewJoke() {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  jokeElement.innerText = jokes[randomIndex].joke;
}

reloadButton.addEventListener("click", loadNewJoke);

loadNewJoke();
