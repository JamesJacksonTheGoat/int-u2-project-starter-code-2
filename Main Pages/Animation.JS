const visor = document.getElementById("visor-hitbox");
const blast = document.getElementById("blast");

visor.addEventListener("click", () => {

  // Start explosion
  blast.classList.add("active");

  // Wait for explosion animation
  setTimeout(() => {

    // Remove explosion
    blast.style.display = "none";

    // Remove Cyclops cover
    document.querySelector(".front-image").style.display = "none";
    document.getElementById("visor-hitbox").style.display = "none";

  }, 1200);

});
