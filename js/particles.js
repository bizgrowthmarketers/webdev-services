// function createParticleBackground() {
//   const particleBackground = document.createElement("div");
//   particleBackground.classList.add("particle-background");
//   document.body.appendChild(particleBackground);

//   for (let i = 0; i < 100; i++) {
//     createParticle(particleBackground);
//   }

//   setInterval(function () {
//     const particles = particleBackground.querySelectorAll(".particle");
//     particles.forEach((particle) => particle.remove());
//     for (let i = 0; i < 100; i++) {
//       createParticle(particleBackground);
//     }
//   }, 30000);
// }

// function createParticle(container) {
//   const particle = document.createElement("span");
//   particle.classList.add("particle");
//   particle.textContent = "</>";

//   particle.style.fontSize = Math.random() * 16 + 10 + "px";
//   particle.style.color = getRandomColor();
//   particle.style.top = Math.random() * 100 + "vh";
//   particle.style.left = Math.random() * 100 + "vw";
//   container.appendChild(particle);
// }

// function getRandomColor() {
//   const colors = [
//     "#125055",
//     "#189b90",
//     "#28b1bb",
//     "#82c244",
//     "#ee8725",
//     "#F7C392",
//     "#FFD393",
//   ];
//   return colors[Math.floor(Math.random() * colors.length)];
// }

// createParticleBackground();

// round-particles
function createParticleBackground() {
  const particleBackground = document.createElement("div");
  particleBackground.classList.add("particle-background");
  document.body.appendChild(particleBackground);

  for (let i = 0; i < 100; i++) {
    createParticle(particleBackground);
  }

  setInterval(function () {
    const particles = particleBackground.querySelectorAll(".particle");
    particles.forEach((particle) => particle.remove());
    for (let i = 0; i < 100; i++) {
      createParticle(particleBackground);
    }
  }, 30000);
}
function createParticle(container) {
  const particle = document.createElement("div");
  const colors = [
    "#125055",
    "#189b90;",
    "#28b1bb",
    "#82c244",
    "#ee8725",
    "#F7C392",
    "#FFD393",
  ];
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  particle.classList.add("particle");
  particle.style.width = Math.random() * 6 + 2 + "px";
  particle.style.height = particle.style.width;
  particle.style.backgroundColor = colors[randomColorIndex];
  particle.style.top = Math.random() * 100 + "vh";
  particle.style.left = Math.random() * 100 + "vw";
  container.appendChild(particle);
}

createParticleBackground();
