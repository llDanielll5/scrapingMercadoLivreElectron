const { app, BrowserWindow, ipcMain } = require("electron");
const consultaML = require("./src/server/index.js");
var mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 700,
    height: 300,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });

  mainWindow.loadFile("index.html");
  mainWindow.removeMenu();
};

ipcMain.on("canal1", (e, args) => {
  if (!args) console.log("Vazio!");
  else consultaML(args);
});

app.on("ready", () => {
  createWindow();
});
