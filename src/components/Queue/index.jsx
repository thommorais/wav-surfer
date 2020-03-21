import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Creators as actions } from '../../store/queue'

import QueueItem from './QueueItem'
import {Button} from '../formComponents'

function Queue() {
    const dispatch = useDispatch()
    const files = useSelector(state => state.queue)

    function clearStore() {
        dispatch(actions.clear())
    }

    function startQueue() {
        dispatch(actions.startQueue())
    }

    if (!files.length) {
        return null
    }

    return (
        <div className="my-6 mb-2 w-full lg:w-6/12 ">
            <ul className="songs-lists relative left-0 py-4">
                {files.sort((a, b) => a.song.localeCompare(b.song)).map(file => <QueueItem key={file.song} file={file} />)}
            </ul>
            <div className="flex justify-center items-center px-12 mt-4">
                <Button label="iniciar" onClick={startQueue} type="button" />
                <Button label="clear" onClick={clearStore} type="button" />
            </div>
        </div>
    )
}

export default Queue
