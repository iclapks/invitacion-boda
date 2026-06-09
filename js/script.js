let familiaActual = "";
let boletosActuales = 0;

// Principal
function abrirInvitacion(){

  document.getElementById("portada")
    .style.display = "none";

  document.getElementById("contenidoInvitacion")
    .style.display = "block";

  document.getElementById("music").play();

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



function confirmarSi(){

  const mensaje =

`Hola.

Confirmamos nuestra asistencia.

${familiaActual}

Invitación válida para ${boletosActuales} personas.

Gracias.`;

  window.open(
    `https://wa.me/527224157101?text=${encodeURIComponent(mensaje)}`,
    "_blank"
  );

  document.getElementById(
    "mensajeConfirmacion"
  ).innerHTML =

  `
  <strong>${familiaActual}</strong><br><br>

  Invitación válida para:<br>

  <strong>${boletosActuales} personas</strong><br><br>

  ¡Qué alegría! Te esperamos.
  `;

  document.getElementById(
    "confirmadoModal"
  ).style.display = "flex";

}
function cerrarConfirmacion(){

  document.getElementById(
    "confirmadoModal"
  ).style.display = "none";

}

function confirmarNo(){

  const mensaje =

`Hola.

Lamentablemente no podremos asistir.

${familiaActual}`;

  window.open(
    `https://wa.me/527224157101?text=${encodeURIComponent(mensaje)}`,
    "_blank"
  );

   document.getElementById(
    "mensajeConfirmacion"
  ).innerHTML =

  `
  <strong>${familiaActual}</strong><br><br>

  

  Lamentamos que no puedan acompañarnos
  `;

  document.getElementById(
    "confirmadoModal"
  ).style.display = "flex";

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

const invitados = {

  
  mike: {
    nombre: "Miguel Flores y Familia",
    boletos: 4
  },

  isma: {
    nombre: "Ismael Martínez y Familia",
    boletos: 4
  },

  abel: {
    nombre: "Abel Salazar y Familia",
    boletos: 4
  },

};

const params =
  new URLSearchParams(window.location.search);

const codigo =
  params.get("familia");

const familiaInvitada =
  invitados[codigo];

  if(!familiaInvitada){

  document.getElementById("portada").innerHTML = `
    <div class="portada-overlay">
      <h2>Invitación no encontrada</h2>
      <p>Por favor utiliza el enlace que recibiste.</p>
    </div>
  `;

  throw new Error("Invitación inválida");
}

window.addEventListener("load", () => {

  if(typeof familiaInvitada !== "undefined"){

    familiaActual =
      familiaInvitada.nombre;

    boletosActuales =
      familiaInvitada.boletos;

    const fam =
      document.getElementById(
        "familiaPortada"
      );

    if(fam){

      fam.innerHTML =
        familiaActual;
    }

    const bol =
      document.getElementById(
        "boletosPortada"
      );

    if(bol){

      bol.innerHTML =
        `🎟️ Hemos reservado ${boletosActuales} lugares para ustedes`;
    }

  }

});
