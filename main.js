const { app, BrowserWindow, ipcMain } = require('electron')
const { log } = require('node:console')
const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1300,
    height: 900,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'js', 'preload.js'),
    }
  })

  win.loadFile('./html/index.html')
  win.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

ipcMain.handle('encode-change', (string, encode) => {
  //const iconvLite = require("iconv-lite")
  return encode
})