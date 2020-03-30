import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Creators as actionsQueue } from '../../store/queue'

import dataurl from 'dataurl'
import fs from 'fs'
import path from 'path'

// modules
import convertToMp3 from '../../backend/convertToMp3'
import saveWaveform from '../../backend/saveWaveform'
import drawAudio from '../../helpers/waveform'

const convertSongToBuffer = filePath => {
    const songPromise = new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(dataurl.convert({ data, mimetype: 'audio/mp3' }))
        })
    })
    return songPromise
}

function QueueItem({ file }) {
    const [songObj, setSong] = useState({})

    const [fileName] = useState(() => {
        const fileName = path.basename(file.song)
        const extension = path.extname(file.song)
        return path.basename(fileName, extension)
    })

    const progressBar = useRef(null)
    const files = useSelector(state => state.queue)
    const dspchProgress = useDispatch()

    useEffect(() => {
        const song = files.find(e => e.song === file.song)
        setSong(song)
    }, [file, files])

    const handleProgress = useCallback(
        value => {
            if (progressBar.current) {
                requestAnimationFrame(() => {
                    const { song } = songObj
                    progressBar.current.style.setProperty(
                        '--progress',
                        value / 100
                    )
                    dspchProgress(
                        actionsQueue.updateProgress({ song, progress: value })
                    )
                    if (value === 100) {
                        dspchProgress(
                            actionsQueue.updateStatus({ song, status: 'done' })
                        )
                        dspchProgress(actionsQueue.updateQueue())
                    }
                })
            }
        },
        [dspchProgress, songObj]
    )

    useEffect(() => {
        function err(error) {
            console.error({ error })
        }

        const { song, status } = songObj

        if (status === 'current') {
            requestIdleCallback(async () => {
                const buff = await convertSongToBuffer(song)
                const wave = await drawAudio(buff)
                saveWaveform(song, JSON.stringify(wave))
            })

            requestIdleCallback(() => {
                convertToMp3({ file: song, onProgress: handleProgress, err })
                dspchProgress(
                    actionsQueue.updateStatus({ song, status: 'processing' })
                )
            })
        }
    }, [songObj.status, songObj, handleProgress, dspchProgress])

    return (
        <li className="px-12 relative py-3 text-sm leading-5">
            <div className="flex justify-between items-center">
                <span className="text-white text-xs opacity-25 capitalize">
                    {fileName.replace(/[[\]-]+/g, ' ')}
                </span>
            </div>
            <div
                className={`progressbar w-10/12 ${songObj.status}`}
                ref={progressBar}
            />
        </li>
    )
}

export default React.memo(QueueItem)
