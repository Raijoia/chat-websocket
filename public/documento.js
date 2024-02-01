const socket = io();

const text = document.getElementById("editor-texto");

text.addEventListener("keyup", () => {
  socket.emit("texto", text.value);
})

socket.on("texto-cliente", (texto) => {
  text.value = texto;
})