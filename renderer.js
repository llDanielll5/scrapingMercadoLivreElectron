const { ipcRenderer } = require("electron");

const form = document.getElementById("formulario");
const field = document.getElementById("consulta");

form.addEventListener("submit", (e) => {
  ipcRenderer.send("canal1", field.value);
});

ipcRenderer.on("resultado", (e, item) => {
  const myNotification = new Notification("ALERTA", {
    body: `${item}`,
  });
});
