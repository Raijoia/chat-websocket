import { enviarTexto, selecionarDocumento } from "./socket-front-documento.js";

const text = document.getElementById("editor-texto");
const titulo = document.getElementById("titulo-documento")

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");

titulo.textContent = nomeDocumento || "Documento sem título";

selecionarDocumento(nomeDocumento);

text.addEventListener("keyup", () => {
  enviarTexto({ texto: text.value, nomeDocumento });
})

function atualizaTexto(texto) {
  text.value = texto;
}

export { atualizaTexto }
