// eventos  del DOM -Submit

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.querySelector("#nombre").value;

  const password = document.querySelector("#password").value;

  // prevenir nuevas alertas
  const alertaPrevia = document.querySelector(".alerta");
  if (alertaPrevia) {
    alertaPrevia.remove();
  }

  const alerta = document.createElement("DIV");

  alerta.classList.add(
    "alerta",
    "text-white",
    "uppercase",
    "text-sm",
    "text-center",
    "p-2",
    "font-black"
  );

  if (nombre === "" || password === "") {
    //console.log("Todos los campos son obligatorios ");
    alerta.textContent = "Todos los campos son obligatorios ";
    alerta.classList.add("bg-red-500");
  } else {
    alerta.textContent = "todo bien iniciando sesion... ";
    alerta.classList.add("bg-green-500");
  }
  formulario.appendChild(alerta);
  setTimeout(() => {
    alerta.remove();
  }, 3000);
  console.log(alerta);
});
