let familiaActual = "";
let boletosActuales = 0;
let mensajefinal= "";
let codigoActual = "";

//GoogleSheet pagina donde esta el excel
const URL_SHEETS =
"https://script.google.com/macros/s/AKfycbx18sEnqtkPD7W3gUyb4so2pbagHFvPaJc7bxTXiv-5Re8I5PTf2zaeXVYofS4u2G7J/exec";

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

async function confirmarSi(){

  await guardarRespuesta("SI");

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

   <strong>${mensajefinal}</strong>

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

async function confirmarNo(){

  await guardarRespuesta("NO");


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

  

  Lamentamos que no puedan acompañarnos 😞
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
artmol: { nombre: "Familia Molas Blas", boletos: 3, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
rosita: { nombre: "Rosa Antonio y Familia", boletos: 3, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
luisa: { nombre: "Luisa Antonio y Familia", boletos: 5, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
tiarosa: { nombre: "Rosa Blas", boletos: 1, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
alex: { nombre: "Alejandro Antonio", boletos: 3, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
trini: { nombre: "Trini Antonio Y Familia", boletos: 2, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
lupitaantonio: { nombre: "Lupita Antonio", boletos: 1, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
gaby: { nombre: "Gaby Antonio y Familia", boletos: 4, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
javier: { nombre: "Javier Antonio y Familia", boletos: 5, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
tiajuanita: { nombre: "Juanita Blas", boletos: 1, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
diego: { nombre: "Diego Escamilla", boletos: 2, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
jordan: { nombre: "Jordan Escamilla y Familia", boletos: 4, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
betza: { nombre: "Betza Escamilla y Familia", boletos: 5, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
modesto: { nombre: "Modesto Blas y Familia", boletos: 2, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
demetrio: { nombre: "Demetrio Blas y Familia", boletos: 2, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
chela: { nombre: "Eli Martinez", boletos: 2, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
cesi: { nombre: "Cesi Martinez y Familia", boletos: 3, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
yareli: { nombre: "Yare y Familia", boletos: 5, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
pablo: { nombre: "Pablo Martinez y Familia", boletos: 3, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
katy: { nombre: "Katy y Cesar", boletos: 2, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
angeles: { nombre: "Angi Gutierrez y Familia", boletos: 3, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
angelicasan: { nombre: "Angelica Sanches", boletos: 2, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
ma: { nombre: "Antonia Arroyo y Familia", boletos: 1, mensajepersonal: "Eres la jefa, no necesitas invitación 🫡 🫡 🫡" },
aida: { nombre: "Aida Lopez y Familia", boletos: 2, mensajepersonal: "No regañes a German jajaja 😜 😜 😜" },
bianca: { nombre: "Bianca Lopez y Familia", boletos: 1, mensajepersonal: "No se te olvide Lia 😁 😁 😁" },
jefe: { nombre: "Familia López Molas", boletos: 4, mensajepersonal: "Hoy es un gran día para morir 👰‍♀️ 👉 ☠️" },
ofelia: { nombre: "Ofelia Arroyo y Familia", boletos: 1, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
ofita: { nombre: "Ofita Arroyo y Familia", boletos: 3, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
carmen: { nombre: "Carmen Benites y Familia", boletos: 6, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
kary: { nombre: "Kary Ogazon", boletos: 2, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
hectorsoteno: { nombre: "Hector Soteno y Familia", boletos: 4, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
lola: { nombre: "Mariela Medina y Familia", boletos: 4, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
madrina: { nombre: "Laurita Martinez", boletos: 10, mensajepersonal: "Gracias por estar siempre con nosotros 🌷 ❤️ 🌷" },
padrinos: { nombre: "Familia Martinez Martinez", boletos: 10, mensajepersonal: "Gracias por sus consejos 💐 🍷 💐" },
jeisa: { nombre: "Familia Carranza Molas", boletos: 6, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
miguelcarrillo: { nombre: "Padrino Miguel Carrillo", boletos: 4, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
gisela: { nombre: "Gisela Mendoza y Familia", boletos: 4, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
abel: { nombre: "Abel Salazar y Familia", boletos: 4, mensajepersonal: "Abelito te esperamos 🥳 🥳 🥳" },
isma: { nombre: "Ismael Martínez y Familia", boletos: 5, mensajepersonal: "Gracias Isma, eres un buen amigo 🤙 🤙 🤙" },
mike: { nombre: "Miguel Flores y Familia", boletos: 4, mensajepersonal: "No me falles Mike, eres mi idolo 👌 👌 👌" },
manuel: { nombre: "Manuel", boletos: 1, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
rocio: { nombre: "Rocio Tovar y Familia", boletos: 3, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
itzel: { nombre: "Itzel y Familia", boletos: 2, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
hannia: { nombre: "Hannia y Familia", boletos: 2, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
jorgin: { nombre: "Jorge Tovar y Familia", boletos: 5, mensajepersonal: "No nos falles Jorgín 🧐 🧐 🧐" },
omar: { nombre: "Omar Tovar y Familia", boletos: 3, mensajepersonal: "Gracias por acomparnos BOTIJON 😜 😜 😜" },
domingo: { nombre: "Domingo Arroyo y Familia", boletos: 2, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
diana: { nombre: "Diana Arroyo y Familia", boletos: 5, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
hectorarroyo: { nombre: "Hector Arroyo y Familia", boletos: 2, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
santos: { nombre: "Santos Arroyo y Familia", boletos: 2, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
roy: { nombre: "Roy Arroyo y Familia", boletos: 3, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
eliseo: { nombre: "Eliseo Arroyo y Familia", boletos: 2, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
jessica: { nombre: "Jessica Arroyo y Familia", boletos: 4, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
irma: { nombre: "Irma Arroyo y Familia", boletos: 2, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
angelica: { nombre: "Angelica Arroyo y Familia", boletos: 4, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
lupitaraquel: { nombre: "Lupita y Familia", boletos: 2, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
chuchin: { nombre: "Chuchin y Familia", boletos: 3, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
reyna: { nombre: "Reyna Arroyo y Familia", boletos: 3, mensajepersonal: "No faltes rellenita 🐽 🐽 🐽" },
marcelino: { nombre: "Marcelino Arroyo y Familia", boletos: 3, mensajepersonal: "Lo esperamos Tio 🥳 🥳 🥳" },
joaquin: { nombre: "Joaquin Arroyo", boletos: 1, mensajepersonal: "Lo esperamos Tio 🥳 🥳 🥳" },
raquepadilla: { nombre: "Raquel Padilla y Familia", boletos: 4, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" },
estelita: { nombre: "Etelita", boletos: 1, mensajepersonal: "Nos alegra tenerte como invitado 😃 😃 😃" }
};

const params =
  new URLSearchParams(window.location.search);

const codigo =
  params.get("familia");
  codigoActual = codigo;

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

    mensajefinal = 
      familiaInvitada.mensajepersonal;

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

    const mns =
      document.getElementById(
          "mensajePortada"
      );

    if(msn){
      mns.innerHTML =
      mensajefinal;
    }

  }

});

  async function guardarRespuesta(respuesta){

    try{

      await fetch(URL_SHEETS,{

        method:"POST",

        body:JSON.stringify({

          codigo: codigoActual,
          familia:familiaActual,
          boletos:boletosActuales,
          respuesta:respuesta,
          url: window.location.href

        })

      });

    }catch(error){

      console.error(error);

    }

  }
