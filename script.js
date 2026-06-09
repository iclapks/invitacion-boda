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

function confirmarSi(){

  const familia =
    document.getElementById(
      "familiaInvitada"
    ).value;

  if(familia === ""){

    alert("Selecciona una familia");

    return;
  }

  const boletos =
    familias[familia];

  const mensaje =
`Hola.

Confirmo la asistencia de:

${familia}

Invitación válida para ${boletos} personas.

Gracias.`;

  window.open(
    `https://wa.me/527224157101?text=${encodeURIComponent(mensaje)}`,
    "_blank"
  );

  document.getElementById(
    "mensajeConfirmacion"
  ).innerHTML =

  `
  <strong>${familia}</strong><br><br>

  Invitación válida para:<br>

  <strong>${boletos} personas</strong><br><br>

  Gracias por confirmar ❤️
  `;

  document.getElementById(
    "confirmadoModal"
  ).style.display = "flex";

}

function confirmarNo(){

  const familia =
    document.getElementById(
      "familiaInvitada"
    ).value;

  if(familia === ""){

    alert("Selecciona una familia");

    return;
  }

  const boletos =
    familias[familia];

  const mensaje =
`Hola.

Lamentablemente no podremos asistir.

${familia}

Invitación para ${boletos} personas.

Gracias por la invitación.`;

  window.open(
    `https://wa.me/527224157101?text=${encodeURIComponent(mensaje)}`,
    "_blank"
  );

}


function cerrarConfirmacion(){

  document.getElementById(
    "confirmadoModal"
  ).style.display = "none";



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

const familias = {

  "Familia López Molas": 4,
  "Miguel Flores y Familia": 4,
  "Ismael Martinez y Familia": 4,
  "Abel Salazar y Familia": 4,
    "Laurita": 1

};
const comboFamilias =
  document.getElementById("familiaInvitada");

Object.keys(familias).forEach(familia => {

  const opcion =
    document.createElement("option");

  opcion.value = familia;
  opcion.textContent = familia;

  comboFamilias.appendChild(opcion);

});

comboFamilias.addEventListener("change", () => {

  const familia =
    comboFamilias.value;

  if(!familia){

    document.getElementById("datosFamilia")
      .style.display = "none";

    return;
  }

  document.getElementById("datosFamilia")
    .style.display = "block";

  document.getElementById("nombreFamilia")
    .innerText = familia;

  document.getElementById("cantidadBoletos")
    .innerText = familias[familia];

});
