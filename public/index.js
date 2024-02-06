import "./socket-front-index.js"
import { adicionarDocumento } from "./socket-front-index.js"

const listaDocumento = document.getElementById("lista-documentos")
const form = document.getElementById("form-adiciona-documento")
const input = document.getElementById("input-documento")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const nomeDocumento = input.value

  adicionarDocumento(nomeDocumento)

  input.value = ""
})

function inserirLinkDocumento(nomeDocumento) {
  listaDocumento.innerHTML += `
    <a href="documento.html?nome=${nomeDocumento}" class="list-group-item list-group-item-action">
      ${nomeDocumento}
    </a>
  `
}

export { inserirLinkDocumento }
