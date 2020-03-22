import path from 'path'

function getFileName(file) {
    const fileName = path.basename(file)
    const extension = path.extname(file)
    return path.basename(fileName, extension)
}


export default getFileName
