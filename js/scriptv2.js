// SOBRE
function abrirSobre() {
  const sobre = document.getElementById("sobre");
  const envelope = document.querySelector(".envelope");

  envelope.classList.add("abierto");

  setTimeout(() => {
    sobre.classList.add("oculto");
    document.getElementById("music").play();
  }, 1000);
}

// ANIMACIONES
const cards = document.querySelectorAll(".fade");

function mostrarElementos() {
  cards.forEach(c => {
    const top = c.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      c.classList.add("visible");
    }
  });
}

window.addEventListener("load", mostrarElementos);
window.addEventListener("scroll", mostrarElementos);

// MÚSICA
function toggleMusic() {
  const music = document.getElementById("music");
  if (music.paused) music.play();
  else music.pause();
}

// GALERÍA
function openModal(src) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalImg").src = src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function confirmarSi() {

  const nombre =
    document.getElementById("nombreInvitado").value.trim();

  if(nombre === ""){
    alert("Por favor escribe tu nombre");
    return;
  }

  const mensaje =
    `Hola, confirmo que SÍ asistiré.%0A%0AMi nombre es: ${nombre}`;

  window.open(
    `https://wa.me/527224157101?text=${mensaje}`,
    "_blank"
  );
}

function confirmarNo() {

  const nombre =
    document.getElementById("nombreInvitado").value.trim();

  if(nombre === ""){
    alert("Por favor escribe tu nombre");
    return;
  }

  const mensaje =
    `Hola, lamentablemente NO podré asistir.%0A%0AMi nombre es: ${nombre}`;

  window.open(
    `https://wa.me/527224157101?text=${mensaje}`,
    "_blank"
  );
}

const weddingDate = new Date("Sep 19, 2026 17:00:00").getTime();

setInterval(() => {

  const now = new Date().getTime();

  const distance = weddingDate - now;

  const days =
    Math.floor(distance / (1000*60*60*24));

  const hours =
    Math.floor((distance%(1000*60*60*24))
    /(1000*60*60));

  const minutes =
    Math.floor((distance%(1000*60*60))
    /(1000*60));

  const seconds =
    Math.floor((distance%(1000*60))
    /1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

},1000);
