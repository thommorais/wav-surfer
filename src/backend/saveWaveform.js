import fs from 'fs'
import path from 'path'
import dataurl from 'dataurl'

export function convertSongToBuffer(filePath){
  const songPromise = new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) { reject(err) }
         resolve(dataurl.convert({ data, mimetype: 'audio/mp3' }))
    })
  })
  return songPromise
}

function saveWaveform(dirFilePath, content) {

    const fileName       = path.basename(dirFilePath)
    const filePath       = path.dirname(dirFilePath)
    const extension      = path.extname(dirFilePath)
    const pathToWaveform = `${filePath}/waveform`

    if (!fs.existsSync(pathToWaveform)) {
        fs.mkdirSync(pathToWaveform, '0744')
    }

    const file = `${pathToWaveform}/${path.basename(fileName, extension)}.json`
    fs.writeFileSync(file, content)

}

export default saveWaveform