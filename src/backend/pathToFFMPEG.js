import os from 'os'
import path from 'path'

const platform = os.platform()

function resolvePlatform() {
    switch (platform) {
        case 'aix':
        case 'freebsd':
        case 'linux':
        case 'openbsd':
        case 'android':
            return 'linux'
        case 'darwin':
        case 'sunos':
            return 'mac/ffmpeg'
        case 'win32':
            return 'win/win32/ffmpeg.exe'
        case 'win64':
            return 'win/win64/ffmpeg.exe'
        default:
            return null
    }
}

function pathToFFMPEG() {
    const osBin = resolvePlatform()
    if (!osBin) {
        throw new Error('platform not supported')
    }
    const binPath = path.resolve(__dirname, `./bin/${osBin}`)

    console.log(binPath)

    return binPath.replace('app.asar', 'app.asar.unpacked')
}

export default pathToFFMPEG
