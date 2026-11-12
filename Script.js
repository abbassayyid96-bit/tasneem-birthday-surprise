const envelope = document.querySelector(".envelope");
const openButton = document.querySelector("#openBtn");
const birthdayLetter = document.querySelector(".birthday-letter");
const envelopeArea = document.querySelector(".envelope-area");

openButton.addEventListener("click", () => {
  envelope.classList.add("open");
  
  setTimeout(() => {
    birthdayLetter.classList.add("show");
    openButton.style.display = "none";
  }, 900);
});

/* Create falling petals */

function createPetal() {
  const petal = document.createElement("div");
  
  petal.classList.add("petal");
  
  const petals = ["🌸", "🌹", "💮", "🌺"];
  petal.innerHTML = petals[Math.floor(Math.random() * petals.length)];
  
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.fontSize = Math.random() * 15 + 15 + "px";
  petal.style.animationDuration = Math.random() * 5 + 5 + "s";
  
  document.body.appendChild(petal);
  
  setTimeout(() => {
    petal.remove();
  }, 10000);
}

setInterval(createPetal, 900);
