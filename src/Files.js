import React, {useEffect, useState} from 'react'
import './build.css'
import electron from 'electron'
import { useDispatch, useSelector } from 'react-redux'

import { Creators as actions } from './store/queue'

// components
import { Input } from './components/formComponents'

function Files() {
  const [finishedQueue, setFinishedQueue] = useState(false)
  const dispatch = useDispatch()
  const files = useSelector(state => state.queue)

  function selectFiles() {
    electron.remote.dialog.showOpenDialog({
      filters: [{ name: 'Músicas', extensions: ['ogg', 'wav', 'mp3'] }],
      properties: ['openFile', 'multiSelections']
    }).then(result => dispatch(actions.set(result.filePaths))).catch(err => alert(err))
  }

  useEffect(() => {
      const isAllDone = files.filter(({ status }) => status === 'done')
      if (files.length && isAllDone.length === files.length) {
          dispatch(actions.clear())
          setFinishedQueue(true)
          setTimeout(() => setFinishedQueue(false), 2000)
      }
  }, [files, dispatch])


  if (finishedQueue) {
      return (
          <div className="h-full flex items-center" style={{minHeight: 'calc(100vh - 200px)'}} >
              <div className="success-checkmark py-10">
                  <div className="check-icon">
                      <span className="icon-line line-tip"></span>
                      <span className="icon-line line-long"></span>
                      <div className="icon-circle"></div>
                      <div className="icon-fix"></div>
                  </div>
              </div>
          </div>
      )
  }

  return (
    <>
        {!files.length && (
            <div className="w-10/12 lg:w-6/12 px-2 sm:px-8 mt-12 flex items-center" style={{minHeight: 'calc(100vh - 200px)'}} >
              <div className="w-full mt-4">
                  <Input id='files' type='file' placeholder="adicionar arquivos" onChange={selectFiles}  />
              </div>
            </div>
        )}
    </>
  )
}

export default Files
