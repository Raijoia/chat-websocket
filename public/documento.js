import { enviarTexto } from "./socket-front-documento";

const text = document.getElementById("editor-texto");

text.addEventListener("keyup", () => {
  enviarTexto(text.value);
})

function atualizaTexto(texto) {
  text.value = texto;
}

export { atualizaTexto }
