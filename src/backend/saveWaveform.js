import fs from 'fs'
import path from 'path'

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