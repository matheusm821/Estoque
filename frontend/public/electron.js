const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Cria uma janela de navegação.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.resizable= false
  win.removeMenu()
  // e carregar o index.html do aplicativo.
  
  win.loadURL ('http://localhost:3000/')
}

app.whenReady().then(createWindow)