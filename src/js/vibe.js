const vibes = [
  "...and you are awsome",
  "...have a wonderful day",
  "...and you`ve got this!",
  "...and so is this puppy"
];

let vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

document.querySelector(".vibe").append(vibe);
