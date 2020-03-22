import ffmpeg from 'fluent-ffmpeg'
import fs from 'fs'
import path from 'path'

const ffmpegBasePath = './node_modules/ffmpeg-static/ffmpeg'

// Setting ffmpeg path to ffmpeg binary for osx so that ffmpeg can be packaged with the app.
ffmpeg.setFfmpegPath(ffmpegBasePath)

function percentage(part, total, fixed = 2) {
    if (typeof part !== 'number' && typeof total !== 'number') {
        throw new Error('Parameter is not a number!')
    }
    return Number(((100 * part) / total).toFixed(fixed))
}

function convertToMp3({ file, onProgress, err = console.log }) {
    const fileName = path.basename(file)
    const filePath = path.dirname(file)
    const extension = path.extname(file)
    const pathToMp3 = `${filePath}/mp3`

    if (!fs.existsSync(pathToMp3)) {
        fs.mkdirSync(pathToMp3, '0744')
    }

    const outStream = fs.createWriteStream(
        `${pathToMp3}/${path.basename(fileName, extension)}.mp3`
    )
    const stats = fs.statSync(file)
    const ffmpegProcess = new ffmpeg(file)

    ffmpegProcess
        .toFormat('mp3')
        .on('error', err)
        .on('progress', progress =>
            onProgress(percentage(progress.targetSize * 10000, stats.size))
        )
        .on('end', () => onProgress(percentage(stats.size, stats.size)))
        .writeToStream(outStream, { end: true })

    return ffmpegProcess
}

export default convertToMp3
