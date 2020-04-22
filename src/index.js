const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')
const ffmpegStatic = require('ffmpeg-static')
const fs = require("fs")

global.ffmpegpath = ffmpegStatic.replace('app.asar', 'app.asar.unpacked')

// Live Reload
require('electron-reload')(__dirname, {
  electron: path.join(__dirname, '../node_modules', '.bin', 'electron'),
  awaitWriteFinish: true
})

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  // eslint-disable-line global-require
  app.quit()
}

app.allowRendererProcessReuse = true

const createWindow = () => {
  // Create the browser window.
  let mainWindow = new BrowserWindow({
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
    })

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, '../public/index.html'))

  // Open the DevTools.
  if (isDev) {
      mainWindow.webContents.openDevTools()
  }

  mainWindow.on('closed', () => (mainWindow = null))
  mainWindow.on('ready-to-show', () => mainWindow.show() )

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
