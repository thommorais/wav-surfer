const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const isDev = require('electron-is-dev')

let mainWindow

app.allowRendererProcessReuse = true

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
            webSecurity: false,
        },
        icon: path.join(__dirname, '/icons/256.png'),
    })

    mainWindow.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, '../build/index.html')}`
    )

    if (isDev) {
        mainWindow.webContents.openDevTools()
    }

    mainWindow.webContents.openDevTools()

    mainWindow.on('closed', () => (mainWindow = null))

    mainWindow.on('ready-to-show', () => {
        mainWindow.show()
    })
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
