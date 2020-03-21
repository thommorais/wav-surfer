
import ffmpeg  from 'fluent-ffmpeg'
import fs  from 'fs'
import path  from 'path'
import os from 'os'


const platform = os.platform()

let ffmpegPath = './bin/darwin-ffmpeg'

if(platform === 'win64'){
    ffmpegPath = './bin/win64-ffmpeg.exe'
}

if(platform === 'win32'){
    ffmpegPath = './bin/win32-ffmpeg.exe'
}

// Setting ffmpeg path to ffmpeg binary for osx so that ffmpeg can be packaged with the app.
ffmpeg.setFfmpegPath(ffmpegPath)


function percentage(part, total, fixed = 2) {
    if (typeof part !== "number" && typeof total !== "number") {
        throw new Error("Parameter is not a number!")
    }
    return Number(((100 * part) / total).toFixed(fixed))
}

function convertToWav(audio, onProgress, err = console.log) {

    const fileName  = path.basename(audio)
    const filePath  = path.dirname(audio)
    const extension = path.extname(audio)
    const pathToMp3 = `${filePath}/mp3`

    if (!fs.existsSync(pathToMp3)) {
        fs.mkdirSync(pathToMp3, '0744')
    }

    const outStream = fs.createWriteStream(`${pathToMp3}/${path.basename(fileName,extension)}.mp3`)
    const stats = fs.statSync(audio)
    const ffmpegProcess = ffmpeg(audio)

    ffmpegProcess.toFormat('mp3')
        .on('error', err)
        .on('progress', (progress) => onProgress(percentage(progress.targetSize * 10000, stats.size)))
        .on('end', () => onProgress(percentage(stats.size, stats.size)))
        .writeToStream(outStream, { end: true })

    return ffmpegProcess
}

export default convertToWav
