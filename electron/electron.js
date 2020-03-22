const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const isDev = require('electron-is-dev')

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        title: app.name,
        show: false,
        width: 480,
        height: 720,
        frame: true,
        transparent: true,
        titleBarStyle: 'hidden',
        webPreferences: {
            nodeIntegration: true,
            experimentalFeatures: true,
        },
    })

    const buildHTML = `file://${app.getAppPath()}/build/index.html`

    const html = isDev ? 'http://localhost:3000' : buildHTML

    mainWindow.loadURL(html)

    if (isDev) {
        mainWindow.webContents.openDevTools()
    }

    mainWindow.webContents.openDevTools()

    mainWindow.on('closed', () => (mainWindow = null))
    mainWindow.on('ready-to-show', () => mainWindow.show())
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
})
