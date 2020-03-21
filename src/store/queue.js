export const Types = {
  SET:          'queue/SET',
  CLEAR:        'queue/CLEAR',
  REMOVE:       'queue/REMOVE',
  SETWAVE:      'queue/SETWAVE',
  UPDATEQUEUE: 'queue/UPDATEQUEUE',
  STARTQUEUE: 'queue/STARTQUEUE',
  UPDATEPROGRESS: 'queue/UPDATEPROGRESS',
  SETDONE: 'queue/SETDONE',
  UPDATESTATUS: 'queue/UPDATESTATUS'
}

export const Creators = {
  set: items => ({
    type: Types.SET,
    payload: items,
  }),
  clear: () => ({
    type: Types.CLEAR,
  }),
  remove: song => ({
    type: Types.REMOVE,
    payload: song
  }),
  setWave: ({ song, wave }) => ({
    type: Types.SETWAVE,
    payload: {
      song,
      wave
    }
  }),
  updateQueue: () => ({
    type: Types.UPDATEQUEUE
  }),
  startQueue: () => ({
    type: Types.STARTQUEUE
  }),
  updateProgress: ({song, progress}) => ({
    type: Types.UPDATEPROGRESS,
    payload: {
      song,
      progress
    }
  }),
  updateStatus: ({song, status}) => ({
    type: Types.UPDATESTATUS,
    payload: {
      song,
      status
    }
  }),

}

const defaultState = []


export default function queuStore(state = defaultState, action) {
  const { payload, type } = action
  switch (type) {
    case Types.SET:
      return payload.map(url => ({ song: url, status: 'waiting' }))

    case Types.REMOVE:
      return [...state].filter(({ song }) => song !== payload.song)

    case Types.SETWAVE:
      return [...state].map(item => {
        if (item.song === payload.song) {
          item.waveform = payload.wave
        }
        return item
      })

    case Types.UPDATEQUEUE:
      const nextItem = [...state].find(({ status }) => status === 'waiting')

      if (!nextItem) {
        return state
      }

      const queue = [...state].filter(({song}) => song !== nextItem.song)
      return  [...queue, {...nextItem, status: 'current'}]

    case Types.STARTQUEUE:
      return [...state].map((item, index) => {
        if (index === 0) {
          item.status = 'current'
        }
        return item
      })

    case Types.UPDATEPROGRESS:
      return [...state].map((item) => {
        if (item.song === payload.song) {
          item.progress = payload.progress
        }
        return item
      })

    case Types.UPDATESTATUS:
      return [...state].map(item => {
        if (item.song === payload.song) {
          item.status = payload.status
        }
        return item
      })

    case Types.CLEAR:
      return []
    default:
      return state
  }
}