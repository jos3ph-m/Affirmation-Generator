const affirmations = [
  "You are a lovable, wonderful friend.",
  "You are super talented! Look at you go!",
  "Someone in your life looks up to you, you're amazing!",
  "You deserve nothing but the best!",
  "You're doing a great job.",
  "You're here because you matter.",
  "You are beautiful inside and out.",
  "Here's a reminder: love yourself first.",
];

const affirmBtn = document.querySelector(".form-inputs input");
const text = document.querySelector(".text p");

function shuffle(max) {
  let index = Math.floor(Math.random() * Math.floor(max));
  text.innerHTML = affirmations[index];
}

affirmBtn.addEventListener("click", function () {
  shuffle(affirmations.length);
});
