const electron = window.require('electron')
const path = window.require('path')

import { queue } from '../stores.js'

function selectFiles() {
    return electron.remote.dialog
    .showOpenDialog({
        filters: [
            { name: 'Músicas', extensions: ['ogg', 'wav', 'mp3'] },
        ],
        properties: ['openFile', 'multiSelections'],
    }).then(result => {
        const songs = result.filePaths.map(url => {
            const fileName = path.basename(url)
            const extension = path.extname(url)
            const name = path.basename(fileName, extension)
            return { song: url, name, status: 'waiting' }
         })
         queue.update(() => songs  )
    })
    .catch(err => alert(err))
}

export default selectFiles
