// Carrusel automático y manual
let currentIndex = 0;
const carruselInner = document.querySelector(".carrusel-inner");
const items = document.querySelectorAll(".carrusel-item");
const totalItems = items.length;

function showNextItem() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarrusel();
}

function showPrevItem() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarrusel();
}

function updateCarrusel() {
  const offset = -currentIndex * 100;
  carruselInner.style.transform = `translateX(${offset}%)`;
}

document
  .querySelector(".carrusel-control.next")
  .addEventListener("click", showNextItem);
document
  .querySelector(".carrusel-control.prev")
  .addEventListener("click", showPrevItem);

// Cambio automático cada 1 minuto y 30 segundos
setInterval(showNextItem, 60000);

// Formulario de contacto
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;

    if (nombre && email && asunto && mensaje) {
      alert(
        "Gracias por tu mensaje, " +
          nombre +
          ". Nos pondremos en contacto contigo pronto."
      );
      document.getElementById("contact-form").reset();
    } else {
      alert("Por favor, completa todos los campos del formulario.");
    }
  });
