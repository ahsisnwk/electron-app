const { contextBridge, ipcRenderer, } = require('electron')


contextBridge.exposeInMainWorld('encode123', {
    change: (string, encode) => ipcRenderer.invoke('encode-change', string, encode)
})