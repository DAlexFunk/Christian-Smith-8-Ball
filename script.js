function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function clickEvent(evt) {
  const sound = getRandomElement(laughs);
  sound.play();
  evt.target.className = "eightBall active";
  bubble.textContent = getRandomElement(options);
  setTimeout(() => (evt.target.className = "eightBall"), 500);
}

const button = document.querySelector("button.eightBall");
const bubble = document.querySelector("div.bubble");
const laughs = [
  new Audio("./src/shortCartoon.wav"),
  new Audio("./src/longCartoon.wav"),
  new Audio("./src/childLaugh.wav"),
  new Audio("./src/manSneeze.wav"),
  new Audio("./src/painSigh.wav"),
  new Audio("./src/roar.wav"),
  new Audio("./src/babyTalk.wav"),
  new Audio("./src/hungryman.wav"),
];
const options = [
  // Positive
  "Lmao yeah",
  "I love you man, you can do it",
  "Hawk Tuah! That mean YES!",
  "I'm a firefighter so you can trust me: it'll happen",
  "I might be a genius, so yes",
  "Yeah sure",
  "I give it 60/40 odds",
  "100% dude",
  "I was talking to Aaliyah, she said yeah",
  "Yessir",
  // Negative
  "Fuck no",
  "I give it 40/60 odds",
  "Bro what? no.",
  "I'm going to kill you if you ask that again",
  "Karinne Gabbert said no.",
  // Non-Commital
  "I'd pick 29 and 1",
  "I'm busy rn",
  "Bro what are you talking about?",
  "I don't fucking know",
  "Why are you asking me this",
];

button.addEventListener("click", clickEvent);
